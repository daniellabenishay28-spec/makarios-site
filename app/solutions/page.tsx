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
      <section className="bg-black px-6 md:px-20 pt-20 pb-14 md:pt-28 md:pb-16">
        <Reveal as="span" className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55">
          03 — Our Solutions
        </Reveal>
        <Reveal as="h1" delay={90} className="font-display font-bold text-[32px] md:text-[38px] text-white mt-4 max-w-2xl">
          Our Solutions.
        </Reveal>
      </section>

      {/* ============ LISTE — LES 7 SOLUTIONS BUSINESS ============ */}
      <section className="bg-black px-6 md:px-20 pb-20 md:pb-28">
        <div className="flex flex-col max-w-3xl">
          {solutions.map((solution, i) => (
            <Reveal
              key={solution.number}
              as="div"
              className={`py-10 md:py-14 border-t border-white/14 ${
                i === solutions.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="font-display font-bold text-sm text-green">{solution.number}</div>
              <div className="font-display font-bold text-2xl md:text-[34px] leading-[1.25] text-white mt-3.5">
                {solution.name}
              </div>
              <div className="font-body italic text-lg md:text-xl leading-relaxed text-white/68 mt-3.5">
                {solution.tagline}
              </div>
              <div className="font-body text-base md:text-[16.5px] leading-relaxed text-white/65 mt-3.5 max-w-xl">
                {solution.description}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
