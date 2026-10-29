import type { FlowDiagram as FlowDiagramData } from "@/data/case-studies/types";
import styles from "./CaseStudy.module.css";

const NODE_X = 14;
const NODE_HEIGHT = 26;
const RESULT = { x: 138, width: 88, height: 58 };

/**
 * A tiny diagram: a few labelled inputs on the left, joined by a bracket, with an arrow
 * into one result box on the right. Colours come from CSS so it follows light and dark mode.
 */
export function FlowDiagram({ diagram }: { diagram: FlowDiagramData }) {
  const { inputs, inputWidth, firstInputY, inputSpacing } = diagram;
  const centers = inputs.map((_, i) => firstInputY + i * inputSpacing + NODE_HEIGHT / 2);
  const middle = (centers[0] + centers[centers.length - 1]) / 2;
  const edge = NODE_X + inputWidth;
  const bracketX = edge + 8;

  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 240 180"
      role="img"
      aria-label={diagram.description}
    >
      <text className={styles.diagramTitle} x={NODE_X} y={28} fontSize={8} letterSpacing={1.4}>
        {diagram.title}
      </text>

      {inputs.map((label, i) => (
        <g key={label}>
          <rect
            className={styles.diagramNode}
            x={NODE_X}
            y={centers[i] - NODE_HEIGHT / 2}
            width={inputWidth}
            height={NODE_HEIGHT}
            rx={13}
            strokeWidth={1}
          />
          <text
            className={styles.diagramText}
            x={NODE_X + inputWidth / 2}
            y={centers[i] + 4}
            textAnchor="middle"
            fontSize={10}
          >
            {label}
          </text>
        </g>
      ))}

      <path
        className={styles.diagramBracket}
        strokeWidth={1}
        d={`${centers.map((y) => `M${edge} ${y}h8`).join("")}M${bracketX} ${centers[0]}v${centers[centers.length - 1] - centers[0]}`}
      />
      <path
        className={styles.diagramArrow}
        strokeWidth={1}
        d={`M${bracketX} ${middle}h${124 - bracketX}`}
      />
      <path className={styles.diagramArrowHead} d={`M130 ${middle}l-6 -3.5v7z`} />

      <rect
        className={styles.diagramResult}
        x={RESULT.x}
        y={middle - RESULT.height / 2}
        width={RESULT.width}
        height={RESULT.height}
        rx={10}
        strokeWidth={1}
      />
      {diagram.result.map((line, i) => (
        <text
          className={styles.diagramText}
          key={line}
          x={RESULT.x + RESULT.width / 2}
          y={middle - 3 + i * 14}
          textAnchor="middle"
          fontSize={9.5}
        >
          {line}
        </text>
      ))}
    </svg>
  );
}
