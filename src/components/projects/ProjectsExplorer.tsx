"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { BrowserPreview } from "./BrowserPreview";
import { ProjectFolder } from "./ProjectFolder";
import { ProjectIndex } from "./ProjectIndex";
import styles from "./Projects.module.css";

/**
 * The two halves of the page that react to the same choice: the picture and index on the left,
 * the folder on the right. The side index and the folder tabs both pick the open project.
 */
export function ProjectsExplorer() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const activeIndex = projects.findIndex((project) => project.slug === activeSlug);
  const active = projects[activeIndex];

  return (
    <>
      <section className={styles.left} aria-labelledby="projects-heading">
        <p className={styles.blurb}>Things I’ve built and researched.</p>
        <BrowserPreview project={active} />
        <ProjectIndex projects={projects} activeSlug={activeSlug} onSelect={setActiveSlug} />
      </section>

      <ProjectFolder
        projects={projects}
        active={active}
        activeIndex={activeIndex}
        onSelect={setActiveSlug}
      />
    </>
  );
}
