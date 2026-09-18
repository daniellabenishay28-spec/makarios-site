import type { Metadata } from "next";
import { Cta } from "@/components/cta/Cta";
import { ImageSection } from "@/components/sections/ImageSection";
import { poles } from "@/content/poles";
import { ctas } from "@/content/ctas";

export const metadata: Metadata = {
  title: "Solutions",
  description: "MAKARIOS CORPORATION s’articule autour de 4 grands pôles.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* ============ SECTION 1 — OUVERTURE ============ */}
      <section className="bg-black px-6 md:px-20 pt-20 pb-14 md:pt-28 md:pb-16">
        <span className="font-body font-semibold text-[11.5px] tracking-[.16em] uppercase text-white/55">
          03 — Our Solutions
        </span>
        <h1 className="font-display font-bold text-[32px] md:text-[38px] text-white mt-4 max-w-2xl">
          Quatre pôles. Une seule vision.
        </h1>
        <p className="font-body text-sm md:text-[15px] text-white/70 mt-4 max-w-lg">
          MAKARIOS CORPORATION s’articule autour de 4 grands pôles.
        </p>
      </section>

      {/* ============ BANDES — UNE PAR PÔLE, ALTERNÉES ============ */}
      {poles.map((pole, i) => {
        const imageFirst = i % 2 === 1;
        const textBlock = (
          <div key={`text-${pole.slug}`} className="flex flex-col justify-center">
            <span className="font-display font-extrabold text-4xl md:text-[52px] leading-none text-green">
              {pole.number}
            </span>
            <div className="font-display font-bold text-2xl md:text-[34px] text-white mt-4">
              {pole.name}
            </div>
            <div className="font-body text-sm leading-relaxed text-white/65 mt-3.5">
              {pole.headline}
              <br />
              {pole.subheadline}
            </div>
            <Cta
              {...ctas.discover(`/solutions/${pole.slug}`)}
              className="mt-6 w-fit"
            />
          </div>
        );
        const imageBlock = (
          <ImageSection key={`image-${pole.slug}`} image={pole.image} className="min-h-[280px] md:min-h-[340px]" />
        );

        return (
          <section
            key={pole.slug}
            className="bg-black px-6 md:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
          >
            {imageFirst ? (
              <>
                {imageBlock}
                {textBlock}
              </>
            ) : (
              <>
                {textBlock}
                {imageBlock}
              </>
            )}
          </section>
        );
      })}
    </>
  );
}
