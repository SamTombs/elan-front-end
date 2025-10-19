import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import basketService from '../services/basketService';

const ProductCardTheVault = ({ product, basketId }) => {
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
      await basketService.addBasketItem(basketId, product.id, quantity);
      setMessage('Added to basket!');
    } catch (error) {
      setMessage('Failed to add to basket');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div>
      <div>
        <h3>VAULT</h3>
      </div>
      
      {product.product_image && (
        <img 
          src={`http://localhost:8000${product.product_image}`} 
          alt={product.name}  
        />
      )}
      
      <div>
        <h4>{product.name}</h4>
        <p>${product.price}</p>
        <p>Sizes: {product.sizes}</p>
        <p>Vault Collection</p>
      </div>
      
      {user && (
        <div>
          <div>
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
          >
            {adding ? 'Adding...' : 'Add to Basket'}
          </button>
          {message && <div>{message}</div>}
        </div>
      )}
    </div>
  );
};

export default ProductCardTheVault;