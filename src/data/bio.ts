import type { PixelGlyphName } from "./pixel-font";

export const bioGreeting = {
  word: "Nanga",
  script: "def",
  gloss: "That’s hello in Wolof, my native language.",
};

export const bioParagraphs: string[] = [
  "I’m a UFLI student from southern California, so you can usually find me somewhere near a beach. I’m West African, Gambian and Sierra Leonean, and I’m finishing up my degrees in Computer Science and in Science, Technology and Society at Brown.",
  "Most of my work sits where data, design and research overlap. I’ve built a handbook that helps CS instructors teach responsible technology, helped a food app grow, modeled how electric vehicles affect the climate, and looked at how technology can spread risk unevenly. Right now I’m writing my honors thesis on Flock Safety’s license plate camera network.",
  "I’ve also studied abroad in Ghana, Mexico and Indonesia. When I’m not working, I’m usually hiking, reading or listening to music, and there’s a good chance I’m thinking about cheesecake. I’ve had it for my birthday for the past seven years.",
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
