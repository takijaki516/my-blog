import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface ProjectFrontmatter {
  title: string;
  description: string;
  techStacks: string[];
  githubURL: string;
  demoURL: string;
}

export interface ProjectMarkdown extends ProjectFrontmatter {
  slug: string;
  content: string;
}

export function getProjectContent(slug: string): ProjectMarkdown {
  const markdownPath = join(
    process.cwd(),
    "src/content/projects",
    `${slug}.md`,
  );
  const fileContent = readFileSync(markdownPath, "utf-8");

  // NOTE: 타입
  const { content, data } = matter(fileContent) as unknown as {
    data: ProjectFrontmatter;
    content: string;
  };

  const processedContent = remark().use(html).processSync(content).toString();

  return {
    slug,
    content: processedContent,
    ...data,
  };
}

export function getAllProjects() {
  const projectsDir = join(process.cwd(), "src/content/projects");
  const fileNames = readdirSync(projectsDir);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}
