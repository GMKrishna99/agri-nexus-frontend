// Updated Product Details Component
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiShoppingCart } from "react-icons/hi";
import { FaTractor, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/constants/marketplace/ViewAllProducts.constance";
import useCartStore from "@/store/cartStore";
import { toast } from "react-hot-toast";

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id === parseInt(id));
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return <div className="text-center text-red-500">Product not found!</div>;
  }

  const handleAddToCart = () => {
    try {
      console.log("Adding product to cart:", product); // Debug log
      addItem(product);
      toast.success("Added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error); // Debug log
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">
            {product.type === "vehicle" ||
            product.type === "machine" ||
            product.type === "tool"
              ? `${formatPrice(product.price)}/hour`
              : formatPrice(product.price)}
          </p>

          {/* Stock Availability */}
          <p className="mt-2 text-sm text-gray-600">
            {product.stock > 0 ? (
              <span className="text-green-600">
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>

          {/* Description */}
          <h3 className="text-lg font-semibold mt-4">Description</h3>
          <p className="mt-2 text-gray-700">{product.description}</p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <Button
              className={"bg-green-600"}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.type === "vehicle" ||
              product.type === "machine" ||
              product.type === "tool" ? (
                <FaTractor className="mr-2" />
              ) : (
                <HiShoppingCart className="mr-2" />
              )}
              {product.type === "vehicle" ||
              product.type === "machine" ||
              product.type === "tool"
                ? "Book Now"
                : "Add to Cart"}
            </Button>

            <Link to="/marketplace/view-all-products">
              <Button variant="outline">Back to Products</Button>
            </Link>
          </div>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
          </div>
          <div className="mt-2 space-y-4">
            {product.comments.map((review, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{review.rating}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                <p className="text-xs text-gray-500 mt-2">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
