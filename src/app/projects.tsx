import { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    type ListRenderItem,
} from "react-native";

import ProjectCard from "@/components/cards/ProjectCard";
import EmptyState from "@/components/common/EmptyState";
import FloatingActionButton from "@/components/common/FloatingActionButton";
import SearchBar from "@/components/inputs/SearchBar";
import ScreenContainer from "@/components/layout/ScreenContainer";
import { ProjectService } from "@/services/projectService";
import { colors, spacing, typography } from "@/theme";
import { Project } from "@/types/project";

export default function ProjectsScreen() {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      setIsLoading(true);
      const data = await ProjectService.getProjects();
      if (isMounted) {
        setProjects(data);
        setIsLoading(false);
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const searchProjects = async () => {
      setIsLoading(true);
      const data = await ProjectService.searchProjects(query);
      if (isMounted) {
        setProjects(data);
        setIsLoading(false);
      }
    };

    searchProjects();

    return () => {
      isMounted = false;
    };
  }, [query]);

  const renderItem: ListRenderItem<Project> = ({ item }) => (
    <ProjectCard project={item} onPress={() => undefined} />
  );

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Projects</Text>
        <Text style={styles.subtitle}>
          Manage and organize your quantum projects.
        </Text>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Search projects"
          onClear={() => setQuery("")}
        />
      </View>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={!isLoading ? <EmptyState /> : null}
      />

      <FloatingActionButton label="New Project" onPress={() => undefined} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: spacing.lg,
    marginBottom: spacing.lg,
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
    marginBottom: spacing.md,
  },
  listContent: {
    paddingBottom: spacing.xxxl,
  },
});
