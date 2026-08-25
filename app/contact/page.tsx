"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ============================================================
// PAGE CONTACT — Thème Saisons (Glassmorphism & UX Améliorée)
// Chemin : app/contact/page.tsx
// ============================================================

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  // Copier dans le presse-papier
  const handleCopy = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <div
      className="flex flex-col overflow-x-hidden min-h-screen relative transition-colors duration-1000"
      style={{
        backgroundColor: "var(--bg-fallback)",
        color: "var(--text-main)",
      }}
    >
      {/* ══════════════════════════════════════════════════
          IMAGES DE FOND MULTI-SAISONS
      ══════════════════════════════════════════════════ */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/img/themes/summer-beach.webp"
          alt="Paysage d'été"
          fill
          priority
          sizes="100vw"
          className="object-cover bg-image bg-summer"
        />
        <Image
          src="/img/themes/autumn-forest.webp"
          alt="Paysage d'automne"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-autumn"
        />
        <Image
          src="/img/themes/winter.webp"
          alt="Paysage d'hiver"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-winter"
        />
        <Image
          src="/img/themes/spring.webp"
          alt="Paysage de printemps"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-spring"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* ══════════════════════════════════════════════════
          STYLES GLOBAUX & VARIABLES DE THÈMES
      ══════════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── CONFIGURATION DES COMPOSANTS PAR SAISON ── */
        :root, .theme-summer {
          --bg-fallback: #f0f9ff;
          --text-main: #0f172a;
          --text-muted: #334155;
          --text-accent: #0284c7;
          --text-accent-glow: rgba(2, 132, 199, 0.4);
          --gradient-start: #0284c7;
          --gradient-end: #0369a1;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-autumn {
          --bg-fallback: #fff7ed;
          --text-main: #431407;
          --text-muted: #7c2d12;
          --text-accent: #c2410c;
          --text-accent-glow: rgba(194, 65, 12, 0.4);
          --gradient-start: #c2410c;
          --gradient-end: #7c2d12;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-winter {
          --bg-fallback: #f8fafc;
          --text-main: #0f172a;
          --text-muted: #1e3a8a;
          --text-accent: #1d4ed8;
          --text-accent-glow: rgba(29, 78, 216, 0.4);
          --gradient-start: #1e40af;
          --gradient-end: #1e3a8a;
          --glass-bg: rgba(255, 255, 255, 0.85);
          --glass-border: rgba(255, 255, 255, 1);
        }

        .theme-spring {
          --bg-fallback: #fdf2f8;
          --text-main: #4c0519;
          --text-muted: #831843;
          --text-accent: #db2777;
          --text-accent-glow: rgba(219, 39, 119, 0.4);
          --gradient-start: #db2777;
          --gradient-end: #9d174d;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        /* ── GESTION DYNAMIQUE DES FONDS D'ÉCRAN ── */
        .bg-image { opacity: 0; transition: opacity 1s ease-in-out; }
        .theme-summer .bg-summer { opacity: 1; }
        .theme-autumn .bg-autumn { opacity: 1; }
        .theme-winter .bg-winter { opacity: 1; }
        .theme-spring .bg-spring { opacity: 1; }
        html:not([class*="theme-"]) .bg-summer { opacity: 1; }

        /* ── GESTION DYNAMIQUE DES ICÔNES DE SAISON ── */
        .icon-summer, .icon-autumn, .icon-winter, .icon-spring { display: none; }
        .theme-summer .icon-summer { display: inline-block; }
        .theme-autumn .icon-autumn { display: inline-block; }
        .theme-winter .icon-winter { display: inline-block; }
        .theme-spring .icon-spring { display: inline-block; }
        html:not([class*="theme-"]) .icon-summer { display: inline-block; }

        /* ── ÉMOJI PONCTUATION ── */
        .title-emoji {
          display: inline-block;
          font-size: 0.35em;
          vertical-align: super;
          margin-left: 0.1em;
          opacity: 0.9;
          transform: translateY(-0.15em);
          filter: drop-shadow(0 0 12px var(--text-accent));
          transition: filter 1s ease;
        }

        /* ── ANIMATIONS ── */
        .fade-up { opacity: 0; transform: translateY(24px); animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .d5 { animation-delay: 0.7s; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

        /* ── GLASSMORPHISM ── */
        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 1s ease, border-color 1s ease;
        }
        .glass-panel:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .icon-badge {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        /* ── BOUTONS DE COPIE ── */
        .copy-btn {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .copy-btn:hover {
          transform: scale(1.08);
          background: rgba(255, 255, 255, 1);
          border-color: var(--text-accent);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .text-glow-light { text-shadow: 0 0 20px var(--text-accent-glow); }
        .cta-link { transition: all 0.3s ease; color: var(--text-main); letter-spacing: 0.18em; }
        .cta-link:hover { color: var(--text-accent); letter-spacing: 0.22em; }
        
        .cinzel { font-family: 'Cinzel', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ================= SECTION 1 : HEADER ================= */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <div className="fade-up d1 inline-flex glass-panel items-center gap-3 px-5 py-2 rounded-full mb-4">
            <p
              className="tracking-[0.3em] uppercase text-xs font-bold transition-colors duration-500"
              style={{
                color: "var(--text-accent)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              Communication
            </p>
          </div>

          <div className="fade-up d2">
            <h1
              className="text-5xl md:text-7xl font-black cinzel leading-tight tracking-tight transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              <span className="text-glow-light">Me</span> <br />
              <span
                className="transition-all duration-1000"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Contacter
              </span>
            </h1>
          </div>

          <div className="fade-up d3 glass-panel rounded-3xl p-8 sm:p-12 text-center mt-6 w-full">
            <p
              className="text-lg md:text-xl leading-relaxed dm-sans font-medium max-w-3xl mx-auto transition-colors duration-500"
              style={{ color: "var(--text-muted)" }}
            >
              Actuellement à la recherche d'un stage en développement logiciel
              de{" "}
              <strong
                className="font-bold transition-colors duration-500"
                style={{ color: "var(--text-main)" }}
              >
                14 semaines de Mars à Juin 2027
              </strong>
              , je suis ouvert à toute proposition ou échange sur mes projets.
              N'hésitez pas à me solliciter via mes réseaux professionnels ou
              par courriel.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SÉPARATEUR ================= */}
      <div className="relative flex justify-center items-center py-8 max-w-4xl mx-auto px-6 w-full z-10 fade-up d3">
        <div
          className="transition-colors duration-500"
          style={{
            height: "1px",
            flex: 1,
            background:
              "linear-gradient(90deg, transparent, var(--text-accent), transparent)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ================= SECTION 2 : CONTACT & RÉFÉRENT ================= */}
      <section className="py-8 px-6 sm:px-12 relative z-10 fade-up d4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Colonne 1 : Mes Coordonnées ── */}
          <div className="space-y-8">
            <div className="text-center lg:text-left glass-panel p-6 rounded-[2rem]">
              <h2
                className="text-3xl font-black tracking-tight cinzel transition-colors duration-500"
                style={{ color: "var(--text-main)" }}
              >
                Mes coordonnées
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="glass-panel rounded-[2rem] p-6 flex items-center justify-between gap-4">
                <a
                  href="mailto:mathys.vanheulle@gmail.com"
                  className="flex items-center gap-5 flex-1 overflow-hidden group"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0 group-hover:-translate-y-1 transition-transform">
                    📧
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className="uppercase text-[10px] tracking-[0.25em] mb-1 font-bold cinzel transition-colors duration-500"
                      style={{ color: "var(--text-accent)" }}
                    >
                      Email
                    </p>
                    <p
                      className="font-bold truncate text-sm sm:text-lg dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      mathys.vanheulle@gmail.com
                    </p>
                  </div>
                </a>
                <button
                  onClick={() =>
                    handleCopy("mathys.vanheulle@gmail.com", "email")
                  }
                  className="copy-btn w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  title="Copier l'adresse"
                >
                  {copiedItem === "email" ? "✅" : "📋"}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="glass-panel rounded-[2rem] p-6 flex items-center justify-between gap-4">
                <a
                  href="https://linkedin.com/in/mathys-vanheulle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 flex-1 overflow-hidden group"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0 group-hover:-translate-y-1 transition-transform">
                    🔗
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className="uppercase text-[10px] tracking-[0.25em] mb-1 font-bold cinzel transition-colors duration-500"
                      style={{ color: "var(--text-accent)" }}
                    >
                      LinkedIn
                    </p>
                    <p
                      className="font-bold truncate text-sm sm:text-lg dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      linkedin.com/in/mathys-vanheulle
                    </p>
                  </div>
                </a>
                <button
                  onClick={() =>
                    handleCopy(
                      "https://linkedin.com/in/mathys-vanheulle",
                      "linkedin",
                    )
                  }
                  className="copy-btn w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  title="Copier le lien"
                >
                  {copiedItem === "linkedin" ? "✅" : "📋"}
                </button>
              </div>

              {/* GitHub */}
              <div className="glass-panel rounded-[2rem] p-6 flex items-center justify-between gap-4">
                <a
                  href="https://github.com/Mathys-V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 flex-1 overflow-hidden group"
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0 group-hover:-translate-y-1 transition-transform">
                    💻
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className="uppercase text-[10px] tracking-[0.25em] mb-1 font-bold cinzel transition-colors duration-500"
                      style={{ color: "var(--text-accent)" }}
                    >
                      GitHub
                    </p>
                    <p
                      className="font-bold truncate text-sm sm:text-lg dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      github.com/Mathys-V
                    </p>
                  </div>
                </a>
                <button
                  onClick={() =>
                    handleCopy("https://github.com/Mathys-V", "github")
                  }
                  className="copy-btn w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  title="Copier le lien"
                >
                  {copiedItem === "github" ? "✅" : "📋"}
                </button>
              </div>
            </div>
          </div>

          {/* ── Colonne 2 : Référent ── */}
          <div className="space-y-8 flex flex-col">
            <div className="text-center lg:text-left glass-panel p-6 rounded-[2rem]">
              <h2
                className="text-3xl font-black tracking-tight cinzel transition-colors duration-500"
                style={{ color: "var(--text-main)" }}
              >
                Référent
              </h2>
            </div>

            <div className="glass-panel rounded-[2.5rem] p-8 sm:p-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3
                    className="text-2xl font-black leading-tight cinzel transition-colors duration-500"
                    style={{ color: "var(--text-main)" }}
                  >
                    M. François-Yves DUPRADEAU
                  </h3>
                  <p
                    className="mt-3 text-[15px] italic font-medium dm-sans transition-colors duration-500"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Enseignant-chercheur en chimie organique et modélisation
                    moléculaire au laboratoire AGIR de l'UPJV.
                  </p>
                </div>
                <p
                  className="text-[15px] leading-relaxed font-medium dm-sans transition-colors duration-500"
                  style={{ color: "var(--text-muted)" }}
                >
                  Monsieur F.-Y. Dupradeau a supervisé mon stage au sein du
                  laboratoire <strong>AGIR de l'UPJV</strong>. Nous travaillons
                  actuellement à 3 avec E. Ferreira-Baudin sur la version 3.0 de
                  PyRED{" "}
                  <a
                    href="https://upjv.q4md-forcefieldtools.org/REDServer-Development/overview.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold"
                    style={{ color: "var(--text-accent)" }}
                  >
                    (Lien vers PyRED)
                  </a>
                  .
                </p>
              </div>

              {/* Bouton de contact du référent */}
              <div
                className="mt-8 pt-8 flex items-center justify-between gap-4 border-t"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div className="overflow-hidden">
                  <p
                    className="uppercase text-[10px] tracking-[0.25em] mb-2 font-bold cinzel transition-colors duration-500"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Contact professionnel
                  </p>
                  <a
                    href="mailto:fyd@u-picardie.fr"
                    className="text-lg font-bold dm-sans transition-colors underline underline-offset-4 decoration-transparent hover:decoration-current block truncate"
                    style={{ color: "var(--text-main)" }}
                  >
                    fyd@u-picardie.fr
                  </a>
                </div>
                <button
                  onClick={() => handleCopy("fyd@u-picardie.fr", "referent")}
                  className="copy-btn w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  title="Copier l'adresse"
                >
                  {copiedItem === "referent" ? "✅" : "📋"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-16 text-center relative z-10">
        <div className="fade-up d5 glass-panel max-w-2xl mx-auto py-10 px-6 rounded-3xl relative">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 font-bold transition-colors duration-500"
            style={{
              color: "var(--text-accent)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            Merci de votre visite
          </p>
          <Link
            href="/"
            className="cta-link inline-flex items-center gap-4 font-bold"
            style={{ fontFamily: "'Cinzel', serif", fontSize: "14px" }}
          >
            <span
              className="transition-colors duration-500"
              style={{
                display: "inline-block",
                width: "24px",
                height: "2px",
                background: "var(--text-accent)",
                borderRadius: "2px",
              }}
            />
            Retourner à l'accueil
            <span
              className="transition-colors duration-500"
              style={{
                display: "inline-block",
                width: "24px",
                height: "2px",
                background: "var(--text-accent)",
                borderRadius: "2px",
              }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
