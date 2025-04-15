import React, { useState } from "react";
import {
  LOAN_TYPES,
  DOCUMENTS_REQUIRED,
  APPLICATION_STEPS,
  CONSIDERATIONS,
  SUPPORT_INFO,
} from "@/constants/FinancialServices/loanApplication.constants";
import { Badge } from "@/components/ui/badge";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFileAlt,
  FaCheckCircle,
  FaRupeeSign,
  FaInfoCircle,
} from "react-icons/fa";

const LoanApplication = () => {
  const [selectedLoanType, setSelectedLoanType] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleLoanTypeSelect = (loanType) => {
    setSelectedLoanType(loanType);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-blue-100 text-sm">
          <FaRupeeSign className="mr-2" /> Apply for a Loan
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Secure Financial Assistance for Your Agricultural Needs
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get funding for crops, equipment, irrigation, and more with flexible
          repayment options
        </p>
      </div>

      {/* Why Apply Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaInfoCircle className="mr-2 text-blue-600" /> Why Apply for an
            Agricultural Loan?
          </h2>
          <p className="text-gray-700 mb-4">
            Farmers often need timely funding for crop production, equipment
            purchase, irrigation setup, livestock expansion, or farm
            infrastructure. Agricultural loans help in meeting these needs
            without financial stress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800">Low Interest Rates</h3>
              <p className="text-sm">As low as 4% with government subsidies</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">Flexible Tenure</h3>
              <p className="text-sm">Up to 15 years for infrastructure loans</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Quick Processing</h3>
              <p className="text-sm">Approval in 7-15 working days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Loan Types You Can Apply For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOAN_TYPES.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-green-500 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleLoanTypeSelect(loan)}
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{loan.icon}</span>
                  <h3 className="text-xl font-bold">{loan.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Max Amount</p>
                    <p className="font-medium">{loan.maxAmount}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Tenure</p>
                    <p className="font-medium">{loan.tenure}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Interest</p>
                    <p className="font-medium">{loan.interest}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Subsidy</p>
                    <p className="font-medium">{loan.subsidy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">📋 Documents Required</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DOCUMENTS_REQUIRED.map((doc, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📝 Steps to Apply</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPLICATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="border rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3">
                  {step.step}
                </div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form (Conditional) */}
      {showForm && (
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">
              Apply for {selectedLoanType?.name}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter required amount"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    District
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your district"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="MH">Maharashtra</option>
                    <option value="UP">Uttar Pradesh</option>
                    {/* Add all states */}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Land Details (Owned/Leased)
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Enter land details including area, location, and ownership type"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose of Loan
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows="3"
                  placeholder="Explain how you plan to use the loan amount"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Documents (PDF/JPEG/PNG)
                </label>
                <input
                  type="file"
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Max file size: 5MB per document
                </p>
              </div>

              <div className="flex items-center">
                <input
                  id="terms-checkbox"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="terms-checkbox"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the terms and conditions and confirm all
                  information is accurate
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md transition duration-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Considerations Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">
            ⚠️ Things to Consider Before Applying
          </h2>
          <ul className="space-y-3">
            {CONSIDERATIONS.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Help Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">📞 Need Help Applying?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 flex items-center">
                <FaPhone className="mr-2 text-blue-600" /> Helpline
              </h3>
              <p className="text-blue-600 font-medium">
                {SUPPORT_INFO.helpline}
              </p>
              <p className="text-sm text-gray-500">
                {SUPPORT_INFO.workingHours}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-green-600" /> Email Support
              </h3>
              <a
                href={`mailto:${SUPPORT_INFO.email}`}
                className="text-green-600 font-medium hover:underline"
              >
                {SUPPORT_INFO.email}
              </a>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2 flex items-center">
                <FaGlobe className="mr-2 text-purple-600" /> Online Portal
              </h3>
              <a
                href={`https://${SUPPORT_INFO.portal}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-medium hover:underline"
              >
                {SUPPORT_INFO.portal}
              </a>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">📍 Visit Your Nearest Center</h3>
            <p className="text-gray-700">
              Agricultural Banks, Cooperative Societies, or Common Service
              Centers (CSCs) can help with application process
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanApplication;
