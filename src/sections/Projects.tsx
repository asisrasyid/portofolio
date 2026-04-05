"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = showAll ? projects : featured;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[#06b6d4] text-sm tracking-widest uppercase mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-[#94a3b8] max-w-xl mb-12">
            From algorithmic trading systems to AI agents and everyday productivity tools — each project solves a real problem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
          <AnimatePresence>
            {showAll &&
              rest.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={featured.length + i} />
              ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#06b6d4] transition-colors text-sm font-medium border border-[#334155] hover:border-[#06b6d4] px-4 py-2 rounded-lg"
          >
            {showAll ? "Show less" : `Show all projects (${projects.length})`}
            <svg
              className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a
            href="https://github.com/asisrasyid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#06b6d4] transition-colors text-sm font-medium"
          >
            View GitHub profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
