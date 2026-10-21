export function GlobalFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 py-6 px-4 text-center text-xs text-slate-500 font-mono relative z-10 bg-white/70 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800">rakit.</span>
          <span>— Enterprise Developer Toolchain & UI Ecosystem</span>
        </div>
        <div>
          Routing by{' '}
          <a
            href="https://www.npmjs.com/package/@zarr20/rakit-routes"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 font-semibold hover:underline"
          >
            @zarr20/rakit-routes
          </a>{' '}
          & UI by{' '}
          <a
            href="https://www.npmjs.com/package/@zarr20/rakit-ui"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-700 font-semibold hover:underline"
          >
            @zarr20/rakit-ui
          </a>
        </div>
      </div>
    </footer>
  );
}
