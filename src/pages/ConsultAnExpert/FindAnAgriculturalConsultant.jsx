import React, { useState } from "react";
import {
  EXPERTISE_CATEGORIES,
  CONSULTATION_TYPES,
  SAMPLE_CONSULTANTS,
} from "@/constants/consultAnExpert/ConsultantFinder";
import { AiFillCustomerService, AiOutlineClose } from "react-icons/ai";
import { Badge } from "@/components/ui/badge";

const FindAnAgriculturalConsultant = () => {
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const resetSearch = () => {
    setLocation("");
    setSelectedCategory("");
    setConsultationType("");
    setShowResults(false);
  };

  const openConsultantModal = (consultant) => {
    setSelectedConsultant(consultant);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedConsultant(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          <AiFillCustomerService className="mr-2" /> Consultation Finder
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🧑‍🌾 Find an Agricultural Consultant
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with experienced professionals to boost your farm's
          productivity and profitability.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Why Consult Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
            🌱 Why Consult an Agricultural Expert?
          </h2>
          <p className="mb-4">
            Agricultural consultants offer valuable guidance on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "🌾 Crop selection & rotation",
              "🐛 Pest and disease management",
              "💧 Efficient irrigation systems",
              "🌿 Organic & sustainable practices",
              "📈 Farm planning and financial advice",
              "🧪 Soil testing and fertility improvement",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2">{item.split(" ")[0]}</span>
                <span>{item.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
            🔍 How to Use This Service:
          </h2>
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your Location or PIN Code
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g. 560001 or Bengaluru"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select your Area of Concern
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select category</option>
                  {EXPERTISE_CATEGORIES.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="consultationType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Consultation Type
                </label>
                <select
                  id="consultationType"
                  value={consultationType}
                  onChange={(e) => setConsultationType(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select type</option>
                  {CONSULTATION_TYPES.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={resetSearch}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Find Consultants
              </button>
            </div>
          </form>
        </div>

        {/* Expertise Categories */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
            🧠 Expertise Categories Available:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXPERTISE_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 cursor-pointer transition-colors"
                onClick={() => {
                  setSelectedCategory(category.id);
                  document
                    .getElementById("category")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{category.icon}</span>
                  <h3 className="font-medium">{category.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-green-700">
                Available Consultants ({SAMPLE_CONSULTANTS.length})
              </h2>
              <button
                onClick={resetSearch}
                className="text-sm text-green-600 hover:text-green-800"
              >
                Modify Search
              </button>
            </div>

            <div className="space-y-6">
              {SAMPLE_CONSULTANTS.map((consultant) => (
                <div
                  key={consultant.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold">
                        {consultant.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < Math.floor(consultant.rating) ? (
                                <span>★</span>
                              ) : (
                                <span>☆</span>
                              )}
                            </span>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {consultant.rating} ({consultant.consultations}+
                          consultations)
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <button
                        onClick={() => openConsultantModal(consultant)}
                        className="px-4 py-2 border border-green-600 rounded-md text-sm font-medium text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={() => openConsultantModal(consultant)}
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Schedule Consultation
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Expertise</p>
                      <p>
                        {consultant.expertise
                          .map(
                            (exp) =>
                              EXPERTISE_CATEGORIES.find((c) => c.id === exp)
                                ?.name
                          )
                          .join(", ")}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500">Experience</p>
                      <p>{consultant.experience}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Location</p>
                      <p>{consultant.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Availability</p>
                      <p>{consultant.availability}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-green-50 rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold text-green-700 mb-2">
                📞 Need Help Choosing a Consultant?
              </h2>
              <p className="text-gray-600">
                Let us match you with the right expert based on your specific
                needs.
              </p>
            </div>
            <button className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 whitespace-nowrap">
              ➡️ Request a Match
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            💡 Benefits of Consulting with AgriConnect Partners:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "✅ Verified professionals",
              "🌐 Online video consultations available",
              "📅 Flexible appointment slots",
              "⭐ Rated by other farmers",
              "💰 Competitive pricing",
              "🔒 Secure payments",
              "📝 Detailed session reports",
              "🌾 Local language support",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="mr-2">{benefit.split(" ")[0]}</span>
                <span>{benefit.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultant Modal/Popup */}
      {showModal && selectedConsultant && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-green-800">
                  {selectedConsultant.name}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center text-yellow-500 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(selectedConsultant.rating) ? (
                        <span>★</span>
                      ) : (
                        <span>☆</span>
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">
                  {selectedConsultant.rating} (
                  {selectedConsultant.consultations}+ consultations)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedConsultant.expertise.map((exp) => {
                      const category = EXPERTISE_CATEGORIES.find(
                        (c) => c.id === exp
                      );
                      return (
                        <Badge
                          key={exp}
                          className="bg-green-100 text-green-800"
                        >
                          {category?.icon} {category?.name}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedConsultant.languages.map((lang) => (
                      <Badge key={lang} className="bg-blue-100 text-blue-800">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Experience
                  </h4>
                  <p>{selectedConsultant.experience}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Location</h4>
                  <p>{selectedConsultant.location}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Availability
                  </h4>
                  <p>{selectedConsultant.availability}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">
                  About Consultant
                </h4>
                <p className="text-gray-600">
                  Specializes in helping farmers optimize their yields and
                  implement sustainable practices. Has worked with over 300
                  farms across {selectedConsultant.location} region.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Schedule Consultation
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="px-4 py-2 border border-green-600 rounded-md text-sm font-medium text-green-600 hover:bg-green-50">
                    📅 Book Field Visit
                  </button>
                  <button className="px-4 py-2 border border-green-600 rounded-md text-sm font-medium text-green-600 hover:bg-green-50">
                    🎥 Schedule Video Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindAnAgriculturalConsultant;
