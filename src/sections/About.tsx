"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { stack } from "@/data/stack";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Section>
          <span className="font-mono text-[#06b6d4] text-sm tracking-widest uppercase mb-3 block">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-12">
            Who I Am
          </h2>
        </Section>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Section>
            <div className="space-y-5 text-[#94a3b8] leading-relaxed">
              <p>
                I&apos;m <span className="text-[#f1f5f9] font-medium">Muhammad Azis</span> — a
                self-taught full-stack developer who started with zero IT background, driven purely
                by curiosity and a refusal to stop learning.
              </p>
              <p>
                Today I build internal systems and personal projects, with a growing focus on{" "}
                <span className="text-[#06b6d4]">AI Agents</span>,{" "}
                <span className="text-[#06b6d4]">LLM optimization</span>, and{" "}
                <span className="text-[#06b6d4]">intelligent automation</span>.
              </p>
              <p>
                I believe the most interesting software is the kind that works autonomously — and
                I&apos;m actively building exactly that.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                {["AI Agent Architecture", "Multi-Agent Systems", "LLM Optimization", "Full-Stack Development"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#1e293b] border border-[#334155] text-[#94a3b8] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </Section>

          <Section>
            <p className="font-mono text-[#06b6d4] text-xs tracking-widest uppercase mb-6">
              Tech Stack
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {stack.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#06b6d4]/50 hover:bg-[#1e293b]/80 transition-all group"
                >
                  <Icon
                    icon={item.icon}
                    className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[#94a3b8] text-sm font-medium group-hover:text-[#f1f5f9] transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
}
