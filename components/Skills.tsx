"use client";
import Image from "next/image";
import { skillGroups } from "../portfolio";
import { useLocale } from "../context/LocaleContext";
import { useInView } from "../hooks/useInView";

// Local icons from /public/icons/ — icon2 files take priority over icon
const SKILL_ICONS: Record<string, string> = {
  // Core Technologies
  "C# / .NET":              "/icons/c-sharp.png",
  "ASP.NET Core":           "/icons/ASP.NET CORE.png",
  "SQL Server":             "/icons/sql-server.png",
  "PostgreSQL":             "/icons/POSTGRESQL.png",
  "JavaScript":             "/icons/JAVASCRIPT.png",
  "HTML / CSS":             "/icons/HTML-CSS.png",
  "REST APIs":              "/icons/REST APIs.png",
  // Architecture & Development
  "Clean Architecture":     "/icons/clean architecture.png",
  "OOP / SOLID":            "/icons/oop.png",
  "Domain-Driven Design":   "/icons/ddd.png",
  "Microservices":          "/icons/Microservices.png",
  "Software Design Patterns": "/icons/Software Design Patterns.png",
  // Security & Quality
  "OWASP Top 10":           "/icons/OWASP Top 10.png",
  "Secure Coding":          "/icons/Secure Coding.png",
  "JWT / BCrypt":           "/icons/JWT - BCrypt.png",
  "GDPR":                   "/icons/GDPR.png",
  "ISO 27001 Awareness":    "/icons/ISO 27001 Awareness.png",
  "Threat Modeling":        "/icons/Threat Modeling.png",
  "DevSecOps":              "/icons/DevSecOps.png",
  // Tools & Platforms
  "Git / GitHub":           "/icons/GIT.png",
  "Docker":                 "/icons/docker.png",
  "Postman / Swagger":      "/icons/POSTMAN.png",
  "CI/CD / GitHub Actions": "/icons/CI-CD.png",
  "Umbraco CMS":            "/icons/Umbraco.png",
};

export default function Skills() {
  const { t } = useLocale();
  const skills = t.skills;
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="skills"
      className={`py-32 px-6 bg-surface transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
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
                {group.skills.map((skill) => {
                  const iconSrc = SKILL_ICONS[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted px-3 py-1.5 border border-border hover:border-rust/60 hover:text-text hover:bg-rust/[0.06] transition-all duration-200 cursor-default"
                    >
                      {iconSrc && (
                        <Image
                          src={iconSrc}
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain shrink-0 opacity-85"
                        />
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="font-mono text-xs text-muted">
            {skills.moreLabel}{" "}
            <a
              href="https://www.linkedin.com/in/amjad-renno-6a73b32b8/details/skills/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Full skills profile on LinkedIn (opens in new tab)"
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
