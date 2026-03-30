"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "center 50%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="relative pl-8 md:pl-0 mb-20 md:mb-32 w-full md:w-[80%] md:ml-auto group"
    >
      {/* Timeline Node */}
      <div className="absolute left-[-5px] md:left-[-40px] top-2 w-3 h-3 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10" />
      
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
        <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
          {exp.company}
        </h3>
        <span className="text-sm md:text-lg text-white/40 font-mono tracking-widest uppercase">
          {exp.period}
        </span>
      </div>

      <h4 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
        {exp.role}
      </h4>

      <p className="text-gray-400 text-base md:text-lg leading-relaxed whitespace-pre-line max-w-3xl mb-8">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {exp.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="px-4 py-2 border border-white/10 rounded-full text-xs md:text-sm text-gray-300 bg-white/[0.02]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-40 px-6 md:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Title Sticky Column */}
        <div className="w-full md:w-1/3 mb-20 md:mb-0">
          <div className="sticky top-40">
            <h2 className="text-5xl md:text-8xl font-display font-medium text-white tracking-tighter leading-none">
              Professional <br /> Journey
            </h2>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="w-full md:w-2/3 relative py-10 md:py-20">
          {/* Main Timeline Line */}
          <div className="absolute left-[3px] md:left-[-34px] top-0 bottom-0 w-[1px] bg-white/10" />
          
          {/* Animated Timeline Progress Line */}
          <motion.div 
            style={{ height }}
            className="absolute left-[3px] md:left-[-34px] top-0 w-[1px] bg-gradient-to-b from-white to-white/0 shadow-[0_0_10px_rgba(255,255,255,0.5)] origin-top"
          />

          <div className="relative z-10">
            {portfolioData.experience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
