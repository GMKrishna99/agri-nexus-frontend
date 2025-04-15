// src/constants/FinancialServices/loanTracking.constants.js
export const STATUS_STAGES = [
  {
    status: "Submitted",
    description: "Your application has been received and logged in the system",
    icon: "📨",
    color: "bg-blue-100 text-blue-800",
  },
  {
    status: "Under Review",
    description:
      "Loan documents and eligibility are being verified by officials",
    icon: "🔍",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    status: "Additional Info",
    description: "You need to submit more details or documentation",
    icon: "📝",
    color: "bg-purple-100 text-purple-800",
  },
  {
    status: "Approved",
    description: "Your loan is sanctioned and will be credited shortly",
    icon: "✅",
    color: "bg-green-100 text-green-800",
  },
  {
    status: "Rejected",
    description: "Application didn't meet criteria. See reasons or reapply",
    icon: "❌",
    color: "bg-red-100 text-red-800",
  },
  {
    status: "Disbursed",
    description: "Loan amount has been credited to your bank account",
    icon: "💰",
    color: "bg-teal-100 text-teal-800",
  },
];

export const TRACKING_METHODS = [
  {
    method: "Application Number",
    description: "Enter the unique ID provided after application submission",
    icon: "🆔",
  },
  {
    method: "Aadhaar Number",
    description: "Verify with your Aadhaar to retrieve loan status",
    icon: "🪪",
  },
  {
    method: "Registered Mobile",
    description: "OTP verification to access your application",
    icon: "📱",
  },
  {
    method: "Farmer Portal Login",
    description: "Check status under 'My Applications' in your account",
    icon: "🔐",
  },
];

export const SAMPLE_APPLICATIONS = [
  {
    id: "AGRI-2023-001234",
    name: "Ramesh Kumar",
    date: "2023-05-15",
    loanType: "Kisan Credit Card",
    status: "Approved",
    lastUpdated: "2023-06-01",
    mobile: "9876543210",
    amount: "₹1,50,000",
  },
  {
    id: "AGRI-2023-001235",
    name: "Sunita Devi",
    date: "2023-06-10",
    loanType: "Farm Equipment Loan",
    status: "Under Review",
    lastUpdated: "2023-06-15",
    mobile: "9876543211",
    amount: "₹5,00,000",
  },
];

export const SUPPORT_INFO = {
  helpline: "1800-889-9900",
  email: "loansupport@agrinexus.gov.in",
  portal: "www.agrinexus.gov.in/track-loan",
  workingHours: "8 AM to 8 PM (7 days a week)",
};
