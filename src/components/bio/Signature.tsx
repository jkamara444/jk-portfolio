import styles from "./Bio.module.css";

/** "with love, Jasmine Kamara": the name writes itself on, then a swoosh and heart are drawn under it. */
export function Signature() {
  return (
    <div className={styles.signature}>
      <p className={styles.signOff}>with love,</p>
      <div className={styles.sigWrap}>
        <svg
          className={styles.swoosh}
          viewBox="0 0 440 34"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className={styles.swooshLine} d="M4 24 C 70 4, 160 34, 250 16 S 370 14, 410 18" />
          <path
            className={styles.swooshHeart}
            d="M424 12 C 417 6, 409 10, 411 16 C 412.5 20, 418 22.500, 424 27 C 430 22.500, 435.500 20, 437 16 C 439 10, 431 6, 424 12 Z"
          />
        </svg>
        <span className={styles.sigName}>Jasmine Kamara</span>
      </div>
    </div>
  );
}
