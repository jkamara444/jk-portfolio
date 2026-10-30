"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface SwipeRailProps {
  className: string;
  /** What the row holds ("Steps", "Solution", ...), read out when it is focused. */
  label: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * A row of cards that scrolls sideways on a phone. While it really does scroll it gets a tab stop,
 * so a keyboard or switch user can focus it and move it with the arrow keys; where everything fits
 * (a tablet or desktop) it is plain markup again and adds nothing to the tab order.
 */
export function SwipeRail({ className, label, style, children }: SwipeRailProps) {
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;

    const sync = () => {
      if (el.scrollWidth > el.clientWidth + 1) {
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "group");
        el.setAttribute("aria-label", `${label}, scrolls sideways`);
      } else {
        el.removeAttribute("tabindex");
        el.removeAttribute("role");
        el.removeAttribute("aria-label");
      }
    };

    sync();
    const watcher = new ResizeObserver(sync);
    watcher.observe(el);
    return () => watcher.disconnect();
  }, [label]);

  return (
    <div ref={rail} className={className} style={style}>
      {children}
    </div>
  );
}
