export const inputBasicCode = `import { useState } from "react";
import { TextField, Select, Switch } from "@zarr20/rakit-ui";
import "@zarr20/rakit-ui/styles.css";

export default function App() {
  const [name, setName] = useState("Rakit Dev");
  const [role, setRole] = useState("admin");
  const [notifications, setNotifications] = useState(true);

  return (
    <div style={{ padding: "2rem 1.5rem", maxWidth: "560px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0f172a", marginBottom: "0.5rem" }}>
        Input Controls
      </h2>
      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        TextField, Select, and Switch integrated with uniform size hierarchy.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <TextField
          label="Full Name"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          helperText="The name that will be displayed on your profile."
        />

        <Select
          label="Access Permission / Role"
          value={role}
          onChange={(val) => setRole(String(val))}
          options={[
            { label: "Administrator", value: "admin" },
            { label: "Editor", value: "editor" },
            { label: "Viewer", value: "viewer" },
          ]}
        />

        <div style={{ paddingTop: "0.5rem" }}>
          <Switch
            label="Enable Real-Time Notifications"
            checked={notifications}
            onChange={(checked) => setNotifications(checked)}
          />
        </div>

        <div style={{ marginTop: "1rem", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "0.75rem", border: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            State Preview:
          </div>
          <div style={{ fontSize: "0.875rem", color: "#334155" }}>
            <strong>Name:</strong> {name || "-"} | <strong>Role:</strong> {role} | <strong>Notifications:</strong> {notifications ? "Enabled" : "Disabled"}
          </div>
        </div>
      </div>
    </div>
  );
}
`;
