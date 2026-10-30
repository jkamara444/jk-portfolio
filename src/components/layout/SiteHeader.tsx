"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { resumeHref } from "@/data/site";
import { cx } from "@/lib/cx";
import { HomeLink } from "./HomeLink";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  /** "overlay" floats the bar over a full-bleed hero image. */
  variant?: "default" | "overlay";
}

/** Widest phone width. Above it the links sit in the bar; at or below it they fold into a menu. */
const PHONE_QUERY = "(min-width: 641px)";

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const pathname = usePathname();
  const menuId = useId();
  const headerRef = useRef<HTMLElement>(null);

  // The menu is "open for" one page, so moving to another page closes it without any effect.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const close = useCallback(() => setOpenFor(null), []);

  // While open: Escape, a tap outside the bar, or growing past phone width closes it.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    const wide = window.matchMedia(PHONE_QUERY);
    const onResize = () => {
      if (wide.matches) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    wide.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      wide.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <header
      ref={headerRef}
      className={cx(styles.nav, variant === "overlay" && styles.overlay)}
      data-menu={open ? "open" : "closed"}
    >
      <HomeLink />
      <NavLinks id={menuId} menuOpen={open} onNavigate={close} />
      <div className={styles.end}>
        <ThemeToggle />
        {resumeHref && (
          <a className={styles.resume} href={resumeHref}>
            Resume
            <ArrowUpRight />
          </a>
        )}
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpenFor(open ? null : pathname)}
        >
          <span className={styles.bars} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>
    </header>
  );
}
