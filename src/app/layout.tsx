import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chiragbachwani.dev'),
  title: {
    default: "Chirag Bachwani | Fullstack & Senior Mobile Developer",
    template: "%s | Chirag Bachwani",
  },
  description: "Chirag Bachwani — SDE-2 at Galaxy.ai with 3+ years of production experience building high-performance mobile apps with Flutter, scalable backends with Node.js & AWS, and modern web experiences with Next.js. 250K+ app installs, 4,500+ AI tool integrations, 99%+ crash-free rate.",
  keywords: [
    "Chirag Bachwani", "Chirag Bachwani portfolio", "Chirag Bachwani developer",
    "Fullstack Developer", "Senior Mobile Developer", "Flutter Developer", "Flutter Expert",
    "SDE-2 Galaxy AI", "Top Mobile Developer India", "Hire Flutter Developer",
    "React Native Developer", "Next.js Developer", "Node.js Developer",
    "Software Engineer India", "Full Stack Engineer", "Mobile App Developer",
    "iOS Developer", "Android Developer", "AWS Developer", "Firebase Expert",
    "Dart Developer", "Cross-platform Mobile Developer", "App Development India",
    "Galaxy AI engineer", "best Flutter developer India", "freelance mobile developer",
  ],
  authors: [{ name: "Chirag Bachwani", url: "https://chiragbachwani.dev" }],
  creator: "Chirag Bachwani",
  publisher: "Chirag Bachwani",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chiragbachwani.dev",
    title: "Chirag Bachwani | Fullstack & Senior Mobile Developer",
    description: "SDE-2 at Galaxy.ai — 3+ years building Flutter apps at scale (250K+ installs), Node.js backends, and AWS cloud infrastructure. Open to new opportunities.",
    siteName: "Chirag Bachwani — Developer Portfolio",
    images: [{ url: "/images/pfp.jpg", width: 1200, height: 630, alt: "Chirag Bachwani — Fullstack & Senior Mobile Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Bachwani | Fullstack & Senior Mobile Developer",
    description: "SDE-2 at Galaxy.ai — Flutter, Node.js & AWS. 250K+ installs, 4,500+ AI tools integrated. Open to work.",
    images: ["/images/pfp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chirag Bachwani",
  url: "https://chiragbachwani.dev",
  image: "https://chiragbachwani.dev/images/pfp.jpg",
  sameAs: [
    "https://www.linkedin.com/in/chiragbachwani/",
    "https://github.com/chiragbachwani",
    "https://www.instagram.com/chirag_bachwani/"
  ],
  jobTitle: "SDE-2, Fullstack & Senior Mobile Developer",
  description: "Software Development Engineer with 3+ years of experience building high-performance mobile apps, scalable backends, and cloud infrastructure. Currently SDE-2 at Galaxy.ai.",
  worksFor: {
    "@type": "Organization",
    "name": "Galaxy.ai",
    "url": "https://galaxy.ai"
  },
  alumniOf: [
    { "@type": "Organization", "name": "SparkStart Solutions" },
    { "@type": "Organization", "name": "Saarthi AI" },
    { "@type": "Organization", "name": "Reway Technologies" }
  ],
  knowsAbout: [
    "Flutter", "Dart", "Node.js", "Express.js", "Mobile App Development",
    "Full Stack Development", "Next.js", "React", "AWS", "Firebase",
    "CI/CD", "REST APIs", "MongoDB", "PostgreSQL", "Docker"
  ],
  homeLocation: {
    "@type": "Place",
    "name": "India"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-[#f5f5f5] selection:bg-white/20 selection:text-white cursor-none font-sans min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
        <Analytics />
      </body >
    </html>
  );
}
