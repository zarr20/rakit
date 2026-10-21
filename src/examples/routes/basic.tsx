export const routesBasicCode = `import { useState } from "react";
import { Button, Card, Badge } from "@zarr20/rakit-ui";
import { Home, User, Settings, ArrowRight } from "lucide-react";
import "@zarr20/rakit-ui/styles.css";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  return (
    <div style={{ padding: "2rem 1.5rem", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0f172a" }}>
          Simulasi Navigasi Router
        </h2>
        <Badge variant="primary" size="sm">rakit-routes</Badge>
      </div>

      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        Simulasi navigasi halaman berbasis rute file-system.
      </p>

      {/* Nav Bar */}
      <div style={{ display: "flex", gap: "0.5rem", padding: "0.5rem", backgroundColor: "#f1f5f9", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
        <Button
          variant={currentPath === "/" ? "primary" : "ghost"}
          size="sm"
          leftIcon={<Home style={{ width: "0.875rem", height: "0.875rem" }} />}
          onClick={() => setCurrentPath("/")}
        >
          Beranda
        </Button>
        <Button
          variant={currentPath === "/profile" ? "primary" : "ghost"}
          size="sm"
          leftIcon={<User style={{ width: "0.875rem", height: "0.875rem" }} />}
          onClick={() => setCurrentPath("/profile")}
        >
          Profil
        </Button>
        <Button
          variant={currentPath === "/settings" ? "primary" : "ghost"}
          size="sm"
          leftIcon={<Settings style={{ width: "0.875rem", height: "0.875rem" }} />}
          onClick={() => setCurrentPath("/settings")}
        >
          Pengaturan
        </Button>
      </div>

      {/* Route Content */}
      <Card variant="default" padding="large">
        <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748b", marginBottom: "0.5rem" }}>
          Rute Aktif: <span style={{ color: "#0284c7", fontWeight: 600 }}>{currentPath}</span>
        </div>

        {currentPath === "/" && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.5rem" }}>
              Halaman Beranda
            </h3>
            <p style={{ color: "#475569", fontSize: "0.875rem", marginBottom: "1rem" }}>
              Selamat datang di dashboard Rakit Ecosystem. Komponen router mendeteksi halaman otomatis.
            </p>
            <Button
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight style={{ width: "0.875rem", height: "0.875rem" }} />}
              onClick={() => setCurrentPath("/profile")}
            >
              Lihat Profil Pengguna
            </Button>
          </div>
        )}

        {currentPath === "/profile" && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.5rem" }}>
              Halaman Profil
            </h3>
            <p style={{ color: "#475569", fontSize: "0.875rem", marginBottom: "1rem" }}>
              Informasi identitas akun dan hak akses pengguna.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setCurrentPath("/")}>
              Kembali ke Beranda
            </Button>
          </div>
        )}

        {currentPath === "/settings" && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.5rem" }}>
              Halaman Pengaturan
            </h3>
            <p style={{ color: "#475569", fontSize: "0.875rem" }}>
              Konfigurasi preferensi sistem, tema, dan integrasi API.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
`;
