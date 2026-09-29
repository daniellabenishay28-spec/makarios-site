import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { values } from "@/content/values";
import { aboutIntro, mission, vision } from "@/content/about";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: aboutIntro.paragraphs[0],
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
      {/* ============ SECTION 1 — HERO ABOUT US ============ */}
      <section className="relative bg-black px-6 md:px-20 pt-32 md:pt-44 pb-16 md:pb-20 overflow-hidden flex flex-col">
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
        </div>
      </section>

      {/* ============ SECTION 2 — PRÉSENTATION DE MAKARIOS CORPORATION SARL ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-16 md:py-24 flex flex-col">
        <div className="max-w-2xl">
          <div aria-hidden className="w-6 h-px bg-green mb-4" />
          <Reveal
            as="span"
            className="font-body font-semibold text-[11px] tracking-[.14em] uppercase text-green mb-5 block"
          >
            Présentation de Makarios Corporation SARL
          </Reveal>
          {aboutIntro.paragraphs.map((paragraph, i) => (
            <Reveal
              key={paragraph}
              as="p"
              delay={90 + i * 60}
              className="font-body text-sm md:text-[15px] leading-relaxed text-white/75 mt-5 first:mt-0"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — VISION ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-16 md:py-24 flex flex-col">
        <div className="max-w-2xl">
          <div aria-hidden className="w-6 h-px bg-green mb-4" />
          <Reveal
            as="span"
            className="font-body font-semibold text-[11px] tracking-[.14em] uppercase text-green mb-5 block"
          >
            Notre Vision
          </Reveal>
          <Reveal
            as="h2"
            delay={90}
            className="font-display font-bold text-2xl md:text-[32px] leading-[1.22] text-white mb-5"
          >
            <VisionHeadline />
          </Reveal>
          <Reveal as="p" delay={150} className="font-body text-sm md:text-[15px] leading-relaxed text-white/75">
            {vision.body}
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 4 — MISSION ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-16 md:py-24 flex flex-col">
        <Reveal as="div" className="max-w-2xl border-l-2 border-green pl-5">
          <div className="font-body font-semibold text-[11px] tracking-[.14em] uppercase text-green mb-2">
            {mission.eyebrow}
          </div>
          <p className="font-body font-semibold text-sm md:text-[15px] leading-relaxed text-white">
            {mission.body}
          </p>
        </Reveal>
      </section>

      {/* ============ SECTION 5 — NOS VALEURS ============ */}
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
              className="group border-t last:border-b border-black/12 py-6 flex items-baseline gap-6 md:gap-10 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:bg-black/[.02]"
            >
              <div className="font-body font-semibold text-black/30 w-10 text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display font-semibold text-green text-lg md:text-xl">{value.name}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
