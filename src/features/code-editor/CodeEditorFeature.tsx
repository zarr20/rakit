import { useState } from 'react';
import {
  CodeEditor,
  CodeViewer,
  FileViewer,
  LivePlayground,
  JsonTreeViewer,
  type CodeEditorTheme,
  type CodeEditorViewMode,
  type CodeEditorLanguage,
  type CodeViewerFile,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import { CODE_EDITOR_PROPS } from './data/codeEditorProps';
import { Play, Layers, BookOpen, Files, Sparkles } from 'lucide-react';

const CODE_SAMPLES: Record<string, { language: CodeEditorLanguage; filename: string; code: string }> = {
  tsx: {
    language: 'tsx',
    filename: 'CounterWidget.tsx',
    code: `import React, { useState } from 'react';
import { Button, Card, Badge } from '@zarr20/rakit-ui';

export function CounterWidget() {
  const [count, setCount] = useState(0);

  return (
    <Card variant="bordered" padding="large">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Rakit UI Counter</h2>
        <Badge variant="primary">v1.0.0</Badge>
      </div>
      <p className="text-slate-600 mt-2">Nilai saat ini: {count}</p>
      <div className="flex gap-2 mt-4">
        <Button size="sm" onClick={() => setCount(count + 1)}>
          Tambah Nilai
        </Button>
        <Button size="sm" variant="outline" onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </Card>
  );
}`,
  },
  ts: {
    language: 'ts',
    filename: 'user.types.ts',
    code: `export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  metadata?: {
    lastLoginAt: number;
    preferredTheme: 'light' | 'dark';
    verified: boolean;
  };
}

export type AuthResponse = {
  token: string;
  expiresIn: number;
  user: UserProfile;
};`,
  },
  html: {
    language: 'html',
    filename: 'index.html',
    code: `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rakit Design System</title>
    <link rel="stylesheet" href="/src/styles/theme.css" />
  </head>
  <body class="bg-slate-50 text-slate-900 font-sans antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
  },
  js: {
    language: 'js',
    filename: 'tracker.js',
    code: `export function trackEvent(eventName, payload = {}) {
  const timestamp = new Date().toISOString();
  console.log(\`[Analytics] \${timestamp} - \${eventName}:\`, payload);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'user_interaction',
      ...payload,
    });
  }
}`,
  },
  json: {
    language: 'json',
    filename: 'package.json',
    code: `{
  "name": "@zarr20/rakit-ui",
  "version": "1.0.0",
  "description": "Enterprise-grade React Component Library powered by Tailwind CSS v4",
  "keywords": ["react", "ui", "enterprise", "components", "tailwind-v4"],
  "author": "dzarr",
  "license": "MIT",
  "dependencies": {
    "clsx": "^2.1.1",
    "lucide-react": "^1.16.0",
    "prismjs": "^1.30.0",
    "tailwind-merge": "^3.5.0"
  }
}`,
  },
};

const MULTI_FILES_SAMPLE: CodeViewerFile[] = [
  {
    name: 'App.tsx',
    language: 'tsx',
    content: CODE_SAMPLES.tsx.code,
  },
  {
    name: 'types.ts',
    language: 'ts',
    content: CODE_SAMPLES.ts.code,
  },
  {
    name: 'index.html',
    language: 'html',
    content: CODE_SAMPLES.html.code,
  },
  {
    name: 'analytics.js',
    language: 'js',
    content: CODE_SAMPLES.js.code,
  },
  {
    name: 'package.json',
    language: 'json',
    content: CODE_SAMPLES.json.code,
  },
];

export function CodeEditorFeature() {
  const [selectedLangKey, setSelectedLangKey] = useState<string>('tsx');
  const [viewMode, setViewMode] = useState<CodeEditorViewMode>('code');
  const [editorTheme, setEditorTheme] = useState<CodeEditorTheme>('light');
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [codeValue, setCodeValue] = useState<string>(CODE_SAMPLES.tsx.code);

  const activeSample = CODE_SAMPLES[selectedLangKey] || CODE_SAMPLES.tsx;

  const handleLanguageChange = (key: string) => {
    setSelectedLangKey(key);
    setCodeValue(CODE_SAMPLES[key].code);
    if (key !== 'json' && viewMode === 'tree') {
      setViewMode('code');
    }
  };

  const viewModes: CodeEditorViewMode[] =
    selectedLangKey === 'json' ? ['code', 'tree', 'split'] : ['code'];

  const generateCode = () => {
    return `<CodeEditor
  value={code}
  onChange={setCode}
  language="${activeSample.language}"
  title="${activeSample.filename}"
  theme="${editorTheme}"
  readOnly={${isReadOnly}}
  showLineNumbers={${showLineNumbers}}
  showToolbar
  showCopyButton
  height="380px"
/>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Code Editor & Multi-File Viewer"
        tagline="Editor kode mandiri dan File Viewer interaktif mendukung syntax highlighting untuk TSX, TypeScript, HTML, JavaScript, dan JSON dengan mode tabs berkas."
        badge="Tools"
        importStatement="import { CodeEditor, CodeViewer, FileViewer, JsonTreeViewer } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Editor Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <CodeEditor
              value={codeValue}
              onChange={setCodeValue}
              language={activeSample.language}
              title={activeSample.filename}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              theme={editorTheme}
              readOnly={isReadOnly}
              showLineNumbers={showLineNumbers}
              showToolbar
              showViewToggle={selectedLangKey === 'json'}
              showFormatButton={selectedLangKey === 'json'}
              showCopyButton
              height="380px"
            />
          </div>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Props CodeEditor" columns={3}>
            <PropControls.Segmented
              label="Bahasa (Syntax)"
              items={[
                { value: 'tsx', label: 'TSX' },
                { value: 'ts', label: 'TS' },
                { value: 'html', label: 'HTML' },
                { value: 'js', label: 'JS' },
                { value: 'json', label: 'JSON' },
              ]}
              value={selectedLangKey}
              onChange={handleLanguageChange}
              size="xs"
            />

            <PropControls.Segmented
              label="Editor Theme"
              items={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
              ]}
              value={editorTheme}
              onChange={(th) => setEditorTheme(th as CodeEditorTheme)}
              size="xs"
            />

            <PropControls.Item label="Opsi Editor">
              <div className="flex items-center gap-4 pt-1">
                <PropControls.Toggle
                  label="showLineNumbers"
                  checked={showLineNumbers}
                  onChange={setShowLineNumbers}
                />
                <PropControls.Toggle
                  label="readOnly"
                  checked={isReadOnly}
                  onChange={setIsReadOnly}
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
              Varian & Skenario Penggunaan
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          {/* Section 1: Live Playground TSX Code Editor */}
          <div
            id="live-playground"
            data-toc-id="live-playground"
            data-toc-title="Live Playground (Live Preview TSX)"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <h3 className="text-base font-display font-semibold text-slate-900">
                  1. Live Playground TSX Code Editor & Live Preview
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Komponen <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded font-mono text-[11px]">&lt;LivePlayground /&gt;</code> mengeksekusi kode TSX secara live di browser dengan dukungan Split/Code/Preview views, device viewports (Desktop, Tablet, Mobile), dan toggle tema terang/gelap.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
              <LivePlayground
                title="LiveCounterDemo.tsx"
                height="440px"
                defaultViewMode="split"
              />
            </div>
          </div>

          {/* Section 2: Multi-File Code & File Viewer */}
          <div
            id="multi-file-viewer"
            data-toc-id="multi-file-viewer"
            data-toc-title="Multi-File Viewer (Tabs)"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <Files className="w-4 h-4 text-emerald-600" />
                <h3 className="text-base font-display font-semibold text-slate-900">
                  2. Multi-File Viewer dengan Tabs & Syntax Highlighting
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Gunakan komponen <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded font-mono text-[11px]">&lt;FileViewer files={'{...}'} /&gt;</code> untuk menampilkan beberapa berkas sekaligus. Bahasa syntax highlighting (TSX, TS, HTML, JS, JSON) dan ikon berkas otomatis terdeteksi berdasarkan ekstensi file.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
              <FileViewer
                files={MULTI_FILES_SAMPLE}
                theme="light"
                height="340px"
                tabsVariant="pills"
              />
            </div>
          </div>

          {/* Section 3: Read-only Single File CodeViewer */}
          <div
            id="code-viewer"
            data-toc-id="code-viewer"
            data-toc-title="CodeViewer Read-only"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                3. Komponen &lt;CodeViewer /&gt; Single File
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Komponen ringan untuk menampilkan cuplikan kode read-only dengan tombol salin (copy) otomatis dan penomoran baris.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs">
              <CodeViewer
                value={`import { Button, Card, TextField } from '@zarr20/rakit-ui';

export function DashboardWidget() {
  return (
    <Card variant="default" padding="large">
      <TextField size="md" placeholder="Cari data..." />
      <Button variant="primary" size="md">Submit</Button>
    </Card>
  );
}`}
                language="tsx"
                title="DashboardWidget.tsx"
                height="220px"
              />
            </div>
          </div>

          {/* Section 4: Interactive JsonTreeViewer */}
          <div
            id="json-tree-viewer"
            data-toc-id="json-tree-viewer"
            data-toc-title="JsonTreeViewer"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                4. Komponen &lt;JsonTreeViewer /&gt; Visual Hierarchy
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Navigasi pohon objek dan array JSON secara visual dengan fitur expand/collapse per level node.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-2xs p-4">
              <JsonTreeViewer
                data={{
                  service: 'rakit-auth-service',
                  cluster: 'apac-east-1',
                  activeNodes: 4,
                  endpoints: [
                    { path: '/v1/login', method: 'POST', authRequired: false },
                    { path: '/v1/user/profile', method: 'GET', authRequired: true },
                    { path: '/v1/token/refresh', method: 'POST', authRequired: true },
                  ],
                  metrics: {
                    uptimePercent: 99.98,
                    avgLatencyMs: 24.5,
                    healthy: true,
                  },
                }}
                theme="light"
                defaultExpandLevel={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Props Reference */}
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
          <PropsTable props={CODE_EDITOR_PROPS} />
        </div>
      </section>
    </div>
  );
}
