import { cx } from "@/lib/cx";
import type { ProjectKind } from "@/data/projects";
import styles from "./Projects.module.css";

export type ProjectFilterKey = "all" | ProjectKind;

const options: readonly { key: ProjectFilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "project", label: "Projects" },
  { key: "research", label: "Research" },
];

interface ProjectFilterProps {
  value: ProjectFilterKey;
  onChange: (key: ProjectFilterKey) => void;
  shown: number;
  total: number;
}

/** "Filter work": All, Projects or Research. The tabs and the side index follow the choice. */
export function ProjectFilter({ value, onChange, shown, total }: ProjectFilterProps) {
  return (
    <div className={styles.filter}>
      <div className={styles.filterHead}>
        <span>Filter work</span>
        <span aria-live="polite">
          Showing {shown} of {total}
        </span>
      </div>
      <div className={styles.filterPills} role="group" aria-label="Filter projects">
        {options.map((option) => (
          <button
            type="button"
            key={option.key}
            className={cx("jk-pill", "jk-pill--sm")}
            aria-pressed={option.key === value}
            onClick={() => onChange(option.key)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
