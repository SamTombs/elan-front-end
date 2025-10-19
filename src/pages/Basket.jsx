import { useState, useEffect, useContext } from "react";
import { getBasket } from "../services/basketService";
import { UserContext } from "../contexts/UserContext";

export default function Basket() {
  const [basketItem, setBasketItem] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const showBasket = async () => {
      try {
        const basketData = await getBasket(user.id || 1);
        setBasketItem(basketData);
      } catch (error) {
        console.error("Error fetching basket:", error);
      }
    };

    showBasket();
  }, [user]);

  return (
    <div>
      <h1>Basket</h1>
      {basketItem.map((item) => (
        <div key={item.id}>
          <h2>{item.product.name}</h2>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
}