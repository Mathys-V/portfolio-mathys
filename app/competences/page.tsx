// ============================================================
// PAGE COMPÉTENCES — Thème Astronomie (Contraste & UI Harmonisée)
// ============================================================

import Link from "next/link";

export default function Competences() {
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

      {/* ================= SECTION 1 : INTRODUCTION & RÉFLEXION ================= */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 z-10">
        <div className="relative max-w-4xl mx-auto text-center space-y-10">
          <div className="fade-up d1 space-y-6">
            <p
              className="cinzel tracking-[0.4em] text-xs uppercase font-bold"
              style={{ color: "rgba(201,184,130,0.85)" }}
            >
              ✦ &nbsp; Expertise &nbsp; ✦
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
                Compétences
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

          <div className="fade-up d2 cosmic-card p-8 sm:p-14 rounded-[2.5rem] flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl icon-badge mb-6 shadow-lg shadow-[#c9b882]/10">
              🎓
            </div>
            <h2 className="text-2xl font-bold text-[#ffffff] mb-8 cinzel tracking-widest uppercase">
              Réflexion sur mes acquis
            </h2>
            <div
              className="space-y-6 dm-sans text-lg leading-relaxed max-w-3xl font-normal"
              style={{ color: "rgba(226,232,240,0.95)" }}
            >
              <p>
                Mon parcours en BUT Informatique (parcours RACA), couplé à mon
                stage au laboratoire AGIR, m'a permis d'assimiler les
                compétences clés du Programme National :{" "}
                <strong>concevoir, développer et valider</strong> des solutions
                concrètes.
              </p>
              <p>
                J'ai particulièrement forgé ma{" "}
                <strong className="text-[#c9b882] font-semibold">
                  rigueur algorithmique
                </strong>{" "}
                sur le code scientifique exigeant de PyRED. Une compétence
                élargie lors de la ressource
                <i> Architecture Logicielle</i>, à travers la conception d'une
                plateforme E-commerce robuste exploitant le modèle MVC et la
                création d'API REST.
              </p>
              <p>
                J'ai également cultivé ma capacité d'
                <strong className="text-[#c9b882] font-semibold">
                  adaptation
                </strong>{" "}
                en m'auto-formant à Python. Enfin, la{" "}
                <strong className="text-[#c9b882] font-semibold">
                  communication interdisciplinaire
                </strong>{" "}
                s'est avérée essentielle, tant pour traduire les besoins des
                chercheurs (Laboratoire AGIR) que pour collaborer efficacement
                en méthode Agile sur <i>monCovoitJV</i>.
              </p>
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

      {/* ================= SECTION 2 : HARD SKILLS (TECH) ================= */}
      <section className="py-8 px-6 sm:px-12 relative z-10 fade-up d4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Titre de transition et rappel */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-black text-[#ffffff] tracking-tight cinzel">
              Langages, <span className="text-[#c9b882]">Frameworks</span> &
              Concepts
            </h2>
            <p
              className="dm-sans font-normal"
              style={{ color: "rgba(226,232,240,0.85)" }}
            >
              Panorama de mes expertises techniques classées par niveau de
              maîtrise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Niveau Avancé */}
            <div className="cosmic-card p-8 rounded-[2rem] flex flex-col items-center text-center">
              <h3 className="text-[12px] font-bold text-[#c9b882] uppercase tracking-widest flex items-center gap-3 cinzel mb-8">
                <span className="w-2 h-2 bg-[#c9b882] rounded-full shadow-[0_0_8px_rgba(201,184,130,0.8)]"></span>{" "}
                Niveau Avancé
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["HTML/CSS", "Bootstrap", "PHP", "Architecture MVC"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-[#c9b882]/10 border border-[#c9b882]/40 rounded-xl font-bold text-[#c9b882] dm-sans tracking-wide"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Niveau Intermédiaire */}
            <div className="cosmic-card p-8 rounded-[2rem] flex flex-col items-center text-center">
              <h3 className="text-[12px] font-bold text-slate-100 uppercase tracking-widest flex items-center gap-3 cinzel mb-8">
                <span className="w-2 h-2 bg-slate-200 rounded-full shadow-[0_0_8px_rgba(226,232,240,0.6)]"></span>{" "}
                Niveau Intermédiaire
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Python",
                  "Windows Forms",
                  "JSON",
                  "C",
                  "C++",
                  "C#",
                  "MySQL",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 bg-white/10 border border-white/20 rounded-xl font-bold text-slate-100 dm-sans tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Niveau Débutant / En cours */}
            <div className="cosmic-card p-8 rounded-[2rem] flex flex-col items-center text-center">
              <h3 className="text-[12px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-3 cinzel mb-8">
                <span className="w-2 h-2 bg-slate-500 rounded-full"></span>{" "}
                Débutant / En cours
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Oracle",

                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "API REST",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 border border-dashed border-slate-500/60 rounded-xl font-bold text-slate-300 dm-sans tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="cosmic-card p-6 rounded-[2rem] flex flex-col items-center text-center md:col-span-3 lg:col-span-3">
              <h3 className="text-[12px] font-bold text-[#c9b882] uppercase tracking-widest flex items-center gap-3 cinzel mb-4">
                <span className="w-2 h-2 bg-[#c9b882] rounded-full shadow-[0_0_8px_rgba(201,184,130,0.8)]"></span>{" "}
                Langues
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-6 py-3 bg-[#c9b882]/10 border border-[#c9b882]/30 rounded-xl font-bold text-[#ffffff] dm-sans tracking-wide">
                  Anglais : B1+{" "}
                  <span className="text-slate-300 italic font-medium ml-2">
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

      {/* ================= SECTION 3 : OUTILS & SOFT SKILLS ================= */}
      <section className="pb-24 px-6 sm:px-12 relative z-10 fade-up d5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ── Outils & Systèmes ── */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-[#ffffff] cinzel tracking-tight text-center lg:text-left">
              Outils & Systèmes
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {/* 1. Gestion & Méthodes */}
              <div className="p-8 cosmic-card rounded-[2rem] flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="font-bold text-[#c9b882] mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase">
                  <span className="text-xl">📋</span> Méthodes & Gestion
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Trello", "Méthodologies Agiles / Scrum"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-slate-100 dm-sans"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2. Version Control & DevOps */}
              <div className="p-8 cosmic-card rounded-[2rem] flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="font-bold text-[#c9b882] mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase">
                  <span className="text-xl">🚀</span> Version Control & DevOps
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Git", "GitHub", "Docker"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-slate-100 dm-sans"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Environnements (IDE) & Tests */}
              <div className="p-8 cosmic-card rounded-[2rem] flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="font-bold text-[#c9b882] mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase">
                  <span className="text-xl">💻</span> IDE & Testing
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {[
                    "VS Code",
                    "IntelliJ",
                    "Visual Studio",
                    "Android Studio",
                    "Postman",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-slate-100 dm-sans"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Systèmes d'exploitation*/}
              <div className="p-8 cosmic-card rounded-[2rem] flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="font-bold text-[#c9b882] mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase">
                  <span className="text-xl">🖥️</span> Systèmes d'exploitation
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Linux Ubuntu", "Windows"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-slate-100 dm-sans"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design & Bureautique  */}
              <div className="p-8 cosmic-card rounded-[2rem] flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="font-bold text-[#c9b882] mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase">
                  <span className="text-xl">🎨</span> Design & Bureautique
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Figma", "Canva", "Balsamiq", "Suite Office"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium text-slate-100 dm-sans"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── Soft Skills ── */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-[#ffffff] cinzel tracking-tight text-center lg:text-left">
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
                  className="p-8 cosmic-card rounded-[2rem] flex flex-col items-center text-center justify-center h-full"
                >
                  <h4 className="font-bold text-slate-100 mb-3 cinzel text-[16px]">
                    {skill.title}
                  </h4>
                  <p
                    className="text-[15px] leading-relaxed dm-sans font-normal"
                    style={{ color: "rgba(226,232,240,0.85)" }}
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
          href="/contact"
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
          Me contacter
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
