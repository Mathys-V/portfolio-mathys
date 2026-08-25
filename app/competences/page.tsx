"use client";

// ============================================================
// PAGE COMPÉTENCES — Thème Saisons (Glassmorphism & UX Améliorée)
// ============================================================

import Image from "next/image";
import Link from "next/link";

export default function Competences() {
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

        .glass-inner {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.8);
        }

        .icon-badge {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .text-glow-light { text-shadow: 0 0 20px var(--text-accent-glow); }

        .cta-link { transition: all 0.3s ease; color: var(--text-main); letter-spacing: 0.18em; }
        .cta-link:hover { color: var(--text-accent); letter-spacing: 0.22em; }
        
        .cinzel { font-family: 'Cinzel', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ================= SECTION 1 : INTRODUCTION ================= */}
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
              Expertise
            </p>
          </div>

          <div className="fade-up d2">
            <h1
              className="text-5xl md:text-7xl font-black cinzel leading-tight tracking-tight transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
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
                Compétences
              </span>
            </h1>
          </div>

          <div className="fade-up d3 glass-panel rounded-3xl p-8 sm:p-12 text-center mt-6 w-full">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl icon-badge mb-6 mx-auto">
              🎓
            </div>
            <h2
              className="text-2xl font-bold mb-8 cinzel tracking-widest uppercase transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Réflexion sur mes acquis
            </h2>
            <div
              className="space-y-6 dm-sans text-lg leading-relaxed max-w-3xl mx-auto font-medium transition-colors duration-500"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Mon cursus en BUT Informatique (parcours Réalisation
                d'applications : conception, développement, validation - RACA)
                et mon stage au laboratoire AGIR m'ont appris à{" "}
                <strong style={{ color: "var(--text-main)" }}>
                  concevoir, développer et valider
                </strong>{" "}
                des solutions concrètes. J'y ai forgé une solide{" "}
                <strong
                  className="font-bold transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  rigueur algorithmique
                </strong>
                , du code scientifique complexe de PyRED jusqu'à la création
                d'architectures web robustes (MVC, API REST). Au-delà de la
                technique, j'ai cultivé mon{" "}
                <strong style={{ color: "var(--text-main)" }}>
                  adaptation
                </strong>{" "}
                par l'auto-formation et affiné ma{" "}
                <strong
                  className="font-bold transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  communication interdisciplinaire
                </strong>
                , indispensable pour traduire les besoins des différents
                interlocuteurs et collaborer efficacement en méthode Agile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION : AXES DU PROGRAMME NATIONAL ================= */}
      <section className="relative pb-16 px-6 sm:px-12 z-10 fade-up d3">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 mb-12 glass-panel p-10 rounded-3xl mx-auto max-w-3xl">
            <h2
              className="text-3xl font-black tracking-tight cinzel transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Compétences du{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                Programme National
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Réaliser",
                sub: "Développer des applications",
                desc: "Mon parcours en BUT m'a permis de concrétiser des architectures logicielles et web robustes à travers mes différentes SAE.",
              },
              {
                title: "Optimiser",
                sub: "Améliorer les performances",
                desc: "J'ai appris à optimiser des algorithmes complexes, tant lors de mon stage au laboratoire AGIR qu'en concevant des solutions performantes en BUT.",
              },
              {
                title: "Administrer",
                sub: "Systèmes complexes",
                desc: "Mon stage en recherche a consolidé ma capacité à administrer des environnements de développement sous Linux Ubuntu.",
              },
              {
                title: "Gérer",
                sub: "Données & Information",
                desc: "Mes projets en BUT m'ont formé à la modélisation de bases de données relationnelles rigoureuses pour sécuriser l'information.",
              },
              {
                title: "Conduire",
                sub: "Piloter un projet",
                desc: "La méthodologie Agile apprise en BUT m'a permis de piloter des projets de la phase de maquettage au suivi technique.",
              },
              {
                title: "Collaborer",
                sub: "Travailler en équipe",
                desc: "J'ai forgé mon esprit d'équipe sur des projets à six développeurs en BUT et par mes échanges avec les chercheurs en stage.",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="glass-panel p-8 rounded-3xl flex flex-col h-full text-center sm:text-left"
              >
                <h3
                  className="text-xl font-black uppercase tracking-widest cinzel mb-1 transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  {skill.title}
                </h3>
                <h4
                  className="text-[10px] font-bold uppercase tracking-widest cinzel mb-4 transition-colors duration-500"
                  style={{ color: "var(--text-main)", opacity: 0.7 }}
                >
                  {skill.sub}
                </h4>
                <p
                  className="text-[14px] leading-relaxed dm-sans font-medium transition-colors duration-500"
                  style={{ color: "var(--text-muted)" }}
                >
                  {skill.desc}
                </p>
              </div>
            ))}
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

      {/* ================= SECTION 2 : HARD SKILLS (TECH) ================= */}
      <section className="py-8 px-6 sm:px-12 relative z-10 fade-up d4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 glass-panel p-10 rounded-3xl mx-auto max-w-3xl">
            <h2
              className="text-3xl font-black tracking-tight cinzel transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Langages,{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                Frameworks
              </span>{" "}
              & Concepts
            </h2>
            <p
              className="dm-sans font-medium text-lg transition-colors duration-500"
              style={{ color: "var(--text-muted)" }}
            >
              Mes expertises techniques par domaine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Backend */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-8 transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--text-accent)" }}
                ></span>{" "}
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Python", "Java", "C", "C++", "C#", "PHP"].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 glass-inner rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                    style={{ color: "var(--text-main)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend / Web */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-8 transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--text-accent)" }}
                ></span>{" "}
                Frontend / Web
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "HTML/CSS",
                  "Bootstrap",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 glass-inner rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                    style={{ color: "var(--text-main)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Données & Architecture */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-8 transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--text-accent)" }}
                ></span>{" "}
                Données & Architecture
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "MySQL",
                  "Oracle",
                  "JSON",
                  "API REST",
                  "Architecture MVC",
                  "Windows Forms",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 glass-inner rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                    style={{ color: "var(--text-main)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col items-center text-center md:col-span-3 lg:col-span-3">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-4 transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--text-accent)" }}
                ></span>{" "}
                Langues
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span
                  className="px-6 py-3 glass-inner rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                  style={{ color: "var(--text-main)" }}
                >
                  Anglais : B1+{" "}
                  <span
                    className="italic font-medium ml-2 transition-colors duration-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    (Usage technique & scientifique)
                  </span>
                </span>
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

      {/* ================= SECTION 3 : OUTILS & SOFT SKILLS ================= */}
      <section className="pb-24 px-6 sm:px-12 relative z-10 fade-up d5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2
              className="text-3xl font-black cinzel tracking-tight text-center lg:text-left transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Outils & Systèmes
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">📋</span> Méthodes & Gestion
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Trello", "Méthodologies Agiles / Scrum"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">🚀</span> Version Control & DevOps
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Git", "GitHub", "Docker"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">💻</span> IDE & Testing
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {[
                    "VS Code",
                    "IntelliJ",
                    "Visual Studio",
                    "Android Studio",
                    "Postman",
                    "Testim",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">🖥️</span> Systèmes d'exploitation
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Linux Ubuntu", "Windows", "VirtualBox"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">🎨</span> Design & Bureautique
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Figma", "Canva", "Balsamiq", "Suite Office"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                        style={{ color: "var(--text-main)" }}
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2
              className="text-3xl font-black cinzel tracking-tight text-center lg:text-left transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Soft Skills
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Communication interdisciplinaire",
                  desc: "Capacité à traduire des concepts scientifiques complexes en solutions logicielles.",
                },
                {
                  title: "Adaptabilité & Autonomie",
                  desc: "Apprentissage de nouveaux langages et outils en fonction des besoins.",
                },
                {
                  title: "Rigueur Algorithmique",
                  desc: "Production d'un code propre, testé et optimisé pour des environnements exigeants.",
                },
                {
                  title: "Esprit d'équipe & Collaboration",
                  desc: "Capacité à se coordonner et à répartir efficacement les tâches au sein d'un groupe de développeurs.",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="p-8 glass-panel rounded-3xl flex flex-col items-center text-center justify-center h-full"
                >
                  <h4
                    className="font-bold mb-3 cinzel text-[16px] transition-colors duration-500"
                    style={{ color: "var(--text-main)" }}
                  >
                    {skill.title}
                  </h4>
                  <p
                    className="text-[15px] leading-relaxed dm-sans font-medium transition-colors duration-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {skill.desc}
                  </p>
                </div>
              ))}
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
            Section Suivante
          </p>
          <Link
            href="/contact"
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
            Me contacter
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
