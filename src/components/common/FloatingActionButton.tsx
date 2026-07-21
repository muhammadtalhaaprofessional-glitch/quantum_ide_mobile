import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

interface FloatingActionButtonProps {
  label: string;
  onPress?: () => void;
}

export default function FloatingActionButton({
  label,
  onPress,
}: FloatingActionButtonProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={label}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <View style={styles.iconBox}>
          <Ionicons name="add" size={20} color={colors.text.primary} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: spacing.lg,
    bottom: spacing.xl,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.brand.primary,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    ...shadows.glow,
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.98 }],
  },
  iconBox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.brand.secondarySoft,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
});
