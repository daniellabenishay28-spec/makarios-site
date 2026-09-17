/**
 * Tous les textes provisoires du site — isolés ici à dessein (plan
 * technique, section F) pour qu'aucun placeholder ne se retrouve mélangé
 * au contenu officiel dans les autres fichiers /content, et pour qu'ils
 * soient faciles à retirer d'un coup quand Makarios fournira le contenu
 * réel correspondant.
 *
 * Rien ici n'est une invention créative : chaque texte est repris tel quel
 * des 26 maquettes V4 (marqué comme placeholder dans la maquette elle-même)
 * ou de verrouillage-contenu-site-makarios.md.
 */

/** Pôles pour lesquels le visuel hero n'a pas encore été produit (voir plan technique, section H — Audit des assets). */
export const missingHeroVisual = "Visuel à produire";

export const projectsPlaceholder = {
  /** Tag affiché en haut de la carte témoin — à remplacer par le vrai pôle une fois un projet réel fourni. */
  poleTag: "[Pôle à associer]",
  sample: {
    problem: "Client · Challenge",
    solution: "Approche Makarios",
    result: "À venir",
  },
  /** Note explicite affichée sur la carte témoin elle-même — ne jamais publier sans elle tant qu'aucun projet réel n'existe. */
  cardNote: "PLACEHOLDER — REAL PROJECTS TO BE PROVIDED BY MAKARIOS",
  /** Légende à droite de la carte témoin. */
  legend:
    "Chaque projet sera présenté selon ce même gabarit, avec un pôle Makarios associé et des résultats réels, dès qu'un cas sera fourni.",
  /** Texte éditorial neutre affiché en bas de page, en l'absence de tout cas réel. */
  editorialNote:
    "Nos études de cas sont actuellement en cours de compilation. Cette section accueillera prochainement des projets réels, avec leurs résultats concrets.",
};

/** Footer — nom de domaine final non encore confirmé. */
export const domainPendingNote = "[Domaine officiel — à confirmer]";

/** Footer — mention légale, copyright. L'année doit rester dynamique (new Date().getFullYear()), ne pas figer "2026" en dur dans le composant. */
export const legalNotice = {
  copyrightPrefix: "Makarios Corporation. Tous droits réservés.",
  legalMentionsLabel: "Mentions légales",
};

/**
 * Contenu explicitement en attente de Makarios (plan technique, section I).
 * Ne doit apparaître nulle part sur le site tant que non fourni — listé ici
 * uniquement pour traçabilité interne / pour alimenter un futur écran
 * "à faire" si besoin, jamais rendu côté utilisateur.
 */
export const pendingContent = [
  "Photo hero — Business Solutions",
  "Photo hero — Industries & Services",
  "Photos des projets réels (page Projects/Portfolio)",
  "Favicon",
  "Image Open Graph",
  "Contenu détaillé des 4 sous-marques non vérifiables : Mobilis Immobilier, Mr PLAN, Transformation digitale & Software Development, Delight Beverage & Food",
  "Mapping définitif de « Business Consulting » et de « General Trade »",
  "Équipe / organigramme",
  "Contenu de la page Mentions légales",
  "Nom de domaine final",
  "Variante large du hero Kinshasa (Home)",
] as const;
