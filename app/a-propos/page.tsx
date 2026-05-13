// ============================================================
// PAGE À PROPOS — Thème Astronomie (Contraste Amélioré & Layout Fix)
// ============================================================

import Link from "next/link";

export default function About() {
  return (
    <div
      className="flex flex-col overflow-x-hidden min-h-screen"
      style={{ background: "#020817", color: "#e2e8f0" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Étoiles animées ── */
        .ab-stars-sm, .ab-stars-md {
          position: fixed;
          top: 0; left: 0;
          width: 1px; height: 1px;
          border-radius: 50%;
          background: transparent;
          pointer-events: none;
          z-index: 0;
        }
        .ab-stars-sm {
          box-shadow:
            80px 120px #fff, 320px 80px #fff, 560px 200px #fff,
            780px 50px #fff, 1050px 310px #fff, 200px 480px #fff,
            640px 400px #fff, 420px 560px #fff, 900px 150px #fff,
            1200px 90px #fff, 1350px 450px #fff, 70px 650px #fff,
            490px 720px #fff, 830px 680px #fff, 1100px 600px #fff,
            260px 780px #fff, 710px 820px #fff, 1280px 730px #fff,
            140px 900px #fff, 580px 940px #fff, 980px 880px #fff,
            1420px 200px #fff, 350px 300px #fff, 870px 370px #fff,
            1160px 480px #fff, 30px 410px #fff, 1460px 540px #fff;
          opacity: 0.5;
          animation: starDrift 150s linear infinite;
        }
        .ab-stars-md {
          box-shadow:
            180px 220px 1px #c9b882, 520px 130px 1px #fff,
            880px 280px 1px #e2e8f0, 1240px 180px 1px #c9b882,
            360px 520px 1px #fff, 740px 620px 1px #c9b882,
            1080px 700px 1px #e2e8f0, 100px 750px 1px #fff,
            1380px 650px 1px #c9b882, 620px 830px 1px #e2e8f0;
          opacity: 0.35;
          animation: starDrift 100s linear infinite;
        }

        @keyframes starDrift {
          from { transform: translateY(0); }
          to   { transform: translateY(-100vh); }
        }

        /* ── Animations d'entrée ── */
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fuAb 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        @keyframes fuAb {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Carte cosmique ── */
        .cosmic-card {
          background: rgba(226, 232, 240, 0.05);
          border: 1px solid rgba(201, 184, 130, 0.25);
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

        /* ── Bloc exemple interne ── */
        .example-block {
          background: rgba(201, 184, 130, 0.08);
          border: 1px solid rgba(201, 184, 130, 0.2);
          border-radius: 1rem;
          padding: 1.25rem;
        }

        /* ── Carte sombre piège autonomie ── */
        .dark-card {
          background: rgba(226,232,240,0.06);
          border: 1px solid rgba(201,184,130,0.25);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        .dark-card-inner {
          background: rgba(201,184,130,0.1);
          border: 1px solid rgba(201,184,130,0.2);
        }

        /* ── Badge icône ── */
        .icon-badge {
          background: rgba(201,184,130,0.15);
          border: 1px solid rgba(201,184,130,0.3);
        }

        /* ── Timeline ── */
        .tl-line {
          position: absolute;
          left: 24px; /* Centré exactement sous l'icône de 48px de large (w-12) sur mobile */
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(201,184,130,0.5), transparent);
          z-index: 0;
        }
        @media (min-width: 768px) {
          .tl-line {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .tl-node-gold {
          background: linear-gradient(135deg, #c9b882, #a89060);
          box-shadow: 0 0 14px rgba(201,184,130,0.6), 0 0 28px rgba(201,184,130,0.3);
          color: #020817;
        }
        .tl-node {
          background: rgba(226,232,240,0.1);
          border: 1px solid rgba(201,184,130,0.4);
          color: rgba(226,232,240,0.9);
        }

        /* ── Séparateur doré animé ── */
        .gold-sep {
          background: linear-gradient(90deg, transparent, rgba(201,184,130,0.7), transparent);
          animation: gSep 3s ease-in-out infinite;
          height: 1px;
          flex: 1;
        }
        @keyframes gSep {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }

        /* ── Section title underline ── */
        .sec-line {
          background: linear-gradient(90deg, rgba(201,184,130,0.7), transparent);
          height: 1px;
          flex: 1;
        }

        /* ── CTA final ── */
        .cta-link {
          transition: all 0.3s ease;
          color: rgba(226,232,240,0.85);
          letter-spacing: 0.18em;
        }
        .cta-link:hover {
          color: #c9b882;
          text-shadow: 0 0 16px rgba(201,184,130,0.5);
          letter-spacing: 0.24em;
        }
      `}</style>

      {/* ── Fond étoilé ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="ab-stars-sm" />
        <div className="ab-stars-md" />
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "-8%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "-8%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════
          SECTION 1 — INTRODUCTION
      ══════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 px-6 sm:px-12 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <p
            className="fade-up d1 tracking-[0.3em] uppercase text-xs font-bold"
            style={{
              color: "rgba(201,184,130,0.85)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            ✦ &nbsp; Introduction &nbsp; ✦
          </p>

          <div className="fade-up d2">
            <h1
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <span style={{ color: "#ffffff" }}>À propos</span> <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #c9b882 0%, #ffffff 50%, #c9b882 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                de moi
              </span>
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

          <div className="fade-up d3 cosmic-card rounded-3xl p-8 sm:p-10 text-center">
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                color: "rgba(226,232,240,0.95)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              Actuellement étudiant en 2ème année de BUT Informatique à l'IUT
              d'Amiens, mon approche du développement est avant tout concrète et
              analytique. Je suis convaincu que derrière chaque ligne de code se
              cache une opportunité de résoudre un problème réel, qu'il s'agisse
              d'optimiser le quotidien d'une entreprise, de faciliter la
              collaboration d'une équipe ou de concrétiser un projet ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — ADN PROFESSIONNEL
      ══════════════════════════════════════════ */}
      <section className="py-16 px-6 sm:px-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Titre */}
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Cinzel', serif", color: "#ffffff" }}
            >
              Mon ADN{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #c9b882, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Professionnel
              </span>
            </h2>
            <p
              className="text-lg"
              style={{
                color: "rgba(226,232,240,0.85)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Ce qui me définit techniquement et humainement, illustré par mes
              expériences.
            </p>
          </div>

          {/* ── Valeurs Techniques ── */}
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="icon-badge p-2 rounded-xl text-xl flex-shrink-0">
                💼
              </div>
              <h3
                className="font-bold"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#ffffff",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                }}
              >
                MES VALEURS TECHNIQUES
              </h3>
              <div className="sec-line" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Rigueur */}
              <div className="cosmic-card rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🔍
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "16px",
                    }}
                  >
                    Analyse & Rigueur
                  </h4>
                </div>
                <p
                  className="leading-relaxed mb-8 flex-1"
                  style={{
                    color: "rgba(226,232,240,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  J'aborde le code avec une méthode scientifique : analyser
                  l'existant, formuler une hypothèse, tester et valider. Je
                  m'attache à comprendre l'architecture globale d'un projet
                  avant de modifier la moindre instruction.
                </p>
                <div className="example-block">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                    style={{ color: "#c9b882", fontFamily: "'Cinzel', serif" }}
                  >
                    <span>🎯</span> Exemple Concret
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(226,232,240,0.9)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Au sein du Laboratoire AGIR, j'ai eu l'opportunité de
                    travailler sur l'architecture historique de PyRED, un
                    logiciel scientifique de grande envergure. Pour faire
                    évoluer ce programme complexe, j'ai d'abord minutieusement
                    cartographié sa logique algorithmique, ce qui m'a permis d'y
                    intégrer ma solution avec rigueur et dans le plus pur
                    respect de l'outil existant.
                  </p>
                </div>
              </div>

              {/* Communication */}
              <div className="cosmic-card rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🤝
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "16px",
                    }}
                  >
                    Communication
                  </h4>
                </div>
                <p
                  className="leading-relaxed mb-8 flex-1"
                  style={{
                    color: "rgba(226,232,240,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Le développement ne se fait pas en vase clos. J'accorde une
                  importance majeure au dialogue avec les experts métiers pour
                  m'assurer que le code répond exactement à la réalité du
                  terrain et aux besoins des utilisateurs.
                </p>
                <div className="example-block">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2"
                    style={{ color: "#c9b882", fontFamily: "'Cinzel', serif" }}
                  >
                    <span>🎯</span> Exemple Concret
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(226,232,240,0.9)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    Au sein du Laboratoire AGIR, j'ai travaillé en étroite
                    collaboration avec mon tuteur, chercheur en chimie
                    organique. Mon défi quotidien a été d'écouter et d'assimiler
                    des concepts scientifiques complexes afin de comprendre
                    comment ils étaient déjà traduits dans le code source de
                    PyRED. Cette communication constante m'a permis d'intervenir
                    sur l'algorithme avec justesse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Personnalité ── */}
          <div className="space-y-10 pt-4">
            <div className="flex items-center gap-4">
              <div className="icon-badge p-2 rounded-xl text-xl flex-shrink-0">
                👤
              </div>
              <h3
                className="font-bold uppercase tracking-widest"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              >
                MA PERSONNALITÉ
              </h3>
              <div className="sec-line" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Piège de l'autonomie — pleine largeur */}
              <div className="dark-card md:col-span-2 rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "300px",
                    height: "300px",
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                    pointerEvents: "none",
                  }}
                />
                <div className="relative z-10 flex-1">
                  <h4
                    className="text-xl font-bold mb-4 flex items-center gap-3 uppercase tracking-widest"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "18px",
                    }}
                  >
                    <span className="text-2xl">💡</span> Le piège de l'autonomie
                  </h4>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: "rgba(226,232,240,0.85)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    J'ai longtemps cru que réussir seul était la preuve absolue
                    de compétence. J'avais donc tendance à m'isoler pour tenter
                    de résoudre un bug ou une problématique par mes propres
                    moyens.
                  </p>
                </div>
                <div className="relative z-10 w-full md:w-1/2 dark-card-inner p-6 rounded-2xl">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
                    style={{ color: "#c9b882", fontFamily: "'Cinzel', serif" }}
                  >
                    <span>📈</span> La leçon apprise
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(226,232,240,0.9)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    J'ai réalisé qu'un dialogue technique continu et le fait de
                    réfléchir à plusieurs permettaient d'avancer beaucoup plus
                    efficacement. Aujourd'hui, je sais que la communication fait
                    gagner un temps précieux à toute l'équipe.
                  </p>
                </div>
              </div>

              {/* Mes Valeurs */}
              <div className="cosmic-card rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🧭
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "16px",
                    }}
                  >
                    Mes Valeurs
                  </h4>
                </div>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "rgba(226,232,240,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Mon approche du développement repose sur une forte
                  adaptabilité et un réel sens de l'empathie. Ma soif
                  d'apprendre m'a poussé à me former seul à Python au
                  laboratoire AGIR pour être immédiatement opérationnel.
                  Aujourd'hui, je vois le code comme un moyen de résoudre de
                  vrais problèmes avec pragmatisme. Je m'efforce de produire des
                  solutions réfléchies et utiles aux autres, en cherchant
                  toujours le juste équilibre entre l'efficacité des outils
                  modernes et l'optimisation de nos ressources.
                </p>
              </div>

              {/* Entre deux lignes de code */}
              <div className="cosmic-card rounded-3xl p-8 flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl icon-badge flex-shrink-0">
                    🎧
                  </div>
                  <h4
                    className="font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "16px",
                    }}
                  >
                    Entre deux lignes de code
                  </h4>
                </div>
                <p
                  className="leading-relaxed"
                  style={{
                    color: "rgba(226,232,240,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Mon temps libre est rythmé par la culture de l'imaginaire. Je
                  suis un grand lecteur de Mangas et de Light Novels, très
                  souvent accompagné de musique Rock ou J-Pop. C'est d'ailleurs
                  la lecture de l'œuvre <i>Re:Zero</i> qui m'a transmis mon
                  affection pour l'astronomie. Bien que mes connaissances
                  restent celles d'un amateur curieux, cet attrait pour les
                  étoiles m'inspire profondément. Plonger dans ces univers
                  narratifs m'offre une déconnexion totale, me permettant de
                  revenir sur mes projets avec un regard neuf et une créativité
                  rechargée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SÉPARATEUR
      ══════════════════════════════════════════ */}
      <div className="relative flex justify-center items-center py-12 max-w-4xl mx-auto px-6 w-full z-10 fade-up d3">
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

      {/* ══════════════════════════════════════════
          SECTION 3 — PARCOURS (TIMELINE)
      ══════════════════════════════════════════ */}
      <section className="pb-24 px-6 sm:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="tracking-[0.3em] uppercase text-xs mb-4 font-bold"
              style={{
                color: "rgba(201,184,130,0.85)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              ✦ &nbsp; Évolution &nbsp; ✦
            </p>
            <h2
              className="text-3xl font-black tracking-tight"
              style={{ fontFamily: "'Cinzel', serif", color: "#ffffff" }}
            >
              Mon Parcours
            </h2>
            <p
              className="mt-2 text-lg"
              style={{
                color: "rgba(226,232,240,0.85)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Une progression constante vers le développement logiciel.
            </p>
          </div>

          <div className="relative space-y-12 py-4">
            {/* Ligne verticale */}
            <div className="tl-line" />

            {/* ── Stage Python ── */}
            <div className="relative flex flex-col md:flex-row items-center group">
              {/* Bulle Centrée (Bureau) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full z-10 tl-node-gold items-center justify-center text-xl shadow-lg shadow-[#c9b882]/20">
                🚀
              </div>
              {/* Bulle Gauche (Mobile) */}
              <div className="md:hidden absolute left-0 w-12 h-12 rounded-full z-10 tl-node-gold flex items-center justify-center text-xl shadow-lg shadow-[#c9b882]/20">
                🚀
              </div>

              {/* Carte */}
              <div className="w-full md:w-[45%] cosmic-card ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "15px",
                    }}
                  >
                    Stage Développeur Python
                  </div>
                  <time
                    className="text-xs font-bold uppercase"
                    style={{
                      color: "#c9b882",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Janv-Mars 2026
                  </time>
                </div>
                <div
                  className="text-sm mb-3 italic font-medium"
                  style={{
                    color: "rgba(201,184,130,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Laboratoire AGIR (Amiens)
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(226,232,240,0.85)",
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

              <div className="w-full md:w-[45%] cosmic-card ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "15px",
                    }}
                  >
                    Projet : monCovoitJV
                  </div>
                  <time
                    className="text-xs font-bold uppercase"
                    style={{
                      color: "rgba(226,232,240,0.7)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Décembre 2025
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-medium"
                  style={{
                    color: "rgba(201,184,130,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Développement Full Stack — IUT d'Amiens
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(226,232,240,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Conception et développement d'une plateforme web de
                  covoiturage inter-campus. Architecture PHP MVC, base de
                  données MySQL et gestion de projet via méthodes Agiles.
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

              <div className="w-full md:w-[45%] cosmic-card ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "15px",
                    }}
                  >
                    BUT Informatique (RACA)
                  </div>
                  <time
                    className="text-xs font-bold uppercase"
                    style={{
                      color: "rgba(226,232,240,0.7)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Depuis sept. 2024
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-medium"
                  style={{
                    color: "rgba(201,184,130,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  IUT d'Amiens - UPJV
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(226,232,240,0.85)",
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

              <div className="w-full md:w-[45%] cosmic-card ml-16 md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto p-6 rounded-3xl relative z-20">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "#ffffff",
                      fontSize: "15px",
                    }}
                  >
                    Baccalauréat Général
                  </div>
                  <time
                    className="text-xs font-bold uppercase"
                    style={{
                      color: "rgba(226,232,240,0.7)",
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: "0.1em",
                    }}
                  >
                    2024
                  </time>
                </div>
                <div
                  className="text-sm mb-3 font-medium"
                  style={{
                    color: "rgba(201,184,130,0.85)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Mention Bien — Spé Maths & NSI
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(226,232,240,0.85)",
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
      <section
        className="py-20 text-center relative z-10"
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
          ✦ &nbsp; Section Suivante &nbsp; ✦
        </p>
        <Link
          href="/realisations"
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
          Découvrir mes réalisations techniques
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
