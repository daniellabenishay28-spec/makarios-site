import Image from "next/image";
import { missingHeroVisual } from "@/content/placeholders";
import { withBasePath } from "@/lib/basePath";
import { Reveal } from "@/components/motion/Reveal";

interface ImageSectionProps {
  image?: { src: string; alt: string };
  className?: string;
}

/**
 * Section image plein cadre générique (ex. photo Business Solutions /
 * Industries & Services sur leur page pôle). Si `image` est absent — les
 * deux visuels en question ne sont pas encore fournis, voir plan
 * technique section H — affiche le rappel "Visuel à produire" plutôt que
 * de fabriquer ou de recadrer un substitut.
 *
 * Phase 2 (Motion) : légère révélation au scroll sur le conteneur, très
 * léger zoom au survol/focus sur l'image elle-même (élément enfant distinct
 * — pas de conflit avec le transform inline du reveal, qui porte sur le
 * conteneur). Discret et naturel, jamais un zoom permanent ni trop marqué
 * (brief section 9).
 */
export function ImageSection({ image, className = "" }: ImageSectionProps) {
  return (
    <Reveal
      as="div"
      className={`group relative w-full min-h-[320px] bg-black overflow-hidden ${className}`}
    >
      {image ? (
        <Image
          src={withBasePath(image.src)}
          alt={image.alt}
          fill
          className="object-cover scale-100 transition-transform duration-700 ease-editorial motion-reduce:transition-none group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body italic text-sm text-white/35">{missingHeroVisual}</span>
        </div>
      )}
    </Reveal>
  );
}
