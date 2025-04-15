import React, { useState } from "react";
import {
  STATUS_STAGES,
  TRACKING_METHODS,
  SAMPLE_APPLICATIONS,
  SUPPORT_INFO,
} from "@/constants/FinancialServices/loanTracking.constants";
import { Badge } from "@/components/ui/badge";
import {
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaInfoCircle,
  FaFileAlt,
  FaMobileAlt,
  FaIdCard,
  FaUserShield,
  FaTimes,
} from "react-icons/fa";

// Tracking button styles configuration
const TRACKING_BUTTON_STYLES = {
  application: {
    bg: "bg-green-600",
    hover: "hover:bg-green-700",
    text: "Track Application",
  },
  aadhaar: {
    bg: "bg-green-600",
    hover: "hover:bg-green-700",
    text: "Verify with Aadhaar",
  },
  mobile: {
    bg: "bg-green-600",
    hover: "hover:bg-green-700",
    text: "Verify with Mobile",
  },
  portal: {
    bg: "bg-green-600",
    hover: "hover:bg-green-700",
    text: "Go to Portal",
  },
};

const LoanTracking = () => {
  const [trackingMethod, setTrackingMethod] = useState("application");
  const [applicationId, setApplicationId] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState("");
  const [showStatusPopup, setShowStatusPopup] = useState(false);
  const [currentApplication, setCurrentApplication] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");

    // Simulate API call
    setTimeout(() => {
      const foundApplications = SAMPLE_APPLICATIONS.filter((app) => {
        if (trackingMethod === "application" && applicationId) {
          return app.id === applicationId;
        } else if (trackingMethod === "aadhaar" && aadhaarNumber) {
          return app.mobile === aadhaarNumber.slice(-4).padStart(10, "0");
        } else if (trackingMethod === "mobile" && mobileNumber) {
          return app.mobile === mobileNumber;
        }
        return false;
      });

      if (foundApplications.length === 0) {
        setError("No applications found with the provided details");
      } else {
        setSearchResults(foundApplications);
        setCurrentApplication(foundApplications[0]);
        setShowStatusPopup(true);
      }
    }, 1000);
  };

  const handleSendOtp = () => {
    // In real implementation, this would send OTP to user's mobile
    setShowOtpPopup(true);
  };

  const verifyOtp = () => {
    // Simple OTP validation - in real app would verify with backend
    if (otp.length === 6) {
      setShowOtpPopup(false);
      handleSearch({ preventDefault: () => {} }); // Trigger search after OTP verification
    } else {
      setError("Please enter a valid 6-digit OTP");
    }
  };

  const resetSearch = () => {
    setApplicationId("");
    setAadhaarNumber("");
    setMobileNumber("");
    setOtp("");
    setSearchResults(null);
    setError("");
    setShowOtpPopup(false);
    setShowStatusPopup(false);
  };

  const getStatusColor = (status) => {
    const stage = STATUS_STAGES.find((s) => s.status === status);
    return stage ? stage.color : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-600">
                OTP Verification
              </h3>
              <button
                onClick={() => setShowOtpPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <p className="mb-4">
              Enter the 6-digit OTP sent to your registered mobile number ending
              with{" "}
              {trackingMethod === "aadhaar"
                ? aadhaarNumber.slice(-4)
                : mobileNumber.slice(-4)}
            </p>
            <div className="mb-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                maxLength="6"
              />
              <p className="text-xs text-gray-500 mt-1">
                OTP is valid for 5 minutes
              </p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setShowOtpPopup(false);
                  resetSearch();
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={verifyOtp}
                className="px-4 py-2 bg-greene-600 text-white bg-green-600 rounded-md"
              >
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Status Popup */}
      {showStatusPopup && currentApplication && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-600">
                Application Status
              </h3>
              <button
                onClick={() => setShowStatusPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Application ID</p>
                <p className="font-bold">{currentApplication.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Applicant Name</p>
                <p className="font-bold">{currentApplication.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Loan Type</p>
                <p className="font-bold">{currentApplication.loanType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Loan Amount</p>
                <p className="font-bold">{currentApplication.amount}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500">Current Status</p>
              <div className="flex items-center justify-between mt-1">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    currentApplication.status
                  )}`}
                >
                  {currentApplication.status}
                </span>
                <p className="text-sm text-gray-500">
                  Last Updated: {currentApplication.lastUpdated}
                </p>
              </div>
            </div>

            {currentApplication.status === "Rejected" && (
              <div className="mt-4 bg-red-50 p-3 rounded-md">
                <h4 className="font-bold text-red-800 mb-1">Next Steps:</h4>
                <ul className="list-disc pl-5 text-sm text-red-700 space-y-1">
                  <li>Check the rejection reasons in your registered email</li>
                  <li>Correct any errors in your application</li>
                  <li>Contact support for clarification</li>
                  <li>Resubmit your application after corrections</li>
                </ul>
              </div>
            )}

            {currentApplication.status === "Approved" && (
              <div className="mt-4 bg-green-50 p-3 rounded-md">
                <h4 className="font-bold text-green-800 mb-1">Next Steps:</h4>
                <ul className="list-disc pl-5 text-sm text-green-700 space-y-1">
                  <li>Wait for disbursement (typically 3-5 working days)</li>
                  <li>Check your registered bank account</li>
                  <li>Contact support if not received within 7 days</li>
                </ul>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowStatusPopup(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-green-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          <FaSearch className="mr-2" /> Track Your Loan Application
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Stay Informed About Your Loan Process
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-time updates on your agricultural loan application status
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tracking Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaSearch className="mr-2 text-green-600" /> Track Your Loan
            </h2>

            <form
              onSubmit={(e) => {
                if (
                  trackingMethod === "aadhaar" ||
                  trackingMethod === "mobile"
                ) {
                  e.preventDefault();
                  handleSendOtp();
                } else {
                  handleSearch(e);
                }
              }}
            >
              {/* Tracking Method Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Tracking Method
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setTrackingMethod("application")}
                    className={`p-2 rounded border flex flex-col items-center cursor-pointer ${
                      trackingMethod === "application"
                        ? "bg-green-100 border-green-500"
                        : "bg-gray-50 border-gray-300"
                    }`}
                  >
                    <FaFileAlt className="mb-1" />
                    <span className="text-sm">Application ID</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrackingMethod("aadhaar")}
                    className={`p-2 rounded border flex flex-col items-center cursor-pointer ${
                      trackingMethod === "aadhaar"
                        ? "bg-green-100 border-green-500"
                        : "bg-gray-50 border-gray-300"
                    }`}
                  >
                    <FaIdCard className="mb-1" />
                    <span className="text-sm">Aadhaar</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrackingMethod("mobile")}
                    className={`p-2 rounded border flex flex-col items-center cursor-pointer ${
                      trackingMethod === "mobile"
                        ? "bg-green-100 border-green-500"
                        : "bg-gray-50 border-gray-300"
                    }`}
                  >
                    <FaMobileAlt className="mb-1" />
                    <span className="text-sm">Mobile</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTrackingMethod("portal")}
                    className={`p-2 rounded border flex flex-col items-center cursor-pointer ${
                      trackingMethod === "portal"
                        ? "bg-green-100 border-green-500"
                        : "bg-gray-50 border-gray-300"
                    }`}
                  >
                    <FaUserShield className="mb-1" />
                    <span className="text-sm">Portal Login</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Input Fields */}
              {trackingMethod === "application" && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Application ID
                  </label>
                  <input
                    type="text"
                    value={applicationId}
                    onChange={(e) => setApplicationId(e.target.value)}
                    placeholder="Enter your application number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              )}

              {trackingMethod === "aadhaar" && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhaar Number
                  </label>
                  <input
                    type="text"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    placeholder="Enter 12-digit Aadhaar"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    maxLength="12"
                    required
                  />
                </div>
              )}

              {trackingMethod === "mobile" && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registered Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    maxLength="10"
                    required
                  />
                </div>
              )}

              {trackingMethod === "portal" && (
                <div className="bg-yellow-50 p-4 rounded-md mb-4">
                  <p className="text-yellow-700">
                    Please login to your Farmer Portal account to view all your
                    applications.
                  </p>
                  <a
                    href={`https://${SUPPORT_INFO.portal}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-4 py-2 bg-green-600 text-white rounded-md text-sm"
                  >
                    Go to Portal
                  </a>
                </div>
              )}

              {error && (
                <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={resetSearch}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
                >
                  Reset
                </button>
                {trackingMethod !== "portal" && (
                  <button
                    type="submit"
                    className={`px-4 py-2 text-white rounded-md ${TRACKING_BUTTON_STYLES[trackingMethod].bg} ${TRACKING_BUTTON_STYLES[trackingMethod].hover}`}
                  >
                    {TRACKING_BUTTON_STYLES[trackingMethod].text}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Status Stages Explanation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaInfoCircle className="mr-2 text-green-600" /> Loan Status
              Stages Explained
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {STATUS_STAGES.map((stage) => (
                    <tr key={stage.status}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${stage.color}`}
                        >
                          {stage.icon} {stage.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                        {stage.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Tracking Methods */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">
              🪪 Ways to Track Your Loan
            </h2>
            <div className="space-y-4">
              {TRACKING_METHODS.map((method, index) => (
                <div key={index} className="border-b pb-4 last:border-0">
                  <h3 className="font-bold flex items-center">
                    <span className="text-xl mr-2">{method.icon}</span>
                    {method.method}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">📞 Need Assistance?</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-green-600 mr-3" />
                <div>
                  <p className="font-medium">Customer Support</p>
                  <p className="text-green-600">{SUPPORT_INFO.helpline}</p>
                  <p className="text-xs text-gray-500">
                    {SUPPORT_INFO.workingHours}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-600 mr-3" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <a
                    href={`mailto:${SUPPORT_INFO.email}`}
                    className="text-green-600 hover:underline"
                  >
                    {SUPPORT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-green-600 mr-3" />
                <div>
                  <p className="font-medium">Service Centers</p>
                  <p className="text-sm text-gray-600">
                    Visit your nearest AgriNexus Service Center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanTracking;
