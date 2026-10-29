import Image from "next/image";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import { cssVars } from "@/lib/cssVars";
import type { PlacedCard } from "./layout";
import styles from "./Community.module.css";

/** The small "turn me over" mark in the corner of every face. */
function FlipHint({ onPhoto = false }: { onPhoto?: boolean }) {
  return (
    <span className={cx(styles.hint, onPhoto && "jk-surface")} aria-hidden="true">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 4v5h-5" />
      </svg>
    </span>
  );
}

function CameraIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

/** The picture side: the photo if there is one, otherwise a placeholder to fill in later. */
function PhotoFace({ card, caption }: { card: PlacedCard; caption?: boolean }) {
  const { photo, title } = card.item;

  return (
    <div className={styles.photo}>
      {photo ? (
        <Image
          className={cx(styles.pic, photo.contain && styles.contain)}
          src={photo.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
          style={{ objectPosition: photo.position }}
          draggable={false}
        />
      ) : (
        <>
          <CameraIcon />
          <span>[ Add a photo ]</span>
        </>
      )}
      {caption && <span className={cx(styles.caption, "jk-surface")}>{title}</span>}
      <FlipHint onPhoto />
    </div>
  );
}

/** The words side: what it is, who gave it, and when. */
function TextFace({ card }: { card: PlacedCard }) {
  return (
    <div className={styles.text}>
      <FlipHint />
      <span className={styles.tag}>{card.category}</span>
      <h2 className={styles.title}>{card.item.title}</h2>
      <p className={styles.sub}>{card.subtitle}</p>
    </div>
  );
}

/**
 * A floating card that turns over on hover, tap or keyboard focus (all handled in CSS).
 * Cards with a photo open on the picture; cards without one open on the text.
 */
export function FlipCard({ card }: { card: PlacedCard }) {
  const { item } = card;
  const hasPhoto = Boolean(item.photo);
  const featuredText = !hasPhoto && item.featured;

  const front: ReactNode = hasPhoto ? <PhotoFace card={card} caption /> : <TextFace card={card} />;
  const back: ReactNode = hasPhoto ? <TextFace card={card} /> : <PhotoFace card={card} />;

  return (
    <article
      className={cx(
        styles.card,
        hasPhoto ? styles.withPhoto : styles.textOnly,
        featuredText && styles.featured,
      )}
      tabIndex={0}
      aria-label={`${item.title}, ${card.subtitle}`}
      style={cssVars({
        "--h": `${item.height}px`,
        "--span": card.span,
        "--oy": `${card.offsetY}px`,
        "--rot": `${card.tilt}deg`,
        "--dur": `${card.duration}s`,
        "--del": `${card.delay}s`,
        "--col": card.column,
        "--p1": card.gradient[0],
        "--p2": card.gradient[1],
      })}
    >
      <div className={styles.cardInner}>
        <div className={cx(styles.front, featuredText && "jk-surface")}>{front}</div>
        <div className={cx(styles.back, hasPhoto && "jk-surface")}>{back}</div>
      </div>
    </article>
  );
}
