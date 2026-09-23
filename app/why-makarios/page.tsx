import type { Metadata } from "next";
import { Manifesto } from "@/components/sections/Manifesto";
import { whyMakariosArguments } from "@/content/whyMakarios";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Why Makarios",
};

export default function WhyMakariosPage() {
  return (
    <>
      {/* ============ SECTION 1 — OUVERTURE ============ */}
      <section className="relative bg-black px-6 md:px-20 pt-32 md:pt-44 pb-14 md:pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-6 -top-6 font-display font-extrabold text-[220px] md:text-[340px] leading-none text-white/[.035] select-none pointer-events-none"
        >
          {String(whyMakariosArguments.length).padStart(2, "0")}
        </div>
        <div aria-hidden className="w-8 h-px bg-green mb-6" />
        <Reveal
          as="span"
          className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-5 block"
        >
          04 — Why Makarios?
        </Reveal>
        <Reveal
          as="h1"
          delay={90}
          className="font-display font-bold text-[34px] md:text-[46px] leading-[1.15] text-white"
        >
          Why Makarios.
        </Reveal>
      </section>

      {/* ============ SECTION 2 — MANIFESTE ÉDITORIAL ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 pb-20 md:pb-28">
        <Manifesto />
      </section>
    </>
  );
}
