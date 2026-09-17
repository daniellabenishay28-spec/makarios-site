import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { FormStates } from "@/components/contact/FormStates";
import { contactHero, companyInfo } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contactHero.subheadline,
};

/**
 * Route préparée. Conflit signalé (non résolu silencieusement) : cette page
 * est à fond blanc en ouverture, ce qui exige un Header en variant="dark"
 * (logo/nav noirs, cf. Contact-Desktop.dc.html) — mais app/layout.tsx rend
 * Header/HeaderMobile globalement sans connaissance de la route. Le
 * mécanisme de variant existe déjà dans Header/HeaderMobile/Nav ; le
 * câblage par route (contexte ou layout dédié à ce segment) reste à faire
 * en Phase 1 — voir rapport de fin de Phase 0.
 */
export default function ContactPage() {
  return (
    <div>
      <div className="bg-white text-black px-6 md:px-20 pt-32 md:pt-40 pb-16">
        <SectionHeading
          eyebrow={contactHero.eyebrow}
          title={contactHero.headline}
          accentWord={contactHero.headlineAccent}
          subtitle={contactHero.subheadline}
          variant="dark"
        />
      </div>

      <div className="bg-white text-black px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <ContactForm />
        </div>
        <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6">
          <div className="border-t border-black/10 pt-4">
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/45 mb-2">
              Téléphone
            </div>
            <div className="font-body text-sm text-black/75">{companyInfo.phone}</div>
          </div>
          <div className="border-t border-black/10 pt-4">
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/45 mb-2">
              Email
            </div>
            <div className="font-body text-sm text-black/75">{companyInfo.email}</div>
          </div>
          <div className="border-t border-black/10 pt-4">
            <div className="font-body font-semibold text-[10.5px] tracking-[.12em] uppercase text-black/45 mb-2">
              Adresse
            </div>
            <div className="font-body text-sm leading-relaxed text-black/75">{companyInfo.address}</div>
          </div>
        </div>
      </div>

      <FormStates />
    </div>
  );
}
