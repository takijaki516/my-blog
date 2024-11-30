"use client";

import * as React from "react";
import { Home, Link } from "lucide-react";
import { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Blog",
  description: "My Blog",
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("flex min-h-screen flex-col bg-background antialiased")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
            <div className="space-y-6 text-center">
              <div>
                <h1 className="text-4xl font-bold text-foreground md:text-6xl">
                  Sorry, something went wrong!
                </h1>
              </div>

              <div>
                <Button
                  asChild
                  variant="ghost"
                  className="group gap-2 text-lg text-primary"
                >
                  <Link href="/">
                    <Home className="h-5 w-5" />
                    Return Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
