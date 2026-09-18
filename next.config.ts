import type { NextConfig } from "next";

/**
 * Bascule GitHub Pages — export statique de validation uniquement.
 *
 * N'est activée QUE si la variable d'environnement DEPLOY_TARGET vaut
 * "github-pages" — positionnée exclusivement par
 * .github/workflows/deploy-gh-pages.yml, jamais par défaut. Un `next build`
 * lancé en local ou par Vercel, sans cette variable, produit exactement le
 * même build serveur qu'avant cet ajustement : aucune fonctionnalité prévue
 * pour le déploiement Vercel final (optimisation d'image, éventuelles routes
 * serveur futures, etc.) n'est retirée ni modifiée pour ce chemin.
 *
 * NEXT_BASE_PATH est calculé dynamiquement par le workflow (vide pour un
 * dépôt <compte>.github.io, "/<nom-du-repo>" sinon) — ne jamais le figer en
 * dur ici : le nom du dépôt GitHub n'est pas encore connu à ce stade.
 */
const isGithubPagesExport = process.env.DEPLOY_TARGET === "github-pages";
const basePath = process.env.NEXT_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  // lib/basePath.ts lit process.env.NEXT_BASE_PATH depuis des composants qui
  // finissent aussi exécutés côté navigateur (ex. Header/HeaderMobile, rendus
  // par components/layout/SiteHeader.tsx, un Client Component pour piloter le
  // variant "dark" de /contact via usePathname). Sans cette entrée `env`,
  // Next.js n'inline QUE les variables préfixées NEXT_PUBLIC_ dans le bundle
  // client — NEXT_BASE_PATH y resterait donc `undefined` après hydratation ou
  // navigation côté client, cassant le préfixe basePath des images fixes
  // (logo-dark.png). `env` force le remplacement statique à la compilation,
  // identique côté serveur et client, sans renommer la variable verrouillée
  // par le workflow GitHub Actions.
  env: {
    NEXT_BASE_PATH: basePath,
  },
  ...(isGithubPagesExport
    ? {
        output: "export",
        // GitHub Pages sert des fichiers statiques : une route /about doit
        // exister comme about/index.html, pas about.html, pour être
        // atteignable sans extension.
        trailingSlash: true,
        basePath: basePath || undefined,
        assetPrefix: basePath ? `${basePath}/` : undefined,
        images: {
          // Pas de serveur d'optimisation d'image possible sur un export
          // statique GitHub Pages. Redevient l'optimisation Next normale
          // (via Vercel) dès que DEPLOY_TARGET n'est pas positionné.
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
