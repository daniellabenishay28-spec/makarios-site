import Link from "next/link";

interface CtaProps {
  href: string;
  label: string;
  /**
   * "primary" = soulignement vert, l'accent le plus visible d'une paire de CTA.
   * "muted" = texte à opacité réduite, sans accent — CTA secondaire d'une paire
   * (ex. "Let's talk →" à côté de "Discover our method →").
   * Vocabulaire verrouillé : toujours un lien texte + flèche, jamais un fond
   * coloré — la seule exception (bouton d'envoi du formulaire Contact) n'utilise
   * pas ce composant, voir components/contact/ContactForm.
   */
  tone?: "primary" | "muted";
  className?: string;
}

export function Cta({ href, label, tone = "primary", className = "" }: CtaProps) {
  const base = "font-body font-medium text-sm transition-opacity hover:opacity-72";
  const toneClass =
    tone === "primary"
      ? "text-white border-b border-green pb-1"
      : "text-white/60";
  return (
    <Link href={href} className={`${base} ${toneClass} ${className}`}>
      {label}
    </Link>
  );
}
