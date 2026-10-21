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
  const [placeholder, setPlaceholder] = useState('Type a framework...');

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
    if (hasError) props.push('error="This option is invalid"');

    return `<Autocomplete\n  label="Select Web Framework"\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-6">
      {/* Educational Banner: What is Autocomplete & When to Use It? */}
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
                What is Autocomplete & When to Use It?
              </h3>
              <Badge variant="success" size="xs">
                Search-as-you-type Combobox
              </Badge>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Autocomplete</strong> is a combobox control that filters data options in real time as the user types, combining the speed of free-text search with structured data integrity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>When to Use Autocomplete?</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Use when options are <strong>numerous</strong> (&gt;15 items up to thousands such as Cities, Countries, SKUs, or remote API queries). Eliminates lengthy list scrolling.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <ArrowUpDown className="w-4 h-4 text-blue-600" />
              <span>When to Use Select?</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Use <code className="font-mono text-blue-700">&lt;Select&gt;</code> for bounded, <strong>small</strong> static option sets (&lt;10 options, e.g. Gender, Account Status, or Language).
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <Command className="w-4 h-4 text-purple-600" />
              <span>Keyboard Ergonomics</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Full keyboard navigation support: <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">↓</kbd> <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">↑</kbd> to highlight items, <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">Enter</kbd> to confirm, and <kbd className="px-1 py-0.5 rounded bg-slate-100 border text-[10px]">Esc</kbd> to dismiss.
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
            setPlaceholder('Type a framework...');
          }}
        >
          <div className="w-full max-w-md space-y-3">
            <Autocomplete
              label="Select Web Framework"
              options={FRAMEWORK_OPTIONS}
              value={value}
              onChange={(val) => setValue(val)}
              placeholder={placeholder}
              size={size}
              clearable={clearable}
              loading={loading}
              disabled={disabled}
              error={hasError ? 'This option is invalid or unsupported.' : undefined}
              helperText="Try typing 'Next', 'Vite', 'Nuxt', or 'Hono'."
            />

            <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500">Selected State Value:</span>
              <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                {value || '(empty)'}
              </span>
            </div>
          </div>
        </PropControls.Canvas>

        {/* 2. Responsive Controls Panel */}
        <PropControls title="Autocomplete Configuration" columns={2}>
          <PropControls.Segmented
            label="Size (FieldSize)"
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
            label="Clearable"
            checked={clearable}
            onChange={setClearable}
            description="Clear button icon to reset selection"
          />

          <PropControls.Toggle
            label="Loading State"
            checked={loading}
            onChange={setLoading}
            description="Spinner indicator for async queries"
          />

          <PropControls.Toggle
            label="Error State"
            checked={hasError}
            onChange={setHasError}
            description="Red border and validation error"
          />

          <PropControls.Toggle
            label="Disabled"
            checked={disabled}
            onChange={setDisabled}
            description="Disable combobox interactions"
          />
        </PropControls>

        {/* 3. Generated Code Viewer */}
        <PropControls.Code codeSnippet={generateCode()} />
      </div>
    </div>
  );
}
