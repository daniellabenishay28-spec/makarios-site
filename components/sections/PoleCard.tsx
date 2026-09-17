import Link from "next/link";
import type { Pole } from "@/content/poles";

interface PoleCardProps {
  pole: Pole;
}

/** Carte de synthèse d'un pôle, utilisée dans la grille /solutions. */
export function PoleCard({ pole }: PoleCardProps) {
  return (
    <Link
      href={`/solutions/${pole.slug}`}
      className="group block border-t border-white/12 py-8 transition-opacity hover:opacity-80"
    >
      <div className="flex items-baseline gap-6">
        <span className="font-display font-extrabold text-lg text-green">{pole.number}</span>
        <div>
          <div className="font-display font-semibold text-xl text-white">{pole.name}</div>
          <div className="font-body text-sm text-white/65 mt-2">{pole.subheadline}</div>
        </div>
      </div>
    </Link>
  );
}
