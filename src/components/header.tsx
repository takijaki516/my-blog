import Link from "next/link";

import { cn } from "@/lib/utils";

export function Header() {
  return (
    <nav
      className={cn(
        "sticky top-10 z-20 flex w-full max-w-fit items-center justify-center gap-6 rounded-full border border-border bg-card px-8 py-4 transition-all duration-300",
        "before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(farthest-side_at_50%_100%,hsl(var(--primary)),transparent)] before:opacity-10 before:transition-all before:duration-300 before:ease-in-out before:content-['']",
        "hover:before:bg-[radial-gradient(farthest-side_at_50%_100%,hsl(var(--primary)),transparent)] hover:before:opacity-30",
      )}
    >
      <Link
        href=""
        className="relative z-10 bg-[linear-gradient(0deg,#d8ecf8,#98c0ef)] bg-clip-text text-transparent"
      >
        Profile
      </Link>

      <Link
        href=""
        className="relative z-10 bg-[linear-gradient(0deg,#d8ecf8,#98c0ef)] bg-clip-text text-transparent"
      >
        Projects
      </Link>

      <span className="mask-button absolute inset-[-1px] rounded-full">
        <GlowBorder className="animate-[move-border_var(--loop-cycle)_linear_infinite]" />
        <GlowBorder className="animate-[move-border_var(--loop-cycle)_linear_infinite] [animation-delay:calc(var(--loop-cycle)/-2)]" />
      </span>
    </nav>
  );
}

function GlowBorder({ className }: { className: string }) {
  return (
    <span
      className={cn(
        "absolute inline-block aspect-square h-full",
        "bg-[radial-gradient(circle_at_50%_50%,var(--border-accent),transparent)]",
        "offset-border",
        className,
      )}
    />
  );
}
