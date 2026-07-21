import { Pressable, StyleSheet, Text } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

interface SuggestionCardProps {
  title: string;
  onPress?: () => void;
}

export default function SuggestionCard({
  title,
  onPress,
}: SuggestionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.elevated,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...shadows.subtle,
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },
  text: {
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
  },
});
