"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#06b6d4]/5 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[#818cf8]/5 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#334155] bg-[#1e293b]/60 text-[#94a3b8] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#f1f5f9] leading-[1.1] mb-6"
        >
          Muhammad{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#818cf8]">
            Azis
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-xl md:text-2xl text-[#94a3b8] font-medium mb-4 max-w-2xl mx-auto"
        >
          From zero to full-stack —{" "}
          <span className="text-[#f1f5f9]">now building AI that works autonomously.</span>
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="text-[#94a3b8] text-base mb-10 max-w-xl mx-auto"
        >
          Full-Stack Developer · AI Agent Enthusiast · System Automation
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#06b6d4] text-[#0f172a] font-bold text-sm hover:bg-[#06b6d4]/90 hover:scale-105 transition-all duration-200"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-[#334155] text-[#94a3b8] font-medium text-sm hover:border-[#06b6d4] hover:text-[#f1f5f9] transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.7)}
          className="mt-20 flex justify-center"
        >
          <a href="#about" aria-label="Scroll down">
            <div className="flex flex-col items-center gap-2 text-[#334155] hover:text-[#06b6d4] transition-colors">
              <span className="text-xs font-mono text-[#475569]">scroll</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
