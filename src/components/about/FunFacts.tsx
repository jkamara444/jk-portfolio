import { funFacts } from "@/data/about";
import { cx } from "@/lib/cx";
import styles from "./About.module.css";

/** A loose pile of taped-down scraps. */
export function FunFacts() {
  return (
    <section className={styles.funFacts} aria-label="Fun facts">
      <h2 className={styles.heading}>fun facts</h2>
      <div className={styles.pile}>
        {funFacts.map((fact) => (
          <div className={cx(styles.fact, "jk-surface")} key={fact}>
            <span className="tape" aria-hidden="true" />
            <p>{fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
