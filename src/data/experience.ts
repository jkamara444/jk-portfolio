export type ExperienceLinkStyle = "solid" | "ghost" | "quiet";

export interface ExperienceLink {
  label: string;
  href: string;
  /** solid and ghost render as buttons; quiet is a small dotted-underline text link. */
  style: ExperienceLinkStyle;
}

export interface Experience {
  id: string;
  org: string;
  /** Shorter organisation name used in the "now showing" line. */
  name: string;
  role: string;
  dates: string;
  where: string;
  kind: string;
  /** Year label under the timeline dot; its first four characters also become the big ghost year. */
  year: string;
  summary: string;
  stackLabel: string;
  stack: string[];
  links: ExperienceLink[];
  /** Short label under the timeline dot (desktop only). */
  shortName: string;
}

/** Oldest first, like frames on a film strip. The page opens on the last one. */
export const experiences: Experience[] = [
  {
    id: "brown-dsi",
    org: "Brown University Data Science Institute",
    name: "Brown Data Science Institute",
    role: "Developer & Designer, Socially Responsible Computing Handbook",
    dates: "Sep 2024 – Present",
    where: "Providence, RI",
    kind: "Product & research",
    year: "2024 – now",
    summary:
      "Develop the Socially Responsible Computing Handbook, a React-based platform that helps Brown CS faculty and TAs integrate responsible technology into their courses. The platform supports materials used across 18 courses and by more than 400 faculty members and TAs.",
    stackLabel: "Tech stack",
    stack: ["React", "HTML", "CSS", "JavaScript"],
    links: [
      { label: "Visit Website", href: "https://srch.cs.brown.edu/", style: "ghost" },
      { label: "Read Case Study", href: "/projects/handbook", style: "solid" },
    ],
    shortName: "Brown DSI",
  },
  {
    id: "brown-cs-ta",
    org: "Brown University CS Department",
    name: "Brown CS Department",
    role: "CS0111 Socially Responsible Computing Teaching Assistant",
    dates: "Sep 2024 – Present",
    where: "Providence, RI",
    kind: "Teaching",
    year: "2024 – now",
    summary:
      "Serve as the Socially Responsible Computing TA for CS0111: Computing Foundations: Data, supporting more than 150 students. I design coursework that connects technical concepts to their broader social, ethical, and policy implications.",
    stackLabel: "Focus",
    stack: ["Responsible technology", "Curriculum design"],
    links: [{ label: "Read Case Study", href: "/projects/pedagogy", style: "solid" }],
    shortName: "Brown CS TA",
  },
  {
    id: "jpm-plano",
    org: "J.P. Morgan Chase",
    name: "J.P. Morgan Chase",
    role: "AI & Data Summer Analyst",
    dates: "Jun – Aug 2025",
    where: "Plano, TX",
    kind: "Industry",
    year: "2025",
    summary:
      "Spent my first summer at Chase analyzing how customers interact with the Security Center. I used K-Means clustering and PCA to develop behavioral personas and also analyzed New York City housing data to develop a policy recommendation through Tech for Social Good and the JPMorgan Chase Institute.",
    stackLabel: "Tech stack",
    stack: ["Python", "K-Means", "PCA", "Data visualization"],
    links: [],
    shortName: "JPM Plano",
  },
  {
    id: "grapevne",
    org: "Grapevne",
    name: "Grapevne",
    role: "Product Manager & Growth",
    dates: "Aug 2025 – Present",
    where: "Cambridge, MA",
    kind: "Startup",
    year: "2025 – now",
    summary:
      "Grapevne is a social-impact startup incubated at the MIT Martin Trust Center focused on improving food accessibility for college students. I lead product and growth, using student needs and behavior to shape the platform and expand its reach across campuses.",
    stackLabel: "Tech stack",
    stack: ["Swift", "Firebase", "Figma", "A/B testing"],
    links: [
      {
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/grapevne/id6745459372",
        style: "ghost",
      },
      { label: "Read Case Study", href: "/projects/grapevne", style: "solid" },
    ],
    shortName: "Grapevne",
  },
  {
    id: "mit-station1",
    org: "MIT & Station1",
    name: "MIT & Station1",
    role: "AI Researcher",
    dates: "Sep 2025 – May 2026",
    where: "Cambridge, MA",
    kind: "Research",
    year: "2025–26",
    summary:
      "Conducted research at MIT Station1 under Dr. Ellen Spero and Dr. Christine Ortiz on the future of electric transportation. I modeled the emissions tradeoffs of expanding solid-state battery-powered electric vehicles and examined the geopolitics of the EV transition, including U.S.-China competition over battery technology and supply chains. I translated these findings into policy recommendations that considered both environmental impact and the political forces shaping EV adoption.",
    stackLabel: "Tech stack",
    stack: ["GCAM", "Python", "Machine learning methods"],
    links: [
      { label: "Read Case Study", href: "/projects/ev-battery", style: "solid" },
      {
        label: "Request Access",
        href: "mailto:jasmine_kamara@brown.edu?subject=Request%20access%3A%20EV%20Battery%20Emissions%20research%20paper&body=Hi%20Jasmine%2C%20I%27d%20love%20to%20read%20the%20full%20paper.",
        style: "quiet",
      },
    ],
    shortName: "MIT & Station1",
  },
  {
    id: "jpm-chicago",
    org: "J.P. Morgan Chase",
    name: "J.P. Morgan Chase",
    role: "AI & Data Summer Analyst",
    dates: "Jun – Aug 2026",
    where: "Chicago, IL",
    kind: "Industry",
    year: "2026",
    summary:
      "Returned to Chase for a second summer on the Focused Analytic Solutions Team, an internal consulting and analytics team that works across the firm on complex business problems. My project focused on improving customer acquisition and understanding how customers move through Chase’s website and mobile app. I used Snowflake and Adobe Customer Journey Analytics to define journey metrics and build an analytics dashboard that standardized how teams measured customer behavior and identified opportunities to improve acquisition.",
    stackLabel: "Tech stack",
    stack: ["Snowflake", "Adobe Customer Journey Analytics", "SQL"],
    links: [],
    shortName: "JPM Chicago",
  },
];
