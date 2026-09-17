/**
 * Les 5 arguments "Why Makarios" — contenu officiel, cahier des charges,
 * verbatim de WhyMakarios-Desktop.dc.html section 2 (Option B — manifeste
 * vertical compact, validée par Makarios — voir verrouillage-contenu, §05).
 * Ne jamais reformuler ces titres/phrases : ce sont des citations, pas une
 * synthèse.
 */

export interface WhyMakariosArgument {
  number: string;
  title: string;
  phrase: string;
}

export const whyMakariosArguments: WhyMakariosArgument[] = [
  {
    number: "01",
    title: "One partner. Multiple solutions.",
    phrase: "Un interlocuteur capable de répondre à plusieurs problématiques.",
  },
  {
    number: "02",
    title: "Business-minded.",
    phrase:
      "Nous ne nous limitons pas à conseiller : nous cherchons des solutions orientées résultats.",
  },
  {
    number: "03",
    title: "Local knowledge. Regional ambition.",
    phrase:
      "Une compréhension des réalités du marché avec une ambition de développement régional.",
  },
  {
    number: "04",
    title: "Connected expertise.",
    phrase:
      "Nous connectons différentes compétences et ressources pour créer des solutions plus complètes.",
  },
  {
    number: "05",
    title: "Execution focused.",
    phrase: "Nous croyons aux solutions qui se concrétisent.",
  },
];
