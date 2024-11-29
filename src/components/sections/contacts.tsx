"use client";

import * as React from "react";
import { ClipboardCheck, Copy, Mail } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const EMAIL = "takijaki516@gmail.com";
const GITHUB_URL = "https://github.com/takijaki516";

export function Contacts() {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  return (
    <section id="contacts" className="container mt-28 w-full">
      <h2 className="pb-4 text-3xl font-bold">Contacts</h2>
      <Card className="border-border/50">
        <CardContent className="grid gap-4 p-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 text-foreground/80 transition-colors hover:text-foreground"
              >
                <div className="rounded-lg bg-muted p-2">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-lg">{EMAIL}</span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => {
                  navigator.clipboard.writeText(EMAIL);
                  setIsCopied(true);
                }}
              >
                {isCopied ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ClipboardCheck className="h-4 w-4" />
                  </div>
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground/80 transition-colors hover:text-foreground"
            >
              <div className="rounded-lg bg-muted p-2">
                <img src="/github-mark.svg" className="h-5 w-5" />
              </div>
              <span className="text-lg">{GITHUB_URL}</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
