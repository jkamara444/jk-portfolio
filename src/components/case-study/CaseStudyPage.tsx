import { PageShell } from "@/components/layout/PageShell";
import { projects, type Project } from "@/data/projects";
import type { CaseStudy } from "@/data/case-studies/types";
import { cx } from "@/lib/cx";
import { CaseBar } from "./CaseBar";
import { CaseEnding } from "./CaseEnding";
import { CaseHero } from "./CaseHero";
import { CaseSectionView } from "./CaseSectionView";
import { MoreWork } from "./MoreWork";
import styles from "./CaseStudy.module.css";

interface CaseStudyPageProps {
  study: CaseStudy;
  project: Project;
}

/** The page every project at /projects/<slug> shares. The words and pictures come from `study`. */
export function CaseStudyPage({ study, project }: CaseStudyPageProps) {
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <PageShell grain className={cx(styles.page, study.spacious && styles.spacious)}>
      <main className={styles.main}>
        <CaseBar project={project} next={next} />
        <CaseHero study={study} project={project} />

        {study.sections.map((section, i) => (
          <CaseSectionView section={section} index={i} key={section.label} />
        ))}

        <CaseEnding ending={study.ending} />
        <MoreWork items={study.moreWork} />
        <div className={styles.endPad} />
      </main>
    </PageShell>
  );
}
