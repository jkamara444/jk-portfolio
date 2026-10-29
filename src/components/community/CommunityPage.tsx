import { images } from "@/assets/images";
import { PageShell } from "@/components/layout/PageShell";
import { Bloom } from "@/components/ui/Bloom";
import { cx } from "@/lib/cx";
import { CommunityGallery } from "./CommunityGallery";
import styles from "./Community.module.css";

export function CommunityPage() {
  return (
    <PageShell className={styles.page}>
      <main className={cx("jk-main", styles.main)}>
        <h1 className={cx("jk-h1", styles.heading)}>
          Awards, Scholarships <span className={styles.amp}>&amp;</span>&nbsp;Community
        </h1>

        <CommunityGallery />

        <div className={styles.deco} aria-hidden="true">
          <Bloom className={styles.bloom} code={images.bloomCodePink} print={images.halftonePink} />
        </div>
      </main>
    </PageShell>
  );
}
