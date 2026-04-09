"use client";
import { useState } from "react";
import { projects } from "../portfolio";
import { useLocale } from "../context/LocaleContext";

export default function Projects() {
  const { t } = useLocale();
  const proj = t.projects;
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
          {proj.sectionLabel}
        </p>
        <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text">
          {proj.heading}
        </h2>
      </div>

      <div className="space-y-0">
        {displayed.map((p) => (
          <div
            key={p.num}
            className="project-card group border-t border-border py-8 grid md:grid-cols-[80px_1fr_auto] gap-6 items-start hover:bg-surface/50 transition-colors duration-300 -mx-6 px-6"
          >
            {/* Number */}
            <span className="project-num font-display text-4xl text-[#333] group-hover:text-accent transition-colors duration-300">
              {p.num}
            </span>

            {/* Content */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-text mb-2 group-hover:text-accent transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-[#9a9690] text-sm leading-relaxed mb-5 max-w-lg">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2.5 py-1 border border-border text-muted uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 mt-1">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] px-2.5 py-1 border border-[#2e2e2e] text-muted hover:border-accent hover:text-accent transition-all duration-300 uppercase tracking-widest whitespace-nowrap"
                >
                  GitHub ↗
                </a>
              ) : (
                <span className="font-mono text-[10px] px-2.5 py-1 border border-[#222] text-[#3a3a3a] uppercase tracking-widest whitespace-nowrap cursor-default">
                  {proj.privateLabel}
                </span>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] px-2.5 py-1 border border-[#2e2e2e] text-muted hover:border-accent hover:text-accent transition-all duration-300 uppercase tracking-widest whitespace-nowrap"
                >
                  Live ↗
                </a>
              )}
            </div>
          </div>
        ))}
        <div className="border-t border-border" />

        {!showAll && rest.length > 0 && (
          <div className="mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="font-mono text-xs px-6 py-3 border border-border text-muted hover:border-accent hover:text-accent transition-all duration-300 uppercase tracking-widest"
            >
              {proj.loadMoreLabel} ({rest.length})
            </button>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
          <p className="font-mono text-xs text-muted">
            {proj.moreLabel}{" "}
            <a
              href="https://github.com/AmjadRenno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {proj.moreLinkLabel} ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

