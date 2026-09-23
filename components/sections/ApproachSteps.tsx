import { approachSteps } from "@/content/approachSteps";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Page Approach — "The Makarios Method", les 5 étapes avec connecteur
 * vertical vert à faible opacité. Système de couleur corrigé et verrouillé
 * (verrouillage-contenu §06) : seul le chiffre de chaque étape est vert,
 * jamais le nom de l'étape.
 *
 * Refonte (présence institutionnelle) : "The Makarios Method" devient une
 * vraie signature visuelle — grand numéro, léger décalage alterné entre
 * étapes paires/impaires pour une lecture plus travaillée du parcours.
 * Contenu strictement identique à content/approachSteps.ts.
 *
 * La signature de marque ("Comprendre. Concevoir. Connecter. Exécuter.",
 * content/approachSteps.ts → brandSignature) et l'eyebrow "The Makarios
 * Method" ne sont pas incluses ici : elles vivent dans deux sections à fond
 * différent (hero noir, puis respiration blanche) propres à la page
 * Approach — laissées à l'implémentation de app/approach/page.tsx (Phase 1),
 * pas à ce composant partagé.
 */
/**
 * Phase 2 (Motion) : chaque étape s'active à son propre passage dans le
 * viewport (Reveal individuel, pas un décalage calculé depuis le haut de
 * page) — "sensation de parcours" au fil du scroll, sans loader ni barre de
 * progression (brief section 11). Le connecteur vertical reste statique,
 * fidèle au design verrouillé.
 */
export function ApproachSteps() {
  return (
    <div className="pl-8 md:pl-14 border-l-2 border-green/40 flex flex-col gap-20 md:gap-24 max-w-4xl relative">
      {approachSteps.map((step, i) => (
        <Reveal key={step.number} as="div" className={i % 2 === 1 ? "md:ml-14" : ""}>
          <div className="flex items-start gap-6 md:gap-10">
            <div
              aria-hidden
              className="font-display font-extrabold text-6xl md:text-8xl leading-none text-green/85 shrink-0 -mt-1"
            >
              {step.number}
            </div>
            <div className="pt-2 md:pt-4">
              <div className="font-display font-bold text-2xl md:text-[32px] leading-[1.2] text-white">
                {step.name}
              </div>
              <div className="font-body text-base leading-relaxed text-white/65 mt-3 max-w-md">
                {step.description}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
