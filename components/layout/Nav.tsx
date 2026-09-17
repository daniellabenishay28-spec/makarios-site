import Link from "next/link";
import { navLinks } from "@/content/nav";

interface NavProps {
  /** "light" = texte clair (fond sombre, cas par défaut) ; "dark" = texte sombre (fond blanc, ex. Contact). */
  variant?: "light" | "dark";
  className?: string;
  onLinkClick?: () => void;
}

/**
 * Navigation principale, partagée entre Header (desktop) et le tiroir de
 * HeaderMobile. Purement content-driven depuis content/nav.ts — aucun
 * libellé ne doit être écrit en dur ailleurs.
 */
export function Nav({ variant = "light", className = "", onLinkClick }: NavProps) {
  const isDark = variant === "dark";
  return (
    <nav className={`flex gap-8 ${className}`}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={`font-body font-medium text-[12.5px] tracking-[.04em] transition-opacity hover:opacity-72 ${
            isDark ? "text-black/70" : "text-white/88"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
