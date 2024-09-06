import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { HorizontalEffect } from "@/components/sections/horizontal-effect";
import { Particles } from "@/components/sections/particles";
import { SpotLight } from "@/components/sections/spotlight";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center py-10">
      <Particles />

      <Header />
      <SpotLight />

      <Hero />
      <HorizontalEffect />
    </main>
  );
}
