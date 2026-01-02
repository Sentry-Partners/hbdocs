import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Heartbeats Docs",
  description: "Heartbeats documentation hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-sm font-semibold tracking-[0.2em]">
                HEARTBEATS DOCS
              </Link>
              <nav className="flex items-center gap-6 text-sm text-slate-300">
                <Link href="/api" className="hover:text-white">
                  API
                </Link>
                <Link href="/guides" className="hover:text-white">
                  Guides
                </Link>
                <Link href="/decks" className="hover:text-white">
                  Decks
                </Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t border-white/10 bg-slate-950">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400">
              <span>Heartbeats Docs © 2026</span>
              <span>docs.heartbeats.cloud</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
