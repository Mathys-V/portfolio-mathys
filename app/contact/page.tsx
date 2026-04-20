import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col bg-white overflow-hidden text-gray-800 min-h-screen">
      {/* ================= SECTION 1 : HEADER ================= */}
      <section className="relative pt-24 pb-16 px-6 sm:px-12 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-4xl mx-auto z-10 text-center space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              Me <br />
              <span className="text-purple-600 relative inline-block">
                Contacter.
                <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200/50 -z-10 -rotate-1"></span>
              </span>
            </h1>
          </div>

          <div className="p-8 sm:p-10 bg-white/60 backdrop-blur-xl border border-purple-100 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-left">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Actuellement à la recherche d'un stage en développement logiciel
              de 14 semaines de Mars à Juin 2027, je suis ouvert à toute
              proposition ou échange sur mes projets. N'hésitez pas à me
              solliciter via mes réseaux professionnels ou par courriel.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 : COORDONNÉES & RÉFÉRENT ================= */}
      <section className="py-20 bg-gray-50/50 px-6 sm:px-12 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mes informations de contact */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900">
              Mes coordonnées
            </h2>
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:mathys.vanheulle@gmail.com"
                className="flex items-center gap-6 p-6 bg-white border border-purple-50 rounded-[2rem] shadow-sm hover:border-purple-200 transition-all group"
              >
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    mathys.vanheulle@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mathys-vanheulle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white border border-purple-50 rounded-[2rem] shadow-sm hover:border-purple-200 transition-all group"
              >
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  🔗
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">
                    LinkedIn
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    linkedin.com/in/mathys-vanheulle
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mathys-V"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white border border-purple-50 rounded-[2rem] shadow-sm hover:border-purple-200 transition-all group"
              >
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  💻
                </div>
                <div>
                  <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">
                    GitHub
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    github.com/Mathys-V
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Mon référent */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900">Référent</h2>
            <div className="p-8 bg-purple-600 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>

              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">
                    M. François-Yves DUPRADEAU
                  </h3>
                  <p className="text-purple-200 font-medium mt-1 italic">
                    Enseignant-chercheur en chimie organique-modélisation
                    moléculaire au laboratoire AGIR de l'UPJV.
                  </p>
                </div>

                <p className="text-purple-100 leading-relaxed">
                  Monsieur Dupradeau a supervisé mon stage de recherche et
                  développement au sein de l'équipe AGIR de l'UPJV. Son
                  expertise a été déterminante dans ma montée en compétences sur
                  le projet PyRED.
                </p>

                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs font-bold text-purple-300 uppercase tracking-widest mb-2">
                    Contact professionnel
                  </p>
                  <a
                    href="mailto:fyd@u-picardie.fr"
                    className="text-lg font-bold hover:text-purple-200 transition-colors underline decoration-2 underline-offset-4"
                  >
                    fyd@u-picardie.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - Retour à l'accueil */}
      <section className="py-20 text-center bg-purple-50/50 border-t border-purple-100">
        <Link
          href="/"
          className="group text-gray-900 font-black text-xl hover:text-purple-600 transition-colors"
        >
          Retourner à l'accueil{" "}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            ←
          </span>
        </Link>
      </section>
    </div>
  );
}
