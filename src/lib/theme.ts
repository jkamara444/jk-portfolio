/**
 * Light / dark theme, kept in an external store so React can subscribe with
 * useSyncExternalStore. The source of truth is the <html> element (the class
 * `jk-light` plus `data-jk-theme`), which an inline script sets before first
 * paint (see ThemeScript). The choice persists in localStorage and is echoed
 * to other open tabs through `storage` events and a BroadcastChannel.
 */

export type Theme = "light" | "dark";

/** Which way the last switch went; drives the heart's squish animation. */
type SwitchDirection = "on" | "off" | null;

export interface ThemeState {
  theme: Theme;
  direction: SwitchDirection;
}

export const THEME_KEY = "jk-theme";
const CHANNEL = "jk-theme";
const FADE_MS = 800;

const SERVER_STATE: ThemeState = { theme: "dark", direction: null };

let state: ThemeState | null = null;
let fadeTimer: ReturnType<typeof setTimeout> | undefined;
let channel: BroadcastChannel | null = null;
const listeners = new Set<() => void>();

function readDocumentTheme(): Theme {
  const root = document.documentElement;
  if (root.dataset.jkTheme) return root.dataset.jkTheme === "light" ? "light" : "dark";
  return root.classList.contains("jk-light") ? "light" : "dark";
}

function readStoredTheme(): Theme {
  try {
    return window.localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function paint(theme: Theme, animate: boolean) {
  const root = document.documentElement;
  if (animate) {
    root.classList.add("jk-fade");
    clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => root.classList.remove("jk-fade"), FADE_MS);
  }
  root.classList.toggle("jk-light", theme === "light");
  root.dataset.jkTheme = theme;
}

function commit(theme: Theme, direction: SwitchDirection) {
  state = { theme, direction };
  listeners.forEach((notify) => notify());
}

/** Applies a theme that arrived from another tab. */
function syncFrom(theme: Theme) {
  if (state?.theme === theme) return;
  paint(theme, true);
  commit(theme, theme === "light" ? "on" : "off");
}

function ensureListeners() {
  if (channel || typeof window === "undefined") return;
  window.addEventListener("storage", (event) => {
    if (event.key === null || event.key === THEME_KEY) syncFrom(readStoredTheme());
  });
  try {
    channel = new BroadcastChannel(CHANNEL);
    channel.onmessage = (message) => syncFrom(message.data === "light" ? "light" : "dark");
  } catch {
    channel = null;
  }
}

export function subscribe(notify: () => void): () => void {
  ensureListeners();
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
}

export function getSnapshot(): ThemeState {
  if (!state) state = { theme: readDocumentTheme(), direction: null };
  return state;
}

export function getServerSnapshot(): ThemeState {
  return SERVER_STATE;
}

export function toggleTheme() {
  const next: Theme = getSnapshot().theme === "light" ? "dark" : "light";
  try {
    window.localStorage.setItem(THEME_KEY, next);
  } catch {
    // Private mode: the switch still works for this page view.
  }
  paint(next, true);
  commit(next, next === "light" ? "on" : "off");
  try {
    channel?.postMessage(next);
  } catch {
    // The channel closed; other tabs will catch up through the storage event.
  }
}

/**
 * Runs before first paint so the page never flashes the wrong palette.
 * It is a string because it is inlined into <head> by ThemeScript.
 */
export const THEME_INIT_SCRIPT = `try{var l=window.localStorage.getItem("${THEME_KEY}")==="light",r=document.documentElement;r.dataset.jkTheme=l?"light":"dark";if(l)r.classList.add("jk-light")}catch(e){}`;
