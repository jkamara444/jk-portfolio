import { kindLabels, type CommunityItem } from "@/data/community";

const COLUMNS = 4;
/** The grid is made of 8px rows, and each card spans as many as it is tall. */
const ROW_HEIGHT = 8;
const CARD_GAP = 18;

/** A card's resting tilt and how it bobs. Cycled in order so neighbours never match. */
const WOBBLES = [
  { offsetY: 0, tilt: -1.4, duration: 6.2, delay: 0 },
  { offsetY: 30, tilt: 1, duration: 7.4, delay: -2.1 },
  { offsetY: 10, tilt: -0.8, duration: 5.6, delay: -4.3 },
  { offsetY: 44, tilt: 1.6, duration: 8, delay: -1.2 },
  { offsetY: 20, tilt: 0.9, duration: 6.8, delay: -3.4 },
  { offsetY: 2, tilt: -1.2, duration: 5.9, delay: -5.1 },
  { offsetY: 36, tilt: 0.7, duration: 7.1, delay: -0.7 },
  { offsetY: 8, tilt: -1.5, duration: 6.4, delay: -2.8 },
  { offsetY: 26, tilt: 1.3, duration: 7.8, delay: -4.9 },
  { offsetY: 40, tilt: -0.6, duration: 5.7, delay: -1.9 },
  { offsetY: 4, tilt: 1.1, duration: 6.6, delay: -3.8 },
  { offsetY: 32, tilt: -1, duration: 7.3, delay: -0.3 },
] as const;

/** Gradient behind a photo while it loads, and behind the "Add a photo" placeholder. */
const GRADIENTS = [
  ["var(--jk-rose-1)", "var(--jk-wine)"],
  ["var(--jk-blush)", "var(--jk-rose-3)"],
  ["var(--jk-rose-3)", "var(--jk-wine-2)"],
  ["var(--jk-blush-2)", "var(--jk-rose-4)"],
  ["var(--jk-rose-2)", "var(--jk-taupe)"],
] as const;

export interface PlacedCard {
  item: CommunityItem;
  /** 1-based grid column. */
  column: number;
  /** Rows the card spans. */
  span: number;
  offsetY: number;
  tilt: number;
  duration: number;
  delay: number;
  gradient: readonly [from: string, to: string];
  /** The text shown on the card: "Org · Year", or just the org. */
  subtitle: string;
  category: string;
}

/**
 * Packs cards into columns: each one goes into whichever column is currently shortest,
 * which keeps the bottom edge roughly level without reordering anything.
 *
 * `all` is the full list, so a card keeps its gradient when a filter hides its neighbours.
 */
export function placeCards(
  visible: readonly CommunityItem[],
  all: readonly CommunityItem[],
): PlacedCard[] {
  const columnHeights = Array<number>(COLUMNS).fill(0);

  return visible.map((item, n) => {
    const wobble = WOBBLES[n % WOBBLES.length];
    const used = item.height + wobble.offsetY + CARD_GAP;
    const column = columnHeights.indexOf(Math.min(...columnHeights));
    columnHeights[column] += used;

    return {
      item,
      column: column + 1,
      span: Math.ceil(used / ROW_HEIGHT),
      ...wobble,
      gradient: GRADIENTS[all.indexOf(item) % GRADIENTS.length],
      subtitle: item.year ? `${item.org} · ${item.year}` : item.org,
      category: item.label ?? kindLabels[item.kind],
    };
  });
}
