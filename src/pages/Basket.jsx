import { useState, useEffect } from "react";
import basketService from "../services/basketService";
export default function Basket() {
  const [basketItem, setBasketItem] = useState([]);

  const showBasket = async () => {
    try {
      const basketData = await basketService.getBasketItems();
      if (Array.isArray(basketData)) {
        setBasketItem(basketData);
      } else if (basketData && Array.isArray(basketData.items)) {
        setBasketItem(basketData.items);
      } else {
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

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await basketService.updateBasketItem(itemId, newQuantity);
      showBasket();
    } catch (error) {
      console.error("Error updating basket item:", error);
    }
  };

  const totalPrice = basketItem.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-500 to-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Your Basket
          </h1>
          <p className="text-lg text-gray-600">Review and manage your items</p>
        </div>

        {!Array.isArray(basketItem) || basketItem.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4"></div>
            <p className="text-xl text-gray-600">Your basket is empty</p>
            <p className="text-gray-500 mt-2">Add some items to get started!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {basketItem.map((item) => (
              <section 
                key={item.id} 
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden">
                    <img
                      src={`http://localhost:8000${item.product.product_image}`}
                      alt={item.product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {item.product?.name || "Unknown Product"}
                    </h2>
                    <div className="flex items-center gap-6 text-gray-600 mb-3">
                      <p className="flex items-center gap-1">
                        <span className="font-semibold">Price:</span>
                        <span className="text-xl font-bold text-gray-600">${item.product.price}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-semibold text-gray-700">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-lg font-semibold min-w-[60px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromBasket(item.id)}
                    className="flex-shrink-0 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Remove
                  </button>
                </div>
              </section>
            ))}

            <div className="bg-gray-600 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg opacity-90 mb-1">Total</p>
                  <p className="text-4xl font-bold">${totalPrice.toFixed(2)}</p>
                </div>
                <button className="bg-white text-gray-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
