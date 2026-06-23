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

export interface ProjectDetails {
  context: string;
  role: string;
  built: string[];
  techStack: string;
  quality: string[];
}

export interface Project {
  num: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  live: string | null;
  image?: string;
  featured?: boolean;
  details?: {
    da: ProjectDetails;
    en: ProjectDetails;
  };
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
      "EF Core",
      "SQL",
      "React / TypeScript",
      "Vite",
      "HTML / CSS",
    ],
  },
  {
    category: "Architecture & Development",
    skills: [
      "Clean Architecture",
      "Domain-Driven Design",
      "REST APIs",
      "OOP / SOLID",
      "Software Design Patterns",
      "Microservices",
    ],
  },
  {
    category: "Security & Quality",
    skills: [
      "Security by Design",
      "Burp Suite",
      "Threat Modeling",
      "OWASP Top 10",
      "GDPR Awareness",
      "xUnit / Integration Testing",
      "CI/CD",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git / GitHub",
      "Docker",
      "GitHub Actions",
      "Postman / Swagger",
      "SQLite",
      "SQL Server",
    ],
  },
];

// ─── Projects (language-independent — titles stay in original language) ───────
// featured: true  → shown immediately (top 3)
// featured: false → visible after "load more"

export const projects: Project[] = [
  {
    num: "01",
    title: "MedCom.AIGuide — AI Decision-Support Tool",
    description:
      "Final datamatiker project developed in a MedCom context. A web-based decision-support tool to help users assess whether AI is appropriate for specific work situations, which tool type can be recommended, and what precautions should be taken. Built with ASP.NET Core, Clean Architecture, React/TypeScript, EF Core/SQLite, and a deterministic decision engine with 23 rules. Includes admin authentication, login rate limiting, Burp Suite security testing, Docker setup, 186 automated tests, and GitHub Actions CI.",
    tags: ["ASP.NET Core", "React", "TypeScript", "Clean Architecture", "EF Core", "SQLite", "Security", "Docker", "CI/CD", "Burp Suite"],
    link: "https://github.com/AmjadRenno/MedCom-AIGuide",
    live: null,
    image: "/projectImages/MedCom_AIGuide.png",
    featured: true,
    details: {
      da: {
        context: "Afsluttende datamatikerprojekt udviklet i en MedCom-kontekst som et webbaseret beslutningsstøtteværktøj til sikker og ansvarlig brug af AI.",
        role: "Full-stack udvikler (afsluttende projekt).",
        built: [
          "Deterministisk beslutningsmotor med 23 regler",
          "Admin-autentificering og login rate limiting",
          "React/TypeScript frontend med Vite",
          "EF Core/SQLite datalag",
          "Docker-opsætning",
          "GitHub Actions CI",
        ],
        techStack: "ASP.NET Core · React · TypeScript · EF Core · SQLite · Docker · GitHub Actions",
        quality: [
          "186 automatiserede tests",
          "Burp Suite sikkerhedstest",
          "Clean Architecture",
          "GitHub",
        ],
      },
      en: {
        context: "Final datamatiker project developed in a MedCom context as a web-based decision-support tool for safe and responsible AI use.",
        role: "Full-stack developer (final project).",
        built: [
          "Deterministic decision engine with 23 rules",
          "Admin authentication and login rate limiting",
          "React/TypeScript frontend with Vite",
          "EF Core/SQLite data layer",
          "Docker setup",
          "GitHub Actions CI",
        ],
        techStack: "ASP.NET Core · React · TypeScript · EF Core · SQLite · Docker · GitHub Actions",
        quality: [
          "186 automated tests",
          "Burp Suite security testing",
          "Clean Architecture",
          "GitHub",
        ],
      },
    },
  },
  {
    num: "02",
    title: "Godkendelsesoversigt – MedCom",
    description:
      "Web and database solution developed in a real internship setting to support approval overview workflows. Focus areas included analysis, planning, data modelling, backend/frontend development, audit logging, and data integrity.",
    tags: ["Java", "Web", "Database", "Audit Logging", "Data Modelling"],
    link: null,
    live: null,
    image: "/projectImages/MedCom.png",
    featured: true,
    details: {
      da: {
        context: "Intern web- og databaseløsning udviklet under mit praktikophold hos MedCom til at understøtte godkendelsesoversigtworkflows.",
        role: "Full-stack praktikant-udvikler.",
        built: [
          "Editor/admin-workflows",
          "Audit-logging",
          "CSV/PDF-eksport",
          "Datamodellering",
          "Backend/frontend-funktionalitet",
        ],
        techStack: "Java · MariaDB · JavaScript · Docker · WildFly",
        quality: [
          "UML-diagrammer",
          "Dokumentation",
          "Brugervejledning",
          "Validering",
          "Unit testing",
          "API testing",
          "Deployment på Coolify",
        ],
      },
      en: {
        context: "Internal web and database solution developed during my MedCom internship to support approval overview workflows.",
        role: "Full-stack intern developer.",
        built: [
          "Editor/admin workflows",
          "Audit logging",
          "CSV/PDF export",
          "Data modelling",
          "Backend/frontend functionality",
        ],
        techStack: "Java · MariaDB · JavaScript · Docker · WildFly",
        quality: [
          "UML diagrams",
          "Documentation",
          "User guide",
          "Validation",
          "Unit testing",
          "API testing",
          "Deployment on Coolify",
        ],
      },
    },
  },
  {
    num: "03",
    title: "DentalClinic-Microservices",
    description:
      ".NET 10 microservices dental clinic platform with Domain-Driven Design architecture. Features Umbraco CMS, YARP Gateway, JWT authentication, Dapr messaging, role-based access control, and .NET Aspire orchestration. Independent services with SQLite databases following DDD patterns.",
    tags: ["Microservices", ".NET 10", "Domain-Driven Design", "Umbraco CMS", "YARP Gateway", "Dapr", "JWT Auth", ".NET Aspire"],
    link: "https://github.com/AmjadRenno/DentalClinic-Microservices",

    live: null,
    image: "/projectImages/DentalClinic-Microservices.png",
    featured: true,
    details: {
      da: {
        context: ".NET 10 mikroserviceplatform til tandklinikadministration med domænedrevet design og selvstændige services.",
        role: "Full-stack udvikler (personligt projekt).",
        built: [
          "YARP API Gateway",
          "JWT-autentificering",
          "Dapr-messaging mellem services",
          "Rollebaseret adgangskontrol",
          "Umbraco CMS-integration",
          ".NET Aspire-orkestrering",
        ],
        techStack: ".NET 10 · C# · SQLite · Dapr · YARP · Umbraco · JWT",
        quality: [
          "DDD-mønstre",
          "Selvstændige service-databaser",
          "Dokumentation",
          "GitHub",
        ],
      },
      en: {
        context: ".NET 10 microservices platform for dental clinic management with Domain-Driven Design and independent services.",
        role: "Full-stack developer (personal project).",
        built: [
          "YARP API Gateway",
          "JWT authentication",
          "Dapr inter-service messaging",
          "Role-based access control",
          "Umbraco CMS integration",
          ".NET Aspire orchestration",
        ],
        techStack: ".NET 10 · C# · SQLite · Dapr · YARP · Umbraco · JWT",
        quality: [
          "DDD patterns",
          "Independent service databases",
          "Documentation",
          "GitHub",
        ],
      },
    },
  },
  {
    num: "04",
    title: "TANA Travel Management",
    description:
      "Travel booking and itinerary management platform built with ASP.NET Core 8 and Clean Architecture, including multilingual support and PDF travel plan generation.",
    tags: ["ASP.NET Core", "C#", "Clean Architecture", "PDF", "Multilingual"],
    link: "https://github.com/AmjadRenno/TANA-Travel-Management",
    live: null,
    image: "/projectImages/TANA Travel Management.png",
    featured: false,
    details: {
      da: {
        context: "Rejsebooking- og rejseplanadministrationsplatform bygget med ASP.NET Core 8 og ren arkitektur.",
        role: "Full-stack udvikler (personligt projekt).",
        built: [
          "Rejseplansadministration",
          "PDF-generering af rejseplaner",
          "Flersproget understøttelse",
          "Booking-workflows",
          "REST API",
        ],
        techStack: "ASP.NET Core 8 · C# · Clean Architecture · PDF",
        quality: [
          "Ren arkitektur",
          "Dokumentation",
          "GitHub",
        ],
      },
      en: {
        context: "Travel booking and itinerary management platform built with ASP.NET Core 8 and Clean Architecture.",
        role: "Full-stack developer (personal project).",
        built: [
          "Itinerary management",
          "PDF travel plan generation",
          "Multilingual support",
          "Booking workflows",
          "REST API",
        ],
        techStack: "ASP.NET Core 8 · C# · Clean Architecture · PDF",
        quality: [
          "Clean architecture",
          "Documentation",
          "GitHub",
        ],
      },
    },
  },
  {
    num: "05",
    title: "EcoTasks AirGuard NASA",
    description:
      "Blazor WebAssembly and ASP.NET Core application combining air-quality and weather data into a near real-time environmental dashboard concept.",
    tags: ["Blazor", "ASP.NET Core", "API Integration", "Dashboard"],
    link: "https://github.com/AmjadRenno/EcoTasks-AirGuard-NASA",
    live: null,
    image: "/projectImages/EcoTasks AirGuard NASA.png",
    featured: false,
    details: {
      da: {
        context: "Blazor WebAssembly-applikation der kombinerer luftkvalitets- og vejrdata til et næsten realtids miljødashboard.",
        role: "Full-stack udvikler (personligt projekt).",
        built: [
          "Luftkvalitetsdashboard",
          "Vejrdataintegration",
          "NASA API-integration",
          "Realtidsopdateringer",
          "Blazor WebAssembly UI",
        ],
        techStack: "Blazor · ASP.NET Core · NASA API · REST API",
        quality: [
          "API-integration",
          "Dokumentation",
          "GitHub",
        ],
      },
      en: {
        context: "Blazor WebAssembly application combining air-quality and weather data into a near real-time environmental dashboard.",
        role: "Full-stack developer (personal project).",
        built: [
          "Air quality dashboard",
          "Weather data integration",
          "NASA API integration",
          "Real-time updates",
          "Blazor WebAssembly UI",
        ],
        techStack: "Blazor · ASP.NET Core · NASA API · REST API",
        quality: [
          "API integration",
          "Documentation",
          "GitHub",
        ],
      },
    },
  },
  {
    num: "06",
    title: "EDC",
    description:
      "Internal real estate management coursework project built as a Windows Forms application for managing realtors, customers, and property-related workflows.",
    tags: ["C#", "Windows Forms", "Desktop App", "Course Project"],
    link: "https://github.com/AmjadRenno/EDC",
    live: null,
    image: "/projectImages/EDC.png",
    featured: false,
    details: {
      da: {
        context: "Ejendomsadministrationsprojekt bygget som Windows Forms-applikation til administration af ejendomsmæglere, kunder og ejendomsworkflows.",
        role: "Udvikler (kursusprojekt).",
        built: [
          "Ejendomsmæglerregistrering",
          "Kundedatabasestyring",
          "Ejendomsworkflows",
          "Windows Forms UI",
        ],
        techStack: "C# · Windows Forms · SQL Server",
        quality: [
          "Dokumentation",
          "GitHub",
        ],
      },
      en: {
        context: "Real estate management coursework project built as a Windows Forms desktop application.",
        role: "Developer (course project).",
        built: [
          "Realtor registration",
          "Customer database management",
          "Property workflows",
          "Windows Forms UI",
        ],
        techStack: "C# · Windows Forms · SQL Server",
        quality: [
          "Documentation",
          "GitHub",
        ],
      },
    },
  },
  {
    num: "07",
    title: "Umbraco Fundamentals Training",
    description:
      "Practice project from Umbraco Fundamentals training to explore core CMS concepts and implementation skills.",
    tags: ["Umbraco", "CMS", "Training", "Content Management"],
    link: "https://github.com/AmjadRenno/umbraco-fundamentals-training",
    live: null,
    image: "/projectImages/Umbraco Fundamentals Training.png",
    featured: false,
    details: {
      da: {
        context: "Øvelsesprojekt fra Umbraco Fundamentals-træning til at udforske kernen i CMS-koncepter og implementeringsfærdigheder.",
        role: "Udvikler (træningsprojekt).",
        built: [
          "CMS-indholdsopsætning",
          "Dokumenttyper og skabeloner",
          "Umbraco backoffice-konfiguration",
          "Frontend-rendering",
        ],
        techStack: "Umbraco · C# · Razor · ASP.NET Core",
        quality: [
          "Umbraco Certified Professional",
          "GitHub",
        ],
      },
      en: {
        context: "Practice project from Umbraco Fundamentals training to explore core CMS concepts and implementation skills.",
        role: "Developer (training project).",
        built: [
          "CMS content setup",
          "Document types and templates",
          "Umbraco backoffice configuration",
          "Frontend rendering",
        ],
        techStack: "Umbraco · C# · Razor · ASP.NET Core",
        quality: [
          "Umbraco Certified Professional",
          "GitHub",
        ],
      },
    },
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
        return `Nyuddannet datamatiker · ${this.locationLabel}\n${this.availability}`;
      },
      roles: [
        "C# / .NET Udvikler",
        "Softwareudvikler",
        "Nyuddannet datamatiker",
        "Sikkerhedsbevidst udvikler",
        "Umbraco Certificeret Professionel",
      ],
      description:
        "Nyuddannet datamatiker fra UCL Vejle med fokus på C#/.NET, ASP.NET Core, databaser og sikkerhedsbevidst softwareudvikling. Praktisk erfaring fra MedCom med analyse, datamodellering, backend/frontend-udvikling, test og sikkerhedsarbejde i et reelt udviklingsmiljø. Baseret i Odense og åben for juniorstillinger, studiejob og relevante samarbejder.",
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
          { text: "Jeg er nyuddannet datamatiker fra " },
          { text: "UCL Vejle", className: "text-accent" },
          { text: " med praktisk erfaring inden for " },
          { text: "C#, .NET, ASP.NET Core, SQL og sikkerhedsbevidst softwareudvikling", className: "text-text" },
          { text: ". Jeg arbejder især med ren arkitektur, databaser, API-design og systemintegration." },
        ],
        [
          { text: "Gennem mit praktikforløb hos " },
          { text: "MedCom", className: "text-accent" },
          { text: " arbejdede jeg med analyse, datamodellering, backend/frontend-udvikling, audit-logging og dataintegritet i et reelt udviklingsmiljø." },
        ],
        [
          { text: "Mit afsluttende projekt, " },
          { text: "MedCom.AIGuide", className: "text-accent" },
          { text: ", blev udviklet i en MedCom-kontekst som et webbaseret beslutningsstøtteværktøj til sikker og ansvarlig brug af AI. Projektet kombinerede " },
          { text: "Clean Architecture, ASP.NET Core, React/TypeScript, EF Core/SQLite, deterministisk beslutningslogik, sikkerhedstest med Burp Suite og GitHub Actions CI", className: "text-text" },
          { text: "." },
        ],
        [
          { text: "Jeg har en særlig interesse for " },
          { text: "sikkerhedsbevidst softwareudvikling, ren arkitektur og domænedrevet design", className: "text-text" },
          { text: " — ikke som buzzwords, men som principper jeg forsøger at anvende konkret i mine projekter." },
        ],
      ] as Segment[][],
      stats: [
        { num: "", label: "NYUDDANNET DATAMATIKER — UCL VEJLE 2026" },
        { num: "", label: "PRAKTISK ERFARING FRA MEDCOM"             },
        { num: "", label: "C# / .NET / ASP.NET CORE"                 },
        { num: "", label: "CLEAN ARCHITECTURE & SECURITY-AWARE DEV"  },
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
      viewDetailsLabel: "Se detaljer",
      detailsContextLabel: "Kontekst",
      detailsRoleLabel: "Min rolle",
      detailsBuiltLabel: "Bygget",
      detailsTechLabel: "Tech stack",
      detailsQualityLabel: "Kvalitet & levering",
    },

    contact: {
      sectionLabel: "04 / Kontakt",
      heading: "LAD OS TALE",
      intro:
        "Åben for juniorstillinger, studiejob og relevante softwareprojekter.",
      namePlaceholder:    "Dit navn",
      emailPlaceholder:   "navn@email.com",
      messagePlaceholder: "Fortæl mig kort om stillingen, projektet eller samarbejdet...",
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
        return `Newly graduated Datamatiker · ${this.locationLabel}\n${this.availability}`;
      },
      roles: [
        "C# / .NET Developer",
        "Software Developer",
        "Newly graduated Datamatiker",
        "Security-aware Developer",
        "Umbraco Certified Professional",
      ],
      description:
        "Newly graduated Datamatiker from UCL Vejle with a focus on C#/.NET, ASP.NET Core, databases, and security-aware software development. Practical experience from MedCom with analysis, data modelling, backend/frontend development, testing, and security work in a real development environment. Based in Odense and open to junior roles, student jobs, and relevant collaborations.",
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
          { text: "I am a newly graduated Datamatiker from " },
          { text: "UCL Vejle", className: "text-accent" },
          { text: " with hands-on experience in " },
          { text: "C#, .NET, ASP.NET Core, SQL, and security-aware software development", className: "text-text" },
          { text: ". My primary focus is clean architecture, databases, API design, and system integration." },
        ],
        [
          { text: "Through my internship at " },
          { text: "MedCom", className: "text-accent" },
          { text: ", I worked with analysis, data modelling, backend/frontend development, audit logging, and data integrity in a real development environment." },
        ],
        [
          { text: "My final project, " },
          { text: "MedCom.AIGuide", className: "text-accent" },
          { text: ", was developed in a MedCom context as a web-based decision-support tool for safe and responsible AI use. It combined " },
          { text: "Clean Architecture, ASP.NET Core, React/TypeScript, EF Core/SQLite, deterministic decision logic, security testing with Burp Suite, and GitHub Actions CI", className: "text-text" },
          { text: "." },
        ],
        [
          { text: "I have a particular interest in " },
          { text: "security-aware software development, clean architecture, and domain-driven design", className: "text-text" },
          { text: " — not as buzzwords, but as principles I actively try to apply in my projects." },
        ],
      ] as Segment[][],
      stats: [
        { num: "", label: "NEWLY GRADUATED DATAMATIKER — UCL VEJLE 2026" },
        { num: "", label: "PRACTICAL EXPERIENCE FROM MEDCOM"              },
        { num: "", label: "C# / .NET / ASP.NET CORE"                      },
        { num: "", label: "CLEAN ARCHITECTURE & SECURITY-AWARE DEV"       },
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
      viewDetailsLabel: "View details",
      detailsContextLabel: "Context",
      detailsRoleLabel: "My role",
      detailsBuiltLabel: "Built",
      detailsTechLabel: "Tech stack",
      detailsQualityLabel: "Quality & delivery",
    },

    contact: {
      sectionLabel: "04 / Contact",
      heading: "LET'S TALK",
      intro:
        "Open to junior roles, student jobs, and relevant software projects.",
      namePlaceholder:    "Your name",
      emailPlaceholder:   "name@email.com",
      messagePlaceholder: "Tell me briefly about the role, project, or collaboration...",
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