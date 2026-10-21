import { useState } from 'react';
import { Button, type ButtonVariant, type ButtonSize } from '@zarr20/rakit-ui';
import { Sparkles, Send, ArrowRight, Download, Heart, Play, Layers, BookOpen } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { BUTTON_PROPS } from './data/buttonProps';

export function ButtonFeature() {
  const [variant, setVariant] = useState<ButtonVariant>('primary');
  const [size, setSize] = useState<ButtonSize>('md');
  const [label, setLabel] = useState('Lanjutkan Proses');
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [pill, setPill] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [iconChoice, setIconChoice] = useState<'none' | 'sparkles' | 'send' | 'arrow' | 'download'>('sparkles');

  const getLeftIcon = () => {
    switch (iconChoice) {
      case 'sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'download':
        return <Download className="w-4 h-4" />;
      default:
        return undefined;
    }
  };

  const getRightIcon = () => {
    switch (iconChoice) {
      case 'send':
        return <Send className="w-4 h-4" />;
      case 'arrow':
        return <ArrowRight className="w-4 h-4" />;
      default:
        return undefined;
    }
  };

  const generateCode = () => {
    const props: string[] = [];
    if (variant !== 'primary') props.push(`variant="${variant}"`);
    if (size !== 'md') props.push(`size="${size}"`);
    if (isLoading) props.push('isLoading');
    if (disabled) props.push('disabled');
    if (pill) props.push('pill');
    if (fullWidth) props.push('fullWidth');

    if (iconChoice === 'sparkles') props.push('leftIcon={<Sparkles className="w-4 h-4" />}');
    if (iconChoice === 'download') props.push('leftIcon={<Download className="w-4 h-4" />}');
    if (iconChoice === 'send') props.push('rightIcon={<Send className="w-4 h-4" />}');
    if (iconChoice === 'arrow') props.push('rightIcon={<ArrowRight className="w-4 h-4" />}');

    const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
    return `<Button${propsString}>\n  ${label}\n</Button>`;
  };

  const variantsList: ButtonVariant[] = [
    'primary',
    'secondary',
    'outline',
    'success',
    'warning',
    'danger',
    'info',
    'purple',
    'subtle',
    'ghost',
  ];

  const sizesList: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'icon'];

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Button"
        tagline="Tombol interaktif dengan 10 varian tema, state loading spinner built-in, dukungan ikon fleksibel, dan gaya kapsul pill."
        badge="General"
        importStatement="import { Button } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
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

        {/* Responsive Full-Width Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setVariant('primary');
              setSize('md');
              setLabel('Lanjutkan Proses');
              setIsLoading(false);
              setDisabled(false);
              setPill(false);
              setFullWidth(false);
              setIconChoice('sparkles');
            }}
            componentId="button-basic"
          >
            <div className="w-full max-w-sm flex items-center justify-center">
              <Button
                variant={variant}
                size={size}
                isLoading={isLoading}
                disabled={disabled}
                pill={pill}
                fullWidth={fullWidth}
                leftIcon={getLeftIcon()}
                rightIcon={getRightIcon()}
              >
                {size === 'icon' ? <Heart className="w-4 h-4" /> : label}
              </Button>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Props Button" columns={3}>
            <PropControls.Text
              label="Label Teks"
              value={label}
              onChange={setLabel}
            />

            <PropControls.Segmented
              label="Ukuran (Size)"
              items={sizesList.map((s) => ({ value: s, label: s }))}
              value={size}
              onChange={(s) => setSize(s as ButtonSize)}
              size="xs"
            />

            <PropControls.Item label={`Varian (${variant})`}>
              <div className="flex flex-wrap gap-1 p-1 border border-slate-200 rounded-xl bg-slate-50/50">
                {variantsList.map((v) => (
                  <Button
                    key={v}
                    variant={variant === v ? 'primary' : 'outline'}
                    size="xs"
                    onClick={() => setVariant(v)}
                    className="font-mono text-[11px]"
                  >
                    {v}
                  </Button>
                ))}
              </div>
            </PropControls.Item>

            <PropControls.Segmented
              label="Ikon Slot"
              items={[
                { value: 'none', label: 'None' },
                { value: 'sparkles', label: 'Sparkles' },
                { value: 'send', label: 'Send' },
                { value: 'arrow', label: 'Arrow' },
                { value: 'download', label: 'Download' },
              ]}
              value={iconChoice}
              onChange={(id) => setIconChoice(id as any)}
              size="xs"
            />

            <div className="col-span-1 sm:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <PropControls.Toggle label="isLoading" checked={isLoading} onChange={setIsLoading} />
              <PropControls.Toggle label="disabled" checked={disabled} onChange={setDisabled} />
              <PropControls.Toggle label="pill (Kapsul)" checked={pill} onChange={setPill} />
              <PropControls.Toggle label="fullWidth" checked={fullWidth} onChange={setFullWidth} />
            </div>
          </PropControls>

          {/* 3. Generated Code Viewer */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples Showcase */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase & Varian Visual
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          {/* Variants Showcase */}
          <div
            id="button-variants"
            data-toc-id="button-variants"
            data-toc-title="10 Varian Visual"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                10 Varian Visual Button
              </h3>
              <p className="text-xs text-slate-500">
                Setiap varian dirancang dengan rasio kontras warna yang optimal dan transisi hover yang mulus.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <div className="flex flex-wrap items-center gap-3">
                {variantsList.map((v) => (
                  <Button key={v} variant={v} size="md">
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Sizes Showcase */}
          <div
            id="button-sizes"
            data-toc-id="button-sizes"
            data-toc-title="Skala Ukuran"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Skala Ukuran (xs, sm, md, lg, xl, icon)
              </h3>
              <p className="text-xs text-slate-500">
                Tinggi dan padding proporsional seragam di semua varian tombol.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="xs" variant="primary">Extra Small (xs)</Button>
                <Button size="sm" variant="primary">Small (sm)</Button>
                <Button size="md" variant="primary">Medium (md)</Button>
                <Button size="lg" variant="primary">Large (lg)</Button>
                <Button size="xl" variant="primary">Extra Large (xl)</Button>
                <Button size="icon" variant="primary" aria-label="Icon">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Loading and Pill Showcase */}
          <div
            id="button-states"
            data-toc-id="button-states"
            data-toc-title="Loading & Pill Rounded"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Loading State & Pill Rounded
              </h3>
              <p className="text-xs text-slate-500">
                Spinner built-in otomatis saat isLoading aktif dan border radius kapsul penuh dengan prop pill.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" isLoading>Memproses...</Button>
                <Button variant="outline" isLoading>Sinkronisasi</Button>
                <Button variant="danger" isLoading>Menghapus</Button>
                <Button variant="success" pill leftIcon={<Sparkles className="w-4 h-4" />}>
                  Pill Success
                </Button>
                <Button variant="purple" pill rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Pill Purple
                </Button>
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
          <PropsTable props={BUTTON_PROPS} />
        </div>
      </section>
    </div>
  );
}
