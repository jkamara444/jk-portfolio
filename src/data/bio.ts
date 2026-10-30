import type { PixelGlyphName } from "./pixel-font";

export const bioGreeting = {
  word: "Nanga",
  script: "def",
  gloss: "That’s hello in Wolof, my native language.",
};

export const bioParagraphs: string[] = [
  "The beach is one of my earliest memories of home. I grew up in Southern California, and even after moving across the country and spending time abroad, I still feel most like myself near the water.",
  "I’m a first-generation, low-income college student from a West African family with roots in The Gambia and Sierra Leone. At Brown, I study Computer Science and Science, Technology and Society. STS gave me language for something I kept noticing in my technical work: technology is never just technical. The systems we build are shaped by people, institutions, policies, and values, and they shape those things in return. I see that in my work on campus, where I design tools and learning experiences with those questions in mind. At J.P. Morgan Chase, working with customer data and learning about AI governance showed me how those same choices can shape decisions across a large institution.",
  "Those questions also shape my honors thesis on Flock Safety’s license plate camera network, where I study how a private surveillance platform becomes part of public infrastructure and what that changes about privacy and public safety. Studying in Ghana, Mexico, and Indonesia pushed me to ask those questions in different contexts and think more critically about how history and geopolitical power shape the way technologies develop and are used.",
  "Outside of school, I’m usually reading, listening to music, hiking, or finding some excuse to be near the water. No matter how far I travel, I think part of me is always looking for the same feeling I grew up with in Southern California. Sun, ocean, and a little room to think. Somewhere in there is probably cheesecake too.",
];

export type KeyTone = "plain" | "pink" | "heart";

export interface KeyboardKey {
  glyph: PixelGlyphName;
  tone: KeyTone;
}

/** The keys that type out "jasmine kamara" (and a heart) when the page loads, in order. */
export const keyboardKeys: KeyboardKey[] = [
  { glyph: "j", tone: "pink" },
  { glyph: "a", tone: "plain" },
  { glyph: "s", tone: "plain" },
  { glyph: "m", tone: "plain" },
  { glyph: "i", tone: "plain" },
  { glyph: "n", tone: "plain" },
  { glyph: "e", tone: "plain" },
  { glyph: "k", tone: "pink" },
  { glyph: "a", tone: "plain" },
  { glyph: "m", tone: "plain" },
  { glyph: "a", tone: "plain" },
  { glyph: "r", tone: "plain" },
  { glyph: "a", tone: "plain" },
  { glyph: "heart", tone: "heart" },
];
