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
  description: string;
  context: string;
  role: string;
  built: string[];
  techStack: string;
  quality: string[];
}

export interface Project {
  num: string;
  title: string;
  localizedTitle?: {
    da: string;
    en: string;
  };
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
//   3. Security & Quality — applied in projects
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
    category: "AI & Agentic AI",
    skills: [
      "Agentic AI",
      "AI Agents",
      "RAG",
      "OpenAI API",
      "LLM Integration",
      "Function Calling",
      "Structured Outputs",
      "AI Guardrails",
      "Evidence Grounding",
      "Generative AI",
      "Python",
      "FastAPI",
      "Pydantic",
      "pytest",
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
        description: "Afsluttende datamatikerprojekt udviklet i en MedCom-kontekst. Et webbaseret beslutningsstøtteværktøj til at hjælpe brugere med at vurdere, om AI er passende i konkrete arbejdssituationer. Bygget med ASP.NET Core, Clean Architecture, React/TypeScript, EF Core/SQLite og en deterministisk beslutningsmotor med 23 regler. Inkluderer admin-autentificering, login rate limiting, Burp Suite-test, Docker-opsætning, 186 automatiserede tests og GitHub Actions CI.",
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
        description: "Final datamatiker project developed in a MedCom context. A web-based decision-support tool to help users assess whether AI is appropriate for specific work situations, which tool type can be recommended, and what precautions should be taken. Built with ASP.NET Core, Clean Architecture, React/TypeScript, EF Core/SQLite, and a deterministic decision engine with 23 rules. Includes admin authentication, login rate limiting, Burp Suite security testing, Docker setup, 186 automated tests, and GitHub Actions CI.",
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
    title: "Job Fit Agent",
    localizedTitle: {
      da: "Job Fit Agent — evidensbaseret AI-matchingsværktøj",
      en: "Job Fit Agent — evidence-first AI matching system",
    },
    description:
      "Personal project focused on agentic AI, RAG and evidence-based candidate matching. The system analyzes job postings against a candidate profile and generates traceable analyses and grounded cover letters. A guardrail layer validates AI-generated claims against verified candidate data to reduce the risk of hallucinated qualifications.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "RAG", "OpenAI API", "Structured Outputs", "Function Calling", "Pydantic", "pytest", "AI Guardrails"],
    link: "https://github.com/AmjadRenno/Job-Fit-Agent",
    live: null,
    image: "/projectImages/match-analysis.png",
    featured: true,
    details: {
      da: {
        description: "Personligt projekt udviklet med fokus på agentic AI, RAG og evidensbaseret kandidatmatchning. Systemet analyserer jobopslag mod en kandidatprofil og genererer sporbare analyser og grounded cover letters. Et guardrail-lag validerer AI-genererede påstande mod verificerede kandidatdata for at reducere risikoen for hallucinerede kvalifikationer.",
        context: "Personligt projekt udviklet med fokus på agentic AI, RAG og evidensbaseret kandidatmatchning.",
        role: "Full-stack udvikler (personligt projekt).",
        built: [
          "Kandidat- og jobanalyse",
          "Grounded cover letters",
          "Sporbare AI-analyser",
          "RAG-baseret informationsflow",
          "Guardrail-validering af AI-påstande",
        ],
        techStack: "Python · FastAPI · React · TypeScript · RAG · OpenAI API · Structured Outputs · Function Calling · Pydantic · pytest",
        quality: [
          "AI Guardrails",
          "Evidence Grounding",
          "GitHub",
        ],
      },
      en: {
        description: "Personal project focused on agentic AI, RAG and evidence-based candidate matching. The system analyzes job postings against a candidate profile and generates traceable analyses and grounded cover letters. A guardrail layer validates AI-generated claims against verified candidate data to reduce the risk of hallucinated qualifications.",
        context: "Personal project focused on agentic AI, RAG and evidence-based candidate matching.",
        role: "Full-stack developer (personal project).",
        built: [
          "Candidate and job analysis",
          "Grounded cover letters",
          "Traceable AI analyses",
          "RAG-based information flow",
          "Guardrail validation of AI claims",
        ],
        techStack: "Python · FastAPI · React · TypeScript · RAG · OpenAI API · Structured Outputs · Function Calling · Pydantic · pytest",
        quality: [
          "AI Guardrails",
          "Evidence Grounding",
          "GitHub",
        ],
      },
    },
  },
  {
    num: "03",
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
        description: "Web- og databaseløsning udviklet under et praktikophold til at understøtte godkendelsesoversigtworkflows. Fokusområder: analyse, planlægning, datamodellering, backend/frontend-udvikling, audit-logging og dataintegritet.",
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
        description: "Web and database solution developed in a real internship setting to support approval overview workflows. Focus areas included analysis, planning, data modelling, backend/frontend development, audit logging, and data integrity.",
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
    num: "04",
    title: "DentalClinic-Microservices",
    description:
      ".NET 10 microservices dental clinic platform with Domain-Driven Design architecture. Features Umbraco CMS, YARP Gateway, JWT authentication, Dapr messaging, role-based access control, and .NET Aspire orchestration. Independent services with SQLite databases following DDD patterns.",
    tags: ["Microservices", ".NET 10", "Domain-Driven Design", "Umbraco CMS", "YARP Gateway", "Dapr", "JWT Auth", ".NET Aspire"],
    link: "https://github.com/AmjadRenno/DentalClinic-Microservices",

    live: null,
    image: "/projectImages/DentalClinic-Microservices.png",
    featured: false,
    details: {
      da: {
        description: ".NET 10 mikroserviceplatform til tandklinikadministration med Domain-Driven Design-arkitektur. Inkluderer Umbraco CMS, YARP Gateway, JWT-autentificering, Dapr-messaging, rollebaseret adgangskontrol og .NET Aspire-orkestrering. Selvstændige services med SQLite-databaser efter DDD-mønstre.",
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
        description: ".NET 10 microservices dental clinic platform with Domain-Driven Design architecture. Features Umbraco CMS, YARP Gateway, JWT authentication, Dapr messaging, role-based access control, and .NET Aspire orchestration. Independent services with SQLite databases following DDD patterns.",
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
    num: "05",
    title: "Customizable B2B Commerce Portal for Industrial Suppliers",
    description:
      "Built with ASP.NET Core, supporting company accounts, custom pricing, quote workflows, and scalable architecture. Applied in a structured project context with focus on clean backend design and extensibility.",
    tags: ["ASP.NET Core", "B2B Commerce", "Custom Pricing", "Quote Workflow", "Scalable Architecture"],
    link: null,
    live: null,
    image: "/projectImages/Customizable B2B Commerce Portal for Industrial Suppliers.png",
    featured: false,
    details: {
      da: {
        description: "ASP.NET Core-baseret B2B handelsportal til industrielle leverandører med fokus på ren backend-arkitektur og udvidelsesmuligheder. Understøtter virksomhedskontoer, brugerdefineret prislogik, tilbudsworkflows og rollebaseret adgangskontrol.",
        context: "ASP.NET Core-baseret B2B handelsportal til industrielle leverandører med fokus på ren backend-arkitektur og udvidelsesmuligheder.",
        role: "Backend-udvikler (kursusprojekt).",
        built: [
          "Virksomhedskontoer og brugeradministration",
          "Brugerdefineret prislogik",
          "Tilbudsworkflows",
          "Produktkatalog",
          "Rollebaseret adgangskontrol",
        ],
        techStack: "ASP.NET Core · C# · SQL Server · EF Core · REST API",
        quality: [
          "Ren arkitektur",
          "Dokumentation",
          "Unit testing",
          "API testing",
        ],
      },
      en: {
        description: "Built with ASP.NET Core, supporting company accounts, custom pricing, quote workflows, and scalable architecture. Applied in a structured project context with focus on clean backend design and extensibility.",
        context: "ASP.NET Core B2B commerce portal for industrial suppliers, focused on clean backend architecture and extensibility.",
        role: "Backend developer (course project).",
        built: [
          "Company account management",
          "Custom pricing logic",
          "Quote workflows",
          "Product catalogue",
          "Role-based access control",
        ],
        techStack: "ASP.NET Core · C# · SQL Server · EF Core · REST API",
        quality: [
          "Clean architecture",
          "Documentation",
          "Unit testing",
          "API testing",
        ],
      },
    },
  },
  {
    num: "06",
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
        description: "Rejsebooking- og rejseplanadministrationsplatform bygget med ASP.NET Core 8 og Clean Architecture, med flersproget understøttelse og PDF-generering af rejseplaner.",
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
        description: "Travel booking and itinerary management platform built with ASP.NET Core 8 and Clean Architecture, including multilingual support and PDF travel plan generation.",
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
    num: "07",
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
        description: "Blazor WebAssembly og ASP.NET Core-applikation der kombinerer luftkvalitets- og vejrdata til et næsten realtids miljødashboard.",
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
        description: "Blazor WebAssembly and ASP.NET Core application combining air-quality and weather data into a near real-time environmental dashboard concept.",
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
    num: "08",
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
        description: "Ejendomsadministrationsprojekt bygget som Windows Forms-applikation til administration af ejendomsmæglere, kunder og ejendomsworkflows.",
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
        description: "Internal real estate management coursework project built as a Windows Forms application for managing realtors, customers, and property-related workflows.",
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
    num: "09",
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
        description: "Øvelsesprojekt fra Umbraco Fundamentals-træning til at udforske kernen i CMS-koncepter og implementeringsfærdigheder.",
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
        description: "Practice project from Umbraco Fundamentals training to explore core CMS concepts and implementation skills.",
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
      availability: "status: åben for junior- og graduate-muligheder",
      locationLabel: "Odense, Danmark",
      get preLabel() {
        return `Nyuddannet datamatiker · Junior C#/.NET Developer · ${this.locationLabel}\n${this.availability}`;
      },
      roles: [
        "Junior C# / .NET Developer",
        "Backend Developer",
        "Full-stack Developer",
        "Agentic AI / AI Developer",
        "Security-aware Developer",
        "Umbraco Certificeret Professionel",
      ],
      terminalLines: [
        "amjad.renno",
        "fokus: C# / .NET / ASP.NET Core / agentic AI",
        "status: åben for junior- og graduate-muligheder",
        "lokation: Odense, Danmark",
      ],
      description:
        "Nyuddannet datamatiker fra UCL Vejle med praktisk erfaring fra MedCom inden for analyse, datamodellering, backend/frontend-udvikling og sikkerhedsbevidst softwareudvikling. Jeg arbejder primært med C#/.NET, ASP.NET Core, SQL, React/TypeScript og API-udvikling. Jeg har desuden praktisk erfaring med generativ AI og agentic AI gennem mit projekt Job Fit Agent.",
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
          { text: ". Jeg arbejder især med backend-udvikling, databaser, API-design, systemintegration og ren arkitektur." },
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
          { text: "Mit personlige projekt, " },
          { text: "Job Fit Agent", className: "text-accent" },
          { text: ", arbejder jeg med agentic AI, RAG og evidensbaseret kandidatmatchning. Jeg bruger OpenAI API, function calling, structured outputs og evidence-grounded validering til at reducere risikoen for hallucinerede kvalifikationer." },
        ],
        [
          { text: "Jeg har en særlig interesse for " },
          { text: "sikkerhedsbevidst softwareudvikling, ren arkitektur, domænedrevet design og agentic AI", className: "text-text" },
          { text: " — ikke som buzzwords, men som principper jeg forsøger at anvende konkret i mine projekter." },
        ],
      ] as Segment[][],
      stats: [
        { num: "", label: "NYUDDANNET DATAMATIKER — UCL VEJLE 2026" },
        { num: "", label: "PRAKTISK ERFARING FRA MEDCOM"             },
        { num: "", label: "C# / .NET / ASP.NET CORE / SQL"           },
        { num: "", label: "AGENTIC AI / RAG / OPENAI API"            },
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
        "Åben for juniorstillinger, graduate- og trainee-muligheder samt relevante softwareprojekter.",
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
      availability: "status: open to junior and graduate opportunities",
      locationLabel: "Odense, Denmark",
      get preLabel() {
        return `Newly Graduated Computer Science AP Graduate · Junior C#/.NET Developer · ${this.locationLabel}\n${this.availability}`;
      },
      roles: [
        "Junior C# / .NET Developer",
        "Backend Developer",
        "Full-stack Developer",
        "Agentic AI / AI Developer",
        "Security-aware Developer",
        "Umbraco Certified Professional",
      ],
      terminalLines: [
        "amjad.renno",
        "focus: C# / .NET / ASP.NET Core / agentic AI",
        "status: open to junior and graduate opportunities",
        "location: Odense, Denmark",
      ],
      description:
        "Newly graduated Computer Science AP graduate from UCL Vejle with practical experience from MedCom in analysis, data modelling, backend/frontend development and security-aware software development. I mainly work with C#/.NET, ASP.NET Core, SQL, React/TypeScript and API development. I also have practical experience with generative AI and agentic AI through my Job Fit Agent project.",
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
          { text: "I am a newly graduated Computer Science AP graduate from " },
          { text: "UCL Vejle", className: "text-accent" },
          { text: " with hands-on experience in " },
          { text: "C#, .NET, ASP.NET Core, SQL, and security-aware software development", className: "text-text" },
          { text: ". My primary focus is backend development, databases, API design, system integration, and clean architecture." },
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
          { text: "My personal project, " },
          { text: "Job Fit Agent", className: "text-accent" },
          { text: ", focuses on agentic AI, RAG, and evidence-based candidate matching. I use OpenAI API, function calling, structured outputs, and evidence-grounded validation to reduce the risk of hallucinated qualifications." },
        ],
        [
          { text: "I have a particular interest in " },
          { text: "security-aware software development, clean architecture, domain-driven design, and agentic AI", className: "text-text" },
          { text: " — not as buzzwords, but as principles I actively try to apply in my projects." },
        ],
      ] as Segment[][],
      stats: [
        { num: "", label: "NEWLY GRADUATED COMPUTER SCIENCE AP GRADUATE — UCL VEJLE 2026" },
        { num: "", label: "PRACTICAL EXPERIENCE FROM MEDCOM"                                },
        { num: "", label: "C# / .NET / ASP.NET CORE / SQL"                                  },
        { num: "", label: "AGENTIC AI / RAG / OPENAI API"                                   },
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
        "Open to junior, graduate and trainee opportunities, as well as relevant software projects.",
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