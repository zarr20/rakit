import { useState, type ReactNode } from 'react';
import { Button, TextField, Switch, SegmentedControl, CodeViewer, toast } from '@zarr20/rakit-ui';
import { RotateCcw, Copy, Check, ExternalLink, SlidersHorizontal, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PropControlsProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

export function PropControls({
  title = 'Konfigurasi Props',
  description,
  children,
  className = '',
  columns = 3,
}: PropControlsProps) {
  const gridClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3';

  return (
    <div
      className={`rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs overflow-hidden ${className}`}
    >
      {/* Header Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/70 shadow-2xs">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-100 font-sans tracking-tight">
                {title}
              </h3>
              <span className="hidden sm:inline-flex text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                Live Tuning
              </span>
            </div>
            {description && (
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Controls */}
      <div className={`p-5 sm:p-6 bg-white dark:bg-slate-900 grid ${gridClass} gap-4 sm:gap-5 items-start`}>
        {children}
      </div>
    </div>
  );
}

// Subcomponent: Prop Item Wrapper
interface PropItemProps {
  label: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

PropControls.Item = function PropItem({ label, description, children, className = '' }: PropItemProps) {
  return (
    <div className={`space-y-1.5 min-w-0 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-sans truncate">{label}</label>
        {description && (
          <span className="text-[10px] text-slate-400 dark:text-slate-500 font-sans shrink-0">{description}</span>
        )}
      </div>
      {children}
    </div>
  );
};

// Subcomponent: Text input
interface PropTextProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

PropControls.Text = function PropText({ label, value, onChange, placeholder }: PropTextProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
      placeholder={placeholder}
      size="sm"
    />
  );
};

// Subcomponent: Segmented selector
interface PropSegmentedProps<T extends string = string> {
  label: string;
  items: Array<{ value: T; label: ReactNode; icon?: ReactNode }>;
  value: T;
  onChange: (value: T) => void;
  fullWidth?: boolean;
  size?: 'xs' | 'sm';
  description?: string;
  className?: string;
}

PropControls.Segmented = function PropSegmented<T extends string = string>({
  label,
  items,
  value,
  onChange,
  fullWidth = true,
  size = 'xs',
  description,
  className = '',
}: PropSegmentedProps<T>) {
  return (
    <PropControls.Item label={label} description={description} className={className}>
      <div className="w-full overflow-x-auto pb-0.5">
        <SegmentedControl
          items={items}
          value={value}
          onChange={onChange}
          size={size}
          fullWidth={fullWidth}
        />
      </div>
    </PropControls.Item>
  );
};

// Subcomponent: Boolean switch
interface PropToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  className?: string;
}

PropControls.Toggle = function PropToggle({
  label,
  checked,
  onChange,
  description,
  className = '',
}: PropToggleProps) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`flex items-center justify-between py-2 px-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 transition-colors cursor-pointer select-none shadow-2xs min-h-[44px] ${className}`}
    >
      <div className="pr-2 min-w-0">
        <span className="text-xs font-medium text-slate-700 dark:text-slate-200 font-sans block truncate">
          {label}
        </span>
        {description && (
          <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 line-clamp-1">
            {description}
          </div>
        )}
      </div>
      <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
        <Switch checked={checked} onChange={onChange} size="sm" />
      </div>
    </div>
  );
};

// Subcomponent: Live Canvas Preview
interface PropCanvasProps {
  title?: string;
  children: ReactNode;
  codeSnippet?: string;
  showCode?: boolean;
  onReset?: () => void;
  componentId?: string;
  className?: string;
}

PropControls.Canvas = function PropCanvas({
  title = 'Live Interactive Sandbox',
  children,
  codeSnippet,
  showCode = false,
  onReset,
  componentId,
  className = '',
}: PropCanvasProps) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!codeSnippet) return;
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      toast.success('Kode TSX berhasil disalin!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Gagal menyalin kode.');
    }
  };

  const handleOpenPlayground = () => {
    if (componentId) {
      navigate(`/playground?example=${componentId}`);
    } else {
      navigate('/playground');
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs overflow-hidden">
        {/* Canvas Toolbar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/70 shadow-2xs">
              <Play className="w-3 h-3 fill-emerald-600/30" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-semibold text-slate-800 dark:text-slate-100 font-sans tracking-tight">
                {title}
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                Preview
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {onReset && (
              <Button
                variant="ghost"
                size="xs"
                onClick={onReset}
                leftIcon={<RotateCcw className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />}
                title="Reset nilai ke awal"
              >
                Reset
              </Button>
            )}

            {codeSnippet && (
              <Button
                variant="secondary"
                size="xs"
                onClick={handleCopy}
                leftIcon={
                  copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  )
                }
              >
                {copied ? 'Tersalin' : 'Salin TSX'}
              </Button>
            )}

            <Button
              variant="primary"
              size="xs"
              onClick={handleOpenPlayground}
              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              title="Buka kode di full runtime Sandpack"
            >
              Playground
            </Button>
          </div>
        </div>

        {/* Center Canvas Stage */}
        <div className="p-8 sm:p-12 min-h-[200px] sm:min-h-[220px] flex items-center justify-center bg-slate-50/40 dark:bg-slate-950/40 [background-image:radial-gradient(#e2e8f0_1px,transparent_1px)] dark:[background-image:radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
          {children}
        </div>
      </div>

      {/* Optional In-Canvas Code Viewer */}
      {showCode && codeSnippet && (
        <PropControls.Code codeSnippet={codeSnippet} />
      )}
    </div>
  );
};

// Subcomponent: Code Snippet Viewer
PropControls.Code = function PropCode({
  codeSnippet,
  className = '',
}: {
  codeSnippet: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-2xs border border-slate-200/90 dark:border-slate-800 ${className}`}>
      <CodeViewer
        value={codeSnippet}
        language="tsx"
        theme="dark"
        showToolbar={true}
        showLineNumbers={false}
      />
    </div>
  );
};
