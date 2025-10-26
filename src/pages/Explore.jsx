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
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-3">Explore Collection</h2>
          <p className="text-lg text-stone-600">Discover our adventure-inspired gear</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {products.map(product => (
            <ProductCardExplore key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;