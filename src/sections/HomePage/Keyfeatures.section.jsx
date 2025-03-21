import React from "react";
import { FEATURES } from "@/constants/HomeData";
import { Card } from "@/components/ui/card";

const KeyFeatures = () => {
  return (
    <section className="container mx-auto py-8 px-4 sm:py-12 sm:px-8 lg:px-16 xl:px-20 text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
        Why Choose AgriNexus?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, idx) => (
          <Card
            key={idx}
            className="p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* Icon Section */}
            <div className="bg-green-600 p-3 rounded-full flex items-center justify-center">
              <feature.icon className="text-white text-3xl sm:text-4xl" />
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
