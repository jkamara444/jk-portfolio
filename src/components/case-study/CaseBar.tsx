import Link from "next/link";
import { caseStudyPath, type Project } from "@/data/projects";
import styles from "./CaseStudy.module.css";

/** The line above the title: a way back to all projects, and a link to the next one. */
export function CaseBar({ project, next }: { project: Project; next: Project }) {
  return (
    <div className={styles.bar}>
      <span>
        <Link href="/projects">← Projects &amp; Research</Link>
        <span className={styles.separator}>/</span>
        <b>{project.name}</b>
      </span>
      <span>
        <Link href={caseStudyPath(next.slug)}>Next: {next.name} →</Link>
      </span>
    </div>
  );
}
