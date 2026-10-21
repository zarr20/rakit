import { useState } from 'react';
import { toRoutePath } from '@zarr20/rakit-routes/client';
import { Sparkles, FileCode, Check, Copy } from 'lucide-react';
import { useCopyToClipboard } from '../../../shared/hooks/useCopyToClipboard';
import { Card, TextField, Button, Badge, Tabs, Grid, CodeViewer } from '@zarr20/rakit-ui';

export function PathResolverSandbox() {
  const [filePath, setFilePath] = useState('src/pages/users/[id]/settings.tsx');
  const [baseDir, setBaseDir] = useState('src/pages');
  const { copied, copy } = useCopyToClipboard();

  const presetExamples = [
    { label: 'Root Index', path: 'src/pages/index.tsx' },
    { label: 'Static About', path: 'src/pages/about.tsx' },
    { label: 'Dynamic Param', path: 'src/pages/products/[id].tsx' },
    { label: 'Nested Params', path: 'src/pages/users/[userId]/posts/[postId].tsx' },
    { label: 'Route Group', path: 'src/pages/(auth)/login.tsx' },
    { label: 'Nested Group', path: 'src/pages/(dashboard)/analytics.tsx' },
    { label: 'Catch-All Wildcard', path: 'src/pages/[...slug].tsx' },
    { label: '404 Fallback', path: 'src/pages/404.tsx' },
  ];

  const resolvedUrl = toRoutePath(filePath, baseDir);

  const getRouteCategory = (path: string, url: string) => {
    if (url === '*') return { label: '404 Fallback Wildcard', variant: 'danger' as const };
    if (url === '/*') return { label: 'Catch-All Wildcard', variant: 'warning' as const };
    if (path.includes('(') && path.includes(')')) return { label: 'Route Group (Parentheses Stripped)', variant: 'purple' as const };
    if (url.includes(':')) return { label: 'Dynamic Parameterized Route', variant: 'info' as const };
    if (url === '/') return { label: 'Root Homepage Route', variant: 'success' as const };
    return { label: 'Static Clean Route', variant: 'success' as const };
  };

  const categoryInfo = getRouteCategory(filePath, resolvedUrl);

  const codeSnippet = `import { toRoutePath } from '@zarr20/rakit-routes/client';

const filePath = "${filePath}";
const baseDir = "${baseDir}";

const routeUrl = toRoutePath(filePath, baseDir);
// Output Hasil: "${resolvedUrl}"`;

  return (
    <div className="space-y-6">
      {/* Intro info */}
      <Card variant="default" padding="large">
        <div className="space-y-3">
          <h3 className="text-base font-display font-semibold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>Aturan Konversi Path File ke Route URL</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Ketik atau pilih contoh path file di bawah ini untuk melihat bagaimana algoritma <code className="text-emerald-800 font-mono font-medium">toRoutePath()</code> mengonversi format folder file-system menjadi rute URL standar React Router secara instan.
          </p>

          {/* Preset chips using rakit Tabs */}
          <div className="pt-1">
            <Tabs
              items={presetExamples.map((item) => ({
                id: item.path,
                label: item.label,
              }))}
              value={filePath}
              onChange={(path) => setFilePath(path)}
              variant="pills"
              size="sm"
            />
          </div>
        </div>
      </Card>

      {/* Interactive Inputs */}
      <Grid cols={{ base: 1, lg: 12 }} gap="lg" align="start">
        {/* Controls */}
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Card variant="default" padding="large">
            <div className="space-y-4">
              <TextField
                label="File Path Input"
                value={filePath}
                onChange={(e: any) => setFilePath(e.target.value)}
                placeholder="misal: src/pages/users/[id].tsx"
                leftIcon={<FileCode className="w-4 h-4 text-slate-400" />}
              />

              <TextField
                label="Base Pages Directory"
                value={baseDir}
                onChange={(e: any) => setBaseDir(e.target.value)}
                placeholder="src/pages"
              />

              {/* Real-time Result Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-slate-500 font-semibold">Hasil URL Rute</span>
                  <Badge variant={categoryInfo.variant} size="xs">
                    {categoryInfo.label}
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xl font-mono font-bold text-emerald-700">
                    {resolvedUrl}
                  </span>

                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => copy(resolvedUrl)}
                    title="Salin URL"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Grid.Col>

        {/* Code Snippet */}
        <Grid.Col span={{ base: 12, lg: 6 }} className="space-y-3">
          <span className="text-xs font-mono text-slate-500 font-medium">Eksekusi Fungsi:</span>
          <CodeViewer value={codeSnippet} language="typescript" title="toRoutePath.ts" />
        </Grid.Col>
      </Grid>
    </div>
  );
}
