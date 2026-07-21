import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import AuthService from "@/services/AuthService";
import { colors, radius, shadows, spacing, typography } from "@/theme";

const WelcomeScreen: React.FC = () => {
  const [isContinuingAsGuest, setIsContinuingAsGuest] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>();

  const handleContinueAsGuest = async () => {
    setStatusMessage(undefined);

    try {
      setIsContinuingAsGuest(true);
      const user = await AuthService.login("guest@quantumide.dev", "guest-session");
      setStatusMessage(`Welcome, ${user.fullName}. You're exploring as a guest.`);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to start a guest session.",
      );
    } finally {
      setIsContinuingAsGuest(false);
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
      style={styles.screen}
    >
      <View style={styles.hero}>
        <View style={styles.logoSurface}>
          <Ionicons
            name="hardware-chip-outline"
            size={48}
            color={colors.brand.secondary}
          />
        </View>
        <Text style={styles.title}>Quantum IDE</Text>
        <Text style={styles.tagline}>
          Build, simulate and learn quantum computing.
        </Text>
      </View>

      <View style={styles.actions}>
        {statusMessage ? <Text style={styles.statusText}>{statusMessage}</Text> : null}

        <PrimaryButton
          title="Sign In"
          onPress={() => setStatusMessage("Sign-in navigation is not available yet.")}
        />
        <Pressable
          accessibilityRole="button"
          onPress={() => setStatusMessage("Account creation navigation is not available yet.")}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Create Account</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityState={{ busy: isContinuingAsGuest }}
          disabled={isContinuingAsGuest}
          onPress={handleContinueAsGuest}
          style={({ pressed }) => [
            styles.guestButton,
            pressed && !isContinuingAsGuest && styles.guestButtonPressed,
            isContinuingAsGuest && styles.guestButtonDisabled,
          ]}
        >
          <Text style={styles.guestButtonText}>
            {isContinuingAsGuest ? "Starting guest session..." : "Continue as Guest"}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.giant,
  },
  hero: {
    alignItems: "center",
    marginTop: spacing.huge,
  },
  logoSurface: {
    width: 112,
    height: 112,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.brand.secondarySoft,
    backgroundColor: colors.background.elevated,
    ...shadows.glow,
  },
  title: {
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
  actions: {
    gap: spacing.md,
  },
  secondaryButton: {
    minHeight: spacing.huge,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border.strong,
    backgroundColor: colors.background.elevated,
  },
  secondaryButtonPressed: {
    backgroundColor: colors.background.surface,
    transform: [{ scale: 0.98 }],
  },
  secondaryButtonText: {
    color: colors.text.primary,
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
  guestButton: {
    minHeight: spacing.huge,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.lg,
  },
  guestButtonPressed: {
    opacity: 0.75,
  },
  guestButtonDisabled: {
    opacity: 0.5,
  },
  guestButtonText: {
    color: colors.brand.secondary,
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
  statusText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
});

export default WelcomeScreen;
