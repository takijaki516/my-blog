import { cn } from "@/lib/utils";
import AnimatedShinyText from "../ui/animated-shiny-text";

export function Hero() {
  return (
    <section className="relative mt-60 flex h-[600px] w-full flex-col items-center overflow-hidden">
      <h1
        aria-hidden="true"
        className="absolute max-w-80 animate-text-fade text-center text-6xl font-bold text-transparent"
      >
        WELCOME TO MY BLOG
      </h1>

      <AnimatedShinyText className="relative max-w-80 text-center text-6xl font-bold">
        WELCOME TO MY BLOG
      </AnimatedShinyText>

      <div
        id="horizon"
        className="absolute top-[40%] h-[70%] w-[200%] rounded-[100%_100%] bg-primary/25 blur-3xl"
      />

      <div
        id="earth"
        className={cn(
          "absolute top-1/2 h-[200%] w-[250%] rounded-[100%_100%] bg-background",
          "before:absolute before:inset-0 before:rounded-[100%_100%] before:shadow-[inset_0px_3px_20px_0px_hsl(var(--primary))] before:content-['']",
        )}
      />
    </section>
  );
}
