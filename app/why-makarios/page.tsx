import type { Metadata } from "next";
import { Manifesto } from "@/components/sections/Manifesto";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Why Makarios",
};

export default function WhyMakariosPage() {
  return (
    <>
      {/* ============ SECTION 1 — OUVERTURE ============ */}
      <section className="bg-black px-6 md:px-20 pt-32 md:pt-44 pb-10 md:pb-14">
        <Reveal
          as="span"
          className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-5 block"
        >
          04 — Why Makarios?
        </Reveal>
        <Reveal
          as="h1"
          delay={90}
          className="font-display font-bold text-[32px] md:text-[44px] leading-[1.15] text-white"
        >
          Why Makarios.
        </Reveal>
      </section>

      {/* ============ SECTION 2 — MANIFESTE VERTICAL COMPACT ============ */}
      <section className="bg-black px-6 md:px-20 pb-20 md:pb-24">
        <Manifesto />
      </section>
    </>
  );
}
