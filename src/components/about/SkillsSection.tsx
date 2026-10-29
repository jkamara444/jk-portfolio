import { skillGroups } from "@/data/skills";
import { skillIcons } from "./skill-icons";
import styles from "./About.module.css";

export function SkillsSection() {
  return (
    <section className={styles.skills} aria-label="Skills">
      <h2 className={styles.heading}>skills</h2>
      <div className={styles.skillList}>
        {skillGroups.map((group) => (
          <div className={styles.skillGroup} key={group.title}>
            <h3>{group.title}</h3>
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
        ))}
      </div>
    </section>
  );
}
