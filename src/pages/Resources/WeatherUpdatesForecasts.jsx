import React, { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiDayCloudyHigh,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiSunrise,
  WiThermometer,
  WiUmbrella,
} from "react-icons/wi";
import { FaLeaf, FaTractor, FaWater, FaShieldAlt } from "react-icons/fa";
import { BsCalendarWeek, BsGeoAlt, BsBellFill } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";

const WeatherForecasts = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [forecastType, setForecastType] = useState("7day");
  const [weatherData, setWeatherData] = useState(null);

  // Mock weather data - in a real app, this would come from an API
  useEffect(() => {
    const mockWeatherData = {
      current: {
        temp: 28,
        condition: "Partly Cloudy",
        icon: <WiDayCloudyHigh className="text-4xl" />,
        humidity: 65,
        windSpeed: "12 km/h",
        windDirection: "NE",
        rainfall: "30%",
        uvIndex: "Moderate",
      },
      forecast7Day: [
        {
          day: "Today",
          high: 30,
          low: 22,
          condition: "Partly Cloudy",
          rain: "30%",
          icon: <WiDayCloudyHigh />,
        },
        {
          day: "Tue",
          high: 31,
          low: 23,
          condition: "Sunny",
          rain: "10%",
          icon: <WiDaySunny />,
        },
        {
          day: "Wed",
          high: 29,
          low: 24,
          condition: "Scattered Showers",
          rain: "60%",
          icon: <WiRain />,
        },
        {
          day: "Thu",
          high: 27,
          low: 23,
          condition: "Thunderstorms",
          rain: "90%",
          icon: <WiRain />,
        },
        {
          day: "Fri",
          high: 28,
          low: 22,
          condition: "Cloudy",
          rain: "20%",
          icon: <WiCloudy />,
        },
        {
          day: "Sat",
          high: 30,
          low: 23,
          condition: "Sunny",
          rain: "0%",
          icon: <WiDaySunny />,
        },
        {
          day: "Sun",
          high: 31,
          low: 24,
          condition: "Sunny",
          rain: "0%",
          icon: <WiDaySunny />,
        },
      ],
      forecast15Day: [],
      alerts: [
        "Heavy rain expected Thursday - postpone pesticide application",
        "High winds predicted Wednesday afternoon - secure greenhouse covers",
        "Optimal planting conditions for groundnut this weekend",
      ],
    };
    setWeatherData(mockWeatherData);
  }, []);

  const handleEnableLocation = () => {
    // In a real app, this would request browser location permissions
    setLocationEnabled(true);
    setSelectedLocation("Your Farm (Near Pune, Maharashtra)");
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Sunny":
        return <WiDaySunny className="text-3xl" />;
      case "Partly Cloudy":
        return <WiDayCloudyHigh className="text-3xl" />;
      case "Cloudy":
        return <WiCloudy className="text-3xl" />;
      case "Scattered Showers":
      case "Thunderstorms":
        return <WiRain className="text-3xl" />;
      default:
        return <WiDaySunny className="text-3xl" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            ⛅ Weather Updates & Forecasts
          </h1>
          <p className="text-xl text-gray-600">
            Plan your farming activities smarter with accurate and timely
            weather forecasts tailored for your region.
          </p>
          {!locationEnabled && (
            <button
              onClick={handleEnableLocation}
              className="mt-6 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              ➡️ Enable Location Services
            </button>
          )}
        </div>

        {/* Why Weather Matters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
            🌦️ Why Weather Forecasts Matter for Farmers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaLeaf className="text-2xl text-green-600" />,
                title: "Crop Planning",
                desc: "Schedule sowing, irrigation, and harvesting based on weather predictions",
              },
              {
                icon: <FaShieldAlt className="text-2xl text-green-600" />,
                title: "Avoid Damage",
                desc: "Take action against heavy rains, frost, or extreme heat",
              },
              {
                icon: <FaWater className="text-2xl text-cyan-600" />,
                title: "Water Management",
                desc: "Use weather-based irrigation to conserve water",
              },
              {
                icon: <FaTractor className="text-2xl text-orange-600" />,
                title: "Pest Prevention",
                desc: "Weather often influences disease and pest outbreaks",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="ml-2 font-medium">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location and Forecast Selection */}
        {locationEnabled && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                  <BsGeoAlt className="mr-2 text-green-600" />
                  {selectedLocation}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Last updated: {new Date().toLocaleTimeString()} | Source: IMD
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setForecastType("7day")}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    forecastType === "7day"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  7-Day Forecast
                </button>
                <button
                  onClick={() => setForecastType("15day")}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    forecastType === "15day"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  15-Day Forecast
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Current Weather */}
        {locationEnabled && weatherData && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Current Weather Conditions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-lg p-4 flex items-center">
                <div className="text-green-600 mr-4">
                  {weatherData.current.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    {weatherData.current.temp}°C
                  </div>
                  <div className="text-gray-600">
                    {weatherData.current.condition}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-3 flex items-center">
                  <WiHumidity className="text-2xl text-cyan-600 mr-2" />
                  <div>
                    <div className="text-xs text-gray-500">Humidity</div>
                    <div className="font-medium">
                      {weatherData.current.humidity}%
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center">
                  <WiStrongWind className="text-2xl text-green-600 mr-2" />
                  <div>
                    <div className="text-xs text-gray-500">Wind</div>
                    <div className="font-medium">
                      {weatherData.current.windSpeed}{" "}
                      {weatherData.current.windDirection}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center">
                  <WiUmbrella className="text-2xl text-green-400 mr-2" />
                  <div>
                    <div className="text-xs text-gray-500">Rain Chance</div>
                    <div className="font-medium">
                      {weatherData.current.rainfall}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex items-center">
                  <WiThermometer className="text-2xl text-orange-600 mr-2" />
                  <div>
                    <div className="text-xs text-gray-500">UV Index</div>
                    <div className="font-medium">
                      {weatherData.current.uvIndex}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-medium text-green-800 mb-2 flex items-center">
                  <BsBellFill className="mr-2" />
                  Today's Farming Tip
                </h3>
                <p className="text-sm text-green-700">
                  {weatherData.current.rainfall > "50%"
                    ? "Postpone outdoor spraying due to high rain chance"
                    : "Good day for field work and pesticide application"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Forecast */}
        {locationEnabled && weatherData && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {forecastType === "7day" ? "7-Day" : "15-Day"} Forecast
            </h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-4 pb-2">
                {weatherData.forecast7Day.map((day, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-32 border rounded-lg p-3 text-center"
                  >
                    <div className="font-medium">{day.day}</div>
                    <div className="my-2 flex justify-center">
                      {getWeatherIcon(day.condition)}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-red-500">{day.high}°</span>
                      <span className="text-green-500">{day.low}°</span>
                    </div>
                    <div className="mt-2 text-xs text-green-600 flex items-center justify-center">
                      <WiUmbrella className="mr-1" />
                      {day.rain}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Smart Suggestions */}
        {locationEnabled && weatherData && (
          <div className="bg-yellow-50 rounded-lg shadow-md p-6 mb-8 border border-yellow-200">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
              🌱 Smart Farming Suggestions
            </h2>
            <div className="space-y-3">
              {weatherData.alerts.map((alert, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>{alert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🔍 Weather Features for Farmers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BsGeoAlt className="text-2xl text-green-600" />,
                title: "Precise Location Data",
                desc: "Get hyper-local forecasts for your exact farmland location",
              },
              {
                icon: <BsCalendarWeek className="text-2xl text-green-600" />,
                title: "Extended Forecasts",
                desc: "7-day and 15-day outlooks for better planning",
              },
              {
                icon: <WiThermometer className="text-2xl text-green-600" />,
                title: "Temperature Trends",
                desc: "Day/night highs and lows with frost alerts",
              },
              {
                icon: <WiUmbrella className="text-2xl text-green-600" />,
                title: "Rainfall Prediction",
                desc: "Precipitation probability and expected accumulation",
              },
              {
                icon: <WiStrongWind className="text-2xl text-green-600" />,
                title: "Wind Conditions",
                desc: "Speed and direction crucial for spraying operations",
              },
              {
                icon: <WiHumidity className="text-2xl text-green-600" />,
                title: "Humidity & Dew Point",
                desc: "Critical for disease prevention and irrigation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="ml-2 font-medium">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            📲 How Farmers Can Use Weather Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌅",
                title: "Daily Check-Ins",
                desc: "Review weather each morning to plan the day's farming activities",
              },
              {
                icon: "🔔",
                title: "Push Notifications",
                desc: "Get instant alerts for sudden weather changes affecting your crops",
              },
              {
                icon: "👨‍🌾",
                title: "Expert Integration",
                desc: "Combine forecasts with agronomist advice for optimal decisions",
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 border border-green-100"
              >
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h3 className="font-medium mb-1">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🌍 Data Sources & Accuracy
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              {
                name: "Indian Meteorological Department",
                badge: "Primary Source",
              },
              { name: "Skymet Weather", badge: "Backup Source" },
              { name: "OpenWeather API", badge: "Global Data" },
              { name: "WeatherStack API", badge: "Historical Trends" },
              { name: "NASA Satellite Data", badge: "Long-range" },
            ].map((source, index) => (
              <Badge
                key={index}
                className="bg-white text-gray-800 border border-gray-300"
              >
                {source.name}{" "}
                <span className="text-green-600 ml-1">• {source.badge}</span>
              </Badge>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Our forecasts combine multiple reliable sources to give you the most
            accurate predictions for agricultural planning.
          </p>
        </div>

        {/* Final CTA */}
        {!locationEnabled && (
          <div className="bg-green-600 rounded-lg shadow-md p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              ✅ Stay Ahead with Weather Insights
            </h2>
            <p className="text-lg mb-6">
              Get precise weather forecasts tailored to your exact farm
              location.
            </p>
            <button
              onClick={handleEnableLocation}
              className="px-8 py-3 border-2 border-white rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
            >
              ➡️ Enable Location Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherForecasts;
