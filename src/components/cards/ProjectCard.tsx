import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onPress?: () => void;
}

export default function ProjectCard({ project, onPress }: ProjectCardProps) {
  const updatedAtLabel = new Date(project.updatedAt).toLocaleDateString();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${project.title} project card`}
    >
      <View style={styles.content}>
        <View style={styles.textWrap}>
          <Text numberOfLines={1} style={styles.title}>
            {project.title}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {project.description}
          </Text>
          <View style={styles.metadataRow}>
            <Text style={styles.metadataItem}>{project.qubits} qubits</Text>
            <Text style={styles.metadataItem}>{project.provider}</Text>
          </View>
          <Text numberOfLines={1} style={styles.updatedAt}>
            Last modified · {updatedAtLabel}
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color={colors.brand.secondary}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.elevated,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    marginVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    ...shadows.elevated,
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.997 }],
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  textWrap: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing.xs,
  },
  description: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
    marginBottom: spacing.sm,
    lineHeight: typography.lineHeight.normal,
  },
  metadataRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.xs,
  },
  metadataItem: {
    color: colors.brand.secondary,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    marginRight: spacing.md,
  },
  updatedAt: {
    color: colors.text.muted,
    fontSize: typography.fontSize.xs,
  },
});
