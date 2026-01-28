import { About } from "@/components/main/about";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Certification } from "@/components/main/certification";
import { Projects } from "@/components/main/projects";
import Skills from "@/components/main/skills";
import { Contact } from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-5">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Certification />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
