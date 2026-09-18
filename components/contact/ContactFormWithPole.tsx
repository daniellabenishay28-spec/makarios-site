"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

/**
 * Pré-remplit le champ pôle du formulaire depuis ?pole= (voir
 * content/ctas.ts, discussThisPole). useSearchParams() exige un Client
 * Component — nécessaire aussi pour rester compatible avec l'export statique
 * GitHub Pages, où il n'existe aucune requête serveur au moment du build
 * pour résoudre ce paramètre côté serveur.
 */
export function ContactFormWithPole() {
  const searchParams = useSearchParams();
  const pole = searchParams.get("pole") ?? undefined;
  return <ContactForm pole={pole} />;
}
