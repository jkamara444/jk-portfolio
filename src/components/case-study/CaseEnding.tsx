import type { CaseEnding as CaseEndingData } from "@/data/case-studies/types";
import { ActionLinks } from "./ActionLinks";
import styles from "./CaseStudy.module.css";

/** The closing band: "Thanks for reading" and what to do next. */
export function CaseEnding({ ending }: { ending: CaseEndingData }) {
  return (
    <section className={styles.ending}>
      <span className={styles.script}>{ending.script}</span>
      {ending.status && (
        <>
          {" "}
          <span className={styles.status}>{ending.status}</span>
        </>
      )}
      {ending.prompt && <p className={styles.prompt}>{ending.prompt}</p>}
      {ending.actions && (
        <div className="cta">
          <ActionLinks actions={ending.actions} />
        </div>
      )}
      {ending.note && <small className={styles.endNote}>{ending.note}</small>}
    </section>
  );
}
