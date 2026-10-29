/** 0 → "01", 6 → "07". */
export function projectNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}
