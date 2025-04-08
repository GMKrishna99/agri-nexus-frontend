import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ORGANIC_PRODUCTS } from "@/constants/marketplace/OrganicFarmingPage";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
  FaPhone,
  FaSeedling,
  FaHeart,
  FaShare,
  FaLeaf,
} from "react-icons/fa";
// import NotFound from "@/components/NotFound";

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

const OrganicProductDetail = () => {
  const { id } = useParams();
  const product = ORGANIC_PRODUCTS.find((item) => item.id === id);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {/* Product Image */}
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto sm:h-[400px] rounded-lg shadow-md object-cover"
          />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden h-20 cursor-pointer hover:border-green-500"
              >
                <img
                  src={product.image}
                  alt={`${product.name} thumbnail ${i}`}
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
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 text-lg font-bold text-green-600">
                {product.price}
              </p>
              <Badge
                className="mt-2 px-3 py-1 text-white text-sm"
                style={{ backgroundColor: product.color }}
              >
                <FaLeaf className="mr-2" /> {product.type}
              </Badge>
              <div className="mt-4 flex items-center gap-2">
                {getStars(product.rating)}{" "}
                <span className="text-gray-700">{product.rating}/5</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <FaHeart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <FaShare className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Key Benefits */}
          <Card className="mt-6">
            <CardHeader className="text-xl font-semibold border-b pb-4">
              <FaSeedling className="inline mr-2" /> Key Benefits
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
              <FaShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" className="w-full h-12 text-lg">
              <FaPhone className="mr-2 h-5 w-5" />
              Contact Supplier
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Customer Reviews</h3>
        {product.reviews.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <p className="font-semibold">{review.user}</p>
                    <div className="flex items-center gap-2">
                      {getStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              No reviews yet. Be the first to review!
            </CardContent>
          </Card>
        )}
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">You May Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ORGANIC_PRODUCTS.filter(
            (item) =>
              item.categoryId === product.categoryId && item.id !== product.id
          )
            .slice(0, 3)
            .map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-green-600 font-medium">{item.price}</p>
                  <Button className="mt-3 w-full bg-green-600 hover:bg-green-700">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrganicProductDetail;
