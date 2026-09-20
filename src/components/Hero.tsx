"use client";

import { portfolioData } from "@/data/portfolio";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden px-6 py-24 md:px-12"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="z-10 text-center max-w-5xl w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-sm md:text-base mb-6 font-mono tracking-[0.24em] uppercase"
        >
          {portfolioData.hero.greeting}
        </motion.p>

        <h1 className="text-6xl md:text-8xl lg:text-[clamp(5rem,11vw,8.75rem)] font-bold tracking-[-0.07em] leading-[0.9] mb-10 font-display text-balance">
          <AnimatedText text={portfolioData.hero.name.replace("\n", " ")} delay={0.5} />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl text-center mb-12"
        >
          <p className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed text-balance">
            {portfolioData.hero.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {portfolioData.hero.roles.map((role, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-sm md:text-base text-white/80"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16"
        >
          <MagneticButton href={portfolioData.hero.resumeUrl} className="text-lg font-medium">
            View Resume
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-xs uppercase tracking-widest text-white/50 font-mono">Scroll</span>
      </motion.div>
    </section>
  );
}
