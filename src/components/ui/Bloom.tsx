import Image, { type StaticImageData } from "next/image";
import { cx } from "@/lib/cx";
import styles from "./Bloom.module.css";

interface BloomProps {
  /** The flower drawn as dots of code. */
  code: StaticImageData;
  /** The same flower as a halftone print. */
  print: StaticImageData;
  /** Positions the bloom on its page (the component itself is position: absolute). */
  className?: string;
}

/** A decorative flower that sways while the print slowly wipes over the code version. */
export function Bloom({ code, print, className }: BloomProps) {
  return (
    <div className={cx(styles.bloom, className)} aria-hidden="true">
      <Image className={cx(styles.code, "jk-dotart")} src={code} alt="" draggable={false} />
      <Image className={cx(styles.print, "jk-dotart")} src={print} alt="" draggable={false} />
    </div>
  );
}
