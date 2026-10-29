import { ButtonLink } from "@/components/ui/ButtonLink";
import type { CaseAction } from "@/data/case-studies/types";
import styles from "./CaseStudy.module.css";

const VARIANTS = { solid: "solid", ghost: "ghost", text: "text" } as const;

/** A row of buttons, links and status pills. Put it inside a flex container. */
export function ActionLinks({ actions }: { actions: readonly CaseAction[] }) {
  return actions.map((action) =>
    action.kind === "status" ? (
      <span className={styles.status} key={action.label}>
        {action.label}
      </span>
    ) : (
      <ButtonLink
        key={action.label}
        variant={VARIANTS[action.kind]}
        href={action.href}
        arrow={action.arrow}
      >
        {action.label}
      </ButtonLink>
    ),
  );
}
