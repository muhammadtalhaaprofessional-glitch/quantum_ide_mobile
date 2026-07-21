import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import AuthHeader from "@/components/auth/AuthHeader";
import Divider from "@/components/auth/Divider";
import PasswordField from "@/components/auth/PasswordField";
import SocialButton from "@/components/auth/SocialButton";
import TextField from "@/components/auth/TextField";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import AuthService from "@/services/AuthService";
import { colors, radius, spacing, typography } from "@/theme";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [statusMessage, setStatusMessage] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    let isValid = true;

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
    } else {
      setPasswordError(undefined);
    }

    return isValid;
  };

  const handleSignIn = async () => {
    setStatusMessage(undefined);

    if (!validate()) {
      return;
    }

    try {
      setIsSubmitting(true);
      const user = await AuthService.login(email, password);
      setStatusMessage(`Signed in as ${user.fullName}.`);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to sign in.",
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
        title="Welcome back"
        subtitle="Sign in to continue building with Quantum IDE."
      />

      <View style={styles.form}>
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
          error={passwordError}
          onSubmitEditing={handleSignIn}
        />

        <View style={styles.optionsRow}>
          <Pressable
            accessibilityRole="checkbox"
            accessibilityState={{ checked: rememberMe }}
            onPress={() => setRememberMe((value) => !value)}
            style={styles.rememberOption}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe ? (
                <Ionicons name="checkmark" size={14} color={colors.text.primary} />
              ) : null}
            </View>
            <Text style={styles.optionText}>Remember me</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            onPress={() => setStatusMessage("Password recovery is not available yet.")}
          >
            <Text style={styles.linkText}>Forgot password?</Text>
          </Pressable>
        </View>

        {statusMessage ? <Text style={styles.statusText}>{statusMessage}</Text> : null}

        <PrimaryButton
          title="Sign In"
          onPress={handleSignIn}
          loading={isSubmitting}
        />

        <Divider />

        <SocialButton
          title="Continue with Google"
          icon="logo-google"
          onPress={() => setStatusMessage("Google sign-in is not available yet.")}
        />

        <View style={styles.createAccountRow}>
          <Text style={styles.optionText}>New to Quantum IDE?</Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => setStatusMessage("Account creation is not available yet.")}
          >
            <Text style={styles.linkText}>Create Account</Text>
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
  optionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  rememberOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  checkbox: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border.strong,
    borderRadius: radius.sm,
    backgroundColor: colors.background.elevated,
  },
  checkboxChecked: {
    borderColor: colors.brand.primary,
    backgroundColor: colors.brand.primary,
  },
  optionText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
  },
  linkText: {
    color: colors.brand.secondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
  statusText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    textAlign: "center",
  },
  createAccountRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xs,
    marginTop: spacing.lg,
  },
});

export default LoginScreen;
