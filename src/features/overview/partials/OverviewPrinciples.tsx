import { SlidersHorizontal, Palette, Layers, Route } from 'lucide-react';
import { Card } from '@zarr20/rakit-ui';

export function OverviewPrinciples() {
  const principles = [
    {
      icon: SlidersHorizontal,
      title: 'Skala Ukuran Universal (xs–xl)',
      description: 'Seluruh kontrol form (TextField, Select, TextArea, Switch, Radio, Checkbox) dan Button memiliki tinggi pixel yang identik di setiap tingkat ukuran.',
    },
    {
      icon: Palette,
      title: 'Pure Default Design System',
      description: 'Palet warna Slate & Emerald yang harmonis. Dilengkapi semantic identifier (.rakit-*) dan atribut data-rakit untuk kemudahan konfigurasi.',
    },
    {
      icon: Layers,
      title: 'Komponen Compound Modular',
      description: 'Card, Table, Sidebar, Drawer, Typography, dan Breadcrumb menggunakan pola compound subkomponen untuk fleksibilitas komposisi maksimal.',
    },
    {
      icon: Route,
      title: 'Routing Otomatis & RBAC',
      description: 'Zero-config router generator berbasis struktur berkas src/pages lengkap dengan proteksi RouteGuard berbasis hak akses peran.',
    },
  ];

  return (
    <section className="py-8 max-w-5xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
          Prinsip Rekayasa Ekosistem
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Dirancang untuk standar keandalan perangkat lunak kelas enterprise.
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
