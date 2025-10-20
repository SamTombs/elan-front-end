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

  if (error) return <div>Error: {error}</div>;

  return (
    <div className='bg-black text-white'>
      <div>
        <h2>The Vault Collection</h2>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {products.map(product => (
          <ProductCardTheVault key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TheVault;