import { cn } from "@/lib/utils";

export function SpotLight() {
  return (
    <section className="relative mt-10 w-full">
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[28px] w-[28px] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black shadow-[0_0_16px_0_#98c0ef] transition-shadow duration-1000 ease-in-out",
          "hover:animate-colorize hover:shadow-[-2px_2px_16px_0_#d8bd10]",
        )}
      />

      <div
        className={cn(
          "pointer-events-none absolute h-[49rem] w-full overflow-hidden",
        )}
      >
        <SpotLightItem className="animate-[loadrot_2s_ease-in-out_forwards,spotlight_17s_ease-in-out_infinite] [rotate:20deg]" />
        <SpotLightItem className="animate-[loadrot_2s_ease-in-out_forwards,spotlight_14s_ease-in-out_infinite] [rotate:-20deg]" />
        <SpotLightItem className="animate-[loadrot_2s_ease-in-out_forwards,spotlight_21s_ease-in-out_infinite_reverse]" />
      </div>
    </section>
  );
}

function SpotLightItem({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 h-[65rem]",
        "bg-[conic-gradient(from_0deg_at_50%_0%,transparent_45%,rgba(124,124,182,0.3)_49%,rgba(124,145,182,.5)_50%,rgba(124,145,182,.3)_51%,transparent_55%)]",
        "origin-top opacity-50 blur-xl",
        className,
      )}
    />
  );
}
