import { keyboardKeys, type KeyTone } from "@/data/bio";
import { pixelFont, type PixelGlyphName } from "@/data/pixel-font";
import { cx } from "@/lib/cx";
import { cssVars } from "@/lib/cssVars";
import styles from "./Bio.module.css";

function PixelGlyph({ name }: { name: PixelGlyphName }) {
  const rows: readonly string[] = pixelFont[name];
  const width = rows[0].length;

  return (
    <svg
      viewBox={`0 0 ${width} ${rows.length}`}
      aria-hidden="true"
      shapeRendering="crispEdges"
      fill="currentColor"
    >
      {rows.flatMap((row, y) =>
        [...row].map((pixel, x) =>
          pixel === "#" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null,
        ),
      )}
    </svg>
  );
}

const TONE_CLASS: Record<KeyTone, string | undefined> = {
  plain: undefined,
  pink: styles.keyPink,
  heart: styles.keyHeart,
};

/** Keycaps that press themselves one after another to type the name. `--i` staggers the animation. */
export function Keyboard() {
  return (
    <div
      className={styles.keyboard}
      role="img"
      aria-label="Keyboard keys typing out jasmine kamara"
    >
      {keyboardKeys.map((key, index) => (
        <span
          key={index}
          className={cx(styles.key, TONE_CLASS[key.tone])}
          style={cssVars({ "--i": index })}
        >
          <PixelGlyph name={key.glyph} />
        </span>
      ))}
    </div>
  );
}
