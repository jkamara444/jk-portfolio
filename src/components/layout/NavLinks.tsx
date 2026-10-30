"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@/components/ui/Icons";
import { navEntries, resumeHref } from "@/data/site";
import { cssVars } from "@/lib/cssVars";
import { CaseStudiesMenu } from "./CaseStudiesMenu";
import styles from "./SiteHeader.module.css";

interface NavLinksProps {
  /** Id of the nav, so the menu button can point at it. */
  id: string;
  /** Whether the phone menu is open. The Case studies list folds back up whenever it changes. */
  menuOpen: boolean;
  /** Called when a link inside the nav is tapped (closes the phone menu). */
  onNavigate: () => void;
}

/** The page links. On a phone this same nav becomes the dropdown panel, with Resume at the bottom once it is switched on. */
export function NavLinks({ id, menuOpen, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      id={id}
      className={styles.links}
      aria-label="Primary"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) onNavigate();
      }}
    >
      {navEntries.map((entry, index) =>
        entry.kind === "link" ? (
          <Link
            key={entry.href}
            href={entry.href}
            aria-current={pathname === entry.href ? "page" : undefined}
            style={cssVars({ "--i": index })}
          >
            {entry.label}
          </Link>
        ) : (
          <CaseStudiesMenu
            key={menuOpen ? "menu-open" : "menu-closed"}
            label={entry.label}
            style={cssVars({ "--i": index })}
          />
        ),
      )}
      {resumeHref && (
        <a
          className={styles.resumeInMenu}
          href={resumeHref}
          style={cssVars({ "--i": navEntries.length })}
        >
          Resume
          <ArrowUpRight />
        </a>
      )}
    </nav>
  );
}
