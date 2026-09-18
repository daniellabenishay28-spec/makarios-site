import Image from "next/image";
import { missingHeroVisual } from "@/content/placeholders";
import { withBasePath } from "@/lib/basePath";

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
 */
export function ImageSection({ image, className = "" }: ImageSectionProps) {
  return (
    <div className={`relative w-full min-h-[320px] bg-black overflow-hidden ${className}`}>
      {image ? (
        <Image src={withBasePath(image.src)} alt={image.alt} fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-body italic text-sm text-white/35">{missingHeroVisual}</span>
        </div>
      )}
    </div>
  );
}
