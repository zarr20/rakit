import { useState } from 'react';
import { RadioGroup, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

const DEPLOY_OPTIONS = [
  { label: 'Edge Network (Global low-latency)', value: 'edge', description: 'Automatic deployment to 300+ PoPs worldwide' },
  { label: 'Serverless Functions', value: 'serverless', description: 'On-demand microVM container execution' },
  { label: 'Dedicated VPS', value: 'vps', description: 'Full root access with dedicated CPU cores' },
];

export function RadioSubPlayground() {
  const [value, setValue] = useState('edge');
  const [size, setSize] = useState<FieldSize>('md');
  const [variant, setVariant] = useState<'default' | 'card'>('default');
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  const [disabled, setDisabled] = useState(false);

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const variants = [
    { value: 'default', label: 'Default' },
    { value: 'card', label: 'Card Variant' },
  ];
  const orientations = [
    { value: 'vertical', label: 'Vertical' },
    { value: 'horizontal', label: 'Horizontal' },
  ];

  const generateCode = () => {
    const props: string[] = [
      'name="deployTarget"',
      'options={deployOptions}',
      `value="${value}"`,
      'onChange={setValue}',
      `size="${size}"`,
      `variant="${variant}"`,
      `orientation="${orientation}"`,
    ];
    if (disabled) props.push('disabled');

    return `<RadioGroup\n  label="Deployment Target Server"\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas (Direct Component Rendering, NO Sub-Card) */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="radio"
        onReset={() => {
          setValue('edge');
          setSize('md');
          setVariant('default');
          setOrientation('vertical');
          setDisabled(false);
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <RadioGroup
            label="Deployment Target Server"
            name="deployTarget"
            options={DEPLOY_OPTIONS}
            value={value}
            onChange={setValue}
            size={size}
            variant={variant}
            orientation={orientation}
            disabled={disabled}
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">Selected State Value:</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {value}
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="RadioGroup Configuration" columns={2}>
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

        <PropControls.Segmented
          label="Layout Orientation"
          items={orientations}
          value={orientation}
          onChange={(o) => setOrientation(o as any)}
          size="xs"
        />

        <PropControls.Toggle
          label="Disabled"
          checked={disabled}
          onChange={setDisabled}
          description="Disable radio group interactions"
        />
      </PropControls>

      {/* 3. Generated Code Viewer */}
      <PropControls.Code codeSnippet={generateCode()} />
    </div>
  );
}
