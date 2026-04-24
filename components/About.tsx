"use client";
import { personal } from "../portfolio";
import { useLocale } from "../context/LocaleContext";
import { useInView } from "../hooks/useInView";

function ShieldCodeSVG() {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[240px] mx-auto opacity-80"
      aria-hidden="true"
    >
      {/* Outer shield */}
      <path
        d="M140 18 L246 54 L246 150 Q246 230 140 302 Q34 230 34 150 L34 54 Z"
        stroke="#E8D5A3"
        strokeWidth="1.5"
        fill="rgba(232,213,163,0.025)"
      />
      {/* Inner shield */}
      <path
        d="M140 42 L220 72 L220 150 Q220 208 140 272 Q60 208 60 150 L60 72 Z"
        stroke="#E8D5A3"
        strokeWidth="0.6"
        fill="none"
        opacity="0.2"
      />
      {/* Left angle bracket < */}
      <polyline
        points="95,120 65,152 95,184"
        stroke="#E8D5A3"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right angle bracket > */}
      <polyline
        points="185,120 215,152 185,184"
        stroke="#E8D5A3"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Forward slash / */}
      <line
        x1="153"
        y1="110"
        x2="127"
        y2="194"
        stroke="#E8D5A3"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Corner accent dots */}
      <circle cx="140" cy="18" r="3" fill="#E8D5A3" opacity="0.85" />
      <circle cx="34" cy="54" r="2" fill="#E8D5A3" opacity="0.4" />
      <circle cx="246" cy="54" r="2" fill="#E8D5A3" opacity="0.4" />
      {/* Decorative horizontal lines */}
      <line x1="95" y1="228" x2="185" y2="228" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.22" />
      <line x1="112" y1="243" x2="168" y2="243" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.14" />
      {/* Subtle scan lines */}
      <line x1="72" y1="102" x2="208" y2="102" stroke="#E8D5A3" strokeWidth="0.3" opacity="0.12" />
      <line x1="72" y1="202" x2="208" y2="202" stroke="#E8D5A3" strokeWidth="0.3" opacity="0.12" />
    </svg>
  );
}

export default function About() {
  const { t } = useLocale();
  const about = t.about;
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`py-32 px-6 max-w-6xl mx-auto transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid md:grid-cols-[2fr_3fr] gap-16 items-center">

        {/* Left: geometric SVG illustration */}
        <div className="flex items-center justify-center py-8 md:py-0">
          <ShieldCodeSVG />
        </div>

        {/* Right: all text content */}
        <div>
          <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
            {about.sectionLabel}
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text mb-8">
            {about.heading}
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-muted leading-relaxed mb-8">
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

          {/* Qualitative highlights */}
          <div className="space-y-2 mb-8">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="border-l-2 border-accent/30 pl-5 py-3 hover:border-rust/60 hover:bg-rust/[0.04] transition-all duration-300 group"
              >
                <p className="font-mono text-xs text-muted uppercase tracking-widest leading-relaxed group-hover:text-text transition-colors duration-300">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* External links */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={personal.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amjad Renno on LinkedIn (opens in new tab)"
              className="font-mono text-xs px-4 py-2 bg-rust text-white hover:opacity-90 transition-opacity uppercase tracking-widest"
            >
              LinkedIn ↗
            </a>
            <a
              href={personal.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amjad Renno on GitHub (opens in new tab)"
              className="font-mono text-xs px-4 py-2 bg-rust text-white hover:opacity-90 transition-opacity uppercase tracking-widest"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
