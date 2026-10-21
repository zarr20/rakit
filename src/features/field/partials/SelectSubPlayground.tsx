import { useState } from 'react';
import { Select, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';

const ROLE_OPTIONS = [
  { label: 'Software Engineer', value: 'engineer', description: 'Fullstack & frontend developer' },
  { label: 'UI/UX Designer', value: 'designer', description: 'Interface & design system designer' },
  { label: 'Product Manager', value: 'pm', description: 'Product strategy & roadmap' },
  { label: 'DevOps & SRE', value: 'devops', description: 'Cloud infrastructure & CI/CD' },
  { label: 'QA Automation', value: 'qa', description: 'Automated testing & load testing' },
];

export function SelectSubPlayground() {
  const [value, setValue] = useState('engineer');
  const [size, setSize] = useState<FieldSize>('md');
  const [searchable, setSearchable] = useState(true);
  const [clearable, setClearable] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState('Select a role...');

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
    if (hasError) props.push('error="Please select an option"');

    return `<Select\n  label="Job Role"\n  ${props.join('\n  ')}\n/>`;
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
          setPlaceholder('Select a role...');
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <Select
            label="Job Role"
            options={ROLE_OPTIONS}
            value={value}
            onChange={(val) => setValue(val)}
            placeholder={placeholder}
            size={size}
            searchable={searchable}
            clearable={clearable}
            disabled={disabled}
            error={hasError ? 'Please select an option.' : undefined}
            helperText="Click the dropdown to open the selectable options list."
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">Selected State Value:</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
              {value || '(empty)'}
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="Select Configuration" columns={2}>
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
          label="Internal Search"
          checked={searchable}
          onChange={setSearchable}
          description="Internal search filter inside dropdown"
        />

        <PropControls.Toggle
          label="Clearable"
          checked={clearable}
          onChange={setClearable}
          description="Reset selected option"
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
          description="Disable dropdown control interactions"
        />
      </PropControls>

      {/* 3. Generated Code Viewer */}
      <PropControls.Code codeSnippet={generateCode()} />
    </div>
  );
}
