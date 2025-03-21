import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiShoppingCart } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FEATURED_PRODUCTS } from "@/constants/marketplace/SeedCrops.constance";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const SeedCropProductDetails = () => {
  const { id } = useParams();
  const product = FEATURED_PRODUCTS.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-10">Product not found!</div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-72 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
          <p className="text-green-600 font-semibold text-lg mt-2">
            {product.price}
          </p>

          {/* Description */}
          <h3 className="text-lg font-semibold mt-4">Description</h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            {product.description}
          </p>

          {/* Additional Details */}
          <ul className="mt-3 text-sm text-gray-600">
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
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button className="bg-green-600 w-full sm:w-auto">
              <HiShoppingCart className="mr-2" />
              Buy Now
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  More Info
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Product Information</DialogTitle>
                <DialogDescription>
                  <p>More details about {product.name}.</p>
                  <p>Best season: {product.season}</p>
                  <p>Growth time: {product.growthTime}</p>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
          </div>
          <div className="mt-2 space-y-4">
            {product.comments?.length > 0 ? (
              product.comments.map((review, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{review.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                  <p className="text-xs text-gray-500 mt-2">- {review.name}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-4">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedCropProductDetails;
