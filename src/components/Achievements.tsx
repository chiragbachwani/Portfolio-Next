"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate velocity for dynamic marquee speed
  const smoothVelocity = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });
  
  const skew = useTransform(smoothVelocity, [0, 1], [-5, 5]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="relative w-full py-20 bg-transparent overflow-hidden flex flex-col gap-8">
      
      {/* Marquee Row 1 */}
      <motion.div style={{ x: x1, skewX: skew }} className="flex whitespace-nowrap w-[max-content]">
        {[...portfolioData.achievements, ...portfolioData.achievements].map((achievement, i) => (
          <div key={i} className="flex items-center text-4xl md:text-7xl font-display font-medium text-white/10 uppercase mr-12 hover:text-white/40 transition-colors duration-500">
            <span>{achievement}</span>
            <span className="mx-8 text-xl text-white/5 font-mono">✦</span>
          </div>
        ))}
      </motion.div>

      {/* Marquee Row 2 (Reverse) */}
      <motion.div style={{ x: x2, skewX: skew }} className="flex whitespace-nowrap w-[max-content]">
        {[...portfolioData.achievements, ...portfolioData.achievements].reverse().map((achievement, i) => (
          <div key={`rev-${i}`} className="flex items-center text-4xl md:text-7xl font-display font-medium text-white/10 uppercase mr-12 hover:text-white/40 transition-colors duration-500">
            <span>{achievement}</span>
            <span className="mx-8 text-xl text-white/5 font-mono">✦</span>
          </div>
        ))}
      </motion.div>

    </section>
  );
}
