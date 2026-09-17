import type { Metadata } from "next";
import { Manifesto } from "@/components/sections/Manifesto";

export const metadata: Metadata = {
  title: "Why Makarios",
};

export default function WhyMakariosPage() {
  return (
    <div className="px-6 md:px-20 py-28 md:py-32">
      <Manifesto />
    </div>
  );
}
