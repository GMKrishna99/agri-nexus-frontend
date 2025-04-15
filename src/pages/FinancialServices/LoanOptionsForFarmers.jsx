import React from "react";
import {
  LOAN_TYPES,
  ELIGIBILITY,
  DOCUMENTS_REQUIRED,
  APPLICATION_PROCESS,
  APPLYING_INSTITUTIONS,
  SUPPORT_INFO,
} from "@/constants/FinancialServices/LoanOptions.constants";
import { Badge } from "@/components/ui/badge";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFileAlt,
  FaLandmark,
  FaHandshake,
  FaClipboardList,
  FaRupeeSign,
} from "react-icons/fa";

const LoanOptionsForFarmers = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          <FaRupeeSign className="mr-2" /> Loan Options for Farmers
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Farmers Through Financial Assistance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tailored loan solutions for every agricultural need
        </p>
      </div>

      {/* Overview Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaFileAlt className="mr-2 text-green-600" /> Overview
          </h2>
          <p className="text-gray-700 mb-4">
            Farmers often need financial support to manage crop cycles, invest
            in machinery, purchase seeds, or improve infrastructure. The Indian
            government and banking institutions offer multiple loan options,
            each catering to different agricultural needs with favorable terms
            and subsidies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">Government Backed</h3>
              <p className="text-sm">Subsidies and interest concessions</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800">Flexible Terms</h3>
              <p className="text-sm">From 6 months to 15 years tenure</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Multiple Options</h3>
              <p className="text-sm">
                For crops, equipment, and allied activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaLandmark className="mr-2 text-green-600" /> Types of Loan Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOAN_TYPES.map((loan) => (
            <div
              key={loan.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-l-4 border-green-500"
            >
              <div className="p-6">
                <div className="flex items-start mb-3">
                  <span className="text-3xl mr-3">{loan.icon}</span>
                  <h3 className="text-xl font-bold">{loan.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{loan.description}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Popular Scheme</p>
                    <p className="font-medium">{loan.popularScheme}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-gray-500">Interest Rate</p>
                      <p className="font-medium">{loan.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Max Tenure</p>
                      <p className="font-medium">{loan.tenure}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Loan Amount</p>
                    <p className="font-medium">{loan.maxAmount}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Key Features</p>
                    <ul className="list-disc pl-5 text-sm">
                      {loan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaClipboardList className="mr-2 text-green-600" /> Eligibility
            Criteria
          </h2>
          <ul className="space-y-2">
            {ELIGIBILITY.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaFileAlt className="mr-2 text-green-600" /> Documents Needed
          </h2>
          <ul className="space-y-2">
            {DOCUMENTS_REQUIRED.map((doc, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <FaHandshake className="mr-2 text-green-600" /> How to Apply
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ol className="list-decimal pl-5 space-y-3">
            {APPLICATION_PROCESS.map((step, index) => (
              <li
                key={index}
                className="pb-2 border-b border-gray-100 last:border-0"
              >
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-8 bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Processing Time:</h3>
            <p className="text-gray-700">
              Typically 7-15 working days for crop loans, 15-30 days for term
              loans after complete documentation submission.
            </p>
          </div>
        </div>
      </section>

      {/* Where to Apply Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">🏦 Where to Apply</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Institution
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Schemes Offered
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {APPLYING_INSTITUTIONS.map((institution, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">
                      {institution.name}
                    </td>
                    <td className="px-6 py-4 whitespace-normal">
                      {institution.schemes.join(", ")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {institution.contact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Note: Visit your nearest branch for specific scheme availability
          </div>
        </div>
      </section>

      {/* Help & Assistance Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">💬 Help & Assistance</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaPhone className="text-green-600 mr-3 text-xl" />
              <div>
                <h3 className="font-bold">Loan Helpline</h3>
                <p className="text-gray-700">{SUPPORT_INFO.helpline}</p>
                <p className="text-xs text-gray-500">
                  {SUPPORT_INFO.workingHours}
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaEnvelope className="text-green-600 mr-3 text-xl" />
              <div>
                <h3 className="font-bold">Email Support</h3>
                <a
                  href={`mailto:${SUPPORT_INFO.email}`}
                  className="text-green-600 hover:underline"
                >
                  {SUPPORT_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <FaGlobe className="text-green-600 mr-3 text-xl" />
              <div>
                <h3 className="font-bold">Online Guide</h3>
                <a
                  href={`https://${SUPPORT_INFO.portal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  {SUPPORT_INFO.portal}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-yellow-800 mb-2">Important Notes</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Compare interest rates and terms before applying</li>
              <li>Check subsidy eligibility for maximum benefits</li>
              <li>Beware of middlemen - no fees for application processing</li>
              <li>Maintain good repayment history for future loans</li>
              <li>Insurance coverage is recommended for all loans</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanOptionsForFarmers;
