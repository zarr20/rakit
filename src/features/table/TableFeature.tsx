import { useState } from 'react';
import {
  Table,
  Button,
  Badge,
  TextField,
  Checkbox,
  type TableColumn,
  type TableSize,
} from '@zarr20/rakit-ui';
import { Search, ExternalLink, Activity, Play, Layers, BookOpen } from 'lucide-react';
import { PlaygroundHeader } from '../../shared/components/PlaygroundHeader';
import { CodeBlock } from '../../shared/components/CodeBlock';
import { PropsTable } from '../../shared/components/PropsTable';
import { TABLE_PROPS } from './data/tableProps';

interface ServiceRecord {
  id: string;
  name: string;
  route: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  status: 'operational' | 'degraded' | 'outage';
  latency: number;
}

export function TableFeature() {
  const [size, setSize] = useState<TableSize>('md');
  const [striped, setStriped] = useState(true);
  const [bordered, setBordered] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [useSkeleton, setUseSkeleton] = useState(true);
  const [enableSelection, setEnableSelection] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>(['1', '3']);
  const [isEmpty, setIsEmpty] = useState(false);
  const [search, setSearch] = useState('');

  const rawData: ServiceRecord[] = [
    { id: '1', name: 'Auth Gateway', route: '/api/v1/auth', method: 'POST', status: 'operational', latency: 42 },
    { id: '2', name: 'Billing Invoices', route: '/api/v1/billing', method: 'GET', status: 'operational', latency: 88 },
    { id: '3', name: 'User Directory', route: '/api/v1/users', method: 'GET', status: 'operational', latency: 31 },
    { id: '4', name: 'Webhook Dispatcher', route: '/api/v1/hooks', method: 'POST', status: 'degraded', latency: 450 },
    { id: '5', name: 'Search Engine Index', route: '/api/v1/search', method: 'GET', status: 'operational', latency: 64 },
    { id: '6', name: 'Metrics Collector', route: '/api/v1/telemetry', method: 'PUT', status: 'operational', latency: 19 },
  ];

  const filteredData = isEmpty
    ? []
    : rawData.filter(
        (r) =>
          r.name.toLowerCase().includes(search.toLowerCase()) ||
          r.route.toLowerCase().includes(search.toLowerCase())
      );

  const columns: TableColumn<ServiceRecord>[] = [
    {
      key: 'name',
      title: 'Service Name',
      sortable: true,
      render: (record) => (
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            <Activity className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-xs sm:text-sm">{record.name}</div>
            <div className="text-[11px] font-mono text-slate-400">ID: {record.id}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'route',
      title: 'Endpoint Route',
      render: (record) => (
        <code className="font-mono text-xs text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
          {record.route}
        </code>
      ),
    },
    {
      key: 'method',
      title: 'Method',
      width: '100px',
      align: 'center',
      render: (record) => (
        <Badge
          variant={
            record.method === 'GET'
              ? 'primary'
              : record.method === 'POST'
              ? 'success'
              : record.method === 'PUT'
              ? 'warning'
              : 'danger'
          }
          size="xs"
        >
          {record.method}
        </Badge>
      ),
    },
    {
      key: 'latency',
      title: 'Latency',
      sortable: true,
      align: 'right',
      render: (record) => (
        <span
          className={`font-mono text-xs font-semibold ${
            record.latency > 200 ? 'text-amber-700' : 'text-emerald-700'
          }`}
        >
          {record.latency} ms
        </span>
      ),
    },
    {
      key: 'status',
      title: 'Health',
      align: 'center',
      render: (record) => (
        <Badge
          variant={
            record.status === 'operational'
              ? 'success'
              : record.status === 'degraded'
              ? 'warning'
              : 'danger'
          }
          size="xs"
        >
          {record.status}
        </Badge>
      ),
    },
    {
      key: 'actions',
      title: '',
      align: 'right',
      render: () => (
        <Button variant="ghost" size="xs" rightIcon={<ExternalLink className="w-3 h-3" />}>
          Logs
        </Button>
      ),
    },
  ];

  const sizesList: TableSize[] = ['sm', 'md', 'lg'];

  const generateCode = () => {
    return `<Table<ServiceRecord>
  data={services}
  columns={columns}
  size="${size}"
  striped={${striped}}
  bordered={${bordered}}
  isLoading={${isLoading}}
  skeletonRows={${isLoading && useSkeleton ? 5 : 0}}
  rowKey={(record) => record.id}
  ${enableSelection ? `rowSelection={{
    selectedRowKeys: [${selectedKeys.map(k => `'${k}'`).join(', ')}],
    onChange: (keys) => setSelectedKeys(keys),
  }}` : ''}
/>`;
  };

  return (
    <div className="space-y-12">
      <PlaygroundHeader
        title="Data Table"
        tagline="High-performance data table featuring column sorting, sticky headers, multi-row selection, skeleton loading, zebra striping, and density controls."
        badge="Data Display"
        importStatement="import { Table, DataTable } from '@zarr20/rakit-ui';"
      />

      {/* Section 1: Interactive Playground */}
      <section id="playground" className="space-y-6 scroll-mt-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Interactive Data Table Sandbox
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#playground</span>
        </div>

        {/* Controls Bar */}
        <div className="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 flex flex-wrap items-center justify-between gap-4">
          {/* Search Input using rakit TextField */}
          <div className="flex-1 min-w-[200px] max-w-sm">
            <TextField
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
              placeholder="Filter service name or endpoint route..."
              leftIcon={<Search className="w-4 h-4 text-slate-400" />}
              size="sm"
            />
          </div>

          {/* Density Picker using rakit Button */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Density:</span>
            {sizesList.map((s) => (
              <Button
                key={s}
                variant={size === s ? 'primary' : 'outline'}
                size="xs"
                onClick={() => setSize(s)}
                className="font-mono uppercase"
              >
                {s}
              </Button>
            ))}
          </div>

          <div className="flex items-center flex-wrap gap-3">
            <Checkbox
              label="Row Selection"
              checked={enableSelection}
              onChange={setEnableSelection}
              size="sm"
            />
            <Checkbox
              label="Striped"
              checked={striped}
              onChange={setStriped}
              size="sm"
            />
            <Checkbox
              label="Bordered"
              checked={bordered}
              onChange={setBordered}
              size="sm"
            />
            <Checkbox
              label="isLoading"
              checked={isLoading}
              onChange={setIsLoading}
              size="sm"
            />
            {isLoading && (
              <Checkbox
                label="Skeleton Rows"
                checked={useSkeleton}
                onChange={setUseSkeleton}
                size="sm"
              />
            )}
            <Checkbox
              label="Empty"
              checked={isEmpty}
              onChange={setIsEmpty}
              size="sm"
            />
          </div>
        </div>

        {/* Selection Status Bar */}
        {enableSelection && selectedKeys.length > 0 && (
          <div className="px-4 py-2.5 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-center justify-between gap-3 text-xs text-emerald-950">
            <div className="flex items-center gap-2">
              <Badge variant="success" size="sm">
                {selectedKeys.length} Selected
              </Badge>
              <span className="font-medium text-slate-600">
                of {filteredData.length} total rows.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="xs"
                onClick={() => setSelectedKeys([])}
              >
                Reset Selection
              </Button>
              <Button
                variant="primary"
                size="xs"
                onClick={() => alert(`Processing ${selectedKeys.length} records.`)}
              >
                Execute Selected Action
              </Button>
            </div>
          </div>
        )}

        {/* Table Container */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white">
          <Table<ServiceRecord>
            data={filteredData}
            columns={columns}
            size={size}
            striped={striped}
            bordered={bordered}
            isLoading={isLoading}
            skeletonRows={isLoading && useSkeleton ? 5 : 0}
            rowSelection={
              enableSelection
                ? {
                    selectedRowKeys: selectedKeys,
                    onChange: setSelectedKeys,
                  }
                : undefined
            }
            rowKey={(record) => record.id}
          />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-500">Table Code Example:</span>
          <CodeBlock code={generateCode()} />
        </div>

      </section>

      {/* Section 2: Examples & Density Comparison */}
      <section id="examples" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              Showcase & Density Comparison
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#examples</span>
        </div>

        <div className="space-y-8">
          <div
            id="compact-density"
            data-toc-id="compact-density"
            data-toc-title="Compact Density Table"
            data-toc-level="2"
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Compact Density Table (size="sm")
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Ideal for analytics dashboards or panels with dense row volume requiring efficient vertical space.
                </p>
              </div>
              <Badge variant="default" size="xs">
                Compact Density
              </Badge>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white">
              <Table<ServiceRecord>
                data={rawData.slice(0, 3)}
                columns={columns}
                size="sm"
                striped
                bordered
                rowKey={(record) => `compact-${record.id}`}
              />
            </div>
          </div>

          <div
            id="table-features"
            data-toc-id="table-features"
            data-toc-title="Table Architecture Features"
            data-toc-level="2"
            className="space-y-3 p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50"
          >
            <h4 className="text-xs font-mono font-semibold uppercase text-slate-600">
              Primary Features of Data Table Architecture
            </h4>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Click column headers (Service Name, Latency) for bi-directional sorting (ASC / DESC).</li>
              <li>Sticky left/right column pin support for wide tables with horizontal scroll.</li>
              <li>Custom cell format rendering using any components (Badge, Icon, Button).</li>
              <li>Automatic integration with EmptyState when the data array is empty.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: API Reference */}
      <section id="props" className="space-y-6 scroll-mt-6 pt-10 border-t border-slate-200/80">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-base font-display font-bold text-slate-900">
              API Reference & Props
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">#props</span>
        </div>

        <div className="space-y-4">
          <PropsTable props={TABLE_PROPS} />
        </div>
      </section>
    </div>
  );
}
