import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface SkillProps {
  name:
    | "aws"
    | "docker"
    | "JavaScript"
    | "TypeScript"
    | "NestJS"
    | "Next.js"
    | "PostgreSQL"
    | "react"
    | "Python"
    | "tailwindcss"
    | "TypeScript"
    | "cloudflare";
  level: "strong" | "intermediate" | "weak";
}

export function Skill({ name, level }: SkillProps) {
  const skillLogoName = name.toLowerCase().replace(/\./g, "");

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge
          className="flex h-fit cursor-default items-center gap-1 text-sm"
          variant={"secondary"}
        >
          <img
            src={`/skill-logo/${skillLogoName}-logo.svg`}
            className="h-5 w-5"
          />
          {name}
        </Badge>
      </TooltipTrigger>
      <TooltipContent className="font-semibold">{level}</TooltipContent>
    </Tooltip>
  );
}
