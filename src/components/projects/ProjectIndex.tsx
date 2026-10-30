import { cx } from "@/lib/cx";
import type { CaseStudySlug, Project } from "@/data/projects";
import { numberOf } from "./format";
import styles from "./Projects.module.css";

interface ProjectIndexProps {
  projects: readonly Project[];
  activeSlug: CaseStudySlug;
  onSelect: (slug: CaseStudySlug) => void;
}

/** The side list of every project, like a table of contents. Hidden on narrow screens. */
export function ProjectIndex({ projects, activeSlug, onSelect }: ProjectIndexProps) {
  return (
    <nav className={styles.index} aria-label="All projects">
      {projects.map((project) => {
        const active = project.slug === activeSlug;
        return (
          <button
            type="button"
            key={project.slug}
            className={cx(styles.indexItem, active && styles.indexActive, active && "jk-surface")}
            aria-current={active ? "true" : undefined}
            onClick={() => onSelect(project.slug)}
          >
            <span className={styles.indexNumber}>{numberOf(project)}</span>
            <span>{project.name}</span>
            <span className={styles.indexDots} />
            <span className={styles.indexYear}>{project.year}</span>
          </button>
        );
      })}
    </nav>
  );
}
