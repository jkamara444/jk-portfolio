import { cx } from "@/lib/cx";
import type { CaseStudySlug, Project } from "@/data/projects";
import { projectNumber } from "./format";
import { ProjectSheet } from "./ProjectSheet";
import styles from "./Projects.module.css";

interface ProjectFolderProps {
  projects: readonly Project[];
  active: Project;
  activeIndex: number;
  onSelect: (slug: CaseStudySlug) => void;
}

/** A pink paper folder: a tab for each project along the top, the open one's sheet inside. */
export function ProjectFolder({ projects, active, activeIndex, onSelect }: ProjectFolderProps) {
  return (
    <section className={cx(styles.folder, "jk-surface")} aria-label="Projects">
      <div className={styles.tabs} role="tablist" aria-label="Projects">
        {projects.map((project, i) => {
          const selected = project.slug === active.slug;
          return (
            <button
              type="button"
              role="tab"
              key={project.slug}
              className={cx(styles.tab, selected && styles.tabActive)}
              aria-selected={selected}
              onClick={() => onSelect(project.slug)}
            >
              <span className={styles.tabNumber}>{projectNumber(i)}</span>
              <span className={styles.tabTitle}>{project.name}</span>
              <span className={styles.pin} aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div className={styles.body}>
        <ProjectSheet project={active} number={projectNumber(activeIndex)} />
        <div className={styles.flap} aria-hidden="true" />
      </div>
    </section>
  );
}
