import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-white overflow-hidden text-gray-800">
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 sm:px-12 py-20 overflow-hidden">
        {/* Effet "Wow" : Orbes lumineux en arrière-plan */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none"></div>

        {/* CORRECTION : flex-col (photo en haut sur mobile) et lg:flex-row (photo à gauche sur bureau) */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full z-10">
          {/* ================= 1. LA PHOTO (Désormais à gauche) ================= */}
          {/* Légèrement agrandie sur desktop (lg:w-[420px]) pour assumer le côté "Visage humain d'abord" */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] flex-shrink-0 group">
            {/* L'inclinaison passe à -rotate-3 pour pointer visuellement vers le texte à droite */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-100 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 shadow-inner"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-[6px] border-white/50 backdrop-blur-sm shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
              <Image
                src="/img/accueil/profile.jpg"
                alt="Mathys Vanheulle"
                fill
                className="object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                priority
              />
            </div>
          </div>

          {/* ================= 2. LE TEXTE (Désormais à droite) ================= */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-purple-100 text-purple-600 text-sm font-bold tracking-wide shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Développeur Full Stack orienté Back-end
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-[1.1]">
                Inventer <br />
                <span className="text-purple-600 relative inline-block">
                  l'Avenir.
                  {/* Effet surligneur */}
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/50 -z-10 -rotate-1"></span>
                </span>
              </h1>

              {/* Objectif pro clair et direct */}
              <div className="inline-block px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium shadow-sm">
                🎯 À la recherche d'un stage de 14 semaines{" "}
                <br className="hidden sm:block" />
                <span className="font-bold text-gray-900">
                  de Mars à Juin 2027
                </span>{" "}
                en développement logiciel.
              </div>

              {/* Citation */}
              <figure className="relative pl-6 border-l-4 border-purple-400 max-w-xl mx-auto lg:mx-0 py-2">
                <blockquote className="text-xl font-medium text-gray-600 italic leading-relaxed">
                  "The best way to predict the future is to invent it."
                  <br />
                  <span className="text-base text-gray-500 font-normal">
                    (La meilleure façon de prédire l'avenir, c'est de
                    l'inventer.)
                  </span>
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-gray-900 uppercase tracking-widest">
                  — Alan Kay{" "}
                  <span className="text-gray-400 font-normal normal-case tracking-normal">
                    | Pionnier de la programmation orientée objet
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="pt-6">
              <Link
                href="/a-propos"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl overflow-hidden shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_20px_-10px_rgba(147,51,234,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600 to-indigo-500 transition-all duration-[400ms] ease-out group-hover:w-full"></div>
                <span className="relative">Découvrir mon profil</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
