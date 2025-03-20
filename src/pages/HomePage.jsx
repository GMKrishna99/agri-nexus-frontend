import {
  FaSeedling,
  FaHandsHelping,
  FaMoneyCheckAlt,
  FaBookOpen,
  FaTractor,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="bg-gray-100 relative">
      {/* Hero Section */}
      <section className="relative z-10 h-[500px] flex items-center justify-center text-center bg-green-700 text-white">
        <div className="max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Empowering Farmers, Connecting Opportunities
          </h1>
          <p className="mt-4 text-lg">
            Access agricultural products, financial services, and expert
            guidance, all in one platform.
          </p>
          <Button className="mt-6 bg-white text-green-700 hover:bg-green-600 hover:text-white">
            Get Started
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {[
            {
              title: "Marketplace",
              icon: FaSeedling,
              desc: "Buy & sell seeds, fertilizers, and equipment.",
            },
            {
              title: "Government Assistance",
              icon: FaHandsHelping,
              desc: "Find and apply for subsidies easily.",
            },
            {
              title: "Financial Services",
              icon: FaMoneyCheckAlt,
              desc: "Loan options tailored for farmers.",
            },
            {
              title: "Expert Consultation",
              icon: FaBookOpen,
              desc: "Connect with agricultural professionals.",
            },
            {
              title: "Real-time Updates",
              icon: FaTractor,
              desc: "Get latest policies, weather & market trends.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300"
            >
              <feature.icon className="text-green-600 text-4xl" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Marketplace Highlights */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Marketplace Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {[
            "Seeds & Crops",
            "Fertilizers",
            "Machinery",
            "Organic Products",
            "Farm Services",
          ].map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              {item}
            </Card>
          ))}
        </div>
      </section>

      {/* Live Updates */}
      <section className="py-12 bg-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Live Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {[
            "Latest Government Policies",
            "Weather Forecast",
            "Crop Market Prices",
          ].map((update, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              {update}
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-green-700 text-white text-center relative z-20">
        <h2 className="text-2xl sm:text-3xl font-bold">Stay Updated</h2>
        <p className="mt-4">
          Subscribe to our newsletter for the latest updates.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-64 rounded text-black"
          />
          <Button className="mt-2 sm:mt-0 sm:ml-2 bg-white text-green-700 hover:bg-green-600 hover:text-white">
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  );
}
