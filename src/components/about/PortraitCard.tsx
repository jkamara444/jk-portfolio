import Image from "next/image";
import { images } from "@/assets/images";
import { cx } from "@/lib/cx";
import styles from "./About.module.css";

/** The taped-on polaroid of Jasmine, with an ink flower stuck to its corner. */
export function PortraitCard() {
  return (
    <div className={styles.side}>
      <div className={cx(styles.photo, "jk-surface")}>
        <span className="tape" aria-hidden="true" />
        <div className="ph" role="img" aria-label="Portrait of Jasmine Kamara">
          <div className={styles.photoPic} />
          <svg
            width="34"
            height="34"
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
          <span>[ Portrait ]</span>
        </div>
        <p>headshot.jpeg</p>
        <Image
          className={styles.photoFlower}
          src={images.inkFlower}
          alt=""
          draggable={false}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
