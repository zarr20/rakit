import { useState } from 'react';
import {
  EmptyState,
  Button,
  type EmptyStatePreset,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { EMPTY_STATE_PROPS } from './data/emptyStateProps';
import { FolderX, Plus, Search, Inbox, Database, Play, Layers, BookOpen, RefreshCw } from 'lucide-react';

export function EmptyStateFeature() {
  const [selectedPreset, setSelectedPreset] = useState<EmptyStatePreset | 'custom'>('custom');
  const [title, setTitle] = useState('Belum Ada Proyek');
  const [description, setDescription] = useState('Mulai dengan membuat proyek baru atau import repositori Git Anda.');
  const [compact, setCompact] = useState(false);
  const [iconType, setIconType] = useState<'folder' | 'search' | 'inbox' | 'database'>('folder');

  const getIcon = () => {
    switch (iconType) {
      case 'search':
        return <Search className="w-5 h-5 text-slate-500" />;
      case 'inbox':
        return <Inbox className="w-5 h-5 text-slate-500" />;
      case 'database':
        return <Database className="w-5 h-5 text-slate-500" />;
      case 'folder':
      default:
        return <FolderX className="w-5 h-5 text-slate-500" />;
    }
  };

  const isPresetMode = selectedPreset !== 'custom';

  const generateCode = () => {
    if (isPresetMode) {
      return `<EmptyState
  preset="${selectedPreset}"
  compact={${compact}}
  action={
    <Button variant="primary" size="xs">
      Muat Ulang
    </Button>
  }
/>`;
    }

    return `<EmptyState
  icon={<FolderX className="w-5 h-5" />}
  title="${title}"
  description="${description}"
  compact={${compact}}
  theme="light"
  action={
    <Button variant="primary" size="xs" leftIcon={<Plus className="w-3.5 h-3.5" />}>
      Buat Item Baru
    </Button>
  }
/>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Empty State"
        tagline="Tampilan visual ramah pengguna saat data belum tersedia, hasil pencarian kosong, atau status error dengan preset ilustrasi vektor ringan."
        badge="Data Display"
        importStatement="import { EmptyState } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive EmptyState Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setSelectedPreset('custom');
              setTitle('Belum Ada Proyek');
              setDescription('Mulai dengan membuat proyek baru atau import repositori Git Anda.');
              setCompact(false);
              setIconType('folder');
            }}
            componentId="emptystate-basic"
          >
            <div className="w-full max-w-md py-4">
              <EmptyState
                preset={isPresetMode ? selectedPreset : undefined}
                icon={isPresetMode ? undefined : getIcon()}
                title={isPresetMode ? undefined : title}
                description={isPresetMode ? undefined : description}
                compact={compact}
                theme="light"
                action={
                  <Button variant="primary" size="xs" leftIcon={<Plus className="w-3.5 h-3.5" />}>
                    {isPresetMode ? 'Muat Ulang' : 'Buat Item Baru'}
                  </Button>
                }
              />
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Props EmptyState" columns={3}>
            <PropControls.Segmented
              label="Preset Ilustrasi Bawaan"
              items={[
                { value: 'custom', label: 'Custom' },
                { value: '404', label: '404' },
                { value: 'error', label: 'Error' },
                { value: 'no-connection', label: 'Offline' },
                { value: 'search', label: 'Search' },
                { value: 'empty', label: 'Empty' },
              ]}
              value={selectedPreset}
              onChange={(v) => setSelectedPreset(v as any)}
              size="xs"
            />

            {!isPresetMode && (
              <>
                <PropControls.Text
                  label="Judul (Title)"
                  value={title}
                  onChange={setTitle}
                  placeholder="Judul empty state..."
                />

                <PropControls.Text
                  label="Deskripsi"
                  value={description}
                  onChange={setDescription}
                  placeholder="Penjelasan ringkas..."
                />

                <PropControls.Segmented
                  label="Pilihan Ikon Custom"
                  items={[
                    { value: 'folder', label: 'Folder' },
                    { value: 'search', label: 'Search' },
                    { value: 'inbox', label: 'Inbox' },
                    { value: 'database', label: 'DB' },
                  ]}
                  value={iconType}
                  onChange={(v) => setIconType(v as any)}
                  size="xs"
                />
              </>
            )}

            <PropControls.Item label="Opsi Tampilan">
              <div className="pt-1">
                <PropControls.Toggle
                  label="compact mode (ukuran padat)"
                  checked={compact}
                  onChange={setCompact}
                />
              </div>
            </PropControls.Item>
          </PropControls>

          {/* 3. Code Generator */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Preset Ilustrasi & Skenario Penggunaan
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            id="preset-404"
            data-toc-id="preset-404"
            data-toc-title="Preset 404"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">404 Not Found</h3>
              <p className="text-xs text-slate-500">Preset saat halaman tidak ditemukan.</p>
            </div>
            <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex items-center justify-center">
              <EmptyState preset="404" compact />
            </div>
          </div>

          <div
            id="preset-error"
            data-toc-id="preset-error"
            data-toc-title="Preset Error"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">System Error</h3>
              <p className="text-xs text-slate-500">Preset kegagalan memproses request.</p>
            </div>
            <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex items-center justify-center">
              <EmptyState
                preset="error"
                compact
                action={<Button variant="outline" size="xs" leftIcon={<RefreshCw className="w-3 h-3" />}>Coba Lagi</Button>}
              />
            </div>
          </div>

          <div
            id="preset-offline"
            data-toc-id="preset-offline"
            data-toc-title="Preset No Connection"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-800">No Connection</h3>
              <p className="text-xs text-slate-500">Preset koneksi jaringan terputus.</p>
            </div>
            <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex items-center justify-center">
              <EmptyState preset="no-connection" compact />
            </div>
          </div>
        </div>
      </section>


      {/* Section 3: API Reference */}
      <section id="props" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Props Reference
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-4">
          <PropsTable props={EMPTY_STATE_PROPS} />
        </div>
      </section>
    </div>
  );
}
