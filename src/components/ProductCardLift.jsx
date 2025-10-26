import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import basketService from "../services/basketService";

const ProductCardLift = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useContext(UserContext);

  const handleAddToBasket = async () => {
    if (!user) {
      setMessage("Please login to add items to basket");
      return;
    }

    setAdding(true);
    try {
      await basketService.addToBasket(product.id, quantity);
      setMessage("Added to basket!");
    } catch (error) {
      setMessage("Failed to add to basket");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="bg-slate-900 border-2 border-amber-600 rounded-lg overflow-hidden shadow-2xl hover:shadow-amber-900/50 transition-shadow duration-300 max-w-sm w-full">
      {product.product_image && (
        <div className="h-64 flex items-center justify-center bg-slate-800 relative">
          <img
            src={`http://localhost:8000${product.product_image}`}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
        </div>
      )}

      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-wide">Lift Collection</span>
          <span className="text-2xl font-bold text-amber-400">${product.price}</span>
        </div>
        
        <h4 className="text-xl font-semibold text-white">{product.name}</h4>
        
        {product.sizes && (
          <p className="text-sm text-slate-400">Sizes: {product.sizes}</p>
        )}
        
        {user && (
          <div className="space-y-4 pt-4 border-t border-amber-600/30">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-slate-300">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 px-3 py-2 border-2 border-amber-600 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-slate-800 text-white"
              />
            </div>
            <button 
              onClick={handleAddToBasket} 
              disabled={adding}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:bg-amber-800 disabled:cursor-not-allowed shadow-lg hover:shadow-amber-600/50 transform hover:-translate-y-0.5 transition-all"
            >
              {adding ? "Adding..." : "Add to Basket"}
            </button>
            {message && (
              <div className={`text-center text-sm py-2 rounded ${message.includes('Added') ? 'text-amber-300 bg-amber-900/30' : 'text-red-400 bg-red-900/30'}`}>
                {message}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCardLift;
