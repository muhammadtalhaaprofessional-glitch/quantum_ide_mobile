import { Ionicons } from "@expo/vector-icons";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    type ViewStyle,
} from "react-native";

import { colors, shadows, spacing, typography } from "@/theme";

interface ActionButtonProps {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export default function ActionButton({
  title,
  icon,
  onPress,
  disabled = false,
  style,
}: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={`${title} action`}
      style={({ pressed }) => [
        styles.container,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <View style={styles.inner}>
        <View style={styles.left}>
          <Ionicons name={icon} size={36} color={colors.brand.secondary} />
        </View>

        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.chevron}>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={colors.brand.secondary}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 68,
    backgroundColor: colors.background.elevated,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.brand.secondary,
    paddingHorizontal: spacing.lg,
    justifyContent: "center",
    ...shadows.glowSecondary,
  },
  pressed: {
    transform: [{ scale: 0.997 }],
    opacity: 0.96,
  },
  disabled: {
    opacity: 0.5,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  left: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    color: colors.text.primary,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
  },
  chevron: {
    width: 24,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
