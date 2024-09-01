"use client";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button variant="ghost" size={"icon"}>
      {theme === "dark" ? (
        <SunIcon onClick={() => setTheme("light")} className="w-6 h-6" />
      ) : (
        <MoonIcon onClick={() => setTheme("dark")} className="w-6 h-6" />
      )}
    </Button>
  );
};
