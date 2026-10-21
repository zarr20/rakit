import { Link } from 'react-router-dom';
import { Layers, Route, ArrowRight, CheckCircle2, Package } from 'lucide-react';
import { Card, Badge, Button } from '@zarr20/rakit-ui';

export function OverviewPackages() {
  const packages = [
    {
      id: 'rakit-ui',
      name: '@zarr20/rakit-ui',
      version: 'v1.0.0',
      badge: 'Component Library',
      description: 'Pustaka komponen enterprise berbasis React 19 & Tailwind CSS v4 dengan skala ukuran presisi xs-xl.',
      icon: Layers,
      docLink: '/button',
      npmUrl: 'https://www.npmjs.com/package/@zarr20/rakit-ui',
      features: [
        '18 Primitives UI: Button, Fields, Card, Table, Drawer, Modal, Tabs, dll',
        'Keseragaman skala ukuran universal 5-level (xs, sm, md, lg, xl)',
        'Arsitektur compound komponen dan aksesibilitas WAI-ARIA bawaan',
        'Dukungan penuh mode gelap Tailwind v4 tanpa flash theme',
      ],
      color: 'emerald',
    },
    {
      id: 'rakit-routes',
      name: '@zarr20/rakit-routes',
      version: 'v1.1.5',
      badge: 'Routing Engine',
      description: 'Zero-config file-system router dan RouteGuard RBAC otomatis untuk React & Vite.',
      icon: Route,
      docLink: '/rakit-routes',
      npmUrl: 'https://www.npmjs.com/package/@zarr20/rakit-routes',
      features: [
        'File-system based automatic routing dari direktori src/pages',
        'Vite Plugin dengan zero runtime configuration overhead',
        'RouteGuard RBAC untuk proteksi halaman berbasis peran & autentikasi',
        'Deterministik static route sorting & automatic code splitting',
      ],
      color: 'blue',
    },
  ];

  return (
    <section className="py-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
          Dua Paket Inti dalam Satu Ekosistem
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Pilih paket dokumentasi di bawah untuk mempelajari API, props, dan contoh implementasinya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {packages.map((pkg) => {
          const Icon = pkg.icon;
          return (
            <Card
              key={pkg.id}
              variant="default"
              padding="large"
              className="flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition-all bg-white/90 backdrop-blur-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        pkg.color === 'emerald'
                          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                          : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-sm text-slate-900">{pkg.name}</h3>
                      <span className="text-[10px] text-slate-500 font-mono">{pkg.version}</span>
                    </div>
                  </div>
                  <Badge variant={pkg.color === 'emerald' ? 'primary' : 'info'} size="sm">
                    {pkg.badge}
                  </Badge>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          pkg.color === 'emerald' ? 'text-emerald-600' : 'text-blue-600'
                        }`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <a
                  href={pkg.npmUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>npm package</span>
                </a>

                <Link to={pkg.docLink}>
                  <Button
                    variant={pkg.color === 'emerald' ? 'primary' : 'secondary'}
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Buka Dokumentasi
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
