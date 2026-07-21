import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

interface SplashScreenProps {
  onComplete?: () => void;
  delayMs?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  delayMs = 1500,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete?.(), delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, onComplete]);

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.logoSurface}>
          <Ionicons
            name="hardware-chip-outline"
            size={52}
            color={colors.brand.secondary}
            accessibilityLabel="Quantum IDE logo placeholder"
          />
        </View>
        <Text style={styles.appName}>Quantum IDE</Text>
        <Text style={styles.tagline}>
          Build, simulate and learn quantum computing.
        </Text>
      </View>

      <View style={styles.loadingSection}>
        <ActivityIndicator
          accessibilityLabel="Loading Quantum IDE"
          color={colors.brand.secondary}
          size="small"
        />
        <Text style={styles.loadingText}>Preparing your workspace</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.giant,
    backgroundColor: colors.background.base,
  },
  content: {
    alignItems: "center",
    marginTop: spacing.huge,
  },
  logoSurface: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.brand.secondarySoft,
    backgroundColor: colors.background.elevated,
    ...shadows.glow,
  },
  appName: {
    color: colors.text.primary,
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.bold,
    marginTop: spacing.xxl,
    textAlign: "center",
  },
  tagline: {
    color: colors.text.secondary,
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.relaxed,
    marginTop: spacing.md,
    textAlign: "center",
  },
  loadingSection: {
    alignItems: "center",
    gap: spacing.md,
  },
  loadingText: {
    color: colors.text.muted,
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.sm,
  },
});

export default SplashScreen;
