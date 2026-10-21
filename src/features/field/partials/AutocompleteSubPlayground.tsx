import { useState } from 'react';
import { Autocomplete, Card, Badge, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';
import { Sparkles, CheckCircle2, ArrowUpDown, Command } from 'lucide-react';

const FRAMEWORK_OPTIONS = [
  { label: 'Next.js (React Fullstack Framework)', value: 'Next.js' },
  { label: 'Vite (Next Generation Frontend Tooling)', value: 'Vite' },
  { label: 'Astro (Content-focused Web Framework)', value: 'Astro' },
  { label: 'Remix (Fullstack React Router)', value: 'Remix' },
  { label: 'Gatsby (Static Site Generator)', value: 'Gatsby' },
  { label: 'Nuxt (Intuitive Vue Framework)', value: 'Nuxt' },
  { label: 'SvelteKit (Cybernetically Enhanced Web Apps)', value: 'SvelteKit' },
  { label: 'Angular (Modern Web Developer Platform)', value: 'Angular' },
  { label: 'SolidStart (Fine-grained Reactivity)', value: 'SolidStart' },
  { label: 'Qwik City (Resumable Framework)', value: 'Qwik' },
  { label: 'Hono (Ultrafast Web Standards Framework)', value: 'Hono' },
  { label: 'Express (Fast, unopinionated Node.js)', value: 'Express' },
];

export function AutocompleteSubPlayground() {
  const [value, setValue] = useState('Next.js');
  const [size, setSize] = useState<FieldSize>('md');
  const [clearable, setClearable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState('Ketik framework...');

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  const generateCode = () => {
    const props: string[] = [
      'options={frameworkOptions}',
      `value="${value}"`,
      'onChange={setValue}',
      `size="${size}"`,
      `placeholder="${placeholder}"`,
    ];
    if (clearable) props.push('clearable');
    if (loading) props.push('loading');
    if (disabled) props.push('disabled');
    if (hasError) props.push('error="Pilihan ini tidak valid"');

    return `<Autocomplete\n  label="Pilih Framework"\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-6">
      {/* Educational Banner: Apa itu Autocomplete & Untuk Apa Digunakan? */}
      <Card
        variant="default"
        padding="large"
        className="bg-gradient-to-r from-emerald-50/70 via-slate-50/50 to-white border-emerald-200/80 space-y-4"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-emerald-600 text-white shadow-2xs shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-base text-slate-900">
                Apa itu Autocomplete & Kapan Digunakan?
              </h3>
              <Badge variant="success" size="xs">
                Search-as-you-type Combobox
              </Badge>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Autocomplete</strong> adalah kontrol kombinasi (combobox) yang menyaring opsi data secara real-time saat pengguna mengetik. Menggabungkan kecepatan pencarian teks dengan keamanan data terstruktur.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Kapan Pakai Autocomplete?</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Gunakan jika opsi <strong>banyak</strong> (&gt;15 item hingga ribuan data seperti Kota, Negara, SKU, atau hasil API jarak jauh). Pengguna tidak perlu scrolling daftar panjang.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <ArrowUpDown className="w-4 h-4 text-blue-600" />
              <span>Kapan Pakai Select?</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Gunakan <code className="font-mono text-blue-700">&lt;Select&gt;</code> untuk pilihan statis yang <strong>sedikit</strong> (&lt;10 opsi, misal: Jenis Kelamin, Status Akun, atau Bahasa).
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Command className="w-4 h-4 text-purple-600" />
              <span>Ergonomi Keyboard</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Mendukung navigasi penuh: <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">↓</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">↑</kbd> untuk memilih item, <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">Enter</kbd> untuk konfirmasi, dan <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">Esc</kbd> untuk menutup.
            </p>
          </div>
        </div>
      </Card>

      {/* Responsive Full-Width Sub Playground */}
      <div className="space-y-4">
        {/* 1. Full-Width Preview Canvas */}
        <PropControls.Canvas
          codeSnippet={generateCode()}
          componentId="autocomplete"
          onReset={() => {
            setValue('Next.js');
            setSize('md');
            setClearable(true);
            setLoading(false);
            setDisabled(false);
            setHasError(false);
            setPlaceholder('Ketik framework...');
          }}
        >
          <div className="w-full max-w-md space-y-3">
            <Autocomplete
              label="Pilih Framework Web"
              options={FRAMEWORK_OPTIONS}
              value={value}
              onChange={(val) => setValue(val)}
              placeholder={placeholder}
              size={size}
              clearable={clearable}
              loading={loading}
              disabled={disabled}
              error={hasError ? 'Pilihan ini tidak valid atau tidak didukung.' : undefined}
              helperText="Coba ketik 'Next', 'Vite', 'Nuxt', atau 'Hono'."
            />

            <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500">Nilai State Terpilih:</span>
              <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                {value || '(kosong)'}
              </span>
            </div>
          </div>
        </PropControls.Canvas>

        {/* 2. Responsive Controls Panel */}
        <PropControls title="Konfigurasi Autocomplete" columns={3}>
          <PropControls.Segmented
            label="Ukuran (FieldSize)"
            items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
            value={size}
            onChange={(s) => setSize(s as FieldSize)}
            size="xs"
          />

          <PropControls.Text
            label="Placeholder"
            value={placeholder}
            onChange={setPlaceholder}
          />

          <PropControls.Toggle
            label="Tombol Hapus (Clearable)"
            checked={clearable}
            onChange={setClearable}
            description="Icon silang reset pilihan"
          />

          <PropControls.Toggle
            label="Status Memuat (Loading)"
            checked={loading}
            onChange={setLoading}
            description="Spinner indikator async"
          />

          <PropControls.Toggle
            label="Status Error"
            checked={hasError}
            onChange={setHasError}
            description="Border merah & validasi"
          />

          <PropControls.Toggle
            label="Nonaktifkan (Disabled)"
            checked={disabled}
            onChange={setDisabled}
          />
        </PropControls>

        {/* 3. Generated Code Viewer */}
        <PropControls.Code codeSnippet={generateCode()} />
      </div>
    </div>
  );
}
