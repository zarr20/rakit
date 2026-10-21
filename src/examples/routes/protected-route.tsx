export const routesProtectedRouteCode = `import { useState } from "react";
import { Button, Card, Badge } from "@zarr20/rakit-ui";
import { ShieldCheck, ShieldAlert, Lock, Unlock } from "lucide-react";
import "@zarr20/rakit-ui/styles.css";

export default function App() {
  const [role, setRole] = useState<"guest" | "user" | "admin">("guest");

  const requiredRole = "admin";
  const hasAccess = role === requiredRole;

  return (
    <div style={{ padding: "2rem 1.5rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0f172a" }}>
          Protected Route (RBAC)
        </h2>
        <Badge variant={hasAccess ? "success" : "danger"} size="sm">
          {hasAccess ? "Akses Diberikan" : "Akses Ditolak"}
        </Badge>
      </div>

      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        Simulasi RouteGuard berbasis Role-Based Access Control (RBAC).
      </p>

      {/* Role Switcher */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Simulasikan Peran Pengguna Aktif:
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Button
            variant={role === "guest" ? "primary" : "outline"}
            size="sm"
            onClick={() => setRole("guest")}
          >
            Tamu (Guest)
          </Button>
          <Button
            variant={role === "user" ? "primary" : "outline"}
            size="sm"
            onClick={() => setRole("user")}
          >
            Member (User)
          </Button>
          <Button
            variant={role === "admin" ? "primary" : "outline"}
            size="sm"
            onClick={() => setRole("admin")}
          >
            Administrator
          </Button>
        </div>
      </div>

      {/* Protected Area Card */}
      <Card
        variant="default"
        padding="large"
        style={{
          borderColor: hasAccess ? "#bbf7d0" : "#fecaca",
          backgroundColor: hasAccess ? "#f0fdf4" : "#fef2f2",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
          {hasAccess ? (
            <ShieldCheck style={{ width: "2rem", height: "2rem", color: "#16a34a", flexShrink: 0 }} />
          ) : (
            <ShieldAlert style={{ width: "2rem", height: "2rem", color: "#dc2626", flexShrink: 0 }} />
          )}

          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: hasAccess ? "#15803d" : "#991b1b", marginBottom: "0.25rem" }}>
              {hasAccess ? "Area Khusus Administrator Terbuka" : "403 Forbidden: Halaman Terproteksi"}
            </h3>
            <p style={{ fontSize: "0.875rem", color: hasAccess ? "#166534" : "#7f1d1d", marginBottom: "1rem" }}>
              {hasAccess
                ? "Selamat datang Admin! Anda memiliki izin penuh untuk mengelola database dan pengaturan server."
                : "Halaman ini memerlukan peran 'admin'. Peran Anda saat ini adalah: '" + role + "'."}
            </p>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontFamily: "monospace", color: hasAccess ? "#166534" : "#991b1b" }}>
              {hasAccess ? <Unlock style={{ width: "0.875rem", height: "0.875rem" }} /> : <Lock style={{ width: "0.875rem", height: "0.875rem" }} />}
              <span>Rule: meta.roles = ['admin']</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
`;
