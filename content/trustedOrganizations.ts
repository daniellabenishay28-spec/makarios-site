/**
 * Page Projects/Portfolio — section "Nos références" : organisations avec
 * lesquelles Makarios a travaillé. Contenu officiel fourni directement par
 * Makarios (noms, catégories et logos réels) : aucune organisation,
 * catégorie ou logo supplémentaire ne doit être ajouté ici sans nouvelle
 * fourniture explicite (même principe que content/projects.ts — voir sa
 * note d'en-tête).
 *
 * RÈGLE ABSOLUE SUR LES FICHIERS LOGO : chaque fichier référencé ici est
 * utilisé strictement tel que fourni par l'organisation concernée — jamais
 * détouré, recadré, recoloré ou rendu transparent. Le fond blanc de la
 * section (cf. app/projects/page.tsx et TrustedOrganizations.tsx) est le
 * fond du CONTENEUR de la section, pas celui des logos : si un fichier
 * fourni a son propre arrière-plan (couleur, image), cet arrière-plan est
 * conservé à l'identique et reste visible autour du logo.
 *
 * Exactement 8 organisations réparties dans exactement 5 catégories
 * (regroupement validé par Makarios — les anciennes catégories
 * "Assurances", "Mines et Ressources Naturelles — Secteur Public" et
 * "Administration Publique et Finances" ont été fusionnées en une seule
 * catégorie "Secteur public").
 */

export const trustedOrganizationsIntro = {
  eyebrow: "Ils nous accompagnent",
  /** Titre prioritaire demandé — page /projects désormais dédiée aux références de Makarios. */
  title: "Nos références",
};

export interface TrustedOrganization {
  /** Nom d'usage à afficher en priorité. */
  name: string;
  /** Précision / raison sociale complète entre parenthèses, quand fournie. */
  legalName?: string;
  logo: {
    src: string;
    alt: string;
    /** Dimensions réelles du fichier fourni, pour un rendu sans decalage (CLS). */
    width: number;
    height: number;
  };
  /**
   * Champ historique, non utilisé par le rendu actuel (la section "Nos
   * références" utilise un fond blanc continu, sans plaque individuelle
   * derrière les logos — cf. TrustedOrganizations.tsx). Conservé à titre
   * documentaire sur l'origine du fichier : "light" = fichier fourni tel
   * quel par l'organisation, avec son propre arrière-plan (opaque ou
   * transparent, quelle qu'en soit la couleur) ; ne reflète jamais un
   * traitement appliqué par Makarios — aucun fichier logo de cette liste
   * n'est détouré, recadré ou recoloré.
   */
  plate: "light" | "dark";
}

export interface TrustedOrganizationCategory {
  category: string;
  organizations: TrustedOrganization[];
}

export const trustedOrganizations: TrustedOrganizationCategory[] = [
  {
    category: "Publicité, Communication & Audiovisuel",
    organizations: [
      {
        name: "DI-WAY",
        legalName: "Studio Diway",
        logo: { src: "/images/partners/di-way.jpg", alt: "DI-WAY — Studio Diway", width: 512, height: 512 },
        plate: "light",
      },
      {
        name: "DISPROMALT",
        logo: { src: "/images/partners/dispromalt.jpg", alt: "DISPROMALT", width: 1280, height: 312 },
        plate: "light",
      },
    ],
  },
  {
    category: "Technologie et Télécommunications",
    organizations: [
      {
        name: "RAAH",
        legalName: "Raah Sarl",
        logo: { src: "/images/partners/raah.jpg", alt: "RAAH — Raah Sarl", width: 1280, height: 478 },
        plate: "light",
      },
    ],
  },
  {
    category: "Ressources Humaines et Services aux Entreprises",
    organizations: [
      {
        name: "Afrik Interim",
        legalName: "Afrika in s.a.r.l",
        logo: {
          src: "/images/partners/afrik-interim.jpg",
          alt: "Afrik Interim — Afrika in s.a.r.l",
          width: 1280,
          height: 408,
        },
        plate: "light",
      },
    ],
  },
  {
    category: "Santé et Pharmacie",
    organizations: [
      {
        name: "Ever Green Pharmaceuticals Africa",
        logo: {
          src: "/images/partners/ever-green-pharma.jpg",
          alt: "Ever Green Pharmaceuticals Africa",
          width: 400,
          height: 144,
        },
        plate: "light",
      },
    ],
  },
  {
    category: "Secteur public",
    organizations: [
      {
        name: "SONAS",
        legalName: "Société Nationale d'Assurances",
        logo: {
          src: "/images/partners/sonas.jpg",
          alt: "SONAS — Société Nationale d'Assurances",
          width: 1280,
          height: 714,
        },
        plate: "light",
      },
      {
        name: "DGI",
        legalName: "Direction Générale des Impôts",
        logo: {
          src: "/images/partners/dgi.png",
          alt: "DGI — Direction Générale des Impôts",
          width: 1024,
          height: 1024,
        },
        plate: "dark",
      },
      {
        name: "CTCPM",
        legalName: "Cellule Technique de Coordination et de Planification Minière",
        logo: {
          src: "/images/partners/ctcpm.jpg",
          alt: "CTCPM — Cellule Technique de Coordination et de Planification Minière",
          width: 1280,
          height: 490,
        },
        plate: "light",
      },
    ],
  },
];
