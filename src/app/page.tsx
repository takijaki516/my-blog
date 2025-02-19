import { Header } from "@/components/header";
import { Contacts } from "@/components/sections/contacts";
import { Hero } from "@/components/sections/hero";
import { Particles } from "@/components/sections/particles";
import Profile from "@/components/sections/profile";
import { Projects } from "@/components/sections/projects";
import { SpotLight } from "@/components/sections/spotlight";
import { getAllProjects, getProjectContent } from "@/lib/markdown";

export default function HomePage() {
  const projects = getAllProjects().map(getProjectContent);

  return (
    <main className="relative isolate flex flex-col items-center py-10">
      <Particles />

      <Header />
      <SpotLight />

      <Hero />
      <Profile />
      <Projects projects={projects} />
      <Contacts />
    </main>
  );
}
