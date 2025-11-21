export default function ErrorBox({ message = "Something went wrong." }) {
  return (
    <div style={{
      padding: "12px 14px",
      borderRadius: 10,
      background: "#ffeaea",
      color: "#7a0000",
      border: "1px solid #ffb3b3",
      margin: "10px 0"
    }}>
      {message}
    </div>
  );
}
