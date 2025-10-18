import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";

export default function ProductCardLift() {
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
        {products.map((product) => {
          console.log("Product image path:", product.product_image);
          return (
            <>
              <div key={product.id}>
                <img
                  src={`${
                    import.meta.env.VITE_BACK_END_SERVER_URL
                  }/media/products/Vault6.jpg`}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.sizes}</p>
              </div>
              <div key={product.id}>
                <img
                  src={`${
                    import.meta.env.VITE_BACK_END_SERVER_URL
                  }/media/products/Vault6.jpg`}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.sizes}</p>
              </div>
              <div key={product.id}>
                <img
                  src={`${
                    import.meta.env.VITE_BACK_END_SERVER_URL
                  }/media/products/Vault6.jpg`}
                  alt={product.name}
                />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.sizes}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
