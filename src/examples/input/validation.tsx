export const inputValidationCode = `import { useState } from "react";
import { TextField, Button } from "@zarr20/rakit-ui";
import { CheckCircle2 } from "lucide-react";
import "@zarr20/rakit-ui/styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Email validation
  const isEmailValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  const emailError = email && !isEmailValid ? "Invalid email format (must contain @ and a domain)" : undefined;

  // Password validation
  const passwordError = password && password.length < 8 ? "Password must be at least 8 characters long" : undefined;

  const canSubmit = isEmailValid && password.length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "2rem 1.5rem", maxWidth: "520px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#0f172a", marginBottom: "0.5rem" }}>
        Form Validation
      </h2>
      <p style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        Live input validation with instant visual error feedback.
      </p>

      {submitted ? (
        <div style={{ padding: "1.5rem", backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "0.75rem", textAlign: "center" }}>
          <CheckCircle2 style={{ width: "2.5rem", height: "2.5rem", color: "#16a34a", margin: "0 auto 0.75rem" }} />
          <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#15803d", marginBottom: "0.25rem" }}>
            Validation Successful!
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#166534", marginBottom: "1rem" }}>
            Account details for <strong>{email}</strong> are ready to submit.
          </p>
          <Button variant="outline" size="sm" onClick={() => { setSubmitted(false); setEmail(""); setPassword(""); }}>
            Reset Form
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <TextField
            label="Email Address"
            type="email"
            placeholder="name@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={!emailError ? "Use a valid work or personal email." : undefined}
          />

          <TextField
            label="Password"
            type="password"
            placeholder="Minimum 8 characters..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            helperText={!passwordError ? "Use a combination of letters and numbers." : undefined}
          />

          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            disabled={!canSubmit}
          >
            Register Account
          </Button>
        </form>
      )}
    </div>
  );
}
`;
