import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as itemsService from "../itemsService";
import Spinner from "../components/Spinner.jsx";
import ErrorBox from "../components/ErrorBox.jsx";
import Card from "../components/Card.jsx";

export default function Items() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setStatus("loading");
    setError("");

    itemsService
      .search(q)
      .then((list) => {
        if (ignore) return;
        setItems(list);
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
  }, [q]);

  const onChange = (e) => {
    const value = e.target.value;
    const next = new URLSearchParams(params);
    if (value) next.set("q", value);
    else next.delete("q");
    setParams(next, { replace: true });
  };

  return (
    <section>
      <h1>Items</h1>

      <input
        type="search"
        placeholder="Search products…"
        value={q}
        onChange={onChange}
        style={{
          width: "100%",
          maxWidth: 480,
          padding: "10px 12px",
          borderRadius: 10,
          border: "1px solid #ddd",
          marginBottom: 14,
        }}
      />

      {status === "loading" && <Spinner />}
      {status === "error" && <ErrorBox message={error} />}

      {status === "success" && items.length === 0 && <p>No results.</p>}

      {status === "success" && items.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 14,
          }}
        >
          {items.map((it) => (
            <Card key={it.id} item={it} />
          ))}
        </div>
      )}
    </section>
  );
}
