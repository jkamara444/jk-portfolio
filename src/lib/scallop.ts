/**
 * A circle with a scalloped (wavy) edge, as a CSS clip-path polygon in percentages.
 * Used to cut the "drag me" sticker into a seal shape.
 */
function buildScallop(scallops = 7, steps = 168): string {
  const points: string[] = [];
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const radius = 46.4 + 3.6 * Math.abs(Math.sin(angle * scallops));
    const x = (50 + radius * Math.cos(angle)).toFixed(2);
    const y = (50 + radius * Math.sin(angle)).toFixed(2);
    points.push(`${x}% ${y}%`);
  }
  return `polygon(${points.join(",")})`;
}

export const scallopClipPath = buildScallop();
