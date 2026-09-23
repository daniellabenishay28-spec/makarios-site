import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { values } from "@/content/values";
import { aboutDifferentiation, aboutIntro, ecosystem, ecosystemIntro, vision } from "@/content/about";
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
      <section className="relative bg-black px-6 md:px-20 pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden flex flex-col">
        <div
          aria-hidden
          className="absolute -right-6 top-1/2 -translate-y-1/2 font-display font-extrabold text-[260px] md:text-[380px] leading-none text-white/[.035] select-none pointer-events-none"
        >
          02
        </div>
        <div aria-hidden className="w-8 h-px bg-green mb-6" />
        <Reveal
          as="span"
          className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-6"
        >
          {aboutIntro.eyebrow}
        </Reveal>
        <div className="max-w-2xl relative z-10">
          <Reveal
            as="h1"
            delay={90}
            className="font-display font-bold text-[34px] md:text-[46px] leading-[1.18] text-white"
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
          <Reveal
            as="p"
            delay={330}
            className="font-body text-sm md:text-[15px] leading-relaxed text-white/75 mt-3.5 max-w-xl"
          >
            {aboutDifferentiation[0]}
          </Reveal>
          <Reveal
            as="p"
            delay={390}
            className="font-body font-semibold text-sm md:text-[15px] leading-relaxed text-white mt-3.5 max-w-xl border-l-2 border-green pl-5"
          >
            {aboutDifferentiation[1]}
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 2 — ÉCOSYSTÈME ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-16 md:py-24 flex flex-col gap-12 md:gap-16">
        <Reveal as="p" className="font-body text-base md:text-lg leading-relaxed text-white/72 max-w-2xl">
          {ecosystemIntro}
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {ecosystem.map((entry, i) => (
            <Reveal key={entry.name} as="div" delay={i * 90} className="h-full">
              <div className="h-full border border-white/12 p-6 md:p-7 flex flex-col gap-3 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:border-white/25">
                <div aria-hidden className="w-6 h-px bg-green" />
                <div className="font-body font-semibold text-[11px] tracking-[.1em] uppercase text-green">
                  {entry.label}
                </div>
                <div className="font-display font-semibold text-xl text-white">{entry.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — NOS VALEURS ============ */}
      <section className="bg-white text-black px-6 md:px-20 py-16 md:py-28">
        <Reveal as="span" className="font-body font-semibold text-xs tracking-[.16em] uppercase text-black/45 mb-10 block">
          Nos Valeurs
        </Reveal>
        <div className="flex flex-col max-w-3xl mx-auto md:mx-0 md:ml-[8.33%]">
          {values.map((value, i) => (
            <Reveal
              key={value.name}
              as="div"
              delay={i * 70}
              className="group border-t last:border-b border-black/12 py-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:bg-black/[.02]"
            >
              <div className="font-body font-semibold text-black/30 w-10 text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display font-semibold text-green w-44 text-lg">{value.name}</div>
              <div className="font-body text-sm text-black/65">{value.phrase}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 4 — VISION (CLÔTURE) ============ */}
      <section className="bg-black px-6 py-20 md:py-28 flex flex-col items-center justify-center gap-7 text-center">
        <span aria-hidden className="w-10 h-px bg-green" />
        <Reveal as="h2" className="font-display font-bold text-3xl md:text-[42px] text-white max-w-3xl">
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
