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
          Router Navigation Simulation
        </h2>
        <Badge variant="primary" size="sm">rakit-routes</Badge>
      </div>

      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        Simulated page navigation powered by file-system routing.
      </p>

      {/* Nav Bar */}
      <div style={{ display: "flex", gap: "0.5rem", padding: "0.5rem", backgroundColor: "#f1f5f9", borderRadius: "0.5rem", marginBottom: "1.5rem" }}>
        <Button
          variant={currentPath === "/" ? "primary" : "ghost"}
          size="sm"
          leftIcon={<Home style={{ width: "0.875rem", height: "0.875rem" }} />}
          onClick={() => setCurrentPath("/")}
        >
          Home
        </Button>
        <Button
          variant={currentPath === "/profile" ? "primary" : "ghost"}
          size="sm"
          leftIcon={<User style={{ width: "0.875rem", height: "0.875rem" }} />}
          onClick={() => setCurrentPath("/profile")}
        >
          Profile
        </Button>
        <Button
          variant={currentPath === "/settings" ? "primary" : "ghost"}
          size="sm"
          leftIcon={<Settings style={{ width: "0.875rem", height: "0.875rem" }} />}
          onClick={() => setCurrentPath("/settings")}
        >
          Settings
        </Button>
      </div>

      {/* Route Content */}
      <Card variant="default" padding="large">
        <div style={{ fontSize: "0.75rem", fontFamily: "monospace", color: "#64748b", marginBottom: "0.5rem" }}>
          Active Route: <span style={{ color: "#0284c7", fontWeight: 600 }}>{currentPath}</span>
        </div>

        {currentPath === "/" && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.5rem" }}>
              Home Page
            </h3>
            <p style={{ color: "#475569", fontSize: "0.875rem", marginBottom: "1rem" }}>
              Welcome to Rakit Ecosystem. The router resolves file-system routes automatically.
            </p>
            <Button
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight style={{ width: "0.875rem", height: "0.875rem" }} />}
              onClick={() => setCurrentPath("/profile")}
            >
              View User Profile
            </Button>
          </div>
        )}

        {currentPath === "/profile" && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.5rem" }}>
              Profile Page
            </h3>
            <p style={{ color: "#475569", fontSize: "0.875rem", marginBottom: "1rem" }}>
              Account identity details and user permissions.
            </p>
            <Button variant="secondary" size="sm" onClick={() => setCurrentPath("/")}>
              Back to Home
            </Button>
          </div>
        )}

        {currentPath === "/settings" && (
          <div>
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", marginBottom: "0.5rem" }}>
              Settings Page
            </h3>
            <p style={{ color: "#475569", fontSize: "0.875rem" }}>
              Configure system preferences, themes, and API integrations.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
`;
