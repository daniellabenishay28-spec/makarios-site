import type { PoleCategory } from "@/content/poles";

interface CategorySectionProps {
  category: PoleCategory;
}

/** Une catégorie d'activités d'un pôle (label + liste d'items) — voir content/poles.ts. */
export function CategorySection({ category }: CategorySectionProps) {
  return (
    <div>
      {category.label && (
        <div className="font-body font-semibold text-xs tracking-[.1em] uppercase text-white/55 mb-4">
          {category.label}
        </div>
      )}
      <ul className="flex flex-col gap-2.5">
        {category.items.map((item) => (
          <li key={item} className="font-body text-sm leading-relaxed text-white/75">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
