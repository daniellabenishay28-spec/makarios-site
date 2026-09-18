/**
 * Page d'accueil — contenu officiel, verbatim de Home-Desktop.dc.html /
 * Home-Mobile.dc.html (référence visuelle V4 verrouillée). Chaque section
 * ci-dessous correspond à une section numérotée de la maquette.
 */

export const homeHero = {
  image: { src: "/images/hero-home.jpg", alt: "Kinshasa au crépuscule" },
  /** Slogan officiel — CONTENU OFFICIEL, verrouillage-contenu §03.A. */
  slogan: "BUILDING SOLUTIONS, CREATING GROWTH.",
  sloganFr: "Créer des solutions, stimuler la croissance.",
  intro:
    "Nous concevons et déployons des solutions pour accompagner les entreprises dans leur croissance.",
  cta: { label: "MAKARIOS Solutions ↗", href: "/solutions" },
};

export const poleTeasersEyebrow = "Makarios Solutions";

/** Résumé court par pôle pour les 4 tuiles de la Home — distinct des subheadlines des pages pôle elles-mêmes, tel que maquetté. */
export const poleTeaserTaglines: Record<string, string> = {
  "business-solutions": "Conseil. Structuration. Croissance.",
  "distribution-trade": "Connecter les marchés.",
  "industries-services": "Production. Opérations. Valorisation.",
  "digital-media": "Technologie. Création. Impact.",
};

export const positioningStatement = {
  text: "Transformer les besoins en solutions concrètes, et les opportunités en croissance.",
  accentWord: "croissance",
};

export const approachTeaser = {
  eyebrow: "Notre Approche",
  cta: { label: "Discover our method →", href: "/approach" },
};

export const whyMakariosTeaser = {
  eyebrow: "Why Makarios",
  backgroundImage: { src: "/images/why-makarios-bg.jpg", alt: "" },
  /** Sélection de 2 des 5 arguments pour la Home (01 et 05), tel que maquetté — pas les 5. */
  argumentNumbers: ["01", "05"] as const,
  cta: { label: "See all 5 reasons →", href: "/why-makarios" },
};

export const projectsTeaser = {
  eyebrow: "Projects",
  title: "PROJECTS / PORTFOLIO",
  titleAccent: "PORTFOLIO",
  /** Formulation propre à la Home — distincte de la note affichée sur /projects elle-même, chacune reprise verbatim de sa propre maquette. */
  note:
    "Nos études de cas sont en cours de constitution. Les projets, résultats et témoignages seront publiés ici après validation par Makarios.",
  cta: { label: "View projects →", href: "/projects" },
};

export const contactTeaser = {
  headline: "Let's build something that grows.",
  headlineAccent: "grows",
  cta: { label: "Let's talk →", href: "/contact" },
  symbol: { src: "/images/makarios-symbol-white.png", alt: "Symbole Makarios" },
};
