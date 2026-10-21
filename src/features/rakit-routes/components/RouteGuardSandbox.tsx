import { useState } from 'react';
import {
  evaluateGuard,
  RouteGuard,
  type RouteMeta,
  type AuthState,
} from '@zarr20/rakit-routes/client';
import { Badge, Card, Button, Checkbox, Tabs, Grid, CodeViewer } from '@zarr20/rakit-ui';
import { ShieldCheck, ShieldAlert, Lock, UserCheck, AlertCircle } from 'lucide-react';

export function RouteGuardSandbox() {
  // Current user auth state
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRoles, setSelectedRoles] = useState<string[]>(['editor']);
  const [selectedPerms, setSelectedPerms] = useState<string[]>(['posts.create']);

  // Target route meta
  const [isProtected, setIsProtected] = useState(true);
  const [isGuestOnly, setIsGuestOnly] = useState(false);
  const [requiredRole, setRequiredRole] = useState<'none' | 'admin' | 'editor' | 'finance'>('admin');
  const [requiredPerm, setRequiredPerm] = useState<'none' | 'users.delete' | 'posts.create'>('none');

  const availableRoles = ['admin', 'editor', 'viewer', 'finance'];
  const availablePerms = ['posts.create', 'posts.delete', 'users.read', 'users.delete', 'billing.write'];

  const handleToggleRole = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleTogglePerm = (perm: string) => {
    setSelectedPerms((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const currentAuth: AuthState = {
    isLogin,
    roles: selectedRoles,
    permissions: selectedPerms,
    user: isLogin ? { name: 'Dzarr Al Ghifari', email: 'dzarr@rakit.dev' } : undefined,
  };

  const currentMeta: RouteMeta = {
    protected: isProtected,
    guestOnly: isGuestOnly,
    roles: requiredRole !== 'none' ? [requiredRole] : undefined,
    permissions: requiredPerm !== 'none' ? [requiredPerm] : undefined,
  };

  const evaluation = evaluateGuard(currentMeta, currentAuth, {
    fallbackRedirect: '/login',
    forbiddenRedirect: '/403',
    guestRedirect: '/dashboard',
  });

  const sampleSnippet = `import { RouteGuard } from '@zarr20/rakit-routes/client';

const auth = ${JSON.stringify(currentAuth, null, 2)};
const meta = ${JSON.stringify(currentMeta, null, 2)};

<RouteGuard
  meta={meta}
  auth={auth}
  fallback={(redirectUrl) => (
    <div className="p-4 bg-rose-50 text-rose-800 rounded-xl border border-rose-200">
      Akses Ditolak! Redirect ke: {redirectUrl}
    </div>
  )}
>
  <AdminDashboard />
</RouteGuard>`;

  return (
    <div className="space-y-6">
      {/* Intro info */}
      <Card variant="default" padding="large">
        <div className="space-y-3">
          <h3 className="text-base font-display font-semibold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Role-Based Access Control (RBAC) & RouteGuard</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Simulasikan izin akses pengguna berdasarkan hak peran (roles), izin khusus (permissions), atau mode guest-only (misal: halaman login tidak boleh diakses oleh pengguna yang sudah login).
          </p>
        </div>
      </Card>

      <Grid cols={{ base: 1, lg: 12 }} gap="lg" align="start">
        {/* Left: User Auth State */}
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Card variant="default" padding="large">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-700" />
                  <span>1. Status Pengguna (Auth State)</span>
                </span>
                <Checkbox
                  checked={isLogin}
                  onChange={setIsLogin}
                  label={isLogin ? 'isLogin: true' : 'isLogin: false'}
                />
              </div>

              {/* Roles of current user */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-slate-600">User Roles (Peran User)</label>
                <div className="flex flex-wrap gap-1.5">
                  {availableRoles.map((r) => (
                    <Button
                      key={r}
                      onClick={() => handleToggleRole(r)}
                      size="xs"
                      variant={selectedRoles.includes(r) ? 'primary' : 'secondary'}
                    >
                      {r}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Permissions of current user */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-medium text-slate-600">User Permissions (Hak Izin)</label>
                <div className="flex flex-wrap gap-1.5">
                  {availablePerms.map((p) => (
                    <Button
                      key={p}
                      onClick={() => handleTogglePerm(p)}
                      size="xs"
                      variant={selectedPerms.includes(p) ? 'primary' : 'secondary'}
                    >
                      {p}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Target Route Meta Requirements */}
              <div className="pt-4 border-t border-slate-200 space-y-4">
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-amber-700" />
                  <span>2. Syarat Akses Halaman (Route Meta)</span>
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <Checkbox
                    checked={isProtected}
                    onChange={setIsProtected}
                    label="protected (butuh login)"
                  />
                  <Checkbox
                    checked={isGuestOnly}
                    onChange={setIsGuestOnly}
                    label="guestOnly (hanya tamu)"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-600">Wajib Role</label>
                  <Tabs
                    items={([
                      { id: 'none', label: 'None' },
                      { id: 'admin', label: 'Admin' },
                      { id: 'editor', label: 'Editor' },
                      { id: 'finance', label: 'Finance' },
                    ])}
                    value={requiredRole}
                    onChange={(r) => setRequiredRole(r as any)}
                    variant="pills"
                    size="sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-600">Wajib Permission</label>
                  <Tabs
                    items={([
                      { id: 'none', label: 'None' },
                      { id: 'users.delete', label: 'users.delete' },
                      { id: 'posts.create', label: 'posts.create' },
                    ])}
                    value={requiredPerm}
                    onChange={(p) => setRequiredPerm(p as any)}
                    variant="pills"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </Card>
        </Grid.Col>

        {/* Right: Live Evaluation Result & RouteGuard Rendering */}
        <Grid.Col span={{ base: 12, lg: 6 }} className="space-y-4">
          {/* Evaluation result card */}
          <Card
            variant={evaluation.allowed ? 'light' : 'flat'}
            padding="large"
            className="transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                {evaluation.allowed ? (
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                ) : (
                  <ShieldAlert className="w-6 h-6 text-rose-700" />
                )}
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    Hasil Evaluasi: {evaluation.allowed ? 'AKSES DIIZINKAN' : 'AKSES DITOLAK'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    Alasan: <code className="font-mono text-slate-800 font-semibold">{evaluation.reason}</code>
                  </p>
                </div>
              </div>

              <Badge variant={evaluation.allowed ? 'success' : 'danger'} size="sm">
                {evaluation.allowed ? 'Allowed' : 'Denied'}
              </Badge>
            </div>

            {/* Live RouteGuard React Component output */}
            <div className="p-3 bg-white rounded-lg border border-slate-200">
              <RouteGuard
                meta={currentMeta}
                auth={currentAuth}
                fallback={(redirect) => (
                  <div className="flex items-center gap-2.5 text-xs text-rose-800 bg-rose-50 p-3 rounded-lg border border-rose-200">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Akses Ditolak! RouteGuard akan mengarahkan user ke <strong>{redirect}</strong></span>
                  </div>
                )}
              >
                <div className="flex items-center gap-2.5 text-xs text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Selamat datang di Halaman Rahasia Admin! Seluruh otorisasi terpenuhi.</span>
                </div>
              </RouteGuard>
            </div>
          </Card>

          <CodeViewer value={sampleSnippet} language="tsx" title="RouteGuard Usage" />
        </Grid.Col>
      </Grid>
    </div>
  );
}
