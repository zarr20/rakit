import { SlidersHorizontal, Palette, Layers, Route } from 'lucide-react';
import { Card } from '@zarr20/rakit-ui';

export function OverviewPrinciples() {
  const principles = [
    {
      icon: SlidersHorizontal,
      title: 'Universal Sizing Scale (xs–xl)',
      description: 'All form controls (TextField, Select, TextArea, Switch, Radio, Checkbox) and Button share identical pixel heights at every size tier.',
    },
    {
      icon: Palette,
      title: 'Pure Default Design System',
      description: 'Harmonious Slate & Emerald color palette. Equipped with semantic identifiers (.rakit-*) and data-rakit attributes for seamless customization.',
    },
    {
      icon: Layers,
      title: 'Modular Compound Components',
      description: 'Card, Table, Sidebar, Drawer, Typography, and Breadcrumb leverage compound subcomponent patterns for maximum compositional flexibility.',
    },
    {
      icon: Route,
      title: 'Automatic Routing & RBAC',
      description: 'Zero-config route generator based on the src/pages directory structure with built-in RBAC RouteGuard access control.',
    },
  ];

  return (
    <section className="py-8 max-w-5xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
          Ecosystem Engineering Principles
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Built for enterprise-grade software reliability and developer experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <Card key={idx} variant="default" padding="medium" className="bg-white/80 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm text-slate-900">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
