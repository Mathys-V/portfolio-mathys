"use client";

// ============================================================
// PAGE COMPÉTENCES — Thème Saisons (Glassmorphism & UX Améliorée)
// ============================================================

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Competences() {
  // État pour gérer l'ouverture des semestres (null si aucun, sinon l'ID du semestre)
  const [openSemester, setOpenSemester] = useState<string | null>(null);

  const toggleSemester = (semester: string) => {
    setOpenSemester(openSemester === semester ? null : semester);
  };

  const butProgram = [
    {
      semester: "BUT 1 - Semestre 1",
      courses: [
        {
          id: "R1.01",
          title: "Initiation au développement",
          desc: "Apprentissage des algorithmes fondamentaux et des bases de la programmation.",
          keywords: [
            "Algorithmique",
            "Structures de contrôle",
            "Qualité de codage",
            "Typage",
          ],
        },
        {
          id: "R1.02",
          title: "Développement d'interfaces web",
          desc: "Création de documents numériques sur le web en réponse à des besoins clients.",
          keywords: ["IHM", "Front web", "Maquettage"],
        },
        {
          id: "R1.03",
          title: "Introduction à l'architecture des ordinateurs",
          desc: "Découverte de la structure et des composants matériels et logiciels internes d'un ordinateur.",
          keywords: ["Architecture", "Codage", "Binaire"],
        },
        {
          id: "R1.04",
          title: "Introduction aux systèmes d'exploitation",
          desc: "Compréhension du rôle, des composants et du fonctionnement des systèmes d'exploitation.",
          keywords: [
            "Système d'exploitation",
            "Langage de commande",
            "Installation système",
            "Gestion utilisateurs",
          ],
        },
        {
          id: "R1.05",
          title: "Introduction aux bases de données et SQL",
          desc: "Sensibilisation à l'importance des bases de données dans une entreprise, et initiation à leur conception et requêtage.",
          keywords: [
            "Données",
            "Modèle conceptuel",
            "Modèle relationnel",
            "SQL",
          ],
        },
        {
          id: "R1.06",
          title: "Mathématiques discrètes",
          desc: "Mise en place des outils mathématiques nécessaires à la formalisation en informatique.",
          keywords: [
            "Logique",
            "Boole",
            "Congruence",
            "Relations",
            "Ensembles",
          ],
        },
        {
          id: "R1.07",
          title: "Outils mathématiques fondamentaux",
          desc: "Remise à niveau des bases mathématiques essentielles pour la programmation.",
          keywords: ["Matrices", "Polynômes", "Fonctions"],
        },
        {
          id: "R1.08",
          title: "Introduction à la gestion des organisations",
          desc: "Compréhension des enjeux stratégiques et de la transformation numérique des entreprises.",
          keywords: [
            "Organisation",
            "Stratégie",
            "Transformation numérique",
            "Systèmes d'information",
          ],
        },
        {
          id: "R1.09",
          title: "Introduction à l'économie durable et numérique",
          desc: "Découverte des défis économiques et de l'économie responsable face à l'essor technologique.",
          keywords: [
            "Acteur",
            "Marché",
            "Données",
            "Développement durable",
            "Numérique responsable",
          ],
        },
        {
          id: "R1.10",
          title: "Anglais",
          desc: "Initiation à l'anglais de spécialité informatique et acquisition du vocabulaire technique de base.",
          keywords: [
            "Vocabulaire informatique",
            "Présentation orale",
            "Compréhension écrite",
          ],
        },
        {
          id: "R1.11",
          title: "Bases de la communication",
          desc: "Acquisition des fondamentaux pour communiquer efficacement, recueillir des besoins clients et restituer l'information.",
          keywords: [
            "Résumer",
            "Synthétiser",
            "Analyser",
            "Prendre la parole en public",
            "Document numérique",
          ],
        },
        {
          id: "R1.12",
          title: "Projet professionnel et personnel",
          desc: "Identification du savoir-être et du savoir-faire pour apprendre à définir ses propres compétences au travers de ses expériences.",
          keywords: [
            "Approche par compétence",
            "Apprentissages critiques",
            "Composantes essentielles",
          ],
        },
      ],
    },
    {
      semester: "BUT 1 - Semestre 2",
      courses: [
        {
          id: "R2.01",
          title: "Développement orienté objets",
          desc: "Initiation au développement orienté objets et compréhension de ses paradigmes.",
          keywords: ["Développement orienté objets"],
        },
        {
          id: "R2.02",
          title: "Développement d'applications avec IHM",
          desc: "Initiation au développement d'applications avec une interface utilisateur graphique et à la programmation événementielle.",
          keywords: ["Événements", "IHM", "Séparation Vue/Modèle"],
        },
        {
          id: "R2.03",
          title: "Qualité de développement",
          desc: "Familiarisation avec la mécanique de tests et l'utilisation d'outils de gestion de versions.",
          keywords: ["Qualité", "Test", "Gestion de version"],
        },
        {
          id: "R2.04",
          title: "Communication et fonctionnement bas niveau",
          desc: "Compréhension du fonctionnement des couches systèmes et réseaux à bas niveau.",
          keywords: [
            "Protocoles",
            "Pointeurs",
            "Interruptions",
            "Langage bas niveau",
          ],
        },
        {
          id: "R2.05",
          title: "Introduction aux services réseaux",
          desc: "Appréhension des notions de service et d'architecture client-serveur avec installation de services simples.",
          keywords: [
            "Service réseau",
            "Client-serveur",
            "Installation",
            "Configuration",
          ],
        },
        {
          id: "R2.06",
          title: "Exploitation d'une base de données",
          desc: "Initiation à l'administration d'une base de données et à la restitution des données.",
          keywords: ["SQL", "Administration BD", "Visualisation"],
        },
        {
          id: "R2.07",
          title: "Graphes",
          desc: "Découverte des graphes et de leur utilisation à travers des algorithmes simples et des situations courantes de programmation.",
          keywords: ["Graphes", "Algorithmes", "Modélisation", "Arbres"],
        },
        {
          id: "R2.08",
          title: "Outils numériques pour les stats descriptives",
          desc: "Mise en place des notions et outils mathématiques pour l'étude, l'analyse et la visualisation des données.",
          keywords: ["Visualisation", "Analyse de données"],
        },
        {
          id: "R2.09",
          title: "Méthodes numériques",
          desc: "Appréhension des notions de suites pour une meilleure compréhension de la programmation et de la récursivité.",
          keywords: ["Suites", "Calcul scientifique", "Récurrence"],
        },
        {
          id: "R2.10",
          title: "Intro. à la gestion des systèmes d'information",
          desc: "Découverte de la gestion comptable et financière et de son intégration dans la gestion de projet.",
          keywords: [
            "Compte de résultat",
            "Bilan",
            "Tableaux de bord",
            "Projet informatique",
            "Prise de décision",
          ],
        },
        {
          id: "R2.11",
          title: "Introduction au droit",
          desc: "Découverte du monde professionnel sous l'angle juridique, avec une introduction au droit du numérique et des contrats.",
          keywords: [
            "Régimes de responsabilités",
            "Régimes probatoires",
            "Contrats",
          ],
        },
        {
          id: "R2.12",
          title: "Anglais",
          desc: "Familiarisation avec le monde de l'entreprise et les métiers de l'informatique dans un contexte international.",
          keywords: ["Entreprise", "Communication", "Métiers", "International"],
        },
        {
          id: "R2.13",
          title: "Communication technique",
          desc: "Approfondissement des techniques et outils de la communication écrite et visuelle en milieu professionnel.",
          keywords: ["Rédaction", "Ergonomie", "Charte graphique"],
        },
        {
          id: "R2.14",
          title: "Projet professionnel et personnel",
          desc: "Découverte des métiers, des entreprises du territoire et organisation de la recherche de stages.",
          keywords: ["Recherches"],
        },
      ],
    },
    {
      semester: "BUT 2 - Semestre 3 (Parcours RACA)",
      courses: [
        {
          id: "R3.01",
          title: "Développement web",
          desc: "Poursuite de l'apprentissage de la programmation autour des technologies web en situation de développement à partir de spécifications.",
          keywords: ["Programmation web", "Spécifications", "Sécurité"],
        },
        {
          id: "R3.02",
          title: "Développement efficace",
          desc: "Renforcement de l'apprentissage de l'algorithmique afin d'amener vers une efficacité de développement.",
          keywords: ["Structure de données", "Performance"],
        },
        {
          id: "R3.03",
          title: "Analyse",
          desc: "Consolidation des capacités d'analyse pour comprendre et formaliser les exigences d'un client.",
          keywords: [
            "Analyse des exigences",
            "Cas d'utilisation",
            "Scénarios",
            "Spécification",
          ],
        },
        {
          id: "R3.04",
          title: "Qualité de développement",
          desc: "Approfondissement de la qualité de développement, de l'architecture logicielle et de la restructuration de code.",
          keywords: [
            "Patrons de conception",
            "Gestion de version",
            "Documentation",
          ],
        },
        {
          id: "R3.05",
          title: "Programmation système",
          desc: "Compréhension de la structure d'une application client-serveur et des mécanismes bas niveaux mis en œuvre dans une application multitâches.",
          keywords: ["Mécanismes bas niveaux", "Processus", "Client-serveur"],
        },
        {
          id: "R3.06",
          title: "Architecture des réseaux",
          desc: "Compréhension de l'organisation, du fonctionnement et des différentes technologies d'un réseau informatique.",
          keywords: [
            "Couches protocolaires",
            "Interconnexion",
            "Services réseaux",
          ],
        },
        {
          id: "R3.07",
          title: "SQL dans un langage de programmation",
          desc: "Étude des différents aspects de l'intégration du langage SQL dans les langages de programmation pour un usage applicatif.",
          keywords: [
            "SQL",
            "SQL intégré",
            "Trigger",
            "Procédures stockées",
            "Optimisation de requêtes",
          ],
        },
        {
          id: "R3.08",
          title: "Probabilités",
          desc: "Appréhension du calcul des probabilités et de leurs applications.",
          keywords: ["Lois de probabilité", "Applications des probabilités"],
        },
        {
          id: "R3.09",
          title: "Cryptographie et sécurité",
          desc: "Introduction aux diverses techniques employées en cryptographie pour sécuriser les données et les communications.",
          keywords: [
            "Cryptographie",
            "Arithmétique",
            "Chiffrement",
            "Contrôle de parité",
          ],
        },
        {
          id: "R3.10",
          title: "Management des systèmes d'information",
          desc: "Approfondissement de la gestion de projet via les démarches agiles, l'évolution du management et l'éthique du numérique.",
          keywords: [
            "Méthodes Agiles",
            "Systèmes d'information",
            "Processus",
            "Gestion de projet",
          ],
        },
        {
          id: "R3.11",
          title: "Droit des contrats et du numérique",
          desc: "Approfondissement du monde professionnel sous l'angle juridique, notamment la protection de la vie privée et la cybersécurité.",
          keywords: [
            "Contrat informatique",
            "Vie privée",
            "Création numérique",
            "Cybersécurité",
          ],
        },
        {
          id: "R3.12",
          title: "Anglais",
          desc: "Préparation à la vie professionnelle et renforcement des compétences interculturelles et de communication à l'international.",
          keywords: [
            "Communication pro",
            "Candidature",
            "Compétences interculturelles",
          ],
        },
        {
          id: "R3.13",
          title: "Communication technique",
          desc: "Compréhension des attendus du monde professionnel pour s'y insérer, produire un discours de spécialiste et optimiser sa recherche d'emploi.",
          keywords: ["Recherche d'emploi", "Recrutement", "Vulgarisation"],
        },
        {
          id: "R3.14",
          title: "Projet personnel et professionnel",
          desc: "Accompagnement dans le choix du parcours, la construction du projet professionnel et la préparation aux recrutements.",
          keywords: ["E-réputation", "Insertion pro"],
        },
      ],
    },
    {
      semester: "BUT 2 - Semestre 4 (Parcours RACA)",
      courses: [
        {
          id: "R4.01",
          title: "Architecture logicielle",
          desc: "Présentation des composants de la programmation utilisables dans plusieurs domaines, avec une initiation au développement de services web.",
          keywords: ["E-Commerce", "Architecture MVC", "API REST"],
        },
        {
          id: "R4.02",
          title: "Qualité de développement",
          desc: "Approfondissement de la production de tests et identification des critères de faisabilité d'un projet informatique.",
          keywords: ["Tests", "Tests de non régression", "Tests d'intégration"],
        },
        {
          id: "R4.03",
          title: "Qualité et au-delà du relationnel",
          desc: "Étude des avantages et limites de la normalisation dans le modèle relationnel et découverte de nouveaux paradigmes de modélisation.",
          keywords: ["Normalisation", "Modélisation", "NoSQL"],
        },
        {
          id: "R4.04",
          title: "Méthodes d'optimisation",
          desc: "Étude des méthodes et heuristiques permettant d'optimiser une solution à un problème donné.",
          keywords: ["Apprentissage", "Recherche opérationnelle"],
        },
        {
          id: "R4.05",
          title: "Anglais",
          desc: "Apprentissage de la restitution écrite et orale d'un travail en entreprise et réflexion sur les enjeux éthiques de la profession.",
          keywords: ["Techniques de présentation", "Éthique & IA"],
        },
        {
          id: "R4.06",
          title: "Communication interne",
          desc: "Transmission de l'information auprès de publics professionnels et académiques, à l'écrit comme à l'oral, via des supports de synthèse.",
          keywords: [
            "Gestion des conflits",
            "Rédaction technique",
            "Expression orale",
          ],
        },
        {
          id: "R4.07",
          title: "Projet personnel et professionnel",
          desc: "Préparation au stage de deuxième année par l'adoption d'une démarche réflexive et la détermination du savoir-être attendu.",
          keywords: ["Savoir-être", "Bilan de stage", "Portfolio"],
        },
        {
          id: "R4.Real.08",
          title: "Virtualisation",
          desc: "Compréhension des principes et enjeux de la virtualisation en informatique et déploiement de solutions associées.",
          keywords: ["Virtualisation", "Conteneurs", "Hyperviseur"],
        },
        {
          id: "R4.Real.09",
          title: "Management avancé des SI",
          desc: "Approfondissement des enjeux, des dimensions stratégiques et de l'intégration des systèmes d'information.",
          keywords: [
            "Système d'information",
            "Stratégie",
            "Performance",
            "Progiciel",
          ],
        },
        {
          id: "R4.Real.10",
          title: "Complément web",
          desc: "Poursuite de l'apprentissage des techniques de développement web pour atteindre des capacités full-stack avec une mise en œuvre de l'accessibilité.",
          keywords: [
            "Développement web",
            "Full-stack",
            "Ergonomie",
            "Accessibilité",
          ],
        },
        {
          id: "R4.Real.11",
          title: "Développement mobile",
          desc: "Découverte des techniques de développement et des problématiques propres aux environnements mobiles.",
          keywords: ["Programmation mobile", "Android Studio", "UX mobile"],
        },
        {
          id: "R4.Real.12",
          title: "Automates et Langages",
          desc: "Appréhension des techniques liées aux automates (langages rationnels, expressions régulières) utilisées en programmation.",
          keywords: ["Automates", "Langages", "Modélisation"],
        },
      ],
    },
  ];

  return (
    <div
      className="flex flex-col overflow-x-hidden min-h-screen relative transition-colors duration-1000"
      style={{
        backgroundColor: "var(--bg-fallback)",
        color: "var(--text-main)",
      }}
    >
      {/* ══════════════════════════════════════════════════
          IMAGES DE FOND MULTI-SAISONS
      ══════════════════════════════════════════════════ */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/img/themes/summer-beach.webp"
          alt="Paysage d'été"
          fill
          priority
          sizes="100vw"
          className="object-cover bg-image bg-summer"
        />
        <Image
          src="/img/themes/autumn-forest.webp"
          alt="Paysage d'automne"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-autumn"
        />
        <Image
          src="/img/themes/winter.webp"
          alt="Paysage d'hiver"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-winter"
        />
        <Image
          src="/img/themes/spring.webp"
          alt="Paysage de printemps"
          fill
          sizes="100vw"
          className="object-cover bg-image bg-spring"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── CONFIGURATION DES COMPOSANTS PAR SAISON ── */
        :root, .theme-summer {
          --bg-fallback: #f0f9ff;
          --text-main: #0f172a;
          --text-muted: #334155;
          --text-accent: #0284c7;
          --text-accent-glow: rgba(2, 132, 199, 0.4);
          --gradient-start: #0284c7;
          --gradient-end: #0369a1;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-autumn {
          --bg-fallback: #fff7ed;
          --text-main: #431407;
          --text-muted: #7c2d12;
          --text-accent: #c2410c;
          --text-accent-glow: rgba(194, 65, 12, 0.4);
          --gradient-start: #c2410c;
          --gradient-end: #7c2d12;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        .theme-winter {
          --bg-fallback: #f8fafc;
          --text-main: #0f172a;
          --text-muted: #1e3a8a;
          --text-accent: #1d4ed8;
          --text-accent-glow: rgba(29, 78, 216, 0.4);
          --gradient-start: #1e40af;
          --gradient-end: #1e3a8a;
          --glass-bg: rgba(255, 255, 255, 0.85);
          --glass-border: rgba(255, 255, 255, 1);
        }

        .theme-spring {
          --bg-fallback: #fdf2f8;
          --text-main: #4c0519;
          --text-muted: #831843;
          --text-accent: #db2777;
          --text-accent-glow: rgba(219, 39, 119, 0.4);
          --gradient-start: #db2777;
          --gradient-end: #9d174d;
          --glass-bg: rgba(255, 255, 255, 0.80);
          --glass-border: rgba(255, 255, 255, 0.9);
        }

        /* ── GESTION DYNAMIQUE DES FONDS D'ÉCRAN ── */
        .bg-image { opacity: 0; transition: opacity 1s ease-in-out; }
        .theme-summer .bg-summer { opacity: 1; }
        .theme-autumn .bg-autumn { opacity: 1; }
        .theme-winter .bg-winter { opacity: 1; }
        .theme-spring .bg-spring { opacity: 1; }
        html:not([class*="theme-"]) .bg-summer { opacity: 1; }

        /* ── GESTION DYNAMIQUE DES ICÔNES DE SAISON ── */
        .icon-summer, .icon-autumn, .icon-winter, .icon-spring { display: none; }
        .theme-summer .icon-summer { display: inline-block; }
        .theme-autumn .icon-autumn { display: inline-block; }
        .theme-winter .icon-winter { display: inline-block; }
        .theme-spring .icon-spring { display: inline-block; }
        html:not([class*="theme-"]) .icon-summer { display: inline-block; }

        /* ── ÉMOJI PONCTUATION ── */
        .title-emoji {
          display: inline-block;
          font-size: 0.35em;
          vertical-align: super;
          margin-left: 0.1em;
          opacity: 0.9;
          transform: translateY(-0.15em);
          filter: drop-shadow(0 0 12px var(--text-accent));
          transition: filter 1s ease;
        }

        /* ── ANIMATIONS ── */
        .fade-up { opacity: 0; transform: translateY(24px); animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.25s; }
        .d3 { animation-delay: 0.4s; }
        .d4 { animation-delay: 0.55s; }
        .d5 { animation-delay: 0.7s; }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

        /* ── GLASSMORPHISM ── */
        .glass-panel {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 1s ease, border-color 1s ease;
        }
        .glass-panel:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
        }

        .glass-inner {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.8);
        }

        .icon-badge {
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .text-glow-light { text-shadow: 0 0 20px var(--text-accent-glow); }

        .cta-link { transition: all 0.3s ease; color: var(--text-main); letter-spacing: 0.18em; }
        .cta-link:hover { color: var(--text-accent); letter-spacing: 0.22em; }
        
        .cinzel { font-family: 'Cinzel', serif; }
        .dm-sans { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ================= SECTION 1 : INTRODUCTION ================= */}
      <section className="relative pt-32 pb-16 px-6 sm:px-12 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <div className="fade-up d1 inline-flex glass-panel items-center gap-3 px-5 py-2 rounded-full mb-4">
            <p
              className="tracking-[0.3em] uppercase text-xs font-bold transition-colors duration-500"
              style={{
                color: "var(--text-accent)",
                fontFamily: "'Cinzel', serif",
              }}
            >
              Expertise
            </p>
          </div>

          <div className="fade-up d2">
            <h1
              className="text-5xl md:text-7xl font-black cinzel leading-tight tracking-tight transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              <span className="text-glow-light">Mes</span> <br />
              <span
                className="transition-all duration-1000"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Compétences
              </span>
              <span className="title-emoji">
                <span className="icon-summer">☀️</span>
                <span className="icon-autumn">🍂</span>
                <span className="icon-winter">❄️</span>
                <span className="icon-spring">🌸</span>
              </span>
            </h1>
          </div>

          <div className="fade-up d3 glass-panel rounded-3xl p-8 sm:p-12 text-center mt-6 w-full">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl icon-badge mb-6 mx-auto">
              🎓
            </div>
            <h2
              className="text-2xl font-bold mb-8 cinzel tracking-widest uppercase transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Réflexion sur mes acquis
            </h2>
            <div
              className="space-y-6 dm-sans text-lg leading-relaxed max-w-3xl mx-auto font-medium transition-colors duration-500"
              style={{ color: "var(--text-muted)" }}
            >
              <p>
                Mon cursus en BUT Informatique (parcours Réalisation
                d'applications : conception, développement, validation - RACA)
                et mon stage au laboratoire AGIR m'ont appris à{" "}
                <strong style={{ color: "var(--text-main)" }}>
                  concevoir, développer et valider
                </strong>{" "}
                des solutions concrètes. J'y ai forgé une solide{" "}
                <strong
                  className="font-bold transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  rigueur algorithmique
                </strong>
                , du code scientifique complexe de PyRED jusqu'à la création
                d'architectures web robustes (MVC, API REST).
              </p>
              <p>
                Au-delà de la technique, j'ai cultivé mon{" "}
                <strong style={{ color: "var(--text-main)" }}>
                  adaptation
                </strong>{" "}
                par l'auto-formation (Python) et affiné ma{" "}
                <strong
                  className="font-bold transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  communication interdisciplinaire
                </strong>
                , indispensable pour traduire les besoins des chercheurs et
                collaborer efficacement en méthode Agile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION : AXES DU PROGRAMME NATIONAL ================= */}
      <section className="relative pb-16 px-6 sm:px-12 z-10 fade-up d3">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 mb-12 glass-panel p-10 rounded-3xl mx-auto max-w-3xl">
            <h2
              className="text-3xl font-black tracking-tight cinzel transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Compétences du{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                Programme National
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Réaliser",
                sub: "Développer des applications",
                desc: "Mon parcours en BUT m'a permis de concrétiser des architectures logicielles et web robustes à travers mes différentes SAE.",
              },
              {
                title: "Optimiser",
                sub: "Améliorer les performances",
                desc: "J'ai appris à optimiser des algorithmes complexes, tant lors de mon stage au laboratoire AGIR qu'en concevant des solutions logicielles performantes en BUT.",
              },
              {
                title: "Administrer",
                sub: "Systèmes complexes",
                desc: "Mon stage en recherche a consolidé ma capacité à administrer des environnements de développement sous Linux Ubuntu.",
              },
              {
                title: "Gérer",
                sub: "Données & Information",
                desc: "Mes projets en BUT m'ont formé à la modélisation de bases de données relationnelles rigoureuses pour sécuriser l'information.",
              },
              {
                title: "Conduire",
                sub: "Piloter un projet",
                desc: "La méthodologie Agile apprise en BUT m'a permis de piloter des projets de la phase de maquettage au suivi technique.",
              },
              {
                title: "Collaborer",
                sub: "Travailler en équipe",
                desc: "J'ai forgé mon esprit d'équipe sur des projets à six développeurs en BUT et par mes échanges avec les chercheurs en stage.",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="glass-panel p-8 rounded-3xl flex flex-col h-full text-center sm:text-left"
              >
                <h3
                  className="text-xl font-black uppercase tracking-widest cinzel mb-1 transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  {skill.title}
                </h3>
                <h4
                  className="text-[10px] font-bold uppercase tracking-widest cinzel mb-4 transition-colors duration-500"
                  style={{ color: "var(--text-main)", opacity: 0.7 }}
                >
                  {skill.sub}
                </h4>
                <p
                  className="text-[14px] leading-relaxed dm-sans font-medium transition-colors duration-500"
                  style={{ color: "var(--text-muted)" }}
                >
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SÉPARATEUR ================= */}
      <div className="relative flex justify-center items-center py-8 max-w-4xl mx-auto px-6 w-full z-10 fade-up d3">
        <div
          className="transition-colors duration-500"
          style={{
            height: "1px",
            flex: 1,
            background:
              "linear-gradient(90deg, transparent, var(--text-accent), transparent)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ================= SECTION : PROGRAMME DE FORMATION (BUT INFORMATIQUE) ================= */}
      <section className="relative py-16 px-6 sm:px-12 z-10 fade-up d4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 mb-12 glass-panel p-10 rounded-3xl mx-auto max-w-3xl">
            <h2
              className="text-3xl font-black tracking-tight cinzel transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Programme de{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                Formation
              </span>
            </h2>
            <p
              className="dm-sans font-medium text-lg transition-colors duration-500"
              style={{ color: "var(--text-muted)" }}
            >
              Détail des ressources étudiées, des compétences acquises et des
              concepts maîtrisés lors de mon cursus en BUT Informatique.
            </p>
          </div>

          <div className="space-y-6">
            {butProgram.map((term) => {
              const isOpen = openSemester === term.semester;
              // Création d'un ID unique et propre pour chaque semestre
              const semesterId = `semester-${term.semester.replace(/\s+/g, "-").toLowerCase()}`;

              return (
                <div
                  key={term.semester}
                  id={semesterId}
                  // On ajoute scroll-mt-32 pour compenser la hauteur du header fixé au scroll
                  className="glass-panel rounded-3xl overflow-hidden transition-all duration-300 scroll-mt-32"
                >
                  {/* Bouton d'ouverture du semestre */}
                  <button
                    onClick={() => toggleSemester(term.semester)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 cursor-pointer focus:outline-none"
                  >
                    <h3
                      className="text-xl sm:text-2xl font-black cinzel tracking-widest uppercase flex items-center gap-4 transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {term.semester}
                    </h3>
                    <span
                      className={`transition-transform duration-300 text-xl font-bold ${isOpen ? "rotate-180" : ""}`}
                      style={{ color: "var(--text-accent)" }}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Contenu déroulant */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[5000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className="p-6 sm:p-8 pt-0 border-t mt-2"
                      style={{ borderColor: "rgba(255,255,255,0.4)" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-8 pb-8">
                        {term.courses.map((course) => (
                          <div
                            key={course.id}
                            className="glass-inner p-6 rounded-3xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                          >
                            <div
                              className="mb-3 border-b pb-3"
                              style={{ borderColor: "rgba(0,0,0,0.1)" }}
                            >
                              <h4
                                className="text-lg font-black cinzel tracking-widest mb-1 transition-colors duration-500"
                                style={{ color: "var(--text-accent)" }}
                              >
                                {course.id}
                              </h4>
                              <h5
                                className="text-[13px] font-bold uppercase tracking-widest cinzel leading-tight transition-colors duration-500"
                                style={{ color: "var(--text-main)" }}
                              >
                                {course.title}
                              </h5>
                            </div>

                            <p
                              className="text-[14px] leading-relaxed dm-sans font-medium flex-1 mb-6 transition-colors duration-500"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {course.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                              {course.keywords.map((kw) => (
                                <span
                                  key={kw}
                                  className="px-3 py-1.5 bg-white border rounded-lg text-[10px] uppercase font-bold tracking-wider transition-colors duration-500"
                                  style={{
                                    color: "var(--text-main)",
                                    borderColor: "rgba(0,0,0,0.1)",
                                  }}
                                >
                                  {kw}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Bouton de fermeture en bas du semestre */}
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={() => {
                            // On cible le "start" du container pour revenir proprement au niveau du titre du semestre
                            document
                              .getElementById(semesterId)
                              ?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            setOpenSemester(null);
                          }}
                          className="flex items-center gap-2 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-colors duration-300 hover:bg-white/50"
                          style={{
                            color: "var(--text-accent)",
                            fontFamily: "'Cinzel', serif",
                            border: "1px solid var(--text-accent)",
                          }}
                        >
                          Refermer le semestre
                          <span className="text-lg rotate-180">▼</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SÉPARATEUR ================= */}
      <div className="relative flex justify-center items-center py-8 max-w-4xl mx-auto px-6 w-full z-10 fade-up d3">
        <div
          className="transition-colors duration-500"
          style={{
            height: "1px",
            flex: 1,
            background:
              "linear-gradient(90deg, transparent, var(--text-accent), transparent)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ================= SECTION 2 : HARD SKILLS (TECH) ================= */}
      <section className="py-8 px-6 sm:px-12 relative z-10 fade-up d4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 glass-panel p-10 rounded-3xl mx-auto max-w-3xl">
            <h2
              className="text-3xl font-black tracking-tight cinzel transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Langages,{" "}
              <span
                className="transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                Frameworks
              </span>{" "}
              & Concepts
            </h2>
            <p
              className="dm-sans font-medium text-lg transition-colors duration-500"
              style={{ color: "var(--text-muted)" }}
            >
              Panorama de mes expertises techniques classées par niveau de
              maîtrise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Niveau Avancé */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-8 transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--text-accent)" }}
                ></span>{" "}
                Niveau Avancé
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["HTML/CSS", "Bootstrap", "PHP", "Architecture MVC"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 glass-inner rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Niveau Intermédiaire */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-8 transition-colors duration-500"
                style={{ color: "var(--text-main)" }}
              >
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>{" "}
                Niveau Intermédiaire
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Python",
                  "Windows Forms",
                  "JSON",
                  "C",
                  "C++",
                  "C#",
                  "MySQL",
                  "Java",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 glass-inner rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                    style={{ color: "var(--text-main)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Niveau Débutant */}
            <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-8 transition-colors duration-500"
                style={{ color: "var(--text-muted)" }}
              >
                <span className="w-2 h-2 bg-slate-300 rounded-full border border-slate-400"></span>{" "}
                Débutant / En cours
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Oracle",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "API REST",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 border border-dashed rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                    style={{
                      color: "var(--text-muted)",
                      borderColor: "rgba(0,0,0,0.2)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col items-center text-center md:col-span-3 lg:col-span-3">
              <h3
                className="text-[12px] font-bold uppercase tracking-widest flex items-center gap-3 cinzel mb-4 transition-colors duration-500"
                style={{ color: "var(--text-accent)" }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--text-accent)" }}
                ></span>{" "}
                Langues
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span
                  className="px-6 py-3 glass-inner rounded-xl font-bold dm-sans tracking-wide transition-colors duration-500"
                  style={{ color: "var(--text-main)" }}
                >
                  Anglais : B1+{" "}
                  <span
                    className="italic font-medium ml-2 transition-colors duration-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    (Usage technique & scientifique)
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SÉPARATEUR ================= */}
      <div className="relative flex justify-center items-center py-12 max-w-4xl mx-auto px-6 w-full z-10 fade-up d4">
        <div
          className="transition-colors duration-500"
          style={{
            height: "1px",
            flex: 1,
            background:
              "linear-gradient(90deg, transparent, var(--text-accent), transparent)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ================= SECTION 3 : OUTILS & SOFT SKILLS ================= */}
      <section className="pb-24 px-6 sm:px-12 relative z-10 fade-up d5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2
              className="text-3xl font-black cinzel tracking-tight text-center lg:text-left transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Outils & Systèmes
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">📋</span> Méthodes & Gestion
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Trello", "Méthodologies Agiles / Scrum"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">🚀</span> Version Control & DevOps
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Git", "GitHub", "Docker"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">💻</span> IDE & Testing
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {[
                    "VS Code",
                    "IntelliJ",
                    "Visual Studio",
                    "Android Studio",
                    "Postman",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">🖥️</span> Systèmes d'exploitation
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Linux Ubuntu", "Windows", "VirtualBox"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                      style={{ color: "var(--text-main)" }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 glass-panel rounded-3xl flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4
                  className="font-bold mb-6 flex items-center gap-3 cinzel tracking-widest text-xs uppercase transition-colors duration-500"
                  style={{ color: "var(--text-accent)" }}
                >
                  <span className="text-xl">🎨</span> Design & Bureautique
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {["Figma", "Canva", "Balsamiq", "Suite Office"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 glass-inner rounded-lg text-sm font-bold dm-sans transition-colors duration-500"
                        style={{ color: "var(--text-main)" }}
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2
              className="text-3xl font-black cinzel tracking-tight text-center lg:text-left transition-colors duration-500"
              style={{ color: "var(--text-main)" }}
            >
              Soft Skills
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: "Communication interdisciplinaire",
                  desc: "Capacité à traduire des concepts scientifiques complexes en solutions logicielles.",
                },
                {
                  title: "Adaptabilité & Autonomie",
                  desc: "Apprentissage de nouveaux langages et outils en fonction des besoins.",
                },
                {
                  title: "Rigueur Algorithmique",
                  desc: "Production d'un code propre, testé et optimisé pour des environnements exigeants.",
                },
                {
                  title: "Esprit d'équipe & Collaboration",
                  desc: "Capacité à se coordonner et à répartir efficacement les tâches au sein d'un groupe de développeurs.",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="p-8 glass-panel rounded-3xl flex flex-col items-center text-center justify-center h-full"
                >
                  <h4
                    className="font-bold mb-3 cinzel text-[16px] transition-colors duration-500"
                    style={{ color: "var(--text-main)" }}
                  >
                    {skill.title}
                  </h4>
                  <p
                    className="text-[15px] leading-relaxed dm-sans font-medium transition-colors duration-500"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-16 text-center relative z-10">
        <div className="fade-up d5 glass-panel max-w-2xl mx-auto py-10 px-6 rounded-3xl relative">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 font-bold transition-colors duration-500"
            style={{
              color: "var(--text-accent)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            Section Suivante
          </p>
          <Link
            href="/contact"
            className="cta-link inline-flex items-center gap-4 font-bold"
            style={{ fontFamily: "'Cinzel', serif", fontSize: "14px" }}
          >
            <span
              className="transition-colors duration-500"
              style={{
                display: "inline-block",
                width: "24px",
                height: "2px",
                background: "var(--text-accent)",
                borderRadius: "2px",
              }}
            />
            Me contacter
            <span
              className="transition-colors duration-500"
              style={{
                display: "inline-block",
                width: "24px",
                height: "2px",
                background: "var(--text-accent)",
                borderRadius: "2px",
              }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}
