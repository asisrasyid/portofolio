import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Azis — Full-Stack Developer & AI Agent Enthusiast",
  description:
    "Self-taught full-stack developer focused on AI Agents, LLM optimization, and intelligent automation. Building systems that work autonomously.",
  keywords: [
    "Muhammad Azis",
    "Full-Stack Developer",
    "AI Agent",
    "LLM",
    "Next.js",
    "TypeScript",
    "automation",
    "portfolio",
  ],
  openGraph: {
    title: "Muhammad Azis — Full-Stack Developer & AI Agent Enthusiast",
    description:
      "Self-taught full-stack developer focused on AI Agents, LLM optimization, and intelligent automation.",
    url: "https://muhammadazis.vercel.app",
    siteName: "Muhammad Azis",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Azis — Full-Stack Developer & AI Agent Enthusiast",
    description:
      "Self-taught full-stack developer focused on AI Agents, LLM optimization, and intelligent automation.",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Muhammad Azis", url: "https://muhammadazis.vercel.app" }],
  metadataBase: new URL("https://muhammadazis.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0f172a] text-[#f1f5f9] font-sans">
        {/* Skip to main content — accessibility */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#06b6d4] focus:text-[#0f172a] focus:rounded-lg focus:font-bold focus:text-sm"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
