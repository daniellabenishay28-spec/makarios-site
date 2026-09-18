"use client";

import { useSyncExternalStore } from "react";

/**
 * Système de motion centralisé — Phase 2 (Motion & Interactions).
 *
 * Toutes les durées et easings du site doivent venir d'ici, jamais de valeurs
 * arbitraires dispersées dans les composants. Trois paliers, conformes au
 * brief :
 * - micro   (~150–250ms) : interactions fines (flèche CTA, soulignement,
 *   couleur au hover/focus) ;
 * - standard (~300–500ms) : interactions standard (header au scroll, tiroir
 *   mobile, dominance d'un pôle au hover) ;
 * - reveal   (~500–800ms) : révélations éditoriales (apparition au scroll).
 *
 * L'easing "editorial" (léger overshoot inexistant, décélération franche et
 * précise) est celui utilisé pour toutes les révélations et la plupart des
 * transitions — cohérent avec le positionnement corporate/éditorial/premium
 * du site. Il est aussi exposé comme utilitaire Tailwind `ease-editorial`
 * (voir styles/tokens.css) pour les transitions purement CSS.
 */
export const DURATION = {
  micro: 200,
  standard: 400,
  reveal: 650,
} as const;

/** cubic-bezier(0.16, 1, 0.3, 1) — décélération franche, sans rebond. Dupliqué en CSS dans styles/tokens.css (--ease-editorial) : une seule courbe, deux syntaxes. */
export const EASE_EDITORIAL = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Distance de déplacement par défaut des reveal au scroll — volontairement
 * faible (brief : "le déplacement doit rester faible, pas de gros
 * mouvements").
 */
export const REVEAL_DISTANCE = 16;

function getServerSnapshotFalse() {
  return false;
}

/**
 * Détecte prefers-reduced-motion et reste synchronisé si l'utilisateur change
 * ce réglage en cours de session. Implémenté via useSyncExternalStore plutôt
 * qu'un useState+useEffect : la valeur est lue de façon synchrone dès le
 * premier rendu client (pas d'attente d'un effet), et il n'y a pas de
 * setState "manuel" à déclencher — React se charge de la resynchronisation.
 * `false` pendant le rendu serveur (pas d'accès à `window`) — géré en amont
 * par le filet de sécurité CSS `@media (prefers-reduced-motion: reduce)` dans
 * styles/globals.css, qui neutralise instantanément les reveal sans attendre
 * l'hydratation.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribeToReducedMotion, getReducedMotionSnapshot, getServerSnapshotFalse);
}

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * true après le scroll vertical d'au moins `threshold` px depuis le haut de
 * page — utilisé par le Header pour son changement d'état subtil au scroll.
 * `passive: true` et une seule valeur booléenne (pas la position exacte)
 * pour rester léger : pas de recalcul de layout, un seul re-render au
 * franchissement du seuil. useSyncExternalStore pour la même raison que
 * ci-dessus (pas de setState manuel dans un effet).
 */
export function useScrolledPast(threshold = 24): boolean {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback, { passive: true });
      return () => window.removeEventListener("scroll", callback);
    },
    () => window.scrollY > threshold,
    getServerSnapshotFalse
  );
}
