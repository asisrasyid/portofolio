"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/90 dark:bg-[#0f172a]/90 backdrop-blur-md border-b border-[#334155]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-[#f1f5f9] dark:text-[#f1f5f9] text-lg tracking-tight hover:text-[#06b6d4] transition-colors"
        >
          MA<span className="text-[#06b6d4]">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#94a3b8] hover:text-[#f1f5f9] dark:hover:text-[#f1f5f9] transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/muhammadazis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-[#06b6d4] text-[#06b6d4] text-sm font-medium hover:bg-[#06b6d4]/10 transition-all"
            >
              GitHub
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#1e293b] border-t border-[#334155] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://github.com/muhammadazis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06b6d4] font-medium"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
