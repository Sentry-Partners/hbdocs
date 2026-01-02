import Link from "next/link";

export default function ApiIndexPage() {
  return (
    <main className="bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
          API Reference
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Heartbeats API documentation
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300">
          Stable permalinks for the live Swagger UI and future human docs.
        </p>

        <div className="mt-10 grid gap-4">
          <Link
            href="/api/heartbeats"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="text-lg font-semibold">Heartbeats API</div>
            <div className="mt-2 text-sm text-slate-300">
              Live Swagger wrapper and canonical entry point.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
