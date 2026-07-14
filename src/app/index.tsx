import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { colors, radius, spacing, typography } from "@/theme";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>⚛</Text>
        </View>

        <Text style={styles.title}>Quantum IDE</Text>
        <Text style={styles.subtitle}>Build • Simulate • Explore</Text>
        <Text style={styles.description}>
          Develop, simulate, and manage quantum computing projects from
          anywhere.
        </Text>

        <PrimaryButton
          title="Continue"
          onPress={() => router.push("/explore")}
        />
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
    width: 96,
    height: 96,
    borderRadius: radius.xl,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.brand.primarySoft,
    marginBottom: spacing.xl,
  },
  icon: {
    fontSize: 48,
    color: colors.brand.secondary,
  },
  title: {
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fontFamily.sans,
    color: colors.text.primary,
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    fontFamily: typography.fontFamily.sans,
    color: colors.brand.secondary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  description: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.sans,
    color: colors.text.secondary,
    textAlign: "center",
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing.xl,
  },
});
