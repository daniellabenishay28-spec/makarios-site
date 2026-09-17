/**
 * Page Contact — contenu officiel, verbatim de Contact-Desktop.dc.html.
 * Les coordonnées ci-dessous sont aussi la source unique pour le Footer
 * (même contenu réutilisé, ne pas dupliquer/reformuler ailleurs).
 *
 * Les 6 états du formulaire (section `formStates`) sont une description
 * VISUELLE verrouillée (verrouillage-contenu, §07) : le composant
 * ContactForm doit s'appuyer sur ces messages exacts, pas en inventer.
 * Aucun service externe n'est câblé en Phase 0 — voir lib/sendContactForm.ts
 * (simulateur local jusqu'à la Phase 5).
 */

export const contactHero = {
  eyebrow: "07 — Contact",
  /** Repris tel quel de la clôture contact de la Home (V3) — cohérence intentionnelle entre les deux pages. */
  headline: "Let's build something that grows.",
  /** Mot à afficher en accent vert dans le headline : "grows". Le composant doit le repérer, ne pas le dupliquer en dur. */
  headlineAccent: "grows",
  subheadline: "Vous avez un projet, un besoin ou une opportunité ? Parlons-en.",
};

export interface ContactFieldContent {
  label: string;
  placeholder: string;
}

export const contactFields: {
  name: ContactFieldContent;
  email: ContactFieldContent;
  message: ContactFieldContent;
} = {
  name: { label: "Votre nom", placeholder: "Jean Mukendi" },
  email: { label: "Votre email", placeholder: "vous@exemple.com" },
  message: { label: "Votre message", placeholder: "Décrivez votre projet ou votre besoin..." },
};

/** Note affichée sous les champs — le pôle est un champ optionnel, pré-rempli automatiquement via ?pole= (voir content/ctas.ts, discussThisPole). */
export const poleFieldNote =
  "Champ optionnel — Pôle concerné : pré-rempli automatiquement lorsque le formulaire est atteint depuis une page Solutions.";

/** Seule exception au vocabulaire CTA (texte + flèche) : un vrai bouton plein, cf. verrouillage-contenu §02/§07. */
export const submitButtonLabel = "Send message";

export const companyInfo = {
  phone: "+243 832 000 071",
  email: "contact@makarios.cd",
  address: "Concession COTEX, 63 Av. Colonel Mondjiba, Gombe, Kinshasa, RDC",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export type FormState =
  | "normal"
  | "focus"
  | "error"
  | "submitting"
  | "success"
  | "failure";

/**
 * Messages/traitement par état — description visuelle verrouillée.
 * `visualNote` documente la règle de rendu (ne PAS coder de couleur/valeur
 * hors de ces notes sans revérifier styles/tokens.css).
 */
export const formStates: Record<
  FormState,
  { label: string; message?: string; visualNote: string }
> = {
  normal: {
    label: "Normal",
    visualNote:
      "Ligne fine sous le champ (rgba(0,0,0,.25) sur fond blanc), label en petites capitales Inter au-dessus, pas de cadre plein.",
  },
  focus: {
    label: "Focus",
    visualNote:
      "La ligne fine sous le champ passe au vert Makarios (--color-green) — seul changement visuel, aucun halo ni fond coloré.",
  },
  error: {
    label: "Error",
    message: "Merci d'indiquer une adresse email valide.",
    visualNote:
      "Ligne fine en rouge sourd désaturé (--color-error, jamais un rouge vif), message court sous le champ, texte normal (pas de majuscules ni gras excessif).",
  },
  submitting: {
    label: "Submitting",
    message: "Sending…",
    visualNote:
      "Le bouton reste plein noir/blanc, texte remplacé temporairement, opacité légèrement réduite. Aucun spinner.",
  },
  success: {
    label: "Success",
    message: "Merci, nous revenons vers vous très vite.",
    visualNote:
      "Le formulaire est remplacé par cette ligne de confirmation, typographie standard, aucune animation de célébration.",
  },
  failure: {
    label: "Failure",
    message:
      "L'envoi a échoué, merci de réessayer ou de nous contacter directement par téléphone/email.",
    visualNote:
      "Message global au-dessus du formulaire (pas seulement par champ), ton neutre. Le formulaire reste rempli — aucune perte de saisie.",
  },
};
