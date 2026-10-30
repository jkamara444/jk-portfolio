import type { CaseSection } from "@/data/case-studies/types";
import { CaseBlock } from "./CaseBlock";
import { sectionId, sectionNumber } from "./CaseHero";
import styles from "./CaseStudy.module.css";

interface CaseSectionViewProps {
  section: CaseSection;
  index: number;
}

/** One numbered section: a rail on the left, the content on the right. */
export function CaseSectionView({ section, index }: CaseSectionViewProps) {
  return (
    <section className={styles.section} id={sectionId(index)}>
      <div className={styles.rail}>
        <div className={styles.railNumber}>{sectionNumber(index)}</div>
        <div className={styles.railLabel}>{section.label}</div>
        <p className={styles.railHint}>{section.hint}</p>
      </div>
      <div className={styles.sectionBody} data-case-body="">
        {section.heading && <h2 className={styles.heading}>{section.heading}</h2>}
        {section.blocks.map((block, i) => (
          <CaseBlock block={block} key={i} />
        ))}
      </div>
    </section>
  );
}
