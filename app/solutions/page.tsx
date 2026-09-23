import type { Metadata } from "next";
import { solutions } from "@/content/solutions";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Les 7 solutions business de MAKARIOS CORPORATION.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* ============ SECTION 1 — OUVERTURE ============ */}
      <section className="relative bg-black px-6 md:px-20 pt-32 md:pt-44 pb-16 md:pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-10 -top-10 font-display font-extrabold text-[220px] md:text-[340px] leading-none text-white/[.035] select-none pointer-events-none"
        >
          {String(solutions.length).padStart(2, "0")}
        </div>
        <div aria-hidden className="w-8 h-px bg-green mb-6" />
        <Reveal as="span" className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55">
          03 — Our Solutions
        </Reveal>
        <Reveal as="h1" delay={90} className="font-display font-bold text-[34px] md:text-[46px] text-white mt-5 max-w-2xl">
          Our Solutions.
        </Reveal>
      </section>

      {/* ============ LISTE — LES 7 SOLUTIONS BUSINESS ============ */}
      <section className="bg-black border-t border-white/10">
        {solutions.map((solution, i) => (
          <Reveal
            key={solution.number}
            as="div"
            className={`group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 px-6 md:px-20 py-12 md:py-16 border-b border-white/10 transition-colors duration-300 ease-editorial motion-reduce:transition-none hover:bg-white/[.02] ${
              i % 2 === 1 ? "bg-white/[.012]" : ""
            }`}
          >
            <div className="md:col-span-3 flex items-baseline gap-4 md:gap-0 md:flex-col">
              <span className="font-display font-extrabold text-5xl md:text-7xl leading-none text-green/85 transition-colors duration-300 ease-editorial motion-reduce:transition-none group-hover:text-green">
                {solution.number}
              </span>
            </div>
            <div className="md:col-span-4">
              <div className="font-display font-bold text-2xl md:text-[30px] leading-[1.2] text-white">
                {solution.name}
              </div>
              <div className="font-body italic text-base md:text-lg leading-relaxed text-white/62 mt-3">
                {solution.tagline}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="font-body text-base md:text-[16.5px] leading-relaxed text-white/65 md:max-w-md md:mt-1">
                {solution.description}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
