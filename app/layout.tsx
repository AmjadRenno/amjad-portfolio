import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "../context/LocaleContext";
import { Analytics } from "@vercel/analytics/next";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://www.amjadrenno.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Amjad Renno — Junior C#/.NET Developer",
    template: "%s | Amjad Renno",
  },
  description:
    "Amjad Renno — newly graduated Computer Science AP graduate based in Odense, Denmark. Focused on C#/.NET, ASP.NET Core, backend development, React/TypeScript, SQL, Clean Architecture, Docker, GitHub Actions, and agentic AI.",
  keywords: [
    "Amjad Renno",
    "Junior C#/.NET Developer",
    "Software Developer",
    "Backend Developer",
    "Full-stack Developer",
    "C# developer",
    ".NET developer",
    "ASP.NET Core",
    "React",
    "TypeScript",
    "REST APIs",
    "SQL",
    "Clean Architecture",
    "Docker",
    "GitHub Actions",
    "Agentic AI",
    "AI Agents",
    "RAG",
    "OpenAI API",
    "Function Calling",
    "AI Guardrails",
    "Odense",
    "junior developer Denmark",
    "backend development",
    "web development",
    "portfolio",
  ],
  applicationName: "Amjad Renno Portfolio",
  authors: [{ name: "Amjad Renno", url: BASE_URL }],
  creator: "Amjad Renno",
  publisher: "Amjad Renno",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Amjad Renno — Junior C#/.NET Developer",
    description:
      "Junior C#/.NET Developer based in Odense, Denmark. Focused on C#/.NET, ASP.NET Core, React/TypeScript, SQL, Clean Architecture, Docker, GitHub Actions, and agentic AI.",
    type: "website",
    url: BASE_URL,
    siteName: "Amjad Renno",
    locale: "da_DK",
    // TODO: add openGraph.images once an OG image (1200×630) is available in /public
  },
  twitter: {
    card: "summary_large_image",
    title: "Amjad Renno — Junior C#/.NET Developer",
    description:
      "Junior C#/.NET Developer based in Odense, Denmark. C#/.NET, ASP.NET Core, React/TypeScript, SQL, Clean Architecture, Docker, GitHub Actions, agentic AI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amjad Renno",
  url: BASE_URL,
  jobTitle: "Junior C#/.NET Developer",
  description:
    "Junior C#/.NET Developer based in Odense, Denmark. Specialising in C#/.NET, ASP.NET Core, React/TypeScript, SQL, backend development, Clean Architecture, Docker, GitHub Actions, and agentic AI.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Odense",
    addressCountry: "DK",
  },
  knowsAbout: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "React",
    "TypeScript",
    "SQL",
    "REST APIs",
    "Clean Architecture",
    "Docker",
    "GitHub Actions",
    "Agentic AI",
    "AI Agents",
    "RAG",
    "OpenAI API",
    "Function Calling",
    "AI Guardrails",
    "web development",
    "software development",
  ],
  sameAs: [
    "https://github.com/AmjadRenno",
    "https://linkedin.com/in/amjad-renno-6a73b32b8",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="noise-overlay" />
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
