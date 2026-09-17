/**
 * Page Approach — signature de marque + "The Makarios Method" (5 étapes).
 * Contenu officiel, verbatim de Approach-Desktop.dc.html. Système de
 * couleur corrigé et verrouillé (verrouillage-contenu, §06) : la signature
 * est entièrement blanche (aucun mot en vert, seuls les séparateurs entre
 * mots sont verts) ; dans les 5 étapes, seul le chiffre est vert — jamais
 * le nom de l'étape.
 */

/** Les 4 mots de la signature, dans l'ordre. Le séparateur entre chaque mot est un micro-accent vert — voir styles/tokens.css. */
export const brandSignature: string[] = [
  "COMPRENDRE.",
  "CONCEVOIR.",
  "CONNECTER.",
  "EXÉCUTER.",
];

/** Eyebrow de la section blanche de respiration, entre la signature et les 5 étapes. */
export const methodEyebrow = "The Makarios Method";

export interface ApproachStep {
  number: string;
  /** Nom bilingue tel que maquetté : "Anglais — Français". Ne pas séparer en deux champs, c'est la forme validée. */
  name: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    name: "Understand — Comprendre",
    description:
      "Nous analysons le besoin, le marché, les contraintes et les opportunités.",
  },
  {
    number: "02",
    name: "Design — Concevoir",
    description: "Nous construisons une solution adaptée aux objectifs.",
  },
  {
    number: "03",
    name: "Connect — Connecter",
    description:
      "Nous mobilisons les compétences, partenaires, ressources et réseaux nécessaires.",
  },
  {
    number: "04",
    name: "Execute — Exécuter",
    description: "Nous transformons la stratégie en actions concrètes.",
  },
  {
    number: "05",
    name: "Grow — Développer",
    description:
      "Nous mesurons les résultats et identifions les nouvelles opportunités.",
  },
];
