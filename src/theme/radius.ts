// Radius stores the corner radii for cards, inputs, and control surfaces.
// A few reusable values keep the interface sleek and modern without over-styling each component.
export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

export type QuantumRadius = typeof radius;
