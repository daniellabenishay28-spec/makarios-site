import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { approachHeroSignature, methodEyebrow } from "@/content/approachSteps";
import { ctas } from "@/content/ctas";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Approach",
  description: "The Makarios Method — Comprendre. Concevoir. Connecter. Concrétiser. Croître.",
};

export default function ApproachPage() {
  return (
    <>
      {/* ============ SECTION 1 — SIGNATURE DE MARQUE ============ */}
      <section className="relative bg-black min-h-[70vh] md:min-h-[640px] flex flex-col items-center justify-center text-center px-6 py-20 md:py-0">
        <Reveal
          as="span"
          className="absolute top-28 left-6 md:left-20 font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55"
        >
          05 — Our Approach
        </Reveal>
        <div className="flex flex-col items-center">
          {approachHeroSignature.map((word, i) => (
            <div key={word} className="contents">
              <Reveal
                as="span"
                delay={i * 110}
                className="font-display font-extrabold text-[28px] md:text-[46px] leading-[1.25] tracking-wide text-white"
              >
                {word}
              </Reveal>
              {i < approachHeroSignature.length - 1 && (
                <span aria-hidden className="w-[26px] h-[2px] bg-green/70 my-2.5 md:my-3" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 2 — RESPIRATION BLANCHE ============ */}
      <section className="bg-white py-16 md:h-[220px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Reveal as="span" className="font-body font-semibold text-xs tracking-[.18em] uppercase text-black/55">
            {methodEyebrow}
          </Reveal>
          <span aria-hidden className="w-[26px] h-[2px] bg-green/60 mt-3.5" />
        </div>
      </section>

      {/* ============ SECTION 3 — THE MAKARIOS METHOD (5 ÉTAPES) ============ */}
      <section className="bg-black px-6 md:px-20 py-20 md:py-28">
        <ApproachSteps />
      </section>

      {/* ============ SECTION 4 — CTA DE SORTIE ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-16 md:py-20 flex flex-col gap-7">
        <span aria-hidden className="w-8 h-px bg-green" />
        <Reveal as="div" className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center">
          <Cta {...ctas.viewProjects} />
          <Cta {...ctas.letsTalk} tone="muted" />
        </Reveal>
      </section>
    </>
  );
}
