import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaLinks, CtaRow } from "@/components/ui/CtaRow";
import styles from "./Home.module.css";

export function HomeHero() {
  return (
    <main className={styles.main}>
      <h1 className={styles.name}>
        <span>Jasmine</span>
        <span>Kamara</span>
      </h1>
      <CtaRow className={styles.actions}>
        <p>
          I study Computer Science and Science, Technology and Society at Brown. My work explores
          how data and technology shape society through research, product, and design.
        </p>
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
    </main>
  );
}
