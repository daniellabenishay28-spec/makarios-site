import type { Metadata } from "next";
import { getPole } from "@/content/poles";
import { Hero } from "@/components/sections/Hero";
import { PoleBody } from "@/components/sections/PoleBody";

const pole = getPole("business-solutions")!;

export const metadata: Metadata = {
  title: pole.name,
  description: pole.intro,
};

export default function BusinessSolutionsPage() {
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
