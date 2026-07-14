// Colors defines the premium dark palette for Quantum IDE.
// It centralizes brand, surface, text, and accent values so components can reuse a consistent visual language.
export const colors = {
  brand: {
    primary: "#6EE7F9",
    secondary: "#8B5CF6",
    accent: "#3B82F6",
    success: "#34D399",
    warning: "#F59E0B",
    danger: "#F87171",
  },
  surface: {
    base: "#060816",
    elevated: "#0F172A",
    overlay: "#111827",
    muted: "#1E293B",
    border: "#243244",
  },
  text: {
    primary: "#F8FAFC",
    secondary: "#94A3B8",
    muted: "#64748B",
    inverse: "#020617",
  },
  state: {
    hover: "rgba(110, 231, 249, 0.16)",
    selected: "rgba(59, 130, 246, 0.22)",
    focus: "rgba(110, 231, 249, 0.28)",
  },
} as const;

export type QuantumColors = typeof colors;
