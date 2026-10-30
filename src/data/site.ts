/** Facts that appear on every page. Edit them here once. */
export const site = {
  name: "Jasmine Kamara",
  description:
    "Portfolio of Jasmine Kamara: computer science and science, technology and society at Brown. Research, product and design at the edge of data, technology and society.",
  email: "jasmine_kamara@brown.edu",
  linkedin: "https://linkedin.com/in/jasmine-kamara",
  bookingHref: "https://cal.com/jasmine-kamara-gole1n",
  copyright: "©2026 Jasmine Kamara",
} as const;

/**
 * The Resume buttons (header, phone menu and footer) are switched off for now. Set this to the
 * PDF's address, for example "/resume.pdf", and all three come back.
 */
export const resumeHref: string | undefined = undefined;

/** One entry in the main navigation: a plain page link, or the Case studies dropdown. */
export type NavEntry =
  | { kind: "link"; label: string; href: string }
  /** Its list is built from the projects, so a new case study shows up here by itself. */
  | { kind: "caseStudies"; label: string };

/** The main navigation, in display order. */
export const navEntries: readonly NavEntry[] = [
  { kind: "link", label: "About", href: "/about" },
  { kind: "link", label: "Bio", href: "/bio" },
  { kind: "link", label: "Experience", href: "/experience" },
  { kind: "link", label: "Projects & Research", href: "/projects" },
  { kind: "caseStudies", label: "Case studies" },
  { kind: "link", label: "Community", href: "/community" },
  { kind: "link", label: "Contact", href: "/contact" },
];
