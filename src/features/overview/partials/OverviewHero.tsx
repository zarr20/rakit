import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Sparkles, Copy, Check } from 'lucide-react';
import { Button, Badge } from '@zarr20/rakit-ui';
import { useCopyToClipboard } from '../../../shared/hooks/useCopyToClipboard';

export function OverviewHero() {
  const { copied, copy } = useCopyToClipboard();
  const installCmd = 'npm install @zarr20/rakit-ui @zarr20/rakit-routes';

  return (
    <section className="relative pt-8 pb-14 text-center max-w-4xl mx-auto space-y-6 rounded-3xl bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.07),transparent_70%)]">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-mono">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        <span>Rakit Ecosystem v1.0 • React 19 + Tailwind v4</span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.15]">
        Fondasi Enterprise untuk Aplikasi Web Modern.
      </h1>

      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Kombinasi pustaka komponen UI enterprise <span className="text-slate-900 font-semibold">@zarr20/rakit-ui</span> dan routing engine otomatis <span className="text-slate-900 font-semibold">@zarr20/rakit-routes</span>. Zero-config, tipe TypeScript lengkap, dan performa tinggi.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link to="/button">
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shadow-lg shadow-emerald-600/20 font-semibold"
          >
            Jelajahi Dokumentasi
          </Button>
        </Link>

        <Link to="/playground">
          <Button
            variant="outline"
            size="lg"
            leftIcon={<Terminal className="w-4 h-4 text-slate-600" />}
          >
            Buka Live Playground
          </Button>
        </Link>
      </div>

      {/* Quick Install Snippet */}
      <div className="pt-4 flex items-center justify-center">
        <div
          onClick={() => copy(installCmd)}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 font-mono text-xs cursor-pointer hover:bg-slate-800 transition-colors shadow-md group"
          title="Klik untuk salin perintah instalasi"
        >
          <span className="text-emerald-400 font-bold">$</span>
          <span className="text-slate-100">{installCmd}</span>
          <span className="ml-2 pl-2 border-l border-slate-700 text-slate-400 group-hover:text-slate-200">
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </span>
        </div>
      </div>
    </section>
  );
}
