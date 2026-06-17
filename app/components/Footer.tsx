import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[var(--border)] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
                    <Image src="/logo.png" className="w-32 h-12" alt="logo" width={1000} height={1000} />
            
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              Where music education meets passion. Learn guitar, understand
              theory, and join a community of musicians.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-medium mb-4">Learn</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Guitar Basics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Music Theory
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Advanced Techniques
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Songwriting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-4">Company</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Instructors
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-4">Connect</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted)]">
            © 2024 Uniedd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
