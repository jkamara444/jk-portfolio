import { THEME_INIT_SCRIPT } from "@/lib/theme";

/**
 * Sets the saved palette on <html> before first paint, so the page never flashes the wrong one.
 * It is a plain inline script in <head> because it has to run before anything is drawn.
 */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}
