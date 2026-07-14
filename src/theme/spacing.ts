// Spacing provides the spacing scale for layout rhythm and component padding.
// Using a token-based scale keeps spacing consistent and easy to adjust across the app.
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 48,
} as const;

export type QuantumSpacing = typeof spacing;
