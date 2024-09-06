"use client";

import * as React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

import { cn } from "@/lib/utils";

type SkillCardProps = {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
};

export function SkillCard({ className, icon, text }: SkillCardProps) {
  const [randomString, setRandomString] = React.useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  function onMouseMove(e: React.MouseEvent) {
    setRandomString(generateRandomString(1500));

    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <div
      className={cn(
        "group/card relative flex size-full items-center justify-center overflow-hidden bg-transparent",
        className,
      )}
      onMouseMove={onMouseMove}
    >
      <CardPattern
        mouseX={mouseX}
        mouseY={mouseY}
        randomString={randomString}
      />

      <div className="relative z-[0] flex size-44 flex-col items-center justify-center text-4xl font-bold text-white">
        <div className="absolute z-[-1] size-full rounded-full bg-white/[0.8] blur-sm dark:bg-black/[0.8]" />

        <span className="whitespace-nowrap text-black dark:text-white">
          {text}
        </span>

        {/* <span className="mt-4 whitespace-nowrap text-black dark:text-white">
          {icon}
        </span> */}
      </div>
    </div>
  );
}

type CardPatternProps = {
  mouseX: any;
  mouseY: any;
  randomString: string;
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString,
}: CardPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(100px at ${mouseX}px ${mouseY}px, black, transparent)`;

  const styleObj = { maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-0 transition duration-500 group-hover/card:opacity-100"
        style={styleObj}
      />

      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={styleObj}
      >
        <p className="absolute inset-0 whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
