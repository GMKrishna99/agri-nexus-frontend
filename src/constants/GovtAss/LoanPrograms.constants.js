// src/constants/GovtAss/loanPrograms.constants.js
export const LOAN_SCHEMES = [
  {
    id: "kcc",
    name: "Kisan Credit Card (KCC) Scheme",
    purpose: "Short-term credit for seeds, fertilizers, pesticides, etc.",
    interestRate: "4% (with prompt repayment)",
    repaymentPeriod: "12 months",
    maxAmount: "Varies based on landholding",
    subsidy: "Interest subvention available",
    eligibility:
      "All farmers including individual/joint borrowers, tenant farmers, oral lessees, etc.",
  },
  {
    id: "nabard",
    name: "NABARD Agriculture Infrastructure Loan",
    purpose: "Storage units, warehouses, cold chains",
    interestRate: "7-9% (varies by bank)",
    repaymentPeriod: "3-7 years",
    maxAmount: "Up to ₹2 crores",
    subsidy: "25% for SC/ST/small farmers",
    eligibility: "Farmers, FPOs, agri-entrepreneurs",
  },
  {
    id: "dairy",
    name: "Dairy Entrepreneurship Development Scheme",
    purpose: "Dairy farming units and milk equipment",
    interestRate: "9-12%",
    repaymentPeriod: "5 years",
    maxAmount: "Up to ₹25 lakhs",
    subsidy: "25% to 33%",
    eligibility: "Individuals/SHGs/farmers with basic dairy training",
  },
  {
    id: "agri-clinic",
    name: "Agri-Clinic and Agri-Business Centers Scheme",
    purpose: "Loans for agri startups or consulting centers",
    interestRate: "8-10%",
    repaymentPeriod: "5-7 years",
    maxAmount: "₹20 Lakhs",
    subsidy: "Up to 36% for women/SC/ST",
    eligibility: "Agriculture graduates/diploma holders",
  },
  {
    id: "mudra",
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    purpose: "Micro & small enterprises including agri-allied businesses",
    interestRate: "10-12%",
    repaymentPeriod: "3-5 years",
    maxAmount: "Up to ₹10 Lakhs",
    subsidy: "No interest subsidy",
    eligibility: "Non-corporate, non-farm small/micro enterprises",
  },
];

export const ELIGIBILITY_CRITERIA = [
  "Must be an Indian citizen with valid Aadhaar",
  "Minimum 18 years of age",
  "Land ownership documents (where applicable)",
  "Engaged in farming or allied agricultural activities",
  "Good repayment history (if existing loans)",
];

export const REQUIRED_DOCUMENTS = [
  "Aadhaar Card",
  "PAN Card",
  "Land Records (Patta, RTC, or equivalent)",
  "Bank Passbook",
  "Passport-size Photograph",
  "Proof of farming/agri-business activity",
  "Project report (for larger loans)",
  "Quotations for equipment (if applicable)",
];

export const APPLICATION_CHANNELS = [
  {
    name: "Bank Branches",
    description: "Visit nearest SBI, NABARD-partnered banks, or rural banks",
    icon: "🏦",
  },
  {
    name: "Online Portals",
    description: "PM Kisan portal, Bank websites, Agri-loan portals",
    icon: "💻",
  },
  {
    name: "CSC Centers",
    description: "Common Service Centers with trained operators",
    icon: "🏪",
  },
  {
    name: "Krishi Vigyan Kendras",
    description: "Agriculture extension centers",
    icon: "🌾",
  },
];

export const SUPPORT_INFO = {
  helpline: "1800-233-4567",
  portal: "www.agriloans.gov.in",
  email: "loansupport@agrinexus.gov.in",
  workingHours: "9 AM to 6 PM (Mon-Sat)",
};
