import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/Icons";
import styles from "./About.module.css";

/** Desktop only: a pill pointing at the longer bio, set beside the notecard. */
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
