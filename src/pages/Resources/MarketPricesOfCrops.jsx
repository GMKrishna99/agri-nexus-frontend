import React, { useState } from "react";
import {
  FiSearch,
  FiTrendingUp,
  FiTrendingDown,
  FiMinus,
  FiDownload,
  FiBell,
  FiShoppingCart,
  FiBarChart2,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { crops } from "@/constants/MarketPricesOdCrops";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MarketPrices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [timeRange, setTimeRange] = useState("weekly");
  const [selectedCrop, setSelectedCrop] = useState(null);

  const filteredCrops = crops.filter((crop) => {
    const matchesSearch = crop.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter
      ? crop.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    return matchesSearch && matchesLocation;
  });

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "rising":
        return <FiTrendingUp className="text-green-500" />;
      case "dropping":
        return <FiTrendingDown className="text-red-500" />;
      default:
        return <FiMinus className="text-gray-400" />;
    }
  };

  const handleCropSelect = (crop) => {
    setSelectedCrop(selectedCrop?.id === crop.id ? null : crop);
  };

  const chartData = {
    labels: selectedCrop
      ? timeRange === "weekly"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : Array.from(
            { length: selectedCrop.monthlyTrend.length },
            (_, i) => `Week ${i + 1}`
          )
      : [],
    datasets: [
      {
        label: `${selectedCrop?.name} Price (₹/${selectedCrop?.unit})`,
        data: selectedCrop
          ? timeRange === "weekly"
            ? selectedCrop.weeklyTrend
            : selectedCrop.monthlyTrend
          : [],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.1)",
        borderWidth: 2,
        pointBackgroundColor: "#4CAF50",
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `₹${context.raw.toLocaleString("en-IN")}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value) {
            return `₹${value.toLocaleString("en-IN")}`;
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 md:p-12 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">
            📈 Real-Time Crop Market Prices
          </h1>
          <p className="text-xl text-green-100">
            Stay informed about the latest market rates to maximize your profits
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-green-50 mr-4">
                <FiBarChart2 className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avg. Price Increase</p>
                <p className="text-2xl font-bold text-gray-800">+1.8%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-blue-50 mr-4">
                <FiMapPin className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Markets Covered</p>
                <p className="text-2xl font-bold text-gray-800">1,250+</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-yellow-50 mr-4">
                <FiCalendar className="text-yellow-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Updated</p>
                <p className="text-2xl font-bold text-gray-800">Daily</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center">
              <div className="p-3 rounded-lg bg-purple-50 mr-4">
                <FiShoppingCart className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Buyers</p>
                <p className="text-2xl font-bold text-gray-800">5,200+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Crop
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="e.g., Wheat, Cotton"
                  className="pl-10 block w-full border border-gray-200 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="State, District or Mandi"
                  className="pl-10 block w-full border border-gray-200 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex space-x-2 w-full">
                <button className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                  <FiDownload className="mr-2" /> Export Data
                </button>
                <button className="flex-1 px-4 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <FiBell className="mr-2" /> Price Alerts
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Current Market Prices
            </h2>
            <p className="text-gray-600">
              Real-time prices from mandis across India
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Crop
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price (₹/unit)
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Buyers
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Updated
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCrops.map((crop) => (
                  <tr
                    key={crop.id}
                    className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedCrop?.id === crop.id ? "bg-green-50" : ""
                    }`}
                    onClick={() => handleCropSelect(crop)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 text-lg">🌾</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {crop.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {crop.unit}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {crop.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        ₹{crop.currentPrice.toLocaleString("en-IN")}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getTrendIcon(crop.trend)}
                        <span
                          className={`ml-2 text-sm font-medium ${
                            crop.trend === "rising"
                              ? "text-green-600"
                              : crop.trend === "dropping"
                              ? "text-red-600"
                              : "text-gray-500"
                          }`}
                        >
                          {crop.change}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {crop.buyers} interested
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {crop.updated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Price Trend Graph */}
        {selectedCrop && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Price Trend for {selectedCrop.name}
                </h2>
                <p className="text-gray-600">
                  {selectedCrop.location} • ₹
                  {selectedCrop.currentPrice.toLocaleString("en-IN")}/
                  {selectedCrop.unit}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-2">
                <button
                  onClick={() => setTimeRange("weekly")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    timeRange === "weekly"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setTimeRange("monthly")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    timeRange === "monthly"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>
            <div className="h-80">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Why Track Market Prices?
            </h3>
            <ul className="space-y-4">
              {[
                "Avoid selling at low prices during market dips",
                "Identify the best time to sell your produce",
                "Compare prices across different mandis",
                "Negotiate better deals with traders",
                "Plan your next crop based on market trends",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Data Sources
            </h3>
            <div className="space-y-4">
              {[
                {
                  name: "eNAM (National Agriculture Market)",
                  description:
                    "Government's online trading platform connecting APMCs across India",
                },
                {
                  name: "Agmarknet Portal",
                  description:
                    "Official agricultural marketing information network",
                },
                {
                  name: "State Agricultural Boards",
                  description: "Direct feeds from state-level mandi boards",
                },
                {
                  name: "Verified Private APIs",
                  description:
                    "Real-time data from trusted private market aggregators",
                },
              ].map((source, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600">📡</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{source.name}</h4>
                    <p className="text-sm text-gray-600">
                      {source.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Maximize Your Farming Profits
          </h2>
          <p className="text-lg mb-6 mx-auto max-w-2xl">
            Combine market insights with our expert recommendations to get the
            best prices for your crops
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
              <FiShoppingCart className="mr-2" /> Connect with Buyers
            </button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
              <FiBell className="mr-2" /> Get Price Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPrices;
