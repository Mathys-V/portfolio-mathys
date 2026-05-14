"use client";

import { useState } from "react";
import Link from "next/link";

// ============================================================
// PAGE CONTACT — Thème Astronomie (Contraste Amélioré & UI Harmonisée)
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
      className="flex flex-col overflow-hidden min-h-screen relative"
      style={{
        background: "#020817",
        color: "#e2e8f0",
      }}
    >
      {/* ══════════════════════════════════════════════════
          STYLES GLOBAUX
      ══════════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Étoiles générées en CSS pur ── */
        .stars-sm, .stars-md, .stars-lg {
          position: absolute;
          top: 0; left: 0;
          width: 1px; height: 1px;
          border-radius: 50%;
          background: transparent;
          pointer-events: none;
        }
        .stars-sm {
          box-shadow: 120px 45px #fff, 340px 200px #fff, 580px 80px #fff, 820px 310px #fff, 950px 420px #fff, 150px 150px #fff, 1100px 60px #fff, 1300px 300px #fff, 30px 320px #fff, 900px 140px #fff, 60px 570px #fff, 760px 390px #fff, 280px 30px #fff, 1000px 270px #fff, 860px 70px #fff, 480px 700px #fff, 110px 750px #fff, 330px 760px #fff, 1080px 730px #fff, 550px 800px #fff, 410px 870px #fff, 1190px 860px #fff, 650px 910px #fff, 290px 950px #fff, 740px 880px #fff;
          animation: starDrift 150s linear infinite;
        }
        @keyframes starDrift {
          from { transform: translateY(0); }
          to   { transform: translateY(-100vh); }
        }

        /* ── Animations d'entrée (Fade Up) ── */
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUpAnim 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .d5 { animation-delay: 0.7s; }

        @keyframes fadeUpAnim {
          to { opacity: 1; transform: translateY(0); }
        }

        .cinzel { font-family: 'Cinzel', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }

        /* ── Cartes & Éléments UI ── */
        .cosmic-card {
          background: rgba(226, 232, 240, 0.05); /* Opacité augmentée */
          border: 1px solid rgba(201, 184, 130, 0.25); /* Bordure plus visible */
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cosmic-card:hover {
          background: rgba(226, 232, 240, 0.09);
          border-color: rgba(201, 184, 130, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,184,130,0.1);
        }

        .icon-badge {
          background: rgba(201,184,130,0.15);
          border: 1px solid rgba(201,184,130,0.3);
        }

        .nebula-purple {
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%);
        }
        .nebula-gold {
          background: radial-gradient(circle, rgba(201, 184, 130, 0.1) 0%, transparent 70%);
        }

        /* ── Séparateur doré ── */
        .gold-sep {
          background: linear-gradient(90deg, transparent, rgba(201,184,130,0.7), transparent); /* Opacité augmentée */
          height: 1px;
          flex: 1;
        }

        /* ── Boutons Copy ── */
        .copy-btn {
          transition: all 0.3s ease;
          border: 1px solid rgba(201,184,130,0.25); /* Contraste augmenté */
        }
        .copy-btn:hover {
          transform: scale(1.08);
          background: rgba(201,184,130,0.15);
          border-color: rgba(201,184,130,0.5);
        }

        /* ── CTA final ── */
        .cta-link {
          transition: all 0.3s ease;
          color: rgba(226,232,240,0.85); /* Opacité augmentée */
          letter-spacing: 0.18em;
        }
        .cta-link:hover {
          color: #c9b882;
          text-shadow: 0 0 16px rgba(201,184,130,0.5);
          letter-spacing: 0.24em;
        }
      `}</style>

      {/* ── CIEL ÉTOILÉ DE FOND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="stars-sm" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 nebula-purple blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 nebula-gold blur-3xl" />
      </div>

      {/* ================= SECTION 1 : HEADER ================= */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 z-10">
        <div className="relative max-w-4xl mx-auto text-center space-y-10">
          <div className="fade-up d1 space-y-6">
            <p
              className="cinzel tracking-[0.4em] text-xs uppercase font-bold"
              style={{
                color: "rgba(201,184,130,0.85)",
              }} /* Contraste augmenté */
            >
              ✦ &nbsp; Communication &nbsp; ✦
            </p>
            {/* Taille de titre harmonisée avec les autres pages */}
            <h1 className="text-5xl md:text-7xl font-black cinzel leading-tight tracking-tight">
              <span style={{ color: "#ffffff" }}>Me</span> <br />
              <span
                className="relative inline-block"
                style={{
                  /* CORRECTION REACT APPLIQUÉE ICI */
                  backgroundImage:
                    "linear-gradient(135deg, #c9b882 0%, #ffffff 50%, #c9b882 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Contacter
              </span>
              {/* Ajout de l'étoile dans le titre */}
              <span
                style={{
                  color: "#c9b882",
                  fontSize: "0.45em",
                  marginLeft: "0.12em",
                }}
              >
                ✦
              </span>
            </h1>
          </div>

          {/* Intro encapsulée dans une cosmic-card pour la cohérence */}
          <div className="fade-up d2 cosmic-card p-8 sm:p-14 rounded-[2.5rem] flex flex-col items-center text-center">
            <p
              className="text-lg md:text-xl leading-relaxed dm-sans font-normal max-w-3xl"
              style={{
                color: "rgba(226,232,240,0.95)",
              }} /* Contraste augmenté */
            >
              Actuellement à la recherche d'un stage en développement logiciel
              de{" "}
              <strong className="text-[#c9b882] font-semibold">
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
        <div className="gold-sep" />
        <span
          className="mx-6 text-xl"
          style={{
            color: "#c9b882",
            textShadow: "0 0 12px rgba(201,184,130,0.6)",
          }}
        >
          ✦
        </span>
        <div className="gold-sep" />
      </div>

      {/* ================= SECTION 2 : CONTACT & RÉFÉRENT ================= */}
      <section className="py-8 px-6 sm:px-12 relative z-10 fade-up d4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Colonne 1 : Mes Coordonnées ── */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-[#ffffff] tracking-tight cinzel text-center lg:text-left mb-8">
              Mes coordonnées
            </h2>
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="cosmic-card rounded-[2rem] p-5 flex items-center justify-between gap-4">
                <a
                  href="mailto:mathys.vanheulle@gmail.com"
                  className="flex items-center gap-5 flex-1 overflow-hidden group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl icon-badge flex-shrink-0 group-hover:scale-110 transition-transform">
                    📧
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className="uppercase text-[10px] tracking-[0.25em] mb-1 font-bold cinzel"
                      style={{ color: "rgba(201,184,130,0.85)" }}
                    >
                      Email
                    </p>
                    <p className="font-bold truncate text-sm sm:text-base text-white dm-sans">
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
              <div className="cosmic-card rounded-[2rem] p-5 flex items-center justify-between gap-4">
                <a
                  href="https://linkedin.com/in/mathys-vanheulle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 flex-1 overflow-hidden group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl icon-badge flex-shrink-0 group-hover:scale-110 transition-transform">
                    🔗
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className="uppercase text-[10px] tracking-[0.25em] mb-1 font-bold cinzel"
                      style={{ color: "rgba(201,184,130,0.85)" }}
                    >
                      LinkedIn
                    </p>
                    <p className="font-bold truncate text-sm sm:text-base text-white dm-sans">
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
              <div className="cosmic-card rounded-[2rem] p-5 flex items-center justify-between gap-4">
                <a
                  href="https://github.com/Mathys-V"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 flex-1 overflow-hidden group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl icon-badge flex-shrink-0 group-hover:scale-110 transition-transform">
                    💻
                  </div>
                  <div className="overflow-hidden">
                    <p
                      className="uppercase text-[10px] tracking-[0.25em] mb-1 font-bold cinzel"
                      style={{ color: "rgba(201,184,130,0.85)" }}
                    >
                      GitHub
                    </p>
                    <p className="font-bold truncate text-sm sm:text-base text-white dm-sans">
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
          <div className="space-y-6 flex flex-col">
            <h2 className="text-3xl font-black text-[#ffffff] tracking-tight cinzel text-center lg:text-left mb-8">
              Référent
            </h2>
            <div className="cosmic-card rounded-[2.5rem] p-8 sm:p-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold leading-tight cinzel text-[#ffffff]">
                    M. François-Yves DUPRADEAU
                  </h3>
                  <p className="mt-2 text-[15px] italic text-[#c9b882] dm-sans font-medium">
                    Enseignant-chercheur en chimie organique-modélisation
                    moléculaire au laboratoire AGIR de l'UPJV.
                  </p>
                </div>
                <p
                  className="text-[15px] leading-relaxed dm-sans font-normal"
                  style={{ color: "rgba(226,232,240,0.85)" }}
                >
                  Monsieur Dupradeau a supervisé mon stage de recherche et
                  développement au sein de l'équipe AGIR de l'UPJV. Son
                  expertise a été déterminante dans ma montée en compétences sur
                  le projet PyRED.
                </p>
              </div>

              {/* Bouton de contact du référent */}
              <div className="mt-8 pt-8 flex items-center justify-between gap-4 border-t border-[rgba(201,184,130,0.25)]">
                <div className="overflow-hidden">
                  <p
                    className="uppercase text-[10px] tracking-[0.25em] mb-2 font-bold cinzel"
                    style={{ color: "rgba(201,184,130,0.85)" }}
                  >
                    Contact professionnel
                  </p>
                  <a
                    href="mailto:fyd@u-picardie.fr"
                    className="text-lg font-bold text-white dm-sans hover:text-[#c9b882] transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-[#c9b882]/60 truncate block"
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
      <section
        className="py-20 text-center relative z-10 fade-up d5"
        style={{ borderTop: "1px solid rgba(201,184,130,0.2)" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,184,130,0.6), transparent)",
            boxShadow: "0 0 30px 8px rgba(201,184,130,0.1)",
            pointerEvents: "none",
          }}
        />
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6 font-bold"
          style={{
            color: "rgba(201,184,130,0.8)",
            fontFamily: "'Cinzel', serif",
          }}
        >
          ✦ &nbsp; Merci de votre visite &nbsp; ✦
        </p>
        <Link
          href="/"
          className="cta-link inline-flex items-center gap-4 font-bold"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "14px" }}
        >
          <span
            style={{
              display: "inline-block",
              width: "32px",
              height: "1px",
              background: "rgba(201,184,130,0.6)",
            }}
          />
          Retourner à l'accueil
          <span
            style={{
              display: "inline-block",
              width: "32px",
              height: "1px",
              background: "rgba(201,184,130,0.6)",
            }}
          />
        </Link>
      </section>
    </div>
  );
}
