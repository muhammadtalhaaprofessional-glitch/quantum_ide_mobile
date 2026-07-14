// Shadows define elevation and glow effects for a premium, futuristic interface.
// These tokens can be reused for cards, panels, and interactive surfaces.
export const shadows = {
  soft: {
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  medium: {
    shadowColor: "#6EE7F9",
    shadowOpacity: 0.18,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  strong: {
    shadowColor: "#3B82F6",
    shadowOpacity: 0.24,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 12,
  },
} as const;

export type QuantumShadows = typeof shadows;
