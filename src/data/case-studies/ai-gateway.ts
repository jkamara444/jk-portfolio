import { images } from "@/assets/images";
import type { CaseStudy } from "./types";

export const aiGateway: CaseStudy = {
  slug: "ai-gateway",
  eyebrow: "Project",
  subtitle: "A safety-aware routing system for customer-facing AI.",
  actions: [{ kind: "text", label: "Jump to the results", href: "#s6" }],
  facts: [
    { label: "Role", value: "Built & evaluated the gateway" },
    { label: "Timeline", value: "2026" },
    { label: "Program", value: "Cornell AI Governance Program" },
    { label: "Stack", value: "Python, scikit-learn, semantic similarity" },
  ],
  heroFigure: {
    image: images.c03Hero,
    alt: "Diagram: a request passes a risk check, a router and a semantic cache before the LLM",
    ratio: [2, 1],
    caption: {
      label: "Fig. 01",
      text: "A request passes a risk check, routing and a semantic cache before it reaches the model.",
    },
  },
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "A prompt gateway that identifies risky requests before they reach an LLM and uses semantic similarity to route eligible queries more efficiently. The project was supported by Cornell’s AI Governance Program and focused on reducing risk while improving model routing efficiency.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: "Organizations using LLMs in customer-facing or regulated settings need a way to identify unsafe requests without slowing down the user experience or driving up costs.",
            },
            {
              label: "My role",
              text: "Built and evaluated the gateway in Python using scikit-learn, retrieval-based methods, and semantic similarity, with a focus on balancing safety and efficiency.",
            },
          ],
        },
      ],
    },
    {
      label: "Challenge",
      hint: "The problem.",
      heading: "Why every request can’t take the same path",
      blocks: [
        {
          type: "challenges",
          items: [
            "Customer-facing LLMs can receive unsafe or inappropriate requests that should not be processed like ordinary queries.",
            "Routing every request through the same model path also creates unnecessary token usage and cost.",
            "We needed to improve efficiency without weakening safety or response quality.",
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
              title: "Classify",
              text: "Built and evaluated a prompt-risk classifier in Python and scikit-learn.",
            },
            {
              title: "Retrieve",
              text: "Tested semantic similarity and retrieval-based methods for identifying and routing requests.",
            },
            {
              title: "Compare",
              text: "Compared routing and caching approaches across safety, response quality, token usage, cost, and cache-hit rate.",
            },
            { title: "Evaluate", text: "Used F1 to evaluate risk-classification performance." },
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
              text: "Built a gateway that evaluates requests before they reach the main LLM.",
              media: {
                image: images.c03Flow,
                alt: "Diagram: the gateway sits between the request and the main LLM",
                ratio: [4, 3],
              },
            },
            {
              text: "Added risk-based routing so unsafe or sensitive prompts can be handled differently.",
              media: {
                image: images.c03Routing,
                alt: "Diagram: the risk check sends ordinary and unsafe requests down different paths",
                ratio: [4, 3],
              },
            },
            {
              text: "Used semantic similarity and caching to reduce repeated model work for eligible requests.",
              media: {
                image: images.c03Cache,
                alt: "Diagram: similar requests reuse an earlier answer, others go to the LLM",
                ratio: [4, 3],
              },
            },
          ],
        },
        {
          type: "wide",
          figure: {
            image: images.c03Arch,
            alt: "Diagram: the full gateway pipeline and the measures it was evaluated on",
            ratio: [21, 9],
            caption: {
              label: "Fig. 04",
              text: "The gateway pipeline and what it was evaluated on.",
            },
          },
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
            { label: "Build", chips: ["Python", "scikit-learn"] },
            {
              label: "Methods",
              chips: [
                "NLP",
                "Prompt-risk classification",
                "Semantic similarity",
                "Retrieval (RAG)",
                "Semantic caching",
              ],
            },
            {
              label: "Evaluation",
              chips: ["F1", "Safety", "Response quality", "Token usage", "Cost", "Cache-hit rate"],
            },
            { label: "Governance", chips: ["AI governance", "Risk-based routing"] },
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
            { value: "80%+", label: "F1 on prompt-risk classification" },
            {
              value: "30–50%",
              label: "Lower input token usage for eligible customer-service queries",
            },
          ],
        },
        {
          type: "outcomes",
          items: ["Maintained response relevance while reducing unnecessary model usage."],
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
                "I learned that AI governance can be built into the system itself, not just added as a policy after deployment. I also learned that safety, cost, and performance have to be evaluated together.",
              ],
            },
            {
              title: "What’s next",
              paragraphs: [
                "Test the approach across more risk categories and real-world use cases.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "Thanks for reading",
    actions: [{ kind: "solid", label: "Get in touch", href: "/contact" }],
  },
  moreWork: [
    { slug: "ev-battery", image: images.cover04 },
    { slug: "necropolitics", image: images.c05Collage },
    { slug: "flock-thesis", image: images.c06Map },
  ],
};
