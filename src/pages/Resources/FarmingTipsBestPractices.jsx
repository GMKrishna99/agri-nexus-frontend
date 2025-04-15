import React from "react";
import {
  FiCheckCircle,
  FiSun,
  FiDroplet,
  FiShield,
  FiCloud,
  FiPackage,
  FiSmartphone,
  FiUser,
  FiTool,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

const FarmingTips = () => {
  const categories = [
    {
      id: 1,
      title: "Crop Selection & Rotation",
      icon: <FiCheckCircle className="text-green-600 text-2xl" />,
      tips: [
        "Choose high-demand crops based on soil and climate",
        "Rotate crops to maintain soil fertility and reduce pests",
        "Consider intercropping for better land utilization",
      ],
    },
    {
      id: 2,
      title: "Soil Health Management",
      icon: <FiSun className="text-yellow-600 text-2xl" />,
      tips: [
        "Test soil regularly for pH and nutrients",
        "Use compost, green manure, and organic fertilizers",
        "Practice minimum tillage to preserve soil structure",
      ],
    },
    {
      id: 3,
      title: "Efficient Water Usage",
      icon: <FiDroplet className="text-blue-600 text-2xl" />,
      tips: [
        "Adopt drip irrigation or sprinkler systems",
        "Schedule watering based on weather and crop type",
        "Use mulching to reduce water evaporation",
      ],
    },
    {
      id: 4,
      title: "Pest & Disease Control",
      icon: <FiShield className="text-red-600 text-2xl" />,
      tips: [
        "Use integrated pest management (IPM) techniques",
        "Prefer natural pesticides and bio-agents over chemicals",
        "Monitor crops regularly for early pest detection",
      ],
    },
    {
      id: 5,
      title: "Weather-Smart Farming",
      icon: <FiCloud className="text-gray-600 text-2xl" />,
      tips: [
        "Plan sowing and harvesting around weather forecasts",
        "Use drought- or flood-resistant crop varieties",
        "Install weather stations for microclimate data",
      ],
    },
    {
      id: 6,
      title: "Post-Harvest Handling",
      icon: <FiPackage className="text-purple-600 text-2xl" />,
      tips: [
        "Store crops in clean, dry, ventilated areas",
        "Use proper packaging to prevent spoilage during transport",
        "Implement proper grading and sorting techniques",
      ],
    },
    {
      id: 7,
      title: "Modern Technologies",
      icon: <FiSmartphone className="text-indigo-600 text-2xl" />,
      tips: [
        "Use mobile apps for weather alerts and crop guidance",
        "Leverage IoT sensors and drones for precision farming",
        "Explore automated irrigation and monitoring systems",
      ],
    },
    {
      id: 8,
      title: "Farmer Success Stories",
      icon: <FiUser className="text-orange-600 text-2xl" />,
      tips: [
        "Learn from real experiences and innovations",
        "See what's working in other regions",
        "Network with successful farmers in your area",
      ],
    },
  ];

  const benefits = [
    "Improves crop quality and yield",
    "Saves resources like water and fertilizer",
    "Reduces pest and disease risks",
    "Promotes sustainable and eco-friendly farming",
    "Increases profitability and long-term success",
  ];

  const tools = [
    {
      name: "Soil health calculators",
      description: "Online tools to analyze your soil test results",
    },
    {
      name: "Seasonal crop planners",
      description: "Plan your crop calendar for maximum yield",
    },
    {
      name: "Pest diagnosis tools",
      description: "Identify pests and diseases with image recognition",
    },
    {
      name: "Local agri-extension office contacts",
      description: "Connect with government agricultural experts",
    },
    {
      name: "Video tutorials and downloadable guides",
      description: "Step-by-step visual learning resources",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">
            🌱 Farming Tips & Best Practices
          </h1>
          <p className="text-xl text-green-100">
            Empower your farming journey with expert tips, time-tested
            techniques, and modern methods
          </p>
        </div>

        {/* Why Follow Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🧠 Why Follow Best Practices in Farming?
              </h2>
              <div className="h-1 w-20 bg-green-500 mb-4"></div>
            </div>
            <div className="md:w-2/3">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📋 Categories of Tips Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 bg-gray-50 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-green-500 mr-2">
                          •
                        </span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              🛠️ Tools & Resources
            </h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                    <FiTool className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{tool.name}</h4>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              📢 Community Support
            </h3>
            <p className="text-gray-700 mb-6">
              Ask questions, share techniques, and connect with fellow farmers
              in our community forums!
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4 p-2 bg-white rounded-lg shadow-sm">
                  <FiUsers className="text-blue-600 text-xl" />
                </div>
                <h4 className="font-semibold text-blue-800">
                  AgriNexus Farmer Forum
                </h4>
              </div>
              <p className="text-gray-700 mb-4">
                Join thousands of farmers sharing knowledge and solving problems
                together.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center">
                Join Now <FiArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            🧭 Start with Small Changes Today
          </h2>
          <p className="text-lg mb-6 mx-auto max-w-2xl">
            Don't wait—implement one tip per week and track your results.
            Consistent improvement leads to better crops and better income!
          </p>
          <button className="px-6 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto">
            Get Personalized Recommendations <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmingTips;
