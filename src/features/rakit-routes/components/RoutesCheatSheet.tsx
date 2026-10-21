import { Card, Table } from '@zarr20/rakit-ui';

export function RoutesCheatSheet() {
  const conventions = [
    {
      file: 'index.tsx',
      url: '/',
      priority: 'Top (Highest)',
      desc: 'Root homepage or sub-folder index (e.g. blog/index.tsx -> /blog).',
    },
    {
      file: 'about.tsx',
      url: '/about',
      priority: 'High (Static)',
      desc: 'Standard static routes evaluated before dynamic parameters.',
    },
    {
      file: 'products/[id].tsx',
      url: '/products/:id',
      priority: 'Medium (Dynamic)',
      desc: 'Dynamic segment parameter accessible via useParams().',
    },
    {
      file: 'users/[userId]/posts/[postId].tsx',
      url: '/users/:userId/posts/:postId',
      priority: 'Medium (Multi-Params)',
      desc: 'Nested multi-level route parameters.',
    },
    {
      file: '(auth)/login.tsx',
      url: '/login',
      priority: 'High (Route Group)',
      desc: 'Parenthesized group folders omitted from URLs, used for shared layout structuring.',
    },
    {
      file: '(dashboard)/settings.tsx',
      url: '/settings',
      priority: 'High (Route Group)',
      desc: 'Organizes dashboard pages without polluting the clean URL path.',
    },
    {
      file: '[...slug].tsx',
      url: '/*',
      priority: 'Low (Wildcard)',
      desc: 'Catch-all wildcard matching all nested sub-paths.',
    },
    {
      file: '404.tsx / _404.tsx',
      url: '*',
      priority: 'Lowest (Final Fallback)',
      desc: 'Fallback route for unmatched paths.',
    },
  ];

  const specialFiles = [
    {
      name: '_layout.tsx',
      purpose: 'Cascading Layout Template',
      desc: 'Wraps child pages in the folder with a shared layout and <Outlet />.',
    },
    {
      name: '_middleware.ts',
      purpose: 'Ancestor Middleware Chain',
      desc: 'Provides route interceptors evaluated before rendering.',
    },
    {
      name: '_meta.ts',
      purpose: 'Route Metadata Definition',
      desc: 'Defines roles, permissions, and page titles in a decoupled file.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Table of File Conventions */}
      <div className="space-y-4">
        <h3 className="text-base font-display font-semibold text-slate-900">
          File Path to URL Conversion Conventions Table
        </h3>

        <Table<(typeof conventions)[0]>
          data={conventions}
          columns={[
            {
              key: 'file',
              title: 'File Structure in pages/',
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
              title: 'Sorting Priority',
              width: '20%',
              render: (c) => (
                <span className="font-mono text-xs text-amber-800 font-semibold">
                  {c.priority}
                </span>
              ),
            },
            {
              key: 'desc',
              title: 'Description',
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
            Special Convention Files (_layout, _middleware, _meta)
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
