import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FARM_EQUIPMENTS } from "@/constants/marketplace/FARM_EQUIPMENTS.constance";

import {
  ChevronLeft,
  ShoppingCart,
  Heart,
  Share2,
  Phone,
  MapPin,
} from "lucide-react";

const EquipmentDetails = () => {
  const { id } = useParams();
  const equipment = FARM_EQUIPMENTS.find((item) => item.id === id);

  if (!equipment) {
    return <NotFound />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6">
        <Button variant="ghost" className="text-green-600 hover:text-green-700">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Equipment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <img
              src={equipment.image}
              alt={equipment.name}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden h-20 cursor-pointer hover:border-green-500"
              >
                <img
                  src={equipment.image} // In a real app, you'd have multiple images
                  alt={`${equipment.name} thumbnail ${i}`}
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
              <h1 className="text-3xl font-bold text-gray-900">
                {equipment.name}
              </h1>
              <div className="flex items-center mt-2 space-x-2">
                <Badge
                  variant={equipment.availability ? "success" : "destructive"}
                >
                  {equipment.availability ? "In Stock" : "Out of Stock"}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  {equipment.categoryId}
                </Badge>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-600">
              ₹{equipment.price}
            </h2>
            <p className="mt-4 text-gray-700">{equipment.usage}</p>
          </div>

          {/* Specifications */}
          <Card className="mt-6">
            <CardHeader className="text-lg font-semibold border-b pb-4">
              Specifications
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Power:</span>
                  <span className="font-medium">{equipment.power}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fuel Type:</span>
                  <span className="font-medium">{equipment.fuelType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{equipment.categoryId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-medium">
                    {equipment.availability ? "Available" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
              disabled={!equipment.availability}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {equipment.availability ? "Add to Cart" : "Notify When Available"}
            </Button>
            <Button variant="outline" className="w-full h-12 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Contact Seller
            </Button>
          </div>

          {/* Seller Info */}
          <Card className="mt-6">
            <CardHeader className="text-lg font-semibold border-b pb-4">
              Seller Information
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">AG</span>
                </div>
                <div>
                  <h4 className="font-medium">AgriTech Solutions</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline">View Profile</Button>
                <Button variant="outline">Other Listings</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Product Description</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700">
            The {equipment.name} is a high-performance farming equipment
            designed for {equipment.usage.toLowerCase()}. With {equipment.power}{" "}
            of power and {equipment.fuelType} fuel type, this machine delivers
            exceptional results in various agricultural operations.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Robust construction for durability</li>
            <li>• Easy to operate and maintain</li>
            <li>• Suitable for small to medium farms</li>
            <li>• Manufacturer warranty included</li>
          </ul>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Equipment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FARM_EQUIPMENTS.filter(
            (item) =>
              item.categoryId === equipment.categoryId &&
              item.id !== equipment.id
          )
            .slice(0, 4)
            .map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <p className="text-green-600 font-medium">₹{item.price}</p>
                  <Link to={`/equipment-details/${item.id}`}>
                    <Button className="mt-3 w-full bg-green-600 hover:bg-green-700">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
