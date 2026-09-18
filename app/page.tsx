import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta/Cta";
import { poles } from "@/content/poles";
import { whyMakariosArguments } from "@/content/whyMakarios";
import { brandSignature } from "@/content/approachSteps";
import { withBasePath } from "@/lib/basePath";
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

export default function HomePage() {
  const teaserArguments = whyMakariosArguments.filter((arg) =>
    (whyMakariosTeaser.argumentNumbers as readonly string[]).includes(arg.number)
  );

  return (
    <>
      {/* ============ SECTION 1 — HERO ============ */}
      <section className="relative w-full min-h-[80vh] md:min-h-[900px] bg-black overflow-hidden flex items-end">
        <Image
          src={withBasePath(homeHero.image.src)}
          alt={homeHero.image.alt}
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,.86) 0%, rgba(0,0,0,.4) 42%, rgba(0,0,0,.05) 68%, rgba(0,0,0,0) 80%)",
          }}
        />
        <div className="relative z-10 px-6 md:px-20 pb-16 md:pb-16 max-w-xl">
          <h1 className="font-display font-extrabold text-[32px] md:text-[56px] leading-[1.08] text-white">
            <HeroSlogan />
          </h1>
          <div className="font-body font-medium text-base md:text-lg text-white mt-4 md:mt-6">
            {homeHero.sloganFr}
          </div>
          <p className="font-body text-sm md:text-[15px] leading-relaxed text-white/72 mt-3 max-w-md">
            {homeHero.intro}
          </p>
          <Cta href={homeHero.cta.href} label={homeHero.cta.label} className="mt-6 inline-block" />
        </div>
      </section>

      {/* ============ SECTION 2 — LES 4 PÔLES ============ */}
      <section className="bg-black px-6 md:px-20 py-16 md:py-24 flex flex-col gap-10 md:gap-12">
        <div className="flex items-center gap-5">
          <span className="font-body font-semibold text-xs tracking-[.16em] uppercase text-white/55">
            {poleTeasersEyebrow}
          </span>
          <div className="flex-1 h-px bg-white/14" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {poles.map((pole) => (
            <div
              key={pole.slug}
              className="relative overflow-hidden min-h-[300px] md:min-h-[420px] flex flex-col justify-end p-6 md:p-8 bg-black"
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
                        "linear-gradient(to top, rgba(0,0,0,.82) 0%, rgba(0,0,0,.15) 55%, rgba(0,0,0,0) 75%)",
                    }}
                  />
                </>
              )}
              <div className="relative z-10">
                <span className="font-display font-extrabold text-xl text-green">{pole.number}</span>
                <div className="font-display font-semibold text-2xl md:text-[27px] text-white mt-2">
                  {pole.name}
                </div>
                <div className="font-body text-xs md:text-[13px] text-white/58 mt-2">
                  {poleTeaserTaglines[pole.slug]}
                </div>
                <Link
                  href={`/solutions/${pole.slug}`}
                  className="inline-block font-body font-medium text-xs md:text-[13px] text-white mt-4"
                >
                  Explore ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECTION 3 — POSITIONNEMENT ============ */}
      <section className="bg-white text-black px-6 md:px-20 py-16 md:py-0 md:min-h-[420px] flex items-center">
        <div className="max-w-3xl">
          <p className="font-display font-semibold text-2xl md:text-[42px] leading-[1.22]">
            {positioningStatement.text
              .split(positioningStatement.accentWord)
              .flatMap((part, i, arr) =>
                i < arr.length - 1
                  ? [part, <span key={i} className="text-green">{positioningStatement.accentWord}</span>]
                  : [part]
              )}
          </p>
          <div
            aria-hidden
            className="w-px h-14 bg-black/35 mt-7"
            style={{ transform: "rotate(24deg)" }}
          />
        </div>
      </section>

      {/* ============ SECTION 4 — TEASER APPROCHE ============ */}
      <section className="bg-black px-6 md:px-20 py-16 md:py-0 md:min-h-[420px] flex flex-col justify-center gap-6">
        <span className="font-body font-semibold text-xs tracking-[.16em] uppercase text-white/55">
          {approachTeaser.eyebrow}
        </span>
        <div className="font-display font-bold text-3xl md:text-[46px] leading-[1.2] text-white max-w-4xl">
          {brandSignature.map((word, i) => (
            <span key={word}>
              {word.replace(/\.$/, "")}
              {i < brandSignature.length - 1 && <span className="text-green mx-2 md:mx-4">·</span>}
            </span>
          ))}
        </div>
        <Cta href={approachTeaser.cta.href} label={approachTeaser.cta.label} className="w-fit" />
      </section>

      {/* ============ SECTION 5 — TEASER WHY MAKARIOS ============ */}
      <section className="relative bg-black px-6 md:px-20 py-16 md:py-0 md:min-h-[480px] flex items-center overflow-hidden">
        <Image
          src={withBasePath(whyMakariosTeaser.backgroundImage.src)}
          alt={whyMakariosTeaser.backgroundImage.alt}
          fill
          className="object-cover opacity-16"
        />
        <div aria-hidden className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          <span className="md:col-span-3 font-body font-semibold text-xs tracking-[.16em] uppercase text-white/55">
            {whyMakariosTeaser.eyebrow}
          </span>
          <div className="md:col-span-7 md:col-start-4 flex flex-col gap-8">
            {teaserArguments.map((arg) => (
              <div key={arg.number} className="flex gap-4 items-baseline">
                <span className="font-display font-extrabold text-xl text-green">{arg.number}</span>
                <div>
                  <div className="font-display font-semibold text-xl md:text-2xl text-white uppercase">
                    {arg.title}
                  </div>
                  <div className="font-body text-sm text-white/60 mt-2">{arg.phrase}</div>
                </div>
              </div>
            ))}
            <Cta href={whyMakariosTeaser.cta.href} label={whyMakariosTeaser.cta.label} className="w-fit" />
          </div>
        </div>
      </section>

      {/* ============ SECTION 6 — TEASER PROJECTS ============ */}
      <section className="bg-white text-black px-6 md:px-20 py-16 md:py-0 md:min-h-[380px] flex flex-col justify-center gap-5">
        <span className="font-body font-semibold text-xs tracking-[.16em] uppercase text-black/50">
          {projectsTeaser.eyebrow}
        </span>
        <div className="font-display font-bold text-3xl md:text-[40px]">
          {projectsTeaser.title.replace(projectsTeaser.titleAccent, "")}
          <span className="text-green">{projectsTeaser.titleAccent}</span>
        </div>
        <p className="font-body text-sm md:text-[15px] leading-relaxed text-black/60 max-w-xl">
          {projectsTeaser.note}
        </p>
        <Link
          href={projectsTeaser.cta.href}
          className="w-fit font-body font-medium text-sm text-black border-b border-green pb-1"
        >
          {projectsTeaser.cta.label}
        </Link>
      </section>

      {/* ============ SECTION 7 — CONTACT (CLÔTURE) ============ */}
      <section className="bg-black px-6 py-16 md:py-0 md:min-h-[480px] flex flex-col items-center justify-center gap-6 text-center">
        <div className="font-display font-bold text-3xl md:text-[44px] text-white max-w-3xl">
          {contactTeaser.headline.split(contactTeaser.headlineAccent).flatMap((part, i, arr) =>
            i < arr.length - 1
              ? [part, <span key={i} className="text-green">{contactTeaser.headlineAccent}</span>]
              : [part]
          )}
        </div>
        <Link
          href={contactTeaser.cta.href}
          className="font-body font-medium text-sm text-white border-b border-green pb-1"
        >
          {contactTeaser.cta.label}
        </Link>
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
