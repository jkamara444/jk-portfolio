import { images } from "@/assets/images";
import { PageShell } from "@/components/layout/PageShell";
import { ThemedImage } from "@/components/ui/ThemedImage";
import { contactCopy } from "@/data/contact";
import { site } from "@/data/site";
import { cx } from "@/lib/cx";
import { MailLink } from "./MailLink";
import { StickerBoard } from "./StickerBoard";
import styles from "./Contact.module.css";

export function ContactPage() {
  return (
    <PageShell className={styles.page}>
      <main className={cx("jk-main", styles.main)}>
        <div className={styles.top}>
          <div>
            <div className="jk-label">
              <span className="jk-eyebrow">{contactCopy.eyebrow}</span>
            </div>
            <h1 className="jk-h1">{contactCopy.title}</h1>
          </div>
          <p className={cx("jk-desc", styles.open)}>{contactCopy.open}</p>
        </div>

        <div className={styles.stage}>
          <div className={styles.flock} aria-hidden="true">
            <ThemedImage
              className={cx(styles.bird, styles.birdA)}
              dark={images.birdsDots}
              light={images.birdsRose}
              alt=""
              draggable={false}
            />
            <ThemedImage
              className={cx(styles.bird, styles.birdB)}
              dark={images.birdsDots}
              light={images.birdsRose}
              alt=""
              draggable={false}
            />
          </div>
          <div className={styles.flower} aria-hidden="true">
            <ThemedImage
              className={styles.flowerImage}
              dark={images.flower}
              light={images.flowerRose}
              alt=""
              draggable={false}
            />
          </div>
          <StickerBoard />
        </div>

        <div className={styles.mailWrap}>
          <p className={styles.mailLabel}>{contactCopy.mailLabel}</p>
          <MailLink email={site.email} />
        </div>
      </main>
    </PageShell>
  );
}
