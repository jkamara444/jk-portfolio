import type { CSSProperties } from "react";

/** Lets a component hand CSS custom properties to its stylesheet: style={cssVars({ "--i": 3 })}. */
export function cssVars(vars: Record<`--${string}`, string | number>): CSSProperties {
  return vars as CSSProperties;
}
