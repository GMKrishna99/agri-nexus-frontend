import React from "react";
import { FEATURES } from "@/constants/HomeData";
import { Card } from "@/components/ui/Card";
const KeyFeatures = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Why Choose AgriNexus?
      </h2>
      <div className="grid md:grid-cols-3 gap-6 cursor-pointer ">
        {FEATURES.map((feature, idx) => (
          <Card
            key={idx}
            className="p-4 flex items-center space-x-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="bg-green-600 p-3 rounded-full">
              <feature.icon className="text-white text-4xl" />
            </div>
            <div className="flex items-center flex-col">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
