import { images } from "@/assets/images";
import { mailtoHref } from "@/lib/mailto";
import type { CaseStudy } from "./types";

export const necropolitics: CaseStudy = {
  slug: "necropolitics",
  eyebrow: "Research",
  subtitle:
    "How technologies connect to power, violence, and social death in Ghana, Mexico, and Indonesia.",
  actions: [
    {
      kind: "solid",
      label: "Request Access to View Website",
      href: mailtoHref("Request access: Technology & Necropolitics website"),
      arrow: true,
    },
  ],
  facts: [
    { label: "Role", value: "Researcher & designer" },
    { label: "Timeline", value: "2026" },
    { label: "Program", value: "School for International Training, Sociology & Necropolitics" },
    { label: "Places", value: "New York, Ghana, Mexico, Indonesia" },
  ],
  heroFigure: {
    image: images.c05Hero,
    alt: "The opening screen of the Technologies of Death site",
    ratio: [2, 1],
    caption: {
      label: "Fig. 01",
      text: "The opening screen of the interactive site, Technologies of Death.",
    },
  },
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "A digital humanities research project developed during my study abroad across New York, Ghana, Mexico, and Indonesia. I examined how technologies that appear neutral can contribute to premature or social death when embedded within racial, colonial, political, and economic systems.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: [
                "The project examines ",
                { text: "necropolitics", href: "https://en.wikipedia.org/wiki/Necropolitics" },
                " and how both historical and emerging technologies can reproduce structural violence. Necropolitics is Achille Mbembe’s term for the power to decide who may live and who is exposed to death.",
              ],
            },
            {
              label: "My role",
              text: "Researcher and designer: combined archival research, field observations, memorial and site analysis, Africana Studies and Science, Technology and Society (STS) scholarship, and interactive storytelling.",
            },
          ],
        },
      ],
    },
    {
      label: "Challenge",
      hint: "The problem",
      heading: "What I wanted to understand",
      blocks: [
        {
          type: "challenges",
          items: [
            "Technologies are often treated as neutral even when they operate within unequal racial, colonial, political, and economic systems.",
            "I wanted to understand how very different technologies could contribute to vulnerability, exclusion, or premature and social death.",
            "I also needed a way to connect research across multiple countries without flattening their different histories and contexts.",
          ],
        },
        {
          type: "pair",
          figures: [
            {
              image: images.c05Door,
              alt: "The Door of No Return at Cape Coast Castle, Ghana",
              ratio: [4, 3],
              position: "50% 20%",
              caption: {
                label: "Fig. 02",
                text: "The Door of No Return at Cape Coast Castle, Ghana, as featured on the site.",
              },
            },
            {
              image: images.c05Source,
              alt: "A page of the site retelling Olaudah Equiano’s account",
              ratio: [4, 3],
              caption: {
                label: "Fig. 03",
                text: "Olaudah Equiano’s account, as retold on the site.",
              },
            },
          ],
        },
      ],
    },
    {
      label: "Process",
      hint: "Place by place.",
      heading: "How I worked",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Travel",
              text: "Conducted research while traveling through New York, Ghana, Mexico, and Indonesia.",
              media: { image: images.c05Field, alt: "A group in Ghana", ratio: [4, 3] },
            },
            {
              title: "Read",
              text: "Combined archival research, field notes, memorial and site analysis, and Africana Studies and Science, Technology and Society scholarship.",
              media: {
                image: images.c05Read,
                alt: "A quote from Dr. John Henrik Clarke on religion and conquest, shown at a talk in Ghana",
                ratio: [4, 3],
              },
            },
            {
              title: "Examine",
              text: "Examined examples involving architecture, infrastructure, surveillance, tourism, extraction, and governance.",
              media: {
                image: images.c05Examine,
                alt: "A building going up beside a dirt road in Puerto Escondido, Mexico",
                ratio: [4, 3],
              },
            },
            {
              title: "Design",
              text: "Designed the research as an interactive digital project that could connect text, place, and visual material.",
              media: {
                image: images.c05Collage,
                alt: "An image sequence from the site",
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
      heading: "What I made",
      blocks: [
        {
          type: "solution",
          items: [
            {
              text: "Built an interactive website organized by place. Each location is its own case, looking at a specific technology within that place’s history and politics instead of defining “technology” in one general way.",
            },
            {
              text: [
                "Grounded the project in theoretical frameworks, including ",
                { text: "necropolitics", href: "https://en.wikipedia.org/wiki/Necropolitics" },
                ", to examine how technologies become harmful through the systems in which they operate.",
              ],
            },
            {
              text: "Connected historical and contemporary technologies while preserving the different political and cultural contexts of each location.",
            },
          ],
          ruled: true,
        },
        {
          type: "wide",
          figure: {
            image: images.c05Walk,
            alt: "A sequence of image panels from the site",
            ratio: [21, 9],
            caption: { label: "Fig. 04", text: "A sequence of image panels from the site." },
          },
        },
        {
          type: "gallery",
          images: [
            { image: images.c05Ghana, alt: "Ghana", ratio: [4, 3] },
            { image: images.c05Mexico, alt: "Mexico", ratio: [4, 3] },
            { image: images.c05Indonesia, alt: "Indonesia", ratio: [4, 3] },
          ],
        },
      ],
    },
    {
      label: "Scope",
      hint: "Where it reached.",
      heading: "Research across 4 countries",
      blocks: [
        {
          type: "world",
          places: [
            {
              name: "New York",
              region: "United States",
              image: images.c05GlobeNy,
              alt: "A dotted globe centered on New York, with New York highlighted",
            },
            {
              name: "Ghana",
              region: "West Africa",
              image: images.c05GlobeGhana,
              alt: "A dotted globe centered on Ghana, with Ghana highlighted",
            },
            {
              name: "Mexico",
              region: "North America",
              image: images.c05GlobeMexico,
              alt: "A dotted globe centered on Mexico, with Mexico highlighted",
            },
            {
              name: "Indonesia",
              region: "Southeast Asia",
              image: images.c05GlobeIndonesia,
              alt: "A dotted globe centered on Indonesia, with Indonesia highlighted",
            },
          ],
          count: "4",
          note: "countries across 3 continents",
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
                "Working across four countries gave me a wider, more geopolitical view of technology.",
                "I learned to ask whether a technology is intentionally harmful.",
                "I also learned to ask what systems it participates in, who benefits from it, and whose lives become more vulnerable through it.",
                "The answers change with a place’s colonial history and its position in global politics.",
              ],
            },
            {
              title: "Where it led",
              paragraphs: [
                "This project became a foundation for how I now approach surveillance, infrastructure, and technology governance research.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "Thanks for reading",
    prompt: "Want to see the site? Request access.",
    actions: [
      {
        kind: "solid",
        label: "Request Access to View Website",
        href: mailtoHref("Request access: Technology & Necropolitics website"),
        arrow: true,
      },
    ],
  },
  moreWork: [
    { slug: "flock-thesis", image: images.c06Map },
    { slug: "handbook", image: images.c01Platform },
    { slug: "grapevne", image: images.c02Swipe },
  ],
};
