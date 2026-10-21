import { useState } from 'react';
import { MultiSelect, Badge, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

const SKILL_OPTIONS = [
  { label: 'React.js', value: 'react' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Tailwind CSS', value: 'tailwind' },
  { label: 'Next.js', value: 'next' },
  { label: 'Node.js', value: 'node' },
  { label: 'GraphQL', value: 'graphql' },
  { label: 'PostgreSQL', value: 'postgres' },
  { label: 'Docker', value: 'docker' },
  { label: 'Kubernetes', value: 'k8s' },
];

export function MultiSelectSubPlayground() {
  const [value, setValue] = useState<string[]>(['react', 'typescript', 'tailwind']);
  const [size, setSize] = useState<FieldSize>('md');
  const [searchable, setSearchable] = useState(true);
  const [clearable, setClearable] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState('Pilih keahlian teknis...');

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  const generateCode = () => {
    const props: string[] = [
      'options={skillOptions}',
      `value={${JSON.stringify(value)}}`,
      'onChange={setValue}',
      `size="${size}"`,
      `placeholder="${placeholder}"`,
    ];
    if (searchable) props.push('searchable');
    if (clearable) props.push('clearable');
    if (disabled) props.push('disabled');
    if (hasError) props.push('error="Pilih minimal satu keahlian"');

    return `<MultiSelect\n  label="Keahlian Teknis (Skills)"\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="multiselect"
        onReset={() => {
          setValue(['react', 'typescript', 'tailwind']);
          setSize('md');
          setSearchable(true);
          setClearable(true);
          setDisabled(false);
          setHasError(false);
          setPlaceholder('Pilih keahlian teknis...');
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <MultiSelect
            label="Keahlian Teknis (Skills)"
            options={SKILL_OPTIONS}
            value={value}
            onChange={(vals) => setValue(vals)}
            placeholder={placeholder}
            size={size}
            searchable={searchable}
            clearable={clearable}
            disabled={disabled}
            error={hasError ? 'Pilih minimal satu keahlian teknis.' : undefined}
            helperText="Klik opsi untuk menambah tag badge, atau klik silang untuk menghapus tag."
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 space-y-2 text-xs">
            <span className="font-mono text-slate-500">Tag Terpilih ({value.length}):</span>
            <div className="flex flex-wrap gap-1.5">
              {value.length === 0 ? (
                <span className="text-slate-400 italic">Belum ada item terpilih</span>
              ) : (
                value.map((v) => (
                  <Badge key={v} variant="subtle" size="xs">
                    {SKILL_OPTIONS.find((o) => o.value === v)?.label || v}
                  </Badge>
                ))
              )}
            </div>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="Konfigurasi MultiSelect" columns={3}>
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
          label="Filter Pencarian"
          checked={searchable}
          onChange={setSearchable}
          description="Filter opsi di dropdown"
        />

        <PropControls.Toggle
          label="Tombol Hapus Semua"
          checked={clearable}
          onChange={setClearable}
          description="Reset semua tag"
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
  );
}
