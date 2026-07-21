import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { colors, radius, shadows, spacing, typography } from "@/theme";

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  placeholder?: string;
}

export default function ChatInput({
  value,
  onChangeText,
  onSend,
  placeholder = "Ask Quantum AI...",
}: ChatInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.secondary}
        multiline
        maxLength={280}
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      <Pressable
        onPress={onSend}
        accessibilityRole="button"
        accessibilityLabel="Send message"
        style={({ pressed }) => [styles.sendButton, pressed && styles.pressed]}
      >
        <Ionicons name="paper-plane" size={18} color={colors.text.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: spacing.sm,
    backgroundColor: colors.background.elevated,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    ...shadows.subtle,
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    maxHeight: 120,
    paddingVertical: spacing.sm,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.97 }],
  },
});
