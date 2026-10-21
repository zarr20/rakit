import { useState } from 'react';
import { TextArea, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

export function TextAreaSubPlayground() {
  const [value, setValue] = useState('Fullstack Developer & System Architect based in Indonesia.');
  const [size, setSize] = useState<FieldSize>('md');
  const [rows, setRows] = useState<'2' | '3' | '5'>('3');
  const [showCount, setShowCount] = useState(true);
  const [clearable, setClearable] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState('Tell us about your background...');

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const rowOptions = [
    { value: '2', label: '2 Rows' },
    { value: '3', label: '3 Rows' },
    { value: '5', label: '5 Rows' },
  ];

  const generateCode = () => {
    const props: string[] = [
      'label="Short Biography"',
      `value="${value}"`,
      'onChange={(e) => setValue(e.target.value)}',
      `size="${size}"`,
      `rows={${rows}}`,
      `placeholder="${placeholder}"`,
    ];
    if (showCount) props.push('showCount', 'maxLength={160}');
    if (clearable) props.push('clearable');
    if (disabled) props.push('disabled');
    if (hasError) props.push('error="Description is too short"');

    return `<TextArea\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="textarea"
        onReset={() => {
          setValue('Fullstack Developer & System Architect based in Indonesia.');
          setSize('md');
          setRows('3');
          setShowCount(true);
          setClearable(false);
          setDisabled(false);
          setHasError(false);
          setPlaceholder('Tell us about your background...');
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <TextArea
            label="Profile Short Biography"
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
            error={hasError ? 'Description is too short (minimum 20 characters).' : undefined}
            helperText="Characters are capped at maximum 160 for concise summary format."
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">Character Count:</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {value.length} / 160
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="TextArea Configuration" columns={2}>
        <PropControls.Segmented
          label="Size (FieldSize)"
          items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
          value={size}
          onChange={(s) => setSize(s as FieldSize)}
          size="xs"
        />

        <PropControls.Segmented
          label="Row Height (Rows)"
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
          label="Character Counter (showCount)"
          checked={showCount}
          onChange={setShowCount}
          description="Live 0/160 character count indicator"
        />

        <PropControls.Toggle
          label="Clearable"
          checked={clearable}
          onChange={setClearable}
          description="Clear button icon to reset text"
        />

        <PropControls.Toggle
          label="Error State"
          checked={hasError}
          onChange={setHasError}
          description="Red error border and validation helper"
        />

        <PropControls.Toggle
          label="Disabled"
          checked={disabled}
          onChange={setDisabled}
          description="Disable textarea control interactions"
        />
      </PropControls>

      {/* 3. Generated Code Viewer */}
      <PropControls.Code codeSnippet={generateCode()} />
    </div>
  );
}
