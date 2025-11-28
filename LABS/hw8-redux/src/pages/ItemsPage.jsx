import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { fetchItems } from "../features/items/itemsSlice";
import "./ItemsPage.css";

const ItemsPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const { list, loadingList, errorList } = useSelector((s) => s.items);

  useEffect(() => {
    const q = searchParams.get("q") || "";
    dispatch(fetchItems(q));
  }, [dispatch, searchParams]);

  if (loadingList) return <h2>Loading...</h2>;
  if (errorList) return <h2 style={{ color: "red" }}>Error: {errorList}</h2>;

  return (
    <div className="items-container">
      <h1>Items</h1>

      <div className="items-grid">
        {list.map((item) => (
          <Link key={item.id} to={`/items/${item.id}`} className="item-box">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
