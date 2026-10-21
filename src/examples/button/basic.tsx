export const buttonBasicCode = `import { useState } from "react";
import { Button } from "@zarr20/rakit-ui";
import { Sparkles } from "lucide-react";
import "@zarr20/rakit-ui/styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2.5rem 1.5rem", maxWidth: "600px", margin: "0 auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#0f172a", marginBottom: "0.5rem" }}>
          Button Basic Demo
        </h2>
        <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
          Click the button below to observe state reactivity and Rakit UI styling.
        </p>
      </div>

      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <Button
          variant="primary"
          size="md"
          leftIcon={<Sparkles style={{ width: "1rem", height: "1rem" }} />}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Clicked {count} times
        </Button>

        {count > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCount(0)}
          >
            Reset Counter
          </Button>
        )}
      </div>
    </div>
  );
}
`;
