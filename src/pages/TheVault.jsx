import React, { useState, useEffect } from 'react';
import ProductCardTheVault from '../components/ProductCardTheVault';
import productService from '../services/productService';

const TheVault = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getTheVaultProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load the vault products");
      }
    };
    fetchProducts();
  }, []);

  if (error) return <div className="text-white">Error: {error}</div>;

  return (
    <div className='min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 py-12 px-4'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-300 mb-3">The Vault Collection</h2>
          <p className="text-lg text-zinc-500">Premium exclusives from the vault</p>
        </div>
        
        <div className='flex flex-wrap justify-center gap-8'>
          {products.map(product => (
            <ProductCardTheVault key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheVault;