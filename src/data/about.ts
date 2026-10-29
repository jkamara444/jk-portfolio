export interface EducationEntry {
  when: string;
  title: string;
  place: string;
  /** Optional second line under the place. */
  note?: string;
}

export const education: EducationEntry[] = [
  {
    when: "exp. May 2027",
    title: "B.A. Computer Science",
    place: "Brown University, Providence, RI",
  },
  {
    when: "exp. May 2027",
    title: "B.A. Science, Technology and Society",
    place: "Brown University, Providence, RI. Honors thesis.",
  },
  {
    when: "May 2026",
    title: "Minor in Global Studies",
    place: "School for International Training, Sociology & Necropolitics program.",
    note: "Study abroad in Ghana, Mexico & Indonesia.",
  },
];

export interface CurrentlyItem {
  text: string;
  /** A title set in italics after the text, e.g. a book. */
  emphasis?: string;
  done?: boolean;
}

export const currently = {
  updated: "updated october 2026",
  items: [
    { text: "Just finished midterms", done: true },
    { text: "Reading", emphasis: "Your Data Will Be Used Against You" },
    { text: "Writing my thesis on Flock Safety" },
  ] satisfies CurrentlyItem[],
};

export const funFacts: string[] = [
  "I grew up in southern california and I'm always somewhere near a beach.",
  "I've studied abroad in Ghana, Mexico and Indonesia.",
  "I love cheesecake. I've had it for my birthday for the past 7 years.",
  "My interests: hiking, reading and music.",
];
