// TextField.tsx is a reusable, themed labeled text input for auth forms.
// It supports an optional leading icon, focus/error visual states, and
// forwards common TextInput props while keeping a simple, typed API.
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    type KeyboardTypeOptions,
    type TextInputProps,
} from "react-native";

import { colors, radius, spacing, typography } from "@/theme";

interface TextFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  autoCorrect?: boolean;
  returnKeyType?: TextInputProps["returnKeyType"];
  onSubmitEditing?: () => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  error,
  keyboardType = "default",
  autoCapitalize = "none",
  autoCorrect = false,
  returnKeyType = "next",
  onSubmitEditing,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputWrapperFocused,
          !!error && styles.inputWrapperError,
        ]}
      >
        {icon ? (
          <Ionicons
            name={icon}
            size={18}
            color={isFocused ? colors.brand.secondary : colors.text.secondary}
            style={styles.icon}
          />
        ) : null}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.muted}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          accessibilityLabel={label}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  label: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    marginBottom: spacing.sm,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radius.lg,
    backgroundColor: colors.background.elevated,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    paddingHorizontal: spacing.lg,
    minHeight: spacing.huge,
  },
  inputWrapperFocused: {
    borderColor: colors.brand.secondary,
  },
  inputWrapperError: {
    borderColor: colors.state.danger,
  },
  icon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    paddingVertical: spacing.md,
  },
  errorText: {
    color: colors.state.danger,
    fontSize: typography.fontSize.xs,
    marginTop: spacing.xs,
  },
});

export default TextField;
