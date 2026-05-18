// ============================================================
// PAGE RÉALISATIONS — Thème Astronomie (Contraste Amélioré & Layout Rééquilibré)
// ============================================================

import Image from "next/image";
import Link from "next/link";

export default function Realisations() {
  return (
    <div
      className="flex flex-col overflow-hidden min-h-screen"
      style={{ background: "#020817", color: "#e2e8f0" }}
    >
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
        .project-card {
          background: rgba(226, 232, 240, 0.05);
          border: 1px solid rgba(201, 184, 130, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.4s ease;
        }
        .project-card:hover {
          border-color: rgba(201, 184, 130, 0.45);
          background: rgba(226, 232, 240, 0.08);
          box-shadow: 0 0 30px rgba(201, 184, 130, 0.15);
        }

        .nebula-purple {
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%);
        }
        .nebula-gold {
          background: radial-gradient(circle, rgba(201, 184, 130, 0.12) 0%, transparent 70%);
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

      {/* ── CIEL ÉTOILÉ DE FOND ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="stars-sm" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 nebula-purple blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 nebula-gold blur-3xl" />
      </div>

      {/* ================= HEADER DE LA PAGE ================= */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 z-10">
        <div className="relative max-w-4xl mx-auto text-center space-y-8 fade-up d1">
          <p
            className="cinzel tracking-[0.4em] text-xs uppercase font-bold"
            style={{ color: "rgba(201,184,130,0.85)" }}
          >
            ✦ &nbsp; Portfolio Technique &nbsp; ✦
          </p>
          <h1 className="text-5xl md:text-7xl font-black cinzel leading-tight tracking-tight">
            <span style={{ color: "#ffffff" }}>Mes</span> <br />
            <span
              className="relative inline-block"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #c9b882 0%, #ffffff 50%, #c9b882 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Réalisations
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
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed dm-sans font-normal"
            style={{ color: "rgba(226,232,240,0.95)" }}
          >
            Une immersion dans mes projets les plus marquants, de l'optimisation
            algorithmique pour la recherche internationale au développement
            collaboratif d'outils de mobilité durable.
          </p>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9b882] to-transparent opacity-70" />
        </div>
      </section>

      <div className="relative max-w-6xl mx-auto py-12 px-6 sm:px-12 space-y-32 z-10">
        {/* ================= SECTION 1 : PyRED ================= */}
        <section className="relative fade-up d2">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap cinzel">
                  <span className="px-4 py-1.5 border border-[#c9b882]/50 text-[#c9b882] text-[10px] font-bold uppercase tracking-widest rounded-full bg-[#c9b882]/10">
                    Janv. - Mars 2026
                  </span>
                  <span className="px-3 py-1.5 border border-white/20 text-slate-100 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/10">
                    R&D Scientifique
                  </span>
                  <span className="text-slate-300 text-[11px] font-bold uppercase tracking-wider">
                    Stage • Labo AGIR (UPJV)
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold cinzel leading-tight">
                  <span className="text-[#c9b882]">
                    PyRED : Développement Python pour la
                  </span>{" "}
                  <br />
                  <span className="text-[#ffffff]">
                    recherche pharmaceutique mondiale.
                  </span>
                </h2>
              </div>

              <div
                className="space-y-6 dm-sans leading-relaxed text-lg font-normal"
                style={{ color: "rgba(226,232,240,0.9)" }}
              >
                <p>
                  Le logiciel PyRED est une référence dans la génération
                  automatique de champs de forces pour la modélisation
                  moléculaire, accessible aux chercheurs du monde entier via le
                  serveur{" "}
                  <a
                    href="https://upjv.q4md-forcefieldtools.org/REDServer-Development/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c9b882] hover:text-white hover:underline font-bold transition-colors"
                  >
                    R.E.D. Server Development
                  </a>
                  . Cependant, l'outil n'était pas initialement conçu pour
                  traiter les <strong>analogues chimiques de l'ADN</strong> tels
                  que les NH-phosphates. Ma mission a donc consisté à concevoir
                  une extension spécifique afin de permettre la modélisation
                  autonome de ces nouvelles topologies moléculaires complexes.
                </p>
                <p>
                  Pour répondre à ce besoin scientifique, j'ai concentré mon
                  travail sur{" "}
                  <strong>l'extension des fonctionnalités existantes</strong> du
                  logiciel. J'ai développé un module capable de{" "}
                  <strong>vérifier automatiquement</strong> les structures
                  moléculaires générées. Si celui-ci détecte une erreur de
                  construction ou un défaut dans la structure, le code
                  intervient immédiatement pour{" "}
                  <strong>corriger la molécule</strong> et garantir sa{" "}
                  <strong>cohérence chimique</strong>.
                </p>
                <p>
                  Ce travail, réalisé sous Linux avec Python, a permis d'
                  <strong>automatiser cette étape de contrôle</strong>.
                  Concrètement, cela permet aux chercheurs d'
                  <strong>éviter des corrections manuelles</strong> longues et
                  fastidieuses, leur offrant ainsi un{" "}
                  <strong>gain de temps précieux</strong> qu'ils peuvent
                  désormais consacrer entièrement à l'analyse de leurs résultats
                  de recherche.
                </p>
              </div>
            </div>

            {/* ── COLONNE DROITE : LIEN VERS SITE ── */}
            <div className="lg:w-[45%] flex flex-col gap-8 relative z-10">
              <a
                href="https://upjv.q4md-forcefieldtools.org/REDServer-Development/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-3xl overflow-hidden border border-[#c9b882]/40 shadow-[0_0_50px_rgba(59,130,246,0.15)] group cursor-pointer bg-[#020817]/60"
              >
                <Image
                  src="/img/realisations/pyred-accueil.png"
                  alt="Accueil de la plateforme R.E.D. Server Development"
                  fill
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/20 to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 cinzel">
                  <p className="text-[#c9b882] text-[10px] tracking-[0.3em] uppercase font-bold mb-1">
                    Interface Web
                  </p>
                  <p className="text-white text-xl font-bold tracking-wide">
                    R.E.D. Server Development
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 project-card rounded-2xl">
                  <h4 className="cinzel font-bold text-[#c9b882] mb-3 flex items-center gap-2 text-sm tracking-wider">
                    🌍 Impact
                  </h4>
                  <p
                    className="text-sm dm-sans font-medium leading-relaxed"
                    style={{ color: "rgba(226,232,240,0.9)" }}
                  >
                    Algorithme intégré au serveur mondial et co-auteur d'une
                    future publication internationale avec l'University of
                    Lethbridge au Canada.
                  </p>
                </div>
                <div className="p-6 project-card rounded-2xl">
                  <h4 className="cinzel font-bold text-[#c9b882] mb-3 flex items-center gap-2 text-sm tracking-wider">
                    ✅ Validation
                  </h4>
                  <p
                    className="text-sm dm-sans font-medium leading-relaxed"
                    style={{ color: "rgba(226,232,240,0.9)" }}
                  >
                    La solution est désormais pleinement intégrée au code source
                    de PyRED, garantissant la viabilité chimique des fragments
                    générés de manière autonome.
                  </p>
                </div>
              </div>

              <div className="p-6 project-card rounded-2xl border-l-2 border-l-[#c9b882]">
                <h4 className="cinzel font-bold text-slate-100 mb-4 flex items-center gap-2 text-sm tracking-widest">
                  🧠 Compétences mobilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Rigueur Algorithmique",
                    "Linux Ubuntu",
                    "Communication interdisciplinaire",
                  ].map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-[11px] uppercase font-bold tracking-wider text-slate-100"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
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

        {/* ================= SECTION 2 : MONCOVOITJV ================= */}
        <section className="relative fade-up d4">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-start gap-3 flex-wrap cinzel">
                  <span className="px-4 py-1.5 border border-[#c9b882]/50 text-[#c9b882] text-[10px] font-bold uppercase tracking-widest rounded-full bg-[#c9b882]/10">
                    Décembre 2025
                  </span>
                  <span className="px-3 py-1.5 border border-white/20 text-slate-100 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/10">
                    SAE • Développement Full Stack
                  </span>
                  <span className="text-slate-300 text-[11px] font-bold uppercase tracking-wider">
                    Équipe W • IUT d'Amiens
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold cinzel leading-tight">
                  <span className="text-[#c9b882]">
                    monCovoitJV : Répondre aux défis de la
                  </span>{" "}
                  <br />
                  <span className="text-[#ffffff]">mobilité inter-campus.</span>
                </h2>
              </div>

              <div
                className="space-y-6 dm-sans leading-relaxed text-lg font-normal"
                style={{ color: "rgba(226,232,240,0.9)" }}
              >
                <p>
                  Dans le cadre de la SAE (Situation d'Apprentissage Évaluée)
                  3.01, mon équipe et moi-même avons développé{" "}
                  <strong>monCovoitJV</strong>, une plateforme web dédiée au
                  covoiturage pour les étudiants et le personnel de l'UPJV.
                  L'enjeu était de proposer une alternative concrète pour
                  réduire l'empreinte carbone liée aux déplacements entre les
                  différents campus de l'université.
                </p>
                <p>
                  Développé en <strong>PHP (architecture MVC)</strong> avec une
                  base de données MySQL, le projet a mobilisé une équipe de six
                  personnes. L'une des plus grandes complexités techniques a été
                  la mise en place du{" "}
                  <strong>système de messagerie interne</strong>, permettant une
                  coordination fluide entre conducteurs et passagers en temps
                  réel.
                </p>
                <p>
                  L'adoption d'une <strong>méthodologie agile</strong> (sprint
                  reviews hebdomadaires) et une organisation rigoureuse via{" "}
                  <i>Trello</i> nous ont permis d'optimiser notre cycle de
                  développement. Nous avons ainsi pu livrer un produit complet
                  et abouti, incluant un guide utilisateur détaillé ainsi qu'une
                  documentation technique exhaustive pour l'administration et la
                  modération du site.
                </p>
              </div>
            </div>

            {/* ── COLONNE VISUELS ET CARTES (Gauche) ── */}
            <div className="lg:w-[45%] flex flex-col gap-8 relative z-10">
              <a
                href="https://github.com/Mathys-V/sae-covoiturage"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-3xl overflow-hidden border border-[#c9b882]/40 shadow-[0_0_30px_rgba(201,184,130,0.15)] group cursor-pointer"
              >
                <Image
                  src="/img/realisations/moncovoitJV.png"
                  alt="Plateforme monCovoitJV"
                  fill
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/20 to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 cinzel">
                  <p className="text-[#c9b882] text-[10px] tracking-[0.3em] uppercase font-bold mb-1">
                    Interface Web
                  </p>
                  <p className="text-white text-xl font-bold tracking-wide">
                    Page d'Accueil
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 project-card rounded-2xl">
                  <h4 className="cinzel font-bold text-[#c9b882] mb-3 flex items-center gap-2 text-sm tracking-wider">
                    🛠️ Stack Technique
                  </h4>
                  <p
                    className="text-sm dm-sans leading-relaxed font-medium"
                    style={{ color: "rgba(226,232,240,0.9)" }}
                  >
                    Architecture MVC (PHP), PDO, MySQL. Gestion de projet via
                    Trello et{" "}
                    <a
                      href="https://github.com/Mathys-V/sae-covoiturage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c9b882] hover:text-white underline font-bold transition-colors"
                    >
                      Git
                    </a>
                    .
                  </p>
                </div>
                <div className="p-6 project-card rounded-2xl">
                  <h4 className="cinzel font-bold text-[#c9b882] mb-3 flex items-center gap-2 text-sm tracking-wider">
                    📄 Documents
                  </h4>
                  <div className="flex flex-col gap-3 mt-2 font-medium">
                    <a
                      href="https://github.com/Mathys-V/sae-covoiturage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-[#c9b882] flex items-center gap-2 text-slate-100 transition-colors"
                    >
                      <span className="text-[#c9b882]">◈</span> Code sur GitHub
                    </a>
                    <a
                      href="/docs/Documentation-Technique-Equipe-W.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-[#c9b882] flex items-center gap-2 text-slate-100 transition-colors"
                    >
                      <span className="text-[#c9b882]">◈</span> Documentation
                      technique (PDF)
                    </a>
                    <a
                      href="/docs/Guide-utilisateur-Equipe-W.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-[#c9b882] flex items-center gap-2 text-slate-100 transition-colors"
                    >
                      <span className="text-[#c9b882]">◈</span> Guide
                      utilisateur (PDF)
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 project-card rounded-2xl border-l-2 border-l-[#c9b882]">
                <h4 className="cinzel font-bold text-slate-100 mb-4 flex items-center gap-2 text-sm tracking-widest">
                  🧠 Compétences mobilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "PHP (MVC)",
                    "MySQL",
                    "HTML/CSS",
                    "Bootstrap",
                    "Méthodologies Agiles",
                    "Git",
                    "Trello",
                  ].map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-[11px] uppercase font-bold tracking-wider text-slate-100"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
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

        {/* ================= SECTION 3 : SAE 2.01 (NOUVEAU PROJET) ================= */}
        <section className="relative fade-up d2">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 flex-wrap cinzel">
                  <span className="px-4 py-1.5 border border-[#c9b882]/50 text-[#c9b882] text-[10px] font-bold uppercase tracking-widest rounded-full bg-[#c9b882]/10">
                    Mai 2025
                  </span>
                  <span className="px-3 py-1.5 border border-white/20 text-slate-100 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/10">
                    SAE 2.01 • C# / WinForms
                  </span>
                  <span className="text-slate-300 text-[11px] font-bold uppercase tracking-wider">
                    Équipe E4 • IUT d'Amiens
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold cinzel leading-tight">
                  <span className="text-[#c9b882]">
                    Application de Gestion de Transport :
                  </span>{" "}
                  <br />
                  <span className="text-[#ffffff]">
                    Conception et Modélisation Orientée Objet.
                  </span>
                </h2>
              </div>

              <div
                className="space-y-6 dm-sans leading-relaxed text-lg font-normal"
                style={{ color: "rgba(226,232,240,0.9)" }}
              >
                <p>
                  Dans le cadre de la SAE 2.01 clôturant ma première année de
                  BUT, j'ai participé au développement d'une application de
                  gestion de transport en commun basée sur le réseau de bus de
                  Calais. Réalisé en équipe de six personnes, ce projet visait à
                  fournir une solution complète : consultation des horaires,
                  carte interactive, recherche d'itinéraires et administration
                  du réseau.
                </p>
                <p>
                  Développée en <strong>C# via Windows Forms</strong>, cette
                  application repose sur une conception stricte orientée objet
                  (POO) avec une séparation entre l'interface, la logique
                  système et la base de données MySQL. L'approche a été
                  méthodique, débutant par la conception d'un arbre de tâches et
                  d'une maquette UI/UX sur Balsamiq.
                </p>
                <p>
                  Le développement s'est organisé en sous-groupes de deux ou
                  trois personnes, coordonné via Trello. En étroite
                  collaboration avec mes coéquipiers, j'ai notamment
                  co-développé le module de connexion sécurisé, la carte
                  interactive, ainsi que le moteur de recherche d'itinéraires
                  intégrant l'algorithme de Dijkstra pour l'optimisation des
                  trajets.
                </p>
              </div>
            </div>

            <div className="lg:w-[45%] flex flex-col gap-8 relative z-10">
              <a
                href="https://github.com/Mathys-V/SAE_E4"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-3xl overflow-hidden border border-[#c9b882]/40 shadow-[0_0_50px_rgba(59,130,246,0.15)] group cursor-pointer bg-[#020817]/60"
              >
                <Image
                  src="/img/realisations/bus-calais.jpg"
                  alt="Carte du réseau de bus de Calais servant de base à l'application de transport"
                  fill
                  className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/20 to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 cinzel">
                  <p className="text-[#c9b882] text-[10px] tracking-[0.3em] uppercase font-bold mb-1">
                    Réseau de Transport
                  </p>
                  <p className="text-white text-xl font-bold tracking-wide">
                    Bus de Calais
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 project-card rounded-2xl">
                  <h4 className="cinzel font-bold text-[#c9b882] mb-3 flex items-center gap-2 text-sm tracking-wider">
                    ⚙️ Stack Technique
                  </h4>
                  <p
                    className="text-sm dm-sans font-medium leading-relaxed"
                    style={{ color: "rgba(226,232,240,0.9)" }}
                  >
                    C# (.NET), Windows Forms, MySQL. Implémentation de
                    structures de graphes et requêtes SQL complexes.
                  </p>
                </div>
                <div className="p-6 project-card rounded-2xl">
                  <h4 className="cinzel font-bold text-[#c9b882] mb-3 flex items-center gap-2 text-sm tracking-wider">
                    📄 Documents
                  </h4>
                  <div className="flex flex-col gap-3 mt-2 font-medium">
                    <a
                      href="https://github.com/Mathys-V/SAE_E4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-[#c9b882] flex items-center gap-2 text-slate-100 transition-colors"
                    >
                      <span className="text-[#c9b882]">◈</span> Code sur GitHub
                    </a>
                    <a
                      href="/docs/SAE-IHM-ARBRE-DE-TACHES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-[#c9b882] flex items-center gap-2 text-slate-100 transition-colors"
                    >
                      <span className="text-[#c9b882]">◈</span> Arbre des tâches
                      (PDF)
                    </a>
                    <a
                      href="/docs/SAE-IHM-MAQUETTE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-[#c9b882] flex items-center gap-2 text-slate-100 transition-colors"
                    >
                      <span className="text-[#c9b882]">◈</span> Maquette UI
                      (PDF)
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 project-card rounded-2xl border-l-2 border-l-[#c9b882]">
                <h4 className="cinzel font-bold text-slate-100 mb-4 flex items-center gap-2 text-sm tracking-widest">
                  🧠 Compétences mobilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "C#",
                    "Windows Forms",
                    "MySQL",
                    "Balsamiq",
                    "Git",
                    "Trello",
                  ].map((sk) => (
                    <span
                      key={sk}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-[11px] uppercase font-bold tracking-wider text-slate-100"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
          ✦ &nbsp; Section Suivante &nbsp; ✦
        </p>
        <Link
          href="/competences"
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
          Consulter mes compétences et acquis techniques
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
