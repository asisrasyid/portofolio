import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Muhammad Azis",
  description: "Thoughts on AI agents, full-stack development, and building in public.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-[#06b6d4] text-sm tracking-widest uppercase mb-3 block">
            Blog
          </span>
          <h1 className="text-4xl font-extrabold text-[#f1f5f9] mb-4">Writing</h1>
          <p className="text-[#94a3b8]">
            Thoughts on AI agents, full-stack development, and building things that work.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group p-6 rounded-2xl bg-[#1e293b] border border-[#334155] hover:border-[#06b6d4]/50 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-[#f1f5f9] font-bold text-lg mb-2 group-hover:text-[#06b6d4] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-3">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs bg-[#0f172a] text-[#818cf8] border border-[#334155]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-[#475569] text-xs font-mono">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-[#475569] text-xs mt-1">{post.readingTime} min read</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
