/**
 * Les 7 solutions business Makarios — contenu officiel, verbatim de
 * SITE_INTERNET_MAKARIOS.pdf, section « 03 — OUR SOLUTIONS » (note du brief :
 * « C'est la partie la plus importante. Présenter chaque point comme des
 * solutions business. »).
 *
 * Distinct des 4 pôles (content/poles.ts, issus du Company Profile) : le PDF
 * ne donne aucun mapping explicite entre les 7 solutions et les 4 pôles —
 * n'en invente aucun ici. Les deux structures coexistent, chacune dans son
 * propre contexte (4 pôles → Home ; 7 solutions → Our Solutions).
 *
 * Ne jamais reformuler les taglines ou descriptions : ce sont des citations
 * exactes du PDF, pas une synthèse. Seule la casse des noms est normalisée
 * en Title Case (le PDF les écrit en capitales, ex. « BUSINESS CONSULTING »)
 * — même traitement déjà appliqué aux 4 pôles dans content/poles.ts.
 */

export interface Solution {
  number: string;
  name: string;
  tagline: string;
  description: string;
}

export const solutions: Solution[] = [
  {
    number: "01",
    name: "Business Consulting",
    tagline: "Think better. Sell better. Grow better.",
    description:
      "Marketing, communication, stratégie commerciale, développement des ventes.",
  },
  {
    number: "02",
    name: "Trade & Distribution",
    tagline: "From product to market.",
    description:
      "Distribution, représentation commerciale, développement de réseaux, commerce.",
  },
  {
    number: "03",
    name: "Agribusiness",
    tagline: "Connecting agriculture to opportunity.",
    description:
      "Produits agricoles, agroalimentaire, commercialisation et développement de chaînes de valeur.",
  },
  {
    number: "04",
    name: "Mobility & Fleet Solutions",
    tagline: "Moving business forward.",
    description:
      "Transport, gestion de charroi, optimisation et consulting automobile.",
  },
  {
    number: "05",
    name: "Digital & Technology",
    tagline: "Technology built for business.",
    description:
      "Développement software, solutions digitales et accessoires technologiques.",
  },
  {
    number: "06",
    name: "Media & Production",
    tagline: "Ideas made visible.",
    description: "Production audiovisuelle, contenus et communication visuelle.",
  },
  {
    number: "07",
    name: "General Trade",
    tagline: "Connecting needs to resources.",
    description: "Commerce général et solutions d’approvisionnement.",
  },
];
