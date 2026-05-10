import { profile } from "@/data/profile";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      label="$ ls cloud-projects/"
      title="Cloud Engineering Projects"
      description="The revised midterm and new job technology projects are the main evidence for my cloud engineering direction."
    >
      <div className="grid gap-6">
        {profile.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
