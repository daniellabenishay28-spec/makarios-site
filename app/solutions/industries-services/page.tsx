import type { Metadata } from "next";
import { getPole } from "@/content/poles";
import { Hero } from "@/components/sections/Hero";

const pole = getPole("industries-services")!;

export const metadata: Metadata = {
  title: pole.name,
  description: pole.intro,
};

/** Route préparée — détail des catégories, phrase de valeur et CTA prévus en Phase 1. */
export default function IndustriesServicesPage() {
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
        Catégories, phrase de valeur et CTA « Discuss this pole → » — implémentation prévue en Phase 1.
      </div>
    </>
  );
}
