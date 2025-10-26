import React, { useState, useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import basketService from "../services/basketService";

const ProductCardExplore = ({ product }) => {
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
      <div className="bg-stone-100 border-2 border-emerald-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full">
        {product.product_image && (
          <div className="h-64 flex items-center justify-center bg-stone-200">
            <img 
              src={`http://localhost:8000${product.product_image}`} 
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
        
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Explore Collection</span>
            <span className="text-2xl font-bold text-emerald-900">${product.price}</span>
          </div>
          
          <h4 className="text-xl font-semibold text-stone-800">{product.name}</h4>
          
          {product.sizes && (
            <p className="text-sm text-stone-600">Sizes: {product.sizes}</p>
          )}
          
          {user && (
            <div className="space-y-4 pt-4 border-t border-emerald-300">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-stone-700">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-20 px-3 py-2 border-2 border-emerald-600 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-stone-50 text-stone-800"
                />
              </div>
              <button 
                onClick={handleAddToBasket} 
                disabled={adding}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:bg-emerald-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                {adding ? "Adding..." : "Add to Basket"}
              </button>
              {message && (
                <div className={`text-center text-sm py-2 rounded ${message.includes('Added') ? 'text-emerald-700 bg-emerald-100' : 'text-red-700 bg-red-100'}`}>
                  {message}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

export default ProductCardExplore;