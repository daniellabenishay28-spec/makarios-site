import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { values } from "@/content/values";
import { aboutIntro, ecosystem, ecosystemIntro, vision } from "@/content/about";
import { Reveal } from "@/components/motion/Reveal";

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
        <Reveal
          as="span"
          className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-6"
        >
          {aboutIntro.eyebrow}
        </Reveal>
        <div className="max-w-2xl">
          <Reveal
            as="h1"
            delay={90}
            className="font-display font-bold text-[32px] md:text-[40px] leading-[1.2] text-white"
          >
            <IntroHeadline />
          </Reveal>
          <Reveal as="div" delay={180} className="font-body font-medium text-sm text-white/70 mt-5">
            {aboutIntro.subheadline}
          </Reveal>
          <Reveal
            as="p"
            delay={270}
            className="font-body text-sm md:text-[15px] leading-relaxed text-white/75 mt-5 max-w-xl"
          >
            {aboutIntro.body}
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 2 — ÉCOSYSTÈME ============ */}
      <section className="bg-black px-6 md:px-20 py-16 md:py-22 flex flex-col gap-12 md:gap-16">
        <Reveal as="p" className="font-body text-base leading-relaxed text-white/72 max-w-2xl">
          {ecosystemIntro}
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {ecosystem.map((entry, i) => (
            <Reveal
              key={entry.name}
              as="div"
              delay={i * 90}
              className="md:border-l md:border-green/50 md:pl-5"
            >
              <div className="font-body font-semibold text-[11px] tracking-[.1em] uppercase text-green">
                {entry.label}
              </div>
              <div className="font-display font-semibold text-xl text-white mt-2.5">{entry.name}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — NOS VALEURS ============ */}
      <section className="bg-white text-black px-6 md:px-20 py-16 md:py-24">
        <div className="flex flex-col max-w-3xl mx-auto md:mx-0 md:ml-[8.33%]">
          {values.map((value, i) => (
            <Reveal
              key={value.name}
              as="div"
              delay={i * 70}
              className="border-t last:border-b border-black/12 py-5 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
            >
              <div className="font-display font-semibold text-green w-44 text-lg">{value.name}</div>
              <div className="font-body text-sm text-black/65">{value.phrase}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 4 — VISION (CLÔTURE) ============ */}
      <section className="bg-black px-6 py-16 md:py-24 flex flex-col items-center justify-center gap-6 text-center">
        <Reveal as="h2" className="font-display font-bold text-3xl md:text-[38px] text-white max-w-3xl">
          <VisionHeadline />
        </Reveal>
        <Reveal
          as="p"
          delay={90}
          className="font-body text-sm md:text-base leading-relaxed text-white/68 max-w-2xl"
        >
          {vision.body}
        </Reveal>
        <Reveal as="div" delay={180} className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2">
          <Cta href={vision.primaryCta.href} label={vision.primaryCta.label} />
          <Cta href={vision.secondaryCta.href} label={vision.secondaryCta.label} tone="muted" />
        </Reveal>
      </section>
    </>
  );
}
