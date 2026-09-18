import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { ProjectPlaceholder } from "@/components/projects/ProjectPlaceholder";
import { projectsPlaceholder } from "@/content/placeholders";
import { ctas } from "@/content/ctas";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Projects / Portfolio",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 md:px-20 py-28 md:py-32 flex flex-col gap-16">
      <div>
        <Reveal
          as="div"
          className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-5"
        >
          06 — Projects / Portfolio
        </Reveal>
        <Reveal
          as="h1"
          delay={90}
          className="font-display font-bold text-3xl md:text-[46px] leading-tight text-white mb-6"
        >
          PROJECTS / PORTFOLIO
        </Reveal>
        <Reveal
          as="div"
          delay={180}
          className="flex items-center gap-4 font-body font-semibold text-[13px] tracking-[.1em] uppercase text-white/75"
        >
          <span>PROBLÈME</span>
          <span className="text-green">→</span>
          <span>SOLUTION</span>
          <span className="text-green">→</span>
          <span>RÉSULTAT</span>
        </Reveal>
      </div>

      <ProjectPlaceholder />

      <div className="border-t border-white/10 pt-14 md:pt-16 flex flex-col gap-8">
        <Reveal as="p" className="font-body italic text-lg text-white/62 max-w-xl">
          {projectsPlaceholder.editorialNote}
        </Reveal>
        <Reveal as="div" delay={90} className="flex flex-col md:flex-row gap-4 md:gap-10">
          <Cta {...ctas.discoverMethod} />
          <Cta {...ctas.letsTalk} tone="muted" />
        </Reveal>
      </div>
    </div>
  );
}
