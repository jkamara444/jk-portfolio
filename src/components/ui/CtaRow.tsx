import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

interface CtaRowProps {
  className?: string;
  children: ReactNode;
}

/**
 * A row of calls to action: one button, then a pair of text links in <CtaLinks>.
 * On a phone the button gets a line to itself and the two links share the next one.
 */
export function CtaRow({ className, children }: CtaRowProps) {
  return <div className={cx("cta", "cta-split", className)}>{children}</div>;
}

/** The two text links that stay side by side. */
export function CtaLinks({ children }: { children: ReactNode }) {
  return <span className="cta-links">{children}</span>;
}
