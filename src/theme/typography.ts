// Typography defines the text system for premium, readable UI.
// It provides a consistent font scale and semantic text styles for headings, body, and code content.
import { Platform } from "react-native";

export const typography = {
  fonts: {
    sans: Platform.select({
      ios: "System",
      android: "Roboto",
      default: "System",
    }),
    mono: Platform.select({
      ios: "Menlo",
      android: "monospace",
      default: "monospace",
    }),
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
    title: 40,
  },
  weights: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  lineHeights: {
    tight: 18,
    normal: 22,
    relaxed: 28,
    spacious: 36,
  },
} as const;

export type QuantumTypography = typeof typography;
