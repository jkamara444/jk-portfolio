import styles from "./CaseStudy.module.css";

/** A small "swipe" label above a row of cards that scrolls sideways on a phone. Hidden above that. */
export function SwipeHint() {
  return (
    <p className={styles.hint} aria-hidden="true">
      swipe
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </p>
  );
}
