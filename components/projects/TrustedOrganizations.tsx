import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import {
  trustedOrganizations,
  trustedOrganizationsIntro,
  type TrustedOrganization,
} from "@/content/trustedOrganizations";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section "organisations qui nous ont fait confiance" — Projects/Portfolio.
 *
 * Composition en silhouette de pyramide / skyline : chaque catégorie est un
 * "bâtiment" plein blanc dont la hauteur (desktop) ou la largeur (tablette
 * et mobile) suit une progression symétrique — 01 et 07 au plus bas, 04
 * (Santé et Pharmacie) au sommet. Le logo vit à l'intérieur du bâtiment,
 * sans cadre indépendant autour de lui : c'est la silhouette blanche
 * elle-même qui doit former la montagne, pas une rangée de cartes. Le
 * numéro (vert) flotte juste au-dessus de chaque bâtiment, la catégorie et
 * la précision légale sont sous la ligne de base, en petit, pour ne jamais
 * dominer les logos. Aucun angle arrondi, aucune ombre, aucun dégradé —
 * uniquement noir / blanc / vert #32B44A, conformément à l'identité du
 * site.
 *
 * La catégorie 01 (deux organisations : DISPROMALT + DI-WAY) reste une
 * seule colonne — les deux logos partagent le même bâtiment, au niveau le
 * plus bas de la pyramide, jamais une 8ᵉ colonne.
 */

/**
 * Distance symétrique au sommet (catégorie 04, index 3) pour chacune des 7
 * catégories — 0 = au sommet (04), 3 = le plus loin du sommet (01 et 07).
 */
const PEAK_INDEX = 3;
function tierDistance(index: number): 0 | 1 | 2 | 3 {
  return Math.abs(index - PEAK_INDEX) as 0 | 1 | 2 | 3;
}

/** Hauteur du bâtiment (desktop, silhouette horizontale) — 0 = sommet (le plus haut), 3 = le plus bas. */
const DESKTOP_TIER_HEIGHT: Record<0 | 1 | 2 | 3, number> = { 0: 260, 1: 214, 2: 168, 3: 122 };
/** Largeur du bâtiment (tablette/mobile, silhouette verticale en losange) — 0 = sommet (le plus large), 3 = le plus étroit. */
const MOBILE_TIER_WIDTH: Record<0 | 1 | 2 | 3, string> = { 0: "100%", 1: "86%", 2: "70%", 3: "54%" };
/** Taille max d'un logo à l'intérieur du bâtiment — le sommet met le logo le plus en valeur. */
const LOGO_MAX_H: Record<0 | 1 | 2 | 3, string> = {
  0: "max-h-[96px]",
  1: "max-h-[76px]",
  2: "max-h-[60px]",
  3: "max-h-[44px]",
};

export function TrustedOrganizations() {
  return (
    <div className="flex flex-col">
      <div aria-hidden className="w-8 h-px bg-green mb-6" />
      <Reveal
        as="span"
        className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55 mb-5"
      >
        {trustedOrganizationsIntro.eyebrow}
      </Reveal>
      <Reveal
        as="h2"
        delay={90}
        className="font-display font-bold text-3xl md:text-[42px] leading-tight text-white max-w-3xl mb-16 md:mb-24"
      >
        {trustedOrganizationsIntro.title}
      </Reveal>

      {/* Desktop (≥1200px) — silhouette de pyramide horizontale */}
      <div className="hidden desktop:block">
        <div className="grid grid-cols-7 gap-x-4 items-end h-[300px]">
          {trustedOrganizations.map((group, i) => {
            const tier = tierDistance(i);
            return (
              <div key={group.category} className="flex flex-col items-center justify-end h-full">
                <span className="font-display font-bold text-green text-[13px] mb-2.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="w-full bg-white flex items-center justify-center gap-3 px-3"
                  style={{ height: `${DESKTOP_TIER_HEIGHT[tier]}px` }}
                >
                  {group.organizations.map((org) => (
                    <OrgLogo key={org.name} org={org} maxH={LOGO_MAX_H[tier]} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div aria-hidden className="h-px bg-white/15" />
        <div className="grid grid-cols-7 gap-x-4 mt-5">
          {trustedOrganizations.map((group) => (
            <div key={group.category} className="flex flex-col items-center text-center px-1 gap-2">
              <h3 className="font-body font-semibold text-[9.5px] tracking-[.06em] uppercase text-white/50 leading-snug">
                {group.category}
              </h3>
              <div className="flex flex-col gap-1">
                {group.organizations.map((org) => (
                  <OrgCaption key={org.name} org={org} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablette & mobile (<1200px) — silhouette de pyramide verticale (losange) */}
      <div className="flex desktop:hidden flex-col items-center gap-8">
        {trustedOrganizations.map((group, i) => {
          const tier = tierDistance(i);
          return (
            <div key={group.category} className="flex flex-col items-center" style={{ width: MOBILE_TIER_WIDTH[tier] }}>
              <span className="font-display font-bold text-green text-[13px] mb-2.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-full bg-white flex items-center justify-center gap-3 px-4 py-6">
                {group.organizations.map((org) => (
                  <OrgLogo key={org.name} org={org} maxH={LOGO_MAX_H[tier]} />
                ))}
              </div>
              <div className="mt-4 flex flex-col items-center text-center gap-1.5">
                <h3 className="font-body font-semibold text-[10.5px] tracking-[.06em] uppercase text-white/50 leading-snug">
                  {group.category}
                </h3>
                <div className="flex flex-col gap-0.5">
                  {group.organizations.map((org) => (
                    <OrgCaption key={org.name} org={org} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function OrgLogo({ org, maxH }: { org: TrustedOrganization; maxH: string }) {
  return (
    <div className="flex-1 min-w-0 flex items-center justify-center">
      <Image
        src={withBasePath(org.logo.src)}
        alt={org.logo.alt}
        width={org.logo.width}
        height={org.logo.height}
        className={`${maxH} max-w-full w-auto h-auto object-contain`}
      />
    </div>
  );
}

function OrgCaption({ org }: { org: TrustedOrganization }) {
  return (
    <div>
      <div className="font-body font-semibold text-[10.5px] text-white/80 leading-snug">{org.name}</div>
      {org.legalName ? (
        <div className="font-body text-[9.5px] text-white/40 leading-snug">{org.legalName}</div>
      ) : null}
    </div>
  );
}
