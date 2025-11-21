export default function Spinner() {
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <div className="spin" />
      <p style={{ color: "#666" }}>Loading…</p>
    </div>
  );
}
