/** Facts that appear on every page. Edit them here once. */
export const site = {
  name: "Jasmine Kamara",
  description:
    "Portfolio of Jasmine Kamara: computer science and science, technology and society at Brown. Research, product and design at the edge of data, technology and society.",
  email: "jasmine_kamara@brown.edu",
  linkedin: "https://linkedin.com/in/jasmine-kamara",
  /** Placeholder until the resume PDF is published. */
  resumeHref: "#",
  copyright: "©2026 Jasmine Kamara",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

/** The main navigation, in display order. */
export const navItems: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Bio", href: "/bio" },
  { label: "Experience", href: "/experience" },
  { label: "Projects & Research", href: "/projects" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];
