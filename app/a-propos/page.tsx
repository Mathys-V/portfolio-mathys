import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col bg-white overflow-hidden text-gray-800">
      {/* ================= SECTION 1 : INTRODUCTION (Option Édito) ================= */}
      <section className="relative pt-24 pb-16 px-6 sm:px-12 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto z-10 text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              À propos <br />
              <span className="text-purple-600 relative inline-block">
                de moi.
                <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/50 -z-10 -rotate-1"></span>
              </span>
            </h1>
          </div>

          <div className="p-8 sm:p-10 bg-white/60 backdrop-blur-xl border border-purple-100 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Actuellement étudiant en 2ème année de BUT Informatique à l'IUT
              d'Amiens, mon approche du développement est avant tout concrète et
              analytique. Je suis convaincu que derrière chaque ligne de code se
              cache une opportunité de résoudre un problème réel, que ce soit
              pour faciliter le travail d'une équipe ou faire avancer un projet
              de recherche scientifique.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 : ADN PROFESSIONNEL & PERSONNEL ================= */}
      <section className="py-24 bg-gray-50/50 px-6 sm:px-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Titre de Section */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-4">
              Mon ADN <span className="text-purple-600">Professionnel</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg">
              Ce qui me définit techniquement et humainement, illustré par mes
              expériences.
            </p>
          </div>

          {/* --- SOUS-SECTION 1 : LES VALEURS PRO (80%) --- */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="p-2 bg-purple-100 text-purple-600 rounded-xl text-xl">
                💼
              </span>
              Mes Valeurs Techniques
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Carte : Rigueur */}
              <div className="bg-white p-8 rounded-[2rem] border border-purple-50 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-2xl border border-gray-100">
                    🔍
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Analyse & Rigueur
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                  J'aborde le code avec une méthode scientifique : analyser
                  l'existant, formuler une hypothèse, tester et valider. Je
                  m'attache à comprendre l'architecture globale d'un projet
                  avant de modifier la moindre instruction.
                </p>
                {/* Exemple concret */}
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100/50">
                  <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span>🎯</span> Exemple Concret
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    Au Laboratoire AGIR, j'ai plongé dans le code "legacy" du
                    logiciel PyRED. Face à un programme massif sans
                    documentation, j'ai dû décortiquer la logique algorithmique
                    étape par étape pour y intégrer ma solution en toute
                    sécurité.
                  </p>
                </div>
              </div>

              {/* Carte : Communication */}
              <div className="bg-white p-8 rounded-[2rem] border border-purple-50 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-2xl border border-gray-100">
                    🤝
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Communication Interdisciplinaire
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                  Le développement ne se fait pas en vase clos. J'accorde une
                  importance majeure au dialogue avec les experts métiers pour
                  m'assurer que le code répond exactement à la réalité du
                  terrain et aux besoins des utilisateurs.
                </p>
                {/* Exemple concret */}
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100/50">
                  <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span>🎯</span> Exemple Concret
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    J'ai travaillé en binôme avec mon tuteur, expert en chimie
                    organique. Mon rôle a été d'écouter et d'assimiler des
                    concepts chimiques très pointus (fusions moléculaires,
                    groupes partants) pour les traduire en un algorithme Python
                    fonctionnel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- SOUS-SECTION 2 : LA PERSONNALITÉ (20%) --- */}
          <div className="space-y-10 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="p-2 bg-purple-100 text-purple-600 rounded-xl text-xl">
                👤
              </span>
              Ma Personnalité
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Carte 1 : Faiblesse (Pleine largeur pour un bel impact visuel) */}
              <div className="md:col-span-2 bg-gray-900 text-white p-8 rounded-[2rem] shadow-lg relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 flex-1">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">💡</span> Le piège de l'autonomie
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    J'ai longtemps cru que réussir seul était la preuve absolue
                    de compétence. J'avais donc tendance à m'isoler pour tenter
                    de résoudre un bug ou une problématique par mes propres
                    moyens.
                  </p>
                </div>

                <div className="relative z-10 w-full md:w-1/2 bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  <p className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span>📈</span> La leçon apprise
                  </p>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    J'ai réalisé qu'un dialogue technique continu et le fait de
                    réfléchir à plusieurs permettaient d'avancer beaucoup plus
                    efficacement. Aujourd'hui, je sais que la communication fait
                    gagner un temps précieux à toute l'équipe.
                  </p>
                </div>
              </div>

              {/* Carte 2 : Mes Valeurs */}
              <div className="bg-white p-8 rounded-[2rem] border border-purple-50 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-2xl border border-purple-100">
                    🌱
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Mes Valeurs
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mon engagement repose sur une curiosité proactive et une
                  éthique environnementale forte. Lors de mon stage au
                  laboratoire AGIR, j'ai par exemple appris le langage Python en
                  totale autonomie pour être immédiatement opérationnel. Cette
                  soif d'apprendre s'exprime aujourd'hui à travers
                  l'éco-conception : je suis convaincu que l'ingénierie
                  logicielle doit viser la sobriété numérique en produisant un
                  code optimisé, performant et respectueux de notre
                  environnement.
                </p>
              </div>

              {/* Carte 3 : Passions (Lecture / Musique) */}
              <div className="bg-white p-8 rounded-[2rem] border border-purple-50 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-2xl border border-purple-100">
                    🎧
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Entre deux lignes de code
                  </h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Mon temps libre est rythmé par la culture de l'imaginaire : je
                  suis un grand lecteur de Mangas et Light Novels, très souvent
                  accompagné de musique Rock ou J-Pop. Plonger dans ces univers
                  narratifs et sonores me permet de déconnecter totalement, pour
                  revenir sur mes projets avec un regard neuf et une créativité
                  rechargée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 : LE PARCOURS (TIMELINE) ================= */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Mon Parcours
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Une progression constante vers le développement logiciel.
            </p>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-100 before:to-transparent">
            {/* Stage R&D */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                🚀
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:border-purple-200 transition-colors">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-gray-900">
                    Stage Développeur Python
                  </div>
                  <time className="font-mono text-xs text-purple-500 font-bold uppercase">
                    Janv-Mars 2026
                  </time>
                </div>
                <div className="text-sm text-gray-500 font-semibold mb-2 italic">
                  Laboratoire AGIR (Amiens)
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Analyse de code et développement de nouvelles fonctionnalités
                  sur le logiciel PyRED. Optimisation d'algorithmes et
                  traduction de concepts chimiques via une collaboration
                  interdisciplinaire.
                </p>
              </div>
            </div>

            {/* BUT Info */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                🎓
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-gray-900">
                    BUT Informatique (RACA)
                  </div>
                  <time className="font-mono text-xs text-gray-400 font-bold uppercase">
                    Depuis septembre 2024
                  </time>
                </div>
                <div className="text-sm text-gray-500 font-semibold mb-2">
                  IUT d'Amiens - UPJV
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Parcours Réalisation d'applications : conception,
                  développement, validation.
                </p>
              </div>
            </div>

            {/* Bac */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white text-gray-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                📜
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold text-gray-900">
                    Baccalauréat Général
                  </div>
                  <time className="font-mono text-xs text-gray-400 font-bold uppercase">
                    2024
                  </time>
                </div>
                <div className="text-sm text-gray-500 font-semibold mb-2">
                  Mention Bien - Spé Maths & NSI
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lycée Robert de Luzarches, Amiens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - Vers la page Réalisations */}
      <section className="py-20 text-center bg-purple-50/50 border-t border-purple-100">
        <Link
          href="/realisations"
          className="group text-gray-900 font-black text-xl hover:text-purple-600 transition-colors"
        >
          Découvrir mes réalisations techniques{" "}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </div>
  );
}
