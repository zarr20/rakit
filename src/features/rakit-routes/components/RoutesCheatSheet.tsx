import { Card, Table } from '@zarr20/rakit-ui';

export function RoutesCheatSheet() {
  const conventions = [
    {
      file: 'index.tsx',
      url: '/',
      priority: 'Top (Paling Awal)',
      desc: 'Halaman beranda root atau index sub-folder (e.g. blog/index.tsx -> /blog).',
    },
    {
      file: 'about.tsx',
      url: '/about',
      priority: 'High (Statis)',
      desc: 'Rute statis biasa selalu dievaluasi sebelum parameter dinamis.',
    },
    {
      file: 'products/[id].tsx',
      url: '/products/:id',
      priority: 'Medium (Dinamis)',
      desc: 'Segmen dinamis dengan nama parameter yang dapat dibaca via useParams().',
    },
    {
      file: 'users/[userId]/posts/[postId].tsx',
      url: '/users/:userId/posts/:postId',
      priority: 'Medium (Multi-Params)',
      desc: 'Parameter bertingkat multi-level secara fleksibel.',
    },
    {
      file: '(auth)/login.tsx',
      url: '/login',
      priority: 'High (Route Group)',
      desc: 'Folder dalam kurung (group) diabaikan dari URL, berguna untuk mengelompokkan layout.',
    },
    {
      file: '(dashboard)/settings.tsx',
      url: '/settings',
      priority: 'High (Route Group)',
      desc: 'Mengelompokkan halaman dashboard tanpa memengaruhi rute URL bersih.',
    },
    {
      file: '[...slug].tsx',
      url: '/*',
      priority: 'Low (Wildcard)',
      desc: 'Catch-all wildcard untuk menangkap seluruh sub-rute bertingkat.',
    },
    {
      file: '404.tsx / _404.tsx',
      url: '*',
      priority: 'Lowest (Paling Akhir)',
      desc: 'Halaman penampung fallback jika tidak ada rute lain yang cocok.',
    },
  ];

  const specialFiles = [
    {
      name: '_layout.tsx',
      purpose: 'Cascading Layout Template',
      desc: 'Membungkus seluruh halaman anak dalam folder bersangkutan dengan layout khusus dan <Outlet />.',
    },
    {
      name: '_middleware.ts',
      purpose: 'Ancestor Middleware Chain',
      desc: 'Menyediakan filter interceptor sebelum route dirender.',
    },
    {
      name: '_meta.ts',
      purpose: 'Route Metadata Definition',
      desc: 'Mendefinisikan hak akses peran (roles), izin (permissions), dan judul halaman secara terpisah.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Table of File Conventions */}
      <div className="space-y-4">
        <h3 className="text-base font-display font-semibold text-slate-900">
          Tabel Konvensi Konversi Path File ke URL
        </h3>

        <Table<(typeof conventions)[0]>
          data={conventions}
          columns={[
            {
              key: 'file',
              title: 'Struktur File di pages/',
              width: '28%',
              render: (c) => (
                <code className="text-sky-800 bg-sky-50/70 border border-sky-200/60 font-mono font-bold text-xs px-2 py-0.5 rounded inline-block">
                  {c.file}
                </code>
              ),
            },
            {
              key: 'url',
              title: 'Generated Route URL',
              width: '24%',
              render: (c) => (
                <code className="text-emerald-700 bg-emerald-50/70 border border-emerald-200/60 font-mono font-bold text-xs px-2 py-0.5 rounded inline-block">
                  {c.url}
                </code>
              ),
            },
            {
              key: 'priority',
              title: 'Prioritas Sorting',
              width: '20%',
              render: (c) => (
                <span className="font-mono text-xs text-amber-800 font-semibold">
                  {c.priority}
                </span>
              ),
            },
            {
              key: 'desc',
              title: 'Keterangan',
              width: '28%',
              render: (c) => (
                <span className="text-xs text-slate-600 font-sans leading-relaxed">
                  {c.desc}
                </span>
              ),
            },
          ]}
          size="sm"
          striped
          rowKey={(c) => c.file}
        />
      </div>

      {/* Special files cards */}

      <Card variant="default" padding="large">
        <div className="space-y-4">
          <h3 className="text-base font-display font-semibold text-slate-900">
            File Konvensi Khusus (_layout, _middleware, _meta)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specialFiles.map((sf) => (
              <Card key={sf.name} variant="flat" padding="medium">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                      {sf.name}
                    </code>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">{sf.purpose}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{sf.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
