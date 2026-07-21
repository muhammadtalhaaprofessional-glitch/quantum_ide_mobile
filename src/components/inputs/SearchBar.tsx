import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Search projects",
  onClear,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color={colors.text.secondary} />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.secondary}
        accessibilityLabel="Search projects"
        autoCapitalize="none"
        autoCorrect={false}
      />

      {value ? (
        <Pressable
          onPress={onClear}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
          style={styles.clearButton}
        >
          <Ionicons
            name="close-circle"
            size={18}
            color={colors.text.secondary}
          />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    borderRadius: radius.lg,
    backgroundColor: colors.background.elevated,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    ...shadows.subtle,
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    paddingVertical: 0,
  },
  clearButton: {
    paddingLeft: spacing.xs,
  },
});
