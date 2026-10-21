import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Badge, Tabs, type TabItem } from '@zarr20/rakit-ui';
import {
  Terminal,
  MousePointerClick,
  Layers,
  FormInput,
  ShieldCheck,
  Compass,
  Lock,
} from 'lucide-react';
import { RakitPlayground } from '../components/playground';
import { PLAYGROUND_EXAMPLES } from '../examples';
import type { PlaygroundExample } from '../components/playground/playground.types';

const EXAMPLE_ICONS: Record<string, React.ReactNode> = {
  'button-basic': <MousePointerClick className="w-3.5 h-3.5" />,
  'button-variants': <Layers className="w-3.5 h-3.5" />,
  'input-basic': <FormInput className="w-3.5 h-3.5" />,
  'input-validation': <ShieldCheck className="w-3.5 h-3.5" />,
  'routes-basic': <Compass className="w-3.5 h-3.5" />,
  'routes-protected': <Lock className="w-3.5 h-3.5" />,
};

export default function PlaygroundPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const exampleParam = searchParams.get('example');

  // Find initial example matching query param or default to first
  const initialExample =
    PLAYGROUND_EXAMPLES.find((ex) => ex.id === exampleParam) || PLAYGROUND_EXAMPLES[0];

  const [activeExample, setActiveExample] = useState<PlaygroundExample>(initialExample);

  // Sync state if URL query param changes
  useEffect(() => {
    if (exampleParam) {
      const found = PLAYGROUND_EXAMPLES.find((ex) => ex.id === exampleParam);
      if (found) {
        setActiveExample(found);
      }
    }
  }, [exampleParam]);

  const handleSelectExampleId = (id: string) => {
    const example = PLAYGROUND_EXAMPLES.find((ex) => ex.id === id);
    if (!example) return;
    setActiveExample(example);
    // Keep clean URL
    const newParams = new URLSearchParams(searchParams);
    newParams.set('example', example.id);
    newParams.delete('code'); // Clear custom code query when switching preset
    setSearchParams(newParams);
  };

  const tabsItems: TabItem[] = PLAYGROUND_EXAMPLES.map((ex) => ({
    id: ex.id,
    label: ex.title,
    icon: EXAMPLE_ICONS[ex.id] || <Layers className="w-3.5 h-3.5" />,
  }));

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-2xs">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  Rakit Live Playground
                </h1>
                <Badge variant="primary" size="sm">
                  Browser Runtime
                </Badge>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">
                Explore, edit, and share examples of @zarr20/rakit-ui and rakit-routes in real time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
              React 19 + Tailwind v4
            </span>
            <Badge variant="subtle" size="sm">
              Zero Config
            </Badge>
          </div>
        </div>

        {/* Example Catalog Filter Tabs with Pills and Icons */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5 shrink-0 mr-1">
            <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Select Example:
          </span>
          <div className="w-full overflow-x-auto pb-1 sm:pb-0">
            <Tabs
              variant="pills"
              size="xs"
              items={tabsItems}
              value={activeExample.id}
              onChange={handleSelectExampleId}
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Playground */}
      <RakitPlayground
        initialExample={activeExample}
        height="660px"
        showToolbar={true}
      />
    </div>
  );
}
