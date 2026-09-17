/**
 * Vocabulaire de CTA verrouillé — repris à l'identique des références V3/V4.
 * Toujours un lien texte + flèche, jamais un fond coloré, sauf le bouton
 * d'envoi du formulaire Contact (seule exception, voir components/contact).
 */

export const ctas = {
  discoverMethod: { label: "Discover our method →", href: "/approach" },
  seeAllReasons: { label: "See all 5 reasons →", href: "/why-makarios" },
  letsTalk: { label: "Let’s talk →", href: "/contact" },
  viewProjects: { label: "View projects →", href: "/projects" },
  discussThisPole: (poleHref: string) => ({
    label: "Discuss this pole →",
    href: `/contact?pole=${encodeURIComponent(poleHref)}`,
  }),
  backToAllSolutions: { label: "Back to all solutions ↗", href: "/solutions" },
  discover: (href: string) => ({ label: "Découvrir →", href }),
} as const;
