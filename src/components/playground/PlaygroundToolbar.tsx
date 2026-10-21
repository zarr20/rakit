import { useState } from 'react';
import { useSandpack } from '@codesandbox/sandpack-react';
import {
  RotateCcw,
  Copy,
  Check,
  Share2,
  Monitor,
  Tablet,
  Smartphone,
  Columns2,
  Code2,
  Eye,
} from 'lucide-react';
import { Button, Badge, SegmentedControl, toast } from '@zarr20/rakit-ui';
import type { PlaygroundViewport, PlaygroundViewMode, PlaygroundExample } from './playground.types';
import { encodePlaygroundCode } from './urlUtils';

const VIEW_MODE_ITEMS = [
  { value: 'split', icon: <Columns2 className="w-3.5 h-3.5" />, title: 'Tampilan Terpisah (Split)' },
  { value: 'editor', icon: <Code2 className="w-3.5 h-3.5" />, title: 'Hanya Editor Kode' },
  { value: 'preview', icon: <Eye className="w-3.5 h-3.5" />, title: 'Hanya Live Preview' },
];

const VIEWPORT_ITEMS = [
  { value: 'desktop', icon: <Monitor className="w-3.5 h-3.5" />, title: 'Desktop View (100%)' },
  { value: 'tablet', icon: <Tablet className="w-3.5 h-3.5" />, title: 'Tablet View (768px)' },
  { value: 'mobile', icon: <Smartphone className="w-3.5 h-3.5" />, title: 'Mobile View (375px)' },
];

interface PlaygroundToolbarProps {
  example?: PlaygroundExample;
  viewMode: PlaygroundViewMode;
  onChangeViewMode: (mode: PlaygroundViewMode) => void;
  viewport: PlaygroundViewport;
  onChangeViewport: (viewport: PlaygroundViewport) => void;
  initialCode: string;
}

export function PlaygroundToolbar({
  example,
  viewMode,
  onChangeViewMode,
  viewport,
  onChangeViewport,
  initialCode,
}: PlaygroundToolbarProps) {
  const { sandpack } = useSandpack();
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // Get active code from Sandpack virtual filesystem
  const getActiveCode = () => {
    const file = sandpack.files[sandpack.activeFile];
    return file ? file.code : initialCode;
  };

  // Reset: Reverts code back to initial code
  const handleReset = () => {
    sandpack.updateFile(sandpack.activeFile, initialCode);
    toast.info('Kode dikembalikan ke contoh awal.', {
      description: 'Seluruh modifikasi telah di-reset.',
    });
  };

  // Copy: Copies active source code to clipboard
  const handleCopy = async () => {
    try {
      const code = getActiveCode();
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Kode berhasil disalin!', {
        description: 'Tersimpan di clipboard Anda.',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Gagal menyalin kode ke clipboard.');
    }
  };

  // Share: Encodes current code into URL and copies share link
  const handleShare = async () => {
    try {
      const code = getActiveCode();
      const encoded = encodePlaygroundCode(code);
      const url = new URL(window.location.href);
      url.searchParams.set('code', encoded);
      if (example?.id) {
        url.searchParams.set('example', example.id);
      }

      await navigator.clipboard.writeText(url.toString());
      window.history.replaceState(null, '', url.toString());

      setShared(true);
      toast.success('Tautan playground berhasil dibuat!', {
        description: 'URL tersimpan di clipboard dan siap dibagikan.',
      });
      setTimeout(() => setShared(false), 2500);
    } catch {
      toast.error('Gagal membuat tautan share.');
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-slate-200">
      {/* Left: Example info & Active file */}
      <div className="flex items-center gap-2.5">
        <span className="font-mono text-xs font-semibold text-lime-400 bg-lime-950/70 border border-lime-800/80 px-2 py-0.5 rounded-md">
          {sandpack.activeFile || '/App.tsx'}
        </span>
        {example && (
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-slate-300 font-medium truncate max-w-[200px]">
              {example.title}
            </span>
            <Badge variant="subtle" size="xs">
              {example.category}
            </Badge>
          </div>
        )}
      </div>

      {/* Middle: View Mode & Viewport Switches */}
      <div className="flex items-center gap-2">
        {/* View Mode Toggle: Split / Code / Preview */}
        <SegmentedControl
          items={VIEW_MODE_ITEMS}
          value={viewMode}
          onChange={(mode) => onChangeViewMode(mode as PlaygroundViewMode)}
          size="xs"
          theme="dark"
        />

        {/* Viewport switch: only relevant when preview is visible */}
        {viewMode !== 'editor' && (
          <div className="hidden md:block">
            <SegmentedControl
              items={VIEWPORT_ITEMS}
              value={viewport}
              onChange={(vp) => onChangeViewport(vp as PlaygroundViewport)}
              size="xs"
              theme="dark"
            />
          </div>
        )}
      </div>

      {/* Right: Actions (Reset, Copy, Share) */}
      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="xs"
          onClick={handleReset}
          title="Reset ke contoh kode awal"
          leftIcon={<RotateCcw className="w-3 h-3 text-slate-400" />}
          className="text-slate-300 hover:text-slate-100 hover:bg-slate-800"
        >
          Reset
        </Button>

        <Button
          variant="secondary"
          size="xs"
          onClick={handleCopy}
          title="Salin kode aktif ke clipboard"
          leftIcon={
            copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3 text-slate-400" />
            )
          }
          className="text-slate-200 bg-slate-800 border-slate-700 hover:bg-slate-700"
        >
          {copied ? 'Tersalin' : 'Copy'}
        </Button>

        <Button
          variant="primary"
          size="xs"
          onClick={handleShare}
          title="Bagikan URL dengan kode terkini"
          leftIcon={
            shared ? (
              <Check className="w-3 h-3 text-slate-900" />
            ) : (
              <Share2 className="w-3 h-3 text-slate-900" />
            )
          }
        >
          {shared ? 'Tersimpan' : 'Share'}
        </Button>
      </div>
    </div>
  );
}
