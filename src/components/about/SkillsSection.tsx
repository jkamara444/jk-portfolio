"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/ui/Icons";
import { skillGroups } from "@/data/skills";
import { cx } from "@/lib/cx";
import { skillIcons } from "./skill-icons";
import styles from "./About.module.css";

/**
 * Skills, grouped (code, build, data ...). On desktop and iPad every group is open on the page. On a
 * phone each group is a row you tap to open; the first one starts open. The open state only matters
 * on a phone, since the stylesheet shows every group at the wider sizes.
 */
export function SkillsSection() {
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set([skillGroups[0].title]));

  const toggle = (title: string) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });

  return (
    <section className={styles.skills} aria-label="Skills">
      <h2 className={styles.heading}>skills</h2>
      <div className={styles.skillList}>
        {skillGroups.map((group) => {
          const isOpen = open.has(group.title);
          return (
            <div className={cx(styles.skillGroup, isOpen && styles.skillOpen)} key={group.title}>
              <div className={styles.skillHead} onClick={() => toggle(group.title)}>
                <h3>{group.title}</h3>
                <button
                  type="button"
                  className={styles.skillToggle}
                  aria-expanded={isOpen}
                  aria-label={`${isOpen ? "Hide" : "Show"} ${group.title} skills`}
                >
                  <ChevronDown width={14} height={14} />
                </button>
              </div>
              <p>
                {group.skills.map((skill) => {
                  const icon = skillIcons[skill.icon];
                  return (
                    <span className={styles.skill} key={skill.label}>
                      <svg viewBox={icon.viewBox} aria-hidden="true">
                        {icon.children}
                      </svg>
                      {skill.label}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
