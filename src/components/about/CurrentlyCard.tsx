import { currently } from "@/data/about";
import { cx } from "@/lib/cx";
import styles from "./About.module.css";

/** A sticky note with a hand-drawn checklist of what Jasmine is up to right now. */
export function CurrentlyCard() {
  return (
    <section className={cx(styles.now, "jk-surface")} aria-label="Currently">
      <div className={styles.nowHead}>
        <h2 className={styles.heading}>currently</h2>
        <p className={styles.nowUpdated}>{currently.updated}</p>
      </div>
      <ul className={styles.todo}>
        {currently.items.map((item) => (
          <li key={item.text} className={item.done ? styles.done : undefined}>
            <span className={styles.checkbox}>
              <svg
                className={styles.checkboxBox}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 4.8c5-.9 10.5-.5 15 0 .5 4.8.3 10.4-.2 14.8-5 .6-10.3.5-14.6.2-.6-5-.5-10.2-.2-15z" />
              </svg>
              {item.done && (
                <svg
                  className={styles.checkboxTick}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 13l5 5L21 4" />
                </svg>
              )}
            </span>
            <span>
              {item.text}
              {item.emphasis && (
                <>
                  {" "}
                  <i>{item.emphasis}</i>
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
