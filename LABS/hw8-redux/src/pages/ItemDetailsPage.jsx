import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../features/items/itemsSlice";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedItem, loadingItem, errorItem } = useSelector(
    (s) => s.items
  );

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [id, dispatch]);

  if (loadingItem) return <p>Loading...</p>;
  if (errorItem) return <p style={{ color: "red" }}>{errorItem}</p>;
  if (!selectedItem) return <p>Not found</p>;

  return (
    <div>
      <h1>{selectedItem.title}</h1>
      <p>{selectedItem.description}</p>
    </div>
  );
};

export default ItemDetailsPage;
