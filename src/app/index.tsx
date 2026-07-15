import { ScrollView, StyleSheet, Text, View } from "react-native";

import ActionButton from "@/components/buttons/ActionButton";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeader from "@/components/common/SectionHeader";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { projects } from "@/data/projects";
import { colors, radius, shadows, spacing, typography } from "@/theme";

const quickActions = [
  { title: "New Project", icon: "add-circle-outline" as const },
  { title: "Run Simulation", icon: "play-forward-outline" as const },
  { title: "Ask AI", icon: "sparkles-outline" as const },
];

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Quantum IDE</Text>
          <Text style={styles.heroSubtitle}>
            Your mobile companion for quantum computing.
          </Text>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Recent Projects" />
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPress={() => undefined}
            />
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Quick Actions" />
          <View style={styles.actionsList}>
            {quickActions.map((action) => (
              <ActionButton
                key={action.title}
                title={action.title}
                icon={action.icon}
                onPress={() => undefined}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
  },
  contentContainer: {
    paddingBottom: spacing.xxxl,
  },
  hero: {
    marginBottom: spacing.xxl,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background.elevated,
    borderRadius: radius.xl,
    ...shadows.glow,
  },
  heroTitle: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.relaxed,
  },
  section: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  actionsList: {
    gap: spacing.md,
  },
});
