"use client";

import Image from "next/image";
import { images } from "@/assets/images";
import { useDraggable } from "@/hooks/useDraggable";
import { cx } from "@/lib/cx";
import styles from "./Bio.module.css";

/** Stickers only come off the board on wide screens, where the collage sits beside the text. */
const isWideScreen = () => window.innerWidth > 1100;

/** The cut-out photo of Jasmine, which can be dragged around the collage. */
export function DraggablePhoto() {
  const drag = useDraggable<HTMLElement>({ enabled: isWideScreen });

  return (
    <figure className={cx(styles.card, styles.me)} {...drag}>
      <Image
        src={images.bioMeCut}
        alt="Jasmine smiling, one hand raised as if presenting something"
        draggable={false}
      />
    </figure>
  );
}
