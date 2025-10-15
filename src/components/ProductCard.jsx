import axios from "axios"

export default async function ProductCard() {
  const products = await axios.get ('/api/products/').then(r => r.json());
  return (
    <>
      <div className="flex flex-row">
        <h1>Product Image</h1>
        <p>Product Description from Back End</p>
        <p>Reviews</p>
        <img 
        src={`http://localhost:8000/media/${product.product_image}`}
        alt={product.name}
        onError={(e) => e.target.style.display = 'none'} // Hide if no image
/>
      </div>
    </>
  );
}
