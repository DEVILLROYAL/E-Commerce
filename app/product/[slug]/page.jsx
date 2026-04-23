import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

export default async function ProductPage({ params }) {

  const resolvedParams = await params; // 👈 fix
  const { slug } = resolvedParams;

  const url = `https://fakestoreapi.com/products/${slug}`;
  const data = await fetch(url);

  if (!data.ok) {
    throw new Error("Failed to fetch product");
  }

  const res = await data.json();
  const rate = 83.5;

  return (
    <div className="w-full xl:flex p-5 gap-5">
      {/* Image */}
      <div className="w-full xl:w-1/2 p-5 xl:p-16 flex justify-center">
        <img
          src={res.image}
          alt={res.title}
          width={300}
          height={300}
          className="object-contain" />
      </div>

      {/* Details */}
      <div className="w-full p-5 flex flex-col gap-5 text-xl">
        {/* Title + Category */}
        <div className="text-3xl flex flex-col gap-3">
          <p>{res.title}</p>

          <p className="text-sm w-max p-2 bg-gray-600 text-white rounded">
            {res.category}
          </p>
        </div>

        {/* Price */}
        <div>
          <p className="text-green-700 font-bold text-sm">
            Special Price
          </p>

          <p className="text-2xl font-bold">
            ₹ {(res.price * rate).toFixed()}
          </p>

          <p className="font-thin text-sm">
            Free Delivery
          </p>
        </div>

        {/* Button */}
        <button className="text-sm w-max p-2 flex gap-2 rounded bg-black text-white hover:bg-gray-800">
          <ShoppingCart size={16} /> Add to Cart
        </button>

        {/* Description */}
        <p className="font-light text-base">
          {res.description}
        </p>

        {/* Rating */}
        <div>
          <p className="flex gap-2 items-center">
            <Star
              size={18}
              style={{
                color: res.rating.rate < 3 ? "orange" : "green",
                fill: res.rating.rate < 3 ? "yellow" : "green",
              }}
            />
            <span>{res.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({res.rating.count})
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}