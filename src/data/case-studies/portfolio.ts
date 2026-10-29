import { images } from "@/assets/images";
import type { CaseStudy } from "./types";

export const portfolio: CaseStudy = {
  slug: "portfolio",
  eyebrow: "Design & build",
  spacious: true,
  subtitleLead: "One system, two ways to read it.",
  subtitle:
    "A portfolio planned in wireframes, designed in Figma, and built with Claude’s help, with a dark and a light theme.",
  actions: [
    { kind: "solid", label: "See the home page", href: "/", arrow: true },
    { kind: "text", label: "Jump to the result", href: "#s4" },
  ],
  facts: [
    { label: "Role", value: "Designer and builder" },
    { label: "Timeline", value: "2026" },
    { label: "Tools", value: "Figma, Claude, HTML, CSS, JavaScript" },
    { label: "Status", value: "Ongoing" },
  ],
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "This portfolio brings my research, product, and engineering work into one place. Every project has its own case study, and the pages around them are built to be read in a couple of minutes.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: "My work spans research, product, and software, which is hard to show in a single resume line. The site needed to make those connections visible and still let someone jump straight to one project.",
            },
            {
              label: "My role",
              text: "Designer and builder. I planned the structure, wireframed every page, designed the screens in Figma, and built the site with Claude supporting the code and backend.",
            },
          ],
        },
      ],
    },
    {
      label: "Design",
      hint: "Planning, then designing.",
      heading: "From idea to screens",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Map",
              text: "Listed every page and what a visitor needs from it, then drew a wireframe for each one.",
            },
            {
              title: "Style guide",
              text: "Ideated through a style guide first, exploring colors, type, spacing, and buttons in one place before applying them across every page.",
            },
            {
              title: "Figma",
              text: "Started designing the screens in Figma, using the wireframes for structure and the style guide for color, type, spacing, and buttons.",
            },
          ],
        },
        {
          type: "tapedFigure",
          figure: {
            image: images.c07Wires,
            alt: "Wireframes of the Home, About, Projects, Experience, Community and Contact pages side by side",
            ratio: [2, 1],
            caption: { label: "Fig. 01", text: "Every page was drawn as a wireframe first." },
          },
        },
      ],
    },
    {
      label: "Build",
      hint: "From Figma to a working site.",
      heading: "Building it with Claude",
      blocks: [
        {
          type: "lead",
          text: "Once the design was settled, I built the site and used Claude to support the code and the backend.",
        },
        {
          type: "steps",
          steps: [
            {
              title: "Code",
              text: "Turned the Figma screens into working pages, with Claude helping write and debug the code.",
            },
            {
              title: "Backend",
              text: "Used Claude to support the backend work that sits behind the pages.",
            },
            {
              title: "Refine",
              text: "Checked contrast, keyboard focus, and the navigation over the animated home page, then added a light theme and a switch between the two.",
            },
          ],
        },
        {
          type: "chipRow",
          label: "Tech stack",
          chips: ["HTML", "CSS", "JavaScript", "Figma", "Claude"],
        },
      ],
    },
    {
      label: "Result",
      hint: "What it became.",
      heading: "From wireframe to site",
      blocks: [
        {
          type: "pair",
          swipe: true,
          figures: [
            {
              image: images.c07WireProjects,
              alt: "The Projects & Research wireframe",
              ratio: [4, 3],
              caption: {
                label: "Fig. 02",
                text: "The wireframe fixed the layout: a list on the left, the project folder on the right.",
              },
            },
            {
              image: images.c07FinalProjects,
              alt: "The finished Projects & Research page",
              ratio: [4, 3],
              caption: {
                label: "Fig. 03",
                text: "The finished page keeps that structure and adds the folder tabs and project index.",
              },
            },
          ],
        },
        {
          type: "outcomes",
          items: [
            "A case study for every project, plus pages for experience, community, and contact.",
            "A dark theme and a light theme, switched with the heart in the navigation.",
            "A navigation that stays readable over the animated home page, with visible keyboard focus and reduced-motion support.",
          ],
        },
      ],
    },
    {
      label: "Reflection",
      hint: "Looking back.",
      heading: "What I’d carry forward",
      blocks: [
        {
          type: "notes",
          notes: [
            {
              title: "What I learned",
              paragraphs: [
                "Drawing every page as a wireframe first kept the structure settled while the colors, type, and details kept changing.",
              ],
            },
            {
              title: "What’s next",
              paragraphs: [
                "Add the resume and live project links, keep each case study current as the work finishes, and keep refining the details.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "Thanks for reading",
    prompt: "Want to look around, or talk it through?",
    actions: [
      { kind: "solid", label: "Back to the home page", href: "/", arrow: true },
      { kind: "text", label: "Get in touch", href: "/contact" },
    ],
  },
  moreWork: [
    { slug: "handbook", image: images.c01Platform },
    { slug: "grapevne", image: images.c02Swipe },
    { slug: "flock-thesis", image: images.cover06 },
  ],
};
