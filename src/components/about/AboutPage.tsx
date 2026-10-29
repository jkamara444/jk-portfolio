import { images } from "@/assets/images";
import { PageShell } from "@/components/layout/PageShell";
import { Bloom } from "@/components/ui/Bloom";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaLinks, CtaRow } from "@/components/ui/CtaRow";
import { AboutSheet } from "./AboutSheet";
import { BioCallout } from "./BioCallout";
import { CurrentlyCard } from "./CurrentlyCard";
import { FunFacts } from "./FunFacts";
import { PortraitCard } from "./PortraitCard";
import { SkillsSection } from "./SkillsSection";
import styles from "./About.module.css";

export function AboutPage() {
  return (
    <PageShell className={styles.page}>
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
            <FunFacts />
          </div>
          <Bloom className={styles.bloom} code={images.bloomCodePink} print={images.halftonePink} />
          <div className={styles.footer}>
            <div className={styles.footerRow}>
              <CtaRow>
                <ButtonLink href="/projects" arrow>
                  See my work
                </ButtonLink>
                <CtaLinks>
                  <ButtonLink href="/contact" variant="text">
                    Get in touch
                  </ButtonLink>
                  <ButtonLink href="/bio" variant="text">
                    Read my bio
                  </ButtonLink>
                </CtaLinks>
              </CtaRow>
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
