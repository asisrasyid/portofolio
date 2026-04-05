export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 border-t border-[#1e293b]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#475569] text-sm">
        <p>© {year} Muhammad Azis. Built with Next.js + Tailwind.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/muhammadazis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f1f5f9] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:muhammadazisrasyid@gmail.com"
            className="hover:text-[#06b6d4] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
