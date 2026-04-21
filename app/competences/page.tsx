import Link from "next/link";

export default function Competences() {
  return (
    <div className="flex flex-col bg-white overflow-hidden text-gray-800 min-h-screen">
      {/* ================= SECTION 1 : INTRODUCTION & RÉFLEXION ================= */}
      <section className="relative pt-24 pb-16 px-6 sm:px-12 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto z-10 space-y-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              Mes <br />
              <span className="text-purple-600 relative inline-block">
                Compétences.
                <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/50 -z-10 -rotate-1"></span>
              </span>
            </h1>
          </div>

          <div className="p-8 sm:p-10 bg-white/60 backdrop-blur-xl border border-purple-100 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Réflexion sur mes acquis
            </h2>
            <div className="prose prose-purple text-gray-600 max-w-none space-y-4 font-medium">
              <p>
                Mon parcours en BUT Informatique, enrichi par mon stage en
                recherche et développement au laboratoire AGIR, m'a permis de
                transformer mes connaissances théoriques en de véritables
                réflexions techniques.
              </p>
              <p>
                L'un de mes principaux acquis est la{" "}
                <strong>rigueur algorithmique</strong> : le développement sur le
                logiciel PyRED m'a appris l'importance d'un code fiable et
                reproductible, indispensable dans le calcul scientifique. J'ai
                également consolidé ma capacité d'
                <strong>adaptation</strong> en m'auto-formant au langage Python
                pour répondre à des besoins immédiats en entreprise. Enfin, j'ai
                développé une réelle aptitude à la{" "}
                <strong>communication interdisciplinaire</strong>, essentielle
                pour traduire des besoins métiers complexes en solutions
                logicielles performantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 : HARD SKILLS (TECH) ================= */}
      <section className="py-20 bg-gray-50/50 px-6 sm:px-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Titre de transition et rappel */}
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Langages & <span className="text-purple-600">Frameworks</span>
            </h2>
            <p className="text-gray-500 font-medium">
              Panorama de mes expertises techniques classées par niveau de
              maîtrise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Niveau Avancé */}
            <div className="space-y-6">
              <h3 className="text-sm font-black text-purple-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>{" "}
                Niveau Avancé
              </h3>
              <div className="flex flex-wrap gap-3">
                {["HTML/CSS", "Bootstrap"].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-white border border-purple-100 rounded-2xl shadow-sm font-bold text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Niveau Intermédiaire */}
            <div className="space-y-6">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>{" "}
                Niveau Intermédiaire
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "PHP", "C", "C++", "C#", "MySQL"].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm font-bold text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Niveau Débutant / En cours */}
            <div className="space-y-6">
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-200 rounded-full"></span>{" "}
                Débutant / En cours
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Oracle", "Java", "React", "Next.js", "Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-5 py-3 bg-white/50 border border-dashed border-gray-200 rounded-2xl font-bold text-gray-500"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>
            {/* --- MISE À JOUR : SECTION 2 (Ajout des langues) --- */}
            {/* Tu peux rajouter ce bloc juste après le niveau Débutant */}
            <div className="space-y-6">
              <h3 className="text-sm font-black text-purple-600 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>{" "}
                Langues
              </h3>
              <div className="flex flex-wrap gap-3">
  <span className="px-5 py-3 bg-white border border-purple-100 rounded-2xl shadow-sm font-bold text-gray-700">
    Anglais : B1+ (Usage technique & scientifique)
  </span>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 : OUTILS & SOFT SKILLS ================= */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Outils & Systèmes */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900">
              Outils & Systèmes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>🛠️</span> Dev & Gestion
                </h4>
                <ul className="text-sm text-gray-500 space-y-1 font-medium">
                  <li>Git, GitHub, Trello</li>
                  <li>Méthodologies Agiles (Scrum-lite)</li>
                  <li>VS Code, IntelliJ, Visual Studio</li>
                </ul>
              </div>
              <div className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>💻</span> OS & Design
                </h4>
                <ul className="text-sm text-gray-500 space-y-1 font-medium">
                  <li>Linux Ubuntu, Windows</li>
                  <li>Suite Office, Canva</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900">Soft Skills</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Communication interdisciplinaire",
                  desc: "Capacité à traduire des concepts scientifiques complexes en solutions logicielles.",
                },
                {
                  title: "Adaptabilité & Autonomie",
                  desc: "Apprentissage rapide de nouveaux langages et outils en fonction des besoins.",
                },
                {
                  title: "Rigueur Algorithmique",
                  desc: "Production d'un code propre, testé et optimisé pour des environnements exigeants.",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="p-6 bg-purple-50 rounded-[2rem] border border-purple-100"
                >
                  <h4 className="font-bold text-purple-900 mb-1">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-purple-700 leading-relaxed font-medium">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - Vers la page Contact */}
      <section className="py-20 text-center bg-purple-50/50 border-t border-purple-100">
        <Link
          href="/contact"
          className="group text-gray-900 font-black text-xl hover:text-purple-600 transition-colors"
        >
          Me contacter ou consulter mes références{" "}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </div>
  );
}
