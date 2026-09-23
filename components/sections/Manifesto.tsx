import { whyMakariosArguments } from "@/content/whyMakarios";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Page Why Makarios — manifeste vertical compact (Option B, validée par
 * Makarios, cf. verrouillage-contenu §05). Séquence continue, sans pause
 * plein écran par argument.
 *
 * Refonte (présence institutionnelle) : grille éditoriale à deux colonnes
 * sur desktop (grand numéro en filigrane vert + titre/phrase), rythme
 * visuel par alternance de fond très légère — composition plus riche mais
 * contenu strictement identique à content/whyMakarios.ts.
 *
 * Phase 2 (Motion) : chaque argument se révèle à son propre passage dans le
 * viewport — une lecture plus "travaillée" du manifeste sans jamais gêner la
 * lecture (brief section 12 : "ne doit pas nuire à la lecture").
 */
export function Manifesto() {
  return (
    <div className="flex flex-col max-w-4xl">
      {whyMakariosArguments.map((arg, i) => (
        <Reveal
          key={arg.number}
          as="div"
          className={`group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-10 md:py-12 px-0 md:px-6 border-t border-white/14 transition-colors duration-300 ease-editorial motion-reduce:transition-none hover:bg-white/[.025] ${
            i === whyMakariosArguments.length - 1 ? "border-b" : ""
          }`}
        >
          <div className="md:col-span-3 flex md:block items-baseline gap-3">
            <div className="font-display font-extrabold text-4xl md:text-6xl leading-none text-green/80 transition-colors duration-300 ease-editorial motion-reduce:transition-none group-hover:text-green">
              {arg.number}
            </div>
          </div>
          <div className="md:col-span-9">
            <div className="font-display font-bold text-2xl md:text-[34px] leading-[1.2] text-white">
              {arg.title}
            </div>
            <div className="font-body text-base md:text-[16.5px] leading-relaxed text-white/65 mt-3.5 max-w-xl">
              {arg.phrase}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
