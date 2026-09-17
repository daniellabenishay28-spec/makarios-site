import Link from "next/link";
import { contactCta } from "@/content/nav";
import { Nav } from "@/components/layout/Nav";

interface HeaderProps {
  /**
   * "light" (défaut) = logo/nav en blanc, pour les pages à hero noir (la
   * majorité des 26 maquettes V4). "dark" = logo/nav en noir, requis sur la
   * page Contact (ouverture à fond blanc, cf. Contact-Desktop.dc.html).
   *
   * Le câblage automatique du variant par route (transmettre "dark" depuis
   * app/contact/page.tsx) n'est PAS fait en Phase 0 — Phase 0 exclut
   * l'implémentation détaillée des pages. Signalé explicitement ici plutôt
   * que résolu silencieusement : voir le rapport de fin de Phase 0, point
   * "Problèmes rencontrés".
   */
  variant?: "light" | "dark";
}

/**
 * Header desktop — visible à partir de la zone intermédiaire (≥768px, cf.
 * styles/tokens.css --breakpoint-md) jusqu'au desktop. Positionné en
 * absolute + fond transparent, comme dans les 26 maquettes V4, pour se
 * superposer au hero de la page plutôt que d'imposer son propre fond.
 */
export function Header({ variant = "light" }: HeaderProps) {
  const isDark = variant === "dark";
  return (
    <header
      className={`hidden md:flex absolute top-0 inset-x-0 z-20 h-[88px] items-center justify-between px-20 ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <Link href="/" className="font-display font-bold text-[13px] tracking-[.12em]">
        MAKARIOS{" "}
        <span className={isDark ? "font-normal text-black/60" : "font-normal text-white/60"}>
          CORPORATION
        </span>
      </Link>

      <Nav variant={variant} />

      <Link
        href={contactCta.href}
        className="font-body font-medium text-[12.5px] border-b border-green pb-[3px] transition-opacity hover:opacity-72"
      >
        {contactCta.label}
      </Link>
    </header>
  );
}
