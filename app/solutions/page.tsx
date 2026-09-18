import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { ImageSection } from "@/components/sections/ImageSection";
import { poles } from "@/content/poles";
import { ctas } from "@/content/ctas";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description: "MAKARIOS CORPORATION s’articule autour de 4 grands pôles.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* ============ SECTION 1 — OUVERTURE ============ */}
      <section className="bg-black px-6 md:px-20 pt-20 pb-14 md:pt-28 md:pb-16">
        <Reveal
          as="span"
          className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55"
        >
          03 — Our Solutions
        </Reveal>
        <Reveal
          as="h1"
          delay={90}
          className="font-display font-bold text-[32px] md:text-[38px] text-white mt-4 max-w-2xl"
        >
          Quatre pôles. Une seule vision.
        </Reveal>
        <Reveal as="p" delay={180} className="font-body text-sm md:text-[15px] text-white/70 mt-4 max-w-lg">
          MAKARIOS CORPORATION s’articule autour de 4 grands pôles.
        </Reveal>
      </section>

      {/*
        ============ BANDES — UNE PAR PÔLE, ALTERNÉES ============
        Phase 2 (Motion) : les 4 bandes partagent la même interaction de
        dominance qu'ailleurs sur le site (Home, brief section 8) — au survol
        ou au focus d'une bande sur desktop, les 3 autres s'estompent
        légèrement (styles/globals.css, .pole-grid/.pole-tile). Le marqueur
        est posé sur le conteneur <section> ; le reveal au scroll du contenu
        (texte, image) reste porté par des éléments enfants distincts pour ne
        jamais entrer en conflit avec cette opacité pilotée en CSS.
      */}
      <div className="pole-grid">
        {poles.map((pole, i) => {
          const imageFirst = i % 2 === 1;
          const textBlock = (
            <div key={`text-${pole.slug}`} className="flex flex-col justify-center">
              <Reveal
                as="span"
                className="font-display font-extrabold text-4xl md:text-[52px] leading-none text-green"
              >
                {pole.number}
              </Reveal>
              <Reveal
                as="div"
                delay={90}
                className="font-display font-bold text-2xl md:text-[34px] text-white mt-4"
              >
                {pole.name}
              </Reveal>
              <Reveal
                as="div"
                delay={180}
                className="font-body text-sm leading-relaxed text-white/65 mt-3.5"
              >
                {pole.headline}
                <br />
                {pole.subheadline}
              </Reveal>
              <Reveal as="div" delay={270} className="mt-6 w-fit">
                <Cta {...ctas.discover(`/solutions/${pole.slug}`)} />
              </Reveal>
            </div>
          );
          const imageBlock = (
            <ImageSection
              key={`image-${pole.slug}`}
              image={pole.image}
              className="min-h-[280px] md:min-h-[340px]"
            />
          );

          return (
            <section
              key={pole.slug}
              className="pole-tile bg-black px-6 md:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
            >
              {imageFirst ? (
                <>
                  {imageBlock}
                  {textBlock}
                </>
              ) : (
                <>
                  {textBlock}
                  {imageBlock}
                </>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
