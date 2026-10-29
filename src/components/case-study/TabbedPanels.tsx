"use client";

import { Children, useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./CaseStudy.module.css";

interface TabbedPanelsProps {
  /** One label per child, shown on the tab bar. */
  labels: readonly string[];
  /** The grid the children sit in on wider screens. */
  className: string;
  /** More room under the tab bar, for the taller paper notes. */
  roomy?: boolean;
  children: ReactNode;
}

/**
 * Lays its children out as usual on a tablet or desktop. On a phone a tab bar appears above them
 * and only the chosen child is shown, which keeps long runs of cards short.
 */
export function TabbedPanels({ labels, className, roomy, children }: TabbedPanelsProps) {
  const [active, setActive] = useState(0);
  const id = useId();
  const panels = Children.toArray(children);

  // Left and right arrows move between the tabs, as they do in any tab bar.
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;

    const next = (active + step + panels.length) % panels.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
    event.preventDefault();
  };

  return (
    <>
      <div
        className={cx(styles.tabs, roomy && styles.tabsRoomy)}
        role="tablist"
        onKeyDown={onKeyDown}
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
            onClick={() => setActive(i)}
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
