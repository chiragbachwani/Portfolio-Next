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
  title: "Chirag Bachwani | Creative Developer",
  description:
    "I craft high-performance mobile apps and full-stack solutions with Flutter, Node.js, and Firebase.",
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
          <CustomCursor />
          {children}
        </LenisProvider>
      </body >
    </html>
  );
}
