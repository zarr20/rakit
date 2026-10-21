import { useState, useMemo } from 'react';
import { toRoutePath, sortRoutes, type RouteItem } from '@zarr20/rakit-routes/client';
import { Button, Badge, Card, TextField, Checkbox, Grid, CodeViewer } from '@zarr20/rakit-ui';
import { Plus, Trash2, ArrowUpDown } from 'lucide-react';

interface VirtualFile {
  id: string;
  filePath: string;
  enabled: boolean;
}

const DEFAULT_VIRTUAL_FILES: VirtualFile[] = [
  { id: '1', filePath: 'pages/[...slug].tsx', enabled: true },
  { id: '2', filePath: 'pages/users/[id].tsx', enabled: true },
  { id: '3', filePath: 'pages/index.tsx', enabled: true },
  { id: '4', filePath: 'pages/users/new.tsx', enabled: true },
  { id: '5', filePath: 'pages/404.tsx', enabled: true },
  { id: '6', filePath: 'pages/about.tsx', enabled: true },
  { id: '7', filePath: 'pages/users/[id]/settings.tsx', enabled: true },
  { id: '8', filePath: 'pages/(dashboard)/analytics.tsx', enabled: true },
];

export function RouteSorterSandbox() {
  const [files, setFiles] = useState<VirtualFile[]>(DEFAULT_VIRTUAL_FILES);
  const [newPath, setNewPath] = useState('');

  const handleAddFile = () => {
    if (!newPath.trim()) return;
    setFiles((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        filePath: newPath.trim().startsWith('pages/') ? newPath.trim() : `pages/${newPath.trim()}`,
        enabled: true,
      },
    ]);
    setNewPath('');
  };

  const handleRemoveFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleToggle = (id: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, enabled: !f.enabled } : f))
    );
  };

  // Convert to RouteItems and run real sortRoutes()
  const sortedResult = useMemo(() => {
    const rawItems: RouteItem[] = files
      .filter((f) => f.enabled)
      .map((f) => ({
        path: toRoutePath(f.filePath, 'pages'),
        file: f.filePath,
      }));

    return sortRoutes(rawItems);
  }, [files]);

  // Generate React Router output snippet
  const generatedReactRouterCode = useMemo(() => {
    const lazyImports = sortedResult
      .map((r) => {
        const compName = r.file.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '_');
        return `const ${compName} = React.lazy(() => import("./${r.file}"));`;
      })
      .join('\n');

    const routeElements = sortedResult
      .map((r) => {
        const compName = r.file.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9]/g, '_');
        return `      <Route path="${r.path}" element={<${compName} />} />`;
      })
      .join('\n');

    return `import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auto-generated Lazy Imports
${lazyImports}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-4">Loading page...</div>}>
        <Routes>
${routeElements}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`;
  }, [sortedResult]);

  return (
    <div className="space-y-6">
      {/* Intro info */}
      <Card variant="default" padding="large">
        <div className="space-y-3">
          <h3 className="text-base font-display font-semibold text-slate-900 flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-emerald-700" />
            <span>Pengurutan Rute Deterministik (Deterministic Priority Sorting)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Dalam routing file-system, urutan definisi sangat menentukan! Rute statis (misal: <code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">/users/new</code>) harus selalu didefinisikan <strong>sebelum</strong> parameter dinamis (<code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">/users/:id</code>) agar tidak tertimpa (shadowing), dan wildcard <code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">*</code> selalu di urutan paling akhir.
          </p>
        </div>
      </Card>

      <Grid cols={{ base: 1, lg: 12 }} gap="lg" align="start">
        {/* Left: Virtual Files Input */}
        <Grid.Col span={{ base: 12, lg: 5 }}>
          <Card variant="default" padding="large">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold">
                  Daftar File Virtual ({files.filter((f) => f.enabled).length} Aktif)
                </span>
                <Button
                  variant="subtle"
                  size="xs"
                  onClick={() => setFiles(DEFAULT_VIRTUAL_FILES)}
                >
                  Reset Default
                </Button>
              </div>

              {/* Add file input */}
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <TextField
                    value={newPath}
                    onChange={(e: any) => setNewPath(e.target.value)}
                    onKeyDown={(e: any) => e.key === 'Enter' && handleAddFile()}
                    placeholder="pages/blog/[id].tsx"
                  />
                </div>
                <Button variant="primary" size="md" onClick={handleAddFile} leftIcon={<Plus className="w-3.5 h-3.5" />}>
                  Tambah
                </Button>
              </div>

              {/* File item chips */}
              <div className="space-y-1.5 max-h-80 overflow-y-auto p-1 divide-y divide-slate-100">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between py-2 px-2.5 rounded-lg hover:bg-slate-50 transition-colors gap-2"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Checkbox
                        checked={file.enabled}
                        onChange={() => handleToggle(file.id)}
                      />
                      <span className={`text-xs font-mono truncate ${file.enabled ? 'text-slate-800' : 'text-slate-400 line-through'}`}>
                        {file.filePath}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="xs"
                      onClick={() => handleRemoveFile(file.id)}
                      title="Hapus file"
                      className="text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Grid.Col>

        {/* Right: Sorted Priority Output & Generated Code */}
        <Grid.Col span={{ base: 12, lg: 7 }} className="space-y-4">
          <Card variant="flat" padding="large">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold">
                  Urutan Eksekusi Rute (Hasil sortRoutes)
                </span>
                <Badge variant="success" size="xs">
                  Deterministic
                </Badge>
              </div>

              <div className="space-y-1.5">
                {sortedResult.map((route, index) => (
                  <div
                    key={route.path + index}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold">
                        {index + 1}
                      </span>
                      <span className="font-bold text-emerald-700">
                        {route.path}
                      </span>
                    </div>

                    <span className="text-[11px] text-slate-500 truncate max-w-[180px]">
                      {route.file}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <CodeViewer value={generatedReactRouterCode} language="tsx" title="Generated router.tsx" />
        </Grid.Col>
      </Grid>
    </div>
  );
}
