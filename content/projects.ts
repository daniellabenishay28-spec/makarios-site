/**
 * Projets réels — VIDE À DESSEIN. Aucun faux client, faux résultat, faux
 * témoignage ou faux logo n'est créé, à ce stade ni à aucun stade suivant,
 * tant que Makarios n'a pas fourni de contenu réel (verrouillage-contenu,
 * §04). Le composant ProjectPlaceholder (components/projects/) doit gérer
 * lui-même l'affichage de la carte témoin quand ce tableau est vide — voir
 * content/placeholders.ts pour son contenu.
 */

export interface Project {
  slug: string;
  /** Doit correspondre à un `Pole["slug"]` de content/poles.ts. */
  pole: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
}

export const projects: Project[] = [];
