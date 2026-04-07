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
  skills: Array<{ name: string; level: number }>;
}

export interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  live: string | null;
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
// Groups ordered by professional focus weight:
//   1. Core — primary identity (.NET, SQL, REST)
//   2. IT Security — key differentiator
//   3. Architecture & Design — serious professional interest
//   4. Tools & Platforms — supporting day-to-day work
//   5. Frontend & CMS — secondary, real project experience
//
export const skillGroups: SkillGroup[] = [
  {
    category: "C# / .NET & Databases",
    skills: [
      { name: "C# / .NET",    level: 85 },
      { name: "ASP.NET Core", level: 80 },
      { name: "EF Core",      level: 78 },
      { name: "REST APIs",    level: 80 },
      { name: "SQL Server",   level: 82 },
      { name: "PostgreSQL",   level: 70 },
      { name: "MariaDB",      level: 72 },
    ],
  },
  {
    category: "IT Security",
    skills: [
      { name: "OWASP Top 10",       level: 78 },
      { name: "Secure Coding",      level: 74 },
      { name: "Security by Design", level: 72 },
      { name: "JWT / BCrypt",       level: 72 },
      { name: "GDPR / ISO 27001",   level: 68 },
      { name: "Threat Modeling",    level: 65 },
    ],
  },
  {
    category: "Architecture & Design",
    skills: [
      { name: "Clean Architecture",    level: 76 },
      { name: "OOP / SOLID",           level: 78 },
      { name: "Domain-Driven Design",  level: 74 },
      { name: "Microservices",         level: 72 },
      { name: "Software Design Patterns", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub",           level: 82 },
      { name: "Docker",                 level: 72 },
      { name: "Postman / Swagger",      level: 75 },
      { name: "CI/CD / GitHub Actions", level: 65 },
      { name: "DevOps / DevSecOps",     level: 65 },
    ],
  },
  {
    category: "Frontend & CMS",
    skills: [
      { name: "Blazor",      level: 78 },
      { name: "HTML / CSS",  level: 82 },
      { name: "JavaScript",  level: 65 },
      { name: "Umbraco CMS", level: 80 },
    ],
  },
];

// ─── Projects (language-independent — titles stay in original language) ───────

export const projects: Project[] = [
  {
    num: "01",
    title: "Godkendelsesoversigt – MedCom",
    description:
      "Web and database solution developed in a real internship setting to support approval overview workflows. Focus areas included analysis, planning, data modelling, backend/frontend development, audit logging, and data integrity.",
    tags: ["Java", "Web", "Database", "Audit Logging", "Data Modelling"],
    link: null,
    live: null,
  },
  {
    num: "02",
    title: "TANA Travel Management",
    description:
      "Travel booking and itinerary management platform built with ASP.NET Core 8 and Clean Architecture, including multilingual support and PDF travel plan generation.",
    tags: ["ASP.NET Core", "C#", "Clean Architecture", "PDF", "Multilingual"],
    link: "https://github.com/AmjadRenno/TANA-Travel-Management",
    live: null,
  },
  {
    num: "03",
    title: "DentalClinic-Microservices",
    description:
      ".NET 10 microservices dental clinic platform with Domain-Driven Design architecture. Features Umbraco CMS, YARP Gateway, JWT authentication, Dapr messaging, role-based access control, and .NET Aspire orchestration. Independent services with SQLite databases following DDD patterns.",
    tags: ["Microservices", ".NET 10", "Domain-Driven Design", "Umbraco CMS", "YARP Gateway", "Dapr", "JWT Auth", ".NET Aspire"],
    link: "https://github.com/AmjadRenno/DentalClinic-Microservices",
    live: null,
  },
  {
    num: "04",
    title: "EcoTasks AirGuard NASA",
    description:
      "Blazor WebAssembly and ASP.NET Core application combining air-quality and weather data into a near real-time environmental dashboard concept.",
    tags: ["Blazor", "ASP.NET Core", "API Integration", "Dashboard"],
    link: "https://github.com/AmjadRenno/EcoTasks-AirGuard-NASA",
    live: null,
  },
  {
    num: "05",
    title: "EDC",
    description:
      "Internal real estate management coursework project built as a Windows Forms application for managing realtors, customers, and property-related workflows.",
    tags: ["C#", "Windows Forms", "Desktop App", "Course Project"],
    link: "https://github.com/AmjadRenno/EDC",
    live: null,
  },
  {
    num: "06",
    title: "Umbraco Fundamentals Training",
    description:
      "Practice project created during Umbraco Fundamentals training to strengthen core CMS concepts and implementation skills.",
    tags: ["Umbraco", "CMS", "Training", "Content Management"],
    link: "https://github.com/AmjadRenno/umbraco-fundamentals-training",
    live: null,
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
        "Datamatikerstuderende med stærkt fokus på C#/.NET, SQL/databaser og sikkerhedsbevidst softwareudvikling — understøttet af praktisk erfaring med arkitektur, systemintegration og CMS-platforme.",
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
          { text: ", har jeg arbejdet med analyse, datamodellering, backend/frontend-udvikling, audit/logging og dataintegritet i et rigtigt udviklingsmiljø." },
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
        { num: "1",    label: "Praktikophold hos MedCom" },
        { num: "6",    label: "Offentlige GitHub repositories" },
        { num: "2025", label: "Umbraco certificeret" },
        { num: "3+",   label: "Kerneområder" },
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
        "Datamatiker student with a strong focus on C#/.NET, SQL/databases, and security-aware software development — backed by practical experience with clean architecture, system integration, and CMS platforms.",
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
          { text: ", I have worked with analysis, data modelling, backend/frontend development, audit logging, and data integrity in a real development environment." },
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
        { num: "1",    label: "Internship at MedCom"        },
        { num: "6",    label: "Public GitHub Repositories"  },
        { num: "2025", label: "Umbraco Certified"           },
        { num: "3+",   label: "Core Focus Areas"            },
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
    },
  },
} as const;