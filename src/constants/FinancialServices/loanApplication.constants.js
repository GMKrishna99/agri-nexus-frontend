export const LOAN_TYPES = [
  {
    id: "crop",
    name: "Crop Loan",
    description: "Short-term loans for seasonal cultivation expenses",
    icon: "🌾",
    maxAmount: "₹3,00,000",
    tenure: "Up to 1 year",
    interest: "4-7% p.a.",
    subsidy: "Interest subvention available",
  },
  {
    id: "kcc",
    name: "Kisan Credit Card (KCC)",
    description: "Flexible credit line for agricultural needs",
    icon: "💳",
    maxAmount: "₹5,00,000",
    tenure: "5 years",
    interest: "4% p.a.",
    subsidy: "2% additional subvention for timely repayment",
  },
  {
    id: "equipment",
    name: "Equipment/Machinery Loan",
    description: "For tractors, harvesters, and farm equipment",
    icon: "🚜",
    maxAmount: "₹25,00,000",
    tenure: "3-7 years",
    interest: "8-12% p.a.",
    subsidy: "Up to 50% subsidy under SMAM scheme",
  },
  {
    id: "irrigation",
    name: "Irrigation Loan",
    description: "Borewells, drip/sprinkler systems",
    icon: "💧",
    maxAmount: "₹10,00,000",
    tenure: "5-10 years",
    interest: "7-9% p.a.",
    subsidy: "3% interest subvention under AIF",
  },
  {
    id: "infra",
    name: "Agri Infrastructure Loan",
    description: "Warehouses, cold storage, fencing",
    icon: "🏗️",
    maxAmount: "₹50,00,000",
    tenure: "5-15 years",
    interest: "8-10% p.a.",
    subsidy: "25-35% subsidy available",
  },
  {
    id: "livestock",
    name: "Animal Husbandry Loan",
    description: "Dairy, poultry, fisheries",
    icon: "🐄",
    maxAmount: "₹15,00,000",
    tenure: "3-5 years",
    interest: "7-9% p.a.",
    subsidy: "25-33% under DEDS scheme",
  },
  {
    id: "green",
    name: "Green Energy Loan",
    description: "Solar pumps, panels, biogas",
    icon: "☀️",
    maxAmount: "₹20,00,000",
    tenure: "5-8 years",
    interest: "6-8% p.a.",
    subsidy: "Up to 60% subsidy available",
  },
];

export const DOCUMENTS_REQUIRED = [
  "Aadhaar Card (Mandatory)",
  "PAN Card (For loans above ₹5 lakhs)",
  "Land ownership/lease documents",
  "Bank passbook (last 6 months)",
  "Passport size photographs (2 copies)",
  "Project report (for loans above ₹10 lakhs)",
  "Quotations (for equipment/infrastructure loans)",
  "Income certificate (if applicable)",
];

export const APPLICATION_STEPS = [
  {
    step: 1,
    title: "Choose Loan Type",
    description: "Select based on your farming requirement",
  },
  {
    step: 2,
    title: "Check Eligibility",
    description: "Verify you meet all criteria",
  },
  {
    step: 3,
    title: "Fill Application",
    description: "Provide personal and farming details",
  },
  {
    step: 4,
    title: "Upload Documents",
    description: "Clear scans of required documents",
  },
  {
    step: 5,
    title: "Submit & Verify",
    description: "Our team will review your application",
  },
  {
    step: 6,
    title: "Get Disbursement",
    description: "Funds credited after approval",
  },
];

export const CONSIDERATIONS = [
  "Compare interest rates from multiple banks",
  "Understand prepayment terms and penalties",
  "Check for government subsidy eligibility",
  "Ensure repayment aligns with harvest cycles",
  "Maintain good credit history for future loans",
  "Read all terms before signing agreement",
];

export const SUPPORT_INFO = {
  helpline: "1800-889-9900",
  email: "loansupport@agrinexus.gov.in",
  workingHours: "8 AM to 8 PM (7 days a week)",
  portal: "www.agriloans.gov.in",
};
