import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Ex. "04 — Why Makarios?" — numéro + nom de rubrique, repris tel quel des maquettes V4. */
  eyebrow: string;
  title: string;
  /** Mot du titre à afficher en accent vert (ex. "grows" dans "...that grows."). Optionnel. */
  accentWord?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  className?: string;
}

/**
 * En-tête de section générique (eyebrow + titre + sous-titre optionnel),
 * réutilisé en ouverture des pages Solutions, Why Makarios, Approach,
 * Projects, Contact. Ne porte aucun contenu en dur : tout vient des props,
 * elles-mêmes alimentées par /content.
 */
export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  subtitle,
  variant = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = variant === "dark";

  let titleNodes: ReactNode = title;
  if (accentWord && title.includes(accentWord)) {
    const idx = title.indexOf(accentWord);
    titleNodes = (
      <>
        {title.slice(0, idx)}
        <span className="text-green">{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </>
    );
  }

  return (
    <div className={className}>
      <div
        className={`font-body font-semibold text-[11.5px] tracking-[.16em] uppercase mb-5 ${
          isDark ? "text-black/50" : "text-white/55"
        }`}
      >
        {eyebrow}
      </div>
      <div
        className={`font-display font-bold text-[32px] md:text-[40px] leading-[1.2] ${
          isDark ? "text-black" : "text-white"
        }`}
      >
        {titleNodes}
      </div>
      {subtitle && (
        <div
          className={`font-body text-base leading-relaxed mt-5 max-w-xl ${
            isDark ? "text-black/62" : "text-white/75"
          }`}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
