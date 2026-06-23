"use client";
import { useEffect, useState } from "react";
import { personal } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

function TerminalWindow({ lines }: { lines: readonly string[] }) {
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const current = lines[lineIdx];
    if (typed.length < current.length) {
      const timer = setTimeout(
        () => setTyped(current.slice(0, typed.length + 1)),
        52
      );
      return () => clearTimeout(timer);
    }
    if (lineIdx < lines.length - 1) {
      const timer = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setTyped("");
      }, 480);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [typed, lineIdx, done, lines]);

  const completedLines = lines.slice(0, lineIdx);

  return (
    <div className="hidden lg:block bg-[#0a0a0a] border border-[#E8D5A3]/20 overflow-hidden">
      {/* Titlebar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#E8D5A3]/10 bg-[#0d0d0d]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
        <span className="ml-auto font-mono text-[10px] text-muted/40 uppercase tracking-widest">
        </span>
      </div>
      {/* Body */}
      <div className="p-6 min-h-[200px] space-y-2.5 font-mono text-sm">
        {completedLines.map((line: string, i: number) => (
          <p key={i} className="text-muted/70 text-xs">
            <span className="text-accent/50 select-none">&gt; </span>
            {line}
          </p>
        ))}
        <p className="text-accent/90 text-xs">
          <span className="text-accent/50 select-none">&gt; </span>
          {typed}
          <span className="animate-blink ml-0.5 text-accent">_</span>
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLocale();
  const hero = t.hero;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = hero.roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          55
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          30
        );
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % hero.roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#E8D5A3 1px, transparent 1px), linear-gradient(90deg, #E8D5A3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent circle */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 pt-24 pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── Left: main content ── */}
          <div>
            {/* Pre-label — no animation delay so it is the LCP element immediately */}
            <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-6 whitespace-pre-line">
              {hero.preLabel}
            </p>

            {/* Main heading */}
            <h1
              className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-none text-text mb-2 animate-fade-up opacity-0-init"
              style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
            >
              {personal.fullName.toUpperCase().split(" ")[0]}
            </h1>
            <h1
              className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-none text-accent mb-8 animate-fade-up opacity-0-init"
              style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
            >
              {personal.fullName.toUpperCase().split(" ").slice(1).join(" ")}
            </h1>

            {/* Typing role */}
            <div
              className="font-mono text-sm md:text-base text-muted mb-10 h-6 animate-fade-up opacity-0-init"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              <span className="text-accent">&gt; </span>
              {displayed}
              <span className="animate-blink ml-0.5 text-accent inline-block w-[1ch]">|</span>
            </div>

            {/* Description */}
            <p
              className="max-w-xl text-[#b8b3ac] text-base md:text-lg leading-relaxed mb-12 animate-fade-up opacity-0-init antialiased font-light"
              style={{ animationDelay: "750ms", animationFillMode: "forwards" }}
            >
              {hero.description}
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-up opacity-0-init"
              style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
            >
              <a
                href={hero.cta.primary.href}
                className="px-8 py-3.5 bg-accent text-bg font-mono text-xs uppercase tracking-widest hover:bg-accent/90 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,213,163,0.25)]"
              >
                {hero.cta.primary.label}
              </a>
              <a
                href={hero.cta.secondary.href}
                className="px-8 py-3.5 border border-border text-muted font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent hover:scale-[1.02] transition-all duration-300"
              >
                {hero.cta.secondary.label}
              </a>
            </div>
          </div>

          {/* ── Right: terminal window ── */}
          <div
            className="animate-fade-up opacity-0-init"
            style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
          >
            <TerminalWindow lines={hero.terminalLines} />
          </div>
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-0" />
    </section>
  );
}
