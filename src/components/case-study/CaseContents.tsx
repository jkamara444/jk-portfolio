"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "@/components/ui/Icons";
import styles from "./CaseStudy.module.css";

export interface ContentsItem {
  id: string;
  number: string;
  label: string;
}

/**
 * The table of contents as a dropdown. It only shows on phones; wider screens get the row of
 * jump pills instead. Choosing a section, pressing Escape or tapping elsewhere closes it.
 */
export function CaseContents({ items }: { items: readonly ContentsItem[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.contents} ref={rootRef}>
      <button
        type="button"
        className={styles.contentsButton}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Table of contents</span>
        <ChevronDown className={styles.contentsChevron} />
      </button>

      {open && (
        <ol className={styles.contentsList} id={listId}>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                <i>{item.number}</i> {item.label}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
