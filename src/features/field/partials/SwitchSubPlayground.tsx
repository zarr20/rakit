import { useState } from 'react';
import { Switch, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

export function SwitchSubPlayground() {
  const [checked, setChecked] = useState(true);
  const [size, setSize] = useState<FieldSize>('md');
  const [disabled, setDisabled] = useState(false);

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

  const generateCode = () => {
    const props: string[] = [
      'label="Notifikasi Realtime Webhook"',
      'description="Kirim peringatan instan ketika service mengalami kegagalan."',
      `checked={${checked}}`,
      'onChange={setChecked}',
      `size="${size}"`,
    ];
    if (disabled) props.push('disabled');

    return `<Switch\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas (Direct Component Rendering, NO Sub-Card) */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="switch"
        onReset={() => {
          setChecked(true);
          setSize('md');
          setDisabled(false);
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <Switch
            label="Notifikasi Realtime Webhook"
            description="Kirim peringatan instan ketika service mengalami kegagalan."
            checked={checked}
            onChange={setChecked}
            size={size}
            disabled={disabled}
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">Nilai State (Boolean):</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {checked ? 'true (aktif)' : 'false (nonaktif)'}
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="Konfigurasi Switch" columns={2}>
        <PropControls.Segmented
          label="Ukuran (FieldSize)"
          items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
          value={size}
          onChange={(s) => setSize(s as FieldSize)}
          size="xs"
        />

        <PropControls.Toggle
          label="Status Sakelar (Checked)"
          checked={checked}
          onChange={setChecked}
          description="Aktif (true) atau nonaktif (false)"
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
