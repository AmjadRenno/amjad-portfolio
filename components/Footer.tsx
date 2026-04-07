"use client";
import { personal, footerLinks } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display text-xl text-text tracking-widest">
          {personal.initials}<span className="text-accent">.</span>
        </span>
        <p className="font-mono text-xs text-muted">
          © {year} {personal.fullName} — {t.footer.builtWith}
        </p>
        <div className="flex gap-6">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted hover:text-accent transition-colors uppercase tracking-widest"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
