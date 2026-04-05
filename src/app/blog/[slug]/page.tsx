import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Muhammad Azis`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
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
          All Posts
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-xs bg-[#1e293b] text-[#818cf8] border border-[#334155]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#f1f5f9] mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#475569] text-sm font-mono">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </header>

        <article className="prose prose-invert prose-cyan max-w-none
          prose-headings:text-[#f1f5f9] prose-headings:font-bold
          prose-p:text-[#94a3b8] prose-p:leading-relaxed
          prose-a:text-[#06b6d4] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#f1f5f9]
          prose-code:text-[#06b6d4] prose-code:bg-[#1e293b] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#1e293b] prose-pre:border prose-pre:border-[#334155]
          prose-blockquote:border-[#06b6d4] prose-blockquote:text-[#94a3b8]
          prose-li:text-[#94a3b8]
          prose-hr:border-[#334155]">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </main>
  );
}
