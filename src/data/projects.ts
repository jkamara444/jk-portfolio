import type { StaticImageData } from "next/image";
import { images } from "@/assets/images";
import { mailtoHref } from "@/lib/mailto";

/** Each project has one case-study page at /projects/<slug>. */
export type CaseStudySlug =
  | "handbook"
  | "grapevne"
  | "ai-gateway"
  | "ev-battery"
  | "necropolitics"
  | "flock-thesis"
  | "portfolio";

export function caseStudyPath(slug: CaseStudySlug) {
  return `/projects/${slug}`;
}

export type ProjectKind = "project" | "research";

export type ProjectLink =
  /** A pill button. "solid" is the filled one; "outline" sits beside it. */
  | { kind: "solid" | "outline"; label: string; href: string }
  /** A small dotted-underline link for things that are available on request. */
  | { kind: "request"; label: string; href: string }
  /** A pulsing pill that says where the work stands. It is not clickable. */
  | { kind: "status"; label: string };

export interface ProjectCover {
  image: StaticImageData;
  /** Describes the picture for screen readers. */
  alt: string;
  /** What the little browser bar above the picture says. */
  urlLabel: string;
  /** "globe" centres the picture on black instead of cropping it to fill the frame. */
  fit?: "globe";
}

export interface Project {
  /** Also the case study's URL: /projects/<slug>. */
  slug: CaseStudySlug;
  /** Short name used on the tab and in the side index. */
  name: string;
  title: string;
  kind: ProjectKind;
  year: string;
  tags: string[];
  description: string;
  context: string;
  role: string;
  /** Heading for the list below: "Impact", "Takeaways", "Emerging argument", etc. */
  outcomesLabel: string;
  outcomes: string[];
  /** Optional fourth row for research projects. */
  methods?: string;
  links: ProjectLink[];
  cover: ProjectCover;
}

const requestAccessHref = mailtoHref(
  "Request access: EV Battery Emissions research paper",
  "Hi Jasmine, I'd love to read the full paper.",
);

/**
 * In display order. Links that point to "#" are placeholders until the real page exists
 * (the Handbook website and the research paper).
 */
export const projects: readonly Project[] = [
  {
    slug: "handbook",
    name: "CS Ethics Handbook",
    title: "Socially Responsible Computing Handbook",
    kind: "project",
    year: "2024 – Present",
    tags: ["React", "Full-stack development", "Accessibility", "Responsible technology"],
    description:
      "A React-based handbook built with Brown’s Computer Science Department and Data Science Institute to help faculty and TAs integrate responsible technology and sociotechnical thinking into CS courses.",
    context:
      "Responsible technology can be difficult to incorporate into computer science courses that already have a lot of technical material to cover. The Handbook makes it easier for instructors to find and adapt relevant materials for use in existing assignments.",
    role: "Developer and designer working across the platform’s interface, accessibility, usability, and implementation.",
    outcomesLabel: "Impact",
    outcomes: [
      "Supports responsible technology materials across 18 CS courses and 400+ faculty and TAs",
      "Conducted 15+ interviews and usability tests, including accessibility testing with assistive technologies",
      "Translated user feedback into interface changes, wireframes, and accessibility improvements",
      "Received funding from Google Research and PIT-UN, allowing the team to scale from 5 to over 25 students",
    ],
    links: [
      { kind: "outline", label: "Visit Website", href: "#" },
      { kind: "solid", label: "Read Case Study", href: caseStudyPath("handbook") },
    ],
    cover: {
      image: images.handbookCurriculum,
      alt: "Screenshot of the Brown SRC Handbook",
      urlLabel: "srch.cs.brown.edu",
    },
  },
  {
    slug: "grapevne",
    name: "Grapevne Food App",
    title: "Grapevne Food-Sharing App",
    kind: "project",
    year: "2025 – Present",
    tags: ["Product", "Growth", "Swift", "Firebase", "Figma", "A/B testing"],
    description:
      "Grapevne is a social-impact startup incubated at the MIT Martin Trust Center that makes it easier for people and communities to share food.",
    context:
      "As an early-stage platform, Grapevne needed to build an engaging MVP while figuring out what would bring users back and help the product spread across college campuses.",
    role: "Product and growth: user research, product strategy, Figma prototyping, experimentation, app development, and university partnerships.",
    outcomesLabel: "Impact",
    outcomes: [
      "Helped grow the platform to 2,000+ users with 68% monthly retention",
      "Iterated on a swipe-based food discovery experience through prototyping and A/B testing",
      "Built and maintained Grapevne’s mobile app using Swift and Firebase",
      "Secured partnerships with 10+ Ivy League and East Coast universities",
    ],
    links: [
      { kind: "outline", label: "Visit Website", href: "https://grapevneapp.com/" },
      { kind: "solid", label: "Read Case Study", href: caseStudyPath("grapevne") },
    ],
    cover: {
      image: images.c02Swipe,
      alt: "The Grapevne swipe home screen",
      urlLabel: "grapevneapp.com",
    },
  },
  {
    slug: "ai-gateway",
    name: "AI Safety Gateway",
    title: "AI Safety Prompt Gateway",
    kind: "project",
    year: "2026",
    tags: ["AI governance", "NLP", "RAG", "Python", "scikit-learn"],
    description:
      "A prompt gateway that identifies risky requests before they reach an LLM and uses semantic similarity to route eligible queries more efficiently. The system was developed through Break Through Tech in collaboration with the Cornell AI Governance Program.",
    context:
      "Organizations using LLMs in customer-facing or regulated settings need a way to identify unsafe requests without slowing down the user experience or driving up costs.",
    role: "Built and evaluated the gateway in Python using scikit-learn, retrieval-based methods, and semantic similarity, with a focus on balancing safety and efficiency.",
    outcomesLabel: "Impact",
    outcomes: [
      "Achieved 80%+ F1 on prompt-risk classification",
      "Reduced input token usage by 30–50% for eligible customer-service queries while maintaining response relevance",
      "Evaluated routing and caching strategies across safety, model performance, token usage, cost, and cache-hit rate",
    ],
    links: [
      {
        kind: "outline",
        label: "View Code",
        href: "https://github.com/Break-Through-Tech/AI-Governance-1A-governed-prompt-gateway",
      },
      { kind: "solid", label: "Read Case Study", href: caseStudyPath("ai-gateway") },
    ],
    cover: {
      image: images.c03Flow,
      alt: "Diagram of the AI safety gateway",
      urlLabel: "github.com/Break-Through-Tech",
    },
  },
  {
    slug: "ev-battery",
    name: "EV Battery Emissions",
    title: "EV Battery Emissions",
    kind: "research",
    year: "2025 – 2026",
    tags: ["GCAM", "Python", "Climate policy", "Systems modeling"],
    description:
      "Research with MIT Station1 examining whether the emissions avoided through greater electric vehicle adoption outweigh the lifecycle emissions associated with producing and disposing of solid-state batteries.",
    context:
      "Electric vehicles can reduce emissions from driving, but their overall climate impact depends on how their batteries are produced and how the electricity used to charge them is generated. Our research modeled these effects over time, focusing on EV adoption in the U.S. and China.",
    role: "Sociotechnical researcher: modified Global Change Analysis Model (GCAM) transportation scenarios, analyzed model outputs in Python, and translated the results into policy recommendations.",
    outcomesLabel: "Impact",
    outcomes: [
      "Modeled the effects of a 10% increase in global EV adoption beginning in 2027",
      "Analyzed gasoline consumption and CO₂ outcomes with a focus on the U.S. and China",
      "Developed policy recommendations around EV adoption, infrastructure, and supply-chain dependencies",
      "Presented the team’s final findings at Station1",
    ],
    links: [
      { kind: "solid", label: "Read Case Study", href: caseStudyPath("ev-battery") },
      { kind: "outline", label: "Final Research Paper", href: "#" },
      {
        kind: "request",
        label: "Request Access",
        href: requestAccessHref,
      },
    ],
    cover: {
      image: images.cover04,
      alt: "GCAM transport output chart",
      urlLabel: "paper link coming soon",
    },
  },
  {
    slug: "necropolitics",
    name: "Technology & Necropolitics",
    title: "Technology & Necropolitics",
    kind: "research",
    year: "2026",
    tags: ["STS", "Digital humanities", "Figma", "Interactive design"],
    description:
      "A digital humanities research project developed during my study abroad across New York, Ghana, Mexico, and Indonesia.",
    context:
      "The project examines necropolitics and how both historical and emerging technologies can reproduce structural violence.",
    role: "Researcher and designer: combined archival research, field observations, memorial and site analysis, Africana Studies and Science, Technology and Society scholarship, and interactive storytelling.",
    outcomesLabel: "Takeaways",
    outcomes: [
      "Examined how architecture, infrastructure, surveillance, and other technologies can distribute risk unevenly and reinforce existing structures of power.",
      "Connected these questions to slavery and its legacies in Ghana, Indigenous resistance and border surveillance in Mexico, and tourism, extraction, and governance in Indonesia",
      "Designed and published the research as an interactive digital humanities website",
    ],
    links: [{ kind: "solid", label: "Read Case Study", href: caseStudyPath("necropolitics") }],
    cover: {
      image: images.globeDots,
      alt: "A turning globe made of dots",
      urlLabel: "research site coming soon",
      fit: "globe",
    },
  },
  {
    slug: "flock-thesis",
    name: "Flock Safety Thesis",
    title: "Flock Safety and Municipal Surveillance",
    kind: "research",
    year: "2026 – 2027",
    tags: ["STS", "Surveillance", "Technology policy", "Python"],
    description:
      "My Science, Technology and Society honors thesis at Brown examines how Flock Safety is transforming automated license-plate readers from locally operated police tools into privately operated, networked surveillance infrastructure.",
    context:
      "Flock connects its cameras into a shared network, changing how vehicle-location data is accessed and shared across jurisdictions. My research examines what that shift means for who controls the data and how decisions about its use are made by police departments, cities, private companies, and residents.",
    role: "Researcher studying how Flock Safety’s license plate surveillance network is governed and used by local governments and law enforcement. I combine public records research with computational analysis to examine how the system was adopted and how its use has evolved.",
    outcomesLabel: "Emerging argument",
    outcomes: [
      "License-plate readers used to be local police tools, and Flock has turned them into a privately run, networked system",
      "That changes who can see vehicle-location data, how far it travels, and who is responsible for it",
      "The project compares what policies say should happen with how the system is configured and used in practice",
    ],
    methods:
      "Documentary and discourse analysis, public records research, interviews, pandas, matplotlib, NetworkX",
    links: [
      { kind: "solid", label: "View Case Study", href: caseStudyPath("flock-thesis") },
      { kind: "status", label: "In Progress" },
    ],
    cover: {
      image: images.cover06,
      alt: "Diagram of data and authority around Flock",
      urlLabel: "thesis page coming soon",
    },
  },
  {
    slug: "portfolio",
    name: "This Portfolio",
    title: "Building This Portfolio",
    kind: "project",
    year: "2026",
    tags: ["Design", "Figma", "Front-end", "Accessibility"],
    description:
      "This portfolio brings my research, product, and engineering work into one place. Every project has its own case study, and the pages around them are built to be read in a couple of minutes.",
    context:
      "My work spans research, product, and software, which is hard to show in a single resume line. The site needed to make those connections visible and still let someone jump straight to one project.",
    role: "Designer and builder: information architecture, wireframes, visual design in Figma, accessibility, and implementation with Claude supporting the code and backend.",
    outcomesLabel: "What it includes",
    outcomes: [
      "Wireframes for every page",
      "A style guide for color, type, spacing, and buttons, with a dark theme and a light theme",
      "Screens designed in Figma, then built with Claude supporting the code and backend",
    ],
    methods:
      "Wireframing, style guide, Figma, Claude-assisted development, HTML, CSS, JavaScript, contrast and keyboard-focus checks",
    links: [{ kind: "solid", label: "View Case Study", href: caseStudyPath("portfolio") }],
    cover: {
      image: images.cover07,
      alt: "The home page of this portfolio",
      urlLabel: "this portfolio",
    },
  },
];
