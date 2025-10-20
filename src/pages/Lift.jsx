import React, { useState, useEffect } from 'react';
import ProductCardLift from '../components/ProductCardLift';
import productService from '../services/productService.js';

const Lift = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getLiftProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load lift products');
      }
    };
    fetchProducts();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div>
        <h2>LIFT Collection</h2>
        <p>Strength training equipment and accessories</p>
      </div>
      <div>
        {products.map(product => (
          <ProductCardLift key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Lift;