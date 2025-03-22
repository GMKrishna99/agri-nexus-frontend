import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CATEGORIES,
  FEATURED_PRODUCTS,
} from "@/constants/marketplace/SeedCrops.constance";
import Banner from "@/components/Banner";
import SeedCrop from "@/assets/seeds.jpg";

const SeedsCrops = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter(
          (product) => product.categoryId === selectedCategory
        );

  return (
    <div>
      {/* Hero Section */}
      <Banner
        heading={"Discover the Best Seeds & Crops"}
        subtext={
          "High-quality seeds for a better yield and sustainable farming."
        }
        buttonText={"Explore Products"}
        imageUrl={SeedCrop}
      />
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
        {/* Categories Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-green-600 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("all")}
            >
              All
            </Button>
            {CATEGORIES.map((category) => (
              <Button
                key={category.id}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-green-700 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-green-600 hover:text-white"
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Products (Filtered) */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold">Featured Seeds & Crops</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition">
                  <CardContent className="p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 sm:h-48 object-cover rounded-lg"
                    />
                    <h3 className="text-lg font-semibold mt-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.price}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Best Season: {product.season}
                    </p>
                    <p className="text-sm text-gray-500">
                      Water: {product.waterConsumption}
                    </p>
                    <Link to={`/seed-crop-product-details/${product.id}`}>
                      <Button className="mt-3 w-full bg-green-600 hover:bg-green-700">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-gray-500 mt-4 text-lg sm:text-2xl font-bold">
                No products found.
              </p>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <Link to="/products">
            <Button className="px-6 py-3 text-lg bg-green-600 hover:bg-green-700">
              View All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SeedsCrops;
