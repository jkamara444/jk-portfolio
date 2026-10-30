"use client";

import {
  Children,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { cx } from "@/lib/cx";
import { scrollsSideways } from "@/lib/scrolls-sideways";
import { SwipeHint } from "./SwipeHint";
import styles from "./CaseStudy.module.css";

interface TabbedPanelsProps {
  /** One label per child, shown on the tab bar. */
  labels: readonly string[];
  /** The grid the children sit in on wider screens. */
  className: string;
  /** More room under the tab bar, for the taller paper notes. */
  roomy?: boolean;
  /** Also move between the panels when the reader swipes (or scrolls) sideways, not only on a tap. */
  swipe?: boolean;
  children: ReactNode;
}

/** Which side the panel comes in from, so a swipe to the left brings the next one in from the right. */
type Side = "left" | "right";

/**
 * Lays its children out as usual on a tablet or desktop. On a phone a tab bar appears above them
 * and only the chosen child is shown, which keeps long runs of cards short.
 */
export function TabbedPanels({ labels, className, roomy, swipe, children }: TabbedPanelsProps) {
  const [active, setActive] = useState(0);
  const [from, setFrom] = useState<Side | undefined>(undefined);
  const id = useId();
  const tabBar = useRef<HTMLDivElement>(null);
  const panels = Children.toArray(children);

  const select = (next: number) => {
    setFrom(next > active ? "right" : next < active ? "left" : undefined);
    setActive(next);
  };

  // Left and right arrows move between the tabs, as they do in any tab bar.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;

    const next = (active + step + panels.length) % panels.length;
    select(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
    event.preventDefault();
  };

  // The swipe handlers below live outside React's render, so they read the current tab from here.
  const activeNow = useRef(0);
  useEffect(() => {
    activeNow.current = active;
  }, [active]);

  // Swipe (or trackpad-scroll) sideways anywhere in the section to change panel.
  const count = panels.length;
  useEffect(() => {
    if (!swipe) return;

    // One step forward or back; false when there is nowhere to go, or the tab bar is hidden.
    const step = (direction: 1 | -1) => {
      if (!tabBar.current || tabBar.current.offsetParent === null) return false;
      const current = activeNow.current;
      const next = Math.max(0, Math.min(count - 1, current + direction));
      if (next === current) return false;
      setFrom(direction > 0 ? "right" : "left");
      setActive(next);
      return true;
    };

    const zone = () => tabBar.current?.closest("[data-case-body]") ?? null;
    const usable = (target: EventTarget | null) => {
      const area = zone();
      return (
        target instanceof Element &&
        !!area &&
        area.contains(target) &&
        !scrollsSideways(target, area)
      );
    };

    let start: { x: number; y: number; at: number } | null = null;

    const onStart = (event: TouchEvent) => {
      const touch = event.touches.length === 1 ? event.touches[0] : null;
      start =
        touch && usable(event.target)
          ? { x: touch.clientX, y: touch.clientY, at: Date.now() }
          : null;
    };

    const onEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0];
      const began = start;
      start = null;
      if (!began || !touch) return;

      const dx = touch.clientX - began.x;
      const dy = touch.clientY - began.y;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.6 || Date.now() - began.at > 900)
        return;
      step(dx < 0 ? 1 : -1);
    };

    let lastWheel = 0;
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) < 24 || Math.abs(event.deltaX) < Math.abs(event.deltaY) * 1.6)
        return;
      if (!usable(event.target)) return;

      const now = Date.now();
      if (now - lastWheel < 450) return;
      if (step(event.deltaX > 0 ? 1 : -1)) {
        lastWheel = now;
        event.preventDefault();
      }
    };

    document.addEventListener("touchstart", onStart, { passive: true });
    document.addEventListener("touchend", onEnd, { passive: true });
    document.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      document.removeEventListener("touchstart", onStart);
      document.removeEventListener("touchend", onEnd);
      document.removeEventListener("wheel", onWheel);
    };
  }, [swipe, count]);

  return (
    <>
      {swipe && <SwipeHint />}
      <div
        className={cx(styles.tabs, roomy && styles.tabsRoomy)}
        role="tablist"
        onKeyDown={onKeyDown}
        ref={tabBar}
      >
        {labels.map((label, i) => (
          <button
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={cx(styles.tab, i === active && styles.tabOn)}
            onClick={() => select(i)}
            key={label}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={className}>
        {panels.map((panel, i) => (
          <div
            className={cx(styles.panel, i === active && styles.panelOn)}
            data-from={i === active ? from : undefined}
            id={`${id}-panel-${i}`}
            key={i}
          >
            {panel}
          </div>
        ))}
      </div>
    </>
  );
}
