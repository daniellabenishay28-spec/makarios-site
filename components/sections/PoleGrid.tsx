import { poles } from "@/content/poles";
import { PoleCard } from "@/components/sections/PoleCard";

/** Grille des 4 pôles, utilisée sur /solutions. Purement content-driven. */
export function PoleGrid() {
  return (
    <div className="flex flex-col">
      {poles.map((pole) => (
        <PoleCard key={pole.slug} pole={pole} />
      ))}
    </div>
  );
}
