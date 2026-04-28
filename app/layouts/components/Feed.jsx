"use client";

import { useEffect, useState } from "react"; 
import { useRouter } from "next/navigation";

export default function ProductFeed() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const Router = useRouter(); 

  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  const productOnClick = (slug) => {
    Router.push(`/product/${slug}`);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading products...
      </p>
    );

  return (
    <>
      <div className="w-full p-5 flex justify-center items-center font-bold">
        <h1>Best Offers for you</h1>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-2xl p-4 shadow-sm hover:shadow-xl transition duration-300 bg-white"
          onClick={()=>productOnClick(product.id)}
        >
          <div className="h-44 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />
          </div>

          <h2 className="text-sm font-semibold mt-3 line-clamp-2">
            {product.title}
          </h2>

          <p className="text-xs text-gray-500 capitalize mt-1">
            {product.category}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <span className="text-yellow-500">★</span>
            <span className="text-xs text-gray-600">
              {product.rating?.rate} ({product.rating?.count})
            </span>
          </div>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold text-lg">
              ₹ {Math.round(product.price * 80)}
            </span>

            <button className="bg-black text-white px-3 py-1.5 rounded-lg text-xs hover:bg-gray-800">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}