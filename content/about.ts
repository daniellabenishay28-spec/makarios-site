/**
 * Page About — contenu officiel, verbatim du Company Profile Makarios
 * (mise à jour du contenu institutionnel — remplace l'ancien texte issu de
 * SITE_INTERNET_MAKARIOS.pdf). Les valeurs elles-mêmes vivent dans
 * content/values.ts ; ce fichier couvre le reste des sections officielles
 * de la page : présentation, mission, vision.
 *
 * L'ancienne section "Écosystème" (YoLink, YoPay, Supply Chain Management,
 * Mobilis Logistics) a été entièrement retirée de la page About Us — ne
 * jamais la réintroduire ici.
 */

export const aboutIntro = {
  eyebrow: "02 — About Us",
  headline: "Une entreprise multisectorielle, née à Kinshasa.",
  headlineAccent: "Kinshasa",
  subheadline: "Makarios Corporation Sarl.",
  /**
   * "Présentation de l'entreprise" — 3 paragraphes officiels, verbatim du
   * Company Profile. Ne jamais reformuler, raccourcir ou fusionner. La Home
   * réutilise uniquement paragraphs[0] (déjà le plus concis des trois) pour
   * son teaser condensé — un sous-ensemble verbatim, jamais une reformulation.
   */
  paragraphs: [
    "Makarios Corporation SARL est une entreprise congolaise qui développe des solutions innovantes dans plusieurs secteurs stratégiques afin d'accompagner les entreprises, organisations et entrepreneurs dans leur croissance, leur transformation digitale et leur performance opérationnelle.",
    "Fondée en République Démocratique du Congo, Makarios Corporation SARL a commencé ses activités principalement à Kinshasa avec l'ambition de devenir un partenaire de référence dans la création de solutions adaptées aux besoins du marché congolais et africain.",
    "L'entreprise met à disposition une équipe d'experts capable d'offrir des services répondant aux standards internationaux dans les domaines du marketing, de la communication, du digital, de la logistique, de l'immobilier, du conseil et de l'agrobusiness.",
  ],
};

/** "Notre Mission" — contenu officiel, verbatim du Company Profile Makarios. */
export const mission = {
  eyebrow: "Notre Mission",
  body:
    "Accompagner les entreprises et organisations dans l'amélioration de leur productivité grâce à des solutions intégrées combinant technologie, communication, expertise opérationnelle et innovation.",
};

/** "Notre Vision" — contenu officiel, verbatim du Company Profile Makarios. */
export const vision = {
  headline: "Une référence africaine.",
  headlineAccent: "référence",
  body:
    "Être une corporation innovante capable de créer des écosystèmes de solutions qui contribuent au développement des entreprises et à la transformation économique de la République Démocratique du Congo.",
  primaryCta: { label: "Discover our method →", href: "/approach" },
  secondaryCta: { label: "Nos solutions", href: "/solutions" },
};
