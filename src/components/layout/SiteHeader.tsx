import { ArrowUpRight } from "@/components/ui/Icons";
import { site } from "@/data/site";
import { cx } from "@/lib/cx";
import { HomeLink } from "./HomeLink";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

interface SiteHeaderProps {
  /** "overlay" floats the bar over a full-bleed hero image. */
  variant?: "default" | "overlay";
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  return (
    <header className={cx(styles.nav, variant === "overlay" && styles.overlay)}>
      <HomeLink />
      <NavLinks />
      <div className={styles.end}>
        <ThemeToggle />
        <a className={styles.resume} href={site.resumeHref}>
          Resume
          <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
