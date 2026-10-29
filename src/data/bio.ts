import type { PixelGlyphName } from "./pixel-font";

export const bioGreeting = {
  word: "Nanga",
  script: "def",
  gloss: "That’s hello in Wolof, my native language.",
};

export const bioParagraphs: string[] = [
  "The beach is one of my earliest memories of home. I grew up in Southern California, and even after moving across the country and spending time abroad, I still feel most like myself near the water.",
  "I’m a first-generation, low-income college student from a West African family with roots in The Gambia and Sierra Leone. At Brown, I study Computer Science and Science, Technology and Society, which has taught me that technologies do not simply enter society once they are built. They are shaped by the institutions, values, and people around them, and then reshape those worlds in return. I keep coming back to one question. What happens when the technologies we build start changing the way we move through the world?",
  "Models classify people, platforms shape what choices are available to us, and infrastructure can quietly turn someone’s assumptions about the world into part of everyday life. I like asking who a system imagines when it is designed, what gets left out, and how power shifts once a technology becomes ordinary enough that we stop noticing it. That is the thread behind my honors thesis on Flock Safety’s license plate camera network, where I’m studying how a private surveillance platform can become part of local public infrastructure and change what privacy and public safety come to mean.",
  "Living and studying in Ghana, Mexico, and Indonesia made those questions much harder to treat as abstract. Moving between places with different histories, political institutions, and ideas about public safety taught me that technology never arrives on neutral ground. What feels inevitable in one place can be questioned and imagined completely differently somewhere else.",
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
