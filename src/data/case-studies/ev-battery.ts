import { images } from "@/assets/images";
import { mailtoHref } from "@/lib/mailto";
import type { CaseStudy } from "./types";

export const evBattery: CaseStudy = {
  slug: "ev-battery",
  eyebrow: "Research",
  subtitleLead: "Beyond the Tailpipe:",
  subtitle: "modeling the emissions tradeoffs of expanding solid-state battery-powered EVs.",
  actions: [
    {
      kind: "solid",
      label: "Request Access",
      href: mailtoHref("Request access: EV Battery Emissions research paper"),
      arrow: true,
    },
    { kind: "ghost", label: "About Station1", href: "https://www.station1.org/", arrow: true },
    { kind: "text", label: "Jump to the results", href: "#s6" },
  ],
  facts: [
    { label: "Role", value: "Researcher & project manager" },
    { label: "Timeline", value: "2025 – 2026" },
    { label: "Program", value: "Station1 at MIT, team of five" },
    { label: "Focus", value: "U.S. and China, using GCAM" },
  ],
  heroFigure: {
    image: images.c04Hero,
    alt: "GCAM transport service output by technology, United States and China",
    ratio: [2, 1],
    caption: {
      label: "Fig. 01",
      text: "GCAM output for the U.S. and China: transport service output by technology.",
    },
  },
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "Research with Station1 at MIT on the environmental impact of expanding solid-state battery electric vehicles, looking at the full battery lifecycle instead of tailpipe emissions alone.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: "Electric vehicles can reduce emissions from driving, but their overall climate impact depends on how their batteries are produced and how the electricity used to charge them is generated. Our research modeled these effects over time, focusing on EV adoption in the U.S. and China.",
            },
            {
              label: "My role",
              text: "Sociotechnical researcher on a team of five. I modified Global Change Analysis Model (GCAM) transportation scenarios, analyzed model outputs in Python, and translated the results into policy recommendations. I also acted as the team’s product manager.",
            },
          ],
        },
      ],
    },
    {
      label: "Challenge",
      hint: "The problem.",
      heading: "Why it needed asking",
      blocks: [
        {
          type: "challenges",
          items: [
            "Much of the existing research on electric vehicles did not consider the full battery lifecycle, from raw materials and manufacturing through to disposal.",
            "Without that, the environmental impact of EVs, and of newer technology like solid-state batteries, was not fully accounted for.",
            "We wanted to understand whether expanding solid-state-battery EV adoption would still create a net emissions benefit.",
          ],
        },
        {
          type: "pair",
          figures: [
            {
              image: images.c04FinalIntro,
              alt: "Slide: Introduction. Transportation accounts for over one-third of global energy-related CO2 emissions, and the environmental impacts of EVs extend beyond vehicle operation.",
              ratio: [16, 9],
              caption: {
                label: "Fig. 02",
                text: "From our final presentation: EV impacts reach beyond the tailpipe.",
              },
            },
            {
              image: images.c04FinalGap,
              alt: "Slide: Research Gap. Solid-state batteries need a deployment-scale analysis of how adoption affects CO2 emissions, gasoline displacement, and real-world EV uptake.",
              ratio: [16, 9],
              caption: {
                label: "Fig. 03",
                text: "From our final presentation: the research gap our study addresses.",
              },
            },
          ],
        },
      ],
    },
    {
      label: "Process",
      hint: "How the research ran.",
      heading: "How I worked",
      blocks: [
        {
          type: "intro",
          text: "Our team of five prepared with a one-week intensive training at MIT in data science, machine learning, and related methods. We then managed our writing and development work in Jira using agile practices, and I took on the product management role, coordinating priorities, tracking progress, and keeping the project moving forward.",
        },
        {
          type: "steps",
          steps: [
            {
              title: "Scenario",
              text: "Built a scenario modeling a 10% increase in global EV adoption beginning in 2027.",
            },
            { title: "Model", text: "Modified GCAM transportation scenarios and inputs." },
            {
              title: "Analyze",
              text: "Analyzed gasoline consumption and CO₂ outputs in Python, with particular attention to the U.S. and China.",
            },
            {
              title: "Interpret",
              text: "Interpreted the modeling results through a policy and sociotechnical lens.",
            },
          ],
        },
      ],
    },
    {
      label: "Solution",
      hint: "What was made.",
      heading: "What I developed",
      blocks: [
        {
          type: "solution",
          items: [
            {
              text: "Developed a comparative scenario for increased solid-state-battery EV adoption.",
            },
            {
              text: "Evaluated the tradeoff between avoided gasoline emissions and battery lifecycle emissions.",
            },
            {
              text: "Translated the results into recommendations around EV adoption, infrastructure, and supply-chain dependencies.",
            },
          ],
          ruled: true,
        },
        {
          type: "wide",
          figure: {
            image: images.c04FinalTransport,
            alt: "Slide: Transport Service in million passenger-km. A table of BEV and liquids service and share for China and the USA in 2030, 2050, and 2100, with notes on China, the United States, and the key contrast.",
            ratio: [16, 9],
            caption: {
              label: "Fig. 04",
              text: "Transport service by technology for China and the U.S., 2030 to 2100.",
            },
          },
        },
        {
          type: "gallery",
          images: [
            {
              image: images.c04Scope,
              alt: "Slide: Scope. EV adoption by region: North America 7.5%, South America 2.5%, Africa under 1%, Europe 17%, Asia 31%.",
              ratio: [16, 9],
            },
            {
              image: images.c04Model169,
              alt: "An excerpt of a GCAM input file with share-weights by period",
              ratio: [16, 9],
            },
            {
              image: images.c04Station1,
              alt: "The Station1 cohort on the Charles River waterfront",
              ratio: [16, 9],
              position: "50% 78%",
            },
          ],
        },
      ],
    },
    {
      label: "Technologies",
      hint: "Tools and methods.",
      heading: "What it’s made of",
      blocks: [
        {
          type: "tech",
          groups: [
            { label: "Model", chips: ["GCAM", "Systems modeling"] },
            { label: "Analysis", chips: ["Python"] },
            {
              label: "Policy",
              chips: ["Climate policy", "EV infrastructure", "Supply-chain dependencies"],
            },
            {
              label: "Lens",
              chips: [
                "Sociotechnical research",
                {
                  label: "Socially directed science & technology",
                  href: "https://www.station1.org/station1-blog/the-station1-model-of-socially-directed-science-and-technology",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Output",
      hint: "The results.",
      heading: "What came out of it",
      blocks: [
        {
          type: "outcomes",
          items: [
            "Produced a comparative analysis focused on the U.S. and China.",
            "Presented the final research at Station1.",
          ],
        },
        {
          type: "callout",
          text: "For specific emissions findings, request the final paper.",
          actions: [
            {
              kind: "solid",
              label: "Request Access",
              href: mailtoHref("Request access: EV Battery Emissions research paper"),
              arrow: true,
            },
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
                "I learned that whether a technology is “clean” depends heavily on the infrastructure, energy systems, and supply chains surrounding it. It pushed me to think about climate technologies as systems rather than isolated technical improvements.",
              ],
            },
            {
              title: "What’s next",
              paragraphs: [
                "Extend the analysis with updated battery-production assumptions and longer-term energy scenarios, with possible publication through MIT as a next step.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "Thanks for reading",
    prompt: "Want the full paper?",
    actions: [
      {
        kind: "solid",
        label: "Request Access",
        href: mailtoHref("Request access: EV Battery Emissions research paper"),
        arrow: true,
      },
      { kind: "text", label: "Get in touch", href: "/contact" },
    ],
  },
  moreWork: [
    { slug: "necropolitics", image: images.c05Collage },
    { slug: "flock-thesis", image: images.c06Map },
    { slug: "handbook", image: images.c01Platform },
  ],
};
