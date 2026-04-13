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
    default: "Amjad Renno — Software Developer",
    template: "%s | Amjad Renno",
  },
  description:
    "Amjad Renno — software developer based in Odense, Denmark. Datamatiker student specialising in C# / .NET, ASP.NET Core, Blazor, web development, databases, and CMS platforms including Umbraco.",
  keywords: [
    "Amjad Renno",
    "software developer Denmark",
    "C# developer",
    ".NET developer",
    "ASP.NET Core",
    "Blazor",
    "Datamatiker",
    "Odense",
    "junior developer Denmark",
    "web development",
    "Umbraco",
    "SQL",
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
    title: "Amjad Renno — Software Developer",
    description:
      "Software developer based in Odense, Denmark. Specialising in C# / .NET, ASP.NET Core, Blazor, Umbraco, and web development.",
    type: "website",
    url: BASE_URL,
    siteName: "Amjad Renno",
    locale: "da_DK",
    // TODO: add openGraph.images once an OG image (1200×630) is available in /public
  },
  twitter: {
    card: "summary_large_image",
    title: "Amjad Renno — Software Developer",
    description:
      "Software developer based in Odense, Denmark. C# / .NET, ASP.NET Core, Blazor, Umbraco, web development.",
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
  jobTitle: "Software Developer",
  description:
    "Software developer based in Odense, Denmark. Specialising in C# / .NET, ASP.NET Core, Blazor, web development, databases, and Umbraco.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Odense",
    addressCountry: "DK",
  },
  knowsAbout: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Blazor",
    "Umbraco",
    "SQL",
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
