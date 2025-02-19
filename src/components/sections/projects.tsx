"use client";

import { type ProjectMarkdown } from "@/lib/markdown";
import { ProjectCard } from "./project-card";

export function Projects({ projects }: { projects: ProjectMarkdown[] }) {
  return (
    <section id="projects" className="container mt-16 w-full">
      <h2 className="pb-4 text-3xl font-bold">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} projectMarkdownPayloads={project} />
        ))}
      </div>
    </section>
  );
}
