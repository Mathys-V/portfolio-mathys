"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ============================================================
// HEADER — Thème Astronomie (Haute Lisibilité)
// ============================================================

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "ACCUEIL" },
    { href: "/a-propos", label: "À PROPOS" },
    { href: "/realisations", label: "RÉALISATIONS" },
    { href: "/competences", label: "COMPÉTENCES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* ── Styles injectés pour les animations non-couvertes par Tailwind ── */}
      <style>{`
        /* Orbite animée sous les liens de nav (Expansion depuis le centre) */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9b882, transparent);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.4s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }

        /* Point lumineux (étoile) qui apparaît au centre */
        .nav-link::before {
          content: '✦';
          position: absolute;
          bottom: -11px;
          left: calc(50% - 4.5px);
          font-size: 9px;
          color: #c9b882;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.3s ease, transform 0.4s ease;
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          opacity: 1;
          transform: scale(1);
        }

        /* Lueur dorée sur le logo au hover */
        .logo-glow:hover {
          text-shadow:
            0 0 20px rgba(201, 184, 130, 0.6),
            0 0 40px rgba(201, 184, 130, 0.3);
        }

        /* Animation d'ouverture du menu mobile */
        .mobile-menu-enter {
          animation: menuOpen 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes menuOpen {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-8px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <header
        className="sticky top-0 z-50 w-full"
        style={{
          background: "rgba(2, 8, 23, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(201, 184, 130, 0.15)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* ── Logo ── */}
          <Link
            href="/"
            onClick={closeMenu}
            className="logo-glow transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {/* Petite étoile décorative */}
            <span style={{ color: "#c9b882", fontSize: "10px" }}>✦</span>

            <span
              className="text-xl font-bold tracking-widest uppercase"
              style={{
                color: "#ffffff",
                letterSpacing: "0.15em",
              }}
            >
              Mathys Vanheulle
            </span>

            {/* Point doré final */}
            <span
              style={{
                color: "#c9b882",
                fontSize: "24px",
                lineHeight: 1,
              }}
            >
              .
            </span>
          </Link>

          {/* ── Navigation Bureau ── */}
          <nav className="hidden md:flex gap-10 font-bold tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link relative transition-colors duration-300 ${
                    isActive ? "active" : ""
                  }`}
                  style={{
                    color: isActive ? "#c9b882" : "rgba(226, 232, 240, 0.85)",
                    fontFamily: "'Cinzel', serif",
                    fontSize: "11.5px",
                    letterSpacing: "0.16em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color = "#ffffff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLElement).style.color =
                        "rgba(226, 232, 240, 0.85)";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Bouton Hamburger Mobile (Symétrie mathématique) ── */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none flex items-center justify-center relative z-50"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute left-0 w-full h-0.5 transition-all duration-300 ease-out rounded-full ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
                style={{ background: "#c9b882" }}
              />
              <span
                className={`absolute left-0 top-2 w-full h-0.5 transition-all duration-300 ease-out rounded-full ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
                style={{ background: "#c9b882" }}
              />
              <span
                className={`absolute left-0 w-full h-0.5 transition-all duration-300 ease-out rounded-full ${
                  isOpen ? "top-2 -rotate-45" : "top-4"
                }`}
                style={{ background: "#c9b882" }}
              />
            </div>
          </button>

          {/* ── Menu Mobile ── */}
          {isOpen && (
            <div
              className="mobile-menu-enter absolute top-full right-6 mt-3 w-64 rounded-2xl p-8 z-50 md:hidden"
              style={{
                background: "rgba(2, 8, 23, 0.97)",
                border: "1px solid rgba(201, 184, 130, 0.2)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(201,184,130,0.1)",
              }}
            >
              {/* Étoiles décoratives dans le menu */}
              <div
                className="absolute top-3 right-4 text-xs"
                style={{
                  color: "#c9b882",
                  opacity: 0.6,
                }}
              >
                ✦ ✧ ✦
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 transition-all duration-300 group hover:text-[#ffffff]"
                      style={{
                        color: isActive
                          ? "#c9b882"
                          : "rgba(226, 232, 240, 0.85)",
                        fontFamily: "'Cinzel', serif",
                        fontSize: "12px",
                        letterSpacing: "0.18em",
                      }}
                    >
                      {/* Tiret doré animé */}
                      <span
                        className="transition-all duration-300 group-hover:w-4"
                        style={{
                          display: "inline-block",
                          width: isActive ? "16px" : "8px",
                          height: "1px",
                          background: "#c9b882",
                          flexShrink: 0,
                        }}
                      />
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
