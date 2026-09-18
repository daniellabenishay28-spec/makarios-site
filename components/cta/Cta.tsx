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

/** Les libellés se terminent tous par " →" ou " ↗" (contenu verrouillé, voir content/ctas.ts) — isolé pour animer la flèche indépendamment du texte, sans jamais reformuler le libellé lui-même. */
const ARROW_SUFFIX = /\s(→|↗)$/;

/**
 * CTA texte + flèche — interaction affinée (Phase 2, Motion & Interactions) :
 * la flèche se déplace légèrement au survol/focus, le texte glisse discrètement
 * vers le vert. Aucun fond, aucun agrandissement, aucun glow — conforme au
 * vocabulaire de CTA verrouillé. Le mouvement est purement une amélioration au
 * hover : sur tactile (pas de hover réel), le lien reste pleinement lisible et
 * fonctionnel sans jamais en dépendre.
 */
export function Cta({ href, label, tone = "primary", className = "" }: CtaProps) {
  const match = label.match(ARROW_SUFFIX);
  const text = match ? label.slice(0, match.index) : label;
  const arrow = match ? match[1] : null;

  const base =
    "group inline-flex items-center gap-1 font-body font-medium text-sm transition-colors duration-200 ease-editorial motion-reduce:transition-none";
  const toneClass =
    tone === "primary"
      ? "text-white hover:text-green focus-visible:text-green border-b border-green pb-1"
      : "text-white/60 hover:text-white/90 focus-visible:text-white/90";

  return (
    <Link href={href} className={`${base} ${toneClass} ${className}`}>
      <span>{text}</span>
      {arrow && (
        <span
          aria-hidden
          className="inline-block transition-transform duration-200 ease-editorial motion-reduce:transition-none group-hover:translate-x-1 group-focus-visible:translate-x-1"
        >
          {arrow}
        </span>
      )}
    </Link>
  );
}
