import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chiragbachwani.dev'),
  title: "Chirag Bachwani | Senior Mobile & Flutter Developer",
  description: "Top-tier Software Development Engineer specializing in Flutter, high-performance mobile apps, and Next.js full-stack solutions. Based in India.",
  keywords: [
    "Chirag Bachwani", "Mobile Developer", "Flutter Developer", "Flutter Expert", "Top Mobile Developer India", 
    "React Native", "Next.js Developer", "React Developer", "Software Engineer India", "Frontend Developer", "iOS Developer", "Android Developer", "Freelance Developer"
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
    title: "Chirag Bachwani | Senior Mobile & Flutter Developer",
    description: "Top-tier Software Development Engineer specializing in Flutter, mobile apps, and Next.js full-stack solutions.",
    siteName: "Chirag Bachwani Portfolio",
    images: [{ url: "/images/pfp.jpg", width: 1200, height: 630, alt: "Chirag Bachwani Portrait" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Bachwani | Senior Mobile & Flutter Developer",
    description: "Top-tier Software Development Engineer specializing in high-performance mobile and web apps.",
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
  jobTitle: "Software Development Engineer, Mobile Developer, Senior Flutter Expert",
  worksFor: {
    "@type": "Organization",
    "name": "Galaxy.ai"
  },
  alumniOf: {
    "@type": "Organization",
    "name": "SparkStart Solutions"
  },
  knowsAbout: ["Flutter", "Dart", "Node.js", "Mobile App Development", "Frontend Development", "Next.js", "React"],
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
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-[#f5f5f5] selection:bg-white/20 selection:text-white cursor-none font-sans min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <CustomCursor />
          {children}
        </LenisProvider>
      </body >
    </html>
  );
}
