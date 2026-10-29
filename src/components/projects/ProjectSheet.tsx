import type { ReactNode } from "react";
import type { Project } from "@/data/projects";
import { ProjectLinks } from "./ProjectLinks";
import styles from "./Projects.module.css";

interface ProjectSheetProps {
  project: Project;
  /** "01", "02", ... shown in the corner. */
  number: string;
}

function Row({
  number,
  label,
  wide,
  children,
}: {
  number: string;
  label: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={wide ? styles.rowWide : styles.row}>
      <div className={styles.rowLabel}>
        <b>{number}</b>
        {label}
      </div>
      <div className={styles.rowValue}>{children}</div>
    </div>
  );
}

/** The graph-paper page: title, summary, context, role, outcomes and links. */
export function ProjectSheet({ project, number }: ProjectSheetProps) {
  return (
    <article className={styles.sheet} role="tabpanel" aria-label={project.title}>
      <div className={styles.sheetHead}>
        <span className={styles.crumb}>
          [ {number} / {project.kind} ]
        </span>
        <span className={styles.year}>{project.year}</span>
      </div>

      <div className={styles.columns}>
        <h2 className={styles.title}>{project.title}</h2>
        <div>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span className="jk-tagpill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <p className={styles.text}>{project.description}</p>
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.rows}>
          <Row number="01" label="Context">
            {project.context}
          </Row>
          <Row number="02" label="My role">
            {project.role}
          </Row>
          <Row number="03" label={project.outcomesLabel} wide>
            <ul className={styles.outcomes}>
              {project.outcomes.map((outcome) => (
                <li className={styles.outcome} key={outcome}>
                  {outcome}
                </li>
              ))}
            </ul>
          </Row>
          {project.methodGroups && project.methodGroups.length > 0 && (
            <Row number="04" label="Methods" wide>
              <div className={styles.methodGroups}>
                {project.methodGroups.map((group) => (
                  <div
                    className={group.label ? styles.methodGroup : styles.methodSolo}
                    key={group.label ?? group.text}
                  >
                    {group.label && <span className={styles.methodKey}>{group.label}</span>}
                    <span>{group.text}</span>
                  </div>
                ))}
              </div>
            </Row>
          )}
        </div>

        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}
