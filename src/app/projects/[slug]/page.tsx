import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const findProject = (slug: string) => projects.find((project) => project.slug === slug);

/** Only the seven known slugs exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};

  return { title: project.title, description: caseStudies[project.slug].subtitle };
}

export default async function CaseStudyRoute({ params }: PageProps) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  return <CaseStudyPage study={caseStudies[project.slug]} project={project} />;
}
