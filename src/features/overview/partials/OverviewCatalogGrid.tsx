import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SquareCode,
  ArrowRight,
  MousePointerClick,
  FormInput,
  Tag,
  Type,
  Table2,
  Code2,
  Maximize2,
  PanelRight,
  BellRing,
  FolderX,
  FolderKanban,
  Milestone,
  Route,
  LayoutGrid,
  Layers,
  Palette,
} from 'lucide-react';
import { Card, Badge, Tabs } from '@zarr20/rakit-ui';
import { COMPONENTS_CATALOG } from '../../../shared/data/componentsMeta';

const ICON_MAP: Record<string, any> = {
  MousePointerClick,
  FormInput,
  Tag,
  Type,
  Table2,
  Code2,
  Maximize2,
  PanelRight,
  BellRing,
  FolderX,
  FolderKanban,
  Milestone,
  Route,
  LayoutGrid,
  Layers,
  SquareCode,
  Palette,
};


export function OverviewCatalogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Komponen' },
    { id: 'Layout & Structure', label: 'Layout' },
    { id: 'Inputs & Forms', label: 'Forms' },
    { id: 'Data Display', label: 'Data Display' },
    { id: 'Feedback & Overlay', label: 'Feedback' },
    { id: 'Navigation', label: 'Navigation' },
    { id: 'Ecosystem & Routing', label: 'Routing' },
  ];

  const filteredComponents = COMPONENTS_CATALOG.filter((item) => {
    if (item.id === 'overview') return false;
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-8 max-w-6xl mx-auto space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            Katalog Primitives & Komponen
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Pilih komponen untuk melihat dokumentasi API, playground interaktif, dan props.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="shrink-0">
          <Tabs
            items={categories}
            value={activeCategory}
            onChange={(val) => setActiveCategory(val)}
            variant="pills"
            size="sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredComponents.map((item) => {
          const Icon = ICON_MAP[item.iconName] || SquareCode;
          return (
            <Link key={item.id} to={`/${item.id}`} className="group">
              <Card
                variant="default"
                padding="medium"
                className="h-full flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-md transition-all bg-white/90"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-700 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    {item.badge && <Badge variant="default" size="xs">{item.badge}</Badge>}
                  </div>

                  <h3 className="font-semibold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-medium">
                  <span>Lihat Dokumentasi</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
