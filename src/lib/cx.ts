type ClassValue = string | false | null | undefined;

/** Joins class names, skipping anything falsy: cx("a", cond && "b"). */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
