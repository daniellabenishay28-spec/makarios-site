import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makarios Corporation",
};

/**
 * Page d'accueil — route préparée, implémentation détaillée volontairement
 * non faite en Phase 0 (brief technique, point 18). Le contenu officiel de
 * la Home (slogan "BUILDING SOLUTIONS, CREATING GROWTH.", positionnement,
 * accroche) est verrouillé (verrouillage-contenu §03.A) mais n'a pas encore
 * été isolé dans un fichier /content dédié — les 9 fichiers demandés en
 * Phase 0 ne prévoyaient pas de home.ts. Signalé au rapport de fin de
 * Phase 0 plutôt que décidé silencieusement (créer le fichier, ou le
 * répartir ailleurs).
 */
export default function HomePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 text-center">
      <p className="font-body text-sm text-white/40 max-w-md">
        Page d&apos;accueil — implémentation détaillée prévue en Phase 1.
      </p>
    </div>
  );
}
