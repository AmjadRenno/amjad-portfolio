"use client";
import { personal } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-center">
        <p className="font-mono text-xs text-muted">
          © {year} {personal.fullName} — {t.footer.builtWith}
        </p>
        <p className="font-mono text-[10px] text-muted/75 max-w-md leading-relaxed">
          {t.footer.privacy}
        </p>
      </div>
    </footer>
  );
}
