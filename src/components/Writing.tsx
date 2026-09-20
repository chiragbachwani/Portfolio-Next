"use client";

import { ArrowUpRight, MessageCircle, PenLine } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Writing() {
  return (
    <section id="writing" className="relative w-full py-32 px-6 md:px-24 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-medium text-white tracking-tight leading-[0.95]">
                Writing that ships ideas.
                <br />
                Guidance that moves careers.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-gray-400">
                I write about the decisions behind reliable products, AI workflows, and early-stage engineering. For more personal help, I also offer focused sessions on resumes, portfolios, and career direction.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6">
              <a
                href={portfolioData.contact.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <span className="flex items-start gap-4">
                  <MessageCircle className="mt-1 text-white/70" size={20} strokeWidth={1.5} aria-hidden="true" />
                  <span>
                    <span className="block font-display text-xl text-white">Need a second set of eyes?</span>
                    <span className="mt-1 block text-sm leading-relaxed text-gray-400">Book a resume review, a quick chat, or a focused 1:1.</span>
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-white/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10">
            {portfolioData.writing.map((post) => (
              <article key={post.href} className="border-b border-white/10">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-8 py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
                >
                  <span className="flex items-start gap-5">
                    <PenLine className="mt-1 shrink-0 text-white/50" size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-mono uppercase tracking-[0.2em] text-white/40">{post.type}</span>
                      <span className="mt-3 block max-w-2xl font-display text-2xl leading-tight text-white transition-colors duration-300 group-hover:text-white/70 md:text-3xl">{post.title}</span>
                      <span className="mt-3 block text-base leading-relaxed text-gray-400">{post.description}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 shrink-0 text-white/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} aria-hidden="true" />
                </a>
              </article>
            ))}

            <a
              href={portfolioData.contact.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Read all on Medium
              <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
