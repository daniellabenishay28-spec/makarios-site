import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta/Cta";
import { poles } from "@/content/poles";
import { whyMakariosArguments } from "@/content/whyMakarios";
import { brandSignature, approachSteps, methodEyebrow } from "@/content/approachSteps";
import { solutions } from "@/content/solutions";
import { aboutIntro, aboutDifferentiation } from "@/content/about";
import { ctas } from "@/content/ctas";
import { withBasePath } from "@/lib/basePath";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import {
  homeHero,
  poleTeasersEyebrow,
  poleTeaserTaglines,
  positioningStatement,
  approachTeaser,
  whyMakariosTeaser,
  projectsTeaser,
  contactTeaser,
} from "@/content/home";

export const metadata: Metadata = {
  title: "Makarios Corporation",
  description: homeHero.intro,
};

/** Sous-partie du hero au format `Titre. Titre.` séparé sur deux lignes, tel que maquetté. */
function HeroSlogan() {
  const lines = homeHero.slogan.split(", ");
  return (
    <>
      {lines[0]},
      <br />
      {lines[1]}
    </>
  );
}

/** Même logique que components/cta/Cta.tsx (flèche isolée pour l'animer), pour les liens de cette page qui ne peuvent pas réutiliser Cta tel quel (fond blanc, texte noir — Cta est verrouillé sur texte blanc). */
const ARROW_SUFFIX = /\s(→|↗)$/;
function splitCtaLabel(label: string) {
  const match = label.match(ARROW_SUFFIX);
  return {
    text: match ? label.slice(0, match.index) : label,
    arrow: match ? match[1] : null,
  };
}

/** Titre "About" avec le mot-clé accentué en vert — même logique que app/about/page.tsx, réutilisée ici pour la cohérence entre le teaser et la page complète. */
function AboutTeaserHeadline() {
  const parts = aboutIntro.headline.split(aboutIntro.headlineAccent);
  return (
    <>
      {parts[0]}
      <span className="text-green">{aboutIntro.headlineAccent}</span>
      {parts[1]}
    </>
  );
}

export default function HomePage() {
  const teaserArguments = whyMakariosArguments.filter((arg) =>
    (whyMakariosTeaser.argumentNumbers as readonly string[]).includes(arg.number)
  );
  const projectsCta = splitCtaLabel(projectsTeaser.cta.label);
  const aboutCta = ctas.discover("/about");

  return (
    <>
      {/* ============ SECTION 1 — HERO ============ */}
      <section className="relative w-full min-h-[88vh] md:min-h-[960px] bg-black overflow-hidden flex items-end">
        <ParallaxImage
          src={withBasePath(homeHero.image.src)}
          alt={homeHero.image.alt}
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,.9) 0%, rgba(0,0,0,.5) 38%, rgba(0,0,0,.1) 66%, rgba(0,0,0,0) 80%)",
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-20 pb-16 md:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-xl">
            <Reveal as="div" className="flex items-center gap-3 mb-6">
              <span aria-hidden className="w-8 h-px bg-green" />
              <span className="font-body font-semibold text-[11.5px] tracking-[.18em] uppercase text-white/65">
                Makarios Corporation
              </span>
            </Reveal>
            <Reveal as="h1" delay={90} className="font-display font-extrabold text-[34px] md:text-[60px] leading-[1.06] text-white">
              <HeroSlogan />
            </Reveal>
            <Reveal
              as="div"
              delay={180}
              className="font-body font-medium text-base md:text-lg text-white mt-4 md:mt-6"
            >
              {homeHero.sloganFr}
            </Reveal>
            <Reveal
              as="p"
              delay={270}
              className="font-body text-sm md:text-[15px] leading-relaxed text-white/72 mt-3 max-w-md"
            >
              {homeHero.intro}
            </Reveal>
            <Reveal as="div" delay={360} className="mt-7">
              <Cta href={homeHero.cta.href} label={homeHero.cta.label} className="inline-block" />
            </Reveal>
          </div>

          <Reveal
            as="div"
            delay={360}
            className="hidden md:flex flex-col gap-2 font-body text-xs tracking-[.1em] uppercase text-white/40 shrink-0"
          >
            <span>Business Solutions</span>
            <span>Distribution &amp; Trade</span>
            <span>Industries &amp; Services</span>
            <span>Digital &amp; Media</span>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 2 — LES 4 PÔLES ============ */}
      <section className="bg-black px-6 md:px-20 py-16 md:py-28 flex flex-col gap-10 md:gap-14">
        <div className="flex items-end justify-between gap-5">
          <div className="flex items-center gap-5">
            <span className="font-body font-semibold text-xs tracking-[.16em] uppercase text-white/55">
              {poleTeasersEyebrow}
            </span>
            <div className="flex-1 h-px bg-white/14 w-16 md:w-32" />
          </div>
          <span className="hidden md:block font-body text-xs text-white/35">
            {String(poles.length).padStart(2, "0")} pôles
          </span>
        </div>

        <div className="pole-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {poles.map((pole) => (
            <div
              key={pole.slug}
              className="pole-tile relative overflow-hidden min-h-[320px] md:min-h-[460px] flex flex-col justify-end p-6 md:p-9 bg-black border border-white/10"
            >
              {pole.heroType === "pole-photo" && pole.image && (
                <>
                  <Image
                    src={withBasePath(pole.image.src)}
                    alt={pole.image.alt}
                    fill
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.2) 55%, rgba(0,0,0,0) 75%)",
                    }}
                  />
                </>
              )}
              <div className="relative z-10">
                <span className="font-display font-extrabold text-xl text-green">{pole.number}</span>
                <div className="font-display font-semibold text-2xl md:text-[29px] leading-[1.15] text-white mt-2.5">
                  {`MAKARIOS ${pole.name}`.toUpperCase()}
                </div>
                <div className="font-body text-xs md:text-[13px] text-white/58 mt-2.5">
                  {poleTeaserTaglines[pole.slug]}
                </div>
                <Link
                  href={`/solutions/${pole.slug}`}
                  className="group/cta inline-flex items-center gap-1 font-body font-medium text-xs md:text-[13px] text-white mt-5 border-b border-green/70 pb-1 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:text-green hover:border-green focus-visible:text-green"
                >
                  <span>Explore</span>
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-200 ease-editorial motion-reduce:transition-none group-hover/cta:translate-x-1 group-focus-visible/cta:translate-x-1"
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — POSITIONNEMENT ============ */}
      <section className="bg-white text-black px-6 md:px-20 py-16 md:py-0 md:min-h-[360px] flex items-center">
        <div className="max-w-3xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div aria-hidden className="hidden md:block md:col-span-1 w-px h-16 bg-black/25" />
          <Reveal
            as="p"
            className="md:col-span-11 font-display font-semibold text-2xl md:text-[40px] leading-[1.22]"
          >
            {positioningStatement.text
              .split(positioningStatement.accentWord)
              .flatMap((part, i, arr) =>
                i < arr.length - 1
                  ? [part, <span key={i} className="text-green">{positioningStatement.accentWord}</span>]
                  : [part]
              )}
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 4 — OUR SOLUTIONS ============ */}
      <section className="bg-black px-6 md:px-20 py-16 md:py-24 flex flex-col gap-10 md:gap-14">
        <div className="flex items-end justify-between gap-5 flex-wrap">
          <div>
            <Reveal as="span" className="font-body font-semibold text-xs tracking-[.16em] uppercase text-white/55">
              03 — Our Solutions
            </Reveal>
            <Reveal as="div" delay={90} className="font-display font-bold text-3xl md:text-[42px] text-white mt-4">
              Our Solutions.
            </Reveal>
          </div>
          <Reveal as="div" delay={90}>
            <Cta {...ctas.backToAllSolutions} tone="muted" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {solutions.map((solution, i) => (
            <Reveal
              key={solution.number}
              as="div"
              delay={i * 45}
              className={`group bg-black p-6 md:p-8 flex flex-col gap-3 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:bg-white/[.03] ${
                i === solutions.length - 1 && solutions.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-sm text-green">{solution.number}</span>
                <span className="font-display font-bold text-xl md:text-[22px] leading-[1.25] text-white">
                  {solution.name}
                </span>
              </div>
              <div className="font-body italic text-sm md:text-[15px] text-white/60 pl-[38px]">
                {solution.tagline}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 5 — ABOUT (TEASER) ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <Reveal as="span" className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55">
              {aboutIntro.eyebrow}
            </Reveal>
            <Reveal
              as="div"
              delay={90}
              className="font-display font-bold text-3xl md:text-[38px] leading-[1.2] text-white mt-5"
            >
              <AboutTeaserHeadline />
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-6 justify-center">
            <Reveal as="p" delay={90} className="font-body text-base md:text-[17px] leading-relaxed text-white/72 max-w-xl">
              {aboutIntro.body}
            </Reveal>
            <Reveal
              as="p"
              delay={180}
              className="font-body font-semibold text-base md:text-lg leading-relaxed text-white max-w-xl border-l-2 border-green pl-5"
            >
              {aboutDifferentiation[1]}
            </Reveal>
            <Reveal as="div" delay={270} className="w-fit mt-2">
              <Cta href={aboutCta.href} label={aboutCta.label} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6 — TEASER WHY MAKARIOS ============ */}
      <section className="relative bg-black px-6 md:px-20 py-16 md:py-0 md:min-h-[520px] flex items-center overflow-hidden">
        <Image
          src={withBasePath(whyMakariosTeaser.backgroundImage.src)}
          alt={whyMakariosTeaser.backgroundImage.alt}
          fill
          className="object-cover opacity-16"
        />
        <div aria-hidden className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          <Reveal
            as="span"
            className="md:col-span-3 font-body font-semibold text-xs tracking-[.16em] uppercase text-white/55"
          >
            {whyMakariosTeaser.eyebrow}
          </Reveal>
          <div className="md:col-span-7 md:col-start-4 flex flex-col gap-10">
            {teaserArguments.map((arg, i) => (
              <Reveal key={arg.number} as="div" delay={90 + i * 90} className="flex gap-5 items-baseline">
                <span className="font-display font-extrabold text-3xl md:text-4xl text-green/85">{arg.number}</span>
                <div>
                  <div className="font-display font-semibold text-xl md:text-2xl text-white uppercase">
                    {arg.title}
                  </div>
                  <div className="font-body text-sm text-white/60 mt-2 max-w-md">{arg.phrase}</div>
                </div>
              </Reveal>
            ))}
            <Reveal as="div" delay={90 + teaserArguments.length * 90} className="w-fit">
              <Cta href={whyMakariosTeaser.cta.href} label={whyMakariosTeaser.cta.label} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SECTION 7 — THE MAKARIOS METHOD (TEASER) ============ */}
      <section className="bg-black border-t border-white/10 px-6 md:px-20 py-16 md:py-24 flex flex-col gap-10 md:gap-12">
        <Reveal as="span" className="font-body font-semibold text-xs tracking-[.16em] uppercase text-white/55">
          {approachTeaser.eyebrow} — {methodEyebrow}
        </Reveal>
        <Reveal
          as="div"
          delay={90}
          className="font-display font-bold text-2xl md:text-[38px] leading-[1.25] text-white max-w-4xl"
        >
          {brandSignature.map((word, i) => (
            <span key={word}>
              {word.replace(/\.$/, "")}
              {i < brandSignature.length - 1 && <span className="text-green mx-2 md:mx-4">·</span>}
            </span>
          ))}
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mt-2">
          {approachSteps.map((step, i) => (
            <Reveal key={step.number} as="div" delay={180 + i * 60} className="border-t border-white/14 pt-4">
              <div className="font-display font-extrabold text-sm text-green">{step.number}</div>
              <div className="font-body font-medium text-xs md:text-[13px] text-white/70 mt-2 leading-snug">
                {step.name.split(" — ")[0]}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={480} className="w-fit">
          <Cta href={approachTeaser.cta.href} label={approachTeaser.cta.label} />
        </Reveal>
      </section>

      {/* ============ SECTION 8 — TEASER PROJECTS ============ */}
      <section className="bg-white text-black px-6 md:px-20 py-16 md:py-0 md:min-h-[420px] flex flex-col justify-center gap-6">
        <Reveal as="span" className="font-body font-semibold text-xs tracking-[.16em] uppercase text-black/50">
          {projectsTeaser.eyebrow}
        </Reveal>
        <Reveal as="div" delay={90} className="font-display font-bold text-3xl md:text-[42px]">
          {projectsTeaser.title.replace(projectsTeaser.titleAccent, "")}
          <span className="text-green">{projectsTeaser.titleAccent}</span>
        </Reveal>
        <Reveal
          as="div"
          delay={150}
          className="flex items-center gap-3 font-body font-semibold text-xs tracking-[.1em] uppercase text-black/55"
        >
          <span>Problème</span>
          <span className="text-green">→</span>
          <span>Solution</span>
          <span className="text-green">→</span>
          <span>Résultat</span>
        </Reveal>
        <Reveal
          as="p"
          delay={210}
          className="font-body text-sm md:text-[15px] leading-relaxed text-black/60 max-w-xl"
        >
          {projectsTeaser.note}
        </Reveal>
        <Reveal as="div" delay={270} className="w-fit">
          <Link
            href={projectsTeaser.cta.href}
            className="group/cta inline-flex items-center gap-1 font-body font-medium text-sm text-black hover:text-green focus-visible:text-green border-b border-green pb-1 transition-colors duration-200 ease-editorial motion-reduce:transition-none"
          >
            <span>{projectsCta.text}</span>
            {projectsCta.arrow && (
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-editorial motion-reduce:transition-none group-hover/cta:translate-x-1 group-focus-visible/cta:translate-x-1"
              >
                {projectsCta.arrow}
              </span>
            )}
          </Link>
        </Reveal>
      </section>

      {/* ============ SECTION 9 — CONTACT (CLÔTURE) ============ */}
      <section className="bg-black px-6 py-20 md:py-0 md:min-h-[520px] flex flex-col items-center justify-center gap-7 text-center">
        <span aria-hidden className="w-10 h-px bg-green" />
        <Reveal as="div" className="font-display font-bold text-3xl md:text-[50px] leading-[1.15] text-white max-w-3xl">
          {contactTeaser.headline.split(contactTeaser.headlineAccent).flatMap((part, i, arr) =>
            i < arr.length - 1
              ? [part, <span key={i} className="text-green">{contactTeaser.headlineAccent}</span>]
              : [part]
          )}
        </Reveal>
        <Reveal as="div" delay={90}>
          <Cta href={contactTeaser.cta.href} label={contactTeaser.cta.label} />
        </Reveal>
        <Image
          src={withBasePath(contactTeaser.symbol.src)}
          alt={contactTeaser.symbol.alt}
          width={26}
          height={26}
          className="opacity-90 mt-2"
        />
      </section>
    </>
  );
}
