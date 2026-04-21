"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-tighter text-gray-900"
        >
          Mathys Vanheulle<span className="text-purple-600">.</span>
        </Link>

        {/* Navigation Bureau (Desktop) */}
        <nav className="hidden md:flex gap-8 text-sm font-bold text-gray-500 tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bouton Hamburger (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-900 focus:outline-none flex items-center justify-center"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Menu Déroulant Mobile (Haut à droite) */}
        <div
          className={`absolute top-full right-6 mt-2 w-64 bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 z-50 transition-all duration-300 origin-top-right md:hidden ${
            isOpen 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-black text-gray-900 hover:text-purple-600 transition-colors tracking-tighter"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}