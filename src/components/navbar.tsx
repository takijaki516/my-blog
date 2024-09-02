"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ToggleTheme } from "./theme-toggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-x-4 px-2">
          <Link
            href="/profile"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname.startsWith("/profile")
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            Profile
          </Link>

          <Link
            href="/projects"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname.startsWith("/projects")
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            Projects
          </Link>
        </div>

        <ToggleTheme />
      </nav>
    </header>
  );
}
