import { ActionLinks } from "../ActionLinks";
import { RichText } from "../RichText";
import { TabbedPanels } from "../TabbedPanels";
import type { BlockOf } from "@/data/case-studies/types";
import styles from "../CaseStudy.module.css";

export function Lead({ block }: { block: BlockOf<"lead"> }) {
  return (
    <p className={styles.lead}>
      <RichText value={block.text} />
    </p>
  );
}

export function Intro({ block }: { block: BlockOf<"intro"> }) {
  return (
    <p className={`${styles.text} ${styles.intro}`}>
      <RichText value={block.text} />
    </p>
  );
}

export function Columns({ block }: { block: BlockOf<"columns"> }) {
  return (
    <div className={styles.columns}>
      {block.items.map((item) => (
        <div key={item.label}>
          <p className={styles.kicker}>{item.label}</p>
          <p className={styles.text}>
            <RichText value={item.text} />
          </p>
        </div>
      ))}
    </div>
  );
}

export function Challenges({ block }: { block: BlockOf<"challenges"> }) {
  return (
    <TabbedPanels className={styles.challenges} labels={block.items.map((_, i) => String(i + 1))}>
      {block.items.map((item, i) => (
        <div className={styles.challenge} key={i}>
          <span className={styles.challengeNumber}>{i + 1}</span>
          <p className={styles.text}>
            <RichText value={item} />
          </p>
        </div>
      ))}
    </TabbedPanels>
  );
}

export function Outcomes({ block }: { block: BlockOf<"outcomes"> }) {
  return (
    <ul className={styles.outcomes}>
      {block.items.map((item, i) => (
        <li className={styles.outcome} key={i}>
          <RichText value={item} />
        </li>
      ))}
    </ul>
  );
}

export function Callout({ block }: { block: BlockOf<"callout"> }) {
  return (
    <div className={styles.callout}>
      <p>
        <RichText value={block.text} />
      </p>
      {block.actions && (
        <div className="cta">
          <ActionLinks actions={block.actions} />
        </div>
      )}
    </div>
  );
}

export function Notes({ block }: { block: BlockOf<"notes"> }) {
  return (
    <TabbedPanels className={styles.notes} labels={block.notes.map((note) => note.title)} roomy>
      {block.notes.map((note) => (
        <div className={`${styles.note} jk-surface`} key={note.title}>
          <span className={`tape ${styles.noteTape}`} aria-hidden="true" />
          <h3>{note.title}</h3>
          {note.paragraphs.map((paragraph, i) => (
            <p key={i}>
              <RichText value={paragraph} />
            </p>
          ))}
        </div>
      ))}
    </TabbedPanels>
  );
}
