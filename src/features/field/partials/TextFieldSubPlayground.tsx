import { useState } from 'react';
import { TextField, type FieldSize } from '@zarr20/rakit-ui';
import { PropControls } from '../../../shared/components/prop-controls/PropControls';
import { Mail, Lock, User, Hash } from 'lucide-react';

export function TextFieldSubPlayground() {
  const [value, setValue] = useState('dzarr.al');
  const [size, setSize] = useState<FieldSize>('md');
  const [type, setType] = useState<'text' | 'password' | 'email' | 'number'>('text');
  const [clearable, setClearable] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [placeholder, setPlaceholder] = useState('Enter text...');

  const sizes: FieldSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const types = [
    { value: 'text', label: 'Text' },
    { value: 'password', label: 'Password' },
    { value: 'email', label: 'Email' },
    { value: 'number', label: 'Number' },
  ];

  const getIcon = () => {
    switch (type) {
      case 'password':
        return <Lock className="w-4 h-4 text-slate-400" />;
      case 'email':
        return <Mail className="w-4 h-4 text-slate-400" />;
      case 'number':
        return <Hash className="w-4 h-4 text-slate-400" />;
      default:
        return <User className="w-4 h-4 text-slate-400" />;
    }
  };

  const generateCode = () => {
    const props: string[] = [
      'label="User Account Name"',
      `type="${type}"`,
      `value="${type === 'password' ? '********' : value}"`,
      'onChange={(e) => setValue(e.target.value)}',
      `size="${size}"`,
      `placeholder="${placeholder}"`,
    ];
    if (clearable) props.push('clearable');
    if (disabled) props.push('disabled');
    if (hasError) props.push('error="Input format does not meet requirements"');
    props.push('leftIcon={<User className="w-4 h-4" />}');

    return `<TextField\n  ${props.join('\n  ')}\n/>`;
  };

  return (
    <div className="space-y-4">
      {/* 1. Full-Width Preview Canvas */}
      <PropControls.Canvas
        codeSnippet={generateCode()}
        componentId="textfield"
        onReset={() => {
          setValue('dzarr.al');
          setSize('md');
          setType('text');
          setClearable(true);
          setDisabled(false);
          setHasError(false);
          setPlaceholder('Enter text...');
        }}
      >
        <div className="w-full max-w-md space-y-3">
          <TextField
            label="Interactive Input Field"
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            size={size}
            clearable={clearable}
            onClear={() => setValue('')}
            disabled={disabled}
            leftIcon={getIcon()}
            error={hasError ? 'Input format does not meet requirements.' : undefined}
            helperText={
              type === 'password'
                ? 'Password visibility toggle eye icon activates automatically when type="password".'
                : 'Type a value to observe live state updates.'
            }
          />

          <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
            <span className="font-mono text-slate-500">State Value:</span>
            <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md truncate max-w-[200px]">
              {type === 'password' ? '••••••••' : value || '(empty)'}
            </span>
          </div>
        </div>
      </PropControls.Canvas>

      {/* 2. Responsive Controls Panel */}
      <PropControls title="TextField Configuration" columns={2}>
        <PropControls.Segmented
          label="Size (FieldSize)"
          items={sizes.map((s) => ({ value: s, label: s.toUpperCase() }))}
          value={size}
          onChange={(s) => setSize(s as FieldSize)}
          size="xs"
        />

        <PropControls.Segmented
          label="Input Type"
          items={types}
          value={type}
          onChange={(t) => setType(t as any)}
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
          description="Clear button icon for quick reset"
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
          description="Disable input field interactions"
        />
      </PropControls>

      {/* 3. Generated Code Viewer */}
      <PropControls.Code codeSnippet={generateCode()} />
    </div>
  );
}
