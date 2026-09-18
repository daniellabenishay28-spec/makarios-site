import type { Pole } from "@/content/poles";
import { CategorySection } from "@/components/sections/CategorySection";
import { Cta } from "@/components/cta/Cta";
import { ctas } from "@/content/ctas";
import { Reveal } from "@/components/motion/Reveal";

interface PoleBodyProps {
  pole: Pole;
}

/**
 * Corps commun aux 4 pages pôle : intro + grille de catégories, puis phrase
 * de valeur (si présente, voir content/poles.ts) + CTA de clôture. Reproduit
 * le pattern verrouillé identique sur les 4 maquettes *-Desktop.dc.html
 * (sections 2 et 3).
 */
export function PoleBody({ pole }: PoleBodyProps) {
  return (
    <>
      {/* ============ SECTION 2 — INTRO + CATÉGORIES ============ */}
      <section className="bg-black px-6 md:px-20 py-14 md:py-20 flex flex-col gap-10 md:gap-14">
        <Reveal as="p" className="font-body text-base md:text-[17px] leading-relaxed text-white/75 max-w-3xl">
          {pole.intro}
        </Reveal>
        <div
          className={`grid grid-cols-1 gap-10 md:gap-8 ${
            pole.categories.length === 1
              ? ""
              : pole.categories.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
          }`}
        >
          {pole.categories.map((category, i) => (
            <Reveal key={category.label || category.items[0]} as="div" delay={90 + i * 90}>
              <CategorySection category={category} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — VALEUR + CTA ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-12 md:py-16 flex flex-col gap-7">
        {pole.valuePhrase && (
          <Reveal as="p" className="font-body italic text-lg md:text-xl leading-relaxed text-white/68 max-w-3xl">
            {pole.valuePhrase}
          </Reveal>
        )}
        <Reveal as="div" delay={90} className="flex flex-col md:flex-row gap-4 md:gap-10 md:items-center">
          <Cta {...ctas.discussThisPole(pole.slug)} />
          <Cta {...ctas.backToAllSolutions} tone="muted" />
        </Reveal>
      </section>
    </>
  );
}
