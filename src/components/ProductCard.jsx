import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";

export default function ProductCard() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const showProducts = async () => {
        try {
          const productData = await getProducts();
          setProducts(productData);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      showProducts();
    }, []);

  return (
    <>
      <div className="flex flex-row">
        {products.map((product) => (
          <div key={product.id}>
            <img src={`http://localhost:8000/uploads/products${product.product_image}`} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.sizes}</p>
          </div>
        ))}
      </div>
    </>
  );
}
