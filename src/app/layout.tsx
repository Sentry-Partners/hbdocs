import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heartbeats Docs",
  description: "Heartbeats documentation hub",
  metadataBase: new URL("https://docs.heartbeats.cloud"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="min-h-screen bg-[var(--hb-ink)] text-[var(--hb-light-text)]">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-gradient-to-b from-black/70 via-black/55 to-black/20 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center">
                  <img
                    src="/branding/heartbeats-mark-neon.png"
                    alt="Heartbeats"
                    width={36}
                    height={36}
                    className="h-9 w-9 drop-shadow-[0_0_14px_rgba(24,212,255,0.65)]"
                  />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Heartbeats Docs
                </span>
              </Link>
              <nav className="flex items-center gap-6 text-sm text-slate-300">
                <Link href="/api" className="transition hover:text-white">
                  API
                </Link>
                <Link href="/guides" className="transition hover:text-white">
                  Guides
                </Link>
                <Link href="/decks" className="transition hover:text-white">
                  Decks
                </Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t border-white/10 bg-[var(--hb-ink)]">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-slate-400">
              <span>Copyright © 2025-2026 Axxent Partners LLC.</span>
              <span className="text-[var(--hb-neon-soft)]">docs.heartbeats.cloud</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
