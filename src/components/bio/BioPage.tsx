import Link from "next/link";
import { images } from "@/assets/images";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Sparkle } from "@/components/ui/Sparkle";
import { ThemedImage } from "@/components/ui/ThemedImage";
import { bioGreeting, bioParagraphs } from "@/data/bio";
import { cx } from "@/lib/cx";
import { DraggablePhoto } from "./DraggablePhoto";
import { Keyboard } from "./Keyboard";
import { Signature } from "./Signature";
import styles from "./Bio.module.css";

export function BioPage() {
  return (
    <PageShell className={styles.page}>
      <main className={cx("jk-main", styles.main)}>
        <div className={styles.crumb}>
          <span>
            <Link href="/about">&larr; About</Link>
            <span className={styles.sep}>/</span>
            <b>Bio</b>
          </span>
        </div>

        <div className={styles.grid}>
          <div>
            <h1 className={styles.heading}>
              {bioGreeting.word} <span className={styles.script}>{bioGreeting.script}</span>
            </h1>
            <p className={styles.gloss}>{bioGreeting.gloss}</p>
            {bioParagraphs.map((paragraph) => (
              <p className={styles.paragraph} key={paragraph}>
                {paragraph}
              </p>
            ))}

            <Signature />

            <div className={cx("cta", styles.actions)}>
              <ButtonLink href="/projects" arrow>
                See my work
              </ButtonLink>
              <ButtonLink href="/contact" variant="text">
                Get in touch
              </ButtonLink>
              <ButtonLink href="/about" variant="text">
                Back to about
              </ButtonLink>
            </div>
          </div>

          <div className={styles.stage}>
            <ThemedImage
              className={styles.digits}
              dark={images.bioDigitsDk}
              light={images.bioDigitsLt}
              alt=""
              draggable={false}
              aria-hidden="true"
            />
            <DraggablePhoto />
            <Keyboard />
            <Sparkle className={cx(styles.spark, styles.spark1)} />
            <Sparkle className={cx(styles.spark, styles.spark2)} />
          </div>
        </div>
      </main>
    </PageShell>
  );
}
