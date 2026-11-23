import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100dvh",
        background: "#0b0c10",
        color: "#f3f4f7",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>404</h1>
        <p style={{ color: "#858b9a", marginBottom: "1.5rem" }}>
          This page could not be found.
        </p>
        <Link
          href="/"
          style={{
            color: "#7aa2ff",
            textDecoration: "none",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "8px 16px",
            borderRadius: "8px",
          }}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
