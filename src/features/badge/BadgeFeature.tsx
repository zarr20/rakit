import { useState } from 'react';
import { Badge, Button, type BadgeVariant, type BadgeSize } from '@zarr20/rakit-ui';
import { Sparkles, CheckCircle2, ShieldCheck, AlertCircle, Tag, Play, Layers, BookOpen } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { BADGE_PROPS } from './data/badgeProps';

export function BadgeFeature() {
  const [variant, setVariant] = useState<BadgeVariant>('success');
  const [size, setSize] = useState<BadgeSize>('sm');
  const [pill, setPill] = useState(true);
  const [label, setLabel] = useState('Active');
  const [withLeftIcon, setWithLeftIcon] = useState(false);
  const [withRightIcon, setWithRightIcon] = useState(false);

  const badgeVariants: BadgeVariant[] = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
    'purple',
    'subtle',
    'outline',
  ];

  const badgeSizes: BadgeSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  const generateBadgeCode = () => {
    const pillProp = pill ? ' pill' : '';
    const leftIconProp = withLeftIcon ? ' leftIcon={<CheckCircle2 className="w-3.5 h-3.5" />}' : '';
    const rightIconProp = withRightIcon ? ' rightIcon={<Sparkles className="w-3 h-3" />}' : '';
    return `<Badge variant="${variant}" size="${size}"${pillProp}${leftIconProp}${rightIconProp}>\n  ${label}\n</Badge>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Badge & Status"
        tagline="Indikator status visual terstandarisasi, tag pill, dan penanda kategori dengan 5 skala ukuran seragam."
        badge="Data Display"
        importStatement="import { Badge } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-8 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Badge Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Universal Sizing Comparison */}
        <div
          id="badge-sizing"
          data-toc-id="badge-sizing"
          data-toc-title="Skala Ukuran (xs-xl)"
          data-toc-level="2"
          className="space-y-3"
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Universal Sizing Scale (5 Tingkatan Ukuran Seragam)
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Presisi Ketinggian Piksel</span>
          </div>

          <div className="flex flex-wrap items-end gap-5 p-5 rounded-2xl bg-slate-50/50 border border-slate-200/90">
            {badgeSizes.map((s) => {
              const heightMap = { xs: '20px', sm: '24px', md: '28px', lg: '32px', xl: '36px' }[s];
              const fontMap = { xs: '10px', sm: '12px', md: '12px', lg: '14px', xl: '14px' }[s];
              return (
                <div key={s} className="flex flex-col items-center gap-2">
                  <Badge variant="primary" size={s}>
                    Badge {s.toUpperCase()}
                  </Badge>
                  <div className="text-center font-mono text-[10px] text-slate-500 leading-tight">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 uppercase">{s}</span>
                    <div>{heightMap} • {fontMap}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Standard Badge Sandbox */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateBadgeCode()}
            onReset={() => {
              setVariant('success');
              setSize('sm');
              setPill(true);
              setLabel('Active');
              setWithLeftIcon(false);
              setWithRightIcon(false);
            }}
            componentId="badge-basic"
          >
            <Badge
              variant={variant}
              size={size}
              pill={pill}
              leftIcon={withLeftIcon ? <CheckCircle2 className="w-3.5 h-3.5" /> : undefined}
              rightIcon={withRightIcon ? <Sparkles className="w-3 h-3" /> : undefined}
            >
              {label}
            </Badge>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Props Badge" columns={3}>
            <PropControls.Text
              label="Teks Label"
              value={label}
              onChange={setLabel}
            />

            <PropControls.Segmented
              label="Ukuran (Size)"
              items={badgeSizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
              value={size}
              onChange={(s) => setSize(s as BadgeSize)}
              size="xs"
            />

            <PropControls.Item label={`Varian Warna (${variant})`}>
              <div className="flex flex-wrap gap-1 p-1 border border-slate-200 rounded-xl bg-slate-50/50">
                {badgeVariants.map((v) => (
                  <Button
                    key={v}
                    variant={variant === v ? 'primary' : 'outline'}
                    size="xs"
                    onClick={() => setVariant(v)}
                    className="font-mono capitalize text-[11px]"
                  >
                    {v}
                  </Button>
                ))}
              </div>
            </PropControls.Item>

            <div className="col-span-1 sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <PropControls.Toggle
                label="Pill (rounded-full)"
                checked={pill}
                onChange={setPill}
              />
              <PropControls.Toggle
                label="Ikon Kiri (leftIcon)"
                checked={withLeftIcon}
                onChange={setWithLeftIcon}
              />
              <PropControls.Toggle
                label="Ikon Kanan (rightIcon)"
                checked={withRightIcon}
                onChange={setWithRightIcon}
              />
            </div>
          </PropControls>

          {/* 3. Generated Code Viewer */}
          <PropControls.Code codeSnippet={generateBadgeCode()} />
        </div>
      </section>

      {/* Section 2: Examples */}
      <section id="examples" className="space-y-8 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase & Varian Status
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          {/* All variants showcase */}
          <div
            id="badge-variants"
            data-toc-id="badge-variants"
            data-toc-title="Semua Varian Warna Status"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Semua Varian Warna Status Badge
              </h3>
              <p className="text-xs text-slate-500">
                Palet semantik untuk berbagai kondisi status sistem, peringatan, verifikasi, dan kategori.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <div className="flex flex-wrap items-center gap-3">
                {badgeVariants.map((v) => (
                  <Badge key={v} variant={v} size="md">
                    {v.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Badges with Icons */}
          <div
            id="badge-icons"
            data-toc-id="badge-icons"
            data-toc-title="Badge dengan Ikon Status"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Badge dengan Ikon Status
              </h3>
              <p className="text-xs text-slate-500">
                Slot ikon kiri dan kanan untuk indikator visual tambahan.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success" size="sm" leftIcon={<ShieldCheck className="w-3.5 h-3.5" />}>
                  Terverifikasi
                </Badge>
                <Badge variant="warning" size="sm" leftIcon={<AlertCircle className="w-3.5 h-3.5" />}>
                  Menunggu Review
                </Badge>
                <Badge variant="primary" size="sm" leftIcon={<Sparkles className="w-3.5 h-3.5" />}>
                  Fitur Baru
                </Badge>
                <Badge variant="default" size="sm" leftIcon={<Tag className="w-3.5 h-3.5" />}>
                  v1.2.0
                </Badge>
              </div>
            </div>
          </div>

          {/* Pills vs Rounded Square */}
          <div
            id="badge-shapes"
            data-toc-id="badge-shapes"
            data-toc-title="Bentuk: Pill vs Rounded Corner"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Perbandingan Bentuk: Pill vs Rounded Corner
              </h3>
              <p className="text-xs text-slate-500">
                Gaya kapsul (rounded-full) atau sudut melengkung halus standar (rounded-md/lg).
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">pill=true:</span>
                  <Badge variant="primary" size="sm" pill={true}>Kapsul Pill</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">pill=false:</span>
                  <Badge variant="primary" size="sm" pill={false}>Sudut Lengkung</Badge>
                </div>
              </div>
            </div>
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

        <div className="space-y-4">
          <PropsTable props={BADGE_PROPS} />
        </div>
      </section>
    </div>
  );
}
