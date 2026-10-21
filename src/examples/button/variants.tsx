export const buttonVariantsCode = `import { useState } from "react";
import { Button } from "@zarr20/rakit-ui";
import { Send, Download, Trash2, ArrowRight } from "lucide-react";
import "@zarr20/rakit-ui/styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div style={{ padding: "2rem 1.5rem", maxWidth: "700px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0f172a", marginBottom: "0.5rem" }}>
        Button Variants & Sizing
      </h2>
      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        Supports uniform height scaling (xs, sm, md, lg, xl) and 10 visual variants.
      </p>

      {/* Core Variants */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#475569", marginBottom: "0.75rem", textTransform: "uppercase" }}>
          Core Variants
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger" leftIcon={<Trash2 style={{ width: "1rem", height: "1rem" }} />}>
            Delete
          </Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* Size Scale */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#475569", marginBottom: "0.75rem", textTransform: "uppercase" }}>
          Size Scale (xs - xl)
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          <Button size="xs" variant="primary">xs (28px)</Button>
          <Button size="sm" variant="primary">sm (32px)</Button>
          <Button size="md" variant="primary">md (40px)</Button>
          <Button size="lg" variant="primary">lg (44px)</Button>
          <Button size="xl" variant="primary">xl (48px)</Button>
        </div>
      </div>

      {/* Loading & Icon Slots */}
      <div>
        <h3 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#475569", marginBottom: "0.75rem", textTransform: "uppercase" }}>
          Loading & Icon Slots
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
          <Button
            variant="primary"
            isLoading={isLoading}
            onClick={simulateLoading}
            leftIcon={<Send style={{ width: "1rem", height: "1rem" }} />}
          >
            Submit Data
          </Button>
          <Button
            variant="outline"
            rightIcon={<ArrowRight style={{ width: "1rem", height: "1rem" }} />}
          >
            Continue
          </Button>
          <Button
            variant="secondary"
            leftIcon={<Download style={{ width: "1rem", height: "1rem" }} />}
          >
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
}
`;
