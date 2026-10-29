import { site } from "./site";

export type StickerTone = "paper" | "pink" | "wine";

export interface LinkSticker {
  label: string;
  href: string;
  tone: StickerTone;
  /** Where the sticker lands on the board before anyone drags it. */
  left: string;
  top: string;
  rotate: string;
  zIndex: number;
}

/** The pill-shaped link stickers on the contact board. */
export const linkStickers: LinkSticker[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    tone: "paper",
    left: "111px",
    top: "66px",
    rotate: "-3deg",
    zIndex: 3,
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    tone: "pink",
    left: "443px",
    top: "137px",
    rotate: "3deg",
    zIndex: 4,
  },
  {
    label: "Book a time",
    /** Placeholder until a booking link exists. */
    href: "#",
    tone: "wine",
    left: "8%",
    top: "236px",
    rotate: "-2deg",
    zIndex: 5,
  },
];

export const contactCopy = {
  eyebrow: "Get in touch",
  title: "Contact",
  open: "Open to roles, projects & new friends",
  mailLabel: "Or just say hi",
};
