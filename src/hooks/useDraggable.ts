import { useMemo, useRef, type MouseEvent, type PointerEvent } from "react";

interface DragState {
  startX: number;
  startY: number;
  baseX: number;
  baseY: number;
  /** Scale of the parent, so dragging stays under the cursor when a stage is scaled down. */
  scale: number;
  moved: boolean;
}

interface ElementState {
  offset: { x: number; y: number };
  drag: DragState | null;
  suppressClick: boolean;
}

interface UseDraggableOptions {
  /** Return false to ignore a drag, e.g. on narrow screens where the layout stacks. */
  enabled?: () => boolean;
}

/** Moves further than this many pixels count as a drag, not a click. */
const CLICK_SLOP = 4;

function parentScale(element: HTMLElement) {
  const parent = element.parentElement;
  const layoutWidth = parent?.offsetWidth;
  if (!parent || !layoutWidth) return 1;
  return parent.getBoundingClientRect().width / layoutWidth || 1;
}

/**
 * Makes any number of elements draggable with the CSS `translate` property.
 * Spread the returned handlers on each element; state is kept per element, and the
 * element being dragged carries `data-dragging="true"` for styling. Dragging never
 * re-renders React, so it stays smooth. A drag also swallows the click that follows it,
 * so draggable links don't navigate when you let go.
 */
export function useDraggable<T extends HTMLElement = HTMLElement>({
  enabled,
}: UseDraggableOptions = {}) {
  const states = useRef<WeakMap<T, ElementState>>(null);
  const topZ = useRef(10);

  return useMemo(() => {
    const stateOf = (element: T): ElementState => {
      states.current ??= new WeakMap();
      let state = states.current.get(element);
      if (!state) {
        state = { offset: { x: 0, y: 0 }, drag: null, suppressClick: false };
        states.current.set(element, state);
      }
      return state;
    };

    const onPointerDown = (event: PointerEvent<T>) => {
      if (enabled && !enabled()) return;
      const element = event.currentTarget;
      const state = stateOf(element);
      topZ.current += 1;
      element.style.zIndex = String(topZ.current);
      try {
        element.setPointerCapture(event.pointerId);
      } catch {
        // Pointer capture can fail if the pointer is already gone; dragging still works without it.
      }
      state.drag = {
        startX: event.clientX,
        startY: event.clientY,
        baseX: state.offset.x,
        baseY: state.offset.y,
        scale: parentScale(element),
        moved: false,
      };
      state.suppressClick = false;
      element.dataset.dragging = "true";
    };

    const onPointerMove = (event: PointerEvent<T>) => {
      const element = event.currentTarget;
      const state = stateOf(element);
      const drag = state.drag;
      if (!drag) return;
      const dx = (event.clientX - drag.startX) / drag.scale;
      const dy = (event.clientY - drag.startY) / drag.scale;
      if (Math.abs(dx) + Math.abs(dy) > CLICK_SLOP) drag.moved = true;
      state.offset = { x: drag.baseX + dx, y: drag.baseY + dy };
      element.style.translate = `${state.offset.x}px ${state.offset.y}px`;
    };

    const onPointerUp = (event: PointerEvent<T>) => {
      const element = event.currentTarget;
      const state = stateOf(element);
      if (state.drag?.moved) state.suppressClick = true;
      state.drag = null;
      delete element.dataset.dragging;
      try {
        element.releasePointerCapture(event.pointerId);
      } catch {
        // Already released.
      }
    };

    const onClickCapture = (event: MouseEvent<T>) => {
      const state = stateOf(event.currentTarget);
      if (state.suppressClick) {
        event.preventDefault();
        state.suppressClick = false;
      }
    };

    return {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onClickCapture,
    };
  }, [enabled]);
}
