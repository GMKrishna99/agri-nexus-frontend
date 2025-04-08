import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Banner from "@/components/Banner";
import EquipmentImage from "@/assets/farm-equipment-market.webp";
import {
  FARM_EQUIPMENTS,
  EQUIPMENT_CATEGORIES,
} from "@/constants/marketplace/FARM_EQUIPMENTS.constance";
const FarmingEquipment = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEquipments =
    selectedCategory === "all"
      ? FARM_EQUIPMENTS
      : FARM_EQUIPMENTS.filter((item) => item.categoryId === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Banner
        heading="Top-Quality Farming Equipment"
        subtext="Empower your farming with modern tools and machinery."
        buttonText="Shop Equipment"
        imageUrl={EquipmentImage}
      />

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12">
        {/* Category Filter Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Browse Equipment Categories
          </h2>
          <div className="flex justify-center gap-3 flex-wrap">
            {EQUIPMENT_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-green-600 hover:bg-green-700"
                    : "hover:bg-green-50 hover:text-green-700 border-green-600 text-green-600"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredEquipments.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex justify-between"
            >
              <CardHeader className="p-0 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {!item.availability && (
                  <Badge
                    variant="destructive"
                    className="absolute top-2 right-2"
                  >
                    Out of Stock
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {item.name}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="text-green-600 bg-green-50"
                  >
                    {item.categoryId}
                  </Badge>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-xl font-bold text-green-600">
                    ₹{item.price}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Power:</span> {item.power}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Fuel:</span> {item.fuelType}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    <span className="font-medium">Usage:</span> {item.usage}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link to={`/equipment-details/${item.id}`} className="w-full">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={!item.availability}
                  >
                    {item.availability
                      ? "View Details"
                      : "Notify When Available"}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredEquipments.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No equipment found in this category
            </h3>
            <Button
              variant="ghost"
              className="mt-4 text-green-600 hover:text-green-700"
              onClick={() => setSelectedCategory("all")}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default FarmingEquipment;
