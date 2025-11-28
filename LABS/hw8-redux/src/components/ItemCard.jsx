import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} alt="" />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
    </div>
  );
};

export default ItemCard;
