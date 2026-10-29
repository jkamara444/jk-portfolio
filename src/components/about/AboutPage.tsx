import { images } from "@/assets/images";
import { PageShell } from "@/components/layout/PageShell";
import { Bloom } from "@/components/ui/Bloom";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cx } from "@/lib/cx";
import { AboutSheet } from "./AboutSheet";
import { BioCallout } from "./BioCallout";
import { CurrentlyCard } from "./CurrentlyCard";
import { EducationTimeline } from "./EducationTimeline";
import { FunFacts } from "./FunFacts";
import { PortraitCard } from "./PortraitCard";
import { SkillsSection } from "./SkillsSection";
import styles from "./About.module.css";

export function AboutPage() {
  return (
    <PageShell>
      <main className="jk-main">
        <div className={styles.wrap}>
          <div className={styles.canvas}>
            <AboutSheet />
            <div className={styles.right}>
              <SkillsSection />
              <PortraitCard />
              <BioCallout />
              <CurrentlyCard />
            </div>
            <section className={cx(styles.educationMobile, "jk-surface")} aria-label="Education">
              <span className="tape" aria-hidden="true" />
              <h2 className={styles.heading}>education</h2>
              <EducationTimeline />
            </section>
            <FunFacts />
          </div>
          <Bloom className={styles.bloom} code={images.bloomCodePink} print={images.halftonePink} />
          <div className={styles.footer}>
            <div className={styles.footerRow}>
              <div className="cta">
                <ButtonLink href="/projects" arrow>
                  See my work
                </ButtonLink>
                <ButtonLink href="/contact" variant="text">
                  Get in touch
                </ButtonLink>
                <ButtonLink href="/bio" variant="text">
                  Read my bio
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
