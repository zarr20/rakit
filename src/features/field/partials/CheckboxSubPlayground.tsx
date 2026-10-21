import { useState } from 'react';
import { Checkbox, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

export function CheckboxSubPlayground() {
  const [checked, setChecked] = useState(true);
  const [size, setSize] = useState<FieldSize>('md');
  const [variant, setVariant] = useState<'default' | 'card'>('default');
  const [indeterminate, setIndeterminate] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const variants = [
    { value: 'default', label: 'Default' },
    { value: 'card', label: 'Card Variant' },
  ];

  const generateCode = () => {
    const props: string[] = [
      'label="Developer Newsletter Subscription"',
      'description="Get weekly component release tips and updates."',
      `checked={${checked}}`,
      'onChange={setChecked}',
      `size="${size}"`,
      `variant="${variant}"`,
    ];
    if (indeterminate) props.push('indeterminate');
    if (disabled) props.push('disabled');

    return `<Checkbox\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas (Direct Component Rendering, NO Sub-Card) */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="checkbox"
        onReset={() => {
          setChecked(true);
          setSize('md');
          setVariant('default');
          setIndeterminate(false);
          setDisabled(false);
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <Checkbox
            label="Developer Newsletter Subscription"
            description="Get weekly component release tips and updates."
            checked={checked}
            onChange={setChecked}
            size={size}
            variant={variant}
            indeterminate={indeterminate}
            disabled={disabled}
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">State Value (Boolean):</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {indeterminate ? 'indeterminate' : checked ? 'true (checked)' : 'false (unchecked)'}
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="Checkbox Configuration" columns={2}>
        <PropControls.Segmented
          label="Size (FieldSize)"
          items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
          value={size}
          onChange={(s) => setSize(s as FieldSize)}
          size="xs"
        />

        <PropControls.Segmented
          label="Visual Variant"
          items={variants}
          value={variant}
          onChange={(v) => setVariant(v as any)}
          size="xs"
        />

        <PropControls.Toggle
          label="Indeterminate State"
          checked={indeterminate}
          onChange={setIndeterminate}
          description="Partial status (horizontal dash)"
        />

        <PropControls.Toggle
          label="Disabled"
          checked={disabled}
          onChange={setDisabled}
          description="Disable checkbox interactions"
        />
      </PropControls>

      {/* 3. Generated Code Viewer */}
      <PropControls.Code codeSnippet={generateCode()} />
    </div>
  );
}
