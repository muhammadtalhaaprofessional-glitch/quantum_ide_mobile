import { projects } from "@/data/projects";
import { Project } from "@/types/project";

export const ProjectService = {
  getProjects(): Promise<Project[]> {
    return Promise.resolve(projects);
  },

  getProject(id: string): Promise<Project | undefined> {
    const project = projects.find((item) => item.id === id);
    return Promise.resolve(project);
  },

  searchProjects(query: string): Promise<Project[]> {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return Promise.resolve(projects);
    }

    const results = projects.filter((project) => {
      const titleMatches = project.title
        .toLowerCase()
        .includes(normalizedQuery);
      const descriptionMatches = project.description
        .toLowerCase()
        .includes(normalizedQuery);
      const providerMatches = project.provider
        .toLowerCase()
        .includes(normalizedQuery);
      return titleMatches || descriptionMatches || providerMatches;
    });

    return Promise.resolve(results);
  },
};

export default ProjectService;
