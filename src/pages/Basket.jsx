import { useState, useEffect } from "react";
import basketService from "../services/basketService";

export default function Basket() {
  const [basketItem, setBasketItem] = useState([]);

  
  useEffect(() => {
    const showBasket = async () => {
      try {
        const basketData = await basketService.getBasket();
        setBasketItem(basketData || []);
      } catch (error) {
        console.error("Error fetching basket:", error);
      }
    };

    showBasket();
  }, []);

  return (
    <div>
      <h1>Basket</h1>
      {basketItem.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        basketItem.map((item) => (
          <div key={item.id}>
            <h2>{item.product.name}</h2>
            <p>{item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}