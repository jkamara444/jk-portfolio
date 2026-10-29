import type { StaticImageData } from "next/image";
import type { CaseStudySlug } from "@/data/projects";

/** Plain text, or text with links inside it. */
export type RichText = string | readonly (string | { text: string; href: string })[];

export interface CaseImage {
  image: StaticImageData;
  alt: string;
  /** Width and height of the frame, e.g. [16, 9]. Any two numbers with the right proportion work. */
  ratio: readonly [width: number, height: number];
  /** CSS object-position, to keep the interesting part of a cropped picture in view. */
  position?: string;
  /** "contain" shows the whole picture inside the frame instead of cropping it. */
  fit?: "contain";
  /** Figure label and caption shown under the picture. */
  caption?: { label: string; text: string };
  /** A different picture (and proportion) to show on phones, when the wide one is too small to read. */
  phone?: { image: StaticImageData; ratio: readonly [width: number, height: number] };
}

export type CaseAction =
  | { kind: "solid" | "ghost" | "text"; label: string; href: string; arrow?: boolean }
  /** A pill that says where the work stands. It is not clickable. */
  | { kind: "status"; label: string };

/** The small diagram drawn inside a process step: some inputs flowing into one result. */
export interface FlowDiagram {
  /** Small heading at the top, e.g. "INTERVIEWS". */
  title: string;
  inputs: readonly string[];
  /** Two lines of text inside the result box. */
  result: readonly [string, string];
  /** Describes the diagram for screen readers. */
  description: string;
  /** Hand-tuned so each diagram sits nicely in its frame. */
  inputWidth: number;
  firstInputY: number;
  inputSpacing: number;
}

export interface Step {
  title: string;
  text: RichText;
  /** A picture or a diagram under the step. Both are optional. */
  media?: CaseImage;
  diagram?: FlowDiagram;
}

export interface TechGroup {
  label: string;
  /** A chip is plain text, or a link when it has an href. */
  chips: readonly (string | { label: string; href: string })[];
}

export type CaseBlock =
  /** A large opening sentence. */
  | { type: "lead"; text: RichText }
  /** A normal paragraph straight under the section heading. */
  | { type: "intro"; text: RichText }
  /** Two short labelled columns, e.g. Context and My role. */
  | { type: "columns"; items: readonly { label: string; text: RichText }[] }
  /** Three numbered problems. */
  | { type: "challenges"; items: readonly RichText[] }
  /** Two figures side by side. `swipe` turns them into a swipeable row of cards on a phone. */
  | { type: "pair"; figures: readonly CaseImage[]; swipe?: boolean }
  | { type: "steps"; steps: readonly Step[] }
  /**
   * Rows of side-by-side columns where each column can hold a figure, then one or more labelled
   * texts. On a phone the columns become one swipeable row of cards; a row marked `asCard` stays
   * together as a single card instead of one card per column.
   */
  | {
      type: "figureColumns";
      rows: readonly {
        asCard?: boolean;
        items: readonly {
          figure?: CaseImage;
          texts?: readonly { label?: string; text: RichText }[];
        }[];
      }[];
    }
  /** "Part 01, Part 02..." Each part has a picture, or none. `ruled` puts a line above text-only parts. */
  | { type: "solution"; items: readonly { text: RichText; media?: CaseImage }[]; ruled?: boolean }
  | { type: "wide"; figure: CaseImage }
  | { type: "gallery"; images: readonly CaseImage[] }
  | { type: "tech"; groups: readonly TechGroup[] }
  | { type: "chipRow"; label: string; chips: readonly string[] }
  | { type: "stats"; stats: readonly { value: string; label: string }[] }
  | { type: "outcomes"; items: readonly RichText[] }
  | { type: "callout"; text: RichText; actions?: readonly CaseAction[] }
  /** Two paper notes with tape on top. */
  | { type: "notes"; notes: readonly { title: string; paragraphs: readonly RichText[] }[] }
  /** A row of dotted globes, one per place, with a pulsing pin. */
  | {
      type: "world";
      places: readonly { name: string; region: string; image: StaticImageData; alt: string }[];
      count: string;
      note: string;
    }
  /** A picture with tape on its corners, placed inside a section. */
  | { type: "tapedFigure"; figure: CaseImage };

/** One kind of block, picked out of the union by its `type`. */
export type BlockOf<T extends CaseBlock["type"]> = Extract<CaseBlock, { type: T }>;

export interface CaseSection {
  /** Name on the left rail and in the jump links. */
  label: string;
  /** Use when the jump link should say something different from the rail label. */
  jumpLabel?: string;
  /** Italic line under the rail label. */
  hint: string;
  /** Big heading at the top of the section's content. */
  heading?: string;
  blocks: readonly CaseBlock[];
}

export interface CaseEnding {
  /** Big script words, e.g. "Thanks for reading". */
  script: string;
  prompt?: string;
  actions?: readonly CaseAction[];
  status?: string;
  note?: string;
}

/**
 * One case-study page. The title, year, breadcrumb, "next" link and the
 * "more work" cards' text all come from the project record in data/projects.ts.
 */
export interface CaseStudy {
  slug: CaseStudySlug;
  /** Small label above the title; the project's year follows it. */
  eyebrow: string;
  /** Bold opening phrase of the subtitle. */
  subtitleLead?: string;
  subtitle: string;
  /** Looser spacing around the hero buttons and closing band (used by the in-progress pages). */
  spacious?: boolean;
  actions: readonly CaseAction[];
  /** Four facts under the hero: role, timeline, and so on. */
  facts: readonly { label: string; value: string }[];
  heroFigure?: CaseImage;
  sections: readonly CaseSection[];
  ending: CaseEnding;
  /** The three cards at the bottom, with the picture each one shows. */
  moreWork: readonly { slug: CaseStudySlug; image: StaticImageData }[];
}
