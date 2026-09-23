import Link from "next/link";
import type { Pole } from "@/content/poles";
import { poles } from "@/content/poles";
import { CategorySection } from "@/components/sections/CategorySection";
import { Cta } from "@/components/cta/Cta";
import { ctas } from "@/content/ctas";
import { Reveal } from "@/components/motion/Reveal";

interface PoleBodyProps {
  pole: Pole;
}

/**
 * Corps commun aux 4 pages pôle : intro + grille de catégories (en cartes,
 * voir CategorySection), puis phrase de valeur (si présente, voir
 * content/poles.ts) + CTA de clôture. Reproduit le pattern verrouillé
 * identique sur les 4 maquettes *-Desktop.dc.html (sections 2 et 3), enrichi
 * d'une section de navigation croisée vers les 3 autres pôles (présence
 * institutionnelle, données déjà réelles de content/poles.ts — aucun contenu
 * inventé).
 */
export function PoleBody({ pole }: PoleBodyProps) {
  const otherPoles = poles.filter((p) => p.slug !== pole.slug);

  return (
    <>
      {/* ============ SECTION 2 — INTRO + CATÉGORIES ============ */}
      <section className="bg-black px-6 md:px-20 py-14 md:py-20 flex flex-col gap-10 md:gap-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div aria-hidden className="hidden md:block md:col-span-1 font-display font-extrabold text-sm text-green pt-1.5">
            {pole.number}
          </div>
          <Reveal
            as="p"
            className="md:col-span-8 font-body text-base md:text-[17px] leading-relaxed text-white/75 max-w-3xl"
          >
            {pole.intro}
          </Reveal>
        </div>
        <div
          className={`grid grid-cols-1 gap-6 md:gap-6 ${
            pole.categories.length === 1
              ? "md:grid-cols-1"
              : pole.categories.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
          }`}
        >
          {pole.categories.map((category, i) => (
            <Reveal key={category.label || category.items[0]} as="div" delay={90 + i * 90} className="h-full">
              <CategorySection category={category} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — VALEUR + CTA ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-12 md:py-16 flex flex-col gap-7">
        {pole.valuePhrase && (
          <Reveal as="div" className="flex gap-5 md:gap-8 items-start max-w-3xl">
            <span aria-hidden className="font-display font-extrabold text-3xl md:text-4xl text-green/70 leading-none">
              “
            </span>
            <p className="font-body italic text-lg md:text-xl leading-relaxed text-white/68">
              {pole.valuePhrase}
            </p>
          </Reveal>
        )}
        <Reveal as="div" delay={90} className="flex flex-col md:flex-row gap-4 md:gap-10 md:items-center">
          <Cta {...ctas.discussThisPole(pole.slug)} />
          <Cta {...ctas.backToAllSolutions} tone="muted" />
        </Reveal>
      </section>

      {/* ============ SECTION 4 — NAVIGATION CROISÉE (AUTRES PÔLES) ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-10 md:py-12">
        <div className="font-body font-semibold text-[10.5px] tracking-[.14em] uppercase text-white/38 mb-6">
          Les autres pôles Makarios
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {otherPoles.map((p) => (
            <Link
              key={p.slug}
              href={`/solutions/${p.slug}`}
              className="group bg-black px-6 py-6 flex items-center justify-between gap-4 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:bg-white/[.03]"
            >
              <span>
                <span className="font-display font-extrabold text-xs text-green mr-3">{p.number}</span>
                <span className="font-body font-medium text-sm text-white/85 group-hover:text-white">
                  {p.name}
                </span>
              </span>
              <span
                aria-hidden
                className="font-body text-white/40 transition-transform duration-200 ease-editorial motion-reduce:transition-none group-hover:translate-x-1 group-hover:text-green"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
