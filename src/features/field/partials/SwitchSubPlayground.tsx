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
      'label="Realtime Webhook Notifications"',
      'description="Send instant alerts when services encounter unexpected downtime."',
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
            label="Realtime Webhook Notifications"
            description="Send instant alerts when services encounter unexpected downtime."
            checked={checked}
            onChange={setChecked}
            size={size}
            disabled={disabled}
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">State Value (Boolean):</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {checked ? 'true (active)' : 'false (inactive)'}
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="Switch Configuration" columns={2}>
        <PropControls.Segmented
          label="Size (FieldSize)"
          items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
          value={size}
          onChange={(s) => setSize(s as FieldSize)}
          size="xs"
        />

        <PropControls.Toggle
          label="Switch State (Checked)"
          checked={checked}
          onChange={setChecked}
          description="Active (true) or inactive (false)"
        />

        <PropControls.Toggle
          label="Disabled"
          checked={disabled}
          onChange={setDisabled}
          description="Disable switch toggle interactions"
        />
      </PropControls>

      {/* 3. Generated Code Viewer */}
      <PropControls.Code codeSnippet={generateCode()} />
    </div>
  );
}
