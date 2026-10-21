import { SandpackPreview } from '@codesandbox/sandpack-react';
import type { PlaygroundViewport } from './playground.types';

interface PlaygroundPreviewProps {
  viewport?: PlaygroundViewport;
  height?: string | number;
}

export function PlaygroundPreview({
  viewport = 'desktop',
  height = '100%',
}: PlaygroundPreviewProps) {
  // Map viewport mode to container width constraint
  const getViewportMaxWidth = () => {
    switch (viewport) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const isConstrained = viewport !== 'desktop';

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-slate-900/60 p-2 sm:p-4 overflow-auto">
      <div
        className={`w-full h-full flex flex-col transition-all duration-300 ease-in-out ${
          isConstrained
            ? 'border-2 border-slate-700/80 rounded-2xl shadow-2xl bg-white overflow-hidden'
            : 'rounded-xl overflow-hidden bg-white shadow-sm'
        }`}
        style={{
          maxWidth: getViewportMaxWidth(),
          height: typeof height === 'number' ? `${height}px` : height,
        }}
      >
        {isConstrained && (
          <div className="bg-slate-900 px-3 py-1 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800">
            <span>Viewport: {viewport.toUpperCase()}</span>
            <span>{viewport === 'mobile' ? '375 × 667' : '768 × 1024'}</span>
          </div>
        )}

        <SandpackPreview
          showNavigator={true}
          showRefreshButton={true}
          showOpenInCodeSandbox={false}
          style={{
            height: '100%',
            width: '100%',
            flex: 1,
          }}
        />
      </div>
    </div>
  );
}
