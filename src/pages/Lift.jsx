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

  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-500 mb-3">LIFT Collection</h2>
          <p className="text-lg text-slate-400">Strength training equipment and accessories</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {products.map(product => (
            <ProductCardLift key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lift;