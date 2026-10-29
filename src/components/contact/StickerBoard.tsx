"use client";

import type { CSSProperties } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SmartLink } from "@/components/ui/SmartLink";
import { linkStickers, type StickerTone } from "@/data/contact";
import { useDraggable } from "@/hooks/useDraggable";
import { cx } from "@/lib/cx";
import { scallopClipPath } from "@/lib/scallop";
import styles from "./Contact.module.css";

const TONE_CLASS: Record<StickerTone, string | undefined> = {
  paper: undefined,
  pink: styles.pink,
  wine: styles.wine,
};

/** Link pills and the "drag me" seal. Every sticker can be dragged around the board. */
export function StickerBoard() {
  const drag = useDraggable<HTMLElement>();

  return (
    <>
      {linkStickers.map((sticker) => (
        <SmartLink
          key={sticker.label}
          className={cx(styles.pill, TONE_CLASS[sticker.tone], "jk-surface")}
          href={sticker.href}
          style={{
            left: sticker.left,
            top: sticker.top,
            rotate: sticker.rotate,
            zIndex: sticker.zIndex,
          }}
          draggable={false}
          {...drag}
        >
          {sticker.label}
          <ArrowUpRight />
        </SmartLink>
      ))}

      <div
        className={cx(styles.round, styles.wine)}
        style={
          {
            left: "775px",
            top: "26px",
            width: "92px",
            height: "92px",
            rotate: "9deg",
            zIndex: 6,
            clipPath: scallopClipPath,
          } satisfies CSSProperties
        }
        aria-hidden="true"
        {...drag}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c.6 6.8 5.2 11.4 12 12-6.8.6-11.4 5.2-12 12-.6-6.8-5.2-11.4-12-12C6.8 11.4 11.4 6.8 12 0z" />
        </svg>
        <p className={styles.roundText}>
          drag
          <br />
          me
        </p>
      </div>
    </>
  );
}
