import { cx } from "@/lib/cx";
import { RichText } from "../RichText";
import { Caption, Figure, Frame, TapedFigure } from "../Figure";
import { SwipeHint } from "../SwipeHint";
import type { BlockOf } from "@/data/case-studies/types";
import styles from "../CaseStudy.module.css";

export function Pair({ block }: { block: BlockOf<"pair"> }) {
  const pair = (
    <div className={cx(styles.pair, block.swipe && styles.swipe)}>
      {block.figures.map((figure) => (
        <Figure image={figure} key={figure.alt} />
      ))}
    </div>
  );

  if (!block.swipe) return pair;

  return (
    <>
      <SwipeHint />
      {pair}
    </>
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

/**
 * Rows of columns, each holding a picture with its caption and then labelled paragraphs. On a
 * phone every column becomes a card in one swipeable row; a row marked `asCard` is a single card.
 */
export function FigureColumns({ block }: { block: BlockOf<"figureColumns"> }) {
  return (
    <div className={styles.figureBlock}>
      <SwipeHint />
      <div className={cx(styles.figureRows, styles.swipe, styles.swipeColumns)}>
        {block.rows.map((row, r) => (
          <div
            className={cx(
              styles.figureColumns,
              row.asCard && styles.figureCard,
              row.sideBySide && styles.figureSideBySide,
            )}
            key={r}
          >
            {row.items.map((item, i) => (
              <div key={i}>
                {item.figure && <Figure image={item.figure} />}
                {item.texts?.map((entry, j) => (
                  <div className={styles.figureText} key={j}>
                    {entry.label && <p className={styles.kicker}>{entry.label}</p>}
                    <p className={styles.text}>
                      <RichText value={entry.text} />
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
