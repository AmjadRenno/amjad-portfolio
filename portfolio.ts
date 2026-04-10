// ─────────────────────────────────────────────────────────────────────────────
// portfolio.ts  —  Edit this file to update ALL content on the site.
//
// BILINGUAL SUPPORT:
//   - Default language: Danish (da)
//   - Second language:  English (en)
//   - To add/edit text: update both `da` and `en` blocks below.
//   - Non-translatable data (skills, projects, links) stays outside the locale
//     blocks and is shared between both languages.
// ─────────────────────────────────────────────────────────────────────────────

export type Locale = "da" | "en";

export interface Segment {
  text: string;
  className?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  live: string | null;
  featured?: boolean;
}

export interface Stat {
  num: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactLink {
  label: string;
  href: string;
  display: string;
}

// ─── Personal (language-independent) ─────────────────────────────────────────

export const personal = {
  fullName: "Amjad Renno",
  initials: "AR",
  email: "amjad.renno92@gmail.com",
  location: "Odense, Denmark",
  github: {
    url: "https://github.com/AmjadRenno",
    username: "@AmjadRenno",
  },
  linkedin: {
    url: "https://linkedin.com/in/amjad-renno-6a73b32b8",
    handle: "/in/amjad-renno-6a73b32b8",
  },
};

// ─── Skills (language-independent) ───────────────────────────────────────────
//
// Groups reflect practical study and project experience — not self-scored levels.
//   1. Core Technologies — primary stack
//   2. Architecture & Development — applied approaches
//   3. Security & Quality — studied and applied in projects
//   4. Tools & Platforms — day-to-day tooling
//
export const skillGroups: SkillGroup[] = [
  {
    category: "Core Technologies",
    skills: [
      "C# / .NET",
      "ASP.NET Core",
      "SQL Server",
      "PostgreSQL",
      "EF Core",
      "REST APIs",
      "JavaScript",
      "HTML / CSS",
      "Blazor",
    ],
  },
  {
    category: "Architecture & Development",
    skills: [
      "Clean Architecture",
      "OOP / SOLID",
      "Domain-Driven Design",
      "Microservices",
      "Software Design Patterns",
    ],
  },
  {
    category: "Security & Quality",
    skills: [
      "OWASP Top 10",
      "Secure Coding",
      "Security by Design",
      "JWT / BCrypt",
      "Threat Modeling",
      "GDPR",
      "ISO 27001 Awareness",
      "DevSecOps",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git / GitHub",
      "Docker",
      "Postman / Swagger",
      "CI/CD / GitHub Actions",
      "Umbraco CMS",
    ],
  },
];

// ─── Projects (language-independent — titles stay in original language) ───────
// featured: true  → shown immediately (top 3)
// featured: false → visible after "load more"

export const projects: Project[] = [
  {
    num: "01",
    title: "Godkendelsesoversigt – MedCom",
    description:
      "Web and database solution developed in a real internship setting to support approval overview workflows. Focus areas included analysis, planning, data modelling, backend/frontend development, audit logging, and data integrity.",
    tags: ["Java", "Web", "Database", "Audit Logging", "Data Modelling"],
    link: null,
    live: null,
    featured: true,
  },
  {
    num: "02",
    title: "Customizable B2B Commerce Portal for Industrial Suppliers",
    description:
      "Built with ASP.NET Core, supporting company accounts, custom pricing, quote workflows, and scalable architecture. Applied in a structured project context with focus on clean backend design and extensibility.",
    tags: ["ASP.NET Core", "B2B Commerce", "Custom Pricing", "Quote Workflow", "Scalable Architecture"],
    link: null,
    live: null,
    featured: true,
  },
  {
    num: "03",
    title: "DentalClinic-Microservices",
    description:
      ".NET 10 microservices dental clinic platform with Domain-Driven Design architecture. Features Umbraco CMS, YARP Gateway, JWT authentication, Dapr messaging, role-based access control, and .NET Aspire orchestration. Independent services with SQLite databases following DDD patterns.",
    tags: ["Microservices", ".NET 10", "Domain-Driven Design", "Umbraco CMS", "YARP Gateway", "Dapr", "JWT Auth", ".NET Aspire"],
    link: "https://github.com/AmjadRenno/DentalClinic-Microservices",
    live: null,
    featured: true,
  },
  {
    num: "04",
    title: "TANA Travel Management",
    description:
      "Travel booking and itinerary management platform built with ASP.NET Core 8 and Clean Architecture, including multilingual support and PDF travel plan generation.",
    tags: ["ASP.NET Core", "C#", "Clean Architecture", "PDF", "Multilingual"],
    link: "https://github.com/AmjadRenno/TANA-Travel-Management",
    live: null,
    featured: false,
  },
  {
    num: "05",
    title: "EcoTasks AirGuard NASA",
    description:
      "Blazor WebAssembly and ASP.NET Core application combining air-quality and weather data into a near real-time environmental dashboard concept.",
    tags: ["Blazor", "ASP.NET Core", "API Integration", "Dashboard"],
    link: "https://github.com/AmjadRenno/EcoTasks-AirGuard-NASA",
    live: null,
    featured: false,
  },
  {
    num: "06",
    title: "EDC",
    description:
      "Internal real estate management coursework project built as a Windows Forms application for managing realtors, customers, and property-related workflows.",
    tags: ["C#", "Windows Forms", "Desktop App", "Course Project"],
    link: "https://github.com/AmjadRenno/EDC",
    live: null,
    featured: false,
  },
  {
    num: "07",
    title: "Umbraco Fundamentals Training",
    description:
      "Practice project from Umbraco Fundamentals training to explore core CMS concepts and implementation skills.",
    tags: ["Umbraco", "CMS", "Training", "Content Management"],
    link: "https://github.com/AmjadRenno/umbraco-fundamentals-training",
    live: null,
    featured: false,
  },
];

// ─── Contact links (language-independent) ────────────────────────────────────

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    display: `${personal.email} ↗`,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin.url,
    display: `${personal.linkedin.handle} ↗`,
  },
  {
    label: "GitHub",
    href: personal.github.url,
    display: `${personal.github.username} ↗`,
  },
];

// ─── Footer links (language-independent) ─────────────────────────────────────

export const footerLinks = [
  { href: personal.github.url, label: "GH" },
  { href: personal.linkedin.url, label: "LI" },
];

// ─────────────────────────────────────────────────────────────────────────────
// LOCALIZED CONTENT
// Edit both `da` and `en` blocks when updating text content.
// ─────────────────────────────────────────────────────────────────────────────

export const locales = {

  // ─── DANISH (default) ──────────────────────────────────────────────────────
  da: {
    navigation: [
      { href: "#about",    label: "Om mig"   },
      { href: "#skills",   label: "Kompetencer" },
      { href: "#projects", label: "Projekter" },
      { href: "#contact",  label: "Kontakt"  },
    ] as NavLink[],

    hero: {
      availability: "Åben for juniorstillinger, studiejobs og samarbejder",
      locationLabel: "Odense, Danmark",
      get preLabel() {
        return `${this.availability} · Baseret i ${this.locationLabel}`;
      },
      roles: [
        "C# / .NET Udvikler",
        "Softwareudvikler",
        "Datamatikerstuderende",
        "Sikkerhedsbevidst udvikler",
        "Umbraco Certificeret Professionel",
      ],
      description:
        "Datamatikerstuderende med fokus på C#/.NET, SQL og sikkerhedsbevidst softwareudvikling. Praktisk erfaring fra MedCom — analyse, datamodellering og backend/frontend-udvikling i et reelt udviklingsmiljø. Baseret i Odense og åben for juniorstillinger, studiejobs og samarbejder.",
      cta: {
        primary:   { label: "Se projekter",  href: "#projects" },
        secondary: { label: "Tag kontakt",   href: "#contact"  },
      },
    },

    about: {
      sectionLabel: "01 / Om mig",
      heading: "HVEM ER JEG",
      linkedinLabel: "LinkedIn",
      githubLabel:   "GitHub",
      paragraphs: [
        [
          { text: "Jeg er datamatikerstuderende på UCL Vejle med praktisk erfaring inden for " },
          { text: "C#, .NET, ASP.NET Core, SQL og sikkerhedsbevidst softwareudvikling", className: "text-text" },
          { text: ", herunder arbejde med ren arkitektur, databaser og systemintegration." },
        ],
        [
          { text: "Gennem mit praktikophold hos " },
          { text: "MedCom", className: "text-accent" },
          { text: " arbejdede jeg med analyse, datamodellering, backend/frontend-udvikling, audit-logging og dataintegritet i et reelt udviklingsmiljø. Samarbejdet fortsætter som del af mit afsluttende projekt." },
        ],
        [
          { text: "Jeg har en reel interesse for " },
          { text: "IT-sikkerhed, ren arkitektur og domenedrevet design", className: "text-text" },
          { text: " — ikke kun som buzzwords, men som principper jeg aktivt anvender i mine projekter." },
        ],
        [
          { text: "Aktuelt baseret i " },
          { text: "Odense, Danmark", className: "text-accent" },
          { text: ", og åben for relevante muligheder i Danmark eller remote." },
        ],
      ] as Segment[][],
      stats: [
        { num: "", label: "Praktisk erfaring fra MedCom"    },
        { num: "", label: "Fokus på C#/.NET og databaser"   },
        { num: "", label: "Sikkerhedsbevidst udvikling"      },
        { num: "", label: "Web, backend og integration"      },
      ] as Stat[],
    },

    skills: {
      sectionLabel: "02 / Kompetencer",
      heading: "FAGLIGE KOMPETENCER",
      moreLabel: "Se fulde kompetenceprofil på",
      moreLinkLabel: "LinkedIn",
    },

    projects: {
      sectionLabel: "03 / Projekter",
      heading: "ARBEJDE",
      privateLabel: "Privat",
      moreLabel: "Yderligere projekter og kode på",
      moreLinkLabel: "GitHub",
      loadMoreLabel: "Se flere projekter",
    },

    contact: {
      sectionLabel: "04 / Kontakt",
      heading: "LAD OS TALE",
      intro:
        "Uanset om det er en projektidé, en studiejobmulighed eller blot en samtale om software — vil jeg meget gerne høre fra dig.",
      namePlaceholder:    "Dit navn",
      emailPlaceholder:   "navn@email.com",
      messagePlaceholder: "Fortæl mig om din idé, stilling eller projekt...",
      nameLabel:    "Navn",
      emailLabel:   "Email",
      messageLabel: "Besked",
      sendLabel:    "Send besked",
      sendingLabel: "Sender...",
      sentLabel:    "Besked sendt ✓",
      errorLabel:   "Fejl — prøv igen",
    },

    footer: {
      builtWith: "Bygget med Next.js & Tailwind",
      privacy: "Denne hjemmeside bruger anonym webanalyse til at forstå trafik og forbedre oplevelsen. Der anvendes ikke tredjepartscookies til dette formål.",
    },
  },

  // ─── ENGLISH ───────────────────────────────────────────────────────────────
  en: {
    navigation: [
      { href: "#about",    label: "About"    },
      { href: "#skills",   label: "Skills"   },
      { href: "#projects", label: "Projects" },
      { href: "#contact",  label: "Contact"  },
    ] as NavLink[],

    hero: {
      availability: "Open to junior roles, student jobs, and collaborations",
      locationLabel: "Odense, Denmark",
      get preLabel() {
        return `${this.availability} · Based in ${this.locationLabel}`;
      },
      roles: [
        "C# / .NET Developer",
        "Software Developer",
        "Datamatiker Student",
        "Security-aware Developer",
        "Umbraco Certified Professional",
      ],
      description:
        "Datamatiker student with a focus on C#/.NET, SQL, and security-aware software development. Practical experience from MedCom — analysis, data modelling, and backend/frontend development in a real environment. Based in Odense and open to junior roles, student jobs, and collaborations.",
      cta: {
        primary:   { label: "View Projects", href: "#projects" },
        secondary: { label: "Get in Touch",  href: "#contact"  },
      },
    },

    about: {
      sectionLabel: "01 / About",
      heading: "WHO I AM",
      linkedinLabel: "LinkedIn",
      githubLabel:   "GitHub",
      paragraphs: [
        [
          { text: "I am a Datamatiker student at UCL Vejle with hands-on experience in " },
          { text: "C#, .NET, ASP.NET Core, SQL, and security-aware software development", className: "text-text" },
          { text: ", including work with clean architecture, databases, and system integration." },
        ],
        [
          { text: "Through my internship at " },
          { text: "MedCom", className: "text-accent" },
          { text: ", I worked with analysis, data modelling, backend/frontend development, audit logging, and data integrity. The collaboration continues as part of my final project." },
        ],
        [
          { text: "I have a genuine interest in " },
          { text: "IT security, clean architecture, and domain-driven design", className: "text-text" },
          { text: " — not just as buzzwords, but as principles I actively apply in my projects." },
        ],
        [
          { text: "Currently based in " },
          { text: "Odense, Denmark", className: "text-accent" },
          { text: ", and open to relevant opportunities in Denmark or remote." },
        ],
      ] as Segment[][],
      stats: [
        { num: "", label: "Practical experience from MedCom" },
        { num: "", label: "Focus on C#/.NET and databases"    },
        { num: "", label: "Security-aware development"        },
        { num: "", label: "Web, backend, and integration"     },
      ] as Stat[],
    },

    skills: {
      sectionLabel: "02 / Skills",
      heading: "SKILLS & FOCUS AREAS",
      moreLabel: "Full competence profile on",
      moreLinkLabel: "LinkedIn",
    },

    projects: {
      sectionLabel: "03 / Projects",
      heading: "WORK",
      privateLabel: "Private",
      moreLabel: "Additional projects and code on",
      moreLinkLabel: "GitHub",
      loadMoreLabel: "Show more projects",
    },

    contact: {
      sectionLabel: "04 / Contact",
      heading: "LET'S TALK",
      intro:
        "Whether it's a project idea, a student job opportunity, or just a conversation about software — I'd love to hear from you.",
      namePlaceholder:    "Your name",
      emailPlaceholder:   "name@email.com",
      messagePlaceholder: "Tell me about your idea, role, or project...",
      nameLabel:    "Name",
      emailLabel:   "Email",
      messageLabel: "Message",
      sendLabel:    "Send Message",
      sendingLabel: "Sending...",
      sentLabel:    "Message Sent ✓",
      errorLabel:   "Error — Try Again",
    },

    footer: {
      builtWith: "Built with Next.js & Tailwind",
      privacy: "This website uses anonymous web analytics to understand traffic and improve the experience. No third-party cookies are used for this purpose.",
    },
  },
} as const;