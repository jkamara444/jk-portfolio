import Image from "next/image";
import Link from "next/link";
import { projectNumber } from "@/components/projects/format";
import { caseStudyPath, projects } from "@/data/projects";
import type { CaseStudy } from "@/data/case-studies/types";
import styles from "./CaseStudy.module.css";
import { SwipeHint } from "./SwipeHint";

/** Three other projects to look at next, as small cards. */
export function MoreWork({ items }: { items: CaseStudy["moreWork"] }) {
  return (
    <>
      <div className={styles.moreHeader}>
        <div className="jk-eyebrow">More work</div>
        <Link className="lnk" href="/projects">
          All projects
        </Link>
      </div>

      <SwipeHint />

      <div className={styles.moreGrid}>
        {items.map(({ slug, image }) => {
          const index = projects.findIndex((project) => project.slug === slug);
          const project = projects[index];

          return (
            <Link className={`${styles.moreCard} jk-surface`} href={caseStudyPath(slug)} key={slug}>
              <div className={styles.moreThumb}>
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 820px) 100vw, 400px"
                  draggable={false}
                />
              </div>
              <div className={styles.moreRow}>
                <span>{projectNumber(index)}</span>
                <span>{project.year}</span>
              </div>
              <div className={styles.moreTitle}>{project.name}</div>
              <div className={styles.moreTags}>
                {project.tags.slice(0, 2).map((tag) => (
                  <span className="jk-tagpill" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
