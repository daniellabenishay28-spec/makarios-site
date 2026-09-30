import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { trustedOrganizations, trustedOrganizationsIntro } from "@/content/trustedOrganizations";
import { Reveal } from "@/components/motion/Reveal";
import { Cta } from "@/components/cta/Cta";
import { ctas } from "@/content/ctas";

/**
 * Teaser "Nos références" — Home.
 *
 * Reprend les mêmes 8 organisations que la page /projects (même source de
 * données, content/trustedOrganizations.ts, mêmes fichiers logos réels
 * inchangés) mais sans le découpage en 5 catégories : ici, un simple aperçu
 * (teaser) présentant les logos sur une seule ligne horizontale sur
 * desktop, qui repasse à la ligne sur tablette/mobile plutôt que de
 * réduire excessivement les logos. Aucun nom d'organisation sous les
 * logos, aucune carte, aucun cadre, aucune ombre : chaque logo garde
 * strictement son fichier et son arrière-plan d'origine, posé directement
 * sur le fond blanc continu de la section (même traitement que /projects).
 * Un CTA "View portfolio →" renvoie vers la page complète /projects.
 *
 * En-tête de section ajouté au-dessus de "Nos références" : même
 * traitement typographique, espacement et hiérarchie visuelle que l'en-tête
 * de la section "Our Solutions" de la Home (cf. SECTION 4 dans
 * app/page.tsx — eyebrow `text-xs tracking-[.16em] uppercase` + titre
 * `font-display font-bold text-3xl md:text-[42px] mt-4`), simplement
 * adapté en texte noir puisque cette section a un fond blanc (contrairement
 * à "Our Solutions", sur fond noir). Le contenu "Nos références" / logos /
 * CTA reste inchangé en dessous.
 */
const allOrganizations = trustedOrganizations.flatMap((group) => group.organizations);

export function PortfolioTeaser() {
  return (
    <section className="bg-white text-black px-6 md:px-20 py-16 md:py-24 flex flex-col gap-10 md:gap-14">
      <div>
        <div aria-hidden className="w-8 h-px bg-green mb-6" />
        <Reveal as="span" className="font-body font-semibold text-xs tracking-[.16em] uppercase text-black/55">
          06 — PROJECTS / PORTFOLIO
        </Reveal>
        <Reveal as="div" delay={90} className="font-display font-bold text-3xl md:text-[42px] text-black mt-4">
          PROJECTS / PORTFOLIO
        </Reveal>
      </div>

      <div className="flex items-end justify-between gap-5 flex-wrap">
        <Reveal
          as="h2"
          className="font-display font-bold text-3xl md:text-[42px] leading-tight text-black"
        >
          {trustedOrganizationsIntro.title}
        </Reveal>
        <Reveal as="div" delay={90}>
          <Cta {...ctas.viewPortfolio} className="text-black hover:text-green focus-visible:text-green" />
        </Reveal>
      </div>

      <div className="flex flex-wrap items-center gap-x-12 gap-y-8 md:gap-x-16">
        {allOrganizations.map((org, i) => (
          <Reveal key={org.name} as="div" delay={90 + i * 45}>
            <Image
              src={withBasePath(org.logo.src)}
              alt={org.logo.alt}
              width={org.logo.width}
              height={org.logo.height}
              className="max-h-[44px] md:max-h-[52px] w-auto h-auto object-contain"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
