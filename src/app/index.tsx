import { ScrollView, StyleSheet, View } from "react-native";

import ActionCard from "@/components/cards/ActionCard";
import DashboardProjectCard from "@/components/cards/DashboardProjectCard";
import AppHeader from "@/components/common/AppHeader";
import SectionHeader from "@/components/common/SectionHeader";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { spacing } from "@/theme";

const recentProjects = [
  {
    id: "proj-bell-001",
    title: "Bell State Demo",
    qubits: 2,
    updatedAt: "2026-06-20T09:15:00.000Z",
  },
  {
    id: "proj-grover-002",
    title: "Grover Search",
    qubits: 3,
    updatedAt: "2026-05-10T14:42:00.000Z",
  },
  {
    id: "proj-teleport-003",
    title: "Quantum Teleportation",
    qubits: 3,
    updatedAt: "2026-04-02T11:03:00.000Z",
  },
];

const quickActions = [
  { title: "New Project", icon: "add-circle-outline" as const },
  { title: "Run Simulation", icon: "play-forward-outline" as const },
  { title: "Ask Quantum AI", icon: "sparkles-outline" as const },
];

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
      >
        <AppHeader />

        <View style={styles.section}>
          <SectionHeader title="Recent Projects" />
          {recentProjects.map((project) => (
            <DashboardProjectCard
              key={project.id}
              project={project as any}
              onPress={() => undefined}
            />
          ))}
        </View>

        <View style={styles.section}>
          <SectionHeader title="Quick Actions" />
          <View style={styles.actionsList}>
            {quickActions.map((action) => (
              <ActionCard
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
  section: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  actionsList: {
    gap: spacing.md,
  },
});
