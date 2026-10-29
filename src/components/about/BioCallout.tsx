import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import styles from "./About.module.css";

/** A pill pointing at the longer bio: beside the notecard on desktop, right under it on a phone. */
export function BioCallout() {
  return (
    <div className={styles.bioCall}>
      <p className={styles.bioCallText}>Want the longer story?</p>
      <Link className={styles.bioPill} href="/bio">
        read my bio <ArrowUpRight />
      </Link>
    </div>
  );
}
