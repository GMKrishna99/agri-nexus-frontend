export const LOAN_TYPES = [
  {
    id: "crop",
    name: "Crop Loans",
    icon: "🚜",
    description: "Short-term credit for seeds, fertilizers, and labor",
    popularScheme: "Kisan Credit Card (KCC)",
    tenure: "Up to 1 year",
    features: [
      "Low-interest rates",
      "Easy renewals",
      "Crop insurance included",
    ],
    maxAmount: "Varies by crop and land size",
    interestRate: "4-7%",
  },
  {
    id: "term",
    name: "Agricultural Term Loans",
    icon: "🐄",
    description:
      "Long-term investment (e.g., land improvement, tractors, dairy)",
    popularScheme: "NABARD Term Loans",
    tenure: "3 to 15 years",
    features: ["Flexible repayment", "Subsidies available", "Grace period"],
    maxAmount: "Up to ₹50 lakhs",
    interestRate: "7-12%",
  },
  {
    id: "mechanization",
    name: "Farm Mechanization Loans",
    icon: "🛠️",
    description: "Purchase of tractors, power tillers, harvesters",
    popularScheme: "Sub-Mission on Agricultural Mechanization",
    tenure: "5 to 7 years",
    features: ["Up to 50% subsidy", "New/used equipment", "Training included"],
    maxAmount: "₹1 lakh to ₹25 lakhs",
    interestRate: "8-10%",
  },
  {
    id: "irrigation",
    name: "Irrigation & Infrastructure Loans",
    icon: "💧",
    description: "Borewells, drip irrigation, fencing, storage",
    popularScheme: "Agriculture Infrastructure Fund (AIF)",
    tenure: "7 to 10 years",
    features: [
      "3% interest subsidy",
      "Technical guidance",
      "Group loans available",
    ],
    maxAmount: "Up to ₹2 crores",
    interestRate: "7-9%",
  },
  {
    id: "allied",
    name: "Agri-Allied Loans",
    icon: "🧺",
    description: "Dairy, poultry, fisheries, beekeeping",
    popularScheme: "Dairy Entrepreneurship Development Scheme",
    tenure: "3 to 5 years",
    features: ["25-50% subsidy", "Insurance coverage", "Veterinary support"],
    maxAmount: "Up to ₹20 lakhs",
    interestRate: "9-11%",
  },
  {
    id: "marketing",
    name: "Marketing & Post-Harvest Loans",
    icon: "🚛",
    description: "Storage, transportation, and value addition",
    popularScheme: "NABARD Marketing Loans",
    tenure: "6 months to 5 years",
    features: [
      "Warehouse receipt financing",
      "Cold chain support",
      "Market linkage",
    ],
    maxAmount: "Up to ₹50 lakhs",
    interestRate: "10-12%",
  },
];

export const ELIGIBILITY = [
  "Indian citizen above 18 years",
  "Must be a farmer, tenant, or sharecropper",
  "Valid ID proof and land ownership (if applicable)",
  "Viable plan or usage intent for the loan",
  "No history of loan default (for some schemes)",
  "Should have operational bank account",
];

export const DOCUMENTS_REQUIRED = [
  "Aadhaar Card (mandatory)",
  "PAN Card (for loans above ₹5 lakhs)",
  "Land Ownership Records / Lease Agreement",
  "Income proof / Agricultural activity proof",
  "Passport-sized photos (2 copies)",
  "Bank statement (6 months)",
  "Project report (for loans above ₹10 lakhs)",
  "Quotations for equipment (if applicable)",
];

export const APPLICATION_PROCESS = [
  "Identify the loan type best suited to your need",
  "Check eligibility criteria for chosen scheme",
  "Prepare the necessary documents",
  "Visit bank branch, cooperative society, or apply online",
  "Submit application and await verification",
  "Field inspection by bank officials (if required)",
  "Loan sanction and disbursal upon approval",
];

export const APPLYING_INSTITUTIONS = [
  {
    name: "State Bank of India (SBI)",
    schemes: ["KCC", "Term Loans", "Farm Mechanization"],
    contact: "1800 1234",
  },
  {
    name: "NABARD and affiliated Rural Banks",
    schemes: ["AIF", "Agri-Allied", "Marketing"],
    contact: "1800 5678",
  },
  {
    name: "Co-operative Banks",
    schemes: ["Crop Loans", "Small Farmer Loans"],
    contact: "Varies by district",
  },
  {
    name: "Private Sector Banks",
    schemes: ["Tractor Loans", "Warehouse Financing"],
    contact: "Check respective banks",
  },
  {
    name: "Common Service Centers (CSCs)",
    schemes: ["All Government Schemes"],
    contact: "1800 3000 1551",
  },
];

export const SUPPORT_INFO = {
  helpline: "1800-3000-1551",
  email: "farmerloans@agrinexus.gov.in",
  portal: "www.agrinexus.gov.in/loans",
  workingHours: "8 AM to 8 PM (7 days a week)",
};
