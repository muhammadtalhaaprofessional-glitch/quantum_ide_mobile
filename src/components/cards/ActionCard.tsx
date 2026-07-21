import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

interface ActionCardProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

export default function ActionCard({ title, icon, onPress }: ActionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${title} quick action`}
    >
      <View style={styles.content}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={24} color={colors.brand.secondary} />
        </View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.background.elevated,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    ...shadows.elevated,
  },
  pressed: {
    opacity: 0.96,
    transform: [{ scale: 0.997 }],
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: radius.lg,
    backgroundColor: colors.brand.primarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
});
