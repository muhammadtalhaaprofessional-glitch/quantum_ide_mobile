import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import AuthHeader from "@/components/auth/AuthHeader";
import PasswordField from "@/components/auth/PasswordField";
import TextField from "@/components/auth/TextField";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import AuthService from "@/services/AuthService";
import { colors, spacing, typography } from "@/theme";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MINIMUM_PASSWORD_LENGTH = 8;

const RegisterScreen: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameError, setFullNameError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>();
  const [statusMessage, setStatusMessage] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameError("Full name is required.");
      isValid = false;
    } else {
      setFullNameError(undefined);
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      setEmailError("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(undefined);
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < MINIMUM_PASSWORD_LENGTH) {
      setPasswordError(`Use at least ${MINIMUM_PASSWORD_LENGTH} characters.`);
      isValid = false;
    } else {
      setPasswordError(undefined);
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password.");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmPasswordError(undefined);
    }

    return isValid;
  };

  const handleCreateAccount = async () => {
    setStatusMessage(undefined);

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);
      const user = await AuthService.register({ fullName, email });
      setStatusMessage(`Account created for ${user.fullName}.`);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to create your account.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      style={styles.screen}
    >
      <AuthHeader
        title="Create your account"
        subtitle="Start building and simulating quantum circuits."
      />

      <View style={styles.form}>
        <TextField
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholder="Ada Lovelace"
          icon="person-outline"
          autoCapitalize="words"
          error={fullNameError}
        />
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          icon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          error={emailError}
        />
        <PasswordField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="At least 8 characters"
          returnKeyType="next"
          error={passwordError}
        />
        <PasswordField
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Re-enter your password"
          error={confirmPasswordError}
          onSubmitEditing={handleCreateAccount}
        />

        {statusMessage ? <Text style={styles.statusText}>{statusMessage}</Text> : null}

        <PrimaryButton
          title="Create Account"
          onPress={handleCreateAccount}
          loading={isSubmitting}
        />

        <View style={styles.signInRow}>
          <Text style={styles.promptText}>Already have an account?</Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => setStatusMessage("Sign-in navigation is not available yet.")}
          >
            <Text style={styles.linkText}>Sign In</Text>
          </Pressable>
        </View>
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
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxxl,
  },
  form: {
    gap: spacing.md,
  },
  statusText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    textAlign: "center",
  },
  signInRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    marginTop: spacing.lg,
  },
  promptText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
  },
  linkText: {
    color: colors.brand.secondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
});

export default RegisterScreen;
