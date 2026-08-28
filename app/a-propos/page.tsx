// ============================================================
// PAGE À PROPOS — Thème Saisons (Glassmorphism Hautement Lisible)
// ============================================================

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div
      className="flex flex-col overflow-x-hidden min-h-screen relative transition-colors duration-1000"
      style={{
        backgroundColor: "var(--bg-fallback)",
        color: "var(--text-main)",
      }}
    >
      {/* ══════════════════════════════════════════════════
          IMAGES DE FOND MULTI-SAISONS (Fondu croisé en CSS)
      ══════════════════════════════════════════════════ */}
      <div className="fixed inset-0 z-0 pointer-events-none">
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
          STYLES GLOBAUX & VARIABLES DE THÈMES
      ══════════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── CONFIGURATION DES COMPOSANTS PAR SAISON ── */
        :root, .theme-summer {
          --bg-fallback: #f0f9ff;
          --text-main: #0f172a;
          --text-muted: #000000;
          --text-accent: #0284c7;
          --gradient-start: #0284c7;
          --gradient-end: #0369a1;
          /* Verre épaissi (80% d'opacité) */
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-autumn {
          --bg-fallback: #fff7ed;
          --text-main: #431407;
          --text-muted: #000000;
          --text-accent: #c2410c;
          --gradient-start: #c2410c;
          --gradient-end: #7c2d12;
          /* Verre épaissi (80% d'opacité) */
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-winter {
          --bg-fallback: #f8fafc;
          --text-main: #0f172a;
          --text-muted: #000000;
          --text-accent: #1d4ed8;
          --gradient-start: #1e40af;
          --gradient-end: #1e3a8a;
          /* Hiver un poil plus opaque car fond neigeux très clair (85%) */
          --glass-bg: rgba(255, 255, 255, 0.85);
          --glass-border: rgba(255, 255, 255, 1);
        }

        .theme-spring {
          --bg-fallback: #fdf2f8;
          --text-main: #4c0519;
          --text-muted: #000000;
          --text-accent: #db2777;
          --gradient-start: #db2777;
          --gradient-end: #9d174d;
          /* Verre épaissi (80% d'opacité) */
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

        /* ── ANIMATIONS ET GLASSMORPHISM ── */
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.2s; }
        .d3 { animation-delay: 0.3s; }
        .d4 { animation-delay: 0.4s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          /* Blur augmenté pour lisser complètement l'arrière-plan */
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 1s ease, border-color 1s ease;
        }
        .glass-panel:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .glass-inner {
          /* Quasi-opaque pour les encarts secondaires */
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.8);
        }

        .icon-badge {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        /* ── TIMELINE ── */
        .tl-line {
          position: absolute;
          left: 24px;
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, var(--text-accent), transparent);
          opacity: 0.4;
          z-index: 0;
          transition: background 1s ease;
        }
        @media (min-width: 768px) {
          .tl-line { left: 50%; transform: translateX(-50%); }
        }

        .tl-node {
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid var(--text-accent);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: border-color 1s ease;
        }

        .sec-line {
          background: linear-gradient(90deg, var(--text-accent), transparent);
          height: 1px;
          flex: 1;
          opacity: 0.3;
          transition: background 1s ease;
        }

        .cta-link {
          transition: all 0.3s ease;
          color: var(--text-main);
          letter-spacing: 0.18em;
        }
        .cta-link:hover {
          color: var(--text-accent);
          letter-spacing: 0.22em;
        }
      `}</style>

      {/* ══════════════════════════════════════════
          SECTION 1 — INTRODUCTION
      ══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="fade-up d1 inline-flex glass-panel items-center gap-3 px-5 py-2 rounded-full mb-4">
            <p
              className="tracking-[0.3em] uppercase text-xs font-bold transition-colors duration-500"
              style={{
                color: "var(--text-accent)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              Introduction
            </p>
          </div>

          <div className="fade-up d2">
            <h1
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight transition-colors duration-500"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              À propos
              <br />
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
                de moi
              </span>
            </h1>
          </div>

          <div className="fade-up d3 glass-panel rounded-3xl p-8 sm:p-12 text-center mt-6">
            <p
              className="text-lg md:text-xl leading-relaxed transition-colors duration-500 font-medium"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Je suis actuellement en 3ème année de BUT Informatique à l'IUT
              d'Amiens. Ce qui m'anime dans le développement, c'est avant tout
              la solution que le code permet d'apporter — que ce soit accélérer
              le quotidien d'une entreprise, simplifier la collaboration d'une
              équipe, ou donner vie à un projet ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — ADN PROFESSIONNEL
      ══════════════════════════════════════════ */}
      <section className="py-16 px-6 sm:px-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Titre ADN */}
          <div className="text-center max-w-2xl mx-auto fade-up d1 glass-panel p-10 rounded-3xl mb-12">
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight mb-5 transition-colors duration-500"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "var(--text-main)",
              }}
            >
              Mon ADN{" "}
              <span
                className="transition-all duration-1000"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Professionnel
              </span>
            </h2>
            <p
              className="text-lg font-medium transition-colors duration-500"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Ce qui me définit techniquement et humainement, illustré par mes
              expériences.
            </p>
          </div>

          {/* ── Valeurs Techniques ── */}
          <div className="space-y-10 fade-up d2">
            <div className="flex items-center gap-4 glass-panel p-4 rounded-full max-w-md">
              <div className="icon-badge w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                💼
              </div>
              <h3
                className="font-bold uppercase transition-colors duration-500 flex-1"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "var(--text-main)",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                }}
              >
                MES VALEURS TECHNIQUES
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Rigueur */}
              <div className="glass-panel rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🔍
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "16px",
                    }}
                  >
                    Analyse & Rigueur
                  </h4>
                </div>
                <p
                  className="leading-relaxed mb-8 flex-1 font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Avant de modifier une ligne de code, je veux comprendre
                  pourquoi elle a été écrite ainsi. C'est un réflexe que j'ai dû
                  développer rapidement : arriver sur un logiciel scientifique
                  que je ne maîtrisais pas du tout m'a appris que plonger dans
                  un gros projet sans prendre le temps de lire l'existant, c’est
                  souvent le meilleur moyen de devoir tout refaire.
                </p>
                <div className="glass-inner p-6 rounded-2xl">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    <span className="text-sm">🎯</span> Exemple Concret
                  </p>
                  <p
                    className="text-sm leading-relaxed font-medium transition-colors duration-500"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Au Laboratoire AGIR, le logiciel PyRED représente des années
                    de développement scientifique cumulées. Plutôt que
                    d'intervenir à l'aveugle, j'ai pris le temps de comprendre
                    son architecture et sa logique algorithmique avant d'y
                    intégrer la moindre fonctionnalité.
                  </p>
                </div>
              </div>

              {/* Communication */}
              <div className="glass-panel rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🤝
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "16px",
                    }}
                  >
                    Communication
                  </h4>
                </div>
                <p
                  className="leading-relaxed mb-8 flex-1 font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Un code parfait ne sert à rien s'il ne répond pas au bon
                  problème. Je préfère poser une question qui semble évidente
                  plutôt que de développer sur une hypothèse fausse. L'échange
                  est pour moi la meilleure façon d'éviter les malentendus.
                </p>
                <div className="glass-inner p-6 rounded-2xl">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2 transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    <span className="text-sm">🎯</span> Exemple Concret
                  </p>
                  <p
                    className="text-sm leading-relaxed font-medium transition-colors duration-500"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Lors de mon stage au Laboratoire AGIR, mon tuteur était un
                    chercheur, pas un développeur. Comprendre ses besoins
                    impliquait d'abord de comprendre les concepts scientifiques
                    qu'il manipulait, pour pouvoir ensuite les traduire
                    fidèlement en code.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Personnalité ── */}
          <div className="space-y-10 pt-4 fade-up d3">
            <div className="flex items-center gap-4 glass-panel p-4 rounded-full max-w-md">
              <div className="icon-badge w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                👤
              </div>
              <h3
                className="font-bold uppercase tracking-widest transition-colors duration-500 flex-1"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "var(--text-main)",
                  fontSize: "14px",
                }}
              >
                MA PERSONNALITÉ
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Piège de l'autonomie — pleine largeur */}
              <div className="glass-panel md:col-span-2 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h4
                    className="text-xl font-bold mb-4 flex items-center gap-3 uppercase tracking-widest transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "18px",
                    }}
                  >
                    <span className="text-2xl">💡</span> Apprendre à demander de
                    l'aide
                  </h4>
                  <p
                    className="leading-relaxed font-medium transition-colors duration-500"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Au début, je pensais qu'être bon, c'était trouver toutes les
                    solutions tout seul. Résultat : je m'enfermais parfois des
                    heures sur un bug plutôt que d'aller demander de l'aide, par
                    peur de déranger ou que ça passe pour un manque de niveau.
                  </p>
                </div>
                <div className="w-full md:w-1/2 glass-inner p-6 rounded-2xl">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2 transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                    }}
                  >
                    <span className="text-sm">📈</span> Ce que j'en retiens
                  </p>
                  <p
                    className="text-sm leading-relaxed font-medium transition-colors duration-500"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Un échange avec un collègue ou un tuteur débloque souvent
                    une situation en quelques minutes, là où j'aurais pu y
                    passer des heures seul. Je n'hésite plus à poser mes
                    questions rapidement, et j'y gagne clairement en efficacité.
                  </p>
                </div>
              </div>

              {/* Mes Valeurs */}
              <div className="glass-panel rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🧭
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "16px",
                    }}
                  >
                    Mes Valeurs
                  </h4>
                </div>
                <p
                  className="leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Mon approche du développement est pragmatique : résoudre des
                  problèmes réels avec des solutions durables. Mon expérience au
                  Laboratoire AGIR m'a prouvé l'importance de l'adaptation et de
                  l'autonomie. Aujourd'hui, je suis convaincu qu'un bon code
                  doit être à la fois performant et compréhensible. Je cherche
                  constamment cet équilibre pour garantir que mon travail puisse
                  être facilement repris et maintenu par d'autres développeurs.
                </p>
              </div>

              {/* Entre deux lignes de code */}
              <div className="glass-panel rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🎧
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "16px",
                    }}
                  >
                    Entre deux lignes de code
                  </h4>
                </div>
                <p
                  className="leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Mon temps libre est rythmé par la culture de l'imaginaire. Je
                  suis un grand lecteur de Mangas et de Light Novels, très
                  souvent accompagné de musique Rock ou J-Pop. Plonger dans ces
                  univers narratifs profonds m'offre une déconnexion totale, ce
                  qui me permet de revenir sur mes projets informatiques avec un
                  regard neuf et une créativité rechargée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SÉPARATEUR ================= */}
      <div className="relative flex justify-center items-center py-12 max-w-4xl mx-auto px-6 w-full z-10 fade-up d4">
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

      {/* ══════════════════════════════════════════
          SECTION 3 — PARCOURS (TIMELINE)
      ══════════════════════════════════════════ */}
      <section className="pb-24 px-6 sm:px-12 relative z-10 fade-up d4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 glass-panel p-10 rounded-3xl">
            <p
              className="tracking-[0.3em] uppercase text-xs mb-4 font-bold transition-colors duration-500"
              style={{
                color: "var(--text-accent)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              Évolution
            </p>
            <h2
              className="text-3xl font-black tracking-tight transition-colors duration-500"
              style={{
                fontFamily: "'Cinzel', serif",
                color: "var(--text-main)",
              }}
            >
              Mon Parcours
            </h2>
            <p
              className="mt-2 text-lg font-medium transition-colors duration-500"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Mon parcours à travers mes réalisations et apprentissages.
            </p>
          </div>

          <div className="relative space-y-12 py-4">
            {/* Ligne verticale */}
            <div className="tl-line" />
            {/* ── Projet MaPizzaBoutique ── */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 tl-node items-center justify-center text-xl">
                🍕
              </div>
              <div className="md:hidden absolute left-0 w-12 h-12 rounded-full z-10 tl-node flex items-center justify-center text-xl">
                🍕
              </div>
              <div className="w-full md:w-[45%] glass-panel ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "15px",
                    }}
                  >
                    MaPizzaBoutique : E-Commerce
                  </div>
                  <time
                    className="text-xs font-bold uppercase transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Mai 2026
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-bold transition-colors duration-500"
                  style={{
                    color: "var(--text-main)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Plateforme Web PHP MVC — IUT d'Amiens
                </div>
                <p
                  className="text-sm leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Développement d'un site e-commerce sécurisé avec architecture
                  MVC stricte, intégration de paiements (Up2Pay), API REST et
                  tests E2E (Testim).
                </p>
              </div>
            </div>

            {/* ── Stage Python ── */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 tl-node items-center justify-center text-xl">
                🧬
              </div>
              <div className="md:hidden absolute left-0 w-12 h-12 rounded-full z-10 tl-node flex items-center justify-center text-xl">
                🧬
              </div>
              <div className="w-full md:w-[45%] glass-panel ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "15px",
                    }}
                  >
                    Stage Développeur Python
                  </div>
                  <time
                    className="text-xs font-bold uppercase transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Janv-Mars 2026
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-bold transition-colors duration-500"
                  style={{
                    color: "var(--text-main)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Laboratoire AGIR (Amiens)
                </div>
                <p
                  className="text-sm leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Analyse de code et développement de nouvelles fonctionnalités
                  sur le logiciel PyRED. Optimisation d'algorithmes et
                  traduction de concepts chimiques via une collaboration
                  interdisciplinaire.
                </p>
              </div>
            </div>

            {/* ── Projet SAE monCovoitJV ── */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 tl-node items-center justify-center text-xl">
                🚗
              </div>
              <div className="md:hidden absolute left-0 w-12 h-12 rounded-full z-10 tl-node flex items-center justify-center text-xl">
                🚗
              </div>
              <div className="w-full md:w-[45%] glass-panel ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "15px",
                    }}
                  >
                    Projet : monCovoitJV
                  </div>
                  <time
                    className="text-xs font-bold uppercase transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Décembre 2025
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-bold transition-colors duration-500"
                  style={{
                    color: "var(--text-main)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Développement Full Stack — IUT d'Amiens
                </div>
                <p
                  className="text-sm leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Conception et développement en équipe d'une plateforme web de
                  covoiturage inter-campus. Architecture PHP MVC, base de
                  données MySQL et gestion de projet via méthodes Agiles.
                </p>
              </div>
            </div>

            {/* ── Projet SAE 2.01 Transport ── */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 tl-node items-center justify-center text-xl">
                🚌
              </div>
              <div className="md:hidden absolute left-0 w-12 h-12 rounded-full z-10 tl-node flex items-center justify-center text-xl">
                🚌
              </div>
              <div className="w-full md:w-[45%] glass-panel ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "15px",
                    }}
                  >
                    SAE 2.01 : Gestion de Transport
                  </div>
                  <time
                    className="text-xs font-bold uppercase transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Mai 2025
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-bold transition-colors duration-500"
                  style={{
                    color: "var(--text-main)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Application C# / WinForms — IUT d'Amiens
                </div>
                <p
                  className="text-sm leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Conception et développement en équipe d'une application de
                  gestion du réseau de bus de Calais. Modélisation POO, création
                  d'une maquette (Balsamiq) et implémentation de l'algorithme de
                  Dijkstra.
                </p>
              </div>
            </div>

            {/* ── BUT Info ── */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 tl-node items-center justify-center text-xl">
                🎓
              </div>
              <div className="md:hidden absolute left-0 w-12 h-12 rounded-full z-10 tl-node flex items-center justify-center text-xl">
                🎓
              </div>
              <div className="w-full md:w-[45%] glass-panel ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "15px",
                    }}
                  >
                    BUT Informatique (RACA)
                  </div>
                  <time
                    className="text-xs font-bold uppercase transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Depuis sept. 2024
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-bold transition-colors duration-500"
                  style={{
                    color: "var(--text-main)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  IUT d'Amiens - UPJV
                </div>
                <p
                  className="text-sm leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Parcours Réalisation d'applications : conception,
                  développement, validation.
                </p>
              </div>
            </div>

            {/* ── Bac ── */}
            <div className="relative flex flex-col md:flex-row items-center group">
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 tl-node items-center justify-center text-xl">
                📜
              </div>
              <div className="md:hidden absolute left-0 w-12 h-12 rounded-full z-10 tl-node flex items-center justify-center text-xl">
                📜
              </div>
              <div className="w-full md:w-[45%] glass-panel ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold transition-colors duration-500"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-main)",
                      fontSize: "15px",
                    }}
                  >
                    Baccalauréat Général
                  </div>
                  <time
                    className="text-xs font-bold uppercase transition-colors duration-500"
                    style={{
                      color: "var(--text-accent)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    2024
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-bold transition-colors duration-500"
                  style={{
                    color: "var(--text-main)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Mention Bien — Spé Maths & NSI
                </div>
                <p
                  className="text-sm leading-relaxed font-medium transition-colors duration-500"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Lycée Robert de Luzarches, Amiens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="py-16 text-center relative z-10">
        <div className="fade-up d4 glass-panel max-w-2xl mx-auto py-10 px-6 rounded-3xl relative">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 font-bold transition-colors duration-500"
            style={{
              color: "var(--text-accent)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            Section Suivante
          </p>
          <Link
            href="/realisations"
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
            Découvrir mes réalisations
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
