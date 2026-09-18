/**
 * Page About — contenu officiel, verbatim de About-Desktop.dc.html /
 * About-Mobile.dc.html. Les 5 valeurs elles-mêmes vivent dans
 * content/values.ts (fichier prévu explicitement dans le plan technique) ;
 * ce fichier couvre le reste des sections officielles de la page : intro,
 * écosystème, vision.
 */

export const aboutIntro = {
  eyebrow: "02 — About Us",
  headline: "Une entreprise multisectorielle, née à Kinshasa.",
  headlineAccent: "Kinshasa",
  subheadline: "Makarios Corporation Sarl.",
  body:
    "MAKARIOS CORPORATION est une entreprise multisectorielle spécialisée dans le développement, le conseil, la distribution et la mise en œuvre de solutions adaptées aux besoins des entreprises et des organisations. À travers nos différents pôles d'activités, nous accompagnons nos partenaires dans leurs enjeux stratégiques, commerciaux, opérationnels et technologiques.",
};

export const ecosystemIntro =
  "Makarios construit un écosystème intégré permettant d'accompagner les entreprises de bout en bout.";

export interface EcosystemEntry {
  label: string;
  name: string;
}

/**
 * Écosystème de marques (Company Profile p.04, diagramme). Seuls ces 4 noms
 * sont confirmés — les 4 autres sous-marques évoquées ailleurs (Mobilis
 * Immobilier, Mr PLAN, Transformation digitale & Software Development,
 * Delight Beverage & Food) ne sont pas vérifiables et ne doivent jamais
 * être ajoutées ici (voir content/placeholders.ts → pendingContent).
 */
export const ecosystem: EcosystemEntry[] = [
  { label: "Communiquer & acquérir", name: "YoLink" },
  { label: "Payer & transacter", name: "YoPay" },
  { label: "Approvisionner & optimiser", name: "Supply Chain Management" },
  { label: "Transporter & distribuer", name: "Mobilis Logistics" },
];

export const vision = {
  headline: "Une référence africaine.",
  headlineAccent: "référence",
  body:
    "Construire une entreprise africaine de référence dans la conception et la mise en œuvre de solutions intégrées pour les entreprises, les institutions et les entrepreneurs.",
  primaryCta: { label: "Discover our method →", href: "/approach" },
  secondaryCta: { label: "Nos solutions", href: "/solutions" },
};
