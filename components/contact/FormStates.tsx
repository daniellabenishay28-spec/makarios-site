import { formStates } from "@/content/contact";

/**
 * Panneau de référence visuelle des 6 états du formulaire, fond gris clair
 * (#f7f7f7), reproduit tel que maquetté (Contact-Desktop.dc.html, section
 * "Form states — reference"). Usage documentation/QA — pas le formulaire
 * fonctionnel lui-même (voir ContactForm).
 */
export function FormStates() {
  return (
    <div className="bg-bg px-6 md:px-20 py-14 md:py-18">
      <div className="font-body font-semibold text-xs tracking-[.14em] uppercase text-black/40 mb-8">
        Form states — reference
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-body font-semibold text-[10px] tracking-[.1em] uppercase text-black/40 mb-3">
            {formStates.normal.label}
          </div>
          <div className="font-body text-[13.5px] text-black/30 pb-2 border-b border-black/25">
            Votre nom
          </div>
        </div>

        <div>
          <div className="font-body font-semibold text-[10px] tracking-[.1em] uppercase text-black/40 mb-3">
            {formStates.focus.label}
          </div>
          <div className="font-body text-[13.5px] text-black pb-2 border-b-2 border-green">
            Jean Mukendi
          </div>
        </div>

        <div>
          <div className="font-body font-semibold text-[10px] tracking-[.1em] uppercase text-black/40 mb-3">
            {formStates.error.label}
          </div>
          <div className="font-body text-[13.5px] text-black pb-2 border-b-2 border-error">jean@</div>
          <div className="font-body text-[11.5px] text-error mt-2">{formStates.error.message}</div>
        </div>

        <div>
          <div className="font-body font-semibold text-[10px] tracking-[.1em] uppercase text-black/40 mb-3">
            {formStates.submitting.label}
          </div>
          <div className="bg-black text-white/60 font-body font-medium text-[13.5px] px-6 py-3.5 w-fit">
            {formStates.submitting.message}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-9">
        <div>
          <div className="font-body font-semibold text-[10px] tracking-[.1em] uppercase text-black/40 mb-3">
            {formStates.success.label}
          </div>
          <div className="font-body text-sm text-black/75">{formStates.success.message}</div>
        </div>
        <div>
          <div className="font-body font-semibold text-[10px] tracking-[.1em] uppercase text-black/40 mb-3">
            {formStates.failure.label}
          </div>
          <div className="font-body text-sm text-black/75">{formStates.failure.message}</div>
        </div>
      </div>
    </div>
  );
}
