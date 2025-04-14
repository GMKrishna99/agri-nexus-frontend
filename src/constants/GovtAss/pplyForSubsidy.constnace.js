// constants.js

export const STATES = [
  "Delhi (Gaon nahi hai, but try karo)",
  "Haryana (Jatland)",
  "Punjab (Pind di shaan)",
  "UP (Bhaiyya zone)",
  "Bihar (Litti chokha land)",
  "Maharashtra (Shetkari country)",
  "Rajasthan (Kheti? Kya hota hai?)",
];

export const CROPS = [
  "Wheat (Gehu)",
  "Rice (Chawal)",
  "Sugarcane (Ganne ka juice bhi business hai)",
  "Cotton (Kapda banega to bikenga)",
  "Pulses (Dal mein kuch kaala hai)",
  "Maize (Makkai - bhuttawala special)",
  "Marijuana (Illegal hai par...)",
];

export const SCHEMES = [
  {
    id: "pm-kisan",
    name: "PM-KISAN",
    description: "₹6000/year - Just enough for 2 sacks of urea!",
    benefit: "₹2000 every 4 months (if babus don't eat it first)",
  },
  {
    id: "tractor",
    name: "Tractor Subsidy",
    description:
      "50% off on new tractors (Conditions apply: Must know neta ji)",
    benefit: "Loan not included - Bank waale saath mein aayenge",
  },
  {
    id: "organic",
    name: "Organic Farming",
    description: "Grow poison-free food for city people",
    benefit: "30% subsidy (Certification costs 40%)",
  },
  {
    id: "well",
    name: "Well/Borewell",
    description: "Pani ki kami? Sarkar degi paisa!",
    benefit: "Up to ₹50,000 (After 20 visits to office)",
  },
  {
    id: "cow",
    name: "Gau Mata Yojana",
    description: "Free desi cow (Maintenance not included)",
    benefit: "1 cow per family (Stray dogs not eligible)",
  },
];

export const DOCUMENTS_REQUIRED = [
  "Aadhaar Card (Jo mila hi nahi last 6 months se)",
  "Land Papers (Jo registry ke time gayab ho jaate hain)",
  "Bank Passbook (Jisme last entry Modi's first term ki hai)",
  "Passport Photo (10 saal purani chalegi)",
  "Ration Card (Jo actually ration dene ke kaam nahi aata)",
];

export const HELPLINES = [
  {
    name: "Main Helpline",
    number: "1800-420-6969",
    hours: "10AM-5PM (Lunch 10:30-3:30)",
  },
  {
    name: "Complaints",
    number: "1800-100-HELP",
    hours: "Never available",
  },
  {
    name: "Corruption Hotline",
    number: "1100-BRIBE-NOW",
    hours: "24x7 (Fastest response)",
  },
];

export const FARMER_TYPES = [
  "Small Farmer (2 acre, 10 loans)",
  "Medium Farmer (5 acre, 2 tractors, 3 court cases)",
  "Large Farmer (10+ acre, politician connections)",
  "Landless Farmer (Irony ho rahi hai bhayankar)",
];

export const BANK_NAMES = [
  "Punjab National Bank (Nirav Modi approved)",
  "SBI (Slow But Inefficient)",
  "HDFC (Har Din Finance Charges)",
  "Gramin Bank (ATM mein paise kabhi nahi hote)",
];
// Add these to your constants file
export const APPLICATION_STATUSES = {
  SUBMITTED: "Submitted",
  UNDER_REVIEW: "Under Review",
  APPROVED: "Approved",
  REJECTED: "Rejected",
  PAYMENT_PROCESSED: "Payment Processed",
};

export const STATUS_DESCRIPTIONS = {
  [APPLICATION_STATUSES.SUBMITTED]:
    "Your application has been successfully submitted.",
  [APPLICATION_STATUSES.UNDER_REVIEW]:
    "Your documents and eligibility are being verified by the authority.",
  [APPLICATION_STATUSES.APPROVED]:
    "Your application has been accepted and is ready for the next steps.",
  [APPLICATION_STATUSES.REJECTED]:
    "The application didn't meet the criteria. You can re-apply with corrections.",
  [APPLICATION_STATUSES.PAYMENT_PROCESSED]:
    "Subsidy amount has been disbursed to your registered bank account.",
};

export const SAMPLE_APPLICATIONS = [
  {
    id: "FARM-AB12CD34",
    name: "Chacha Chaudhary",
    date: "2023-05-15",
    scheme: "PM-KISAN Yojana",
    status: APPLICATION_STATUSES.APPROVED,
    lastUpdated: "2023-06-01",
    mobile: "9876543210",
    farmerId: "123456789012",
  },
  {
    id: "FARM-XY56ZW78",
    name: "Sabu",
    date: "2023-06-10",
    scheme: "KCC Scheme",
    status: APPLICATION_STATUSES.UNDER_REVIEW,
    lastUpdated: "2023-06-15",
    mobile: "9876543211",
    farmerId: "123456789013",
  },
  {
    id: "FARM-QW34ER56",
    name: "Raju Kumar",
    date: "2023-07-05",
    scheme: "PM Fasal Bima Yojana",
    status: APPLICATION_STATUSES.PENDING,
    lastUpdated: "2023-07-10",
    mobile: "8765432109",
    farmerId: "234567890123",
  },
  {
    id: "FARM-RT78YU90",
    name: "Priya Sharma",
    date: "2023-06-22",
    scheme: "Soil Health Card Scheme",
    status: APPLICATION_STATUSES.APPROVED,
    lastUpdated: "2023-07-01",
    mobile: "7654321098",
    farmerId: "345678901234",
  },
  {
    id: "FARM-OP12KL34",
    name: "Vijay Singh",
    date: "2023-08-12",
    scheme: "National Mission on Horticulture",
    status: APPLICATION_STATUSES.REJECTED,
    lastUpdated: "2023-08-20",
    mobile: "6543210987",
    farmerId: "456789012345",
    rejectionReason: "Incomplete documentation",
  },
  {
    id: "FARM-MN56BV78",
    name: "Sunita Devi",
    date: "2023-09-03",
    scheme: "PM-KISAN Yojana",
    status: APPLICATION_STATUSES.UNDER_REVIEW,
    lastUpdated: "2023-09-15",
    mobile: "9432109876",
    farmerId: "567890123456",
  },
  {
    id: "FARM-ZX90CV12",
    name: "Amit Patel",
    date: "2023-07-18",
    scheme: "KCC Scheme",
    status: APPLICATION_STATUSES.APPROVED,
    lastUpdated: "2023-08-05",
    mobile: "8321098765",
    farmerId: "678901234567",
  },
  {
    id: "FARM-DF34GH56",
    name: "Meena Kumari",
    date: "2023-08-30",
    scheme: "PM Fasal Bima Yojana",
    status: APPLICATION_STATUSES.PENDING,
    lastUpdated: "2023-09-02",
    mobile: "7210987654",
    farmerId: "789012345678",
  },
];
