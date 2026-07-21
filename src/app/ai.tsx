import { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ChatBubble from "@/components/common/ChatBubble";
import ChatInput from "@/components/common/ChatInput";
import SuggestionCard from "@/components/common/SuggestionCard";
import TypingIndicator from "@/components/common/TypingIndicator";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { AIService, type ChatMessage } from "@/services/AIService";
import { colors, spacing, typography } from "@/theme";

const suggestions = [
  "Explain Bell State",
  "Generate a GHZ Circuit",
  "Optimize my Quantum Circuit",
  "Explain Grover's Algorithm",
];

export default function AIScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello! I can help you explore quantum concepts, circuits, and algorithm ideas.",
      createdAt: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef<FlatList<ChatMessage>>(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const response = await AIService.sendMessage(trimmed);
    setMessages((prev) => [...prev, response]);
    setIsTyping(false);
  };

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Quantum AI</Text>
        <Text style={styles.subtitle}>
          Ask questions about quantum computing, circuits, and algorithms.
        </Text>
      </View>

      <View style={styles.suggestionsRow}>
        {suggestions.map((suggestion) => (
          <SuggestionCard
            key={suggestion}
            title={suggestion}
            onPress={() => setInput(suggestion)}
          />
        ))}
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatBubble message={item} />}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={isTyping ? <TypingIndicator /> : null}
      />

      <View style={styles.inputWrapper}>
        <ChatInput value={input} onChangeText={setInput} onSend={handleSend} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.md,
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.xs,
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.relaxed,
  },
  suggestionsRow: {
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  chatContent: {
    flexGrow: 1,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  inputWrapper: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  },
});
