// PasswordField.tsx is a reusable, themed password input for auth forms.
// It mirrors TextField's visual language but adds a show/hide toggle so
// users can verify what they typed before submitting.
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    type TextInputProps,
} from "react-native";

import { colors, radius, spacing, typography } from "@/theme";

interface PasswordFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  returnKeyType?: TextInputProps["returnKeyType"];
  onSubmitEditing?: () => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder = "Enter your password",
  error,
  returnKeyType = "done",
  onSubmitEditing,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
        <Ionicons
          name="lock-closed-outline"
          size={18}
          color={isFocused ? colors.brand.secondary : colors.text.secondary}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.text.muted}
          secureTextEntry={!isVisible}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          accessibilityLabel={label}
        />
        <Pressable
          onPress={() => setIsVisible((prev) => !prev)}
          accessibilityRole="button"
          accessibilityLabel={isVisible ? "Hide password" : "Show password"}
          hitSlop={8}
        >
          <Ionicons
            name={isVisible ? "eye-off-outline" : "eye-outline"}
            size={20}
            color={colors.text.secondary}
          />
        </Pressable>
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
    gap: spacing.sm,
  },
  inputWrapperFocused: {
    borderColor: colors.brand.secondary,
  },
  inputWrapperError: {
    borderColor: colors.state.danger,
  },
  icon: {
    marginRight: spacing.xs,
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

export default PasswordField;
