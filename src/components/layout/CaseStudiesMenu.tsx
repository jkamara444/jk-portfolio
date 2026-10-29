"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { caseStudyPath, projects } from "@/data/projects";
import styles from "./SiteHeader.module.css";

/** A mouse on a wide screen opens the list by hovering (CSS); touch and the keyboard use the button. */
const HOVER_QUERY = "(hover: hover) and (min-width: 641px)";

interface CaseStudiesMenuProps {
  label: string;
  /** Position in the nav, so the phone menu can bring the rows in one after another. */
  style?: CSSProperties;
}

/**
 * "Case studies" in the nav, with a list of every case study under it.
 * Wide screens: hover opens it. Touch and keyboard: the button opens it. Phone: it opens in place
 * inside the hamburger panel. Escape or a tap outside closes it.
 */
export function CaseStudiesMenu({ label, style }: CaseStudiesMenuProps) {
  const pathname = usePathname();
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  // "Open for" one page, so moving to another page closes it without any effect.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenFor(null);
    };
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpenFor(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const onToggle = (event: MouseEvent<HTMLButtonElement>) => {
    // A real mouse click on a hover screen is left to the hover; keyboard clicks have detail 0.
    if (event.detail > 0 && window.matchMedia(HOVER_QUERY).matches) return;
    setOpenFor(open ? null : pathname);
  };

  const onCaseStudy = pathname.startsWith("/projects/");

  return (
    <div ref={rootRef} className={styles.dd} data-open={open} style={style}>
      <button
        type="button"
        className={styles.ddButton}
        data-current={onCaseStudy || undefined}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {label}
        <svg
          className={styles.ddChevron}
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 1.5l4 4 4-4" />
        </svg>
      </button>
      <div className={styles.ddPanel} id={panelId}>
        <ul>
          {projects.map((project, index) => {
            const href = caseStudyPath(project.slug);
            return (
              <li key={project.slug}>
                <Link href={href} aria-current={pathname === href ? "page" : undefined}>
                  <span className={styles.ddNumber}>{String(index + 1).padStart(2, "0")}</span>
                  {project.name}
                </Link>
              </li>
            );
          })}
          <li className={styles.ddAll}>
            <Link href="/projects">
              All projects &amp; research
              <ArrowUpRight width={12} height={12} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
