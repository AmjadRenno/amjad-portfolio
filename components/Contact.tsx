"use client";
import { useState } from "react";
import { contactLinks } from "../portfolio";
import { useLocale } from "../context/LocaleContext";
import { useInView } from "../hooks/useInView";

function Spinner() {
  return (
    <svg
      className="animate-spin w-3.5 h-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

const INPUT_CLASS =
  "w-full bg-[#111111] border border-white/15 px-4 py-3 font-mono text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-accent transition-colors";

export default function Contact() {
  const { t } = useLocale();
  const ct = t.contact;
  const { ref, inView } = useInView<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-32 px-6 bg-surface transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent uppercase tracking-[0.3em] mb-4">
            {ct.sectionLabel}
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-text">
            {ct.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <p className="text-[#9a9690] leading-relaxed mb-8">
              {ct.intro}
            </p>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-3 group"
                >
                  <span className="font-mono text-xs text-accent">{link.label}</span>
                  <span className="flex-1 h-px bg-border group-hover:bg-accent/30 transition-colors" />
                  <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                    {link.display}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: "name",  label: ct.nameLabel,  type: "text",  placeholder: ct.namePlaceholder },
              { id: "email", label: ct.emailLabel, type: "email", placeholder: ct.emailPlaceholder },
            ].map((field) => (
              <div key={field.id}>
                <label className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={form[field.id as keyof typeof form]}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, [field.id]: e.target.value }))
                  }
                  className={INPUT_CLASS}
                />
              </div>
            ))}

            <div>
              <label className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-2">
                {ct.messageLabel}
              </label>
              <textarea
                required
                rows={5}
                placeholder={ct.messagePlaceholder}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className={`${INPUT_CLASS} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full py-4 bg-accent text-bg font-mono text-xs uppercase tracking-widest hover:bg-accent/90 transition-all duration-300 disabled:opacity-60 hover:shadow-[0_0_30px_rgba(232,213,163,0.2)]"
            >
              {status === "idle" && ct.sendLabel}
              {status === "sending" && (
                <span className="inline-flex items-center justify-center gap-2">
                  <Spinner />
                  {ct.sendingLabel}
                </span>
              )}
              {status === "sent" && ct.sentLabel}
              {status === "error" && `✗ ${ct.errorLabel}`}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
