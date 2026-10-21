import { useState } from 'react';
import { Select, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

const ROLE_OPTIONS = [
  { label: 'Software Engineer', value: 'engineer', description: 'Pengembang fullstack & frontend' },
  { label: 'UI/UX Designer', value: 'designer', description: 'Desain antarmuka & sistem desain' },
  { label: 'Product Manager', value: 'pm', description: 'Strategi produk & roadmap' },
  { label: 'DevOps & SRE', value: 'devops', description: 'Infrastruktur cloud & CI/CD' },
  { label: 'QA Automation', value: 'qa', description: 'Pengujian otomatis & pengujian beban' },
];

export function SelectSubPlayground() {
  const [value, setValue] = useState('engineer');
  const [size, setSize] = useState<FieldSize>('md');
  const [searchable, setSearchable] = useState(true);
  const [clearable, setClearable] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState('Pilih peran...');

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  const generateCode = () => {
    const props: string[] = [
      'options={roleOptions}',
      `value="${value}"`,
      'onChange={setValue}',
      `size="${size}"`,
      `placeholder="${placeholder}"`,
    ];
    if (searchable) props.push('searchable');
    if (clearable) props.push('clearable');
    if (disabled) props.push('disabled');
    if (hasError) props.push('error="Silakan tentukan pilihan Anda"');

    return `<Select\n  label="Peran Pekerjaan"\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="select"
        onReset={() => {
          setValue('engineer');
          setSize('md');
          setSearchable(true);
          setClearable(true);
          setDisabled(false);
          setHasError(false);
          setPlaceholder('Pilih peran...');
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <Select
            label="Peran Pekerjaan (Role)"
            options={ROLE_OPTIONS}
            value={value}
            onChange={(val) => setValue(val)}
            placeholder={placeholder}
            size={size}
            searchable={searchable}
            clearable={clearable}
            disabled={disabled}
            error={hasError ? 'Silakan tentukan pilihan Anda.' : undefined}
            helperText="Klik dropdown untuk membuka daftar pilihan statis."
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">Nilai State Terpilih:</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {value || '(kosong)'}
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="Konfigurasi Select" columns={3}>
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
          label="Internal Search"
          checked={searchable}
          onChange={setSearchable}
          description="Pencarian internal dropdown"
        />

        <PropControls.Toggle
          label="Tombol Hapus (Clearable)"
          checked={clearable}
          onChange={setClearable}
          description="Mereset pilihan"
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
