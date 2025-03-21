import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { HiShoppingCart } from "react-icons/hi";
import { FaTractor, FaStar } from "react-icons/fa";
import { PRODUCTS } from "@/constants/marketplace/ViewAllProducts.constance";
import Banner from "@/components/Banner";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.type === selectedCategory);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      return existingItem
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
    navigate("/cart");
  };

  return (
    <>
      <Banner
        heading={"Discover the Best Products"}
        subtext={
          "High-quality products for a better yield and sustainable farming."
        }
        buttonText={"Explore Products"}
        imageUrl={"/src/assets/images.jpg"}
      />
      <section className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Category Filter Section */}
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          View All Products
        </h1>
        <div className="flex items-center justify-center space-x-4 mb-6 overflow-x-auto flex-nowrap px-2 py-3">
          {["all", "product", "vehicle", "tool", "machine"].map((category) => (
            <Button
              key={category}
              className={`px-5 py-2 text-sm sm:text-base ${
                selectedCategory === category
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-green-600 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-lg transition min-h-[320px]"
            >
              <CardContent
                className="p-4 cursor-pointer"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                <p className="text-gray-600">
                  {["vehicle", "machine", "tool"].includes(item.type)
                    ? `$${item.price}/hour`
                    : `$${item.price}`}
                </p>
                <div className="flex items-center mt-1">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {item.reviews} ({item.comments.length} reviews)
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {item.stock > 0 ? (
                    <span className="text-green-600">
                      In Stock ({item.stock} available)
                    </span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </p>
                <p className="text-sm text-gray-500">
                  Type:{" "}
                  <span className="capitalize font-medium">{item.type}</span>
                </p>
              </CardContent>

              <CardFooter className="flex justify-center p-4">
                <Button
                  className="bg-green-600 w-full text-sm sm:text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  {["vehicle", "machine", "tool"].includes(item.type) ? (
                    <FaTractor className="mr-2" />
                  ) : (
                    <HiShoppingCart className="mr-2" />
                  )}
                  {["vehicle", "machine", "tool"].includes(item.type)
                    ? "Book Now"
                    : "Add to Cart"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductList;
