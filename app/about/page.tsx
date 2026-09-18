import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { values } from "@/content/values";
import { aboutIntro, ecosystem, ecosystemIntro, vision } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutIntro.body,
};

/** Titre de section 1 avec le mot-clé accentué en vert, tel que maquetté. */
function IntroHeadline() {
  const parts = aboutIntro.headline.split(aboutIntro.headlineAccent);
  return (
    <>
      {parts[0]}
      <span className="text-green">{aboutIntro.headlineAccent}</span>
      {parts[1]}
    </>
  );
}

function VisionHeadline() {
  const parts = vision.headline.split(vision.headlineAccent);
  return (
    <>
      {parts[0]}
      <span className="text-green">{vision.headlineAccent}</span>
      {parts[1]}
    </>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ============ SECTION 1 — OUVERTURE (QUI SOMMES-NOUS) ============ */}
      <section className="bg-black px-6 md:px-20 py-20 md:py-28 flex flex-col">
        <span className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-6">
          {aboutIntro.eyebrow}
        </span>
        <div className="max-w-2xl">
          <h1 className="font-display font-bold text-[32px] md:text-[40px] leading-[1.2] text-white">
            <IntroHeadline />
          </h1>
          <div className="font-body font-medium text-sm text-white/70 mt-5">
            {aboutIntro.subheadline}
          </div>
          <p className="font-body text-sm md:text-[15px] leading-relaxed text-white/75 mt-5 max-w-xl">
            {aboutIntro.body}
          </p>
        </div>
      </section>

      {/* ============ SECTION 2 — ÉCOSYSTÈME ============ */}
      <section className="bg-black px-6 md:px-20 py-16 md:py-22 flex flex-col gap-12 md:gap-16">
        <p className="font-body text-base leading-relaxed text-white/72 max-w-2xl">
          {ecosystemIntro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {ecosystem.map((entry) => (
            <div key={entry.name} className="md:border-l md:border-green/50 md:pl-5">
              <div className="font-body font-semibold text-[11px] tracking-[.1em] uppercase text-green">
                {entry.label}
              </div>
              <div className="font-display font-semibold text-xl text-white mt-2.5">{entry.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — NOS VALEURS ============ */}
      <section className="bg-white text-black px-6 md:px-20 py-16 md:py-24">
        <div className="flex flex-col max-w-3xl mx-auto md:mx-0 md:ml-[8.33%]">
          {values.map((value) => (
            <div
              key={value.name}
              className="border-t last:border-b border-black/12 py-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
            >
              <div className="font-display font-semibold text-green w-44 text-lg">{value.name}</div>
              <div className="font-body text-sm text-black/65">{value.phrase}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 4 — VISION (CLÔTURE) ============ */}
      <section className="bg-black px-6 py-16 md:py-24 flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="font-display font-bold text-3xl md:text-[38px] text-white max-w-3xl">
          <VisionHeadline />
        </h2>
        <p className="font-body text-sm md:text-base leading-relaxed text-white/68 max-w-2xl">
          {vision.body}
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2">
          <Cta href={vision.primaryCta.href} label={vision.primaryCta.label} />
          <Cta href={vision.secondaryCta.href} label={vision.secondaryCta.label} tone="muted" />
        </div>
      </section>
    </>
  );
}
