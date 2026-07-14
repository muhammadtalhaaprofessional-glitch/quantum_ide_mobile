// ScreenContainer provides a reusable full-screen layout shell for app screens.
// It uses SafeAreaView with the shared dark theme colors and consistent horizontal spacing.
import React from "react";
import { SafeAreaView, StyleSheet, View, type ViewProps } from "react-native";

import { colors, spacing } from "@/theme";

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.background.base,
  },
});

export default ScreenContainer;
