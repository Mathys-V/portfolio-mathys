// ============================================================
// PAGE ACCUEIL — Thème Astronomie
// Chemin : app/page.tsx
// ============================================================

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col overflow-hidden min-h-screen"
      style={{ background: "#020817", color: "#e2e8f0" }}
    >
      {/* ══════════════════════════════════════════════════
          STYLES GLOBAUX DE LA PAGE
          (Cinzel + DM Sans via Google Fonts + animations)
      ══════════════════════════════════════════════════ */}
      <style>{`
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Étoiles générées en CSS pur ── */
        /* Technique : box-shadow avec des centaines de points 1x1 */
        .stars-sm, .stars-md, .stars-lg {
          position: absolute;
          top: 0; left: 0;
          width: 1px; height: 1px;
          border-radius: 50%;
          background: transparent;
          pointer-events: none;
        }
        .stars-sm {
          box-shadow:
            120px 45px #fff, 340px 200px #fff, 580px 80px #fff,
            820px 310px #fff, 90px 420px #fff, 460px 350px #fff,
            700px 190px #fff, 250px 510px #fff, 950px 420px #fff,
            150px 150px #fff, 670px 490px #fff, 1100px 60px #fff,
            1300px 300px #fff, 1050px 510px #fff, 380px 580px #fff,
            800px 560px #fff, 30px 320px #fff, 1200px 200px #fff,
            520px 230px #fff, 900px 140px #fff, 1380px 450px #fff,
            60px 570px #fff, 440px 110px #fff, 760px 390px #fff,
            1150px 340px #fff, 280px 30px #fff, 630px 620px #fff,
            1000px 270px #fff, 190px 680px #fff, 860px 70px #fff,
            1250px 540px #fff, 480px 700px #fff, 720px 640px #fff,
            110px 750px #fff, 1400px 150px #fff, 330px 760px #fff,
            970px 680px #fff, 1080px 730px #fff, 200px 810px #fff,
            550px 800px #fff, 1320px 700px #fff, 410px 870px #fff,
            850px 820px #fff, 1190px 860px #fff, 70px 890px #fff,
            650px 910px #fff, 1450px 830px #fff, 290px 950px #fff,
            1010px 920px #fff, 740px 880px #fff;
          animation: starDrift 120s linear infinite;
          opacity: 0.8;
        }
        .stars-md {
          box-shadow:
            200px 100px 1px #fff, 600px 250px 1px #fff, 400px 400px 1px #c9b882,
            900px 50px 1px #fff, 1100px 400px 1px #fff, 300px 600px 1px #c9b882,
            750px 700px 1px #fff, 1300px 250px 1px #fff, 50px 500px 1px #e2e8f0,
            1400px 600px 1px #fff, 500px 800px 1px #c9b882, 1050px 850px 1px #fff,
            170px 350px 1px #fff, 850px 450px 1px #e2e8f0, 1250px 750px 1px #fff;
          animation: starDrift 80s linear infinite;
          opacity: 0.6;
        }
        .stars-lg {
          box-shadow:
            400px 300px 2px #c9b882, 800px 150px 2px #e2e8f0,
            1200px 500px 2px #c9b882, 200px 700px 2px #e2e8f0,
            1000px 600px 2px #c9b882, 600px 900px 2px #e2e8f0,
            100px 200px 2px #c9b882, 1400px 350px 2px #e2e8f0;
          animation: starDrift 50s linear infinite;
          opacity: 0.7;
        }

        @keyframes starDrift {
          from { transform: translateY(0); }
          to   { transform: translateY(-100vh); }
        }

        /* ── Animations d'entrée de la page ── */
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.25s; }
        .delay-300 { animation-delay: 0.4s; }
        .delay-400 { animation-delay: 0.55s; }
        .delay-500 { animation-delay: 0.7s; }
        .delay-600 { animation-delay: 0.85s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Rotation lente de l'anneau de la photo ── */
        .ring-rotate {
          animation: ringRotate 20s linear infinite;
        }
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── Pulsation du badge disponibilité ── */
        .pulse-ring {
          animation: pulseRing 2s ease-out infinite;
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.75; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* ── Lueur pulsante du bouton CTA ── */
        .cta-glow {
          box-shadow: 0 0 20px rgba(201,184,130,0.4), 0 0 40px rgba(201,184,130,0.2);
          animation: ctaGlow 2.5s ease-in-out infinite;
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(201,184,130,0.4), 0 0 40px rgba(201,184,130,0.2); }
          50%      { box-shadow: 0 0 30px rgba(201,184,130,0.7), 0 0 60px rgba(201,184,130,0.4); }
        }

        /* ── Hover sur le CTA ── */
        .cta-btn {
          transition: transform 0.3s ease, letter-spacing 0.3s ease;
        }
        .cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          letter-spacing: 0.25em;
        }

        /* ── Scintillement de l'étoile du titre ── */
        .title-star {
          animation: titleStarPulse 4s ease-in-out infinite;
          display: inline-block;
        }
        @keyframes titleStarPulse {
          0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
          50%      { opacity: 1;   transform: scale(1.3) rotate(20deg); }
        }

        /* ── Ligne de séparation animée ── */
        .divider-line {
          background: linear-gradient(90deg, transparent, rgba(201,184,130,0.6), transparent);
          animation: dividerGlow 3s ease-in-out infinite;
        }
        @keyframes dividerGlow {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }

        /* ── Nébuleuse de fond ── */
        .nebula {
          animation: nebulaFloat 12s ease-in-out infinite;
        }
        @keyframes nebulaFloat {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33%      { transform: scale(1.05) translate(10px, -10px); }
          66%      { transform: scale(0.98) translate(-8px, 8px); }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          SECTION HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-24 overflow-hidden text-center">
        {/* ── Ciel étoilé en CSS pur ── */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars-sm" />
          <div className="stars-md" />
          <div className="stars-lg" />
        </div>

        {/* ── Nébuleuses colorées plus vives pour la visibilité ── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Nébuleuse Magenta / Violette (Gauche) */}
          <div
            className="nebula absolute"
            style={{
              top: "5%",
              left: "-10%",
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle, rgba(192, 38, 211, 0.25) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          {/* Nébuleuse Cyan / Bleue (Droite) */}
          <div
            className="nebula absolute"
            style={{
              bottom: "5%",
              right: "-10%",
              width: "700px",
              height: "700px",
              background:
                "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)",
              borderRadius: "50%",
              animationDelay: "4s",
            }}
          />
          {/* Lueur centrale dorée plus douce */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "800px",
              height: "400px",
              background:
                "radial-gradient(ellipse, rgba(201,184,130,0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* ── Contenu centré ── */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center gap-8 z-10">
          {/* 1. PHOTO DE PROFIL */}
          <div className="fade-up delay-100 relative w-44 h-44 md:w-56 md:h-56 flex-shrink-0 mb-2">
            {/* Anneau rotatif en gradient */}
            <div
              className="ring-rotate absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, #c9b882 25%, transparent 50%, #38bdf8 75%, transparent 100%)",
                padding: "2px",
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: "#020817" }}
              />
            </div>

            {/* Photo */}
            <div
              className="absolute inset-2 rounded-full overflow-hidden"
              style={{ border: "1px solid rgba(201,184,130,0.3)" }}
            >
              <Image
                src="/img/accueil/profile.jpg"
                alt="Mathys Vanheulle"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Étoile de position */}
            <div
              className="absolute bottom-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                background: "#c9b882",
                boxShadow: "0 0 8px rgba(201,184,130,0.8)",
              }}
            >
              <span style={{ fontSize: "10px", color: "#020817" }}>✦</span>
            </div>
          </div>

          {/* 2. BADGE DISPONIBILITÉ */}
          <div
            className="fade-up delay-200 inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(201,184,130,0.1)",
              border: "1px solid rgba(201,184,130,0.5)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="pulse-ring absolute inline-flex h-full w-full rounded-full"
                style={{ background: "#c9b882" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "#c9b882" }}
              />
            </span>
            <span
              className="font-bold"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "13px",
                letterSpacing: "0.15em",
                color: "#ffffff",
                textShadow: "0 0 10px rgba(201,184,130,0.5)",
              }}
            >
              DÉVELOPPEUR FULL STACK · ORIENTÉ BACK-END
            </span>
          </div>

          {/* 3. TITRE PRINCIPAL */}
          <div className="fade-up delay-300">
            <p
              className="mb-3 tracking-[0.3em] uppercase text-xs font-bold"
              style={{
                color: "rgba(201,184,130,0.9)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              ✦ &nbsp; Portfolio &nbsp; ✦
            </p>

            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-black leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <span style={{ color: "#ffffff" }}>Inventer</span>
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #c9b882 0%, #ffffff 50%, #c9b882 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                l'Avenir
              </span>
              <span
                className="title-star"
                style={{
                  color: "#c9b882",
                  fontSize: "0.5em",
                  marginLeft: "0.15em",
                  WebkitTextFillColor: "#c9b882",
                }}
              >
                ✦
              </span>
            </h1>
          </div>

          {/* 4. OBJECTIF DE STAGE */}
          <div
            className="fade-up delay-400 inline-block px-7 py-5 rounded-2xl max-w-lg"
            style={{
              background: "rgba(226,232,240,0.1)",
              border: "1px solid rgba(201,184,130,0.4)",
              backdropFilter: "blur(12px)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,1)",
                fontSize: "16px",
                lineHeight: "1.6",
                fontWeight: 500,
              }}
            >
              À la recherche d'un stage de{" "}
              <span style={{ color: "#c9b882", fontWeight: 700 }}>
                14 semaines
              </span>
              <br />
              <span style={{ color: "#ffffff", fontWeight: 700 }}>
                de Mars à Juin 2027
              </span>{" "}
              en développement logiciel.
            </p>
          </div>

          {/* 5. BOUTON CTA */}
          <div className="fade-up delay-500 pt-2 pb-6">
            <Link
              href="/a-propos"
              className="cta-btn cta-glow inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #c9b882 0%, #a89060 100%)",
                color: "#020817",
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "0.25em",
              }}
            >
              <span>✦</span>
              <span>Découvrir mon profil</span>
              <span>✦</span>
            </Link>
          </div>

          {/* 6. CITATION ASTRONOMIQUE */}
          <div className="fade-up delay-600 w-full max-w-2xl mx-auto pt-8">
            <div className="divider-line h-px w-full mb-8" />

            <figure>
              <blockquote
                className="text-lg md:text-xl italic leading-relaxed mb-4"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                }}
              >
                "The best way to predict the future is to invent it."
              </blockquote>
              <p
                className="text-sm not-italic mb-3"
                style={{
                  color: "rgba(201,184,130,1)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                (La meilleure façon de prédire l'avenir, c'est de l'inventer.)
              </p>
              <figcaption
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                — ALAN KAY &nbsp;·&nbsp;{" "}
                <span
                  style={{
                    color: "rgba(201,184,130,0.9)",
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "normal",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Pionnier de la programmation orientée objet
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
