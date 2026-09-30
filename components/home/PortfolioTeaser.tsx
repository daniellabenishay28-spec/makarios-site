import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import { trustedOrganizations, trustedOrganizationsIntro } from "@/content/trustedOrganizations";
import { Reveal } from "@/components/motion/Reveal";
import { Cta } from "@/components/cta/Cta";
import { ctas } from "@/content/ctas";

/**
 * Teaser "Nos rÃ©fÃ©rences" â€” Home.
 *
 * Reprend les mÃªmes 8 organisations que la page /projects (mÃªme source de
 * donnÃ©es, content/trustedOrganizations.ts, mÃªmes fichiers logos rÃ©els
 * inchangÃ©s) mais sans le dÃ©coupage en 5 catÃ©gories : ici, un simple aperÃ§u
 * (teaser) prÃ©sentant les logos sur une seule ligne horizontale sur
 * desktop, qui repasse Ã  la ligne sur tablette/mobile plutÃ´t que de
 * rÃ©duire excessivement les logos. Aucun nom d'organisation sous les
 * logos, aucune carte, aucun cadre, aucune ombre : chaque logo garde
 * strictement son fichier et son arriÃ¨re-plan d'origine, posÃ© directement
 * sur le fond blanc continu de la section (mÃªme traitement que /projects).
 * Un CTA "View portfolio â†’" renvoie vers la page complÃ¨te /projects.
 */
const allOrganizations = trustedOrganizations.flatMap((group) => group.organizations);

export function PortfolioTeaser() {
  return (
    <section className="bg-white text-black px-6 md:px-20 py-16 md:py-24 flex flex-col gap-10 md:gap-14">
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

