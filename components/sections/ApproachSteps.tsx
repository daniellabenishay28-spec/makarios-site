import { approachSteps } from "@/content/approachSteps";

/**
 * Page Approach — "The Makarios Method", les 5 étapes avec connecteur
 * vertical vert à faible opacité. Système de couleur corrigé et verrouillé
 * (verrouillage-contenu §06) : seul le chiffre de chaque étape est vert,
 * jamais le nom de l'étape.
 *
 * La signature de marque ("Comprendre. Concevoir. Connecter. Exécuter.",
 * content/approachSteps.ts → brandSignature) et l'eyebrow "The Makarios
 * Method" ne sont pas incluses ici : elles vivent dans deux sections à fond
 * différent (hero noir, puis respiration blanche) propres à la page
 * Approach — laissées à l'implémentation de app/approach/page.tsx (Phase 1),
 * pas à ce composant partagé.
 */
export function ApproachSteps() {
  return (
    <div className="pl-12 border-l-2 border-green/45 flex flex-col gap-16 max-w-3xl">
      {approachSteps.map((step) => (
        <div key={step.number}>
          <div className="font-display font-extrabold text-sm text-green mb-3.5">{step.number}</div>
          <div className="font-display font-bold text-2xl md:text-[28px] text-white">{step.name}</div>
          <div className="font-body text-base leading-relaxed text-white/65 mt-3">
            {step.description}
          </div>
        </div>
      ))}
    </div>
  );
}
