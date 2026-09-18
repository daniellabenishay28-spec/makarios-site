import Image from "next/image";
import { missingHeroVisual } from "@/content/placeholders";
import { withBasePath } from "@/lib/basePath";

interface HeroProps {
  /** pole-photo = hero en photo plein cadre ; pole-editorial = pas de photo, chiffre en filigrane (ghost-num). Voir content/poles.ts. */
  heroType: "pole-photo" | "pole-editorial";
  image?: { src: string; alt: string };
  /** Chiffre affiché en filigrane pour heroType "pole-editorial" (ex. "01"). */
  number?: string;
  eyebrow: string;
  headline: string;
  subheadline?: string;
  intro?: string;
}

/**
 * Hero générique des 4 pages Solutions (pattern verrouillé, voir résumé
 * technique : pole-photo pour Distribution & Digital-Media, pole-editorial
 * pour Business Solutions & Industries-Services). Tant qu'aucune photo
 * réelle n'est disponible pour un pôle "pole-photo", affiche le rappel
 * "Visuel à produire" plutôt qu'une image fabriquée — jamais de
 * substitut généré (plan technique, section H).
 */
export function Hero({ heroType, image, number, eyebrow, headline, subheadline, intro }: HeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[640px] bg-black overflow-hidden flex items-center">
      {heroType === "pole-photo" && (
        <>
          {image ? (
            <Image
              src={withBasePath(image.src)}
              alt={image.alt}
              fill
              priority
              className="object-cover opacity-70"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <span className="font-body italic text-sm text-white/35">{missingHeroVisual}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {heroType === "pole-editorial" && number && (
        <div
          aria-hidden
          className="absolute -right-10 top-1/2 -translate-y-1/2 font-display font-extrabold text-[280px] md:text-[420px] leading-none text-white/[.04] select-none pointer-events-none"
        >
          {number}
        </div>
      )}

      <div className="relative z-10 px-6 md:px-20 max-w-3xl">
        <div className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-5">
          {eyebrow}
        </div>
        <h1 className="font-display font-bold text-[32px] md:text-[44px] leading-[1.15] text-white">
          {headline}
        </h1>
        {subheadline && (
          <div className="font-body text-base md:text-lg text-white/75 mt-4">{subheadline}</div>
        )}
        {intro && (
          <p className="font-body text-sm md:text-base leading-relaxed text-white/70 mt-5 max-w-xl">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
