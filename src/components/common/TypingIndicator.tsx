import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "@/theme";

export default function TypingIndicator() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bubble}>
        <Text style={styles.text}>Quantum AI is thinking…</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.md,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  bubble: {
    backgroundColor: colors.background.elevated,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  text: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
  },
});
