"use client";
import { useEffect, useState } from "react";
import { personal } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

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
        {/* Grid on lg: main content left, mini stats right */}
        <div className="lg:grid lg:grid-cols-[1fr_160px] lg:gap-12 lg:items-end">

          {/* ── Left: main content ── */}
          <div>
            {/* Pre-label */}
            <p
              className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-6 animate-fade-up opacity-0-init"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              {hero.preLabel}
            </p>

            {/* Main heading */}
            <h1
              className="font-display text-[clamp(4rem,12vw,9rem)] leading-none text-text mb-2 animate-fade-up opacity-0-init"
              style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
            >
              {personal.fullName.toUpperCase().split(" ")[0]}
            </h1>
            <h1
              className="font-display text-[clamp(4rem,12vw,9rem)] leading-none text-accent mb-8 animate-fade-up opacity-0-init"
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
              <span className="animate-blink ml-0.5 text-accent">|</span>
            </div>

            {/* Description */}
            <p
              className="max-w-2xl text-[#9a9690] text-lg md:text-xl leading-relaxed mb-12 animate-fade-up opacity-0-init antialiased font-light"
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
                className="px-8 py-3.5 bg-accent text-bg font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,213,163,0.25)]"
              >
                {hero.cta.primary.label}
              </a>
              <a
                href={hero.cta.secondary.href}
                className="px-8 py-3.5 border border-border text-muted font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300"
              >
                {hero.cta.secondary.label}
              </a>
            </div>
          </div>

          {/* ── Right: mini stats — desktop only ── */}
          <div
            className="hidden lg:flex flex-col justify-end gap-8 border-l border-border/50 pl-8 pb-2 animate-fade-up opacity-0-init"
            style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
          >
            <div>
              <p className="font-display text-5xl text-accent leading-none mb-1">01</p>
              <p className="font-mono text-[10px] text-muted uppercase tracking-widest">Internship</p>
            </div>
            <div>
              <p className="font-display text-5xl text-accent leading-none mb-1">6</p>
              <p className="font-mono text-[10px] text-muted uppercase tracking-widest">GitHub Repos</p>
            </div>
            <div>
              <p className="font-display text-5xl text-accent leading-none mb-1">∞</p>
              <p className="font-mono text-[10px] text-muted uppercase tracking-widest">Curiosity</p>
            </div>
          </div>
        </div>

      </div>

      <div className="glow-line absolute bottom-0 left-0" />
    </section>
  );
}
