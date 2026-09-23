import type { PoleCategory } from "@/content/poles";

interface CategorySectionProps {
  category: PoleCategory;
}

/**
 * Une catégorie d'activités d'un pôle (label + liste d'items) — voir
 * content/poles.ts. Refonte : présentée comme une carte sobre (bordure fine,
 * jamais d'ombre ni de coin arrondi — cf. styles/tokens.css) pour une
 * hiérarchie plus institutionnelle dans la grille de PoleBody.
 */
export function CategorySection({ category }: CategorySectionProps) {
  return (
    <div className="h-full border border-white/12 p-6 md:p-7 flex flex-col transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:border-white/25">
      <div aria-hidden className="w-7 h-px bg-green mb-5" />
      {category.label && (
        <div className="font-body font-semibold text-xs tracking-[.1em] uppercase text-white/55 mb-4">
          {category.label}
        </div>
      )}
      <ul className="flex flex-col gap-2.5">
        {category.items.map((item) => (
          <li
            key={item}
            className="font-body text-sm leading-relaxed text-white/75 transition-[color,transform] duration-200 ease-editorial motion-reduce:transition-none hover:text-white/95 hover:translate-x-0.5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
