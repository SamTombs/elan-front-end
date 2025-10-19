import React, { useState, useEffect } from 'react';
import ProductCardExplore from '../components/ProductCardExplore';
import productService from '../services/productService';

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getExploreProducts();
        setProducts(data);
      } catch (err) {
        setError('Failed to load explore products');
      }
    };
    fetchProducts();
  }, []);

  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <div>
        <h2>Explore Collection</h2>  
      </div>
      <div>
        {products.map(product => (
          <ProductCardExplore key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Explore;