import { SmartLink } from "@/components/ui/SmartLink";
import type { RichText as RichTextValue } from "@/data/case-studies/types";
import styles from "./CaseStudy.module.css";

/** Plain text, or text with links inside it. */
export function RichText({ value }: { value: RichTextValue }) {
  if (typeof value === "string") return value;

  return value.map((part, i) =>
    typeof part === "string" ? (
      part
    ) : (
      <SmartLink key={i} className={styles.inlineLink} href={part.href}>
        {part.text}
      </SmartLink>
    ),
  );
}
