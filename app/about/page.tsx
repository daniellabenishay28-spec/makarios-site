import type { Metadata } from "next";
import { values } from "@/content/values";

export const metadata: Metadata = {
  title: "About",
};

/**
 * Route préparée, implémentation détaillée en Phase 1. Exerce déjà
 * content/values.ts pour valider le typage — le texte fondateur,
 * l'écosystème et la clôture "vision" (également CONTENU OFFICIEL, voir
 * About-Desktop.dc.html) ne sont pas encore posés ici, faute de fichier
 * /content dédié (même remarque que app/page.tsx).
 */
export default function AboutPage() {
  return (
    <div className="bg-white text-black px-6 md:px-20 py-24 md:py-32">
      <div className="flex flex-col max-w-3xl">
        {values.map((value) => (
          <div key={value.name} className="border-t border-black/12 py-5 flex items-baseline gap-8">
            <div className="font-display font-semibold text-green w-44">{value.name}</div>
            <div className="font-body text-sm text-black/65">{value.phrase}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
