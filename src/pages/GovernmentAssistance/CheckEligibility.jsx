import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ELIGIBILITY_CRITERIA,
  ELIGIBILITY_BENEFITS,
} from "@/constants/GovtAss/eligibility.constants";
import {
  FaCheckCircle,
  FaUpload,
  FaUserTie,
  FaExternalLinkAlt,
  FaTimesCircle,
  FaArrowLeft,
  FaFilePdf,
  FaFileImage,
} from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const EligibilityChecker = () => {
  // Form state management
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    farmerType: "",
    landSize: "",
    cropType: "",
    region: "",
    hasAadhaar: false,
    hasLandRecords: false,
    incomeRange: "",
    documents: [],
    loanAmount: "",
    loanPurpose: "",
    personalDetails: {
      name: "",
      mobile: "",
      email: "",
      address: "",
    },
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [loanStatus, setLoanStatus] = useState(null);
  const [applicationId, setApplicationId] = useState(null);
  const fileInputRef = useRef(null);

  // Handle input changes
  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      // Add files to form data after "upload"
      setTimeout(() => {
        setFormData((prev) => ({
          ...prev,
          documents: [
            ...prev.documents,
            ...files.map((file) => ({
              name: file.name,
              type: file.type,
              size: file.size,
              lastModified: file.lastModified,
            })),
          ],
        }));
      }, 3500);
    }
  };

  // Remove document
  const removeDocument = (index) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
  };

  // Submit eligibility check
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields are filled
    if (
      !formData.farmerType ||
      !formData.landSize ||
      !formData.cropType ||
      !formData.region ||
      !formData.incomeRange
    ) {
      alert("Please fill all required fields");
      return;
    }

    setCurrentStep(2); // Move to results step
  };

  // Submit loan application
  const submitLoanApplication = () => {
    // Validate personal details
    if (!formData.personalDetails.name || !formData.personalDetails.mobile) {
      alert("Please fill all required personal details");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Generate random application ID
      const appId = `APP-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationId(appId);

      // Randomly determine loan status (80% chance of approval for demo)
      const isApproved = Math.random() < 0.8;
      setLoanStatus(isApproved ? "approved" : "rejected");

      setCurrentStep(4); // Move to results step
    }, 2000);
  };

  // Enhanced matching logic
  const checkEligibility = (scheme) => {
    switch (scheme.id) {
      case "pm-kisan":
        return (
          formData.landSize.includes("Less than") &&
          formData.incomeRange === "Below ₹3 lakh" &&
          formData.hasAadhaar
        );
      case "pmfby":
        return (
          formData.cropType !== "Horticulture" &&
          formData.region !== "Northeast"
        );
      case "kcc":
        return formData.landSize !== "Landless" && formData.hasLandRecords;
      case "pkvy":
        return (
          formData.cropType === "Organic Farming" ||
          formData.farmerType === "Farmer Group"
        );
      default:
        return false;
    }
  };

  const matchedSchemes = ELIGIBILITY_CRITERIA.schemes.filter(checkEligibility);
  const isEligible = matchedSchemes.length > 0;

  const resetForm = () => {
    setFormData({
      farmerType: "",
      landSize: "",
      cropType: "",
      region: "",
      hasAadhaar: false,
      hasLandRecords: false,
      incomeRange: "",
      documents: [],
      loanAmount: "",
      loanPurpose: "",
      personalDetails: {
        name: "",
        mobile: "",
        email: "",
        address: "",
      },
    });
    setCurrentStep(1);
    setLoanStatus(null);
    setApplicationId(null);
  };

  // Get document icon based on type
  const getDocumentIcon = (type) => {
    if (type.includes("pdf")) return <FaFilePdf className="text-red-500" />;
    if (type.includes("image"))
      return <FaFileImage className="text-blue-500" />;
    return <IoDocumentTextOutline className="text-gray-500" />;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Progress Bar */}
      {currentStep > 1 && (
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex flex-col items-center ${
                  currentStep >= step ? "text-green-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    currentStep >= step ? "bg-green-100" : "bg-gray-100"
                  }`}
                >
                  {step}
                </div>
                <span className="text-xs mt-1">
                  {step === 1
                    ? "Eligibility"
                    : step === 2
                    ? "Results"
                    : step === 3
                    ? "Application"
                    : "Status"}
                </span>
              </div>
            ))}
          </div>
          <Progress value={(currentStep - 1) * 33.33} className="h-2" />
        </div>
      )}

      {/* Hero Section */}
      {currentStep === 1 && (
        <div className="text-center mb-16 bg-green-50 rounded-2xl p-8 md:p-12">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 text-sm">
            <FaCheckCircle className="mr-2" /> Scheme Eligibility
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Check Your Eligibility for Government Schemes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover which government schemes and financial support programs you
            qualify for
          </p>
        </div>
      )}

      {/* Step 1: Eligibility Form */}
      {currentStep === 1 && (
        <div className="max-w-3xl mx-auto">
          {/* How It Works */}
          <Card className="mb-12 border-0 shadow-sm">
            <CardHeader className="text-xl font-bold pb-0">
              🛠️ How It Works
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  "Enter Basic Info",
                  "Upload Documents",
                  "Get Results",
                  "Apply Online",
                ].map((step, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                      {i + 1}
                    </div>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Eligibility Form */}
          <Card className="mb-12 border-0 shadow-sm">
            <CardHeader className="text-2xl font-bold pb-0">
              Enter Your Details
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit}>
                {ELIGIBILITY_CRITERIA.factors.map((factor) => (
                  <div key={factor.id} className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {factor.name} *
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      value={formData[factor.id]}
                      onChange={(e) =>
                        handleInputChange(factor.id, e.target.value)
                      }
                      required
                    >
                      <option value="">
                        Select {factor.name.toLowerCase()}
                      </option>
                      {factor.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}

                {/* Additional Fields */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Income Range *
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    value={formData.incomeRange}
                    onChange={(e) =>
                      handleInputChange("incomeRange", e.target.value)
                    }
                    required
                  >
                    <option value="">Select income range</option>
                    <option value="Below ₹1 lakh">Below ₹1 lakh</option>
                    <option value="₹1-3 lakh">₹1-3 lakh</option>
                    <option value="₹3-5 lakh">₹3-5 lakh</option>
                    <option value="Above ₹5 lakh">Above ₹5 lakh</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Documents Available
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        checked={formData.hasAadhaar}
                        onChange={() => handleCheckboxChange("hasAadhaar")}
                      />
                      <span className="ml-2">Aadhaar Card</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        checked={formData.hasLandRecords}
                        onChange={() => handleCheckboxChange("hasLandRecords")}
                      />
                      <span className="ml-2">Land Records</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 px-8 py-3"
                  >
                    Check Eligibility
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              🚜 Benefits of Using Our Eligibility Checker
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ELIGIBILITY_BENEFITS.map((benefit, i) => (
                <Card
                  key={i}
                  className="border-0 shadow-sm hover:shadow-md transition"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Results */}
      {currentStep === 2 && (
        <div className="max-w-4xl mx-auto">
          <Card
            className={`mb-8 border-0 shadow-sm ${
              isEligible ? "bg-green-50" : "bg-yellow-50"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center">
                <div
                  className={`flex-shrink-0 h-10 w-10 rounded-full ${
                    isEligible
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  } flex items-center justify-center mr-4`}
                >
                  {isEligible ? (
                    <FaCheckCircle className="h-5 w-5" />
                  ) : (
                    <FiAlertTriangle className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {isEligible ? "Eligibility Results" : "Not Eligible"}
                  </h2>
                  <p className="text-gray-600">
                    {isEligible
                      ? "Based on the information you provided"
                      : "Current criteria does not match any schemes"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {isEligible ? (
            <>
              {/* Matched Schemes */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold mb-4">
                  ✅ You may be eligible for these schemes:
                </h3>
                <div className="space-y-4">
                  {matchedSchemes.map((scheme) => (
                    <Card key={scheme.id} className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg">{scheme.name}</h4>
                            <ul className="mt-2 space-y-1">
                              {scheme.criteria
                                .slice(0, 3)
                                .map((criterion, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start text-sm"
                                  >
                                    <span className="text-green-600 mr-2">
                                      ✓
                                    </span>
                                    <span>{criterion}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            className="text-green-600 border-green-600"
                          >
                            <a href={`/government-schemes#${scheme.id}`}>
                              View Details{" "}
                              <FaExternalLinkAlt className="ml-2" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <Card className="border-0 shadow-sm mb-8">
                <CardHeader className="text-xl font-bold pb-0">
                  Next Steps
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">
                        Recommended Actions
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Gather required documents for application</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>Check application deadlines</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span>
                            Verify your details with local agriculture office
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="font-semibold mb-3">Need Help?</h3>
                      <p className="text-gray-600 mb-4">
                        Our agricultural experts can guide you through the
                        application process.
                      </p>
                      <div className="space-y-3">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <FaUserTie className="mr-2" /> Talk to an Expert
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full text-green-600 border-green-600 hover:bg-green-50"
                          onClick={() => setCurrentStep(3)}
                        >
                          <FaUpload className="mr-2" /> Start Application
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  className="text-green-600 border-green-600 hover:bg-green-50"
                  onClick={resetForm}
                >
                  <FaArrowLeft className="mr-2" /> Back to Eligibility Check
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => setCurrentStep(3)}
                >
                  Continue to Application
                </Button>
              </div>
            </>
          ) : (
            <Card className="mb-12 border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
                    <FaTimesCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No Matching Schemes Found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Based on your current inputs, you don't qualify for any
                    major schemes. Here are some alternatives:
                  </p>
                  <ul className="space-y-2 text-left mb-6">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>
                        Check state-specific schemes that may have different
                        criteria
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>
                        Explore skill development programs for farmers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span>Consult an expert to verify your eligibility</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="text-green-600 border-green-600 hover:bg-green-50"
                    onClick={resetForm}
                  >
                    <FaArrowLeft className="mr-2" /> Try Different Criteria
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      {/* Step 3: Application Form */}
      {currentStep === 3 && (
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-0 shadow-sm">
            <CardHeader className="text-xl font-bold pb-0">
              Scheme Application Form
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Personal Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={formData.personalDetails.name}
                        onChange={(e) =>
                          handleInputChange(
                            "personalDetails.name",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={formData.personalDetails.mobile}
                        onChange={(e) =>
                          handleInputChange(
                            "personalDetails.mobile",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={formData.personalDetails.email}
                        onChange={(e) =>
                          handleInputChange(
                            "personalDetails.email",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={formData.personalDetails.address}
                        onChange={(e) =>
                          handleInputChange(
                            "personalDetails.address",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Loan Details (Optional)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount Requested
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdOutlineAttachMoney className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          className="pl-8 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                          placeholder="e.g. 50000"
                          value={formData.loanAmount}
                          onChange={(e) =>
                            handleInputChange("loanAmount", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Purpose
                      </label>
                      <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                        value={formData.loanPurpose}
                        onChange={(e) =>
                          handleInputChange("loanPurpose", e.target.value)
                        }
                      >
                        <option value="">Select purpose</option>
                        <option value="Crop Production">Crop Production</option>
                        <option value="Equipment Purchase">
                          Equipment Purchase
                        </option>
                        <option value="Livestock">Livestock</option>
                        <option value="Irrigation">Irrigation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Required Documents
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      multiple
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">
                      Drag and drop files here, or click to browse
                    </p>
                    <Button
                      variant="outline"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Select Files
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Supported formats: PDF, JPG, PNG (Max 5MB each)
                    </p>

                    {isUploading && (
                      <div className="mt-4">
                        <Progress value={uploadProgress} className="h-2 mb-2" />
                        <p className="text-sm text-gray-500">
                          Uploading... {uploadProgress}%
                        </p>
                      </div>
                    )}
                  </div>

                  {formData.documents.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Selected Documents:
                      </h4>
                      <ul className="space-y-2">
                        {formData.documents.map((doc, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <div className="flex items-center">
                              <span className="mr-3">
                                {getDocumentIcon(doc.type)}
                              </span>
                              <span className="text-sm truncate max-w-xs">
                                {doc.name}
                              </span>
                            </div>
                            <button
                              type="button"
                              className="text-red-500 hover:text-red-700"
                              onClick={() => removeDocument(index)}
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-6">
              <Button
                variant="outline"
                className="text-green-600 border-green-600 hover:bg-green-50"
                onClick={() => setCurrentStep(2)}
              >
                <FaArrowLeft className="mr-2" /> Back to Results
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={submitLoanApplication}
              >
                Submit Application
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Step 4: Application Status */}
      {currentStep === 4 && (
        <div className="max-w-4xl mx-auto">
          <Card
            className={`mb-8 border-0 shadow-sm ${
              loanStatus === "approved" ? "bg-green-50" : "bg-yellow-50"
            }`}
          >
            <CardContent className="p-8 text-center">
              <div
                className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full ${
                  loanStatus === "approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                } mb-6`}
              >
                {loanStatus === "approved" ? (
                  <FaCheckCircle className="h-8 w-8" />
                ) : (
                  <FiAlertTriangle className="h-8 w-8" />
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {loanStatus === "approved"
                  ? "Application Approved!"
                  : "Application Review Required"}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {loanStatus === "approved"
                  ? `Your application #${applicationId} has been approved. You will receive the funds within 7-10 business days.`
                  : `Your application #${applicationId} requires additional verification. Our team will contact you within 2 business days.`}
              </p>

              {loanStatus === "approved" && (
                <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto mb-6">
                  <h3 className="font-semibold mb-4">Approval Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="text-sm text-gray-500">Application ID</p>
                      <p className="font-medium">{applicationId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Approved Amount</p>
                      <p className="font-medium">
                        ₹{formData.loanAmount || "50,000"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Disbursement Method
                      </p>
                      <p className="font-medium">Direct Bank Transfer</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Estimated Disbursement
                      </p>
                      <p className="font-medium">7-10 business days</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  {loanStatus === "approved"
                    ? "Download Approval Letter"
                    : "Upload Additional Documents"}
                </Button>
                <Button
                  variant="outline"
                  className="text-green-600 border-green-600 hover:bg-green-50"
                  onClick={resetForm}
                >
                  Start New Application
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title:
                    loanStatus === "approved"
                      ? "Receive Funds"
                      : "Verification Call",
                  description:
                    loanStatus === "approved"
                      ? "Funds will be transferred to your registered bank account"
                      : "Expect a call from our verification team within 48 hours",
                },
                {
                  title: "Document Signing",
                  description:
                    loanStatus === "approved"
                      ? "Sign your loan agreement digitally"
                      : "You may need to provide additional documents",
                },
                {
                  title: "Support",
                  description: "Our team is available to answer any questions",
                },
              ].map((step, i) => (
                <Card key={i} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="text-2xl mb-3">
                      {i === 0 ? "1️⃣" : i === 1 ? "2️⃣" : "3️⃣"}
                    </div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              variant="ghost"
              className="text-green-600"
              onClick={resetForm}
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      {currentStep !== 4 && (
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {currentStep === 2 && isEligible
              ? "Ready to Apply for Schemes?"
              : "Need Help Determining Eligibility?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            {currentStep === 2 && isEligible
              ? "Get personalized guidance through the entire application process."
              : "Our experts can help you understand scheme requirements and alternatives."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-4">
              {currentStep === 2 && isEligible
                ? "Apply Now"
                : "Consult an Expert"}
            </Button>
            <Button
              variant="outline"
              className="text-green-600 border-green-600 hover:bg-green-50 px-8 py-4"
              onClick={resetForm}
            >
              {currentStep === 2
                ? "Check Eligibility Again"
                : "View All Schemes"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityChecker;