"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full pt-32 pb-16 px-6 md:px-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Profile Details & Image Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center mb-10 w-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-10%" }}
            className="flex-1 flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-8 tracking-tight">
              A bit about me.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed md:leading-loose">
              {portfolioData.hero.bio} Implemented robustly focusing on extremely high standards in architecture, fluid interactions, and deep hardware optimization. My philosophy is that the technology stack exists purely to enable jaw-dropping, intuitive user experiences.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full max-w-[400px] lg:flex-1 aspect-[3/4] relative overflow-hidden rounded-[40px] border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex-shrink-0 group"
          >
            <Image 
              src="/images/pfp.jpg" 
              alt="Chirag Bachwani Portrait" 
              fill 
              className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105" 
            />
            {/* Ambient Lighting Override overlay inside image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent mix-blend-overlay pointer-events-none" />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Stats Column */}
          <motion.div style={{ y, opacity }} className="flex-[0.8] flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-display font-medium text-white/50 mb-12 font-mono tracking-widest uppercase">
              By the numbers
            </h3>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-16">
              {portfolioData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col border-t border-white/10 pt-6">
                  <span className="text-4xl md:text-6xl font-light text-white mb-2 tracking-tighter">
                    {stat.number}
                  </span>
                  <span className="text-sm md:text-base text-gray-500 uppercase tracking-widest whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Skills Column */}
          <div className="flex-[1.5] flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-10%" }}
              className="text-3xl md:text-4xl font-display font-medium text-white/50 mb-12 font-mono tracking-widest uppercase"
            >
              Technical Arsenal
            </motion.h3>

            <div className="flex flex-col gap-12">
              {portfolioData.skills.map((group, groupIdx) => (
                <motion.div 
                  key={groupIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: groupIdx * 0.15 }}
                  viewport={{ once: true, margin: "-10%" }}
                >
                  <h4 className="text-sm md:text-base text-gray-400 mb-4 font-mono tracking-wider border-b border-white/5 pb-2 inline-block">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {group.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs md:text-sm text-gray-300 transition-colors"
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      {/* Additional specific ambient element for About if needed */}
    </section>
  );
}
