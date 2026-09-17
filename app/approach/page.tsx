import type { Metadata } from "next";
import { ApproachSteps } from "@/components/sections/ApproachSteps";

export const metadata: Metadata = {
  title: "Approach",
};

/**
 * Route préparée. La signature de marque et la section blanche de
 * respiration ("The Makarios Method") ne sont pas posées ici — voir la
 * note dans components/sections/ApproachSteps.tsx — implémentation
 * complète prévue en Phase 1.
 */
export default function ApproachPage() {
  return (
    <div className="px-6 md:px-20 py-28 md:py-32">
      <ApproachSteps />
    </div>
  );
}
