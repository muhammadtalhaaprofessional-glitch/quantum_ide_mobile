// SocialButton.tsx is a reusable bordered button for third-party sign-in
// options (e.g. "Continue with Google"). It is a placeholder control today:
// pressing it does not perform any real authentication.
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors, radius, spacing, typography } from "@/theme";

interface SocialButtonProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  title,
  icon = "logo-google",
  onPress,
}) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name={icon} size={20} color={colors.text.primary} />
      <Text style={styles.label}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    minHeight: spacing.huge,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border.strong,
    backgroundColor: colors.background.elevated,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  label: {
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
});

export default SocialButton;
