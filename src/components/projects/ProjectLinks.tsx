import { ArrowUpRight } from "@/components/ui/Icons";
import { SmartLink } from "@/components/ui/SmartLink";
import { cx } from "@/lib/cx";
import type { ProjectLink } from "@/data/projects";
import styles from "./Projects.module.css";

function LinkItem({ link }: { link: ProjectLink }) {
  switch (link.kind) {
    case "status":
      return <span className={styles.status}>{link.label}</span>;
    case "request":
      return (
        <SmartLink className={styles.request} href={link.href}>
          {link.label}
        </SmartLink>
      );
    default:
      return (
        <SmartLink
          className={cx(styles.button, link.kind === "solid" && styles.buttonSolid)}
          href={link.href}
        >
          {link.label} <ArrowUpRight width={12} height={12} />
        </SmartLink>
      );
  }
}

/** The "View more" row at the bottom of a sheet. */
export function ProjectLinks({ links }: { links: readonly ProjectLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className={styles.actions}>
      <span className={styles.actionsLabel}>View more</span>
      <div className={styles.links}>
        {links.map((link) => (
          <LinkItem key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
}
