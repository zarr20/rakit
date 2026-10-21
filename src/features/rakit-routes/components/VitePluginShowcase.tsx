import { useState } from 'react';
import { Terminal, Zap, Check, Copy } from 'lucide-react';
import { Card, TextField, Checkbox, Button, Grid, CodeViewer } from '@zarr20/rakit-ui';
import { useCopyToClipboard } from '../../../shared/hooks/useCopyToClipboard';

export function VitePluginShowcase() {
  const [pagesDir, setPagesDir] = useState('src/pages');
  const [outputDir, setOutputDir] = useState('src/shared/router');
  const [isWatch, setIsWatch] = useState(true);
  const { copied, copy } = useCopyToClipboard();

  const generatedCliCmd = `npx @zarr20/rakit-routes --pages ${pagesDir} --out ${outputDir}${isWatch ? ' --watch' : ''}`;

  const generatedViteConfig = `// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { rakitRoutesPlugin } from '@zarr20/rakit-routes/vite';

export default defineConfig({
  plugins: [
    react(),
    rakitRoutesPlugin({
      pagesDir: '${pagesDir}',
      outputDir: '${outputDir}',
    }),
  ],
});`;

  const scriptPackageJson = `{
  "scripts": {
    "dev": "vite",
    "build": "npx @zarr20/rakit-routes && vite build"
  }
}`;

  return (
    <div className="space-y-6">
      {/* Intro info */}
      <Card variant="default" padding="large">
        <div className="space-y-3">
          <h3 className="text-base font-display font-semibold text-slate-900 flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-700" />
            <span>Integrasi Otomatis Vite Plugin & CLI Runner</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Dengan Vite Plugin <code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">rakitRoutesPlugin()</code>, setiap kali Anda membuat, mengubah nama, atau menghapus file di dalam folder halaman, router akan digenerate ulang secara instan dalam hitungan milidetik tanpa me-restart server Vite!
          </p>
        </div>
      </Card>

      <Grid cols={{ base: 1, lg: 12 }} gap="lg" align="start">
        {/* Left: Options & CLI Builder */}
        <Grid.Col span={{ base: 12, lg: 5 }}>
          <Card variant="default" padding="large">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-slate-500 font-semibold">
                Konfigurasi Direktori
              </span>

              <TextField
                label="Pages Directory"
                value={pagesDir}
                onChange={(e: any) => setPagesDir(e.target.value)}
                placeholder="src/pages"
              />

              <TextField
                label="Output Directory"
                value={outputDir}
                onChange={(e: any) => setOutputDir(e.target.value)}
                placeholder="src/shared/router"
              />

              <div className="pt-2 border-t border-slate-200">
                <Checkbox
                  label="--watch mode (regenerasi saat file berubah)"
                  checked={isWatch}
                  onChange={setIsWatch}
                />
              </div>

              {/* Quick CLI command box */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono text-slate-500 font-medium">Perintah CLI:</span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs">
                  <div className="flex items-center gap-2 truncate mr-2">
                    <Terminal className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-slate-800 truncate">{generatedCliCmd}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => copy(generatedCliCmd)}
                    title="Salin perintah CLI"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Grid.Col>

        {/* Right: Vite Config Snippets */}
        <Grid.Col span={{ base: 12, lg: 7 }} className="space-y-4">
          <CodeViewer value={generatedViteConfig} language="typescript" title="vite.config.ts" />
          <CodeViewer value={scriptPackageJson} language="json" title="package.json scripts" />
        </Grid.Col>
      </Grid>
    </div>
  );
}
