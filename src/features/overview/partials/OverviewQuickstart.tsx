import { useState } from 'react';
import { Card, CodeViewer, SegmentedControl } from '@zarr20/rakit-ui';

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

const PM_ITEMS = [
  { value: 'npm', label: 'npm' },
  { value: 'pnpm', label: 'pnpm' },
  { value: 'yarn', label: 'yarn' },
  { value: 'bun', label: 'bun' },
];

export function OverviewQuickstart() {
  const [activePm, setActivePm] = useState<PackageManager>('npm');

  const pmCommands: Record<PackageManager, string> = {
    npm: 'npm install @zarr20/rakit-ui @zarr20/rakit-routes',
    pnpm: 'pnpm add @zarr20/rakit-ui @zarr20/rakit-routes',
    yarn: 'yarn add @zarr20/rakit-ui @zarr20/rakit-routes',
    bun: 'bun add @zarr20/rakit-ui @zarr20/rakit-routes',
  };

  const tailwindSetupCode = `@import "tailwindcss";
@import "@zarr20/rakit-ui/styles.css";

/* Rakit Dark Mode Variant (Opsional) */
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
`;

  return (
    <section className="py-8 max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
          Panduan Cepat (Quickstart)
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Dua langkah mudah untuk mulai membangun aplikasi dengan Rakit Ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Step 1: Install Dependencies */}
        <Card variant="default" padding="large" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-slate-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">
                1
              </span>
              Instalasi Paket
            </h3>

            {/* Package Manager Switcher */}
            <SegmentedControl
              items={PM_ITEMS}
              value={activePm}
              onChange={(val) => setActivePm(val as PackageManager)}
              size="xs"
            />
          </div>

          <CodeViewer
            value={pmCommands[activePm]}
            language="bash"
            theme="dark"
            showToolbar={true}
            showLineNumbers={false}
          />
        </Card>

        {/* Step 2: Tailwind CSS v4 Setup */}
        <Card variant="default" padding="large" className="space-y-4">
          <h3 className="font-semibold text-sm text-slate-900 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">
              2
            </span>
            Setup Styling (index.css)
          </h3>

          <CodeViewer
            value={tailwindSetupCode}
            language="css"
            theme="dark"
            showToolbar={true}
            showLineNumbers={true}
          />
        </Card>
      </div>
    </section>
  );
}
