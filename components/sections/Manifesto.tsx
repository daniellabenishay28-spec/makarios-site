import { whyMakariosArguments } from "@/content/whyMakarios";

/**
 * Page Why Makarios — manifeste vertical compact (Option B, validée par
 * Makarios, cf. verrouillage-contenu §05). Séquence continue, sans pause
 * plein écran par argument.
 */
export function Manifesto() {
  return (
    <div className="flex flex-col max-w-3xl">
      {whyMakariosArguments.map((arg, i) => (
        <div
          key={arg.number}
          className={`py-10 md:py-14 border-t border-white/14 ${
            i === whyMakariosArguments.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="font-display font-bold text-sm text-green">{arg.number}</div>
          <div className="font-display font-bold text-2xl md:text-[34px] leading-[1.25] text-white mt-3.5">
            {arg.title}
          </div>
          <div className="font-body text-base md:text-[16.5px] leading-relaxed text-white/65 mt-3.5 max-w-xl">
            {arg.phrase}
          </div>
        </div>
      ))}
    </div>
  );
}
