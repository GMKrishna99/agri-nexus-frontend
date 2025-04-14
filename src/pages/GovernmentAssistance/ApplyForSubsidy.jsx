import React, { useState } from "react";
import {
  STATES,
  CROPS,
  SCHEMES,
  DOCUMENTS_REQUIRED,
  HELPLINES,
  FARMER_TYPES,
  BANK_NAMES,
} from "@/constants/GovtAss/pplyForSubsidy.constnace";
import { Badge } from "@/components/ui/badge";
import { FaCheckCircle } from "react-icons/fa";

// Dialog component for showing messages
const Dialog = ({ title, message, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{message}</p>
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ApplyForSubsidy = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    farmerId: "",
    mobileNumber: "",
    email: "",
    state: STATES[0],
    district: "",
    farmerType: FARMER_TYPES[0],
    cropType: CROPS[0],
    subsidyScheme: "",
    bankName: BANK_NAMES[0],
    accountNumber: "",
    ifscCode: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    message: "",
  });
  const [selectedDocuments, setSelectedDocuments] = useState(
    DOCUMENTS_REQUIRED.reduce((acc, doc) => {
      acc[doc] = false;
      return acc;
    }, {})
  );
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDocumentToggle = (doc) => {
    setSelectedDocuments({
      ...selectedDocuments,
      [doc]: !selectedDocuments[doc],
    });
  };

  const validateForm = () => {
    // Check all required fields
    if (
      !formData.fullName ||
      !formData.farmerId ||
      !formData.mobileNumber ||
      !formData.district ||
      !formData.subsidyScheme ||
      !formData.accountNumber ||
      !formData.ifscCode
    ) {
      return "Please fill all required fields";
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      return "Please enter a valid 10-digit mobile number";
    }

    // Validate Aadhaar (simplified validation for demo)
    if (!/^\d{12}$/.test(formData.farmerId.replace(/\s/g, ""))) {
      return "Please enter a valid 12-digit Aadhaar number";
    }

    // Validate IFSC code (simplified validation for demo)
    if (!/^[A-Za-z]{4}\d{7}$/.test(formData.ifscCode)) {
      return "Please enter a valid IFSC code (4 letters followed by 7 digits)";
    }

    // Check if all documents are selected
    const allDocumentsSelected =
      Object.values(selectedDocuments).every(Boolean);
    if (!allDocumentsSelected) {
      return "Please confirm you have all required documents";
    }

    // Check terms acceptance
    if (!termsAccepted) {
      return "Please accept the terms and conditions";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationError = validateForm();
    if (validationError) {
      setDialogContent({
        title: "Validation Error",
        message: validationError,
      });
      setShowDialog(true);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      // In a real app, you would make an API call here
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate application ID
      const applicationId = `FARM-${Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase()}`;

      setDialogContent({
        title: "Application Submitted Successfully",
        message: `Your application ID is: ${applicationId}. You will receive a confirmation SMS shortly.`,
      });
      setShowDialog(true);
      setSubmitted(true);
    } catch (error) {
      setDialogContent({
        title: "Submission Failed",
        message:
          "There was an error submitting your application. Please try again later.",
      });
      setShowDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Application Submitted Successfully!
          </h2>
          <div className="mb-6">
            <p className="font-medium">Your application is being processed</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-md mb-6 text-left">
            <h3 className="font-bold mb-2">Next Steps:</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>You will receive an SMS with your application details</li>
              <li>Our representative may contact you for verification</li>
              <li>Check your application status online using your ID</li>
              <li>Approval typically takes 15-30 working days</li>
            </ol>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              // Reset form
              setFormData({
                fullName: "",
                farmerId: "",
                mobileNumber: "",
                email: "",
                state: STATES[0],
                district: "",
                farmerType: FARMER_TYPES[0],
                cropType: CROPS[0],
                subsidyScheme: "",
                bankName: BANK_NAMES[0],
                accountNumber: "",
                ifscCode: "",
              });
              setSelectedDocuments(
                DOCUMENTS_REQUIRED.reduce((acc, doc) => {
                  acc[doc] = false;
                  return acc;
                }, {})
              );
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Apply for Another Scheme
          </button>

          <div className="mt-6 text-left">
            <h4 className="font-bold mb-2">Contact Information:</h4>
            <p className="text-sm">
              For any queries, please contact our helpline: 1800-123-4567
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {showDialog && (
        <Dialog
          title={dialogContent.title}
          message={dialogContent.message}
          onClose={() => setShowDialog(false)}
        />
      )}
      {/* Header */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          <FaCheckCircle className="mr-2" /> Apply for Subsidy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Government Subsidy Application
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Apply for agricultural subsidies and schemes
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        {/* Progress Tracker */}
        <div className="flex mb-8 bg-white p-2 rounded-full shadow-inner">
          {["Start", "Details", "Bank", "Submit"].map((step, i) => (
            <div key={i} className="flex-1 text-center">
              <div
                className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center 
                ${i < 2 ? "bg-green-500 text-white" : "bg-gray-200"}`}
              >
                {i + 1}
              </div>
              <p className="text-xs mt-1">{step}</p>
            </div>
          ))}
        </div>

        {/* Main Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
        >
          {/* Section 1: Basic Info */}
          <div className="mb-8 p-4 border-b-2 border-green-200">
            <h2 className="text-xl font-semibold mb-4">Farmer Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Aadhaar Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="farmerId"
                  value={formData.farmerId}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                  placeholder="12-digit Aadhaar number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Farmer Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="farmerType"
                  value={formData.farmerType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                >
                  {FARMER_TYPES.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Farming Details */}
          <div className="mb-8 p-4 border-b-2 border-green-200">
            <h2 className="text-xl font-semibold mb-4">Farming Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                >
                  {STATES.map((state, i) => (
                    <option key={i} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  District <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Crop Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                >
                  {CROPS.map((crop, i) => (
                    <option key={i} value={crop}>
                      {crop}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subsidy Scheme <span className="text-red-500">*</span>
                </label>
                <select
                  name="subsidyScheme"
                  value={formData.subsidyScheme}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                >
                  <option value="">Select Scheme</option>
                  {SCHEMES.map((scheme) => (
                    <option key={scheme.id} value={scheme.id}>
                      {scheme.name} - {scheme.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Bank Details */}
          <div className="mb-8 p-4 border-b-2 border-green-200">
            <h2 className="text-xl font-semibold mb-4">Bank Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <select
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                >
                  {BANK_NAMES.map((bank, i) => (
                    <option key={i} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Account Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  IFSC Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                  placeholder="4 letters followed by 7 digits"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Documents */}
          <div className="mb-8 p-4 border-b-2 border-green-200">
            <h2 className="text-xl font-semibold mb-4">Required Documents</h2>

            <div className="space-y-3">
              {DOCUMENTS_REQUIRED.map((doc, i) => (
                <div key={i} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      checked={selectedDocuments[doc]}
                      onChange={() => handleDocumentToggle(doc)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-medium text-gray-700">{doc}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  I agree to all terms and conditions{" "}
                  <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  By submitting this form, I declare that all information
                  provided is true and accurate.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md shadow-sm transition duration-200 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

          {/* Help Section */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Need Help?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {HELPLINES.map((help, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-md shadow-sm border border-gray-200"
                >
                  <h4 className="font-medium text-gray-800">{help.name}</h4>
                  <p className="text-green-600">{help.number}</p>
                  <p className="text-xs text-gray-500">{help.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForSubsidy;
