import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiShoppingCart } from "react-icons/hi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FEATURED_PRODUCTS } from "@/constants/marketplace/SeedCrops.constance";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Rating stars generator
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

const SeedCropProductDetails = () => {
  const { id } = useParams();
  const product = FEATURED_PRODUCTS.find((item) => item.id === parseInt(id));
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10">Product not found!</div>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-start">
          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="w-full max-w-md h-80 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          <p className="text-green-600 font-semibold text-xl">
            {product.price}
          </p>

          {product.type && (
            <span className="inline-block w-fit bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
              {product.type}
            </span>
          )}

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Description</h3>
            <p className="mt-1 text-gray-600">{product.description}</p>
          </div>

          {/* Product Info */}
          <ul className="text-sm text-gray-600 space-y-1">
            <li>
              <strong>Best Season:</strong> {product.season}
            </li>
            <li>
              <strong>Water Consumption:</strong> {product.waterConsumption}
            </li>
            <li>
              <strong>Growth Time:</strong> {product.growthTime}
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              onClick={handleAddToCart}
              className="bg-green-600 w-full sm:w-auto"
            >
              <HiShoppingCart className="mr-2" />
              {addedToCart ? "Added!" : "Buy Now"}
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  More Info
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="text-lg">
                  Product Information
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>Name:</strong> {product.name}
                  </p>
                  <p>
                    <strong>Best Season:</strong> {product.season}
                  </p>
                  <p>
                    <strong>Growth Time:</strong> {product.growthTime}
                  </p>
                  <p>
                    <strong>Water Consumption:</strong>{" "}
                    {product.waterConsumption}
                  </p>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>

          {/* Customer Reviews */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Customer Reviews
            </h3>

            <div className="mt-3 space-y-4">
              {product.comments?.length > 0 ? (
                product.comments.map((review, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      {getStars(review.rating)}
                      <span className="text-sm font-medium text-gray-700">
                        {review.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      {review.comment}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      — {review.name}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedCropProductDetails;
