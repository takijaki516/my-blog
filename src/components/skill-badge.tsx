import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type SkillBadge = {
  children: React.ReactNode;
  className?: string;
};

export function SkillBadge({ children, className }: SkillBadge) {
  return <Badge className={cn("relative p-1", className)}>{children}</Badge>;
}
