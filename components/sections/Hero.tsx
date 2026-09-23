import { missingHeroVisual } from "@/content/placeholders";
import { poles } from "@/content/poles";
import { withBasePath } from "@/lib/basePath";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";

interface HeroProps {
  /** pole-photo = hero en photo plein cadre ; pole-editorial = pas de photo, chiffre en filigrane (ghost-num). Voir content/poles.ts. */
  heroType: "pole-photo" | "pole-editorial";
  image?: { src: string; alt: string };
  /** Chiffre affiché en filigrane pour heroType "pole-editorial" (ex. "01"), et dans l'indicateur de pagination des deux variantes. */
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
 *
 * Refonte (présence institutionnelle) : indicateur de pagination "0X / 04"
 * (dérivé du nombre réel de pôles dans content/poles.ts, aucune donnée
 * inventée) et fine règle verte au-dessus de l'eyebrow — composition plus
 * riche sans toucher au contenu ni au heroType verrouillé.
 *
 * Phase 2 (Motion) : eyebrow → titre → sous-titre → intro apparaissent avec
 * un léger décalage entre eux, et la photo (heroType "pole-photo") a un
 * mouvement de profondeur très subtil au scroll — voir ParallaxImage.
 */
export function Hero({ heroType, image, number, eyebrow, headline, subheadline, intro }: HeroProps) {
  return (
    <section className="relative w-full min-h-[76vh] md:min-h-[680px] bg-black overflow-hidden flex items-end md:items-center">
      {heroType === "pole-photo" && (
        <>
          {image ? (
            <ParallaxImage src={withBasePath(image.src)} alt={image.alt} priority className="opacity-70" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <span className="font-body italic text-sm text-white/35">{missingHeroVisual}</span>
            </div>
          )}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,.86) 0%, rgba(0,0,0,.45) 48%, rgba(0,0,0,.15) 75%, rgba(0,0,0,.15) 100%)",
            }}
          />
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

      <div className="relative z-10 px-6 md:px-20 pb-14 md:pb-0 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="max-w-3xl">
          <div aria-hidden className="w-8 h-px bg-green mb-5" />
          <Reveal
            as="div"
            className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-5"
          >
            {eyebrow}
          </Reveal>
          <Reveal
            as="h1"
            delay={90}
            className="font-display font-bold text-[34px] md:text-[52px] leading-[1.1] text-white"
          >
            {headline}
          </Reveal>
          {subheadline && (
            <Reveal as="div" delay={180} className="font-body text-base md:text-lg text-white/75 mt-4">
              {subheadline}
            </Reveal>
          )}
          {intro && (
            <Reveal
              as="p"
              delay={270}
              className="font-body text-sm md:text-base leading-relaxed text-white/70 mt-5 max-w-xl"
            >
              {intro}
            </Reveal>
          )}
        </div>

        {number && (
          <Reveal
            as="div"
            delay={270}
            className="font-body font-semibold text-xs tracking-[.1em] text-white/45 md:mb-2 shrink-0"
          >
            <span className="text-white">{number}</span>
            <span className="mx-1.5">/</span>
            <span>{String(poles.length).padStart(2, "0")}</span>
          </Reveal>
        )}
      </div>
    </section>
  );
}
