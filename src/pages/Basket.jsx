import { useState, useEffect } from "react";
import basketService from "../services/basketService";

export default function Basket() {
  const [basketItem, setBasketItem] = useState([]);

  
  useEffect(() => {
    const showBasket = async () => {
      try {
        const basketData = await basketService.getBasketItems();
        // Ensure basketData is an array
        if (Array.isArray(basketData)) {
          setBasketItem(basketData);
        } else if (basketData && Array.isArray(basketData.items)) {
          // If the API returns an object with items property
          setBasketItem(basketData.items);
        } else {
          console.log("Unexpected basket data structure:", basketData);
          setBasketItem([]);
        }
      } catch (error) {
        console.error("Error fetching basket:", error);
        setBasketItem([]);
      }
    };

    showBasket();
  }, []);

  return (
    <div>
      <h1>Basket</h1>
      {!Array.isArray(basketItem) || basketItem.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        basketItem.map((item) => (
          <div key={item.id}>
            <h2>{item.product?.name || 'Unknown Product'}</h2>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}