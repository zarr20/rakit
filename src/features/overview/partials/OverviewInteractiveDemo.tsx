import { useState } from 'react';
import { Card, Button, TextField, Switch, Badge, CodeViewer, SegmentedControl } from '@zarr20/rakit-ui';
import { Sparkles, Eye, Code2 } from 'lucide-react';

export function OverviewInteractiveDemo() {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [name, setName] = useState('Dzarr Al Ghifari');
  const [active, setActive] = useState(true);
  const [count, setCount] = useState(0);

  const sampleCode = `import { useState } from 'react';
import { Button, TextField, Switch, Badge } from '@zarr20/rakit-ui';

export function QuickDemo() {
  const [name, setName] = useState('${name}');
  const [active, setActive] = useState(${active});
  const [count, setCount] = useState(${count});

  return (
    <div className="space-y-4">
      <TextField label="Developer" value={name} onChange={(e) => setName(e.target.value)} />
      <Switch label="Active Status" checked={active} onChange={setActive} />
      <Button variant="primary" onClick={() => setCount(c => c + 1)}>
        Diklik {count}x
      </Button>
    </div>
  );
}`;

  return (
    <section className="py-8 max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
            Interactive Live Teaser
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Eksplorasi reaktivitas komponen Rakit UI secara langsung.
          </p>
        </div>

        {/* View Mode Switcher */}
        <SegmentedControl
          items={[
            { value: 'preview', label: 'Preview', icon: <Eye className="w-3.5 h-3.5" /> },
            { value: 'code', label: 'Kode TSX', icon: <Code2 className="w-3.5 h-3.5" /> },
          ]}
          value={tab}
          onChange={(val) => setTab(val as 'preview' | 'code')}
          size="sm"
        />
      </div>

      <Card variant="default" padding="large" className="bg-white/90 shadow-sm border-slate-200">
        {tab === 'preview' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <TextField
                label="Nama Pengguna"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ketikkan nama..."
              />

              <Switch
                label="Status Developer Aktif"
                checked={active}
                onChange={(c) => setActive(c)}
              />

              <div className="flex items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setCount((prev) => prev + 1)}
                  leftIcon={<Sparkles className="w-4 h-4" />}
                >
                  Kirim Reaksi ({count})
                </Button>
                <Badge variant={active ? 'success' : 'default'} size="md">
                  {active ? 'Online' : 'Offline'}
                </Badge>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
              <div className="text-slate-400 font-bold uppercase text-[10px]">Realtime State</div>
              <div className="text-slate-700">Nama: <span className="text-emerald-700 font-bold">{name || '-'}</span></div>
              <div className="text-slate-700">Status: <span className="font-bold">{active ? 'Aktif' : 'Non-aktif'}</span></div>
              <div className="text-slate-700">Total Klik: <span className="text-blue-700 font-bold">{count}</span></div>
            </div>
          </div>
        ) : (
          <CodeViewer value={sampleCode} language="tsx" theme="dark" showToolbar={true} />
        )}
      </Card>
    </section>
  );
}
