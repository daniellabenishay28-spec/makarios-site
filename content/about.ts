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
  // Paragraphe officiel, verbatim de SITE_INTERNET_MAKARIOS.pdf, section
  // « 02 — ABOUT US ». Remplace l'ancien texte (issu du Company Profile) —
  // ne jamais reformuler, raccourcir, traduire ou changer la ponctuation.
  body:
    "MAKARIOS CORPORATION est une entreprise multisectorielle qui combine conseil, commerce, distribution, technologie et services opérationnels afin d'accompagner ses partenaires dans leur développement.",
};

/**
 * Les deux phrases de différenciation, verbatim de SITE_INTERNET_MAKARIOS.pdf
 * (même section que aboutIntro.body, juste après). Dans le PDF, la seconde
 * phrase est en gras — emphasis reprise ici, pas ajoutée. Ne jamais
 * reformuler ces phrases.
 */
export const aboutDifferentiation = [
  "Notre différence n'est pas simplement la diversité de nos activités.",
  "Notre différence réside dans notre capacité à connecter ces expertises pour construire des solutions adaptées à chaque besoin.",
];

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
