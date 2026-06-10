// ============================================================
// PAGE RÉALISATIONS — Thème Saisons (Complet & Layout Optimisé)
// Chemin : app/realisations/page.tsx
// ============================================================

import Image from "next/image";
import Link from "next/link";

export default function Realisations() {
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
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

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

        .glass-inner {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.8);
        }

        .text-glow-light {
          text-shadow: 0 0 20px var(--text-accent-glow);
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
          HEADER DE LA PAGE (Texte flottant)
      ══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          {/* Sur-titre dans l'encadré */}
          <div className="fade-up d1 inline-flex glass-panel items-center gap-3 px-5 py-2 rounded-full mb-4">
            <p
              className="tracking-[0.3em] uppercase text-xs font-bold transition-colors duration-500"
              style={{
                color: "var(--text-accent)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              Portfolio Technique
            </p>
          </div>

          {/* Titre principal flottant */}
          <div className="fade-up d2">
            <h1
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight transition-colors duration-500"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <span className="text-glow-light">Mes</span> <br />
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
                Réalisations
              </span>
              <span className="title-emoji">
                <span className="icon-summer">☀️</span>
                <span className="icon-autumn">🍂</span>
                <span className="icon-winter">❄️</span>
                <span className="icon-spring">🌸</span>
              </span>
            </h1>
          </div>

          {/* Description dans le panneau */}
          <div className="fade-up d3 glass-panel rounded-3xl p-8 sm:p-12 text-center mt-6 w-full">
            <p
              className="text-lg md:text-xl leading-relaxed transition-colors duration-500 font-medium"
              style={{
                color: "var(--text-muted)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Une immersion dans mes projets les plus marquants, de
              l'optimisation algorithmique pour la recherche internationale au
              développement collaboratif d'outils de mobilité durable.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTENU PRINCIPAL (Les 3 Réalisations)
      ══════════════════════════════════════════ */}
      {/* Astuce : max-w-7xl au lieu de 6xl pour donner plus de place au texte ! */}
      <div className="relative max-w-7xl mx-auto py-8 px-6 sm:px-12 space-y-24 z-10">
        {/* ================= SECTION 1 : PyRED ================= */}
        <section className="relative fade-up d2">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            {/* COLONNE GAUCHE : TEXTE (Plus large lg:w-7/12) */}
            <div className="flex-1 lg:w-7/12 space-y-6 glass-panel p-6 sm:p-8 rounded-3xl">
              <div className="space-y-4">
                <div
                  className="flex items-center gap-3 flex-wrap"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <span className="px-4 py-1.5 border border-slate-300 text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/60">
                    Janv. - Mars 2026
                  </span>
                  <span className="px-3 py-1.5 border border-slate-300 text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/60">
                    R&D Scientifique
                  </span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider transition-colors duration-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Stage • Labo AGIR (UPJV)
                  </span>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold leading-tight transition-colors duration-500"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--text-main)",
                  }}
                >
                  <span style={{ color: "var(--text-accent)" }}>
                    PyRED : Développement Python pour la
                  </span>{" "}
                  <br />
                  <span>recherche pharmaceutique mondiale.</span>
                </h2>
              </div>

              {/* Marge réduite entre paragraphes : space-y-4 */}
              <div
                className="space-y-4 leading-relaxed text-base sm:text-lg font-medium transition-colors duration-500"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "var(--text-muted)",
                }}
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
                    className="font-bold transition-colors underline"
                    style={{ color: "var(--text-accent)" }}
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
                  <strong>éviter des corrections manuelles </strong>
                  longues et fastidieuses, leur offrant ainsi un{" "}
                  <strong>gain de temps précieux</strong> qu'ils peuvent
                  désormais consacrer entièrement à l'analyse de leurs résultats
                  de recherche.
                </p>
              </div>
            </div>

            {/* COLONNE DROITE : VISUEL & INFOS BOXES (Moins large lg:w-5/12) */}
            <div className="lg:w-5/12 flex flex-col gap-6 w-full">
              <a
                href="https://upjv.q4md-forcefieldtools.org/REDServer-Development/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-3xl overflow-hidden border border-white/80 shadow-md group cursor-pointer bg-white/40"
              >
                <Image
                  src="/img/realisations/pyred-accueil.png"
                  alt="Accueil de la plateforme R.E.D. Server Development"
                  fill
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-60" />

                <div
                  className="absolute bottom-6 left-6"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-1"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Interface Web
                  </p>
                  <p className="text-slate-900 text-xl font-bold tracking-wide">
                    R.E.D. Server Development
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 glass-panel rounded-2xl">
                  <h4
                    className="font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-accent)",
                    }}
                  >
                    🌍 Impact
                  </h4>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "var(--text-muted)",
                    }}
                  >
                    Algorithme intégré au serveur mondial et co-auteur d'une
                    future publication internationale avec l'University of
                    Lethbridge au Canada.
                  </p>
                </div>
                <div className="p-6 glass-panel rounded-2xl">
                  <h4
                    className="font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-accent)",
                    }}
                  >
                    ✅ Validation
                  </h4>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "var(--text-muted)",
                    }}
                  >
                    a solution est désormais pleinement intégrée au code source
                    de PyRED, garantissant la viabilité chimique des fragments
                    générés de manière autonome.
                  </p>
                </div>
              </div>

              <div
                className="p-6 glass-panel rounded-2xl border-l-4"
                style={{ borderLeftColor: "var(--text-accent)" }}
              >
                <h4
                  className="font-bold mb-4 flex items-center gap-2 text-sm tracking-widest"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--text-main)",
                  }}
                >
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
                      className="px-3 py-1.5 glass-inner rounded-lg text-[11px] uppercase font-bold tracking-wider text-slate-800"
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
        <div className="relative flex justify-center items-center py-2 max-w-4xl mx-auto px-6 w-full z-10 fade-up d3">
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

        {/* ================= SECTION 2 : MONCOVOITJV ================= */}
        <section className="relative fade-up d4">
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-12 items-start">
            {/* COLONNE GAUCHE (inversée) : TEXTE */}
            <div className="flex-1 lg:w-7/12 space-y-6 glass-panel p-6 sm:p-8 rounded-3xl">
              <div className="space-y-4">
                <div
                  className="flex items-center justify-start gap-3 flex-wrap"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <span className="px-4 py-1.5 border border-slate-300 text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/60">
                    Décembre 2025
                  </span>
                  <span className="px-3 py-1.5 border border-slate-300 text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/60">
                    SAE • Développement Full Stack
                  </span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider transition-colors duration-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Équipe W • IUT d'Amiens
                  </span>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold leading-tight transition-colors duration-500"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--text-main)",
                  }}
                >
                  <span style={{ color: "var(--text-accent)" }}>
                    monCovoitJV : Répondre aux défis de la
                  </span>{" "}
                  <br />
                  <span>mobilité inter-campus.</span>
                </h2>
              </div>

              <div
                className="space-y-4 leading-relaxed text-base sm:text-lg font-medium transition-colors duration-500"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "var(--text-muted)",
                }}
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

            {/* COLONNE VISUELS ET CARTES (Droite, inversée) */}
            <div className="lg:w-5/12 flex flex-col gap-6 w-full">
              <a
                href="https://github.com/Mathys-V/sae-covoiturage"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-3xl overflow-hidden border border-white/80 shadow-md group cursor-pointer bg-white/40"
              >
                <Image
                  src="/img/realisations/moncovoitJV.png"
                  alt="Plateforme monCovoitJV"
                  fill
                  className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-60" />

                <div
                  className="absolute bottom-6 left-6"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-1"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Interface Web
                  </p>
                  <p className="text-slate-900 text-xl font-bold tracking-wide">
                    Page d'Accueil
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 glass-panel rounded-2xl">
                  <h4
                    className="font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-accent)",
                    }}
                  >
                    🛠️ Stack Technique
                  </h4>
                  <p
                    className="text-sm leading-relaxed font-medium"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "var(--text-muted)",
                    }}
                  >
                    Architecture MVC (PHP), PDO, MySQL. Gestion de projet via
                    Trello et{" "}
                    <a
                      href="https://github.com/Mathys-V/sae-covoiturage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline transition-colors"
                      style={{ color: "var(--text-accent)" }}
                    >
                      Git
                    </a>
                    .
                  </p>
                </div>
                <div className="p-6 glass-panel rounded-2xl">
                  <h4
                    className="font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-accent)",
                    }}
                  >
                    📄 Documents
                  </h4>
                  <div className="flex flex-col gap-3 mt-2 font-bold text-xs">
                    <a
                      href="https://github.com/Mathys-V/sae-covoiturage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--text-accent)" }}>•</span>{" "}
                      Code sur GitHub
                    </a>
                    <a
                      href="/docs/Documentation-Technique-Equipe-W.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--text-accent)" }}>•</span>{" "}
                      Documentation technique
                    </a>
                    <a
                      href="/docs/Guide-utilisateur-Equipe-W.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--text-accent)" }}>•</span>{" "}
                      Guide utilisateur
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 glass-panel rounded-2xl border-l-4"
                style={{ borderLeftColor: "var(--text-accent)" }}
              >
                <h4
                  className="font-bold mb-4 flex items-center gap-2 text-sm tracking-widest"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--text-main)",
                  }}
                >
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
                      className="px-3 py-1.5 glass-inner rounded-lg text-[11px] uppercase font-bold tracking-wider text-slate-800"
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
        <div className="relative flex justify-center items-center py-2 max-w-4xl mx-auto px-6 w-full z-10 fade-up d3">
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

        {/* ================= SECTION 3 : SAE 2.01 BUS CALAIS ================= */}
        <section className="relative fade-up d2">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            {/* COLONNE GAUCHE : TEXTE */}
            <div className="flex-1 lg:w-7/12 space-y-6 glass-panel p-6 sm:p-8 rounded-3xl">
              <div className="space-y-4">
                <div
                  className="flex items-center gap-3 flex-wrap"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <span className="px-4 py-1.5 border border-slate-300 text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/60">
                    Mai 2025
                  </span>
                  <span className="px-3 py-1.5 border border-slate-300 text-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/60">
                    SAE 2.01 • C# / WinForms
                  </span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider transition-colors duration-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Équipe E4 • IUT d'Amiens
                  </span>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold leading-tight transition-colors duration-500"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--text-main)",
                  }}
                >
                  <span style={{ color: "var(--text-accent)" }}>
                    Application de Gestion de Transport :
                  </span>{" "}
                  <br />
                  <span>Conception et Modélisation Orientée Objet.</span>
                </h2>
              </div>

              <div
                className="space-y-4 leading-relaxed text-base sm:text-lg font-medium transition-colors duration-500"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "var(--text-muted)",
                }}
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

            {/* COLONNE DROITE : VISUEL & INFOS BOXES */}
            <div className="lg:w-5/12 flex flex-col gap-6 w-full">
              <a
                href="https://github.com/Mathys-V/SAE_E4"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video rounded-3xl overflow-hidden border border-white/80 shadow-md group cursor-pointer bg-white/40"
              >
                <Image
                  src="/img/realisations/bus-calais.jpg"
                  alt="Carte du réseau de bus de Calais servant de base à l'application de transport"
                  fill
                  className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-60" />

                <div
                  className="absolute bottom-6 left-6"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase font-bold mb-1"
                    style={{ color: "var(--text-accent)" }}
                  >
                    Réseau de Transport
                  </p>
                  <p className="text-slate-900 text-xl font-bold tracking-wide">
                    Bus de Calais
                  </p>
                </div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 glass-panel rounded-2xl">
                  <h4
                    className="font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-accent)",
                    }}
                  >
                    ⚙️ Stack Technique
                  </h4>
                  <p
                    className="text-sm font-medium leading-relaxed"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "var(--text-muted)",
                    }}
                  >
                    C# (.NET), Windows Forms, MySQL. Implémentation de
                    structures de graphes.
                  </p>
                </div>
                <div className="p-6 glass-panel rounded-2xl">
                  <h4
                    className="font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: "var(--text-accent)",
                    }}
                  >
                    📄 Documents
                  </h4>
                  <div className="flex flex-col gap-3 mt-2 font-bold text-xs">
                    <a
                      href="https://github.com/Mathys-V/SAE_E4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--text-accent)" }}>•</span>{" "}
                      Code sur GitHub
                    </a>
                    <a
                      href="/docs/SAE-IHM-ARBRE-DE-TACHES.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--text-accent)" }}>•</span>{" "}
                      Arbre des tâches
                    </a>
                    <a
                      href="/docs/SAE-IHM-MAQUETTE.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--text-accent)" }}>•</span>{" "}
                      Maquette UI
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 glass-panel rounded-2xl border-l-4"
                style={{ borderLeftColor: "var(--text-accent)" }}
              >
                <h4
                  className="font-bold mb-4 flex items-center gap-2 text-sm tracking-widest"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: "var(--text-main)",
                  }}
                >
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
                      className="px-3 py-1.5 glass-inner rounded-lg text-[11px] uppercase font-bold tracking-wider text-slate-800"
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
            href="/competences"
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
            Consulter mes compétences
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
