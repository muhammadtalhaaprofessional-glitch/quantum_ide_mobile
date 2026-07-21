import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "@/theme";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <View style={styles.illustration}>
        <View style={styles.circle} />
        <View style={styles.card} />
        <View style={styles.cardSmall} />
      </View>

      <Text style={styles.title}>No Projects Yet</Text>
      <Text style={styles.description}>
        Create your first quantum project and it will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.giant,
    paddingHorizontal: spacing.xl,
  },
  illustration: {
    width: 180,
    height: 140,
    borderRadius: radius.xl,
    backgroundColor: colors.background.elevated,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xl,
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.brand.primarySoft,
    marginBottom: spacing.md,
  },
  card: {
    width: 108,
    height: 16,
    borderRadius: radius.sm,
    backgroundColor: colors.brand.secondarySoft,
    marginBottom: spacing.sm,
  },
  cardSmall: {
    width: 72,
    height: 12,
    borderRadius: radius.sm,
    backgroundColor: colors.border.subtle,
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing.sm,
  },
  description: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
    textAlign: "center",
    lineHeight: typography.lineHeight.relaxed,
  },
});
