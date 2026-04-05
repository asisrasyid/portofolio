"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type Project } from "@/data/projects";

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#06b6d4] transition-colors text-sm font-medium mb-10 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-md bg-[#1e293b] text-[#818cf8] text-xs font-mono border border-[#334155]"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#f1f5f9] mb-4">
            {project.title}
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#334155] text-[#94a3b8] text-sm font-medium hover:border-[#06b6d4] hover:text-[#f1f5f9] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Source
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06b6d4] text-[#0f172a] text-sm font-bold hover:bg-[#06b6d4]/90 transition-all"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#1e293b] border border-[#334155]"
            >
              <h2 className="text-[#f1f5f9] font-bold text-lg mb-4">Overview</h2>
              <p className="text-[#94a3b8] leading-relaxed">{project.longDescription}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#1e293b] border border-[#334155]"
            >
              <h2 className="text-[#f1f5f9] font-bold text-lg mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#94a3b8] text-sm">
                    <span className="text-[#06b6d4] mt-0.5 flex-shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#1e293b] border border-[#334155]"
            >
              <h2 className="text-[#f1f5f9] font-bold text-sm mb-3">Challenge</h2>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{project.challenges}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-2xl bg-[#0f172a] border border-[#06b6d4]/30"
            >
              <h2 className="text-[#06b6d4] font-bold text-sm mb-3">Outcome</h2>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{project.outcome}</p>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  );
}
