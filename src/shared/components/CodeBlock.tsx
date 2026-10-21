import { CodeViewer } from '@zarr20/rakit-ui';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  maxHeight?: string;
  height?: string;
  theme?: 'light' | 'dark';
}

export function CodeBlock({
  code,
  language = 'tsx',
  title,
  maxHeight = '450px',
  height = 'auto',
  theme = 'dark',
}: CodeBlockProps) {
  return (
    <div className="w-full">
      <CodeViewer
        value={code}
        language={language}
        title={title}
        theme={theme}
        height={height}
        maxHeight={maxHeight}
        className="rounded-xl border-slate-200/90 shadow-2xs"
      />
    </div>
  );
}
