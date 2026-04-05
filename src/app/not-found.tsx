import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-[#06b6d4] text-sm tracking-widest mb-4">404</p>
        <h1 className="text-4xl font-bold text-[#f1f5f9] mb-4">Page not found</h1>
        <p className="text-[#94a3b8] mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-[#06b6d4] text-[#0f172a] font-bold text-sm hover:bg-[#06b6d4]/90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
