import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { colors, radius, spacing, typography } from "@/theme";

interface PlaceholderScreenProps {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  actionLabel?: string;
  onAction?: () => void;
}

export default function PlaceholderScreen({
  title,
  description,
  icon,
  actionLabel,
  onAction,
}: PlaceholderScreenProps) {
  return (
    <ScreenContainer>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={32} color={colors.brand.secondary} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {actionLabel && onAction ? (
          <PrimaryButton
            title={actionLabel}
            onPress={onAction}
            style={styles.actionButton}
          />
        ) : null}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xxl,
    maxWidth: 480,
    alignSelf: "center",
    width: "100%",
  },
  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: radius.xl,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.brand.primarySoft,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily.sans,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.sans,
    color: colors.text.secondary,
    textAlign: "center",
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing.xl,
  },
  actionButton: {
    marginTop: spacing.lg,
    width: "100%",
    maxWidth: 240,
  },
});
