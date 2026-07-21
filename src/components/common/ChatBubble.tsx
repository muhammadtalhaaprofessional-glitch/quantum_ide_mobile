import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing, typography } from "@/theme";

interface ChatBubbleProps {
  message: {
    id: string;
    role: "user" | "assistant";
    text: string;
  };
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isUser = message.role === "user";

  return (
    <View
      style={[
        styles.wrapper,
        isUser ? styles.userWrapper : styles.assistantWrapper,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isUser ? styles.userBubble : styles.assistantBubble,
        ]}
      >
        <Text
          style={[styles.text, isUser ? styles.userText : styles.assistantText]}
        >
          {message.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.md,
    flexDirection: "row",
  },
  userWrapper: {
    justifyContent: "flex-end",
  },
  assistantWrapper: {
    justifyContent: "flex-start",
  },
  bubble: {
    maxWidth: "82%",
    borderRadius: radius.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  userBubble: {
    backgroundColor: colors.brand.primary,
  },
  assistantBubble: {
    backgroundColor: colors.background.elevated,
    borderWidth: 1,
    borderColor: colors.border.subtle,
  },
  text: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.normal,
  },
  userText: {
    color: colors.text.primary,
  },
  assistantText: {
    color: colors.text.primary,
  },
});
