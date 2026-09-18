"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/motion";

interface ParallaxImageProps extends Omit<ImageProps, "fill"> {
  /** Amplitude du déplacement en px, très faible par défaut (brief : "pas de parallaxe agressive"). */
  strength?: number;
}

/**
 * Image de hero avec un mouvement de profondeur très léger au scroll —
 * jamais assez marqué pour gêner la lecture du texte superposé (brief,
 * section 5 : "le texte doit rester parfaitement lisible").
 *
 * Toujours en `fill` + `object-cover`. Le conteneur interne est
 * volontairement surdimensionné (`scale-110`) : la marge ainsi créée absorbe
 * le déplacement, donc jamais de bord visible pendant le scroll, même en
 * cas de resize. Désactivé sous prefers-reduced-motion (aucun décalage,
 * image parfaitement statique).
 */
export function ParallaxImage({ strength = 14, className = "", alt, ...imageProps }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    let ticking = false;

    function update() {
      ticking = false;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      // -1 (élément entièrement au-dessus) .. 1 (élément entièrement en dessous), 0 quand centré.
      const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const clamped = Math.max(-1, Math.min(1, progress));
      setOffset(clamped * strength);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion, strength]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 scale-110"
        style={
          reducedMotion
            ? undefined
            : { transform: `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.1)`, willChange: "transform" }
        }
      >
        <Image {...imageProps} alt={alt} fill className={`object-cover ${className}`} />
      </div>
    </div>
  );
}
