import { useState } from 'react';
import {
  Container,
  type ContainerSize,
  type ContainerVariant,
} from '@zarr20/rakit-ui';
import { Play, Layers, BookOpen } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { CONTAINER_PROPS, ACTION_BAR_PROPS } from './data/containerProps';

export function ContainerFeature() {
  const [size, setSize] = useState<ContainerSize>('lg');
  const [variant, setVariant] = useState<ContainerVariant>('card');

  const sizes: ContainerSize[] = ['sm', 'md', 'lg', 'xl', 'full'];
  const variants: ContainerVariant[] = ['default', 'card', 'bordered', 'ghost'];

  const generateCode = () => {
    return `<Container size="${size}" variant="${variant}" padding="medium">
  <div className="py-6 px-4 text-center">
    <h2 className="text-base font-bold text-slate-900">Judul Konten Halaman</h2>
    <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
      Container mengelola batas lebar responsif, alignment tengah, dan padding otomatis.
    </p>
  </div>
</Container>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Container & Layout"
        tagline="Primitif tata letak struktural aplikasi: Container pembatas lebar, ActionBar, Layout shell, Sidebar, dan Backdrop."
        badge="Layout & Structure"
        importStatement="import { Container, ActionBar, Layout } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Playground */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Sandbox & Controls
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout (Canvas on top, controls below) */}
        <div className="space-y-4">
          {/* 1. Full Width Live Canvas (Without fake sub-cards) */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setSize('lg');
              setVariant('card');
            }}
          >
            <div className="w-full">
              <Container size={size} variant={variant} padding="medium">
                <div className="py-8 px-4 text-center space-y-2 border border-dashed border-emerald-300/80 rounded-lg bg-emerald-50/20">
                  <div className="text-xs font-mono font-semibold uppercase text-emerald-800">
                    &lt;Container size="{size}" variant="{variant}" padding="medium"&gt;
                  </div>
                  <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Container membatasi lebar maksimal di tengah layar secara responsif dengan padding horizontal terstandarisasi.
                  </p>
                </div>
              </Container>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Container & Shell" columns={2}>
            <PropControls.Segmented
              label="Lebar Maksimal (Size)"
              items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
              value={size}
              onChange={(s) => setSize(s as ContainerSize)}
              size="xs"
            />

            <PropControls.Segmented
              label="Varian Tampilan"
              items={variants.map((v) => ({ value: v, label: v }))}
              value={variant}
              onChange={(v) => setVariant(v as ContainerVariant)}
              size="xs"
            />
          </PropControls>

          {/* 3. Generated Code Viewer */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples & Architecture */}
      <section id="examples" className="space-y-8 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase & Breakpoint Widths
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        {/* Breakpoint Widths Showcase */}
        <div
          id="breakpoint-widths"
          data-toc-id="breakpoint-widths"
          data-toc-title="Breakpoint Widths"
          data-toc-level="2"
          className="space-y-3"
        >
          <div>
            <h3 className="text-base font-display font-semibold text-slate-900">
              Skala Lebar Maksimal Container (Breakpoint Widths)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Container mengunci lebar maksimal di tengah kanvas (center alignment) dengan padding horizontal otomatis.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
              <div key={s} className="p-3.5 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                  <span className="font-semibold uppercase text-emerald-800">size="{s}"</span>
                  <span className="text-[11px] text-slate-500">
                    {s === 'sm' ? 'max-w-screen-sm (640px)' : s === 'md' ? 'max-w-screen-md (768px)' : s === 'lg' ? 'max-w-screen-lg (1024px)' : 'max-w-screen-xl (1280px)'}
                  </span>
                </div>
                <Container size={s} variant="bordered" padding="small" className="bg-white">
                  <div className="py-2 text-center text-xs font-mono text-slate-700">
                    Area Konten Container ({s})
                  </div>
                </Container>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: API Reference */}
      <section id="props" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              API Reference & Props
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-8">
          <div
            id="props-container"
            data-toc-id="props-container"
            data-toc-title="Props Container"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;Container /&gt;
            </h3>
            <PropsTable props={CONTAINER_PROPS} />
          </div>

          <div
            id="props-action-bar"
            data-toc-id="props-action-bar"
            data-toc-title="Props ActionBar"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-slate-800">
              Props &lt;ActionBar /&gt;
            </h3>
            <PropsTable props={ACTION_BAR_PROPS} />
          </div>
        </div>
      </section>
    </div>
  );
}
