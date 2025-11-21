import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as itemsService from "../itemsService";
import Spinner from "../components/Spinner.jsx";
import ErrorBox from "../components/ErrorBox.jsx";

export default function ItemDetails() {
  const { id } = useParams();
  const nav = useNavigate();

  const [item, setItem] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setStatus("loading");
    setError("");

    itemsService
      .getById(id)
      .then((data) => {
        if (ignore) return;
        setItem(data);
        setStatus("success");
      })
      .catch((e) => {
        if (ignore) return;
        setError(e.message || "Failed to load");
        setStatus("error");
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (status === "loading") return <Spinner />;
  if (status === "error") return <ErrorBox message={error} />;

  if (!item)
    return (
      <div>
        <p>Not found.</p>
        <button onClick={() => nav(-1)} style={btnStyle}>
          Back
        </button>
      </div>
    );

  return (
    <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
      <div>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{ width: "100%", borderRadius: 12, border: "1px solid #eee" }}
        />
      </div>

      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>

        <ul style={{ lineHeight: 1.7 }}>
          <li><b>Category:</b> {item.category}</li>
          <li><b>Brand:</b> {item.brand}</li>
          <li><b>Price:</b> ${item.price}</li>
          <li><b>Rating:</b> {item.rating}</li>
          <li><b>Stock:</b> {item.stock}</li>
        </ul>

        <button onClick={() => nav(-1)} style={btnStyle}>
          Back
        </button>
      </div>
    </section>
  );
}

const btnStyle = {
  padding: "10px 12px",
  borderRadius: 10,
  background: "#111",
  color: "white",
  border: "none",
  cursor: "pointer",
};
