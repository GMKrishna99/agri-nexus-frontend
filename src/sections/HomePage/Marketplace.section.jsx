import { Card } from "@/components/ui/card";
import { MARKETPLACE_CATEGORIES } from "@/constants/HomeData";
import React from "react";

const MarketPlace = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Explore Marketplace
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {MARKETPLACE_CATEGORIES.map((category, idx) => (
          <Card key={idx} className="p-4 text-center">
            <div>
              <h3 className="text-lg font-bold">{category}</h3>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MarketPlace;
