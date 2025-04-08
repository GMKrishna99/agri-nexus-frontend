import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HiShoppingCart } from "react-icons/hi";
import { products } from "@/constants/marketplace/FettilizersPestisides";
import Banner from "@/components/Banner";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Fertilizers from "@/assets/modern-organic-fertiliser-advantages.jpg";

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex justify-center mt-2 text-yellow-500">
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

const FertilizersPesticides = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      <Banner
        heading="Boost Your Crops with Premium Fertilizers & Pesticides!"
        subtext="Shop our selection of high-quality fertilizers and pesticides to keep your plants healthy and pest-free."
        buttonText="Explore Products"
        imageUrl={Fertilizers}
      />

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="text-center p-4 border-gray-100 cursor-pointer hover:shadow-lg transition duration-300 "
            >
              <CardContent
                className={"flex flex-col items-center justify-between h-full"}
              >
                <Link to={`/fertilizer-product-details/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mx-auto rounded-lg"
                  />
                </Link>
                <h3
                  className="text-lg font-semibold mt-2"
                  style={{ color: product.color }}
                >
                  {product.name}
                </h3>
                <p
                  className="p-1 m-2 mx-auto w-24 text-center rounded-full text-white"
                  style={{ backgroundColor: product.color }}
                >
                  {product.type}
                </p>
                {getStars(product.rating)}
                <p className="text-green-600 font-bold mt-2">{product.price}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {product.description}
                </p>
                <Button
                  className="mt-4 w-full cursor-pointer"
                  onClick={() =>
                    navigate(`/fertilizer-product-details/${product.id}`)
                  }
                  variant={"green"}
                >
                  <HiShoppingCart className="mr-2" /> View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FertilizersPesticides;
