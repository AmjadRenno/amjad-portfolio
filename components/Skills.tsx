"use client";
import { useEffect, useRef, useState } from "react";
import { skillGroups } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

function SkillBar({ name, level }: { name: string; level: number }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setFilled(true), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="mb-2">
        <span className="font-mono text-xs text-[#9a9690] group-hover:text-text transition-colors">
          {name}
        </span>
      </div>
      <div className="h-[3px] bg-[#252525] overflow-hidden">
        <div
          className="skill-bar-fill h-full bg-[#D4B896]"
          style={{ width: filled ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLocale();
  const skills = t.skills;
  return (
    <section id="skills" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
            {skills.sectionLabel}
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text">
            {skills.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-accent uppercase tracking-widest mb-6 pb-4 border-b border-border">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono text-xs text-muted">
            {skills.moreLabel}{" "}
            <a
              href="https://linkedin.com/in/amjad-renno-6a73b32b8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {skills.moreLinkLabel} ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
