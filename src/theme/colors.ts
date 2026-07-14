// colors.ts defines the core color primitives for the Quantum IDE design system.
// It centralizes the dark palette, brand accents, surface layering, and text contrast so UI tokens remain consistent.
export const colors = {
  brand: {
    primary: "#6C63FF",
    secondary: "#00E5FF",
    primarySoft: "rgba(108, 99, 255, 0.16)",
    secondarySoft: "rgba(0, 229, 255, 0.16)",
  },
  background: {
    base: "#090909",
    surface: "#121212",
    elevated: "#171717",
    overlay: "rgba(9, 9, 9, 0.85)",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#A0A0A0",
    muted: "#707070",
    inverse: "#090909",
  },
  border: {
    subtle: "rgba(255, 255, 255, 0.08)",
    strong: "rgba(255, 255, 255, 0.16)",
  },
  state: {
    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
    info: "#00E5FF",
  },
} as const;
