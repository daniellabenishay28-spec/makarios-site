import type { Metadata } from "next";
import { getPole } from "@/content/poles";
import { Hero } from "@/components/sections/Hero";

const pole = getPole("digital-media")!;

export const metadata: Metadata = {
  title: pole.name,
  description: pole.intro,
};

/** Route préparée — détail des catégories et CTA prévus en Phase 1. Pas de phrase de valeur pour ce pôle (absente du Company Profile, cf. content/poles.ts). */
export default function DigitalMediaPage() {
  return (
    <>
      <Hero
        heroType={pole.heroType}
        image={pole.image}
        number={pole.number}
        eyebrow={`${pole.number} — ${pole.name}`}
        headline={pole.headline}
        subheadline={pole.subheadline}
        intro={pole.intro}
      />
      <div className="px-6 md:px-20 py-16 font-body text-sm text-white/40">
        Catégories et CTA « Discuss this pole → » — implémentation prévue en Phase 1.
      </div>
    </>
  );
}
