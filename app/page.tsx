// ============================================================
// PAGE ACCUEIL — Thème Saisons Dynamiques (Layout Épuré & Épais)
// Chemin : app/page.tsx
// ============================================================

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col overflow-x-hidden min-h-screen relative transition-colors duration-1000"
      style={{
        backgroundColor: "var(--bg-fallback)",
        color: "var(--text-main)",
      }}
    >
      {/* ══════════════════════════════════════════════════
          IMAGES DE FOND MULTI-SAISONS (En 'fixed' pour le Footer)
      ══════════════════════════════════════════════════ */}
      <div
        className="fixed top-0 left-0 w-full h-[100dvh] z-0 pointer-events-none overflow-hidden"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        <Image
          src="/img/themes/summer-beach.webp"
          alt="Paysage d'été ensoleillé"
          fill
          priority
          sizes="100vw"
          className="object-cover bg-image bg-summer"
        />
        <Image
          src="/img/themes/autumn-forest.webp"
          alt="Paysage d'automne chaleureux"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-autumn"
        />
        <Image
          src="/img/themes/winter.webp"
          alt="Paysage d'hiver enneigé"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-winter"
        />
        <Image
          src="/img/themes/spring.webp"
          alt="Paysage de printemps fleuri"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-spring"
        />
        {/* Voile léger pour garantir l'unification de la luminosité */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* ══════════════════════════════════════════════════
          STYLES GLOBAUX & VARIABLES DE THÈMES (CSS PUR)
      ══════════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── CONFIGURATION DES COMPOSANTS PAR SAISON ── */
        :root, .theme-summer {
          --bg-fallback: #f0f9ff;
          --text-main: #0f172a;
          --text-muted: #1e293b;
          --text-quote: #334155;
          --text-accent: #0284c7;
          --text-accent-glow: rgba(255, 255, 255, 0.8);
          --gradient-start: #0284c7;
          --gradient-end: #0369a1;
          --pulse-color: #0ea5e9;
          --cta-start: #0ea5e9;
          --cta-end: #0284c7;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-autumn {
          --bg-fallback: #fff7ed;
          --text-main: #431407;
          --text-muted: #7c2d12;
          --text-quote: #9a3412;
          --text-accent: #c2410c;
          --text-accent-glow: rgba(255, 247, 237, 0.8);
          --gradient-start: #c2410c;
          --gradient-end: #7c2d12;
          --pulse-color: #ea580c;
          --cta-start: #f97316;
          --cta-end: #c2410c;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-winter {
          --bg-fallback: #f8fafc;
          --text-main: #0f172a;
          --text-muted: #1e3a8a;
          --text-quote: #334155;
          --text-accent: #1d4ed8;
          --text-accent-glow: rgba(255, 255, 255, 0.9);
          --gradient-start: #1e40af;
          --gradient-end: #1e3a8a;
          --pulse-color: #3b82f6;
          --cta-start: #3b82f6;
          --cta-end: #1d4ed8;
          --glass-bg: rgba(255, 255, 255, 0.85);
          --glass-border: rgba(255, 255, 255, 1);
        }

        .theme-spring {
          --bg-fallback: #fdf2f8;
          --text-main: #4c0519;
          --text-muted: #831843;
          --text-quote: #9d174d;
          --text-accent: #db2777;
          --text-accent-glow: rgba(253, 242, 248, 0.8);
          --gradient-start: #db2777;
          --gradient-end: #9d174d;
          --pulse-color: #ec4899;
          --cta-start: #f472b6;
          --cta-end: #db2777;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        /* ── GESTION DYNAMIQUE DES FONDS D'ÉCRAN ── */
        .bg-image {
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }
        
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

        /* Fallback de l'icône */
        html:not([class*="theme-"]) .icon-summer { display: inline-block; }

        /* ── ÉMOJI PONCTUATION (Élégant et Discret) ── */
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

        /* ── STRUCTURE ET ANIMATIONS ── */
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Verre Épais pour la lisibilité (comme demandé sur À propos) */
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

        .ring-rotate {
          animation: ringRotate 20s linear infinite;
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.75; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .cta-glow {
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.2);
          transition: box-shadow 0.3s ease;
        }
        .cta-btn {
          transition: transform 0.3s ease, letter-spacing 0.3s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          letter-spacing: 0.25em;
        }

        .text-glow-light {
          text-shadow: 0 0 20px var(--text-accent-glow), 0 0 40px var(--text-accent-glow);
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          SECTION HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-24 z-10">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge de Disponibilité */}
          <div className="fade-up delay-100 glass-panel inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="pulse-ring absolute inline-flex h-full w-full rounded-full"
                style={{ backgroundColor: "var(--pulse-color)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ backgroundColor: "var(--pulse-color)" }}
              />
            </span>

            <span
              className="font-bold transition-colors duration-500"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
              }}
            >
              DÉVELOPPEUR FULL STACK
            </span>
          </div>

          {/* Hero Principal — TEXTE FLOTTANT SANS BLOC DE TITRE */}
          <div className="text-center max-w-4xl w-full flex flex-col items-center">
            {/* Titre (Flotte librement sur le décor) */}
            <div className="fade-up delay-200">
              <p
                className="mb-4 tracking-[0.3em] uppercase text-sm font-bold text-glow-light transition-colors duration-500"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "var(--text-accent)",
                }}
              >
                Portfolio
              </p>

              <h1
                className="text-6xl sm:text-7xl md:text-8xl font-black leading-[1.05] tracking-tight transition-colors duration-500"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <span className="text-glow-light">Mathys</span>
                <br />
                <span
                  className="transition-all duration-1000"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                  }}
                >
                  Vanheulle
                </span>
              </h1>
            </div>

            {/* Objectif de Stage (Boîte épaisse pour lisibilité) */}
            <div className="fade-up delay-300 mt-10 glass-panel px-8 py-5 rounded-[1.5rem] max-w-lg text-center">
              <p
                className="text-lg md:text-xl leading-relaxed font-medium transition-colors duration-500"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                À la recherche d'un stage de{" "}
                <span
                  className="font-bold"
                  style={{ color: "var(--text-accent)" }}
                >
                  14 semaines
                </span>
                <br />
                <span className="font-bold">de Mars à Juin 2027</span> en
                développement logiciel.
              </p>
            </div>

            {/* CTA (Bouton plein) */}
            <div className="fade-up delay-400 mt-10">
              <Link
                href="/a-propos"
                className="cta-btn cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold tracking-widest uppercase text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--cta-start) 0%, var(--cta-end) 100%)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "12px",
                  letterSpacing: "0.25em",
                  textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                <span>Découvrir mon profil</span>
              </Link>
            </div>

            {/* Photo de profil */}
            {/* Conteneur pour l'apparition sur la page (fade-up + délai) */}
            <div className="fade-up delay-500 mt-12">
              {/* Conteneur pour la photo et le hover (réaction instantanée) */}
              <div
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[3px] border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
                style={{
                  transform: "translateZ(0)",
                }}
              >
                <Image
                  src="/img/accueil/PhotoCV.jpg"
                  alt="Photo de profil Mathys Vanheulle"
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="w-full max-w-5xl h-px bg-white/40 my-20" />

          {/* Citation */}
          <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-12 relative z-0">
            {/* Bloc Citation (Verre épais) */}
            <div className="flex-1 max-w-2xl relative fade-up delay-600">
              <figure className="glass-panel p-8 rounded-3xl transition-all duration-1000">
                <blockquote
                  className="text-lg md:text-xl italic leading-relaxed mb-3 transition-colors duration-500"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                  }}
                >
                  "The best way to predict the future is to invent it."
                </blockquote>

                <p
                  className="text-sm not-italic mb-3 font-bold transition-colors duration-500"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "var(--text-accent)",
                  }}
                >
                  (La meilleure façon de prédire l'avenir, c'est de l'inventer.)
                </p>

                <figcaption
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    fontWeight: 800,
                  }}
                >
                  — ALAN KAY ·{" "}
                  <span
                    className="text-[#475569]"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: "normal",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    Pionnier de la programmation orientée objet
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
