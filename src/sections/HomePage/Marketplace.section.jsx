import React from "react";
import { MARKETPLACE_CATEGORIES } from "@/constants/HomeData"; // Adjust the import path

const MarketplaceCategories = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Marketplace Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MARKETPLACE_CATEGORIES.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            {/* Category Name */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 hover:bg-black/40">
              <h3 className="text-white text-2xl font-bold text-center">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceCategories;
