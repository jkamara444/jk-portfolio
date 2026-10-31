import { cx } from "@/lib/cx";
import { cssVars } from "@/lib/cssVars";
import { FlowDiagram } from "../FlowDiagram";
import { Frame } from "../Figure";
import { RichText } from "../RichText";
import { SwipeHint } from "../SwipeHint";
import { SwipeRail } from "../SwipeRail";
import type { BlockOf } from "@/data/case-studies/types";
import styles from "../CaseStudy.module.css";

/** "01", "02", ... for the Step / Part labels. */
const pad = (n: number) => String(n).padStart(2, "0");

export function Steps({ block }: { block: BlockOf<"steps"> }) {
  return (
    <>
      <SwipeHint />
      <SwipeRail
        className={cx(styles.steps, styles.swipe)}
        label="Steps"
        style={cssVars({ "--n": block.steps.length })}
      >
        {block.steps.map((step, i) => (
          <div className={styles.step} key={step.title}>
            <div className={styles.label}>Step {pad(i + 1)}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.text}>
              <RichText value={step.text} />
            </p>
            {step.media && <Frame image={step.media} />}
            {step.diagram && (
              <div className={styles.frame} style={{ aspectRatio: "4 / 3" }}>
                <FlowDiagram diagram={step.diagram} />
              </div>
            )}
          </div>
        ))}
      </SwipeRail>
    </>
  );
}

export function Solution({ block }: { block: BlockOf<"solution"> }) {
  return (
    <>
      <SwipeHint />
      <SwipeRail
        className={cx(styles.solution, styles.swipe, block.ruled && styles.solutionRuled)}
        label={block.label ?? "Solution"}
      >
        {block.items.map((item, i) => (
          <div className={styles.solutionItem} key={i}>
            {item.media && <Frame image={item.media} />}
            <div className={styles.label}>Part {pad(i + 1)}</div>
            <p className={styles.text}>
              <RichText value={item.text} />
            </p>
          </div>
        ))}
      </SwipeRail>
    </>
  );
}
