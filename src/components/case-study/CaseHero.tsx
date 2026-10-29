import type { Project } from "@/data/projects";
import type { CaseStudy } from "@/data/case-studies/types";
import { ActionLinks } from "./ActionLinks";
import { CaseContents } from "./CaseContents";
import { TapedFigure } from "./Figure";
import styles from "./CaseStudy.module.css";

/** Section ids are s1, s2, ... so the jump links and the section list agree. */
export const sectionId = (index: number) => `s${index + 1}`;

/** "01", "02", ... for the jump links and the rail. */
export const sectionNumber = (index: number) => String(index + 1).padStart(2, "0");

interface CaseHeroProps {
  study: CaseStudy;
  project: Project;
}

/** Title, one-line summary, jump links, buttons, the four facts and the big opening picture. */
export function CaseHero({ study, project }: CaseHeroProps) {
  return (
    <>
      <section className={styles.hero}>
        <div className="jk-eyebrow">
          {study.eyebrow} · {project.year}
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>
          {study.subtitleLead && (
            <>
              <b>{study.subtitleLead}</b>{" "}
            </>
          )}
          {study.subtitle}
        </p>

        <nav className={styles.jump} aria-label="On this page">
          {study.sections.map((section, i) => (
            <a
              className={`jk-pill ${styles.jumpLink}`}
              href={`#${sectionId(i)}`}
              key={section.label}
            >
              <i>{sectionNumber(i)}</i> {section.jumpLabel ?? section.label}
            </a>
          ))}
        </nav>

        <CaseContents
          items={study.sections.map((section, i) => ({
            id: sectionId(i),
            number: sectionNumber(i),
            label: section.jumpLabel ?? section.label,
          }))}
        />

        <div className={styles.actions}>
          <ActionLinks actions={study.actions} />
        </div>
      </section>

      <div className={styles.facts}>
        {study.facts.map((fact) => (
          <div className={styles.fact} key={fact.label}>
            <div className={styles.factLabel}>{fact.label}</div>
            <div className={styles.factValue}>{fact.value}</div>
          </div>
        ))}
      </div>

      {study.heroFigure && <TapedFigure image={study.heroFigure} />}
    </>
  );
}
