/**
 * Simulateur local d'envoi du formulaire Contact.
 *
 * Phase 0, point 16 du brief technique : aucun service externe n'est câblé
 * à ce stade. Ce simulateur permet de visualiser les 6 états du formulaire
 * (voir content/contact.ts → formStates) sans dépendance réseau. Il sera
 * remplacé par un vrai envoi (API route / service email) en Phase 5 — en
 * conservant si possible la même signature pour ne pas retoucher
 * ContactForm.
 */

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
  /** Slug du pôle concerné, pré-rempli depuis ?pole= — voir content/ctas.ts, discussThisPole. */
  pole?: string;
}

export type SendContactFormResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Résout après un court délai simulé, pour laisser le temps d'observer l'état "submitting". */
export async function sendContactForm(
  payload: ContactFormPayload
): Promise<SendContactFormResult> {
  await new Promise((resolve) => setTimeout(resolve, 900));

  if (!payload.name.trim() || !payload.message.trim()) {
    return { ok: false, error: "Champs requis manquants." };
  }
  if (!EMAIL_RE.test(payload.email.trim())) {
    return { ok: false, error: "Adresse email invalide." };
  }

  // Simulateur : succès une fois les champs valides. Le corps de cette
  // fonction changera en Phase 5, pas nécessairement sa signature.
  return { ok: true };
}
