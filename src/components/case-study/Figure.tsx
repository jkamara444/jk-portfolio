import Image from "next/image";
import { cssVars } from "@/lib/cssVars";
import { cx } from "@/lib/cx";
import type { CaseImage } from "@/data/case-studies/types";
import styles from "./CaseStudy.module.css";

/** A picture in a frame cropped to the proportions the data asks for. */
export function Frame({ image, className }: { image: CaseImage; className?: string }) {
  const [width, height] = image.ratio;
  const { phone } = image;

  // A picture with a phone version draws both and lets the stylesheet show the right one.
  if (phone) {
    return (
      <div
        className={cx(styles.frame, styles.hasPhone, className)}
        style={cssVars({
          "--ar": `${width} / ${height}`,
          "--ar-phone": `${phone.ratio[0]} / ${phone.ratio[1]}`,
        })}
      >
        <Image
          className={styles.onWide}
          src={image.image}
          alt={image.alt}
          fill
          sizes="(max-width: 1100px) 100vw, 900px"
          style={{ objectPosition: image.position, objectFit: image.fit }}
          draggable={false}
        />
        <Image
          className={styles.onPhone}
          src={phone.image}
          alt={image.alt}
          fill
          sizes="100vw"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div className={cx(styles.frame, className)} style={{ aspectRatio: `${width} / ${height}` }}>
      <Image
        src={image.image}
        alt={image.alt}
        fill
        sizes="(max-width: 1100px) 100vw, 900px"
        style={{ objectPosition: image.position, objectFit: image.fit }}
        draggable={false}
      />
    </div>
  );
}

export function Caption({ caption }: { caption: NonNullable<CaseImage["caption"]> }) {
  return (
    <div className={styles.caption}>
      <b>{caption.label}</b>
      <span>{caption.text}</span>
    </div>
  );
}

/** A picture with its caption underneath, if it has one. */
export function Figure({ image }: { image: CaseImage }) {
  return (
    <div>
      <Frame image={image} />
      {image.caption && <Caption caption={image.caption} />}
    </div>
  );
}

/** A big picture with a strip of tape on each top corner. */
export function TapedFigure({ image, inSection }: { image: CaseImage; inSection?: boolean }) {
  return (
    <div className={cx(styles.tapedFigure, inSection && styles.sectionFigure)}>
      <span className={cx("tape", styles.tapeLeft)} aria-hidden="true" />
      <span className={cx("tape", styles.tapeRight)} aria-hidden="true" />
      <Frame image={image} />
      {image.caption && <Caption caption={image.caption} />}
    </div>
  );
}
