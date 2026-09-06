import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Birthday", path: "/birthday" },
  { name: "Send a Wish", path: "/wish" },
  { name: "Wishes", path: "/wishes" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-cream)]/95 backdrop-blur-md">
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-50 text-xl font-bold tracking-wide text-[var(--color-brown-dark)] transition-transform duration-200 hover:scale-105"
        >
          THO<span className="text-[var(--color-burgundy)]">·</span>NIA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group relative z-50 cursor-pointer py-2 text-sm font-medium text-[var(--color-brown)] transition-colors duration-300 hover:text-[var(--color-burgundy)]"
            >
              {link.name}

              {/* Hover underline */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--color-burgundy)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[var(--color-brown-dark)] transition-colors duration-200 hover:bg-[var(--color-beige-light)] hover:text-[var(--color-burgundy)] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="relative z-50 border-t border-[var(--color-border)] bg-[var(--color-cream)] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-[var(--color-brown)] transition-all duration-200 hover:bg-[var(--color-beige-light)] hover:pl-6 hover:text-[var(--color-burgundy)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}