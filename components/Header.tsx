import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Nom (Lien vers l'accueil) */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-gray-900"
        >
          Mathys Vanheulle<span className="text-purple-600">.</span>
        </Link>

        {/* Navigation Bureau */}
        <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-500 tracking-wide">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            ACCUEIL
          </Link>
          <Link
            href="/a-propos"
            className="hover:text-purple-600 transition-colors"
          >
            À PROPOS
          </Link>
          <Link
            href="/realisations"
            className="hover:text-purple-600 transition-colors"
          >
            RÉALISATIONS
          </Link>
          <Link
            href="/competences"
            className="hover:text-purple-600 transition-colors"
          >
            COMPÉTENCES
          </Link>
          <Link
            href="/contact"
            className="hover:text-purple-600 transition-colors"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
