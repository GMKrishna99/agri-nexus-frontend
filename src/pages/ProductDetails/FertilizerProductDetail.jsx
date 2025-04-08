import { useParams, Link } from "react-router-dom";
import { products } from "@/constants/marketplace/FettilizersPestisides";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ShoppingCart, Share2, Heart, MapPin } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const getStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex text-yellow-500">
      {[...Array(full)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {half && <FaStarHalfAlt />}
      {[...Array(empty)].map((_, i) => (
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6">
        <Link
          to={"/marketplace/fertilizers-pesticides"}
          variant="ghost"
          className="text-green-600 hover:text-green-700 flex items-center"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>
          {/* Optional thumbnails (reusing same image here) */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden h-20 cursor-pointer hover:border-green-500"
              >
                <img
                  src={product.image}
                  alt={`Thumbnail ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center mt-2 space-x-2">
                <Badge
                  className="text-white"
                  style={{ backgroundColor: product.color }}
                >
                  {product.type}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  {product.category || "Fertilizer / Pesticide"}
                </Badge>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-600">
              ₹{product.price}
            </h2>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            {getStars(product.rating)}{" "}
            <span className="text-gray-600">{product.rating}</span>
          </div>

          {/* Action Button */}
          <div className="mt-6 space-y-3">
            <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>

          {/* Seller Info (dummy) */}
          <Card className="mt-6">
            <CardHeader className="text-lg font-semibold border-b pb-4">
              Seller Information
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">AG</span>
                </div>
                <div>
                  <h4 className="font-medium">AgriInput Store</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Nashik, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline">View Profile</Button>
                <Button variant="outline">More Products</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        {product.reviews.length > 0 ? (
          <ul className="space-y-4">
            {product.reviews.map((review, index) => (
              <li key={index} className="p-4 border rounded-lg shadow-sm">
                <p className="font-semibold">{review.user}</p>
                <div className="text-yellow-500 flex items-center gap-2">
                  {getStars(review.rating)} <span>{review.rating}</span>
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
