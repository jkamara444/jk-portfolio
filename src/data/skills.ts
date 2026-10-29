import type { SkillIconName } from "@/components/about/skill-icons";

export interface Skill {
  label: string;
  icon: SkillIconName;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

/** Skills shown on the About page, grouped the way the page lists them. */
export const skillGroups: SkillGroup[] = [
  {
    title: "code",
    skills: [
      { label: "Python", icon: "python" },
      { label: "Java", icon: "java" },
      { label: "JavaScript", icon: "javascript" },
      { label: "SQL", icon: "sql" },
      { label: "R", icon: "r" },
      { label: "HTML/CSS", icon: "html-css" },
    ],
  },
  {
    title: "build",
    skills: [
      { label: "React", icon: "react" },
      { label: "Node.js", icon: "node-js" },
      { label: "Flask", icon: "flask" },
      { label: "MongoDB", icon: "mongodb" },
      { label: "Docker", icon: "docker" },
      { label: "Git", icon: "git" },
    ],
  },
  {
    title: "data",
    skills: [
      { label: "pandas", icon: "pandas" },
      { label: "NumPy", icon: "numpy" },
      { label: "Matplotlib", icon: "matplotlib" },
      { label: "sklearn", icon: "sklearn" },
      { label: "Jupyter", icon: "jupyter" },
    ],
  },
  {
    title: "design",
    skills: [
      { label: "Figma", icon: "figma" },
      { label: "InDesign", icon: "indesign" },
      { label: "Photoshop", icon: "photoshop" },
    ],
  },
  {
    title: "product",
    skills: [
      { label: "GTM strategy", icon: "gtm-strategy" },
      { label: "Roadmapping", icon: "roadmapping" },
      { label: "Agile", icon: "agile" },
      { label: "User interviews", icon: "user-interviews" },
      { label: "A/B testing", icon: "a-b-testing" },
      { label: "Usability tests", icon: "usability-tests" },
      { label: "Wireframes", icon: "wireframes" },
    ],
  },
  {
    title: "research",
    skills: [
      { label: "Interviews", icon: "interviews" },
      { label: "Archival work", icon: "archival-work" },
      { label: "Historical analysis", icon: "historical-analysis" },
      { label: "Comparative analysis", icon: "comparative-analysis" },
      { label: "Policy analysis", icon: "policy-analysis" },
      { label: "Modeling", icon: "modeling" },
    ],
  },
];
