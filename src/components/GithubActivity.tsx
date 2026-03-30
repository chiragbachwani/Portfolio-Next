"use client";

import { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";

export default function GithubActivity() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://github-activity-api.vercel.app/api/contributions")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contributions");
        return res.json();
      })
      .then((d) => {
        setData(d);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return "#161B22";
    if (count <= 3) return "#0E4429";
    if (count <= 6) return "#006D32";
    if (count <= 9) return "#26A641";
    return "#39D353";
  };

  return (
    <section className="relative w-full py-20 bg-transparent flex flex-col items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <h2 className="text-xl md:text-2xl font-mono tracking-widest uppercase text-white/50 mix-blend-difference">
            GitHub Contributions (2026)
          </h2>
        </div>
        
        <div className="w-full bg-[#111]/80 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative z-20">
          
          {isLoading && (
            <div className="h-[150px] w-full flex items-center justify-center text-gray-500 font-mono tracking-widest animate-pulse uppercase">
              Loading Contributions...
            </div>
          )}

          {error && (
            <div className="h-[150px] w-full flex items-center justify-center text-red-500/80 font-mono tracking-widest">
              Error: {error}
            </div>
          )}

          {!isLoading && !error && data && (
            <>
              {/* Native Graph Representation identical to previous Flutter App */}
              <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
                <div className="flex gap-[4px] min-w-max justify-start md:justify-center">
                  {data.weeks?.map((week: any, wIdx: number) => (
                    <div key={wIdx} className="flex flex-col gap-[4px]">
                      {/* Enforce exactly 7 days visually */}
                      {Array.from({ length: 7 }).map((_, dIdx) => {
                        const day = week.contributionDays[dIdx];
                        const count = day ? day.contributionCount : 0;
                        const date = day ? day.date : null;
                        
                        return (
                          <div 
                            key={dIdx} 
                            title={date ? `${count} contributions on ${date}` : ""}
                            style={{ backgroundColor: getColor(count) }}
                            className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] rounded-[2px] transition-transform hover:scale-125 hover:z-10"
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-12 md:gap-24 mt-10 pt-8 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs md:text-sm font-mono tracking-widest uppercase mb-2">Total Contributions</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#39D353]">{data.totalContributions}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs md:text-sm font-mono tracking-widest uppercase mb-2">Current Streak</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#9BE9A8]">{data.currentStreak} days</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs md:text-sm font-mono tracking-widest uppercase mb-2">Longest Streak</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#9BE9A8]">{data.longestStreak} days</span>
                </div>
              </div>
            </>
          )}
          
          <a 
            href="https://github.com/chiragbachwani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-12 flex items-center justify-center md:justify-start gap-3 text-sm md:text-base uppercase tracking-widest font-mono text-gray-400 hover:text-white transition-colors group"
          >
            Visit GitHub <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
