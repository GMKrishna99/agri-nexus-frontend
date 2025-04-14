import React from "react";
import {
  LOAN_SCHEMES,
  ELIGIBILITY_CRITERIA,
  REQUIRED_DOCUMENTS,
  APPLICATION_CHANNELS,
  SUPPORT_INFO,
} from "@/constants/GovtAss/LoanPrograms.constants";
import { Badge } from "@/components/ui/badge";
import {
  FaPhone,
  FaGlobe,
  FaEnvelope,
  FaFileAlt,
  FaCheckCircle,
  FaLandmark,
} from "react-icons/fa";

const GovernmentLoanPrograms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-blue-100 text-sm">
          <FaLandmark className="mr-2" /> Government Loan Programs
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Affordable Credit for Farmers
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Low-interest loans to grow, invest, and innovate in agriculture
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaFileAlt className="mr-2 text-green-600" /> Overview
          </h2>
          <p className="text-gray-700 mb-4">
            The Government of India offers various agricultural loan programs to
            support farmers with low-interest credit for equipment, seeds,
            irrigation, land improvement, livestock, and more. These loan
            schemes help improve productivity and financial security.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">Low Interest Rates</h3>
              <p className="text-sm">As low as 4% with subsidies</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800">Flexible Repayment</h3>
              <p className="text-sm">Up to 7 years for long-term loans</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Subsidies Available</h3>
              <p className="text-sm">Up to 36% for eligible applicants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Schemes Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaCheckCircle className="mr-2 text-green-600" /> Available Loan
          Schemes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOAN_SCHEMES.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-green-500 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{scheme.name}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Purpose</p>
                    <p className="font-medium">{scheme.purpose}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-gray-500">Interest Rate</p>
                      <p className="font-medium">{scheme.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Repayment</p>
                      <p className="font-medium">{scheme.repaymentPeriod}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Max Amount</p>
                    <p className="font-medium">{scheme.maxAmount}</p>
                  </div>
                  {scheme.subsidy && (
                    <div className="bg-yellow-50 p-2 rounded">
                      <p className="text-sm text-gray-500">Subsidy</p>
                      <p className="font-medium text-yellow-700">
                        {scheme.subsidy}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">✅ Eligibility Criteria</h2>
          <ul className="space-y-2">
            {ELIGIBILITY_CRITERIA.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">📝 Documents Required</h2>
          <ul className="space-y-2">
            {REQUIRED_DOCUMENTS.map((doc, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">🧭 Application Process</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPLICATION_CHANNELS.map((channel, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="text-3xl mb-2">{channel.icon}</div>
                <h3 className="font-bold mb-1">{channel.name}</h3>
                <p className="text-sm text-gray-600">{channel.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Steps to Apply:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Select your desired loan scheme</li>
              <li>Prepare all required documents</li>
              <li>Visit application channel of your choice</li>
              <li>Submit application form with documents</li>
              <li>Get acknowledgment number</li>
              <li>Track application status online</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">💬 Assistance & Support</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaPhone className="text-green-600 mr-3 text-xl" />
              <div>
                <h3 className="font-bold">Helpline</h3>
                <p className="text-gray-700">{SUPPORT_INFO.helpline}</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaGlobe className="text-green-600 mr-3 text-xl" />
              <div>
                <h3 className="font-bold">Official Portal</h3>
                <a
                  href={`https://${SUPPORT_INFO.portal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {SUPPORT_INFO.portal}
                </a>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaEnvelope className="text-green-600 mr-3 text-xl" />
              <div>
                <h3 className="font-bold">Email Support</h3>
                <a
                  href={`mailto:${SUPPORT_INFO.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {SUPPORT_INFO.email}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-800 mb-2">
              📌 Important Notes
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Always apply through official channels</li>
              <li>Keep acknowledgment numbers safely</li>
              <li>Repay on time to maintain eligibility for future loans</li>
              <li>Avail subsidies where available with the loan</li>
              <li>Beware of middlemen - no fees for application processing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentLoanPrograms;
