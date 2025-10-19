import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { addBasketItem } from '../services/basketService';

const ProductCardLift = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);

  const handleAddToBasket = async () => {
    if (!user) {
      setMessage('Please login to add items to basket');
      return;
    }

    setAdding(true);
    try {
      await addBasketItem(product.id, quantity);
      setMessage('Added to basket!');
    } catch (error) {
      setMessage('Failed to add to basket');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="lift-product-card">
      <div className="card-header lift-theme">
        <h3>🏋️ LIFT</h3>
      </div>
      
      {product.product_image && (
        <img 
          src={`http://localhost:8000${product.product_image}`} 
          alt={product.name}
          className="product-image"
        />
      )}
      
      <div className="card-content">
        <h4>{product.name}</h4>
        <p className="price">${product.price}</p>
        <p className="sizes">Sizes: {product.sizes}</p>
        <p className="category-badge lift-badge">Lift Collection</p>
      </div>
      
      {isAuthenticated && (
        <div className="add-to-basket">
          <div className="quantity-controls">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <button 
            onClick={handleAddToBasket} 
            disabled={adding}
            className="add-button lift-button"
          >
            {adding ? 'Adding...' : 'Add to Basket'}
          </button>
          {message && <div className="message">{message}</div>}
        </div>
      )}
    </div>
  );
};

export default ProductCardLift;
