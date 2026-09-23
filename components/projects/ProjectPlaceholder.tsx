import { projects } from "@/content/projects";
import { projectsPlaceholder } from "@/content/placeholders";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Carte témoin "Problème → Solution → Résultat", fond blanc (rupture,
 * cf. Projects-Desktop.dc.html section 2). Tant que content/projects.ts
 * reste vide — ce qui est le cas tant que Makarios n'a pas fourni de
 * projet réel, cf. verrouillage-contenu §04 — affiche le gabarit
 * placeholder, jamais un faux client/résultat.
 *
 * Refonte (structure "portfolio" premium) : la carte témoin est complétée
 * par deux emplacements vides (bordure pointillée, sans aucun texte, aria-
 * hidden) pour donner à voir une vraie grille de portfolio "prête à
 * recevoir" — aucun contenu inventé, juste une structure visuelle.
 */
export function ProjectPlaceholder() {
  if (projects.length > 0) {
    // Rendu des vrais projets réservé à Phase 1+, une fois du contenu réel
    // disponible dans content/projects.ts. Volontairement non implémenté
    // ici pour ne pas fabriquer de gabarit de rendu sur des données encore
    // inexistantes.
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <Reveal as="div" className="md:col-span-8 border border-black/14 p-8 md:p-10 bg-white text-black">
        <div className="font-body font-semibold text-xs tracking-[.14em] uppercase text-green mb-6">
          {projectsPlaceholder.poleTag}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-4">
          <div>
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/35 mb-2">
              Problème
            </div>
            <div className="font-body text-sm text-black/28">{projectsPlaceholder.sample.problem}</div>
          </div>
          <div className="hidden sm:block font-body font-semibold text-green pt-0.5">→</div>
          <div>
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/35 mb-2">
              Solution
            </div>
            <div className="font-body text-sm text-black/28">{projectsPlaceholder.sample.solution}</div>
          </div>
          <div className="hidden sm:block font-body font-semibold text-green pt-0.5">→</div>
          <div>
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/35 mb-2">
              Résultat
            </div>
            <div className="font-body text-sm text-black/28">{projectsPlaceholder.sample.result}</div>
          </div>
        </div>

        <div className="font-body italic text-sm leading-relaxed text-black/40 mt-7 border-t border-black/10 pt-5">
          {projectsPlaceholder.cardNote}
        </div>
      </Reveal>

      <Reveal as="div" delay={90} className="md:col-span-4 flex items-center">
        <p className="font-body text-sm leading-relaxed text-white/60">{projectsPlaceholder.legend}</p>
      </Reveal>

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          aria-hidden
          className="hidden md:block md:col-span-4 min-h-[130px] border border-dashed border-white/15"
        />
      ))}
    </div>
  );
}
