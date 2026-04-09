"use client";
import { skillGroups } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

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
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-muted px-3 py-1.5 border border-border hover:border-accent/50 hover:text-text transition-colors duration-200"
                  >
                    {skill}
                  </span>
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
