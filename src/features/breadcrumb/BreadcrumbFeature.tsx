import { useState } from 'react';
import {
  Breadcrumb,
  type BreadcrumbSeparatorType,
  type BreadcrumbSize,
  type BreadcrumbItemData,
} from '@zarr20/rakit-ui';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { PropControls } from '../../shared/components/prop-controls/PropControls';
import { PropsTable } from '../../shared/components/PropsTable';
import {
  BREADCRUMB_PROPS,
  BREADCRUMB_ITEM_PROPS,
  BREADCRUMB_LINK_PROPS,
} from './data/breadcrumbProps';
import { Home, Folder, Shield, Play, Layers, BookOpen } from 'lucide-react';

export function BreadcrumbFeature() {
  // Interactive controls
  const [separator, setSeparator] = useState<string>('chevron');
  const [size, setSize] = useState<BreadcrumbSize>('sm');
  const [withIcons, setWithIcons] = useState(true);

  const sampleItems: BreadcrumbItemData[] = [
    {
      id: '1',
      label: 'Home',
      href: '#',
      icon: withIcons ? <Home className="w-3.5 h-3.5 mr-1" /> : undefined,
    },
    {
      id: '2',
      label: 'Security & Access',
      href: '#',
      icon: withIcons ? <Folder className="w-3.5 h-3.5 mr-1" /> : undefined,
    },
    {
      id: '3',
      label: 'API Keys',
      href: '#',
    },
    {
      id: '4',
      label: 'Production Key 01',
      active: true,
      icon: withIcons ? <Shield className="w-3.5 h-3.5 mr-1" /> : undefined,
    },
  ];

  const generateCode = () => {
    return `import { Breadcrumb } from '@zarr20/rakit-ui';
import { Home, Folder, Shield } from 'lucide-react';

// Declarative API
<Breadcrumb
  size="${size}"
  separator="${separator}"
  items={[
    { label: 'Home', href: '/', icon: <Home className="w-3.5 h-3.5 mr-1" /> },
    { label: 'Security & Access', href: '/security', icon: <Folder className="w-3.5 h-3.5 mr-1" /> },
    { label: 'API Keys', href: '/security/keys' },
    { label: 'Production Key 01', active: true, icon: <Shield className="w-3.5 h-3.5 mr-1" /> },
  ]}
/>

// Compound API
<Breadcrumb size="${size}">
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/security">Security</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />
  <Breadcrumb.Item active>
    <Breadcrumb.Page>API Keys</Breadcrumb.Page>
  </Breadcrumb.Item>
</Breadcrumb>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Breadcrumb"
        tagline="Jalur navigasi hierarkis cerdas untuk menunjukkan posisi pengguna di dalam hierarki konten dan struktur routing aplikasi."
        badge="Router & Navigation"
        importStatement="import { Breadcrumb } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Sandbox */}
      <section
        id="playground"
        className="space-y-6 scroll-mt-6"
        data-toc-title="Interactive Sandbox"
        data-toc-level="1"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Breadcrumb Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Responsive Full-Width Studio Layout */}
        <div className="space-y-4">
          {/* 1. Full-Width Preview Canvas */}
          <PropControls.Canvas
            codeSnippet={generateCode()}
            onReset={() => {
              setSeparator('chevron');
              setSize('sm');
              setWithIcons(true);
            }}
            componentId="breadcrumb-basic"
          >
            <div className="w-full flex items-center justify-center py-6 px-4">
              <Breadcrumb
                size={size}
                separator={separator as BreadcrumbSeparatorType}
                items={sampleItems}
              />
            </div>
          </PropControls.Canvas>

          {/* 2. Responsive Controls Panel */}
          <PropControls title="Konfigurasi Props Breadcrumb" columns={3}>
            <PropControls.Segmented
              label="Separator Style"
              items={[
                { value: 'chevron', label: 'Chevron (>)' },
                { value: 'slash', label: 'Slash (/)' },
                { value: 'arrow', label: 'Arrow (→)' },
                { value: 'bullet', label: 'Bullet (•)' },
              ]}
              value={separator}
              onChange={setSeparator}
              size="xs"
            />

            <PropControls.Segmented
              label="Ukuran (Size)"
              items={[
                { value: 'xs', label: 'XS' },
                { value: 'sm', label: 'SM' },
                { value: 'md', label: 'MD' },
                { value: 'lg', label: 'LG' },
              ]}
              value={size}
              onChange={(s) => setSize(s as BreadcrumbSize)}
              size="xs"
            />

            <PropControls.Item label="Opsi Ikon">
              <div className="pt-1">
                <PropControls.Toggle
                  label="Tampilkan Ikon Node"
                  checked={withIcons}
                  onChange={setWithIcons}
                />
              </div>
            </PropControls.Item>
          </PropControls>

          {/* 3. Code Generator */}
          <PropControls.Code codeSnippet={generateCode()} />
        </div>
      </section>

      {/* Section 2: Examples */}
      <section
        id="examples"
        className="space-y-8 scroll-mt-6 pt-10 border-t border-slate-200/80"
        data-toc-title="Varian & Skenario"
        data-toc-level="1"
      >
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
          {/* Sub-content 1: Separator Variations */}
          <div
            id="separator-styles"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Separator Styles"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Separator Styles
              </h3>
              <p className="text-xs text-slate-500">
                Kustomisasi karakter atau ikon pemisah rute navigasi.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50 space-y-5 divide-y divide-slate-200/60">
              <div className="pt-2 space-y-2">
                <span className="text-xs font-mono text-slate-400">separator="chevron"</span>
                <Breadcrumb
                  separator="chevron"
                  items={[
                    { label: 'Dashboard', href: '#' },
                    { label: 'Projects', href: '#' },
                    { label: 'Analytics Pipeline', active: true },
                  ]}
                />
              </div>

              <div className="pt-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">separator="slash"</span>
                <Breadcrumb
                  separator="slash"
                  items={[
                    { label: 'Workspace', href: '#' },
                    { label: 'Settings', href: '#' },
                    { label: 'Billing & Plans', active: true },
                  ]}
                />
              </div>

              <div className="pt-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">separator="arrow"</span>
                <Breadcrumb
                  separator="arrow"
                  items={[
                    { label: 'Root', href: '#' },
                    { label: 'Databases', href: '#' },
                    { label: 'Cluster-01', active: true },
                  ]}
                />
              </div>

              <div className="pt-4 space-y-2">
                <span className="text-xs font-mono text-slate-400">separator="bullet"</span>
                <Breadcrumb
                  separator="bullet"
                  items={[
                    { label: 'App', href: '#' },
                    { label: 'Users', href: '#' },
                    { label: 'Permissions', active: true },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Sub-content 2: Compound Syntax Example */}
          <div
            id="compound-syntax"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Compound Component"
            data-toc-level="2"
          >
            <div>
              <h3 className="text-base font-display font-semibold text-slate-900">
                Compound Component Syntax
              </h3>
              <p className="text-xs text-slate-500">
                Mode compound memberikan kebebasan fleksibel menyisipkan elemen custom atau router hooks (seperti Next.js Link atau React Router).
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50/50">
              <Breadcrumb size="sm">
                <Breadcrumb.Item>
                  <Breadcrumb.Link href="#">
                    <Home className="w-3.5 h-3.5 mr-1" />
                    Home
                  </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                  <Breadcrumb.Link href="#">Admin</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                  <Breadcrumb.Link href="#">System</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item active>
                  <Breadcrumb.Page>Audit Logs</Breadcrumb.Page>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Props Reference */}
      <section
        id="props"
        className="space-y-8 scroll-mt-6 pt-10 border-t border-slate-200/80"
        data-toc-title="Props Reference"
        data-toc-level="1"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Props Reference
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-8">
          <div
            id="props-breadcrumb"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Breadcrumb Props"
            data-toc-level="2"
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-600">
              Breadcrumb Props
            </h3>
            <PropsTable props={BREADCRUMB_PROPS} />
          </div>

          <div
            id="props-item"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Breadcrumb.Item Props"
            data-toc-level="2"
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-600">
              Breadcrumb.Item Props
            </h3>
            <PropsTable props={BREADCRUMB_ITEM_PROPS} />
          </div>

          <div
            id="props-link"
            className="space-y-3 scroll-mt-6"
            data-toc-title="Breadcrumb.Link Props"
            data-toc-level="2"
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-600">
              Breadcrumb.Link Props
            </h3>
            <PropsTable props={BREADCRUMB_LINK_PROPS} />
          </div>
        </div>
      </section>
    </div>
  );
}
