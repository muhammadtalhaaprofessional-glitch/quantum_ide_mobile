// AuthHeader.tsx is a reusable branded header for authentication screens.
// It renders the Quantum IDE logo, a title, and an optional supporting
// subtitle, using the shared design tokens for consistent spacing/typography.
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "@/theme";

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/icon.png")}
        style={styles.logo}
        contentFit="contain"
        accessibilityLabel="Quantum IDE logo"
      />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: spacing.xxl,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.xs,
    textAlign: "center",
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
    textAlign: "center",
    lineHeight: typography.lineHeight.relaxed,
    paddingHorizontal: spacing.md,
  },
});

export default AuthHeader;
