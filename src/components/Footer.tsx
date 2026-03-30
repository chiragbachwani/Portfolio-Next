"use client";

import { portfolioData } from "@/data/portfolio";
import MagneticButton from "./MagneticButton";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { name: "LinkedIn", url: portfolioData.contact.linkedin },
    { name: "GitHub", url: portfolioData.contact.github },
    { name: "Instagram", url: portfolioData.contact.instagram },
  ];

  return (
    <footer className="relative w-full bg-[#050505]/40 backdrop-blur-2xl text-white overflow-hidden pt-32 pb-10 px-6 md:px-24 rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-20px_50px_rgba(255,255,255,0.02)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-display tracking-tighter leading-[0.9] mb-8 split-text">
              {portfolioData.contact.tagline}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-md">
              {portfolioData.contact.subtext}
            </p>
          </div>

          <MagneticButton href={`mailto:${portfolioData.contact.email}`} className="bg-white text-black hover:bg-transparent hover:text-white group">
            <span className="flex items-center gap-3 text-xl font-medium px-4 py-2">
              Say Hello
              <MoveUpRight size={24} className="group-hover:rotate-45 transition-transform duration-300" />
            </span>
          </MagneticButton>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Bar: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm md:text-base text-gray-400">
          <div className="flex flex-wrap justify-center gap-8">
            {socials.map((social, i) => (
              <MagneticButton key={i} href={social.url} className="!border-none !px-0 !py-0 hover:!bg-transparent hover:text-white">
                <span className="relative overflow-hidden inline-block group pt-1">
                  <span className="flex group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                    {social.name}
                  </span>
                  <span className="absolute top-full left-0 flex group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-white">
                    {social.name}
                  </span>
                </span>
              </MagneticButton>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <span className="font-mono tracking-widest uppercase text-xs">
              {portfolioData.contact.copyright}
            </span>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white">Available for work</span>
          </div>
        </div>

      </div>

      {/* Extreme background typography */}
      <motion.div 
        className="absolute left-1/2 -ml-[50vw] w-screen overflow-hidden bottom-[-10vw] pointer-events-none opacity-5 flex justify-center"
      >
        <span className="text-[25vw] font-display font-bold tracking-tighter leading-none text-white whitespace-nowrap">
          CHIRAG
        </span>
      </motion.div>
    </footer>
  );
}
