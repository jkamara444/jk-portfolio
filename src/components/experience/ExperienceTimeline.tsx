"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { SmartLink } from "@/components/ui/SmartLink";
import { experiences, type Experience, type ExperienceLink } from "@/data/experience";
import { cx } from "@/lib/cx";
import styles from "./Experience.module.css";

const LINK_CLASS: Record<ExperienceLink["style"], string> = {
  solid: "btn",
  ghost: "btn-ghost",
  quiet: styles.request,
};

const LAST = experiences.length - 1;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "left" ? (
        <>
          <path d="M19 12H5" />
          <path d="m11 6-6 6 6 6" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
    </svg>
  );
}

function ExperiencePanel({ item, active }: { item: Experience; active: boolean }) {
  return (
    <section
      className={cx(styles.panel, active && styles.on)}
      aria-label={`${item.org}, ${item.dates}`}
    >
      <div className={styles.ghost} aria-hidden="true">
        {item.year.slice(0, 4)}
      </div>
      <div className={styles.panelInner}>
        <div>
          <div className={styles.kind}>[ {item.kind} ]</div>
          <h2 className={styles.org}>{item.org}</h2>
          <p className={styles.role}>{item.role}</p>
          <div className={styles.facts}>
            <span>{item.dates}</span>
            <span>{item.where}</span>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.summary}>{item.summary}</p>
          <div className={styles.stack}>
            <span className={styles.stackLabel}>{item.stackLabel}</span>
            <div className={styles.tags}>
              {item.stack.map((tool) => (
                <span className="jk-tagpill" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          {item.links.length > 0 && (
            <div className={styles.actions}>
              {item.links.map((link) => (
                <SmartLink className={LINK_CLASS[link.style]} href={link.href} key={link.label}>
                  {link.label} <ArrowUpRight width={12} height={12} />
                </SmartLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** A film strip of jobs: pick one from the dots, or step through with the arrows. */
export function ExperienceTimeline() {
  const [index, setIndex] = useState(LAST);
  const go = (to: number) => setIndex(Math.min(Math.max(to, 0), LAST));
  const atStart = index === 0;
  const atEnd = index === LAST;
  const current = experiences[index];

  return (
    <>
      <div className={styles.rail} role="group" aria-label="Pick an experience">
        {experiences.map((item, i) => (
          <button
            type="button"
            key={item.id}
            className={cx(styles.dot, i === index && styles.on)}
            aria-pressed={i === index}
            aria-label={`${item.year} ${item.shortName}: ${item.org}, ${item.dates}`}
            onClick={() => go(i)}
          >
            <i aria-hidden="true" />
            <b className={styles.dotYear}>{item.year}</b>{" "}
            <span className={styles.dotLabel}>{item.shortName}</span>
          </button>
        ))}
      </div>

      <div className={styles.view} aria-live="polite">
        <div className={styles.track} style={{ transform: `translateX(${-100 * index}%)` }}>
          {experiences.map((item, i) => (
            <ExperiencePanel item={item} active={i === index} key={item.id} />
          ))}
        </div>
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          className={cx(styles.arrow, atStart && styles.off)}
          aria-label="Previous experience"
          aria-disabled={atStart}
          onClick={() => go(index - 1)}
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          type="button"
          className={cx(styles.arrow, atEnd && styles.off)}
          aria-label="Next experience"
          aria-disabled={atEnd}
          onClick={() => go(index + 1)}
        >
          <ArrowIcon direction="right" />
        </button>
        <span className={styles.current}>
          {current.org} · {current.dates}
        </span>
      </div>
    </>
  );
}
