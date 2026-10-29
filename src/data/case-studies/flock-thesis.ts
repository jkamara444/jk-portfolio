import { images } from "@/assets/images";
import type { CaseStudy } from "./types";

export const flockThesis: CaseStudy = {
  slug: "flock-thesis",
  eyebrow: "Research",
  spacious: true,
  subtitleLead: "Whose Safety, Whose Privacy?",
  subtitle: "Examining the rise of networked license-plate surveillance.",
  actions: [
    { kind: "status", label: "In progress" },
    { kind: "text", label: "Jump to the progress", href: "#s6" },
  ],
  facts: [
    { label: "Role", value: "Researcher" },
    { label: "Timeline", value: "2026 – 2027" },
    { label: "Program", value: "Brown Science, Technology & Society" },
    { label: "Status", value: "In progress" },
  ],
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "My Science, Technology and Society honors thesis at Brown examines how Flock Safety is transforming automated license-plate readers from locally operated police tools into privately operated, networked surveillance infrastructure, with a focus on how municipal governments adopt and oversee them.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: "Flock connects its cameras into a shared network, changing how vehicle-location data is accessed and shared across jurisdictions. My research examines what that shift means for who controls the data and how decisions about its use are made by police departments, cities, private companies, and residents.",
            },
            {
              label: "My role",
              text: "Researcher studying how Flock Safety’s license plate surveillance network is governed and used by local governments and law enforcement. I combine public records research with computational analysis to examine how the system was adopted and how its use has evolved.",
            },
          ],
        },
      ],
    },
    {
      label: "Challenge",
      hint: "The problem",
      heading: "What makes this hard to see",
      blocks: [
        {
          type: "challenges",
          items: [
            "Automated license-plate readers are not new, but Flock connects cameras and vehicle-location data across jurisdictions, which changes how widely the data can be shared.",
            "Information about how these systems are purchased, configured, governed, and shared is not always easy for residents to find.",
            "Responsibility is shared among cities, police departments, private vendors, and other agencies, so it can be hard to tell who makes which decisions.",
          ],
        },
        {
          type: "tapedFigure",
          figure: {
            image: images.c06Hero,
            alt: "Diagram: cameras, Flock, police and other agencies, with the municipality and residents",
            ratio: [2, 1],
            caption: {
              label: "Fig. 01",
              text: "A simplified sketch of how data can move between cameras, police, Flock, other agencies, and the city.",
            },
          },
        },
      ],
    },
    {
      label: "Process",
      hint: "The plan so far.",
      heading: "How I’m working",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Analyze",
              text: "Analyze municipal records, police policies, contracts, budgets, council materials, and Flock documentation.",
            },
            {
              title: "Request",
              text: "File public-records requests for contracts, usage data, audit logs, and information about data sharing.",
            },
            {
              title: "Trace",
              text: "Trace the history of ALPR technology and the conditions that enabled Flock’s rapid adoption.",
            },
            {
              title: "Compare",
              text: "Compare formal policy and governance documents with how the system is configured and used in practice.",
            },
            {
              title: "Interview",
              text: "Conduct interviews and computational analysis where relevant.",
            },
          ],
        },
      ],
    },
    {
      label: "Approach",
      jumpLabel: "Solution",
      hint: "What was made.",
      heading: "How the case is built",
      blocks: [
        {
          type: "solution",
          items: [
            {
              text: "Build a detailed case study of Flock Safety in a city in Southern California.",
            },
            {
              text: "Map how data, access, and authority move between local government, law enforcement, Flock, and outside jurisdictions.",
            },
            {
              text: "Use the case to examine how a historically local police technology becomes privately operated, networked infrastructure.",
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
            {
              label: "Sources",
              chips: ["Municipal records", "Contracts", "Public-records requests"],
            },
            {
              label: "Methods",
              chips: [
                "Archival analysis",
                "Historical analysis",
                "Computational analysis",
                "Interviews",
              ],
            },
            {
              label: "Computational analysis",
              chips: ["Python", "pandas", "matplotlib", "NetworkX"],
            },
            { label: "Lens", chips: ["STS", "Surveillance", "Technology policy"] },
          ],
        },
      ],
    },
    {
      label: "Progress",
      hint: "Where the work stands.",
      heading: "Work so far",
      blocks: [
        {
          type: "outcomes",
          items: [
            "Public-records requests filed with a city in Southern California and relevant regional agencies.",
            "Historical and theoretical research underway alongside contract and policy analysis.",
          ],
        },
        {
          type: "callout",
          text: "No final findings or impact numbers yet, because the thesis is still in progress.",
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
              title: "What I’m seeing",
              paragraphs: [
                "The project has pushed me to think about surveillance less as an individual camera and more as infrastructure: who operates it, who can connect to it, how far its data travels, and who makes which decisions about it.",
              ],
            },
            {
              title: "What’s next",
              paragraphs: [
                "Complete records collection, interviews, computational analysis, and the final honors thesis.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "More to come",
    status: "In progress",
    note: "The final thesis will be posted here once it is completed.",
  },
  moreWork: [
    { slug: "handbook", image: images.c01Platform },
    { slug: "grapevne", image: images.c02Swipe },
    { slug: "ai-gateway", image: images.c03Flow },
  ],
};
