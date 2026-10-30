import type { ReactNode } from "react";
import { MonogramDefs } from "@/components/ui/Monogram";
import { cx } from "@/lib/cx";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

interface PageShellProps {
  children: ReactNode;
  /** Page-specific class for the `.jk` root (positioning, overflow, etc.). */
  className?: string;
  /** Add the film-grain texture over the page. */
  grain?: boolean;
  /** Float the header over a hero image. */
  overlayHeader?: boolean;
  /** Keep this page on the dark palette even when the site is in light mode. */
  lockTheme?: "dark";
  /** Rendered before the header, e.g. a full-bleed background image. */
  backdrop?: ReactNode;
}

/** Wraps a page in the shared `.jk` root with the header and footer around it. */
export function PageShell({
  children,
  className,
  grain,
  overlayHeader,
  lockTheme,
  backdrop,
}: PageShellProps) {
  return (
    <div className={cx("jk", grain && "grain", className)} data-theme-lock={lockTheme}>
      <MonogramDefs />
      {backdrop}
      <SiteHeader variant={overlayHeader ? "overlay" : "default"} />
      {children}
      <SiteFooter />
    </div>
  );
}
