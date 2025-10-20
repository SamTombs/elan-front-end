import { useState, useEffect } from "react";
import basketService from "../services/basketService";
export default function Basket() {
  const [basketItem, setBasketItem] = useState([]);

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

  useEffect(() => {
    showBasket();
  }, []);

  const removeFromBasket = async (itemId) => {
    try {
      await basketService.removeFromBasket(itemId);
      showBasket();
    } catch (error) {
      console.error("Error removing from basket:", error);
    }
  };
  const totalPrice = basketItem.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h1>Basket</h1>
      <p>Total Price: ${totalPrice}</p>
      {!Array.isArray(basketItem) || basketItem.length === 0 ? (
        <p>Your basket is empty</p>
      ) : (
        basketItem.map((item) => (
          <section className="flex flex-row">
            <div key={item.id}>
              <h2>{item.product?.name || "Unknown Product"}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.product.price}</p>
              <img
                src={`http://localhost:8000${item.product.product_image}`}
                alt={item.product.name}
              />
              
            </div>
            <button onClick={() => removeFromBasket(item.id)}>Remove</button>
          </section>
        ))
      )}
    </div>
  );
}
