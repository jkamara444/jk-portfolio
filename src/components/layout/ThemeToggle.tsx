"use client";

import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, subscribe, toggleTheme } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

const HEART_PATH =
  "M26 43.5 C9 32 2.5 24 2.5 14.5 C2.5 7.5 8 2.5 14.5 2.5 C19.5 2.5 23.5 5 26 9.5 C28.5 5 32.5 2.5 37.5 2.5 C44 2.5 49.5 7.5 49.5 14.5 C49.5 24 43 32 26 43.5 Z";

/** The heart-shaped switch in the header. Flips light / dark for the whole site. */
export function ThemeToggle() {
  const { theme, direction } = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      className={styles.heart}
      role="switch"
      aria-checked={theme === "light"}
      aria-label="Light mode"
      title="Light / dark"
      data-theme-toggle
      data-dir={direction ?? undefined}
      onClick={toggleTheme}
    >
      <svg className={styles.svg} viewBox="0 0 52 46" aria-hidden="true">
        <path className={styles.path} d={HEART_PATH} />
      </svg>
      <span className={styles.knob} />
    </button>
  );
}
