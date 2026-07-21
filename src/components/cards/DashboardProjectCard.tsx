import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

interface DashboardProjectCardProps {
  project: {
    id: string;
    title: string;
    qubits: number;
    updatedAt: string;
  };
  onPress?: () => void;
}

export default function DashboardProjectCard({
  project,
  onPress,
}: DashboardProjectCardProps) {
  const updatedAtLabel = new Date(project.updatedAt).toLocaleDateString();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${project.title} recent project`}
    >
      <View style={styles.textBlock}>
        <Text numberOfLines={1} style={styles.title}>
          {project.title}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>{project.qubits} qubits</Text>
          <Text style={styles.metaLabel}>{updatedAtLabel}</Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={colors.brand.secondary}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.background.elevated,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...shadows.elevated,
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.997 }],
  },
  textBlock: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing.xs,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  metaLabel: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
  },
});
