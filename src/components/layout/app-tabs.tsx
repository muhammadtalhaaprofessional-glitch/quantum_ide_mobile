import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors, spacing } from "@/theme";

const tabBarTheme = {
  headerShown: false,
  tabBarActiveTintColor: colors.brand.secondary,
  tabBarInactiveTintColor: colors.text.muted,
  tabBarStyle: {
    backgroundColor: colors.background.elevated,
    borderTopColor: colors.border.subtle,
    borderTopWidth: 1,
    height: 74,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xs,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: "600",
  },
  tabBarItemStyle: {
    paddingVertical: 4,
  },
} as const;

export default function AppTabs() {
  return (
    <Tabs screenOptions={tabBarTheme}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "folder" : "folder-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: "AI",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "sparkles" : "sparkles-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
