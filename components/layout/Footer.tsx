import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/content/nav";
import { companyInfo } from "@/content/contact";
import { domainPendingNote, legalNotice } from "@/content/placeholders";
import { poles } from "@/content/poles";
import { homeHero, poleTeasersEyebrow } from "@/content/home";
import { withBasePath } from "@/lib/basePath";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Footer global, identique sur toutes les pages (y compris Contact, à fond
 * blanc en ouverture — le footer reste noir, cf. Contact-Desktop.dc.html).
 * Contenu entièrement tiré de /content — aucune coordonnée en dur ici.
 *
 * Refonte (présence institutionnelle) : logo image (cohérent avec le
 * Header), tagline reprise verbatim du Hero de la Home, colonne "Nos
 * Pôles" (les 4 pôles déjà validés, eyebrow repris de content/home.ts) en
 * plus de la navigation, des coordonnées et des réseaux déjà présents.
 * Aucune information nouvelle — uniquement des liens internes déjà réels
 * et du texte déjà validé ailleurs sur le site.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-14 md:pt-20">
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-green/60 via-white/12 to-transparent" />

      <div className="px-6 md:px-20 pt-12 md:pt-16 pb-8 md:pb-10 flex flex-col gap-14 md:gap-16">
        <Reveal as="div" className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4 flex flex-col gap-5">
            <Image
              src={withBasePath("/images/logo-white.png")}
              alt="Makarios Corporation"
              width={140}
              height={23}
            />
            <p className="font-body text-[13px] leading-relaxed text-white/50 max-w-xs">
              {homeHero.intro}
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 md:col-span-2 md:col-start-6">
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-white/38 mb-1.5">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[13px] text-white/70 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:text-white focus-visible:text-white w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-2.5 md:col-span-2 md:col-start-8">
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-white/38 mb-1.5">
              {poleTeasersEyebrow}
            </div>
            {poles.map((pole) => (
              <Link
                key={pole.slug}
                href={`/solutions/${pole.slug}`}
                className="font-body text-[13px] text-white/70 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:text-white focus-visible:text-white w-fit"
              >
                {pole.name}
              </Link>
            ))}
          </nav>

          <div className="md:col-span-3 md:col-start-10 flex flex-col gap-6">
            <div className="font-body text-[13px] leading-loose text-white/70">
              <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-white/38 mb-1.5">
                Contact
              </div>
              <div>{companyInfo.phone}</div>
              <div>{companyInfo.email}</div>
              <div className="max-w-[220px]">{companyInfo.address}</div>
            </div>

            <div className="flex flex-col gap-2.5">
              {companyInfo.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="font-body text-[13px] text-white/70 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:text-white focus-visible:text-white w-fit"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-7 border-t border-white/8">
          <div className="font-body text-xs text-white/40">
            © {year} {legalNotice.copyrightPrefix}{" "}
            <Link
              href="/legal"
              prefetch={false}
              className="ml-4 text-white/55 underline transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:text-white/80"
            >
              {legalNotice.legalMentionsLabel}
            </Link>
          </div>
          <div className="font-body italic text-xs text-white/32">{domainPendingNote}</div>
        </div>
      </div>
    </footer>
  );
}
