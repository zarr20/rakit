import { useState } from 'react';
import { TextArea, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

export function TextAreaSubPlayground() {
  const [value, setValue] = useState('Fullstack Developer & System Architect berbasis di Indonesia.');
  const [size, setSize] = useState<FieldSize>('md');
  const [rows, setRows] = useState<'2' | '3' | '5'>('3');
  const [showCount, setShowCount] = useState(true);
  const [clearable, setClearable] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState('Ceritakan latar belakang Anda...');

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const rowOptions = [
    { value: '2', label: '2 Baris' },
    { value: '3', label: '3 Baris' },
    { value: '5', label: '5 Baris' },
  ];

  const generateCode = () => {
    const props: string[] = [
      'label="Biografi Singkat"',
      `value="${value}"`,
      'onChange={(e) => setValue(e.target.value)}',
      `size="${size}"`,
      `rows={${rows}}`,
      `placeholder="${placeholder}"`,
    ];
    if (showCount) props.push('showCount', 'maxLength={160}');
    if (clearable) props.push('clearable');
    if (disabled) props.push('disabled');
    if (hasError) props.push('error="Deskripsi terlalu singkat"');

    return `<TextArea\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="textarea"
        onReset={() => {
          setValue('Fullstack Developer & System Architect berbasis di Indonesia.');
          setSize('md');
          setRows('3');
          setShowCount(true);
          setClearable(false);
          setDisabled(false);
          setHasError(false);
          setPlaceholder('Ceritakan latar belakang Anda...');
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <TextArea
            label="Biografi Singkat Profil"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            size={size}
            rows={Number(rows)}
            showCount={showCount}
            maxLength={showCount ? 160 : undefined}
            clearable={clearable}
            onClear={() => setValue('')}
            disabled={disabled}
            error={hasError ? 'Deskripsi terlalu singkat (minimal 20 karakter).' : undefined}
            helperText="Karakter dibatasi hingga maksimal 160 karakter untuk format ringkas."
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">Panjang Karakter:</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {value.length} / 160
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="Konfigurasi TextArea" columns={3}>
        <PropControls.Segmented
          label="Ukuran (FieldSize)"
          items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
          value={size}
          onChange={(s) => setSize(s as FieldSize)}
          size="xs"
        />

        <PropControls.Segmented
          label="Tinggi Baris (Rows)"
          items={rowOptions}
          value={rows}
          onChange={(r) => setRows(r as any)}
          size="xs"
        />

        <PropControls.Text
          label="Placeholder"
          value={placeholder}
          onChange={setPlaceholder}
        />

        <PropControls.Toggle
          label="Penghitung Karakter (showCount)"
          checked={showCount}
          onChange={setShowCount}
          description="Indikator 0/160 karakter"
        />

        <PropControls.Toggle
          label="Tombol Hapus (Clearable)"
          checked={clearable}
          onChange={setClearable}
          description="Tombol silang reset teks"
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
