import Image from "next/image";
import { HomeHero } from "@/components/home/HomeHero";
import { PageShell } from "@/components/layout/PageShell";
import { images } from "@/assets/images";
import styles from "@/components/home/Home.module.css";

export default function HomePage() {
  return (
    <PageShell
      className={styles.home}
      grain
      overlayHeader
      lockTheme="dark"
      backdrop={
        <>
          <Image
            className={styles.heroImage}
            src={images.raftHomeHd}
            alt=""
            priority
            draggable={false}
            aria-hidden="true"
          />
          <div className={styles.shade} aria-hidden="true" />
        </>
      }
    >
      <HomeHero />
    </PageShell>
  );
}
