import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ORGANIC_PRODUCTS,
  ORGANIC_CATEGORIES,
} from "@/constants/marketplace/OrganicFarmingPage";
import {
  FaLeaf,
  FaTint,
  FaSolarPanel,
  FaSeedling,
  FaChartLine,
  FaHandsHelping,
  FaArrowRight,
  FaPercentage,
  FaMoneyBillWave,
  FaShieldAlt,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";

const OrganicFarmingPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? ORGANIC_PRODUCTS
      : ORGANIC_PRODUCTS.filter((item) => item.categoryId === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 bg-green-50 rounded-2xl p-8 md:p-12">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          <FaLeaf className="mr-2" /> Sustainable Agriculture
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Organic & Sustainable Farming Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Discover eco-friendly farming methods that increase yields while
          protecting our planet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-4">
            Explore Products
          </Button>
          <Button
            variant="outline"
            className="text-green-600 border-green-600 hover:bg-green-50 px-8 py-4"
          >
            Learn Methods
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-8 overflow-x-auto">
        {["overview", "products", "methods", "benefits", "support"].map(
          (tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-green-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Main Content */}
      {activeTab === "overview" && (
        <div className="space-y-12">
          {/* What is Organic Farming */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="text-2xl font-bold flex items-center pb-0">
              <FaLeaf className="mr-3 text-green-600" /> What is Organic
              Farming?
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-6 text-gray-700">
                    Organic farming avoids synthetic pesticides, fertilizers,
                    and genetically modified organisms, focusing on natural
                    processes to maintain soil fertility and ecological balance.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Uses natural compost and manure",
                      "Crop rotation and companion planting",
                      "Encourages biodiversity and pollinators",
                      "Enhances soil fertility naturally",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Key Principles</h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <FaSeedling />,
                        text: "Health - Sustain soil, plants, animals and humans",
                      },
                      {
                        icon: <FaLeaf />,
                        text: "Ecology - Work with natural systems",
                      },
                      {
                        icon: <FaHandsHelping />,
                        text: "Fairness - Ensure equity and justice",
                      },
                      {
                        icon: <FaChartLine />,
                        text: "Care - Protect environment for future generations",
                      },
                    ].map((principle, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-green-600 text-xl mr-3 mt-0.5">
                          {principle.icon}
                        </span>
                        <span>{principle.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What is Sustainable Farming */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="text-2xl font-bold flex items-center pb-0">
              <FaSolarPanel className="mr-3 text-green-600" /> Sustainable
              Farming Practices
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-6 text-gray-700">
                    Sustainable farming ensures long-term food production while
                    minimizing environmental impact through innovative
                    techniques and technologies.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Drip irrigation systems",
                      "Renewable energy usage",
                      "Agroforestry practices",
                      "Integrated pest management",
                      "Cover cropping",
                      "Conservation tillage",
                    ].map((item, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-green-600 border-green-200 bg-green-50"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Water Conservation</h4>
                    <p className="text-sm text-gray-700">
                      Techniques like rainwater harvesting and drip irrigation
                      can reduce water usage by up to 60%.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Soil Health</h4>
                    <p className="text-sm text-gray-700">
                      Organic matter addition increases water retention and
                      reduces erosion by 30-50%.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Biodiversity</h4>
                    <p className="text-sm text-gray-700">
                      Diverse cropping systems support 50% more beneficial
                      insects than monocultures.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "products" && (
        <div className="space-y-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {ORGANIC_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`rounded-full ${
                  selectedCategory === category.id
                    ? "bg-green-600 hover:bg-green-700"
                    : "text-green-600 hover:bg-green-50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-md transition-all h-full flex flex-col"
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex-grow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <Badge
                        className="text-xs"
                        style={{ backgroundColor: product.color }}
                      >
                        {product.type}
                      </Badge>
                    </div>
                    <p className="text-green-600 font-medium mt-2">
                      {product.price}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <Button asChild className="w-full">
                      <Link to={`/organic-products/${product.id}`}>
                        View Details <FaArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === "methods" && (
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Crop Rotation Techniques",
              icon: <FaSeedling className="text-green-600" />,
              items: [
                "Legume rotation for nitrogen fixation",
                "Deep-rooted crops to break hardpan",
                "Pest-disrupting crop sequences",
                "Cover crops for soil protection",
              ],
            },
            {
              title: "Natural Pest Control",
              icon: <FaLeaf className="text-green-600" />,
              items: [
                "Neem-based biopesticides",
                "Beneficial insect habitats",
                "Trap cropping systems",
                "Garlic/chili repellent sprays",
              ],
            },
            {
              title: "Soil Enrichment",
              icon: <FaTint className="text-green-600" />,
              items: [
                "Vermicompost application",
                "Green manure crops",
                "Biochar soil amendment",
                "Mycorrhizal fungi inoculation",
              ],
            },
            {
              title: "Water Management",
              icon: <FaSolarPanel className="text-green-600" />,
              items: [
                "Drip irrigation systems",
                "Rainwater harvesting",
                "Mulching for moisture retention",
                "Contour farming techniques",
              ],
            },
          ].map((method, i) => (
            <Card
              key={i}
              className="border-0 shadow-sm hover:shadow-md transition-all"
            >
              <CardHeader className="text-xl font-bold flex items-center pb-0">
                <span className="mr-3">{method.icon}</span>
                {method.title}
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {method.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === "benefits" && (
        <div className="space-y-12">
          <Card className="border-0 shadow-sm">
            <CardHeader className="text-2xl font-bold flex items-center pb-0">
              <FaChartLine className="mr-3 text-green-600" /> Economic Benefits
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FaPercentage className="text-3xl text-green-600" />,
                    title: "Premium Prices",
                    desc: "Organic products fetch 20-30% higher market prices",
                  },
                  {
                    icon: (
                      <FaMoneyBillWave className="text-3xl text-green-600" />
                    ),
                    title: "Lower Input Costs",
                    desc: "Reduced dependence on expensive chemical inputs",
                  },
                  {
                    icon: <FaShieldAlt className="text-3xl text-green-600" />,
                    title: "Government Subsidies",
                    desc: "Special schemes for organic farming adoption",
                  },
                ].map((item, i) => (
                  <Card key={i} className="border-0 shadow-sm hover:shadow-md">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="text-2xl font-bold flex items-center pb-0">
              <FaLeaf className="mr-3 text-green-600" /> Environmental Benefits
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    {[
                      "Improves soil health and fertility",
                      "Reduces water pollution from chemical runoff",
                      "Increases biodiversity by 30-50%",
                      "Lowers carbon footprint by 40-60%",
                      "Promotes natural pest control systems",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Long-Term Impact</h3>
                  <p className="text-gray-700 mb-4">
                    After 3-5 years of organic practices, farms typically see:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "25% increase in soil organic matter",
                      "40% reduction in irrigation needs",
                      "50% more earthworm activity",
                      "30% higher water retention capacity",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "support" && (
        <div className="space-y-12">
          <Card className="border-0 shadow-sm">
            <CardHeader className="text-2xl font-bold flex items-center pb-0">
              <FaUsers className="mr-3 text-green-600" /> Our Support Services
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FaPhoneAlt className="text-2xl text-green-600" />,
                    title: "Expert Consultation",
                    items: [
                      "Free initial consultation",
                      "Field visits",
                      "Custom farming plans",
                    ],
                  },
                  {
                    icon: <FaSeedling className="text-2xl text-green-600" />,
                    title: "Training Programs",
                    items: [
                      "Monthly workshops",
                      "Hands-on training",
                      "Certification courses",
                    ],
                  },
                  {
                    icon: (
                      <FaHandsHelping className="text-2xl text-green-600" />
                    ),
                    title: "Government Liaison",
                    items: [
                      "Scheme applications",
                      "Subsidy assistance",
                      "Certification support",
                    ],
                  },
                ].map((service, i) => (
                  <Card key={i} className="hover:shadow-md transition">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="mr-4">{service.icon}</div>
                        <h3 className="font-bold">{service.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {service.items.map((item, j) => (
                          <li key={j} className="flex items-start text-sm">
                            <span className="text-green-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="text-2xl font-bold flex items-center pb-0">
              <FaMapMarkerAlt className="mr-3 text-green-600" /> Contact Us
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-6">
                    <FaMapMarkerAlt className="text-green-600 mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Our Office</h3>
                      <p className="text-gray-600">
                        123 Organic Farm Road
                        <br />
                        Sustainable District, Farmland 560001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <FaPhoneAlt className="text-green-600 mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600">
                        +91 98765 43210
                        <br />
                        (9:00 AM - 6:00 PM, Mon-Sat)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-green-600 mt-1 mr-4 text-xl" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-gray-600">support@organicagri.in</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <ul className="space-y-3">
                    {[
                      { day: "Monday-Friday", time: "9:00 AM - 6:00 PM" },
                      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                      { day: "Sunday", time: "Closed" },
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between">
                        <span className="font-medium">{item.day}</span>
                        <span className="text-gray-600">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center">
                    <FaClock className="text-green-600 mr-3" />
                    <span className="text-sm text-gray-600">
                      Emergency support available 24/7 for registered farmers
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-16 text-center bg-green-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Start Your Organic Journey?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Get personalized advice from our organic farming experts and access
          premium quality organic inputs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-4">
            Book Consultation
          </Button>
          <Button
            variant="outline"
            className="text-green-600 border-green-600 hover:bg-green-50 px-8 py-4"
          >
            Download Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrganicFarmingPage;
