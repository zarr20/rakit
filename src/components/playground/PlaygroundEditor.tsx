import { SandpackCodeEditor } from '@codesandbox/sandpack-react';

interface PlaygroundEditorProps {
  height?: string | number;
  readOnly?: boolean;
}

export function PlaygroundEditor({
  height = '100%',
  readOnly = false,
}: PlaygroundEditorProps) {
  return (
    <div className="w-full h-full flex flex-col bg-slate-950 overflow-hidden font-mono text-xs">
      <SandpackCodeEditor
        showLineNumbers={true}
        showInlineErrors={true}
        showTabs={true}
        closableTabs={false}
        readOnly={readOnly}
        style={{
          height: typeof height === 'number' ? `${height}px` : height,
          minHeight: '260px',
        }}
      />
    </div>
  );
}
