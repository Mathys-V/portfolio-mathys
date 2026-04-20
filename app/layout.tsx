import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathys Vanheulle | Portfolio",
  description:
    "Portfolio de Mathys Vanheulle, Concepteur et Développeur d'Applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />

        {/* Le composant Analytics est placé ici pour suivre l'activité du site */}
        <Analytics />
      </body>
    </html>
  );
}
