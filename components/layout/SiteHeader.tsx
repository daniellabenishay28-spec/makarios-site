"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { HeaderMobile } from "@/components/layout/HeaderMobile";

/**
 * Câblage automatique du variant Header/HeaderMobile par route. Seule /contact
 * ouvre sur fond blanc (cf. Contact-Desktop.dc.html / Contact-Mobile.dc.html)
 * et requiert donc le variant "dark" — toutes les autres routes restent en
 * "light" (fond noir), sans exception à ajouter au fil des pages.
 *
 * usePathname() renvoie le pathname logique de la route (ex. "/contact"),
 * indépendant du basePath GitHub Pages et du slash final ajouté par
 * trailingSlash à l'export — la comparaison ci-dessous reste donc valide
 * dans les deux modes de build (voir next.config.ts).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isContact = pathname?.replace(/\/$/, "") === "/contact";
  const variant = isContact ? "dark" : "light";

  return (
    <>
      <Header variant={variant} />
      <HeaderMobile variant={variant} />
    </>
  );
}
