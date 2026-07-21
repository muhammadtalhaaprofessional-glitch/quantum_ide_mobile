import { StyleSheet, Text, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

export default function AppHeader() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.greeting}>Welcome back</Text>
        <Text style={styles.title}>Quantum IDE</Text>
        <Text style={styles.subtitle}>
          Your mobile companion for quantum computing.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.xxl,
  },
  card: {
    backgroundColor: colors.background.elevated,
    borderRadius: radius.xl,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    ...shadows.glow,
  },
  greeting: {
    color: colors.brand.secondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    marginBottom: spacing.xs,
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.sm,
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.relaxed,
  },
});
