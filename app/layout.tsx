import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { HeaderMobile } from "@/components/layout/HeaderMobile";
import { Footer } from "@/components/layout/Footer";

// Graisses strictement limitées à celles utilisées dans les 26 maquettes V4
// (voir plan technique, section E — Design tokens).
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Métadonnées de base uniquement : aucun texte marketing inventé.
// Title/description par page restent à compléter page par page une fois
// validés (voir plan technique, section SEO et accessibilité).
export const metadata: Metadata = {
  title: {
    default: "Makarios Corporation",
    template: "%s — Makarios Corporation",
  },
  description: "Makarios Corporation Sarl.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-black text-white">
        {/* Header desktop et mobile : le composant décide lui-même de sa visibilité par breakpoint. */}
        <Header />
        <HeaderMobile />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
