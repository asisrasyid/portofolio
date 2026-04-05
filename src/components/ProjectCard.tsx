"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-6 rounded-2xl bg-[#1e293b] border border-[#334155] hover:border-[#06b6d4]/50 transition-all duration-300 hover:shadow-[0_0_40px_-8px_rgba(6,182,212,0.15)]"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-[#0f172a] border border-[#334155] group-hover:border-[#06b6d4]/30 transition-colors">
          <svg className="w-5 h-5 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#f1f5f9] transition-colors"
            aria-label="GitHub repository"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#06b6d4] transition-colors"
              aria-label="Live demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <Link href={`/projects/${project.slug}`}>
        <h3 className="text-[#f1f5f9] font-bold text-lg mb-3 group-hover:text-[#06b6d4] transition-colors cursor-pointer">
          {project.title}
        </h3>
      </Link>

      <p className="text-[#94a3b8] text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded-md bg-[#0f172a] text-[#818cf8] text-xs font-mono font-medium border border-[#334155]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
