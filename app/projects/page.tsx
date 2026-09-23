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
    <div className="flex flex-col">
      <div className="relative px-6 md:px-20 pt-32 md:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-6 -top-6 font-display font-extrabold text-[220px] md:text-[340px] leading-none text-white/[.035] select-none pointer-events-none"
        >
          06
        </div>
        <div aria-hidden className="w-8 h-px bg-green mb-6" />
        <Reveal
          as="div"
          className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-5"
        >
          06 — Projects / Portfolio
        </Reveal>
        <Reveal
          as="h1"
          delay={90}
          className="font-display font-bold text-3xl md:text-[46px] leading-tight text-white mb-7"
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

      <div className="border-t border-white/10 px-6 md:px-20 py-14 md:py-16 flex flex-col gap-10 md:gap-12">
        <ProjectPlaceholder />

        <div className="flex flex-col gap-8">
          <Reveal as="p" className="font-body italic text-lg text-white/62 max-w-xl">
            {projectsPlaceholder.editorialNote}
          </Reveal>
          <Reveal as="div" delay={90} className="flex flex-col md:flex-row gap-4 md:gap-10">
            <Cta {...ctas.discoverMethod} />
            <Cta {...ctas.letsTalk} tone="muted" />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
