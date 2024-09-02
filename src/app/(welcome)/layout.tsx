import type { Metadata } from "next";

import * as React from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Welcome to My Blog",
  description: "Welcome page of my blog",
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
