/**
 * Les 4 pôles Makarios — contenu officiel, verbatim du Company Profile et du
 * cahier des charges. Ne jamais ajouter d'activité qui n'apparaît pas ici
 * (voir la liste des activités non confirmées dans le plan technique,
 * section F et section I).
 */

export interface PoleCategory {
  label: string;
  items: string[];
}

export interface Pole {
  slug: string;
  number: string;
  name: string;
  /** pole-photo = hero en photo plein cadre ; pole-editorial = pas de photo, chiffre en filigrane (ghost-num) */
  heroType: "pole-photo" | "pole-editorial";
  /** Chemin de l'image dans /public/images — absent si non encore disponible (voir plan technique, section H) */
  image?: { src: string; alt: string };
  headline: string;
  subheadline: string;
  intro: string;
  categories: PoleCategory[];
  /** Absente sur certains pôles (ex. Digital & Media) — ne jamais en inventer une */
  valuePhrase?: string;
}

export const poles: Pole[] = [
  {
    slug: "business-solutions",
    number: "01",
    name: "Business Solutions",
    heroType: "pole-photo",
    image: { src: "/images/hero-business-solutions.jpg", alt: "Business Solutions" },
    headline: "Conseil & Développement.",
    subheadline: "Structurer. Accompagner. Faire avancer.",
    intro:
      "Makarios accompagne les entreprises et organisations dans la structuration de leurs projets, l’amélioration de leur organisation et la mise en œuvre de solutions adaptées à leurs objectifs.",
    categories: [
      {
        label: "Gestion de projets & consultance",
        items: [
          "Accompagnement stratégique",
          "Conception de plans organisationnels",
          "Assistance dans la réalisation de projets complexes",
          "Structuration des projets",
          "Amélioration de l’organisation",
        ],
      },
      {
        label: "Gestion immobilière",
        items: [
          "Gestion de biens",
          "Accompagnement immobilier",
          "Recherche de solutions immobilières",
          "Gestion et exploitation de propriétés",
        ],
      },
    ],
    valuePhrase:
      "Une expertise adaptée aux enjeux stratégiques et opérationnels de chaque partenaire.",
  },
  {
    slug: "distribution-trade",
    number: "02",
    name: "Distribution & Trade",
    heroType: "pole-photo",
    image: { src: "/images/hero-distribution.jpg", alt: "Distribution et Trade" },
    headline: "Distribution & Commerce.",
    subheadline: "Connecter les marchés. Optimiser les flux.",
    intro:
      "Makarios propose des solutions de transport, de logistique et de supply chain permettant aux entreprises d’améliorer leurs opérations, de maîtriser leurs coûts et de renforcer leur efficacité.",
    categories: [
      {
        label: "Transport & Logistique",
        items: [
          "Transport",
          "Location de véhicules",
          "Gestion de charroi automobile",
          "Optimisation logistique",
        ],
      },
      {
        label: "Supply Chain Management",
        items: [
          "Gestion des approvisionnements",
          "Gestion des stocks",
          "Transport & distribution",
          "Optimisation des itinéraires",
          "Suivi des livraisons",
          "Analyse et optimisation des processus",
        ],
      },
    ],
    valuePhrase:
      "Une gestion intégrée des flux, de l’approvisionnement jusqu’à la distribution.",
  },
  {
    slug: "industries-services",
    number: "03",
    name: "Industries & Services",
    heroType: "pole-photo",
    image: { src: "/images/hero-industries-services.jpg", alt: "Industries & Services" },
    headline: "Opérations & Solutions.",
    subheadline: "Produire. Transformer. Valoriser.",
    intro:
      "Makarios développe des solutions dans l’agriculture, l’agrobusiness, l’agroalimentaire et l’élevage, avec une approche orientée vers la production et la valorisation des ressources.",
    categories: [
      {
        label: "",
        items: [
          "Agriculture",
          "Agrobusiness",
          "Transformation agroalimentaire",
          "Valorisation des produits agricoles",
          "Élevage",
        ],
      },
    ],
    valuePhrase:
      "Contribuer au développement de solutions innovantes dans les secteurs productifs.",
  },
  {
    slug: "digital-media",
    number: "04",
    name: "Digital & Media",
    heroType: "pole-photo",
    image: { src: "/images/hero-digital-media.jpg", alt: "Digital et Media" },
    headline: "Technologie & Création.",
    subheadline: "Donner une forme digitale à la croissance.",
    intro:
      "Makarios accompagne les entreprises dans leur communication, leur transformation digitale et la modernisation de leurs opérations grâce à des solutions technologiques et créatives.",
    categories: [
      {
        label: "Communication & Media",
        items: [
          "Marketing digital",
          "Production audiovisuelle",
          "Campagnes publicitaires",
          "Stratégie commerciale",
          "Solutions digitales de communication — ciblage des prospects, création de campagnes efficaces et amélioration de la relation client",
        ],
      },
      {
        label: "Technology & Software",
        items: [
          "Applications mobiles",
          "Plateformes digitales",
          "Gestion des données",
          "Services numériques",
          "Transformation digitale",
        ],
      },
      {
        label: "Digital Payments",
        items: [
          "Paiement digital sécurisé",
          "Gestion des paiements",
          "Transactions commerciales",
          "Digitalisation des opérations financières",
          "Traçabilité des transactions",
        ],
      },
    ],
    // Pas de phrase de valeur pour ce pôle — absente du Company Profile, ne pas en inventer une.
  },
];

export function getPole(slug: string): Pole | undefined {
  return poles.find((p) => p.slug === slug);
}
