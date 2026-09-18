"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { DURATION, EASE_EDITORIAL, REVEAL_DISTANCE, usePrefersReducedMotion } from "@/lib/motion";

/** Balises réellement utilisées par Reveal sur le site — volontairement fermé plutôt que génériquement polymorphe : plus simple à typer correctement, et suffisant pour l'usage réel (titres, texte, CTA, images, listes). */
type RevealTag = "div" | "span" | "h1" | "h2" | "h3" | "p" | "li" | "a";

interface RevealProps {
  as?: RevealTag;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Délai de déclenchement en ms — sert à décaler légèrement plusieurs Reveal entre eux (eyebrow → titre → texte → CTA). */
  delay?: number;
  /** Distance de translation verticale au départ, en px. Volontairement faible par défaut. */
  distance?: number;
  duration?: number;
  href?: string;
  id?: string;
}

/**
 * Révélation au scroll générique — utilisée pour les titres, paragraphes,
 * images, CTA et blocs éditoriaux dans tout le site (Phase 2, Motion &
 * Interactions).
 *
 * Se déclenche une seule fois, réellement à l'entrée dans le viewport
 * (IntersectionObserver, désabonné après le premier déclenchement — jamais
 * rejoué à chaque petit mouvement de scroll). Respecte
 * prefers-reduced-motion : contenu affiché immédiatement, sans transform ni
 * transition, avec un filet de sécurité CSS (voir styles/globals.css,
 * [data-reveal]) qui neutralise l'effet dès le premier paint, avant même
 * l'hydratation.
 *
 * N'introduit aucun élément supplémentaire dans le DOM : `as` détermine la
 * balise réellement rendue, donc Reveal peut remplacer directement un <h1>,
 * un <p>, un <li> de grille, etc. sans perturber la mise en page parente.
 */
export function Reveal({
  as = "div",
  children,
  className = "",
  style,
  delay = 0,
  distance = REVEAL_DISTANCE,
  duration = DURATION.reveal,
  ...rest
}: RevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Sous prefers-reduced-motion, le contenu est déjà visible via `visible`
    // ci-dessous (reducedMotion || inView) — inutile d'observer quoi que ce
    // soit ni de déclencher un setState ici.
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  // reducedMotion est lu de façon synchrone (useSyncExternalStore, voir
  // lib/motion.ts) : pas besoin d'attendre un effet pour afficher le contenu
  // immédiatement dans ce cas.
  const visible = reducedMotion || inView;

  const motionStyle: CSSProperties = reducedMotion
    ? { ...style }
    : {
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${distance}px)`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: EASE_EDITORIAL,
        transitionDelay: visible ? `${delay}ms` : "0ms",
      };

  return (
    <Tag ref={ref} data-reveal style={motionStyle} className={className} {...rest}>
      {children}
    </Tag>
  );
}
