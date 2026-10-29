import Image from "next/image";
import { images } from "@/assets/images";
import { PageShell } from "@/components/layout/PageShell";
import { cx } from "@/lib/cx";
import { ProjectsExplorer } from "./ProjectsExplorer";
import styles from "./Projects.module.css";

export function ProjectsPage() {
  return (
    <PageShell>
      <main className={styles.main}>
        <h1 className={cx("jk-h1", styles.heading)} id="projects-heading">
          Projects <span className={styles.amp}>&amp;</span> Research
        </h1>

        <ProjectsExplorer />

        <div className={styles.deco} aria-hidden="true">
          <Image
            className={cx(styles.bloom, "jk-dotart")}
            src={images.halftonePink}
            alt=""
            draggable={false}
          />
        </div>
      </main>
    </PageShell>
  );
}
