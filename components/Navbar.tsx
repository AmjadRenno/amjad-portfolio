"use client";
import { useState, useEffect } from "react";
import { personal } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const links = t.navigation;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl text-text tracking-widest hover:text-accent transition-colors"
        >
          {personal.initials}<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link font-mono text-xs text-[#888480] hover:text-text transition-colors uppercase tracking-widest"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setLocale(locale === "da" ? "en" : "da")}
              className="font-mono text-xs px-3 py-1.5 border border-border text-muted hover:border-accent hover:text-accent transition-all duration-300 uppercase tracking-widest"
              aria-label="Toggle language"
            >
              {locale === "da" ? "EN" : "DA"}
            </button>
          </li>
          <li>
            <a
              href="#contact"
              className="font-mono text-xs px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-300 uppercase tracking-widest"
            >
              {locale === "da" ? "Lad os tale" : "Let's Talk"}
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-text transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-text transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-text transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-muted hover:text-text transition-colors uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
