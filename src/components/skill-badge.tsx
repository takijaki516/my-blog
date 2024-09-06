import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type SkillBadge = {
  children: React.ReactNode;
  className?: string;
};

export function SkillBadge({ children, className }: SkillBadge) {
  return (
    <Badge variant={"secondary"} className={cn("py-2 px-4", className)}>
      {children}
    </Badge>
  );
}
