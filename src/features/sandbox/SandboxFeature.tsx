import { useState } from 'react';
import {
  Button,
  Badge,
  Card,
  TextField,
  Select,
  Table,
  CodeEditor,
  toast,
  Grid,
  type TableColumn,
} from '@zarr20/rakit-ui';
import {
  Send,
  Trash2,
  Server,
} from 'lucide-react';

interface HistoryItem {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  statusCode: number;
  time: string;
  duration: number;
}

export function SandboxFeature() {
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  const [endpoint, setEndpoint] = useState('/api/v1/users');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeJson, setActiveJson] = useState(
    JSON.stringify(
      {
        status: 'success',
        statusCode: 200,
        data: [
          { id: 1, name: 'Dzarr Al Ghifari', role: 'Architect', active: true },
          { id: 2, name: 'Sarah Jenkins', role: 'Designer', active: true },
          { id: 3, name: 'Alex Rivera', role: 'DevOps', active: false },
        ],
        metadata: {
          page: 1,
          perPage: 10,
          total: 3,
          latency: '24ms',
        },
      },
      null,
      2
    )
  );

  const [history, setHistory] = useState<HistoryItem[]>([
    { id: '1', method: 'GET', endpoint: '/api/v1/users', statusCode: 200, time: '21:30:12', duration: 24 },
    { id: '2', method: 'POST', endpoint: '/api/v1/auth/token', statusCode: 201, time: '21:28:40', duration: 68 },
    { id: '3', method: 'GET', endpoint: '/api/v1/health', statusCode: 200, time: '21:25:00', duration: 12 },
  ]);

  const handleSendRequest = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = method === 'POST' ? 201 : method === 'DELETE' ? 204 : 200;
      const duration = Math.floor(Math.random() * 80) + 15;
      const now = new Date().toLocaleTimeString('id-ID');

      const newItem: HistoryItem = {
        id: String(Date.now()),
        method,
        endpoint,
        statusCode: code,
        time: now,
        duration,
      };

      setHistory((prev) => [newItem, ...prev]);

      const mockResponse = {
        status: 'success',
        method,
        endpoint,
        statusCode: code,
        timestamp: new Date().toISOString(),
        payload: {
          message: `Request [${method}] ${endpoint} berhasil dieksekusi.`,
          durationMs: duration,
        },
      };

      setActiveJson(JSON.stringify(mockResponse, null, 2));

      toast.success(`Request ${method} berhasil!`, {
        description: `${endpoint} merespons dengan kode ${code} (${duration}ms)`,
      });
    }, 600);
  };

  const columns: TableColumn<HistoryItem>[] = [
    {
      key: 'method',
      title: 'Method',
      width: '90px',
      render: (r) => (
        <Badge
          variant={r.method === 'GET' ? 'info' : r.method === 'POST' ? 'success' : r.method === 'PUT' ? 'warning' : 'danger'}
          size="xs"
        >
          {r.method}
        </Badge>
      ),
    },
    {
      key: 'endpoint',
      title: 'Endpoint',
      sortable: true,
      render: (r) => <span className="font-mono text-xs text-slate-800">{r.endpoint}</span>,
    },
    {
      key: 'statusCode',
      title: 'Status',
      align: 'center',
      render: (r) => (
        <Badge variant={r.statusCode >= 200 && r.statusCode < 300 ? 'success' : 'warning'} size="xs">
          {r.statusCode}
        </Badge>
      ),
    },
    {
      key: 'duration',
      title: 'Latency',
      align: 'right',
      render: (r) => <span className="font-mono text-xs text-emerald-700 font-semibold">{r.duration}ms</span>,
    },
    {
      key: 'time',
      title: 'Waktu',
      align: 'right',
      render: (r) => <span className="font-mono text-[11px] text-slate-500">{r.time}</span>,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            Live Interactive Sandbox
          </h1>
          <Badge variant="primary" size="sm">
            Live Preview
          </Badge>
        </div>
        <p className="text-slate-600 text-sm sm:text-base">
          Uji coba integrasi nyata: kirim HTTP request simulasi, pantau riwayat tabel log real-time, dan telusuri respon JSON dalam editor visual!
        </p>
      </div>

      {/* Simulator Request Console */}
      <Card variant="default" padding="large">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-display font-bold text-slate-900">
                API Endpoint Dispatcher
              </h2>
            </div>
            <Badge variant="primary" size="xs">
              Simulation Mode
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            {/* Method selector */}
            <div className="w-36 shrink-0">
              <Select
                options={[
                  { label: 'GET', value: 'GET' },
                  { label: 'POST', value: 'POST' },
                  { label: 'PUT', value: 'PUT' },
                  { label: 'DELETE', value: 'DELETE' },
                ]}
                value={method}
                onChange={(val: any) => setMethod(val)}
              />
            </div>

            {/* Endpoint Input */}
            <div className="flex-1">
              <TextField
                value={endpoint}
                onChange={(e: any) => setEndpoint(e.target.value)}
                placeholder="/api/v1/..."
                clearable
                onClear={() => setEndpoint('')}
              />
            </div>

            {/* Submit Button */}
            <Button
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              onClick={handleSendRequest}
              rightIcon={<Send className="w-4 h-4" />}
            >
              Kirim Request
            </Button>
          </div>
        </div>
      </Card>

      {/* Split Grid: JSON Tree Response & Live History Table */}
      <Grid cols={{ base: 1, lg: 12 }} gap="lg" align="start">
        {/* Left: CodeEditor Response */}
        <Grid.Col span={{ base: 12, lg: 6 }} className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider">
              Respon JSON (CodeEditor)
            </span>
            <span className="text-[11px] font-mono text-emerald-700 font-bold">HTTP 200 OK</span>
          </div>

          <Card padding="none">
            <CodeEditor
              value={activeJson}
              onChange={setActiveJson}
              language="json"
              height="360px"
              showToolbar
              showViewToggle
              showFormatButton
              showCopyButton
              title="api-response.json"
              theme="light"
            />
          </Card>
        </Grid.Col>

        {/* Right: History Table */}
        <Grid.Col span={{ base: 12, lg: 6 }} className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-500 font-semibold tracking-wider">
              Log Riwayat Request (Table)
            </span>
            <Button
              variant="subtle"
              size="xs"
              onClick={() => setHistory([])}
              leftIcon={<Trash2 className="w-3.5 h-3.5" />}
            >
              Hapus Log
            </Button>
          </div>

          <Card padding="none">
            <Table<HistoryItem>
              data={history}
              columns={columns}
              size="sm"
              striped
              rowKey={(r) => r.id}
              emptyTitle="Belum Ada Riwayat Request"
              emptyMessage="Klik tombol 'Kirim Request' di atas untuk memicu pemanggilan API simulasi."
            />
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}
