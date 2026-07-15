import { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
    type ListRenderItem,
} from "react-native";

import ProjectCard from "@/components/cards/ProjectCard";
import SectionHeader from "@/components/common/SectionHeader";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { ProjectService } from "@/services/projectService";
import { colors, radius, shadows, spacing, typography } from "@/theme";
import { Project } from "@/types/project";

export default function ProjectsScreen() {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    ProjectService.getProjects().then(setProjects);
  }, []);

  useEffect(() => {
    ProjectService.searchProjects(query).then(setProjects);
  }, [query]);

  const renderItem: ListRenderItem<Project> = ({ item }) => (
    <ProjectCard project={item} onPress={() => undefined} />
  );

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <SectionHeader title="Projects" />
        <Text style={styles.subtitle}>
          Find and manage your active quantum experiments.
        </Text>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          placeholder="Search projects"
          placeholderTextColor={colors.text.secondary}
          accessibilityLabel="Search projects"
        />
      </View>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No matching projects found.</Text>
        }
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.subtle,
    marginBottom: spacing.lg,
  },
  subtitle: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.relaxed,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  searchInput: {
    borderRadius: radius.lg,
    backgroundColor: colors.background.elevated,
    color: colors.text.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 1,
    borderColor: colors.border.subtle,
    ...shadows.subtle,
  },
  listContent: {
    paddingBottom: spacing.xxxl,
  },
  emptyText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.md,
    textAlign: "center",
    marginTop: spacing.xl,
  },
});
