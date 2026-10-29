import Image from "next/image";
import { cx } from "@/lib/cx";
import type { Project } from "@/data/projects";
import styles from "./Projects.module.css";

/** A little browser window showing the open project's cover, with its name underneath. */
export function BrowserPreview({ project }: { project: Project }) {
  const { cover, name } = project;
  const isGlobe = cover.fit === "globe";

  return (
    <figure className={styles.figure}>
      <div className={cx(styles.browser, "jk-surface")}>
        <div className={styles.browserBar}>
          <i />
          <i />
          <i />
          <span className={styles.url}>{cover.urlLabel}</span>
        </div>
        <div className={cx(styles.cover, isGlobe ? styles.globe : styles.shot)}>
          <Image src={cover.image} alt={cover.alt} draggable={false} />
        </div>
      </div>
      <figcaption className={styles.caption}>{name}</figcaption>
    </figure>
  );
}
