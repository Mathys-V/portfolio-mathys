export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-400">
        <p>
          © {new Date().getFullYear()} Mathys Vanheulle. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/mathys-vanheulle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Mathys-V"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
