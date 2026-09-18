import Link from "next/link";
import { navLinks } from "@/content/nav";
import { companyInfo } from "@/content/contact";
import { domainPendingNote, legalNotice } from "@/content/placeholders";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Footer global, identique sur toutes les pages (y compris Contact, à fond
 * blanc en ouverture — le footer reste noir, cf. Contact-Desktop.dc.html).
 * Contenu entièrement tiré de /content — aucune coordonnée en dur ici.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/12 px-6 md:px-20 pt-12 md:pt-16 pb-8 md:pb-10 flex flex-col gap-12 md:gap-16">
      <Reveal as="div" className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-3">
          <div className="font-display font-semibold text-base">MAKARIOS</div>
          <div className="font-body text-xs text-white/50 mt-1.5">CORPORATION</div>
        </div>

        <nav className="flex flex-col gap-2.5 md:col-span-2 md:col-start-5">
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

        <div className="md:col-span-3 md:col-start-7 font-body text-[13px] leading-loose text-white/70">
          <div>{companyInfo.phone}</div>
          <div>{companyInfo.email}</div>
          <div>{companyInfo.address}</div>
        </div>

        <div className="flex flex-col gap-2.5 md:col-span-2 md:col-start-10">
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
    </footer>
  );
}
