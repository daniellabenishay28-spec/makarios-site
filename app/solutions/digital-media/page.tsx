import type { Metadata } from "next";
import { getPole } from "@/content/poles";
import { Hero } from "@/components/sections/Hero";
import { PoleBody } from "@/components/sections/PoleBody";

const pole = getPole("digital-media")!;

export const metadata: Metadata = {
  title: pole.name,
  description: pole.intro,
};

/** Pas de phrase de valeur pour ce pôle — absente du Company Profile ; PoleBody l'omet automatiquement (voir content/poles.ts). */
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
      />
      <PoleBody pole={pole} />
    </>
  );
}
