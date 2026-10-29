import Image from "next/image";
import { SmartLink } from "@/components/ui/SmartLink";
import { cx } from "@/lib/cx";
import { cssVars } from "@/lib/cssVars";
import type { BlockOf, TechGroup } from "@/data/case-studies/types";
import { TabbedPanels } from "../TabbedPanels";
import styles from "../CaseStudy.module.css";

function Chip({ chip }: { chip: TechGroup["chips"][number] }) {
  if (typeof chip === "string") return <span className={styles.chip}>{chip}</span>;

  return (
    <SmartLink className={cx(styles.chip, styles.chipLink)} href={chip.href}>
      <span className={styles.chipTitle}>{chip.label}</span>
      <span className={styles.chipGo}>Learn more ↗</span>
    </SmartLink>
  );
}

export function Tech({ block }: { block: BlockOf<"tech"> }) {
  return (
    <TabbedPanels className={styles.tech} labels={block.groups.map((group) => group.label)}>
      {block.groups.map((group) => (
        <div className={styles.techGroup} key={group.label}>
          <p className={styles.kicker}>{group.label}</p>
          <div className={styles.chips}>
            {group.chips.map((chip) => (
              <Chip chip={chip} key={typeof chip === "string" ? chip : chip.label} />
            ))}
          </div>
        </div>
      ))}
    </TabbedPanels>
  );
}

export function ChipRow({ block }: { block: BlockOf<"chipRow"> }) {
  return (
    <>
      <p className={cx(styles.kicker, styles.chipRowLabel)}>{block.label}</p>
      <div className={styles.chips}>
        {block.chips.map((chip) => (
          <Chip chip={chip} key={chip} />
        ))}
      </div>
    </>
  );
}

export function Stats({ block }: { block: BlockOf<"stats"> }) {
  return (
    <div className={styles.stats} style={cssVars({ "--sn": block.stats.length })}>
      {block.stats.map((stat) => (
        <div className={cx(styles.stat, "jk-surface")} key={stat.label}>
          <div className={styles.statValue}>{stat.value}</div>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function World({ block }: { block: BlockOf<"world"> }) {
  return (
    <div className={styles.world}>
      <div className={styles.worldRow}>
        {block.places.map((place) => (
          <figure className={styles.globe} key={place.name}>
            <div className={styles.globeDisc}>
              <Image src={place.image} alt={place.alt} fill sizes="240px" draggable={false} />
              <i className={styles.globePin} aria-hidden="true" />
            </div>
            <figcaption>
              <b>{place.name}</b>
              <span>{place.region}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className={styles.worldNote}>
        <b>{block.count}</b> {block.note}
      </p>
    </div>
  );
}
