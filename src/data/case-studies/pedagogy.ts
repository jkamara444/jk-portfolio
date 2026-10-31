import { images } from "@/assets/images";
import { mailtoHref } from "@/lib/mailto";
import type { CaseStudy } from "./types";

export const pedagogy: CaseStudy = {
  slug: "pedagogy",
  eyebrow: "Project",
  subtitle: "Two labs I wrote that ask students to question data as well as analyze it.",
  actions: [
    {
      kind: "solid",
      label: "Request to see the labs",
      href: mailtoHref("Request to see the labs: CS0111 Socially Responsible Computing TA"),
      arrow: true,
    },
    { kind: "ghost", label: "About SRC", href: "https://responsible.cs.brown.edu/", arrow: true },
    { kind: "text", label: "Jump to the impact", href: "#s6" },
  ],
  facts: [
    { label: "Role", value: "Socially Responsible Computing TA" },
    { label: "Timeline", value: "2024 – Present" },
    { label: "Course", value: "CS0111: Computing Foundations: Data, Brown CS" },
    { label: "Focus", value: "Curriculum design, data ethics" },
  ],
  heroFigure: {
    image: images.c08Hero,
    alt: "The two labs side by side: Lab 4 from class survey to summary table, Lab 8 from footprint to discussion",
    ratio: [2, 1],
    phone: { image: images.cover08, ratio: [4, 3] },
    caption: { label: "Fig. 01", text: "The two labs at a glance." },
  },
  sections: [
    {
      label: "Overview",
      hint: "A short summary.",
      blocks: [
        {
          type: "lead",
          text: "Two labs I wrote as the Socially Responsible Computing TA for CS0111: Computing Foundations: Data, an introductory CS course at Brown.",
        },
        {
          type: "columns",
          items: [
            {
              label: "Context",
              text: "In a data course, the technical work includes data cleaning, exploratory data analysis, data visualization, and statistical analysis. The social questions arrive at the same moment, including whose data we are working with, what it leaves out, and who decides how it gets used.",
            },
            {
              label: "My role",
              text: "Socially Responsible Computing TA: I designed and wrote 2 labs, from the central questions to the checkpoints and discussion prompts.",
            },
          ],
        },
      ],
    },
    {
      label: "Challenge",
      hint: "The problem.",
      heading: "What the labs had to do",
      blocks: [
        {
          type: "challenges",
          items: [
            "Teach real data skills alongside the social questions that come with the work, instead of separating ethics into its own discussion.",
            "Make ideas like inference, consent, and contextual integrity concrete enough to argue about in a group.",
            "Get students to question AI output instead of accepting it, using what they know that the tool does not.",
          ],
        },
      ],
    },
    {
      label: "Process",
      hint: "From question to lab.",
      heading: "How I worked",
      blocks: [
        {
          type: "steps",
          steps: [
            {
              title: "Start with a question",
              text: "Gave each lab one central question, such as “when does collecting or using someone’s personal data become an invasion of privacy, and who gets to decide?”",
            },
            {
              title: "Choose the data",
              text: "Used the class’s own survey answers in Lab 4 and a fictional person’s data trail in Lab 8, so every group has real material to work with.",
            },
            {
              title: "Stage the work",
              text: "Broke each lab into short stages with TA checkpoints, so students explain their thinking out loud before they move on.",
            },
            {
              title: "Compare and reflect",
              text: "Ended each lab with a comparison: students’ own work against ChatGPT in Lab 4, and one person’s data trail against real reported cases in Lab 8.",
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
          type: "figureColumns",
          rows: [
            {
              sideBySide: true,
              items: [
                {
                  figure: {
                    image: images.c08Lab4,
                    alt: "Diagram of Lab 4: clean the survey, ask one question, check it against AI, build the summary, reflect",
                    ratio: [4, 3],
                    caption: {
                      label: "Fig. 02",
                      text: "Lab 4 · Generating and reporting about data",
                    },
                  },
                  texts: [
                    {
                      label: "Lab 4",
                      text: "Students take a survey about student life at Brown, then analyze the class’s responses in Pyret. The entries are messy, so they decide what to fix with sanitizers and what to fix by hand. They pick a question, either commute time by campus or sleep and late-night food, and chart the answer for a general reader. Then they give the same data to ChatGPT with a single prompt and name at least three things it missed or mishandled, and what Brown knowledge they used that it did not have.",
                    },
                  ],
                },
                {
                  figure: {
                    image: images.c08Lab8,
                    alt: "Diagram of Lab 8: five stages, footprint, trail, inference, case studies, discussion, with TA checkpoints after stages one and three",
                    ratio: [4, 3],
                    caption: { label: "Fig. 03", text: "Lab 8 · Five stages, about 54 minutes" },
                  },
                  texts: [
                    {
                      label: "Lab 8",
                      text: "Groups meet Shamariah, a fictional person whose searches, app activity, locations, purchases, and messages point toward a health condition she has not shared publicly. They sort her data by how it was collected, trace one data point through organizations, and combine harmless-looking pieces into an inference. Then each group takes one real, publicly reported case, such as a browsing-data company that resold its users’ histories or a retailer that predicted a customer’s pregnancy, and connects it back to her trail.",
                    },
                  ],
                },
              ],
            },
            {
              asCard: true,
              items: [
                {
                  figure: {
                    image: images.c08Trail,
                    alt: "Diagram of the data trail: where it starts, first organization, third party, seller or sharer, final user",
                    ratio: [4, 3],
                    caption: { label: "Fig. 04", text: "Stage 2 · Following one data point" },
                  },
                },
                {
                  texts: [
                    {
                      label: "Why the trail",
                      text: "Stage 2 makes the path visible. Each group follows one data point through five steps and decides where Shamariah loses track of who has it.",
                    },
                    {
                      label: "Where the TA fits",
                      text: "The lab has TA checkpoints after Stage 1 and Stage 3. Students explain their thinking out loud before they move on, so a misunderstanding about how the data was collected or what an inference can reveal gets caught early, not at the final discussion.",
                    },
                  ],
                },
              ],
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
            { label: "Build", chips: ["Pyret", "Google Forms", "Google Sheets"] },
            { label: "Teaching", chips: ["Lab design", "TA checkpoints", "Group discussion"] },
            {
              label: "Concepts",
              chips: ["Inference", "Informed consent", "Contextual integrity", "Data brokers"],
            },
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
            { value: "150+", label: "CS0111 students supported" },
            { value: "2", label: "Labs written for the course" },
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
                "I learned that the ethical questions land best when they come out of the technical work itself. Cleaning a survey of their own classmates shows students what a dataset leaves out, and comparing their analysis with an AI’s shows what local knowledge adds.",
              ],
            },
            {
              title: "What’s next",
              paragraphs: [
                "Keep refining the labs each semester, and keep looking for places where a data task can carry a question about people.",
              ],
            },
          ],
        },
      ],
    },
  ],
  ending: {
    script: "Thanks for reading",
    actions: [
      {
        kind: "solid",
        label: "Read the handbook case study",
        href: "/projects/handbook",
        arrow: true,
      },
      { kind: "text", label: "Get in touch", href: "/contact" },
    ],
  },
  moreWork: [
    { slug: "handbook", image: images.c01Platform },
    { slug: "necropolitics", image: images.c05Hero },
    { slug: "flock-thesis", image: images.cover06 },
  ],
};
