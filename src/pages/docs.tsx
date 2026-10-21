import { useNavigate } from 'react-router-dom';
import { Card, Button, Badge } from '@zarr20/rakit-ui';
import { Layers, Route, ArrowRight, BookOpen } from 'lucide-react';
import { PACKAGES_LIST } from '../shared/data/packagesData';

export default function DocsIndexPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              Pusat Dokumentasi Rakit
            </h1>
            <p className="text-slate-600 text-sm mt-0.5">
              Pilih paket untuk menavigasi dokumentasi API, panduan penggunaan, dan interaktivitas.
            </p>
          </div>
        </div>
      </div>

      {/* Package Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PACKAGES_LIST.map((pkg) => {
          const Icon = pkg.id === 'rakit-ui' ? Layers : Route;
          const isUi = pkg.id === 'rakit-ui';
          return (
            <Card
              key={pkg.id}
              variant="default"
              padding="large"
              className="flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isUi
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                          : 'bg-blue-50 text-blue-600 border border-blue-200'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-sm text-slate-900">{pkg.name}</h3>
                      <span className="text-[10px] text-slate-500 font-mono">{pkg.version}</span>
                    </div>
                  </div>
                  <Badge variant={isUi ? 'primary' : 'info'} size="xs">
                    {pkg.badge}
                  </Badge>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-end">
                <Button
                  variant={isUi ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => navigate(pkg.defaultRoute)}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Buka Dokumentasi {isUi ? 'UI' : 'Router'}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
