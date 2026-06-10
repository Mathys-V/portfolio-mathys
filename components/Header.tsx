"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ============================================================
// HEADER — Thème Saisons (Glassmorphism, Mémoire & Auto-Détection)
// ============================================================

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // On initialise avec l'été pour éviter les erreurs d'hydratation côté serveur
  const [activeTheme, setActiveTheme] = useState("theme-summer");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "ACCUEIL" },
    { href: "/a-propos", label: "À PROPOS" },
    { href: "/realisations", label: "RÉALISATIONS" },
    { href: "/competences", label: "COMPÉTENCES" },
    { href: "/contact", label: "CONTACT" },
  ];

  const seasons = [
    { id: "theme-summer", icon: "☀️", title: "Été" },
    { id: "theme-autumn", icon: "🍂", title: "Automne" },
    { id: "theme-winter", icon: "❄️", title: "Hiver" },
    { id: "theme-spring", icon: "🌸", title: "Printemps" },
  ];

  // Fonction pour déterminer la saison actuelle en fonction du mois
  const getDefaultTheme = () => {
    const month = new Date().getMonth(); // Retourne un chiffre de 0 (Jan) à 11 (Déc)

    // Décembre (11), Janvier (0), Février (1)
    if (month === 11 || month === 0 || month === 1) return "theme-winter";
    // Mars (2), Avril (3), Mai (4)
    if (month >= 2 && month <= 4) return "theme-spring";
    // Juin (5), Juillet (6), Août (7)
    if (month >= 5 && month <= 7) return "theme-summer";
    // Septembre (8), Octobre (9), Novembre (10)
    if (month >= 8 && month <= 10) return "theme-autumn";

    return "theme-summer"; // Sécurité
  };

  // 1. Récupération du thème au chargement (Mémoire > Auto-détection)
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      // Si l'utilisateur a déjà fait un choix, on le respecte
      setActiveTheme(savedTheme);
    } else {
      // Sinon, on met le thème de la saison actuelle !
      setActiveTheme(getDefaultTheme());
    }
  }, []);

  // 2. Application du thème + Sauvegarde à chaque changement
  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-summer",
      "theme-autumn",
      "theme-winter",
      "theme-spring",
    );
    document.documentElement.classList.add(activeTheme);

    // On sauvegarde le choix pour la prochaine visite
    localStorage.setItem("portfolio-theme", activeTheme);
  }, [activeTheme]);

  // Détecter le scroll pour l'effet transparent -> glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* ── CONFIGURATION DES TEINTES DE LA NAV PAR SAISON ── */
        :root, .theme-summer {
          --nav-bg: rgba(186, 230, 253, 0.35);
          --nav-border: rgba(255, 255, 255, 0.6);
          --text-accent: #0284c7;
        }

        .theme-autumn {
          --nav-bg: rgba(254, 215, 170, 0.35);
          --nav-border: rgba(251, 146, 60, 0.4);
          --text-accent: #c2410c;
        }

        .theme-winter {
          --nav-bg: rgba(241, 245, 249, 0.4);
          --nav-border: rgba(255, 255, 255, 0.8);
          --text-accent: #1d4ed8;
        }

        .theme-spring {
          --nav-bg: rgba(252, 231, 243, 0.35);
          --nav-border: rgba(244, 114, 182, 0.4);
          --text-accent: #db2777;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--text-accent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s ease;
        }

        .nav-link:hover::after, .nav-link.active::after {
          transform: scaleX(1);
        }

        .season-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .season-btn.active {
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: scale(1.15);
        }

        .mobile-menu-enter {
          animation: menuOpen 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes menuOpen {
          from { opacity: 0; transform: scale(0.9) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <header
        className="fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out"
        style={{
          background: isScrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: isScrolled
            ? "1px solid var(--nav-border)"
            : "1px solid transparent",
          boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.05)" : "none",
        }}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-500 flex items-center justify-between relative ${isScrolled ? "h-20 pb-0" : "h-32 pb-8"}`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-1 group"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span className="text-lg sm:text-xl font-black tracking-widest uppercase transition-colors duration-500 text-slate-900">
              Mathys
            </span>
            <span
              className="text-lg sm:text-xl font-bold tracking-widest uppercase transition-colors duration-500"
              style={{ color: "var(--text-accent)" }}
            >
              Vanheulle
            </span>
          </Link>

          {/* Navigation Bureau */}
          <nav className="hidden lg:flex items-center gap-8 font-bold tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link relative transition-colors duration-300 ${isActive ? "active" : ""}`}
                  style={{
                    color: isActive ? "var(--text-accent)" : "#1e293b",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "11.5px",
                    letterSpacing: "0.16em",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Sélecteur de Saisons */}
            <div
              className={`flex items-center gap-1 transition-all duration-500 rounded-full p-1.5 ml-4 ${isScrolled ? "bg-white/40 border border-white/60 shadow-inner backdrop-blur-md" : "bg-transparent"}`}
            >
              {seasons.map((season) => (
                <button
                  key={season.id}
                  onClick={() => setActiveTheme(season.id)}
                  className={`season-btn w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    activeTheme === season.id
                      ? "active grayscale-0"
                      : "grayscale opacity-50 hover:opacity-100 hover:grayscale-0"
                  }`}
                >
                  {season.icon}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile UI */}
          <div className="flex items-center gap-4 lg:hidden">
            <div
              className={`flex items-center transition-all duration-500 rounded-full p-1 ${isScrolled ? "bg-white/40 border border-white/60 backdrop-blur-md" : "bg-transparent"}`}
            >
              {seasons.map((season) => (
                <button
                  key={season.id}
                  onClick={() => setActiveTheme(season.id)}
                  className={`season-btn w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                    activeTheme === season.id
                      ? "active grayscale-0"
                      : "grayscale opacity-50"
                  }`}
                >
                  {season.icon}
                </button>
              ))}
            </div>

            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <div className="w-6 h-5 relative">
                <span
                  className={`absolute left-0 w-full h-0.5 transition-all duration-300 rounded-full ${isOpen ? "top-2 rotate-45" : "top-0"}`}
                  style={{ background: "#0f172a" }}
                />
                <span
                  className={`absolute left-0 top-2 w-full h-0.5 transition-all duration-300 rounded-full ${isOpen ? "opacity-0" : "opacity-100"}`}
                  style={{ background: "#0f172a" }}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 transition-all duration-300 rounded-full ${isOpen ? "top-2 -rotate-45" : "top-4"}`}
                  style={{ background: "#0f172a" }}
                />
              </div>
            </button>
          </div>

          {/* Menu Mobile Déroulant */}
          {isOpen && (
            <div
              className="mobile-menu-enter absolute top-full right-4 mt-3 w-64 rounded-3xl p-6 z-50 lg:hidden shadow-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                border: "1px solid var(--nav-border)",
              }}
            >
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 font-bold"
                    style={{
                      color:
                        pathname === link.href
                          ? "var(--text-accent)"
                          : "#1e293b",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "13px",
                      letterSpacing: "0.15em",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background:
                          pathname === link.href
                            ? "var(--text-accent)"
                            : "transparent",
                      }}
                    />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
