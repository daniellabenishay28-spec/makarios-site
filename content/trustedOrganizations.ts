/**
 * Page Projects/Portfolio — section "organisations qui nous ont fait
 * confiance". Contenu officiel fourni directement par Makarios (noms,
 * catégories et logos réels) : aucune organisation, catégorie ou logo
 * supplémentaire ne doit être ajouté ici sans nouvelle fourniture explicite
 * (même principe que content/projects.ts — voir sa note d'en-tête).
 *
 * Exactement 8 organisations réparties dans exactement 7 catégories.
 */

export const trustedOrganizationsIntro = {
  eyebrow: "Ils nous accompagnent",
  /** Titre prioritaire demandé. */
  title: "Des organisations qui nous ont fait confiance.",
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
   * Fond nécessaire derrière le logo pour rester lisible, déterminé par le
   * fichier fourni lui-même (jamais une recoloration du logo) :
   * "light" = logo à fond blanc opaque → plaque blanche ; "dark" = logo déjà
   * à fond noir (#000000, identique au fond du site) → aucune plaque,
   * s'intègre directement au fond de la page.
   */
  plate: "light" | "dark";
}

export interface TrustedOrganizationCategory {
  category: string;
  organizations: TrustedOrganization[];
}

export const trustedOrganizations: TrustedOrganizationCategory[] = [
  {
    category: "Publicité, Communication et Audiovisuel",
    organizations: [
      {
        name: "DISPROMALT",
        logo: { src: "/images/partners/dispromalt.jpg", alt: "DISPROMALT", width: 1280, height: 312 },
        plate: "light",
      },
      {
        name: "DI-WAY",
        legalName: "Studio Diway",
        logo: { src: "/images/partners/di-way.jpg", alt: "DI-WAY — Studio Diway", width: 512, height: 512 },
        plate: "dark",
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
    category: "Assurances",
    organizations: [
      {
        name: "SONAS",
        legalName: "Société Nationale d'Assurances",
        logo: {
          src: "/images/partners/sonas.jpg",
          alt: "SONAS — Société Nationale d'Assurances",
          width: 1280,
          height: 888,
        },
        plate: "dark",
      },
    ],
  },
  {
    category: "Mines et Ressources Naturelles — Secteur Public",
    organizations: [
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
  {
    category: "Administration Publique et Finances",
    organizations: [
      {
        name: "DGI",
        legalName: "Direction Générale des Impôts",
        logo: {
          src: "/images/partners/dgi.jpg",
          alt: "DGI — Direction Générale des Impôts",
          width: 1280,
          height: 1280,
        },
        plate: "dark",
      },
    ],
  },
];
