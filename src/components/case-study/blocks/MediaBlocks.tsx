import { Caption, Figure, Frame, TapedFigure } from "../Figure";
import type { BlockOf } from "@/data/case-studies/types";
import styles from "../CaseStudy.module.css";

export function Pair({ block }: { block: BlockOf<"pair"> }) {
  return (
    <div className={styles.pair}>
      {block.figures.map((figure) => (
        <Figure image={figure} key={figure.alt} />
      ))}
    </div>
  );
}

export function Wide({ block }: { block: BlockOf<"wide"> }) {
  const { figure } = block;
  return (
    <div className={styles.wide}>
      <Frame image={figure} />
      {figure.caption && <Caption caption={figure.caption} />}
    </div>
  );
}

export function Gallery({ block }: { block: BlockOf<"gallery"> }) {
  return (
    <div className={styles.gallery}>
      {block.images.map((image) => (
        <Figure image={image} key={image.alt} />
      ))}
    </div>
  );
}

export function SectionFigure({ block }: { block: BlockOf<"tapedFigure"> }) {
  return <TapedFigure image={block.figure} inSection />;
}
