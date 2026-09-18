import Link from "next/link";
import Image from "next/image";
import { contactCta } from "@/content/nav";
import { Nav } from "@/components/layout/Nav";
import { withBasePath } from "@/lib/basePath";
import { Reveal } from "@/components/motion/Reveal";

interface HeaderProps {
  /**
   * "light" (défaut) = logo texte blanc + nav blanche, pour les pages à hero
   * noir (la majorité des 26 maquettes V4). "dark" = logo image noire
   * (logo-dark.png) + nav noire, requis sur la page Contact — seule page à
   * ouvrir sur fond blanc, cf. Contact-Desktop.dc.html (le lockup texte y
   * est remplacé par l'image du logo, contrairement aux autres pages).
   *
   * Câblé automatiquement par route via components/layout/SiteHeader.tsx
   * (usePathname), voir app/layout.tsx.
   */
  variant?: "light" | "dark";
}

/**
 * Header desktop — visible à partir de la zone intermédiaire (≥768px, cf.
 * styles/tokens.css --breakpoint-md) jusqu'au desktop. Positionné en
 * absolute + fond transparent, comme dans les 26 maquettes V4, pour se
 * superposer au hero de la page plutôt que d'imposer son propre fond.
 *
 * Phase 2 (Motion) : le header est en `position: absolute` (non `sticky`),
 * un choix de design verrouillé — il défile avec le hero plutôt que de
 * rester épinglé à l'écran. Un changement d'état au scroll (fond/opacité)
 * n'aurait donc aucun effet visible utile et changerait un comportement déjà
 * validé : on se limite ici à une apparition très brève et discrète au
 * chargement de la page (fondu + très léger déplacement), pour que le header
 * ne "saute" pas à l'écran mais reste immédiatement lisible et utilisable —
 * aucun délai ne bloque jamais son usage.
 */
export function Header({ variant = "light" }: HeaderProps) {
  const isDark = variant === "dark";
  return (
    <header
      className={`hidden md:block absolute top-0 inset-x-0 z-20 h-[88px] px-20 ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <Reveal as="div" duration={300} distance={8} className="flex items-center justify-between h-full">
        <Link href="/" className="flex items-center">
          {isDark ? (
            <Image
              src={withBasePath("/images/logo-dark.png")}
              alt="Makarios Corporation"
              width={133}
              height={22}
              priority
            />
          ) : (
            <span className="font-display font-bold text-[13px] tracking-[.12em]">
              MAKARIOS <span className="font-normal text-white/60">CORPORATION</span>
            </span>
          )}
        </Link>

        <Nav variant={variant} />

        <Link
          href={contactCta.href}
          className="font-body font-medium text-[12.5px] border-b border-green pb-[3px] transition-opacity hover:opacity-72"
        >
          {contactCta.label}
        </Link>
      </Reveal>
    </header>
  );
}
