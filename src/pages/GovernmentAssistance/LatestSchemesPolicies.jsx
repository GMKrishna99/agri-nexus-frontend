import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GOVERNMENT_SCHEMES,
  SCHEME_CATEGORIES,
  SCHEME_UPDATES,
} from "@/constants/GovtAss/governmentSchemes.constants";
import {
  FaRupeeSign,
  FaShieldAlt,
  FaLeaf,
  FaTint,
  FaTractor,
  FaBullhorn,
} from "react-icons/fa";

const GovernmentSchemes = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSchemes =
    selectedCategory === "all"
      ? GOVERNMENT_SCHEMES
      : GOVERNMENT_SCHEMES.filter(
          (scheme) => scheme.categoryId === selectedCategory
        );

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case "financial":
        return <FaRupeeSign className="mr-2" />;
      case "insurance":
        return <FaShieldAlt className="mr-2" />;
      case "organic":
        return <FaLeaf className="mr-2" />;
      case "irrigation":
        return <FaTint className="mr-2" />;
      case "equipment":
        return <FaTractor className="mr-2" />;
      default:
        return <FaRupeeSign className="mr-2" />;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 bg-green-50 rounded-2xl p-8 md:p-12">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-blue-100 text-sm">
          <FaBullhorn className="mr-2" /> Government Support
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Latest Agricultural Schemes & Policies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Stay updated with government initiatives that can empower your farming
          journey
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-4">
            Check Eligibility
          </Button>
          <Button
            variant="outline"
            className="text-green-600 border-green-600 hover:bg-blue-50 px-8 py-4"
          >
            Scheme Updates
          </Button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {SCHEME_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${
                selectedCategory === category.id
                  ? "bg-green-600 hover:bg-green-700"
                  : "text-green-600 hover:bg-blue-50 border-green-600"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {getCategoryIcon(category.id)}
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredSchemes.map((scheme) => (
          <Card
            key={scheme.id}
            className="hover:shadow-lg transition-all h-full"
          >
            <CardContent className="p-0 h-full flex flex-col">
              <img
                src={scheme.image}
                alt={scheme.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-3">
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    {scheme.categoryId.charAt(0).toUpperCase() +
                      scheme.categoryId.slice(1)}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{scheme.name}</h3>
                <p className="text-gray-600 mb-4">{scheme.description}</p>
                <ul className="space-y-2 mb-6">
                  {scheme.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <Link to={`/government-schemes/${scheme.id}`}>
                    View Details & Apply
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Latest Updates */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Recent Scheme Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCHEME_UPDATES.map((update) => (
            <Card key={update.id} className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{update.title}</h3>
                  <Badge
                    variant="secondary"
                    className="text-green-600 bg-green-50"
                  >
                    {new Date(update.date).toLocaleDateString()}
                  </Badge>
                </div>
                <p className="text-gray-600">{update.summary}</p>
                <Button variant="link" className="text-green-600 p-0 mt-3">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How We Help */}
      <Card className="border-0 shadow-sm bg-green-50 mb-16">
        <CardHeader className="text-2xl font-bold pb-0">
          How AgriConnect Helps
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "📢",
                title: "Latest Updates",
                desc: "Timely info on new schemes and changes",
              },
              {
                icon: "📝",
                title: "Easy Applications",
                desc: "Step-by-step guidance and direct links",
              },
              {
                icon: "✅",
                title: "Eligibility Check",
                desc: "Know which schemes apply to you",
              },
              {
                icon: "👨‍🌾",
                title: "Expert Support",
                desc: "Help with documentation and approval",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help With Schemes?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Our agricultural experts can guide you through eligibility,
          application process and documentation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-4">
            Talk to an Expert
          </Button>
          <Button
            variant="outline"
            className="text-green-600 border-green-600 hover:bg-green-50 px-8 py-4"
          >
            Download Scheme Handbook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;
