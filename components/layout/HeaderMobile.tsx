"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, contactCta } from "@/content/nav";
import { withBasePath } from "@/lib/basePath";
import { usePrefersReducedMotion } from "@/lib/motion";

interface HeaderMobileProps {
  /** Voir la même note de variant que Header.tsx — câblage par route laissé à Phase 1/2. */
  variant?: "light" | "dark";
}

/**
 * Header mobile (<768px). EXIGENCE NON NÉGOCIABLE du brief Phase 0 : le CTA
 * « Contact → » doit rester visible même lorsque le menu (hamburger) est
 * fermé — reproduit ici littéralement, jamais caché dans le tiroir.
 *
 * Phase 2 (Motion) : le tiroir reste toujours monté (jamais démonté/remonté)
 * pour pouvoir transitionner en fondu + léger déplacement au lieu d'un
 * affichage binaire, avec une révélation progressive des liens à
 * l'ouverture. Reste inerte et invisible aux lecteurs d'écran/au clavier tant
 * que fermé (aria-hidden + inert + pointer-events-none) — jamais seulement
 * masqué visuellement.
 */
export function HeaderMobile({ variant = "light" }: HeaderMobileProps) {
  const [open, setOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isDark = variant === "dark";
  const textColor = isDark ? "text-black" : "text-white";
  const barColor = isDark ? "bg-black" : "bg-white";

  return (
    <header
      className={`md:hidden absolute top-0 inset-x-0 z-20 h-16 flex items-center justify-between px-6 ${textColor}`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={withBasePath(isDark ? "/images/logo-dark.png" : "/images/logo-white.png")}
          alt="Makarios Corporation"
          width={109}
          height={18}
          priority
        />
      </Link>

      <div className="flex items-center gap-4">
        {/* Toujours visible, même menu fermé — ne pas déplacer dans le tiroir. */}
        <Link
          href={contactCta.href}
          className="font-body font-medium text-xs border-b border-green pb-[3px]"
        >
          {contactCta.label}
        </Link>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] w-[22px]"
        >
          <span className={`h-[1.5px] w-full ${barColor}`} />
          <span className={`h-[1.5px] w-full ${barColor}`} />
          <span className={`h-[1.5px] w-3/5 ${barColor}`} />
        </button>
      </div>

      <div
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 top-16 z-10 flex flex-col gap-6 bg-black px-6 py-10 transition-[opacity,transform] duration-300 ease-editorial motion-reduce:transition-none ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            style={open && !reducedMotion ? { transitionDelay: `${i * 40}ms` } : undefined}
            className={`font-display font-semibold text-2xl text-white transition-[opacity,transform] duration-300 ease-editorial motion-reduce:transition-none ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
