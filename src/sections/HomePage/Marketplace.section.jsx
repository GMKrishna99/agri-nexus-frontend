import { Card } from "@/components/ui/card";
import { MARKETPLACE_CATEGORIES } from "@/constants/HomeData";
import React from "react";

const MarketPlace = () => {
  return (
    <section className="container mx-auto py-8 px-4 sm:py-12 sm:px-8 lg:px-16 xl:px-20 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
        Explore Marketplace
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MARKETPLACE_CATEGORIES.map((category, idx) => (
          <Card
            key={idx}
            className="p-6 flex items-center justify-center text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-lg sm:text-xl font-bold">{category}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MarketPlace;
