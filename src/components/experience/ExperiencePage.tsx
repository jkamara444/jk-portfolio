import { images } from "@/assets/images";
import { PageShell } from "@/components/layout/PageShell";
import { ThemedImage } from "@/components/ui/ThemedImage";
import { cx } from "@/lib/cx";
import { ExperienceTimeline } from "./ExperienceTimeline";
import styles from "./Experience.module.css";

export function ExperiencePage() {
  return (
    <PageShell className={styles.page}>
      <main className={cx("jk-main", styles.main)}>
        <div className="jk-label">
          <span className="jk-eyebrow">Work history</span>
        </div>
        <h1 className="jk-h1">Experience</h1>

        <ExperienceTimeline />

        <div className={styles.deco} aria-hidden="true">
          <ThemedImage
            className={styles.loop}
            dark={images.bloomLoopPink}
            light={images.bloomLoopRose}
            alt=""
            draggable={false}
          />
        </div>
      </main>
    </PageShell>
  );
}
