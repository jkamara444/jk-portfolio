import Image from "next/image";
import Link from "next/link";
import { images } from "@/assets/images";
import { cx } from "@/lib/cx";
import { EducationTimeline } from "./EducationTimeline";
import styles from "./About.module.css";

/** The clipped sheet of graph paper: intro, name, and (on desktop) the education timeline. */
export function AboutSheet() {
  return (
    <section className={cx(styles.sheet, "jk-surface")} aria-label="About Jasmine">
      <Image src={images.clipPaperClean} alt="" draggable={false} aria-hidden="true" />
      <div className={styles.sheetContent}>
        <Image
          className={styles.seal}
          src={images.waxSealJRose}
          alt=""
          draggable={false}
          aria-hidden="true"
        />
        <p className={styles.kicker}>about me — hi, I&apos;m</p>
        <h1 className={styles.name}>Jasmine</h1>
        <svg
          className={styles.squiggle}
          viewBox="0 0 300 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 9c10-9 20 9 30 0s20 9 30 0 20 9 30 0 20 9 30 0 20 9 30 0 20 9 30 0 20 9 30 0 20 9 30 0 17 7 24 3" />
        </svg>
        <p className={styles.intro}>
          Data, design and research for the places where technology and society meet.
        </p>
        <Link className={styles.bioLink} href="/bio">
          read my bio <span aria-hidden="true">&rarr;</span>
        </Link>
        <section className={styles.education} aria-label="Education">
          <h2 className={styles.heading}>education</h2>
          <EducationTimeline />
        </section>
      </div>
    </section>
  );
}
