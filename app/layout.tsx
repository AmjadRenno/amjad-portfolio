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

export const metadata: Metadata = {
  title: "Amjad Renno — Software Developer",
  description:
    "Datamatiker student and software developer based in Odense, Denmark. Specialising in C# / .NET, web development, databases, and CMS platforms including Umbraco and Shopify.",
  openGraph: {
    title: "Amjad Renno — Software Developer",
    description: "Datamatiker student and software developer — C#, .NET, Blazor, Umbraco, databases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body>
        <div className="noise-overlay" />
        <LocaleProvider>{children}</LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
