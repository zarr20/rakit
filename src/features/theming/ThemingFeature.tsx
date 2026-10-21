import { useState } from 'react';
import {
  Button,
  Badge,
  TextField,
  CodeViewer,
  Table,
  type TableColumn,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { Sparkles, Play, Layers, BookOpen } from 'lucide-react';

export function ThemingFeature() {
  // Theming Playground State
  const [prefix, setPrefix] = useState('rakit');
  const [radius, setRadius] = useState<'md' | 'lg' | 'xl' | 'full'>('lg');
  const [colorAccent, setColorAccent] = useState<'emerald' | 'blue' | 'purple' | 'amber'>('emerald');
  const [enableIdentifiers, setEnableIdentifiers] = useState(true);

  const radiusStyles = {
    md: 'rounded-md',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    full: 'rounded-full',
  }[radius];

  const accentStyles = {
    emerald: 'bg-emerald-600 text-white hover:bg-emerald-700',
    blue: 'bg-blue-600 text-white hover:bg-blue-700',
    purple: 'bg-purple-600 text-white hover:bg-purple-700',
    amber: 'bg-amber-600 text-white hover:bg-amber-700',
  }[colorAccent];

  const generatedConfigCode = `import { defineRakitConfig } from '@zarr20/rakit-ui';

export const customConfig = defineRakitConfig({
  prefix: '${prefix}',
  enableIdentifiers: ${enableIdentifiers},
  components: {
    button: {
      className: '${radiusStyles} transition-all',
    },
    card: {
      className: '${radiusStyles} shadow-sm',
    },
  },
});`;

  const setupSnippet = `// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RakitProvider, defineRakitConfig } from '@zarr20/rakit-ui';
import App from './App';
import './index.css';

const myTheme = defineRakitConfig({
  prefix: 'app',
  enableIdentifiers: true,
  components: {
    button: { className: 'font-medium tracking-tight' },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RakitProvider config={myTheme}>
      <App />
    </RakitProvider>
  </React.StrictMode>
);`;

  const tailwindSnippet = `/* src/index.css */
@import "tailwindcss";
@import "@zarr20/rakit-ui/styles.css";

/* Rakit Dark Mode Variant (Optional) */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

/* Override Design Tokens (Optional) */
:root {
  --rakit-font-sans: 'Inter', -apple-system, sans-serif;
  --rakit-radius: 0.75rem;
}`;

  const identifiersData = [
    { component: 'Button', classIdentifier: '.rakit-btn', dataAttr: 'data-rakit="button"', description: 'Interactive button element with 10 visual variants' },
    { component: 'Card', classIdentifier: '.rakit-card', dataAttr: 'data-rakit="card"', description: 'Modular compound container with border & padding' },
    { component: 'Badge', classIdentifier: '.rakit-badge', dataAttr: 'data-rakit="badge"', description: 'Status pill tag with 5 size tiers' },
    { component: 'SegmentedControl', classIdentifier: '.rakit-segmented-control', dataAttr: 'data-rakit="segmented-control"', description: 'Connected pill switches for mode & tab selection' },
    { component: 'TextField', classIdentifier: '.rakit-input, .rakit-field-wrapper', dataAttr: 'data-rakit="text-field"', description: 'Form input control with icon slots & error messaging' },
    { component: 'Grid', classIdentifier: '.rakit-grid, .rakit-grid-col', dataAttr: 'data-rakit="grid"', description: 'Responsive 12-column layout grid system' },
    { component: 'Table', classIdentifier: '.rakit-table', dataAttr: 'data-rakit="table"', description: 'Responsive tabular data table' },
    { component: 'Modal', classIdentifier: '.rakit-modal', dataAttr: 'data-rakit="modal"', description: 'Modal overlay dialog with backdrop' },
    { component: 'Drawer', classIdentifier: '.rakit-drawer', dataAttr: 'data-rakit="drawer"', description: 'Slide-over panel with 4 placement directions' },
  ];

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Theming & RakitProvider"
        tagline="Enterprise theming architecture, RakitProvider Context, defineRakitConfig, semantic identifiers, and Tailwind CSS v4 tokens."
        badge="Architecture"
        importStatement="import { RakitProvider, defineRakitConfig } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Live Interactive Theme Customizer */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Theming Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generatedConfigCode}
            onReset={() => {
              setPrefix('rakit');
              setRadius('lg');
              setColorAccent('emerald');
              setEnableIdentifiers(true);
            }}
            componentId="theming-basic"
          >
            <div className="w-full max-w-md py-4 space-y-4">
              <div
                className={`p-5 bg-white border border-slate-200/90 shadow-xs ${radiusStyles} space-y-4 text-left`}
                data-rakit="card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 ${radiusStyles} ${accentStyles} flex items-center justify-center`}>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-semibold text-sm text-slate-900">Custom Theme Preview</h4>
                  </div>
                  <Badge variant="primary" size="xs">
                    Prefix: .{prefix}
                  </Badge>
                </div>

                <TextField
                  label="Input Preview"
                  placeholder="Type something..."
                  defaultValue="Rakit Enterprise UI"
                  size="sm"
                />

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    className={`px-3 py-1.5 text-xs font-semibold ${radiusStyles} ${accentStyles} transition-all shadow-2xs cursor-pointer`}
                  >
                    Primary Action
                  </button>
                  <Button variant="secondary" size="sm">
                    Secondary
                  </Button>
                  <Badge variant="success" size="sm">
                    {enableIdentifiers ? 'Identifiers ON' : 'Pure CSS'}
                  </Badge>
                </div>
              </div>
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="RakitProvider Props Configuration" columns={2}>
            <PropControls.Text
              label="Class Prefix"
              value={prefix}
              onChange={setPrefix}
              placeholder="rakit"
            />

            <PropControls.Segmented
              label="Border Radius"
              items={[
                { value: 'md', label: 'Medium' },
                { value: 'lg', label: 'Large' },
                { value: 'xl', label: 'X-Large' },
                { value: 'full', label: 'Pill / Full' },
              ]}
              value={radius}
              onChange={(r) => setRadius(r as any)}
              size="xs"
            />

            <PropControls.Segmented
              label="Core Accent Color"
              items={[
                { value: 'emerald', label: 'Emerald' },
                { value: 'blue', label: 'Blue' },
                { value: 'purple', label: 'Purple' },
                { value: 'amber', label: 'Amber' },
              ]}
              value={colorAccent}
              onChange={(c) => setColorAccent(c as any)}
              size="xs"
            />

            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <PropControls.Item label="Semantic Identifiers">
                <div className="pt-1">
                  <PropControls.Toggle
                    label="Enable Semantic Identifiers"
                    checked={enableIdentifiers}
                    onChange={setEnableIdentifiers}
                    description={`Add .${prefix}-* classes and data-rakit="*" to DOM elements`}
                  />
                </div>
              </PropControls.Item>
            </div>
          </PropControls>

          {/* 3. Code Generator */}
          <PropControls.Code codeSnippet={generatedConfigCode} />
        </div>
      </section>

      {/* Section 2: Setup & Integration Guide */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Setup & Integration Guide
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          <div
            id="root-provider"
            data-toc-id="root-provider"
            data-toc-title="Root Provider Setup"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                1. Setup Provider at Application Root
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Wrap your React application with <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-[11px]">&lt;RakitProvider&gt;</code> to apply universal config overrides without altering individual component props.
              </p>
            </div>
            <CodeViewer value={setupSnippet} language="tsx" theme="dark" showToolbar={true} />
          </div>

          <div
            id="tailwind-tokens"
            data-toc-id="tailwind-tokens"
            data-toc-title="Tailwind v4 & Dark Mode"
            data-toc-level="2"
            className="space-y-3"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                2. Tailwind CSS v4 & Dark Mode Setup
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                In Tailwind CSS v4, setup is configured directly in your root CSS stylesheet using the <code className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-[11px]">@custom-variant</code> directive and CSS variables.
              </p>
            </div>
            <CodeViewer value={tailwindSnippet} language="css" theme="dark" showToolbar={true} />
          </div>
        </div>
      </section>

      {/* Section 3: Semantic Identifiers Reference */}
      <section id="props" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Semantic Identifiers Reference
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div
          id="semantic-identifiers"
          data-toc-id="semantic-identifiers"
          data-toc-title="Semantic Identifiers Table"
          data-toc-level="2"
          className="space-y-4"
        >
          <div>
            <h3 className="text-base font-display font-semibold text-slate-900">
              Semantic Identifiers & Data Attributes Directory
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              All Rakit UI components include semantic class identifiers and a <code className="font-mono text-[11px]">data-rakit="*"</code> attribute to simplify global targeting and automated testing suites (Playwright / Cypress).
            </p>
          </div>

          <Table<(typeof identifiersData)[0]>
            data={identifiersData}
            columns={[
              {
                key: 'component',
                title: 'Component',
                width: '18%',
                render: (row) => (
                  <span className="font-bold text-slate-900 font-mono text-xs sm:text-[13px]">
                    {row.component}
                  </span>
                ),
              },
              {
                key: 'classIdentifier',
                title: 'CSS Class Identifier',
                width: '30%',
                render: (row) => (
                  <code className="text-emerald-700 bg-emerald-50/70 border border-emerald-100 px-2 py-0.5 rounded-md inline-block font-mono text-[11px] sm:text-xs font-semibold">
                    {row.classIdentifier}
                  </code>
                ),
              },
              {
                key: 'dataAttr',
                title: 'DOM Attribute',
                width: '24%',
                render: (row) => (
                  <code className="text-blue-700 bg-blue-50/70 border border-blue-100 px-2 py-0.5 rounded-md inline-block font-mono text-[11px] sm:text-xs">
                    {row.dataAttr}
                  </code>
                ),
              },
              {
                key: 'description',
                title: 'Description',
                width: '28%',
                render: (row) => (
                  <span className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {row.description}
                  </span>
                ),
              },
            ]}
            size="sm"
            striped
            rowKey={(row) => row.component}
          />
        </div>
      </section>

    </div>
  );
}
