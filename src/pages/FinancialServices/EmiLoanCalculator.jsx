import React, { useState, useEffect } from "react";
import {
  LOAN_TYPES,
  TIPS,
} from "@/constants/FinancialServices/emiCalculator.constance";
import { Badge } from "@/components/ui/badge";
import {
  FaCalculator,
  FaInfoCircle,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaRupeeSign,
  FaChartLine,
} from "react-icons/fa";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(12);
  const [tenureType, setTenureType] = useState("months");
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [selectedLoanType, setSelectedLoanType] = useState(null);
  const [showLoanDetails, setShowLoanDetails] = useState(false);

  // Calculate EMI whenever inputs change
  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure, tenureType]);

  const calculateEMI = () => {
    const months = tenureType === "years" ? tenure * 12 : tenure;
    const monthlyRate = interestRate / 12 / 100;

    const emiValue =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPaymentValue = emiValue * months;
    const totalInterestValue = totalPaymentValue - loanAmount;

    setEmi(isFinite(emiValue) ? emiValue : 0);
    setTotalInterest(isFinite(totalInterestValue) ? totalInterestValue : 0);
    setTotalPayment(isFinite(totalPaymentValue) ? totalPaymentValue : 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleLoanTypeSelect = (loanType) => {
    setSelectedLoanType(loanType);
    setLoanAmount(loanType.minAmount);
    setInterestRate(loanType.defaultRate);
    setTenure(loanType.minTenure);
    setTenureType("months");
  };

  const handleAmountChange = (value) => {
    const amount = parseInt(value) || 0;
    if (selectedLoanType) {
      if (amount < selectedLoanType.minAmount) {
        setLoanAmount(selectedLoanType.minAmount);
      } else if (amount > selectedLoanType.maxAmount) {
        setLoanAmount(selectedLoanType.maxAmount);
      } else {
        setLoanAmount(amount);
      }
    } else {
      setLoanAmount(amount);
    }
  };

  const handleTenureChange = (value) => {
    const newTenure = parseInt(value) || 0;
    if (selectedLoanType) {
      if (newTenure < selectedLoanType.minTenure) {
        setTenure(selectedLoanType.minTenure);
      } else if (newTenure > selectedLoanType.maxTenure) {
        setTenure(selectedLoanType.maxTenure);
      } else {
        setTenure(newTenure);
      }
    } else {
      setTenure(newTenure);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
          <FaCalculator className="mr-2" /> EMI Loan Calculator
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Plan Your Agricultural Loan Repayment
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate EMIs for all types of farm loans - from KCC to machinery
          financing
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FaCalculator className="mr-2 text-green-600" /> EMI Calculator
            </h2>

            {/* Loan Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Loan Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {LOAN_TYPES.map((loanType) => (
                  <button
                    key={loanType.name}
                    onClick={() => handleLoanTypeSelect(loanType)}
                    className={`p-2 rounded border text-sm flex items-center cursor-pointer ${
                      selectedLoanType?.name === loanType.name
                        ? "bg-green-100 border-green-500"
                        : "bg-gray-50 border-gray-300"
                    }`}
                  >
                    <span className="mr-2">{loanType.icon}</span>
                    {loanType.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedLoanType && (
              <div className="mb-4 bg-green-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{selectedLoanType.name}</h3>
                    <p className="text-sm text-gray-600">
                      {selectedLoanType.purpose}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowLoanDetails(!showLoanDetails)}
                    className="text-green-600 text-sm cursor-pointer hover:underline "
                  >
                    {showLoanDetails ? "Hide Details" : "Show Details"}
                  </button>
                </div>
                {showLoanDetails && (
                  <div className="mt-2 text-sm">
                    <p>
                      Amount Range: {formatCurrency(selectedLoanType.minAmount)}{" "}
                      - {formatCurrency(selectedLoanType.maxAmount)}
                    </p>
                    <p>
                      Tenure: {selectedLoanType.minTenure} -{" "}
                      {selectedLoanType.maxTenure} months
                    </p>
                    <p>Typical Interest: {selectedLoanType.defaultRate}%</p>
                  </div>
                )}
              </div>
            )}

            {/* Loan Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="range"
                min={selectedLoanType?.minAmount || 10000}
                max={selectedLoanType?.maxAmount || 5000000}
                step="1000"
                value={loanAmount}
                onChange={(e) => handleAmountChange(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span>
                  {formatCurrency(selectedLoanType?.minAmount || 10000)}
                </span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => handleAmountChange(e.target.value)}
                  className="w-32 px-3 py-1 border border-gray-300 rounded text-center font-medium"
                />
                <span>
                  {formatCurrency(selectedLoanType?.maxAmount || 5000000)}
                </span>
              </div>
            </div>

            {/* Interest Rate Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (% per annum)
              </label>
              <input
                type="range"
                min="4"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span>4%</span>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(parseFloat(e.target.value) || 0)
                  }
                  className="w-32 px-3 py-1 border border-gray-300 rounded text-center font-medium"
                />
                <span>20%</span>
              </div>
            </div>

            {/* Tenure Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="range"
                  min={selectedLoanType?.minTenure || 6}
                  max={selectedLoanType?.maxTenure || 120}
                  step="1"
                  value={tenure}
                  onChange={(e) => handleTenureChange(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => handleTenureChange(e.target.value)}
                    className="w-20 px-3 py-1 border border-gray-300 rounded text-center font-medium mr-2"
                  />
                  <select
                    value={tenureType}
                    onChange={(e) => setTenureType(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded"
                  >
                    <option value="months">Months</option>
                    <option value="years">Years</option>
                  </select>
                </div>
                <span>
                  {tenureType === "years"
                    ? `${tenure} Years (${tenure * 12} Months)`
                    : `${tenure} Months`}
                </span>
              </div>
            </div>

            {/* Results */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-center">
                Your EMI Plan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded text-center">
                  <p className="text-sm text-gray-500">Monthly EMI</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(emi)}
                  </p>
                </div>
                <div className="bg-white p-4 rounded text-center">
                  <p className="text-sm text-gray-500">Total Interest</p>
                  <p className="text-2xl font-bold text-red-500">
                    {formatCurrency(totalInterest)}
                  </p>
                </div>
                <div className="bg-white p-4 rounded text-center">
                  <p className="text-sm text-gray-500">Total Payment</p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(totalPayment)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EMI Explanation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaInfoCircle className="mr-2 text-blue-600" /> What is EMI?
            </h2>
            <p className="text-gray-700 mb-4">
              EMI (Equated Monthly Installment) is the fixed amount you pay
              every month towards repaying a loan. It includes both the
              principal amount and the interest.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">EMI Calculation Formula:</h3>
              <code className="block bg-white p-2 rounded font-mono overflow-x-auto">
                EMI = [P × R × (1 + R)^N] / [(1 + R)^N – 1]
              </code>
              <p className="text-sm mt-2">
                Where: <br />
                P = Loan Amount <br />
                R = Monthly Interest Rate (Annual Rate / 12 / 100) <br />N =
                Number of Monthly Installments
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Why Use Calculator */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaChartLine className="mr-2 text-green-600" /> Why Use the EMI
              Calculator?
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Helps you plan finances better</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Avoids over-borrowing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Choose loan tenures that suit your budget</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Evaluate multiple loan offers</span>
              </li>
            </ul>
          </div>

          {/* Tips Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">
              📚 Tips for Loan Management
            </h2>
            <ul className="space-y-3">
              {TIPS.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">💬 Need Help?</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-green-600 mr-3" />
                <div>
                  <p className="font-medium">Financial Advisory Helpline</p>
                  <p className="text-blue-600">1800-567-8800</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-600 mr-3" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <a
                    href="mailto:emihelp@agrinexus.gov.in"
                    className="text-blue-600 hover:underline"
                  >
                    emihelp@agrinexus.gov.in
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-green-600 mr-3" />
                <div>
                  <p className="font-medium">More Tools</p>
                  <a
                    href="https://www.agrinexus.gov.in/tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.agrinexus.gov.in/tools
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
