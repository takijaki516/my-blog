"use client";

import * as React from "react";
import { ExternalLink, Book } from "lucide-react";

import { type ProjectMarkdown } from "@/lib/markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProjectCard({
  projectMarkdownPayloads: markdownPayloads,
}: {
  projectMarkdownPayloads: ProjectMarkdown;
}) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const { demoURL, content, description, githubURL, slug, techStacks, title } =
    markdownPayloads;

  return (
    <>
      <Card className="flex flex-col border-border/50 bg-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="mb-4 font-semibold text-muted-foreground">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStacks.map((tech, techIndex) => (
              <Badge variant="default" key={techIndex}>
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center gap-2">
          <Button
            variant={"outline"}
            className="border-border-accent flex items-center gap-2"
            onClick={() => setIsDialogOpen(true)}
          >
            <Book className="h-4 w-4" />
            프로젝트 소개
          </Button>

          <Button
            variant={"outline"}
            className="border-border-accent flex items-center gap-2"
            onClick={() => window.open(githubURL, "_blank")}
          >
            <img src="/github-mark.svg" className="h-4 w-4" />
            GitHub
          </Button>

          <Button
            variant={"outline"}
            className="border-border-accent flex items-center gap-2"
            onClick={() => window.open(demoURL, "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-h-[calc(100svh-10rem)] w-full max-w-2xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">{title}</DialogTitle>
          </DialogHeader>

          {content && (
            <div
              className="prose dark:prose-invert prose-ol:pt-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          <Button
            onClick={() => setIsDialogOpen(false)}
            className="mt-4 text-lg font-semibold"
          >
            닫기
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
