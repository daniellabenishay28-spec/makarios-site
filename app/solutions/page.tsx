import type { Metadata } from "next";
import { PoleGrid } from "@/components/sections/PoleGrid";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return (
    <div className="px-6 md:px-20 py-28 md:py-32">
      <PoleGrid />
    </div>
  );
}
