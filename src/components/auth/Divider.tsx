// Divider.tsx is a reusable "OR" separator used to visually break up
// alternative actions on auth screens (e.g. between password sign-in and
// social sign-in options).
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, spacing, typography } from "@/theme";

interface DividerProps {
  label?: string;
}

const Divider: React.FC<DividerProps> = ({ label = "OR" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.label}>{label}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.xl,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border.strong,
  },
  label: {
    color: colors.text.muted,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    marginHorizontal: spacing.md,
    letterSpacing: 1,
  },
});

export default Divider;
