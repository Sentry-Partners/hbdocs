const SWAGGER_URL = "https://api.heartbeats.cloud/swagger/heartbeats";

export default function HeartbeatsSwaggerPage() {
  return (
    <main className="bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              API Reference
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Heartbeats Swagger UI
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
              This wrapper keeps the canonical URL stable. If the embed is
              blocked, open the Swagger UI directly.
            </p>
          </div>
          <a
            href={SWAGGER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
          >
            Open Swagger in new tab
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <iframe
            src={SWAGGER_URL}
            title="Heartbeats Swagger UI"
            className="h-[80vh] w-full"
          />
        </div>
      </div>
    </main>
  );
}
