/**
 * Les 5 valeurs Makarios — contenu officiel, verbatim de la section
 * "Nos Valeurs" de la page About (fond blanc, respiration). Source : Company
 * Profile p.11 / maquette About-Desktop.dc.html, section 3.
 *
 * Note : dans la maquette V4, la taille de police du nom de chaque valeur
 * décroît légèrement de haut en bas (19px → 16px) — un choix de composition,
 * pas une hiérarchie de contenu. Reproduit ici via `emphasis` pour que le
 * composant puisse restituer la même dégradation visuelle sans qu'on ait à
 * la deviner à l'implémentation.
 */

export interface Value {
  name: string;
  phrase: string;
  /** Dégradation de taille observée dans la maquette V4 (1 = la plus grande). Purement visuel. */
  emphasis: 1 | 2 | 3 | 4 | 5;
}

export const values: Value[] = [
  {
    name: "Impact",
    phrase: "Nous cherchons des résultats concrets.",
    emphasis: 1,
  },
  {
    name: "Agility",
    phrase: "Nous nous adaptons rapidement aux réalités du marché.",
    emphasis: 2,
  },
  {
    name: "Innovation",
    phrase: "Nous cherchons constamment de nouvelles façons de créer de la valeur.",
    emphasis: 3,
  },
  {
    name: "Reliability",
    phrase: "Nous faisons de la confiance un élément central de nos relations.",
    emphasis: 4,
  },
  {
    name: "Collaboration",
    phrase: "Nous croyons que les meilleures solutions naissent des bonnes connexions.",
    emphasis: 5,
  },
];
