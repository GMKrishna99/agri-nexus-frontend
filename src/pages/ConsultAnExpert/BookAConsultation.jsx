import React, { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPersonFill, BsGeoAlt } from "react-icons/bs";
import { FaLeaf, FaBug, FaTint, FaChartLine } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const BookConsultation = () => {
  const [selectedConsultant, setSelectedConsultant] = useState(null);
  const [consultationType, setConsultationType] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const consultants = [
    {
      id: 1,
      name: "Dr. Rajesh Patel",
      specialization: "Soil Health & Organic Farming",
      experience: "15 years",
      rating: 4.8,
      location: "Punjab",
      available: ["Online", "Field Visit"],
    },
    {
      id: 2,
      name: "Priya Sharma",
      specialization: "Irrigation Systems",
      experience: "8 years",
      rating: 4.5,
      location: "Maharashtra",
      available: ["Online", "Phone"],
    },
    {
      id: 3,
      name: "Amit Singh",
      specialization: "Pest Management",
      experience: "12 years",
      rating: 4.7,
      location: "Uttar Pradesh",
      available: ["Field Visit", "Email"],
    },
  ];

  const handleBookConsultant = (consultant) => {
    setSelectedConsultant(consultant);
    setShowBookingForm(true);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const resetBooking = () => {
    setSelectedConsultant(null);
    setConsultationType("");
    setBookingDate("");
    setBookingTime("");
    setShowBookingForm(false);
    setBookingConfirmed(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            📅 Book a Consultation
          </h1>
          <p className="text-xl text-gray-600">
            Get expert agricultural advice tailored to your needs – schedule a
            consultation with verified professionals.
          </p>
        </div>

        {/* Why Book Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
            👨‍🌾 Why Book a Consultation?
          </h2>
          <p className="mb-4">Farmers often need expert guidance for:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <FaLeaf className="inline mr-2" />,
                text: "Improving crop yield and soil health",
              },
              {
                icon: <FaTint className="inline mr-2" />,
                text: "Setting up proper irrigation systems",
              },
              {
                icon: <FaBug className="inline mr-2" />,
                text: "Managing pests and diseases",
              },
              {
                icon: <FaLeaf className="inline mr-2" />,
                text: "Transitioning to organic farming",
              },
              {
                icon: <FaChartLine className="inline mr-2" />,
                text: "Reducing input costs and increasing profits",
              },
              {
                icon: <BsPersonFill className="inline mr-2" />,
                text: "Understanding government schemes and subsidies",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-600">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Types */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🛠️ Consultation Types Offered:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <BsPersonFill size={24} />,
                name: "One-on-One Online Meeting",
              },
              { icon: <BsGeoAlt size={24} />, name: "On-Field Visit" },
              {
                icon: <AiOutlinePhone size={24} />,
                name: "Phone Consultation",
              },
              {
                icon: <AiOutlineMail size={24} />,
                name: "Email-Based Guidance",
              },
            ].map((type, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 text-center"
              >
                <div className="text-green-600 mb-2 flex justify-center">
                  {type.icon}
                </div>
                <h3 className="font-medium">{type.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Process */}
        {!showBookingForm && !bookingConfirmed && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              📋 How to Book:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              {[
                "Select a Consultant",
                "Choose the Consultation Type",
                "Pick a Date and Time",
                "Fill in Basic Details",
                "Confirm and Receive Booking ID",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-bold mb-2">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-4">
              Available Consultants:
            </h3>
            <div className="space-y-4">
              {consultants.map((consultant) => (
                <div
                  key={consultant.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold">
                        {consultant.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-500 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < Math.floor(consultant.rating) ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {consultant.rating} | {consultant.experience}{" "}
                          experience
                        </span>
                      </div>
                      <div className="mt-2">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          {consultant.specialization}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          <BsGeoAlt className="inline mr-1" />
                          {consultant.location}
                        </Badge>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookConsultant(consultant)}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Form */}
        {showBookingForm && !bookingConfirmed && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Book Consultation with {selectedConsultant.name}
            </h2>
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Consultation Type
                  </label>
                  <select
                    value={consultationType}
                    onChange={(e) => setConsultationType(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select type</option>
                    {selectedConsultant.available.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Time
                  </label>
                  <input
                    type="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Farm Location (PIN Code)
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                    placeholder="Enter 6-digit PIN code"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Describe Your Farming Challenge
                </label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Briefly describe your crops, issues, and what you hope to achieve from this consultation"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={resetBooking}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Booking Confirmation */}
        {bookingConfirmed && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-lg mb-6">
              Your consultation with {selectedConsultant.name} is scheduled.
            </p>

            <div className="max-w-md mx-auto bg-green-50 rounded-lg p-4 mb-6 text-left">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="font-medium">
                    AGRI-
                    {Math.random().toString(36).substring(2, 10).toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Consultation Type</p>
                  <p className="font-medium">{consultationType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{bookingDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{bookingTime}</p>
                </div>
              </div>
              <p className="text-sm">
                You'll receive confirmation details via SMS and email.
              </p>
            </div>

            <button
              onClick={resetBooking}
              className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Book Another Consultation
            </button>
          </div>
        )}

        {/* What You'll Get Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🧑‍🔬 What You'll Get:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Personalized solutions for your specific farming challenges",
              "Access to follow-up queries for 7 days after consultation",
              "Expert recommendations and farm action plans",
              "Record of your consultation history for future reference",
              "Discounts on future consultations",
              "Access to exclusive farmer resources",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📌 Quick Tips Before You Book:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {[
              "Have your farm details ready (area, type of crops, current issues)",
              "Check the consultant's specialization matches your needs",
              "Ensure good network connectivity if opting for an online meeting",
              "Prepare specific questions to make the most of your time",
              "Have your soil test reports ready if available",
              "Note down any government scheme references you want to ask about",
            ].map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-green-600 rounded-lg shadow-md p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Ready to boost your farming results?
          </h2>
          <p className="text-lg mb-6">
            Connect with expert consultants who can help you solve your farming
            challenges.
          </p>
          <button
            onClick={resetBooking}
            className="px-8 py-3 border-2 border-white rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
          >
            ➡️ Find a Consultant & Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
