import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactFormWithPole } from "@/components/contact/ContactFormWithPole";
import { FormStates } from "@/components/contact/FormStates";
import { contactHero, companyInfo } from "@/content/contact";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: contactHero.subheadline,
};

/**
 * Cette page ouvre sur fond blanc (seule exception des 11 routes) — le
 * Header/HeaderMobile en variant="dark" correspondant est câblé
 * automatiquement par route via components/layout/SiteHeader.tsx.
 */
export default function ContactPage() {
  return (
    <div>
      <div className="relative bg-white text-black px-6 md:px-20 pt-32 md:pt-40 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-6 -top-10 font-display font-extrabold text-[220px] md:text-[340px] leading-none text-black/[.028] select-none pointer-events-none"
        >
          07
        </div>
        <div className="relative z-10">
          <div aria-hidden className="w-8 h-px bg-green mb-6" />
          <SectionHeading
            eyebrow={contactHero.eyebrow}
            title={contactHero.headline}
            accentWord={contactHero.headlineAccent}
            subtitle={contactHero.subheadline}
            variant="dark"
          />
        </div>
      </div>

      <div className="bg-white text-black px-6 md:px-20 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
        <div className="md:col-span-7">
          <Suspense fallback={null}>
            <ContactFormWithPole />
          </Suspense>
        </div>
        <Reveal as="div" delay={90} className="md:col-span-4 md:col-start-9">
          <div className="border border-black/10 p-7 md:p-8 flex flex-col gap-6">
            <div>
              <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/45 mb-2">
                Téléphone
              </div>
              <div className="font-body text-sm text-black/75">{companyInfo.phone}</div>
            </div>
            <div className="border-t border-black/10 pt-5">
              <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/45 mb-2">
                Email
              </div>
              <div className="font-body text-sm text-black/75">{companyInfo.email}</div>
            </div>
            <div className="border-t border-black/10 pt-5">
              <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/45 mb-2">
                Adresse
              </div>
              <div className="font-body text-sm leading-relaxed text-black/75">{companyInfo.address}</div>
            </div>
            <div className="border-t border-black/10 pt-5 flex gap-5">
              {companyInfo.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-body text-sm text-black/60 transition-colors duration-200 ease-editorial motion-reduce:transition-none hover:text-black"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <FormStates />
    </div>
  );
}
