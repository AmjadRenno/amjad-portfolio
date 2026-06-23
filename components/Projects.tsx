"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { projects, type Project } from "../portfolio";
import { useLocale } from "../context/LocaleContext";
import { useInView } from "../hooks/useInView";

// Subtle dark gradient per project — private ones get cooler blue tones
const CARD_GRADIENTS: Record<string, string> = {
  "01": "linear-gradient(135deg, #08111e 0%, #0c1f35 100%)",
  "02": "linear-gradient(135deg, #0d1020 0%, #15123a 100%)",
  "03": "linear-gradient(135deg, #081a14 0%, #0b2219 100%)",
  "04": "linear-gradient(135deg, #1a0e08 0%, #1f180a 100%)",
  "05": "linear-gradient(135deg, #091a0c 0%, #0b2010 100%)",
  "06": "linear-gradient(135deg, #0c0c1c 0%, #10101f 100%)",
  "07": "linear-gradient(135deg, #170a1a 0%, #1e0e22 100%)",
  "08": "linear-gradient(135deg, #0f0f1a 0%, #13132a 100%)",
};

function ArchDiagram() {
  return (
    <svg
      viewBox="0 0 240 100"
      className="w-4/5 opacity-[0.18]"
      fill="none"
      aria-hidden="true"
    >
      <rect x="8" y="32" width="52" height="32" stroke="#E8D5A3" strokeWidth="1" />
      <rect x="94" y="32" width="52" height="32" stroke="#E8D5A3" strokeWidth="1" />
      <rect x="180" y="32" width="52" height="32" stroke="#E8D5A3" strokeWidth="1" />
      <line x1="60" y1="48" x2="94" y2="48" stroke="#E8D5A3" strokeWidth="1" />
      <line x1="146" y1="48" x2="180" y2="48" stroke="#E8D5A3" strokeWidth="1" />
      {/* Arrow heads */}
      <polyline points="88,44 94,48 88,52" stroke="#E8D5A3" strokeWidth="1" fill="none" />
      <polyline points="174,44 180,48 174,52" stroke="#E8D5A3" strokeWidth="1" fill="none" />
      {/* Labels */}
      <text x="34" y="52" fill="#E8D5A3" fontSize="7" textAnchor="middle" fontFamily="monospace">API</text>
      <text x="120" y="52" fill="#E8D5A3" fontSize="7" textAnchor="middle" fontFamily="monospace">DB</text>
      <text x="206" y="52" fill="#E8D5A3" fontSize="7" textAnchor="middle" fontFamily="monospace">UI</text>
    </svg>
  );
}

function CodePattern() {
  return (
    <div
      className="absolute inset-0 overflow-hidden select-none pointer-events-none p-3 font-mono text-[6px] text-[#E8D5A3] leading-3 opacity-[0.055]"
      aria-hidden="true"
    >
      {"namespace App { public interface IRepository<T> { Task<T> GetAsync(int id); } public class Service { private readonly IRepository<Entity> _repo; public Service(IRepository<Entity> r) { _repo = r; } } }"}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { locale, t } = useLocale();
  const proj = t.projects;
  const details = project.details?.[locale];

  // Close on Escape key + lock body scroll
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!details) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Card — scrollable internally, max 85vh */}
      <div
        className="relative z-10 w-full max-w-lg border border-border bg-[#0d0d0d] shadow-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — fixed inside modal */}
        <div className="flex items-start justify-between gap-4 p-7 pb-4 border-b border-border shrink-0">
          <h3 className="font-display text-lg text-accent leading-tight">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="font-mono text-[11px] text-muted hover:text-accent transition-colors shrink-0 mt-0.5"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-7 py-5 space-y-4 text-sm">
          {/* Context */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
              {proj.detailsContextLabel}
            </p>
            <p className="text-[#b8b3ac] leading-relaxed">{details.context}</p>
          </div>

          {/* Role */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
              {proj.detailsRoleLabel}
            </p>
            <p className="text-[#b8b3ac]">{details.role}</p>
          </div>

          {/* Built */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5">
              {proj.detailsBuiltLabel}
            </p>
            <ul className="space-y-0.5">
              {details.built.map((item) => (
                <li key={item} className="text-[#b8b3ac] flex gap-2">
                  <span className="text-accent/50 shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
              {proj.detailsTechLabel}
            </p>
            <p className="font-mono text-xs text-text/80">{details.techStack}</p>
          </div>

          {/* Quality & delivery */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1.5">
              {proj.detailsQualityLabel}
            </p>
            <ul className="space-y-0.5">
              {details.quality.map((item) => (
                <li key={item} className="text-[#b8b3ac] flex gap-2">
                  <span className="text-accent/50 shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Projects() {
  const { locale, t } = useLocale();
  const proj = t.projects;
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView<HTMLElement>();

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section
      ref={ref}
      id="projects"
      className={`py-32 px-6 max-w-6xl mx-auto transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mb-16">
        <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
          {proj.sectionLabel}
        </p>
        <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text">
          {proj.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayed.map((p) => (
          <div
            key={p.num}
            className="project-card group flex flex-col border border-border hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(232,213,163,0.08)] transition-all duration-300"
          >
            {/* ── Image / Preview area ── */}
            <div className="relative h-48 overflow-hidden">
              {/* Gradient background always present as fallback */}
              <div
                className="absolute inset-0"
                style={{ background: CARD_GRADIENTS[p.num] ?? "#0d0d0d" }}
              />

              {/* Project screenshot if available */}
              {p.image && (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top opacity-80 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-500"
                />
              )}

              {/* No image: show diagram/pattern overlays */}
              {!p.image && !p.link && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArchDiagram />
                </div>
              )}
              {!p.image && p.link && <CodePattern />}
            </div>

            {/* ── Content ── */}
            <div className="flex-1 flex flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <span className="project-num font-display text-3xl text-[#2a2a2a] group-hover:text-accent/50 transition-colors duration-300 block leading-none mb-1">
                    {p.num}
                  </span>
                  <h3 className="font-display text-xl text-text group-hover:text-accent transition-colors duration-300 leading-tight">
                    {p.title}
                  </h3>
                </div>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[10px] px-3 py-1.5 bg-rust text-white hover:opacity-90 transition-opacity uppercase tracking-widest whitespace-nowrap mt-1"
                  >
                    GitHub ↗
                  </a>
                ) : (
                  <span className="shrink-0 font-mono text-[9px] px-2.5 py-1 border border-border/60 text-muted/60 uppercase tracking-widest whitespace-nowrap mt-1">
                    {proj.privateLabel}
                  </span>
                )}
              </div>

              <p className="text-[#b8b3ac] text-sm leading-relaxed mb-4 flex-1">
                {p.details?.[locale]?.description ?? p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2.5 py-1 border border-border text-muted hover:border-rust/50 hover:text-text hover:bg-rust/[0.06] transition-all duration-200 uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.details && (
                <button
                  onClick={() => setSelectedProject(p)}
                  className="self-start font-mono text-[10px] px-3 py-1.5 border border-accent/60 text-accent hover:bg-accent/10 transition-all duration-200 uppercase tracking-widest"
                >
                  {proj.viewDetailsLabel} →
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {!showAll && rest.length > 0 && (
        <div className="mt-10">
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
    </section>
  );
}

