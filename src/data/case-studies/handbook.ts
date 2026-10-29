import { images } from "@/assets/images";
import { interviewDiagram, usabilityDiagram } from "./handbook-diagrams";
import type { CaseStudy } from "./types";

export const handbook: CaseStudy = {
  slug: "handbook",
  eyebrow: "Project",
  subtitle:
    "A web platform helping CS faculty and TAs bring responsible technology into the classroom.",
  actions: [
    { kind: "solid", label: "Visit Handbook Website", href: "#", arrow: true },
    { kind: "text", label: "Jump to the results", href: "#s6" },
  ],
  facts: [
    { label: "Role", value: "Developer and designer" },
    { label: "Timeline", value: "2024 – Present" },
    { label: "Partners", value: "Brown CS Department & Data Science Institute" },
    { label: "Focus", value: "Interface, accessibility, usability, implementation" },
  ],
  heroFigure: {
    image: images.c01Home,
    alt: "The Brown SRC Handbook home page",
    ratio: [1920, 870],
    caption: { label: "Fig. 01", text: "The Brown SRC Handbook home page." },
  },
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "A website that helps CS faculty and TAs bring responsible technology into their courses, built with Brown’s CS Department and Data Science Institute.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: "Responsible technology can be difficult to incorporate into computer science courses that already have a lot of technical material to cover. The Handbook makes it easier for instructors to find and adapt relevant materials for use in existing assignments.",
            },
            {
              label: "My role",
              text: "Developer and designer: interface, accessibility, usability, and code.",
            },
          ],
        },
      ],
    },
    {
      label: "Challenge",
      hint: "The problem",
      heading: "What faculty were up against",
      blocks: [
        {
          type: "challenges",
          items: [
            "Faculty and TAs wanted to incorporate responsible technology into technical CS courses but often lacked the time or resources to build material from scratch.",
            "Existing materials were scattered and could be difficult to adapt to a specific course or assignment.",
            "The platform itself needed to be accessible and easy to navigate for a wide range of users.",
          ],
        },
      ],
    },
    {
      label: "Process",
      hint: "From research to build.",
      heading: "How I worked",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Interview",
              text: "Talked to faculty, TAs, and students about how they find and use these materials.",
              diagram: interviewDiagram,
            },
            {
              title: "Test",
              text: "Ran usability tests, including with assistive technology.",
              diagram: usabilityDiagram,
            },
            {
              title: "Redesign",
              text: "Turned feedback into wireframes, clearer navigation, and accessibility fixes.",
              media: {
                image: images.c01Wireframe,
                alt: "An early wireframe of the Handbook landing page",
                ratio: [4, 3],
              },
            },
            {
              title: "Build",
              text: "Built the platform in React with the CS Department and Data Science Institute.",
              media: {
                image: images.c01Module,
                alt: "A Handbook module page with key definitions and a primer outline",
                ratio: [4, 3],
              },
            },
          ],
        },
      ],
    },
    {
      label: "Solution",
      hint: "What was made.",
      heading: "What I built",
      blocks: [
        {
          type: "solution",
          items: [
            {
              text: "A central place for materials instructors can use directly in CS courses.",
              media: {
                image: images.c01Platform,
                alt: "The Handbook curriculum page listing its focus areas",
                ratio: [4, 3],
              },
            },
            {
              text: "Reworked the interface so resources are easier to find.",
              media: {
                image: images.c01Nav,
                alt: "The Handbook navigation open on a phone",
                ratio: [4, 3],
              },
            },
            {
              text: "Accessibility fixes based on user testing.",
              media: {
                image: images.c01Access,
                alt: "The Accessibility module page",
                ratio: [4, 3],
              },
            },
          ],
        },
      ],
    },
    {
      label: "Technologies",
      hint: "Tools and methods",
      heading: "What it’s made of",
      blocks: [
        {
          type: "tech",
          groups: [
            { label: "Build", chips: ["React"] },
            { label: "Design", chips: ["Wireframes", "Navigation design"] },
            { label: "Research", chips: ["Interviews", "Usability testing"] },
            { label: "Accessibility", chips: ["Assistive technology testing"] },
          ],
        },
      ],
    },
    {
      label: "Impact",
      hint: "The results.",
      heading: "What changed",
      blocks: [
        {
          type: "stats",
          stats: [
            { value: "18", label: "CS courses supported" },
            { value: "400+", label: "Faculty and TAs" },
          ],
        },
        {
          type: "outcomes",
          items: ["The project has received funding from Google Research and PIT-UN."],
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
                "I learned that responsible-technology education works best when it fits into how technical courses are already taught rather than being treated as a separate ethics add-on.",
              ],
            },
            {
              title: "What’s next",
              paragraphs: [
                "I’ve moved on from the Handbook. Next, I’m taking the design, development, and product skills I built here into new projects and research.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "Thanks for reading",
    prompt: "Want to see it live, or talk it through?",
    actions: [
      { kind: "solid", label: "Visit Handbook Website", href: "#", arrow: true },
      { kind: "text", label: "Get in touch", href: "/contact" },
    ],
  },
  moreWork: [
    { slug: "grapevne", image: images.c02Swipe },
    { slug: "ai-gateway", image: images.c03Flow },
    { slug: "ev-battery", image: images.cover04 },
  ],
};
