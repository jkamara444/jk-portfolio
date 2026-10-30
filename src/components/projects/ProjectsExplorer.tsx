"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { BrowserPreview } from "./BrowserPreview";
import { ProjectFilter, type ProjectFilterKey } from "./ProjectFilter";
import { ProjectFolder } from "./ProjectFolder";
import { ProjectIndex } from "./ProjectIndex";
import styles from "./Projects.module.css";

/**
 * The two halves of the page that react to the same choice: the picture, filter and index on the
 * left, the folder on the right. The side index and the folder tabs both pick the open project, and
 * the filter decides which projects they list.
 */
export function ProjectsExplorer() {
  const [filter, setFilter] = useState<ProjectFilterKey>("all");
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  const visible =
    filter === "all" ? projects : projects.filter((project) => project.kind === filter);
  // if the open project is filtered out, the first one still showing opens instead
  const active = visible.find((project) => project.slug === activeSlug) ?? visible[0];
  const activeIndex = projects.findIndex((project) => project.slug === active.slug);

  return (
    <>
      <section className={styles.left} aria-labelledby="projects-heading">
        <p className={styles.blurb}>Things I’ve built and researched.</p>
        <BrowserPreview project={active} />
        <ProjectFilter
          value={filter}
          onChange={setFilter}
          shown={visible.length}
          total={projects.length}
        />
        <ProjectIndex projects={visible} activeSlug={active.slug} onSelect={setActiveSlug} />
      </section>

      <ProjectFolder
        projects={visible}
        active={active}
        activeIndex={activeIndex}
        onSelect={setActiveSlug}
      />
    </>
  );
}
