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
            <span>Automated Vite Plugin & CLI Runner Integration</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            With the <code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">rakitRoutesPlugin()</code> Vite Plugin, every time you create, rename, or delete a file in the pages directory, the router regenerates instantly in milliseconds without restarting the Vite server!
          </p>
        </div>
      </Card>

      <Grid cols={{ base: 1, lg: 12 }} gap="lg" align="start">
        {/* Left: Options & CLI Builder */}
        <Grid.Col span={{ base: 12, lg: 5 }}>
          <Card variant="default" padding="large">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-slate-500 font-semibold">
                Directory Configuration
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
                  label="--watch mode (regenerate on file changes)"
                  checked={isWatch}
                  onChange={setIsWatch}
                />
              </div>

              {/* Quick CLI command box */}
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono text-slate-500 font-medium">CLI Command:</span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs">
                  <div className="flex items-center gap-2 truncate mr-2">
                    <Terminal className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-slate-800 truncate">{generatedCliCmd}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => copy(generatedCliCmd)}
                    title="Copy CLI command"
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
