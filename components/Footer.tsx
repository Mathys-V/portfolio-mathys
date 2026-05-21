// ============================================================
// FOOTER — Thème Astronomie
// ============================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full mt-auto relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #03091a 0%, #020817 100%)",
        borderTop: "1px solid rgba(201, 184, 130, 0.4)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.4)",
      }}
    >
      {/* ── Styles pour les animations du footer ── */}
      <style>{`
        /* Hover glow sur les liens sociaux */
        .social-link {
          position: relative;
          transition: all 0.3s ease;
          color: rgba(226, 232, 240, 0.9);
        }
        .social-link:hover {
          color: #c9b882;
          text-shadow: 0 0 12px rgba(201, 184, 130, 0.7), 0 0 24px rgba(201, 184, 130, 0.4);
        }

        /* Animation de scintillement des étoiles de la constellation */
        .star-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .star-twinkle:nth-child(2) { animation-delay: 0.8s; }
        .star-twinkle:nth-child(3) { animation-delay: 1.6s; }
        .star-twinkle:nth-child(4) { animation-delay: 2.4s; }
        .star-twinkle:nth-child(5) { animation-delay: 0.4s; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.6; r: 2; }
          50%      { opacity: 1;   r: 3; }
        }

        /* Lueur centrale de la constellation */
        .constellation-glow {
          filter: drop-shadow(0 0 8px rgba(201, 184, 130, 0.6));
        }
      `}</style>

      {/* ── Constellation décorative SVG : Les Pléiades ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-20 pointer-events-none">
        <svg
          viewBox="0 0 400 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full constellation-glow"
          aria-hidden="true"
        >
          {/* Liaisons */}
          <line
            x1="170"
            y1="28"
            x2="205"
            y2="20"
            stroke="rgba(201,184,130,0.3)"
            strokeWidth="0.5"
          />
          <line
            x1="205"
            y1="20"
            x2="235"
            y2="35"
            stroke="rgba(201,184,130,0.3)"
            strokeWidth="0.5"
          />
          <line
            x1="235"
            y1="35"
            x2="215"
            y2="55"
            stroke="rgba(201,184,130,0.3)"
            strokeWidth="0.5"
          />
          <line
            x1="215"
            y1="55"
            x2="180"
            y2="52"
            stroke="rgba(201,184,130,0.3)"
            strokeWidth="0.5"
          />
          <line
            x1="180"
            y1="52"
            x2="170"
            y2="28"
            stroke="rgba(201,184,130,0.3)"
            strokeWidth="0.5"
          />
          <line
            x1="205"
            y1="20"
            x2="255"
            y2="18"
            stroke="rgba(201,184,130,0.2)"
            strokeWidth="0.5"
          />

          {/* Étoiles principales */}
          <circle
            className="star-twinkle"
            cx="170"
            cy="28"
            r="2.2"
            fill="#e2e8f0"
          />
          <circle
            className="star-twinkle"
            cx="205"
            cy="20"
            r="3"
            fill="#c9b882"
          />
          <circle
            className="star-twinkle"
            cx="235"
            cy="35"
            r="2.5"
            fill="#e2e8f0"
          />
          <circle
            className="star-twinkle"
            cx="215"
            cy="55"
            r="2.2"
            fill="#c9b882"
          />
          <circle
            className="star-twinkle"
            cx="180"
            cy="52"
            r="2"
            fill="#e2e8f0"
          />
          <circle
            className="star-twinkle"
            cx="255"
            cy="18"
            r="1.8"
            fill="#c9b882"
          />

          {/* Petites étoiles secondaires */}
          <circle cx="150" cy="42" r="1" fill="#e2e8f0" opacity="0.6" />
          <circle cx="245" cy="60" r="1" fill="#e2e8f0" opacity="0.5" />
          <circle cx="275" cy="40" r="1" fill="#c9b882" opacity="0.6" />
        </svg>
      </div>

      {/* ── Contenu principal du footer ── */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* Citation */}
        <div className="text-center mb-10">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-2 font-bold"
            style={{
              color: "rgba(201,184,130,0.9)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            ✦ &nbsp; The Pleiades Above Us &nbsp; ✦
          </p>

          <p
            className="text-xs font-medium"
            style={{
              color: "rgba(226,232,240,0.85)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Comme les Pléiades dans la nuit, chaque étoile brille davantage
            ensemble.
          </p>
        </div>

        {/* Séparateur doré */}
        <div
          className="mx-auto mb-10"
          style={{
            width: "120px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,184,130,0.9), transparent)",
          }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 w-full">
          {/* Bloc de Gauche : Copyright */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <p
              className="text-xs tracking-widest font-bold text-center md:text-left"
              style={{
                color: "rgba(226,232,240,0.8)",
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

            <span style={{ color: "rgba(201,184,130,0.7)", fontSize: "8px" }}>
              ✦
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
          </div>

          {/* Bloc de Droite : Mention */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <p
              className="text-xs font-medium text-center md:text-right"
              style={{
                color: "rgba(226,232,240,0.75)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
              }}
            >
              Crafted with <span style={{ color: "#c9b882" }}>✦</span> & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
