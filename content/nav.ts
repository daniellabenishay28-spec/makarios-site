/**
 * Navigation principale — reprise à l'identique des 26 maquettes V4.
 * Contenu de type MICROCOPY-UI (voir verrouillage-contenu-site-makarios.md).
 */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Why Makarios", href: "/why-makarios" },
  { label: "Approach", href: "/approach" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const contactCta: NavLink = { label: "Contact →", href: "/contact" };
