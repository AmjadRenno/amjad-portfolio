"use client";
import { personal, contactLinks } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

export default function About() {
  const { t } = useLocale();
  const about = t.about;

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
            {about.sectionLabel}
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text mb-8">
            {about.heading}
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {about.paragraphs.map((segments, i) => (
              <p key={i}>
                {segments.map((seg, j) =>
                  seg.className ? (
                    <span key={j} className={seg.className}>{seg.text}</span>
                  ) : (
                    seg.text
                  )
                )}
              </p>
            ))}
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href={personal.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-6 py-3 border border-border text-muted hover:border-accent hover:text-accent transition-all duration-300 uppercase tracking-widest"
            >
              {about.linkedinLabel} ↗
            </a>
            <a
              href={personal.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-6 py-3 border border-border text-muted hover:border-accent hover:text-accent transition-all duration-300 uppercase tracking-widest"
            >
              {about.githubLabel} ↗
            </a>
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="border border-border p-8 hover:border-accent/50 transition-colors duration-300 group"
            >
              <p className="font-display text-5xl text-accent mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {s.num}
              </p>
              <p className="font-mono text-xs text-muted uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
