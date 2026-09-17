/**
 * Préfixe un chemin d'asset public ("/images/...") avec le basePath actif.
 *
 * next/link et next/image préfixent automatiquement le basePath configuré
 * dans next.config.ts — SAUF le `src` brut d'un <Image> quand
 * `images.unoptimized: true` (cas de l'export statique GitHub Pages) : dans
 * ce mode, next/image restitue le `src` tel quel, sans aucune
 * transformation. Cette fonction comble ce trou, uniquement là où un
 * chemin d'asset littéral (`public/images/...`) est passé à <Image>.
 *
 * NEXT_BASE_PATH est vide en dehors de l'export GitHub Pages (dev local,
 * build Vercel) — la fonction devient alors un no-op, sans changer le
 * comportement actuel de ces deux cibles.
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_BASE_PATH?.trim() || "";
  if (!basePath || !path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
