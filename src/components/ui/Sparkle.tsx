import { cx } from "@/lib/cx";

interface SparkleProps {
  /** Position and size, set by the page. */
  className?: string;
}

/** A four-point star used as a twinkling decoration. */
export function Sparkle({ className }: SparkleProps) {
  return (
    <span className={cx("spark", className)} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c.6 6.8 5.2 11.4 12 12-6.8.6-11.4 5.2-12 12-.6-6.8-5.2-11.4-12-12C6.8 11.4 11.4 6.8 12 0z" />
      </svg>
    </span>
  );
}
