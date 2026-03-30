"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useState, useEffect } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { MoveUpRight } from "lucide-react";

const ProjectGridCard = ({ project }: { project: any }) => {
  // Use maximum of 4 images so the fan-out is distinct and beautiful
  const images = project.images.slice(0, 4);
  const N = images.length;

  const [currentIndex, setCurrentIndex] = useState(N - 1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || N <= 1) return;
    const interval = setInterval(() => {
      // Step backwards so the current front card goes to the back
      setCurrentIndex((prev) => (prev - 1 + N) % N);
    }, 3000); // 3 seconds auto-play interval
    return () => clearInterval(interval);
  }, [isHovered, N]);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Media Fan-Out Container */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] flex items-end justify-center cursor-pointer mb-2 group"
      >
        {images.map((src: string, i: number) => {
          // 'v' represents the visual Z-index order
          // v = N-1 is the front card, v = 0 is the back card
          const v = (i - currentIndex + 2 * N - 1) % N;

          // CALCULATE HOVER FAN SPREAD based on v
          const angle = (v - (N - 1) / 2) * 15;
          const hoverY = Math.abs(angle) * 0.8;

          // CALCULATE IDLE STACK based on v
          const depth = N - 1 - v; // 0 for front, 1 for second, etc.
          const idleScale = 1 - depth * 0.05;
          const idleY = -(depth * 25); // move up 25px per depth
          
          return (
            <motion.div
              key={i}
              initial={false}
              animate={isHovered ? "hover" : "idle"}
              variants={{
                idle: { 
                  rotate: 0, 
                  x: 0, 
                  y: idleY,
                  scale: idleScale,
                  zIndex: v,
                  filter: `brightness(${100 - depth * 25}%)`,
                  transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
                },
                hover: { 
                  rotate: angle, 
                  x: 0, 
                  y: hoverY,
                  scale: 1.05,
                  zIndex: v,
                  filter: "brightness(100%)",
                  transition: { type: "spring", stiffness: 250, damping: 20 }
                }
              }}
              style={{ transformOrigin: "bottom center" }}
              className={`absolute bottom-0 rounded-[24px] md:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 ${
                project.isPortrait 
                  ? "w-[65%] md:w-[50%] lg:w-[45%] max-w-[320px] aspect-[9/16]" 
                  : "w-[90%] md:w-[85%] aspect-video"
              }`}
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                priority={i === currentIndex}
                className={`transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 ${
                  project.isPortrait ? "object-top bg-black/80" : "object-center bg-black"
                } object-cover`}
              />
              
              {/* Optional slight shadow indicator when idle so front card pops visually */}
              {depth === 0 && !isHovered && (
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Info Container */}
      <div className="flex flex-col items-center text-center px-4 mt-6">
        <h3 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base font-light mb-6">
          {project.subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag: string, j: number) => (
             <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-mono tracking-widest uppercase">
               {tag}
             </span>
          ))}
        </div>
        
        <MagneticButton href={project.link} className="!px-6 !py-3">
          <span className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest font-mono text-white/80 hover:text-white transition-colors group">
            View Project <MoveUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </span>
        </MagneticButton>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="relative w-full py-32 bg-transparent px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-xl md:text-2xl font-mono tracking-widest uppercase text-white/50 mb-20 text-center">
          Selected Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-20">
          {portfolioData.projects.map((project, i) => (
            <ProjectGridCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
