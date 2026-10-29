import { education } from "@/data/about";
import styles from "./About.module.css";

/** The dotted education timeline, written on the notecard at every screen size. */
export function EducationTimeline() {
  return (
    <ul className={styles.timeline}>
      {education.map((entry) => (
        <li key={entry.title}>
          <time>{entry.when}</time>
          <h3>{entry.title}</h3>
          <p>
            {entry.place}
            {entry.note && <span className={styles.subtitle}>{entry.note}</span>}
          </p>
        </li>
      ))}
    </ul>
  );
}
