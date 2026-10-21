import { useState } from 'react';
import {
  Grid,
  Card,
  Badge,
  type GridGap,
} from '@zarr20/rakit-ui';
import { Sparkles, Smartphone, Laptop, Play, Layers, BookOpen } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { GRID_PROPS, GRID_COL_PROPS } from './data/gridProps';

export function GridFeature() {
  const [gap, setGap] = useState<GridGap>('md');
  const [presetLayout, setPresetLayout] = useState<'sidebar' | 'halves' | 'thirds' | 'dashboard'>('sidebar');

  const gapOptions: GridGap[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];

  const generateCode = () => {
    if (presetLayout === 'sidebar') {
      return `<Grid cols={{ base: 1, lg: 12 }} gap="${gap}">
  <Grid.Col span={{ base: 12, lg: 5 }}>
    <Card padding="medium">Panel Sidebar (5 Kolom)</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, lg: 7 }}>
    <Card padding="medium">Konten Utama (7 Kolom)</Card>
  </Grid.Col>
</Grid>`;
    }
    if (presetLayout === 'halves') {
      return `<Grid cols={{ base: 1, md: 2 }} gap="${gap}">
  <Grid.Col span={{ base: 12, md: 6 }}>
    <Card padding="medium">Kolom Kiri (50%)</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, md: 6 }}>
    <Card padding="medium">Kolom Kanan (50%)</Card>
  </Grid.Col>
</Grid>`;
    }
    if (presetLayout === 'thirds') {
      return `<Grid cols={{ base: 1, md: 3 }} gap="${gap}">
  <Grid.Col span={{ base: 12, md: 4 }}>
    <Card padding="medium">Kolom 1/3</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, md: 4 }}>
    <Card padding="medium">Kolom 2/3</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, md: 4 }}>
    <Card padding="medium">Kolom 3/3</Card>
  </Grid.Col>
</Grid>`;
    }
    return `<Grid cols={{ base: 1, sm: 2, lg: 4 }} gap="${gap}">
  <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
    <Card padding="medium">Kartu Metrik 1</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
    <Card padding="medium">Kartu Metrik 2</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
    <Card padding="medium">Kartu Metrik 3</Card>
  </Grid.Col>
  <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
    <Card padding="medium">Kartu Metrik 4</Card>
  </Grid.Col>
</Grid>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Grid Layout"
        tagline="Sistem layout 12-kolom responsif dengan token gap terstandarisasi, breakpoint fleksibel, dan perataan sumbu."
        badge="12-Cols"
        importStatement="import { Grid } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Playground */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Grid Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setPresetLayout('sidebar');
              setGap('md');
            }}
          >
            <div className="w-full">
              {presetLayout === 'sidebar' && (
                <Grid cols={{ base: 1, lg: 12 }} gap={gap} align="start">
                  <Grid.Col span={{ base: 12, lg: 5 }}>
                    <Card padding="medium" className="bg-white border-emerald-200">
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                          Grid.Col span=5
                        </span>
                        <h4 className="font-semibold text-slate-900 text-sm">Panel Kontrol Kiri</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Sangat ideal untuk filter form, list master, atau konfigurasi properties.
                        </p>
                      </div>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, lg: 7 }}>
                    <Card padding="medium" className="bg-white border-slate-200">
                      <div className="space-y-2">
                        <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          Grid.Col span=7
                        </span>
                        <h4 className="font-semibold text-slate-900 text-sm">Kanvas Konten Utama</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Area fleksibel untuk rendering card, tabel analitik, atau formulir detail.
                        </p>
                      </div>
                    </Card>
                  </Grid.Col>
                </Grid>
              )}

              {presetLayout === 'halves' && (
                <Grid cols={{ base: 1, md: 2 }} gap={gap} align="start">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card padding="medium" className="bg-white border-slate-200">
                      <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        span=6 (50%)
                      </span>
                      <h4 className="font-semibold text-slate-900 text-sm mt-2">Kolom Kiri</h4>
                      <p className="text-xs text-slate-600 mt-1">Pembagian 2 kolom simetris.</p>
                    </Card>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Card padding="medium" className="bg-white border-slate-200">
                      <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        span=6 (50%)
                      </span>
                      <h4 className="font-semibold text-slate-900 text-sm mt-2">Kolom Kanan</h4>
                      <p className="text-xs text-slate-600 mt-1">Pembagian 2 kolom simetris.</p>
                    </Card>
                  </Grid.Col>
                </Grid>
              )}

              {presetLayout === 'thirds' && (
                <Grid cols={{ base: 1, md: 3 }} gap={gap} align="start">
                  {[1, 2, 3].map((num) => (
                    <Grid.Col key={num} span={{ base: 12, md: 4 }}>
                      <Card padding="medium" className="bg-white border-slate-200">
                        <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          span=4 (33.3%)
                        </span>
                        <h4 className="font-semibold text-slate-900 text-sm mt-2">Kartu #{num}</h4>
                        <p className="text-xs text-slate-600 mt-1">Grid 3 kolom seimbang.</p>
                      </Card>
                    </Grid.Col>
                  ))}
                </Grid>
              )}

              {presetLayout === 'dashboard' && (
                <Grid cols={{ base: 1, sm: 2, lg: 4 }} gap={gap} align="start">
                  {[
                    { title: 'Total Users', val: '24,591', badge: '+12%' },
                    { title: 'API Requests', val: '1.2M', badge: '+28%' },
                    { title: 'Response Time', val: '42ms', badge: 'Fast' },
                    { title: 'Error Rate', val: '0.01%', badge: 'Optimal' },
                  ].map((stat, i) => (
                    <Grid.Col key={i} span={{ base: 12, sm: 6, lg: 3 }}>
                      <Card padding="medium" className="bg-white border-slate-200">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500 font-mono">{stat.title}</span>
                          <Badge variant="success" size="xs">{stat.badge}</Badge>
                        </div>
                        <p className="text-xl font-bold font-display text-slate-900 mt-2">{stat.val}</p>
                      </Card>
                    </Grid.Col>
                  ))}
                </Grid>
              )}
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Grid & Kolom" columns={2}>
            <PropControls.Segmented
              label="Preset Komposisi Kolom"
              items={[
                { value: 'sidebar', label: '5:7 Sidebar' },
                { value: 'halves', label: '6:6 Split' },
                { value: 'thirds', label: '4:4:4 Thirds' },
                { value: 'dashboard', label: '4-Cards Metric' },
              ]}
              value={presetLayout}
              onChange={(p) => setPresetLayout(p as any)}
              size="xs"
            />

            <PropControls.Segmented
              label="Gap Rhythm"
              items={gapOptions.map((g) => ({ value: g, label: g }))}
              value={gap}
              onChange={(g) => setGap(g as GridGap)}
              size="xs"
            />
          </PropControls>

          {/* 3. Generated Code Viewer */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Responsive Breakpoints Showcase */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase Responsif & Breakpoints
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          <div
            id="responsive-breakpoints"
            data-toc-id="responsive-breakpoints"
            data-toc-title="Pola Breakpoints Responsif"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-base font-display font-semibold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Pola Responsif Berbasis Breakpoints</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Komponen <code className="text-emerald-800 font-mono font-semibold">Grid</code> dan <code className="text-emerald-800 font-mono font-semibold">Grid.Col</code> menerima objek breakpoints:
              <code className="ml-1 text-slate-800 font-mono bg-slate-100 px-1.5 py-0.5 rounded text-xs">{`{ base: 12, sm: 6, lg: 4 }`}</code>.
              Hal ini menjamin tampilan antarmuka menyesuaikan diri secara mulus di smartphone, tablet, maupun layar desktop lebar.
            </p>
          </div>

          <div
            id="mobile-desktop-comparison"
            data-toc-id="mobile-desktop-comparison"
            data-toc-title="Mobile vs Desktop View"
            data-toc-level="2"
            className="space-y-3"
          >
            <Grid cols={{ base: 1, md: 2 }} gap="lg">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                    <Smartphone className="w-4 h-4 text-emerald-700" />
                    <span>Mobile View (&lt; 768px)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Secara default, kolom akan otomatis meregang menjadi 100% lebar layar (<code className="font-mono text-emerald-800">col-span-12</code>) untuk kenyamanan sentuhan jari.
                  </p>
                </div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <div className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                    <Laptop className="w-4 h-4 text-emerald-700" />
                    <span>Desktop View (&ge; 1024px)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Kolom otomatis terbagi menjadi pembagian proporsional (misal 5 kolom dan 7 kolom) tanpa pergeseran layout.
                  </p>
                </div>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </section>

      {/* Section 3: Props Reference */}
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
            id="props-grid"
            data-toc-id="props-grid"
            data-toc-title="Grid Container Props"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-mono uppercase text-slate-700 font-semibold">
              Grid Container Props
            </h3>
            <PropsTable props={GRID_PROPS} />
          </div>

          <div
            id="props-grid-col"
            data-toc-id="props-grid-col"
            data-toc-title="Grid.Col Props"
            data-toc-level="2"
            className="space-y-3"
          >
            <h3 className="text-sm font-mono uppercase text-slate-700 font-semibold">
              Grid.Col Props
            </h3>
            <PropsTable props={GRID_COL_PROPS} />
          </div>
        </div>
      </section>
    </div>
  );
}
