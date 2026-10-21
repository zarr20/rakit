import { useState } from 'react';
import { Route, Compass, ShieldCheck, Zap, BookOpen, Layers } from 'lucide-react';
import { Badge, Tabs } from '@zarr20/rakit-ui';
import { PathResolverSandbox } from './components/PathResolverSandbox';
import { RouteSorterSandbox } from './components/RouteSorterSandbox';
import { RouteGuardSandbox } from './components/RouteGuardSandbox';
import { VitePluginShowcase } from './components/VitePluginShowcase';
import { RoutesCheatSheet } from './components/RoutesCheatSheet';
import { PropsTable } from '../../shared/components/PropsTable';
import { ROUTE_MAPPER_CONFIG_PROPS, ROUTE_GUARD_PROPS, VITE_PLUGIN_PROPS } from './data/routesProps';

export type RoutesTab = 'resolver' | 'sorter' | 'guard' | 'vite' | 'cheatsheet' | 'api';

export function RakitRoutesPlayground() {
  const [activeTab, setActiveTab] = useState<RoutesTab>('resolver');

  const tabsConfig = [
    { id: 'resolver' as const, label: 'Path & URL Resolver', icon: Compass },
    { id: 'sorter' as const, label: 'Route Sorter & Generator', icon: Layers },
    { id: 'guard' as const, label: 'RouteGuard & RBAC', icon: ShieldCheck },
    { id: 'vite' as const, label: 'Vite Plugin & CLI', icon: Zap },
    { id: 'cheatsheet' as const, label: 'Conventions & Rules', icon: BookOpen },
    { id: 'api' as const, label: 'API Reference', icon: Route },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-sky-200/90 bg-gradient-to-br from-white via-sky-50/50 to-sky-50/20 p-6 sm:p-8 shadow-xs">
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary" size="sm">
              @zarr20/rakit-routes v1.1.5
            </Badge>
            <Badge variant="default" size="sm">
              Zero-Config File-System Router
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Rakit Routes Playground
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Explore the file-system based routing system for React. Supports dynamic parameters <code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">[id]</code>, catch-all <code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">[...slug]</code>, route grouping <code className="text-emerald-800 bg-emerald-100/60 px-1 py-0.5 rounded font-mono font-medium">(auth)</code>, deterministic route sorting, and RouteGuard access control.
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs using rakit Tabs */}
      <div className="w-full">
        <Tabs
          items={tabsConfig.map((t) => {
            const Icon = t.icon;
            return {
              id: t.id,
              label: t.label,
              icon: <Icon className="w-4 h-4" />,
            };
          })}
          value={activeTab}
          onChange={(id) => setActiveTab(id as RoutesTab)}
          variant="pills"
          size="md"
        />
      </div>

      {/* Tab Panels */}
      {activeTab === 'resolver' && <PathResolverSandbox />}
      {activeTab === 'sorter' && <RouteSorterSandbox />}
      {activeTab === 'guard' && <RouteGuardSandbox />}
      {activeTab === 'vite' && <VitePluginShowcase />}
      {activeTab === 'cheatsheet' && <RoutesCheatSheet />}
      {activeTab === 'api' && (
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-base font-display font-semibold text-slate-900">
              routerMapper() Configuration
            </h3>
            <PropsTable props={ROUTE_MAPPER_CONFIG_PROPS} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-display font-semibold text-slate-900">
              &lt;RouteGuard /&gt; Props
            </h3>
            <PropsTable props={ROUTE_GUARD_PROPS} />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-display font-semibold text-slate-900">
              rakitRoutesPlugin() Options
            </h3>
            <PropsTable props={VITE_PLUGIN_PROPS} />
          </div>
        </div>
      )}
    </div>
  );
}
