import Link from "next/link";

const cards = [
  {
    title: "API Reference",
    desc: "Canonical endpoints, schemas, and live docs wrappers.",
    href: "/api",
    tag: "Reference",
  },
  {
    title: "Guides",
    desc: "Story-first implementation guides (coming soon).",
    href: "/guides",
    tag: "Playbooks",
  },
  {
    title: "Decks",
    desc: "Narrative decks and partner assets (coming soon).",
    href: "/decks",
    tag: "Narratives",
  },
];

export default function DocsHome() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-950" />
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />
      <div className="absolute right-[-120px] top-40 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 text-slate-900">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Docs Hub
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            The canonical layer for everything Heartbeats publishes.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            Stable permalinks for API reference, guides, and decks. This is where
            the ecosystem links back to, no matter where the content lives.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-glow transition hover:-translate-y-1"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {card.tag}
              </div>
              <div className="mt-4 text-xl font-semibold text-slate-900">
                {card.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {card.desc}
              </p>
              <div className="mt-6 text-sm font-semibold text-slate-900">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative bg-slate-950 px-6 pb-20 pt-16 text-slate-200">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Docs are the interface.</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              The docs site is intentionally light. It indexes the real sources
              of truth and gives teams a clean, stable place to link to.
            </p>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-sm leading-relaxed text-slate-200">
            <p className="font-semibold text-white">Canonical policy</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Swagger lives under /api/* only.</li>
              <li>Guides and concepts are placeholders until wired.</li>
              <li>Decks stay in Gamma; this hub keeps URLs stable.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
