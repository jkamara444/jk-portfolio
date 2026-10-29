import type { CaseBlock as CaseBlockData } from "@/data/case-studies/types";
import { FigureColumns, Gallery, Pair, SectionFigure, Wide } from "./blocks/MediaBlocks";
import { Solution, Steps } from "./blocks/ProcessBlocks";
import { ChipRow, Stats, Tech, World } from "./blocks/ListBlocks";
import {
  Callout,
  Challenges,
  Columns,
  Funding,
  Intro,
  Lead,
  Notes,
  Outcomes,
} from "./blocks/TextBlocks";

/** Draws one block of a case-study section. Each `type` in the data has one component. */
export function CaseBlock({ block }: { block: CaseBlockData }) {
  switch (block.type) {
    case "lead":
      return <Lead block={block} />;
    case "intro":
      return <Intro block={block} />;
    case "columns":
      return <Columns block={block} />;
    case "challenges":
      return <Challenges block={block} />;
    case "pair":
      return <Pair block={block} />;
    case "figureColumns":
      return <FigureColumns block={block} />;
    case "steps":
      return <Steps block={block} />;
    case "solution":
      return <Solution block={block} />;
    case "wide":
      return <Wide block={block} />;
    case "gallery":
      return <Gallery block={block} />;
    case "tech":
      return <Tech block={block} />;
    case "chipRow":
      return <ChipRow block={block} />;
    case "stats":
      return <Stats block={block} />;
    case "outcomes":
      return <Outcomes block={block} />;
    case "funding":
      return <Funding block={block} />;
    case "callout":
      return <Callout block={block} />;
    case "notes":
      return <Notes block={block} />;
    case "world":
      return <World block={block} />;
    case "tapedFigure":
      return <SectionFigure block={block} />;
  }
}
