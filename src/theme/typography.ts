// typography.ts defines the type system for the Quantum IDE experience.
// It provides cross-platform font families, sizes, weights, and line heights for polished readability.
import { Platform } from "react-native";

export const typography = {
  fontFamily: {
    sans: Platform.select({
      ios: "System",
      android: "Roboto",
      default:
        "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }),
    mono: Platform.select({
      ios: "Menlo",
      android: "monospace",
      default: "SFMono-Regular, Consolas, 'Liberation Mono', monospace",
    }),
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
    display: 40,
  },
  fontWeight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  lineHeight: {
    tight: 18,
    normal: 22,
    relaxed: 28,
    spacious: 36,
  },
} as const;
