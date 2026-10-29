import { images } from "@/assets/images";
import { mailtoHref } from "@/lib/mailto";
import type { CaseStudy } from "./types";

export const grapevne: CaseStudy = {
  slug: "grapevne",
  eyebrow: "Project",
  subtitle: "Building and growing a social-impact platform for sharing food.",
  actions: [
    {
      kind: "solid",
      label: "Visit Grapevne Website",
      href: "https://grapevneapp.com/",
      arrow: true,
    },
    {
      kind: "ghost",
      label: "View on the App Store",
      href: "https://apps.apple.com/us/app/grapevne/id6745459372",
      arrow: true,
    },
    { kind: "text", label: "Jump to the results", href: "#s6" },
  ],
  facts: [
    { label: "Role", value: "Product & growth" },
    { label: "Timeline", value: "2025 – Present" },
    { label: "Incubator", value: "MIT Martin Trust Center" },
    { label: "Stack", value: "Swift, Firebase, Figma" },
  ],
  heroFigure: {
    image: images.c02Hero,
    alt: "Three Grapevne App Store screens: swipe to RSVP, see who is going, and never miss what is happening",
    ratio: [2, 1],
    caption: { label: "Fig. 01", text: "Grapevne on the App Store" },
  },
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "Grapevne is a social-impact startup incubated at the MIT Martin Trust Center that makes it easier for people and communities to share food.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: "As an early-stage platform, Grapevne needed to build an engaging MVP while figuring out what would bring users back and help the product spread across college campuses.",
            },
            {
              label: "My role",
              text: "Product and growth: user research, product strategy, Figma prototyping, experimentation, app development, and university partnerships.",
            },
          ],
        },
      ],
    },
    {
      label: "Challenge",
      hint: "The problem",
      heading: "What it took to make it stick",
      blocks: [
        {
          type: "challenges",
          items: [
            "Grapevne had to turn an early food-sharing idea into a product people would actually return to.",
            "Users needed an easier and more engaging way to discover available food.",
            "Growth also depended on building adoption at the community and university level, not just acquiring individual users.",
          ],
        },
        {
          type: "pair",
          figures: [
            {
              image: images.c02DeckGap,
              alt: "Slide: leftover event food needs a place to go. The event ends, food is left over, there is no shared place to post it, and it reaches only a few people.",
              ratio: [16, 9],
              caption: { label: "Fig. 02", text: "Leftover event food has no shared place to go." },
            },
            {
              image: images.c02DeckBuild,
              alt: "Slide: Grapevne builds on what students started, moving from some students in a group chat to every student with a school email.",
              ratio: [16, 9],
              caption: {
                label: "Fig. 03",
                text: "Grapevne opens the group-chat idea up to every student.",
              },
            },
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
              title: "Listen",
              text: "Gathered user feedback to identify friction in the core product experience.",
            },
            { title: "Prototype", text: "Designed and prototyped new flows in Figma." },
            { title: "Test", text: "Tested changes to the home experience through A/B testing." },
            {
              title: "Grow",
              text: "Worked across product development and university outreach to connect product decisions with growth.",
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
              text: "Helped shape the MVP and its core food-discovery experience.",
              media: {
                image: images.c02Feed,
                alt: "The Grapevne feed of nearby food",
                ratio: [4, 3],
              },
            },
            {
              text: "Iterated on a swipe-based home screen designed to make discovering available food faster and more engaging.",
              media: {
                image: images.c02Swipe,
                alt: "The Grapevne swipe home screen",
                ratio: [4, 3],
                position: "50% 30%",
              },
            },
            {
              text: "Built and maintained Grapevne’s mobile app using Swift and Firebase while building a university-partnership growth strategy.",
              media: {
                image: images.c02DeckChatBlur,
                alt: "Slide: Brown students already share leftover food in a group chat, with the chat screenshot blurred",
                ratio: [4, 3],
                fit: "contain",
              },
            },
          ],
        },
        {
          type: "wide",
          figure: {
            image: images.c02DeckScreens,
            alt: "Slide: five Grapevne screens for posting, the feed, the live map, the alert, and activity",
            ratio: [1596, 784],
            caption: { label: "Fig. 04", text: "Post, feed, live map, alert, and activity." },
          },
        },
        {
          type: "wide",
          figure: {
            image: images.c02DeckFeatures,
            alt: "Slide: a table matching each reason leftover food goes to waste with the Grapevne feature that answers it",
            ratio: [1596, 704],
            caption: {
              label: "Fig. 05",
              text: "Each feature targets one reason food goes to waste.",
            },
          },
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
            { label: "Build", chips: ["Swift", "Firebase"] },
            { label: "Design", chips: ["Figma prototyping", "Swipe-based home screen"] },
            { label: "Research", chips: ["User feedback", "Product strategy"] },
            { label: "Growth", chips: ["A/B testing", "University partnerships"] },
          ],
        },
      ],
    },
    {
      label: "Impact",
      hint: "The results.",
      blocks: [
        {
          type: "callout",
          text: "Numbers on food waste and growth can be shared on request.",
          actions: [
            {
              kind: "solid",
              label: "Request the data",
              href: mailtoHref("Grapevne: food waste and growth data"),
              arrow: true,
            },
            {
              kind: "ghost",
              label: "Open to partnerships",
              href: mailtoHref("Grapevne: partnerships"),
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
                "I learned how closely product and growth are connected at an early-stage startup. Improving the experience matters, but so does understanding how users discover the product and what gives them a reason to return.",
              ],
            },
            {
              title: "What’s next",
              paragraphs: [
                "Continue improving discovery, retention, and expansion across campuses.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "Thanks for reading",
    prompt: "Want to try it, or talk more?",
    actions: [
      {
        kind: "solid",
        label: "Visit Grapevne Website",
        href: "https://grapevneapp.com/",
        arrow: true,
      },
      {
        kind: "ghost",
        label: "View on the App Store",
        href: "https://apps.apple.com/us/app/grapevne/id6745459372",
        arrow: true,
      },
      { kind: "text", label: "Get in touch", href: "/contact" },
    ],
  },
  moreWork: [
    { slug: "ai-gateway", image: images.c03Flow },
    { slug: "ev-battery", image: images.cover04 },
    { slug: "necropolitics", image: images.c05Collage },
  ],
};
