import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://feisaldy.dev"),
  title: {
    default: "Web Developer",
    template: "%s | Feisal Dharma Yuda",
  },
  description:
    "Portfolio of Feisal Dharma Yuda, a web developer who builds scalable systems with clean code and clear structure.",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      id: "/id",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Feisal Dharma Yuda Portfolio",
    title: "Feisal Dharma Yuda | Web Developer",
    description:
      "Portfolio of Feisal Dharma Yuda, a web developer who builds scalable systems with clean code and clear structure.",
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Feisal Dharma Yuda Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feisal Dharma Yuda | Web Developer",
    description:
      "Clean, maintainable, and scalable systems crafted by Feisal Dharma Yuda.",
    creator: "@feisaldy",
    images: ["/images/og-default.svg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
