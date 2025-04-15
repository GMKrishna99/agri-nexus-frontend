import React, { useState } from "react";
import {
  FaVideo,
  FaMobileAlt,
  FaWifi,
  FaClock,
  FaFileAlt,
  FaLeaf,
  FaBug,
  FaSeedling,
  FaHandHoldingUsd,
  FaCloudSunRain,
  FaChartLine,
  FaVolumeUp,
  FaBatteryFull,
  FaQuestionCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { BsPersonCheckFill, BsCalendarCheck } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";

const VideoConsultations = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const experts = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Crop Disease Specialist",
      experience: "10 years",
      rating: 4.8,
      availableSlots: ["Mon 10AM-12PM", "Wed 2PM-4PM", "Fri 9AM-11AM"],
      platform: "Zoom/WhatsApp",
      languages: ["Hindi", "English", "Marathi"],
    },
    {
      id: 2,
      name: "Rajesh Patel",
      specialization: "Organic Farming Expert",
      experience: "8 years",
      rating: 4.7,
      availableSlots: ["Tue 1PM-3PM", "Thu 10AM-12PM", "Sat 11AM-1PM"],
      platform: "Google Meet",
      languages: ["Hindi", "Gujarati"],
    },
    {
      id: 3,
      name: "Amit Kumar",
      specialization: "Agricultural Economist",
      experience: "12 years",
      rating: 4.9,
      availableSlots: ["Mon 3PM-5PM", "Wed 10AM-12PM", "Fri 2PM-4PM"],
      platform: "Zoom",
      languages: ["Hindi", "English", "Punjabi"],
    },
  ];

  const handleBookExpert = (expert) => {
    setSelectedExpert(expert);
    setShowBookingForm(true);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const resetBooking = () => {
    setSelectedExpert(null);
    setBookingDate("");
    setBookingTime("");
    setShowBookingForm(false);
    setBookingConfirmed(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex justify-center mb-4">
            {/* <div className="bg-blue-100 p-3 rounded-full">
              <FaVideo className="text-blue-600 text-3xl" />
            </div> */}
          </div>
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            🎥 Video Chat Consultations
          </h1>
          <p className="text-xl text-gray-600">
            Connect face-to-face with agriculture experts – right from your
            smartphone or computer.
          </p>
        </div>

        {/* Why Choose Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🌾 Why Choose Video Consultations?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaVideo className="text-2xl text-green-600" />,
                title: "Real-time Problem Solving",
                desc: "Show your field or crop issues live to experts",
              },
              {
                icon: <BsPersonCheckFill className="text-2xl text-green-600" />,
                title: "Get Personalized Advice",
                desc: "One-on-one, interactive sessions with consultants",
              },
              {
                icon: <FaClock className="text-2xl text-green-600" />,
                title: "Save Time & Travel",
                desc: "No need to travel to offices – consult from your farm",
              },
              {
                icon: <FaFileAlt className="text-2xl text-green-600" />,
                title: "Better Decision-Making",
                desc: "Clear visuals and discussions help accurate diagnosis",
              },
              {
                icon: <FaMobileAlt className="text-2xl text-green-600" />,
                title: "Convenient Access",
                desc: "Connect from anywhere using your smartphone",
              },
              {
                icon: <FaWifi className="text-2xl text-green-600" />,
                title: "Recorded Sessions",
                desc: "Option to record and review consultation later",
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

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            🛠️ How It Works:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <BsPersonCheckFill className="text-2xl text-green-600" />,
                step: "Select an Available Expert",
                desc: "Choose from our verified agriculture specialists",
              },
              {
                icon: <BsCalendarCheck className="text-2xl text-green-600" />,
                step: "Choose a Time Slot",
                desc: "Pick a convenient time from available slots",
              },
              {
                icon: <FaMobileAlt className="text-2xl text-green-600" />,
                step: "Receive Video Link",
                desc: "Get joining details via SMS/Email",
              },
              {
                icon: <FaVideo className="text-2xl text-green-600" />,
                step: "Start Consultation",
                desc: "Join the call and discuss your farming challenges",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <h3 className="font-medium">{step.step}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl border border-green-100 shadow-sm p-6 mb-8">
          <div className="flex items-start mb-4">
            <div className="bg-green-100 p-2 rounded-lg mr-3">
              <FaMobileAlt className="text-green-600 text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                Tech Requirements
              </h2>
              <p className="text-green-600">
                What you'll need for your video consultation
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <FaMobileAlt className="text-green-500" />,
                title: "Device",
                description: "Smartphone, tablet or computer with camera",
                essential: true,
              },
              {
                icon: <FaWifi className="text-green-500" />,
                title: "Internet",
                description: "Minimum 2Mbps stable connection",
                essential: true,
              },
              {
                icon: <FaVideo className="text-green-500" />,
                title: "App",
                description: "Zoom, WhatsApp or Google Meet installed",
                essential: true,
              },
              {
                icon: <FaVolumeUp className="text-green-500" />,
                title: "Environment",
                description: "Quiet space with good lighting",
                essential: true,
              },
              {
                icon: <FaBatteryFull className="text-green-500" />,
                title: "Power",
                description: "Fully charged device or power source",
                essential: false,
              },
              {
                icon: <FaFileAlt className="text-green-500" />,
                title: "Documents",
                description: "Previous reports or test results",
                essential: false,
              },
              {
                icon: <FaLeaf className="text-green-500" />,
                title: "Field Access",
                description: "Ability to show your crops live",
                essential: false,
              },
              {
                icon: <FaQuestionCircle className="text-green-500" />,
                title: "Questions",
                description: "Prepare specific queries in advance",
                essential: false,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all ${
                  item.essential
                    ? "border-green-200 bg-green-50 hover:bg-green-100"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-md mr-3 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 flex items-center">
                      {item.title}
                      {item.essential && (
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                          Essential
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex">
              <FaInfoCircle className="text-green-500 mt-0.5 mr-2" />
              <p className="text-sm text-green-800">
                <span className="font-medium">Tip:</span> Test your setup before
                the call using our
                <a href="#" className="text-green-600 underline ml-1">
                  connection checker tool
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            👨‍🔬 Topics Covered:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FaBug />, topic: "Crop disease identification" },
              { icon: <FaLeaf />, topic: "Pest control strategies" },
              { icon: <FaSeedling />, topic: "Fertilizer planning" },
              { icon: <FaLeaf />, topic: "Organic farming guidance" },
              {
                icon: <FaHandHoldingUsd />,
                topic: "Loan/subsidy clarifications",
              },
              {
                icon: <FaCloudSunRain />,
                topic: "Weather-based farming advice",
              },
              { icon: <FaFileAlt />, topic: "Soil health analysis" },
              { icon: <FaSeedling />, topic: "Seed selection guidance" },
              { icon: <FaChartLine />, topic: "Market price trends" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50"
              >
                <span className="text-green-600 mr-3">{item.icon}</span>
                <span>{item.topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Post-Consultation Benefits */}
        <div className="bg-green-50 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            📝 Post-Consultation Benefits:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Digital prescription/report with recommendations",
              "Step-by-step action plan for your farm",
              "7-day access to follow-up chat support",
              "Detailed consultation summary via email",
              "Discount on next consultation",
              "Access to exclusive farmer resources",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Selection */}
        {!showBookingForm && !bookingConfirmed && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Available Video Consultation Experts:
            </h2>
            <div className="space-y-4">
              {experts.map((expert) => (
                <div
                  key={expert.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold">{expert.name}</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center text-yellow-500 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>
                              {i < Math.floor(expert.rating) ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {expert.rating} | {expert.experience} experience
                        </span>
                      </div>
                      <div className="mt-2">
                        <Badge className="bg-blue-100 text-blue-800 mr-2">
                          {expert.specialization}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800">
                          {expert.platform}
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Available:</span>{" "}
                          {expert.availableSlots.join(", ")}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Languages:</span>{" "}
                          {expert.languages.join(", ")}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookExpert(expert)}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                    >
                      Book Video Session
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
              Book Video Consultation with {selectedExpert.name}
            </h2>
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Date
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
                    Select Time Slot
                  </label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select time slot</option>
                    {selectedExpert.availableSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                    placeholder="Enter 10-digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                    placeholder="For sending consultation summary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Briefly Describe Your Farming Challenge
                </label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="This helps the expert prepare for your consultation"
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <p className="text-gray-600">
                    I agree to the terms of service and understand that video
                    consultations may be recorded for quality purposes.
                  </p>
                </div>
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
              Video Consultation Booked!
            </h2>
            <p className="text-lg mb-6">
              Your session with {selectedExpert.name} is confirmed.
            </p>

            <div className="max-w-md mx-auto bg-green-50 rounded-lg p-4 mb-6 text-left">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="font-medium">
                    VID-
                    {Math.random().toString(36).substring(2, 8).toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Consultation Type</p>
                  <p className="font-medium">
                    Video Call ({selectedExpert.platform})
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">
                    {new Date(bookingDate).toLocaleDateString("en-IN", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{bookingTime}</p>
                </div>
              </div>
              <p className="text-sm">
                You'll receive the video call link 30 minutes before your
                scheduled time via SMS and email.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-medium text-blue-800 mb-2">
                Preparation Tips:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
                <li>Test your camera and microphone before the call</li>
                <li>Have good lighting on your face and crops</li>
                <li>Prepare any samples or photos you want to share</li>
                <li>Be in a quiet location with stable internet</li>
              </ul>
            </div>

            <button
              onClick={resetBooking}
              className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Book Another Consultation
            </button>
          </div>
        )}

        {/* Final CTA */}
        <div className="bg-green-600 rounded-lg shadow-md p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">🚀 Ready for expert help?</h2>
          <p className="text-lg mb-6">
            Get personalized advice from top agriculture specialists today.
          </p>
          <button
            onClick={resetBooking}
            className="px-8 py-3 border-2 border-white rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
          >
            ➡️ Book a Video Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoConsultations;
