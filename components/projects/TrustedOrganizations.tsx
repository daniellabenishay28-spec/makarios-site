import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import {
  trustedOrganizations,
  trustedOrganizationsIntro,
  type TrustedOrganization,
} from "@/content/trustedOrganizations";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section "Nos références" — Projects/Portfolio.
 *
 * Composition en 5 colonnes institutionnelles, inspirée de la référence
 * fournie par Makarios : chaque catégorie occupe une colonne, avec son nom
 * en haut et ses logos empilés verticalement en dessous. L'ensemble de la
 * section repose sur UN SEUL fond blanc continu (pas de plaque blanche
 * individuelle derrière chaque logo, pas de carte, pas de cadre, pas
 * d'ombre) : les logos sont des éléments graphiques intégrés directement à
 * la composition, jamais des vignettes encadrées. Une fine séparation
 * verticale (noir à très faible opacité) distingue les colonnes — jamais
 * une grille de cartes indépendantes. La catégorie 01 (Publicité,
 * Communication & Audiovisuel) regroupe DI-WAY et DISPROMALT dans une
 * seule colonne ; la catégorie 05 (Secteur public) regroupe SONAS, DGI et
 * CTCPM dans une seule colonne — jamais de colonnes supplémentaires
 * au-delà de 5.
 *
 * Aucun nom d'organisation ni raison sociale n'apparaît sous les logos, sur
 * aucun format (desktop, tablette, mobile) : chaque organisation est
 * identifiée par son seul logo. Les seuls textes de la composition sont le
 * titre "Nos références", les 5 numéros (01→05) et les 5 noms de
 * catégorie.
 *
 * Desktop et tablette (≥768px) : 5 colonnes horizontales, séparateurs
 * verticaux. Mobile (<768px) : les 5 catégories s'empilent verticalement,
 * séparées par une fine ligne horizontale, pour rester lisibles sans
 * jamais devenir une grille uniforme.
 */

export function TrustedOrganizations() {
  return (
    <div className="flex flex-col">
      <div aria-hidden className="w-8 h-px bg-green mb-6" />
      <Reveal
        as="span"
        className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-black/55 mb-5"
      >
        {trustedOrganizationsIntro.eyebrow}
      </Reveal>
      <Reveal
        as="h2"
        delay={90}
        className="font-display font-bold text-3xl md:text-[42px] leading-tight text-black max-w-3xl mb-16 md:mb-20"
      >
        {trustedOrganizationsIntro.title}
      </Reveal>

      {/* Mobile (<768px) — 5 catégories empilées verticalement */}
      <div className="flex md:hidden flex-col divide-y divide-black/10">
        {trustedOrganizations.map((group, i) => (
          <CategoryColumn key={group.category} group={group} index={i} variant="stacked" />
        ))}
      </div>

      {/* Tablette & desktop (≥768px) — 5 colonnes horizontales */}
      <div className="hidden md:flex divide-x divide-black/10">
        {trustedOrganizations.map((group, i) => (
          <CategoryColumn key={group.category} group={group} index={i} variant="row" />
        ))}
      </div>
    </div>
  );
}

function CategoryColumn({
  group,
  index,
  variant,
}: {
  group: (typeof trustedOrganizations)[number];
  index: number;
  variant: "row" | "stacked";
}) {
  const isRow = variant === "row";
  return (
    <div
      className={
        isRow
          ? "flex-1 min-w-0 flex flex-col items-center px-4 desktop:px-6 py-2"
          : "flex flex-col items-center py-10 first:pt-0 last:pb-0"
      }
    >
      <span className="font-display font-bold text-green text-[13px] mb-3">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-body font-semibold text-[10.5px] md:text-[11px] tracking-[.08em] uppercase text-black/60 text-center leading-snug max-w-[180px] min-h-[2.6em]">
        {group.category}
      </h3>
      <div className="flex flex-col items-center gap-6 md:gap-7 mt-7 md:mt-8 w-full">
        {group.organizations.map((org) => (
          <OrgPlate key={org.name} org={org} />
        ))}
      </div>
    </div>
  );
}

function OrgPlate({ org }: { org: TrustedOrganization }) {
  return (
    <div className="w-full max-w-[200px] flex items-center justify-center px-5 py-2">
      <Image
        src={withBasePath(org.logo.src)}
        alt={org.logo.alt}
        width={org.logo.width}
        height={org.logo.height}
        className="max-h-[56px] md:max-h-[64px] max-w-full w-auto h-auto object-contain"
      />
    </div>
  );
}
