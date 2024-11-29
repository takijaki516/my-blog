"use client";

import { ExternalLink } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Project {
  title: string;
  description: string;
  techStacks: string[];
  githubURL: string;
  demoURL: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "This is a project1",
    techStacks: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubURL: "https://github.com/",
    demoURL: "exex",
  },
  {
    title: "Project Two",
    description: "This is a project2",
    techStacks: ["React", "NestJS", "PostgreSQL"],
    githubURL: "Exex",
    demoURL: "exex",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container mt-16 w-full">
      <h2 className="pb-4 text-3xl font-bold">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col border-border/50 bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStacks.map((tech, techIndex) => (
                  <Badge variant="default" key={techIndex}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between">
              <Button
                variant={"outline"}
                className="border-border-accent flex items-center gap-2"
                onClick={() => window.open(project.githubURL, "_blank")}
              >
                <img src="/github-mark.svg" className="h-4 w-4" />
                GitHub
              </Button>

              <Button
                variant={"outline"}
                className="border-border-accent flex items-center gap-2"
                onClick={() => window.open(project.demoURL, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
