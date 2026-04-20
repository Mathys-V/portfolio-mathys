import type { Metadata } from "next";
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
      {/* Ajout de suppressHydrationWarning ici */}
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900`}
      >
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
