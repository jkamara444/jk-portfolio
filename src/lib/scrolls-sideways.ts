/**
 * True when `el`, or an ancestor below `stop`, scrolls sideways on its own (a swipe rail). A
 * sideways gesture that starts inside one of those belongs to the rail, not to the page.
 */
export function scrollsSideways(el: Element, stop: Element): boolean {
  for (let node: Element | null = el; node && node !== stop; node = node.parentElement) {
    const { overflowX } = window.getComputedStyle(node);
    if (
      (overflowX === "auto" || overflowX === "scroll") &&
      node.scrollWidth > node.clientWidth + 1
    ) {
      return true;
    }
  }
  return false;
}
