import type { FlowDiagram } from "./types";

export const interviewDiagram: FlowDiagram = {
  title: "INTERVIEWS",
  inputs: ["Faculty", "TAs", "Students"],
  result: ["How they find", "and use materials"],
  description: "Diagram: faculty, TAs, and students describe how they find and use materials",
  inputWidth: 84,
  firstInputY: 44,
  inputSpacing: 38,
};

export const usabilityDiagram: FlowDiagram = {
  title: "USABILITY TESTS",
  inputs: ["Standard use", "Assistive tech"],
  result: ["Accessibility", "fixes"],
  description:
    "Diagram: usability tests with standard use and assistive technology lead to accessibility fixes",
  inputWidth: 92,
  firstInputY: 60,
  inputSpacing: 40,
};
