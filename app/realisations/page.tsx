import Image from "next/image";
import Link from "next/link";

export default function Realisations() {
  return (
    <div className="flex flex-col bg-white overflow-hidden text-gray-800 min-h-screen">
      {/* ================= HEADER DE LA PAGE ================= */}
      <section className="relative pt-24 pb-16 px-6 sm:px-12 text-center lg:text-left border-b border-gray-50 overflow-hidden">
        {/* Orbe de fond pour la cohérence avec le reste du site */}
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto z-10">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            Mes <br />
            <span className="text-purple-600 relative inline-block">
              Réalisations.
              {/* Le trait de soulignement stylisé */}
              <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/50 -z-10 -rotate-1"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed mt-6">
            Une immersion dans mes projets les plus marquants, de l'optimisation
            algorithmique pour la recherche internationale au développement
            collaboratif d'outils de mobilité durable.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-20 px-6 sm:px-12 space-y-32">
        {/* ================= SECTION 1 : PyRED  ================= */}
        <section className="space-y-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest rounded-lg">
                    R&D Scientifique
                  </span>
                  <span className="text-gray-400 text-sm font-semibold">
                    Stage • Labo AGIR (UPJV)
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  Adapter PyRED aux enjeux de la <br />
                  <span className="text-purple-600">
                    recherche moléculaire mondiale.
                  </span>
                </h2>
              </div>

              <div className="prose prose-purple text-gray-600 max-w-none space-y-6 text-lg leading-relaxed">
                <p>
                  Le logiciel PyRED est une référence dans la génération
                  automatique de champs de forces pour la modélisation
                  moléculaire, accessible aux chercheurs du monde entier via le
                  serveur{" "}
                  <a
                    href="https://upjv.q4md-forcefieldtools.org/REDServer-Development/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline font-semibold italic"
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
                  Ma mission ne consistait pas à refondre l'outil, mais à
                  étendre ses capacités pour répondre à ce besoin scientifique
                  spécifique. J'ai conçu et implémenté un algorithme de
                  raffinement capable de scanner les fragments générés,
                  d'identifier les anomalies topologiques (atomes "volants" ou
                  liaisons rompues) et de restaurer l'intégrité chimique de la
                  molécule de manière autonome.
                </p>

                <p>
                  Ce travail, réalisé dans un environnement Linux sous Python
                  2.7, permet aujourd'hui d'automatiser la modélisation de ces
                  nouveaux candidats-médicaments, évitant ainsi des corrections
                  manuelles chronophages pour les chercheurs.
                </p>
              </div>

              {/* Blocs d'impact et de validation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>🌍</span> Impact
                  </h4>
                  <p className="text-sm text-purple-700">
                    Algorithme intégré au serveur mondial et co-auteur d'une
                    future publication internationale avec l'University of
                    Lethbridge au Canada.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span>✅</span> Validation & Intégration
                  </h4>
                  <p className="text-sm text-gray-600">
                    La solution est désormais pleinement intégrée au code source
                    de PyRED, garantissant la viabilité chimique des fragments
                    générés de manière autonome.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne Image avec description en dessous */}
            <div className="lg:w-2/5 flex flex-col gap-4">
              <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-inner group">
                <Image
                  src="/img/realisations/pyred-schema.png"
                  alt="Schéma topologique PyRED"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Description déplacée sous l'image pour la clarté visuelle */}
              <div className="p-4 bg-gray-50 rounded-xl text-xs font-medium text-gray-500 leading-relaxed border border-gray-100">
                Représentation du processus de génération des 6 fragments. Image
                adaptée du tutoriel PyRED (travaux de Fan Wang), accessible à
                l'adresse :
                <a
                  href="https://upjv.q4md-forcefieldtools.org/Tutorial/Tutorial-4.php"
                  className="text-purple-600 hover:underline block mt-1"
                >
                  upjv.q4md-forcefieldtools.org/Tutorial/Tutorial-4.php
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2 : MONCOVOITJV (SAE) ================= */}
        <section className="space-y-12">
          <div className="flex flex-col lg:flex-row-reverse gap-16">
            {/* On reste en text-left simple, sans modificateur lg: */}
            <div className="flex-1 space-y-8 text-left">
              <div className="space-y-4">
                {/* On aligne les badges au début (gauche) systématiquement */}
                <div className="flex items-center justify-start gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-widest rounded-lg">
                    SAE • Développement Full Stack
                  </span>
                  <span className="text-gray-400 text-sm font-semibold">
                    Équipe W • IUT d'Amiens
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  monCovoitJV : Répondre aux défis de la <br />
                  <span className="text-purple-600 font-extrabold italic">
                    mobilité inter-campus.
                  </span>
                </h2>
              </div>

              {/* prose est déjà text-left par défaut, on s'assure qu'aucun lg:text-right ne traîne */}
              <div className="prose prose-purple text-gray-600 max-w-none space-y-6 text-lg leading-relaxed">
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
                  Malgré des délais serrés, notre organisation via <i>Trello</i>{" "}
                  et l'adoption d'une méthode agile adaptée (sprint reviews
                  hebdomadaires) nous a permis de livrer un produit complet,
                  incluant un guide utilisateur détaillé et une documentation
                  technique rigoureuse pour l'administration et la modération du
                  site.
                </p>
              </div>

              {/* Preuves monCovoitJV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
                <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <span>🛠️</span> Stack Technique
                  </h4>
                  <p className="text-sm text-purple-700">
                    Architecture MVC (PHP), PDO, MySQL. Gestion de projet via
                    Trello et{" "}
                    <a
                      href="https://github.com/Mathys-V/sae-covoiturage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-purple-900 font-bold"
                    >
                      Git
                    </a>
                    .
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span>📄</span> Documents
                  </h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      Code sur{" "}
                      <a
                        href="https://github.com/Mathys-V/sae-covoiturage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:underline font-semibold"
                      >
                        GitHub
                      </a>
                    </p>
                    <div className="flex flex-col gap-1">
                      <a
                        href="/docs/Documentation-Technique-Equipe-W.pdf"
                        target="_blank"
                        className="text-[11px] hover:text-purple-600 underline decoration-purple-200"
                      >
                        • Documentation technique (PDF)
                      </a>
                      <a
                        href="/docs/Guide-utilisateur-Equipe-W.pdf"
                        target="_blank"
                        className="text-[11px] hover:text-purple-600 underline decoration-purple-200"
                      >
                        • Guide utilisateur (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image container */}
<div className="lg:w-1/2 flex flex-col gap-6 relative z-10">
  {/* On passe en format 16:9 (aspect-video) parfait pour les screenshots desktop */}
  <div className="relative aspect-video bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl group">
    <Image
      src="/img/realisations/moncovoitJV.png"
      alt="Page d'accueil de la plateforme monCovoitJV"
      fill
      /* Ajout de object-top pour être sûr de voir le haut du site */
      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
    />
    
    {/* Effet d'assombrissement amélioré au survol */}
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/10 to-transparent flex items-end p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-purple-300 text-xs font-black uppercase tracking-[0.2em] mb-2">
          Interface Web
        </p>
        <p className="text-white text-xl font-bold tracking-wide">
          Page d'Accueil
        </p>
      </div>
    </div>
  </div>
</div>
          </div>
        </section>
      </div>

      {/* CTA FINAL - Vers la page Compétences */}
      <section className="py-20 text-center bg-purple-50/50 border-t border-purple-100">
        <Link
          href="/competences"
          className="group text-gray-900 font-black text-xl hover:text-purple-600 transition-colors"
        >
          Consulter mes compétences et acquis techniques{" "}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </div>
  );
}
