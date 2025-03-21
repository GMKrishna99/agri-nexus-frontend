import React from "react";
import { useParams } from "react-router-dom";
import { products } from "@/constants/marketplace/FettilizersPestisides";
import { Button } from "@/components/ui/button";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt key="half" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="text-center text-red-600">Product not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto sm:h-[400px] rounded-lg shadow-md object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <p className="mt-2 text-lg font-bold text-green-600">
            {product.price}
          </p>
          <p
            className="inline-block px-3 py-1 mt-2 text-white rounded-full text-sm"
            style={{ backgroundColor: product.color }}
          >
            {product.type}
          </p>
          <div className="mt-4 flex items-center gap-2">
            {getStars(product.rating)} {product.rating}
          </div>
          <Button className="mt-4 w-full sm:w-auto">Add to Cart</Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Customer Reviews</h3>
        {product.reviews.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {product.reviews.map((review, index) => (
              <li key={index} className="p-4 border rounded-lg shadow-sm">
                <p className="font-semibold">{review.user}</p>
                <div className="text-yellow-500 flex items-center gap-2">
                  {getStars(review.rating)} {review.rating}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
