import { projects, type Project } from "@/data/projects";

/** 0 → "01", 6 → "07". */
export function projectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

/** A project's number in the full list, so "03" stays "03" while a filter hides its neighbours. */
export function numberOf(project: Project) {
  return projectNumber(projects.findIndex((candidate) => candidate.slug === project.slug));
}
