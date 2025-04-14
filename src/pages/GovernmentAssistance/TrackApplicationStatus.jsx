import React, { useState, useEffect } from "react";
import {
  APPLICATION_STATUSES,
  STATUS_DESCRIPTIONS,
  SAMPLE_APPLICATIONS,
  HELPLINES,
} from "@/constants/GovtAss/pplyForSubsidy.constnace";
import { Badge } from "@/components/ui/badge";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaMoneyBillWave,
  FaPaperPlane,
  FaSearch,
  FaLock,
  FaInfoCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const StatusPopup = ({ status, onClose, application }) => {
  const statusConfig = {
    [APPLICATION_STATUSES.SUBMITTED]: {
      icon: <FaPaperPlane className="text-blue-500 text-4xl" />,
      color: "bg-blue-100 text-blue-800",
      title: "Application Submitted",
    },
    [APPLICATION_STATUSES.UNDER_REVIEW]: {
      icon: <FaClock className="text-yellow-500 text-4xl" />,
      color: "bg-yellow-100 text-yellow-800",
      title: "Under Review",
    },
    [APPLICATION_STATUSES.APPROVED]: {
      icon: <FaCheckCircle className="text-green-500 text-4xl" />,
      color: "bg-green-100 text-green-800",
      title: "Application Approved",
    },
    [APPLICATION_STATUSES.REJECTED]: {
      icon: <FaTimesCircle className="text-red-500 text-4xl" />,
      color: "bg-red-100 text-red-800",
      title: "Application Rejected",
    },
    [APPLICATION_STATUSES.PAYMENT_PROCESSED]: {
      icon: <FaMoneyBillWave className="text-purple-500 text-4xl" />,
      color: "bg-purple-100 text-purple-800",
      title: "Payment Processed",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            {currentStatus.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center text-center gap-4 py-4">
          <div className="p-4 rounded-full bg-white shadow-lg">
            {currentStatus.icon}
          </div>

          <div className="w-full bg-gray-50 p-4 rounded-md text-left">
            <h3 className="font-bold mb-2">Application Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="text-gray-600">ID:</p>
              <p className="font-medium">{application.id}</p>
              <p className="text-gray-600">Name:</p>
              <p className="font-medium">{application.name}</p>
              <p className="text-gray-600">Scheme:</p>
              <p className="font-medium">{application.scheme}</p>
              <p className="text-gray-600">Date:</p>
              <p className="font-medium">{application.date}</p>
            </div>
          </div>

          <div className={`p-4 rounded-lg w-full ${currentStatus.color}`}>
            <h3 className="font-bold text-lg">{status}</h3>
            <p className="text-sm mt-2">{STATUS_DESCRIPTIONS[status]}</p>
          </div>

          {status === APPLICATION_STATUSES.REJECTED && (
            <div className="w-full bg-red-50 p-3 rounded-md text-left">
              <h4 className="font-bold text-red-800 mb-1">Next Steps:</h4>
              <ul className="list-disc pl-5 text-sm text-red-700 space-y-1">
                <li>Review the rejection reasons (if provided)</li>
                <li>Correct any errors in your application</li>
                <li>Contact support for clarification</li>
                <li>Resubmit your application</li>
              </ul>
            </div>
          )}

          {status === APPLICATION_STATUSES.APPROVED && (
            <div className="w-full bg-green-50 p-3 rounded-md text-left">
              <h4 className="font-bold text-green-800 mb-1">Next Steps:</h4>
              <ul className="list-disc pl-5 text-sm text-green-700 space-y-1">
                <li>Wait for payment processing</li>
                <li>Check your bank account regularly</li>
                <li>Contact support if payment is delayed</li>
              </ul>
            </div>
          )}

          <button
            onClick={onClose}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-200"
          >
            Close
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ApplicationStatusCard = ({ application, onViewDetails }) => {
  const statusColors = {
    [APPLICATION_STATUSES.SUBMITTED]: "bg-blue-100 text-blue-800",
    [APPLICATION_STATUSES.UNDER_REVIEW]: "bg-yellow-100 text-yellow-800",
    [APPLICATION_STATUSES.APPROVED]: "bg-green-100 text-green-800",
    [APPLICATION_STATUSES.REJECTED]: "bg-red-100 text-red-800",
    [APPLICATION_STATUSES.PAYMENT_PROCESSED]: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-green-500 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => onViewDetails(application)}
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            statusColors[application.status]
          }`}
        >
          View Details
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-500">Application ID</p>
          <p className="font-bold">{application.id}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Applicant Name</p>
          <p className="font-bold">{application.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Date of Application</p>
          <p className="font-bold">{application.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Scheme Applied For</p>
          <p className="font-bold">{application.scheme}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">Current Status</p>
        <div className="flex items-center justify-between mt-1">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              statusColors[application.status]
            }`}
          >
            {application.status}
          </span>
          <p className="text-sm text-gray-500">
            Last Updated: {application.lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

const TrackApplicationStatus = () => {
  const [searchData, setSearchData] = useState({
    applicationId: "",
    mobileNumber: "",
    farmerId: "",
  });
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showStatusForApplication, setShowStatusForApplication] =
    useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setError("");

    // Validate inputs
    if (!searchData.applicationId && !searchData.mobileNumber) {
      setError("Please enter either Application ID or Mobile Number");
      setIsSearching(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const foundApplications = SAMPLE_APPLICATIONS.filter((app) => {
        return (
          (searchData.applicationId && app.id === searchData.applicationId) ||
          (searchData.mobileNumber && app.mobile === searchData.mobileNumber) ||
          (searchData.farmerId && app.farmerId === searchData.farmerId)
        );
      });

      if (foundApplications.length === 0) {
        setError("No applications found with the provided details");
      } else {
        setSearchResults(foundApplications);
        // Automatically show popup if there's exactly one result
        if (foundApplications.length === 1) {
          setShowStatusForApplication(foundApplications[0]);
        }
      }
      setIsSearching(false);
    }, 1500);
  };

  const resetSearch = () => {
    setSearchData({
      applicationId: "",
      mobileNumber: "",
      farmerId: "",
    });
    setSearchResults(null);
    setError("");
    setShowStatusForApplication(null);
  };

  const handleViewDetails = (application) => {
    setShowStatusForApplication(application);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Status Popup */}
      {showStatusForApplication && (
        <StatusPopup
          status={showStatusForApplication.status}
          onClose={() => setShowStatusForApplication(null)}
          application={showStatusForApplication}
        />
      )}

      {/* Header */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          <FaCheckCircle className="mr-2" /> Application Status Tracker
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Track Your Subsidy Application
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Check the progress of your government subsidy or scheme application in
          real-time
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Search Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaSearch className="mr-2 text-green-500" /> Enter Your Application
            Details
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            To view your current application status, please provide the
            following:
          </p>

          <form onSubmit={handleSearch}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Application/Acknowledgment Number
                </label>
                <input
                  type="text"
                  name="applicationId"
                  value={searchData.applicationId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g. FARM-AB12CD34"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Registered Mobile Number{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={searchData.mobileNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
                  placeholder="10-digit mobile number"
                  required={!searchData.applicationId}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Required if you don't have Application ID
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Farmer ID / Aadhaar Number (optional)
                </label>
                <input
                  type="text"
                  name="farmerId"
                  value={searchData.farmerId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-green-500 focus:border-green-500"
                  placeholder="For additional verification"
                />
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex items-center">
                    <FaInfoCircle className="text-red-500 mr-2" />
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={resetSearch}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-200"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={isSearching}
                  className={`bg-green-600 hover:bg-green-700 cursor-pointer text-white font-bold py-2 px-4 rounded transition duration-200 ${
                    isSearching ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSearching ? (
                    <span className="flex items-center justify-center ">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Searching...
                    </span>
                  ) : (
                    "Check Status"
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-6 bg-green-50 p-4 rounded-md">
            <p className="text-sm text-green-800 flex items-start">
              <FaLock className="mr-2 mt-0.5" />
              Your information is secure and used only for tracking purposes
            </p>
          </div>
        </div>

        {/* Search Results */}

        {/* Status Legend */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-green-500" /> What Each Status
            Means
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
                {Object.entries(STATUS_DESCRIPTIONS).map(
                  ([status, description]) => (
                    <tr key={status}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-normal text-sm text-gray-500">
                        {description}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-green-500" /> Need Help with
            Tracking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {HELPLINES.map((help, i) => (
              <div
                key={i}
                className="bg-gray-50 p-4 rounded-md border border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <div className="flex items-center">
                  {i === 0 ? (
                    <FaPhone className="text-green-500 mr-2" />
                  ) : i === 1 ? (
                    <FaEnvelope className="text-green-500 mr-2" />
                  ) : (
                    <FaMapMarkerAlt className="text-green-500 mr-2" />
                  )}
                  <div>
                    <h4 className="font-medium text-gray-800">{help.name}</h4>
                    <p className="text-green-600">{help.number}</p>
                    <p className="text-xs text-gray-500">{help.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 p-4 rounded-md">
            <h3 className="font-bold mb-2 flex items-center">
              <FaLock className="mr-2" /> Reminder
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>
                Keep your acknowledgment number safe for future references
              </li>
              <li>Avoid sharing sensitive information publicly</li>
              <li>
                If you haven't received updates within 14 working days, contact
                support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackApplicationStatus;
