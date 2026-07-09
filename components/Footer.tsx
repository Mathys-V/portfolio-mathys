"use client";

// ============================================================
// FOOTER — Thème Saisons (Glassmorphism & Minimaliste)
// ============================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full mt-auto relative overflow-hidden transition-all duration-700 ease-in-out"
      style={{
        background: "var(--nav-bg, rgba(255, 255, 255, 0.25))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid var(--nav-border, rgba(255, 255, 255, 0.6))",
        boxShadow: "0 -8px 32px rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* ── Styles pour les animations du footer ── */}
      <style>{`
        /* Hover sur les liens sociaux adaptatif à la saison */
        .social-link {
          position: relative;
          transition: all 0.3s ease;
          color: var(--text-muted, #334155);
        }
        .social-link:hover {
          color: var(--text-accent, #0ea5e9);
          transform: translateY(-2px);
          filter: drop-shadow(0 0 8px var(--text-accent, rgba(14, 165, 233, 0.4)));
        }
      `}</style>

      {/* ── Contenu principal du footer ── */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-10">
        {/* Citation adaptative */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-2 font-bold transition-colors duration-500"
            style={{
              color: "var(--text-accent, #0284c7)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            Au fil des saisons
          </p>

          <p
            className="text-sm font-medium transition-colors duration-500"
            style={{
              color: "var(--text-muted, #334155)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Le code, comme la nature, évolue et se perfectionne à chaque cycle.
          </p>
        </div>

        {/* Séparateur coloré selon la saison */}
        <div
          className="mx-auto mb-10 transition-colors duration-500"
          style={{
            width: "120px",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, var(--text-accent, #0ea5e9), transparent)",
            opacity: 0.5,
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 w-full">
          {/* Bloc de Gauche : Copyright */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <p
              className="text-xs tracking-widest font-bold text-center md:text-left transition-colors duration-500"
              style={{
                color: "var(--text-main, #0f172a)",
                fontFamily: "'Cinzel', serif",
                fontSize: "10px",
                letterSpacing: "0.15em",
              }}
            >
              © {currentYear} &nbsp;·&nbsp; MATHYS VANHEULLE
            </p>
          </div>

          {/* Bloc Central : Liens sociaux */}
          <div className="md:w-1/3 flex justify-center items-center gap-8">
            <a
              href="https://linkedin.com/in/mathys-vanheulle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center gap-2 font-bold"
              aria-label="LinkedIn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                }}
              >
                LINKEDIN
              </span>
            </a>

            <span
              className="transition-colors duration-500"
              style={{
                color: "var(--text-accent, #0ea5e9)",
                fontSize: "12px",
                opacity: 0.6,
              }}
            >
              •
            </span>

            <a
              href="https://github.com/Mathys-V"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center gap-2 font-bold"
              aria-label="GitHub"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                }}
              >
                GITHUB
              </span>
            </a>

            <span
              className="transition-colors duration-500"
              style={{
                color: "var(--text-accent, #0ea5e9)",
                fontSize: "12px",
                opacity: 0.6,
              }}
            >
              •
            </span>

            <a
              href="mailto:mathys.vanheulle@gmail.com"
              className="social-link flex items-center gap-2 font-bold"
              aria-label="Email"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 6l10 7 10-7" />
              </svg>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                }}
              >
                EMAIL
              </span>
            </a>
          </div>

          {/* Bloc de Droite : Mention */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <p
              className="text-xs font-medium text-center md:text-right transition-colors duration-500"
              style={{
                color: "var(--text-muted, #334155)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
              }}
            >
              Crafted with{" "}
              <span
                style={{
                  color: "var(--text-accent, #0ea5e9)",
                  fontWeight: "bold",
                }}
              >
                passion
              </span>{" "}
              & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
