export const SCHEME_CATEGORIES = [
  { id: "all", name: "All Schemes" },
  { id: "financial", name: "Financial Support" },
  { id: "insurance", name: "Crop Insurance" },
  { id: "organic", name: "Organic Farming" },
  { id: "irrigation", name: "Irrigation" },
  { id: "equipment", name: "Equipment Support" },
  { id: "education", name: "Farmer Education" },
  { id: "women", name: "Women Farmers" },
  { id: "horticulture", name: "Horticulture" },
];

export const GOVERNMENT_SCHEMES = [
  {
    id: "gs1",
    name: "PM-Kisan Samman Nidhi Yojana",
    categoryId: "financial",
    image: "/images/pm-kisan.jpg",
    description: "Direct income support scheme for farmers across India",
    benefits: [
      "₹6,000 yearly income support",
      "Paid in 3 equal installments",
      "Direct bank transfer via Aadhaar-linked account",
    ],
    eligibility: [
      "Small and marginal landholder farmer families",
      "Landholding up to 2 hectares",
      "Family defined as husband, wife and minor children",
    ],
    applicationProcess: [
      "Visit https://pmkisan.gov.in",
      "Click on 'New Farmer Registration'",
      "Fill required details and submit documents",
      "Status can be checked using Aadhaar number",
    ],
    contact: ["PM-Kisan Helpline: 1800-115-526", "Email: pmkisan-ict@gov.in"],
  },
  {
    id: "gs2",
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    categoryId: "insurance",
    image: "/images/pmfby.jpg",
    description:
      "Comprehensive crop insurance scheme against natural calamities",
    benefits: [
      "Covers sowing to post-harvest losses",
      "Low premium (2% for Kharif, 1.5% for Rabi)",
      "Claims paid directly to farmer's account",
    ],
    eligibility: [
      "All farmers including sharecroppers and tenant farmers",
      "Compulsory for loanee farmers",
      "Voluntary for non-loanee farmers",
    ],
    applicationProcess: [
      "Available through Common Service Centers (CSCs)",
      "Can apply through bank if taking crop loan",
      "Online application via https://pmfby.gov.in",
    ],
    contact: ["PMFBY Helpline: 1800-180-1551", "Email: help.pmfby@gov.in"],
  },
  {
    id: "gs3",
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    categoryId: "organic",
    image: "/images/pkvy.jpg",
    description: "Promotes organic farming through cluster approach",
    benefits: [
      "₹50,000/ha for 3 years (max 3ha)",
      "Includes training and certification support",
      "Focus on traditional knowledge and modern science",
    ],
    eligibility: [
      "Farmers willing to form groups of 50+",
      "Minimum 1 hectare contiguous land",
      "Commitment to 3 years organic farming",
    ],
    applicationProcess: [
      "Contact local Agriculture Department",
      "Form farmer group/cluster",
      "Submit proposal through District Agriculture Officer",
    ],
    contact: ["PKVY Helpline: 1800-180-1551", "Email: pkvy.organic@gov.in"],
  },
  {
    id: "gs4",
    name: "Micro Irrigation Fund Scheme",
    categoryId: "irrigation",
    image: "/images/micro-irrigation.jpg",
    description:
      "Promotes efficient water use through drip/sprinkler irrigation",
    benefits: [
      "55-75% subsidy on installation cost",
      "Covers drip and sprinkler systems",
      "Special focus on water-stressed areas",
    ],
    eligibility: [
      "All farmers including small and marginal",
      "Priority to horticulture crops",
      "Group applications preferred",
    ],
    applicationProcess: [
      "Apply through State Agriculture/Horticulture Departments",
      "Submit land records and project proposal",
      "Implementation through approved vendors",
    ],
    contact: ["Helpline: 1800-425-1556", "Email: microirrigation-fund@gov.in"],
  },
  {
    id: "gs5",
    name: "Sub-Mission on Agricultural Mechanization (SMAM)",
    categoryId: "equipment",
    image: "/images/smam.jpg",
    description: "Promotes farm mechanization among small farmers",
    benefits: [
      "40-50% subsidy on farm equipment",
      "Special provisions for women farmers",
      "Custom Hiring Centers support",
    ],
    eligibility: [
      "Individual farmers and farmer groups",
      "Priority to small and marginal farmers",
      "Women farmer groups get additional 10% subsidy",
    ],
    applicationProcess: [
      "Apply through State Agriculture Department",
      "Select equipment from approved list",
      "Purchase from authorized dealers",
    ],
    contact: ["Helpline: 1800-111-456", "Email: smam.agri@gov.in"],
  },
  {
    id: "gs6",
    name: "Kisan Credit Card (KCC) Scheme",
    categoryId: "financial",
    image: "/images/kcc.jpg",
    description: "Provides affordable credit to farmers",
    benefits: [
      "Up to ₹3 lakh credit limit",
      "Interest subvention of 2%",
      "Additional 3% subvention for timely repayment",
    ],
    eligibility: [
      "All farmers - individual or joint",
      "Tenant farmers/sharecroppers",
      "Fishermen and animal husbandry farmers",
    ],
    applicationProcess: [
      "Approach any commercial/RRB/cooperative bank",
      "Submit land records and identity proof",
      "KCC issued within 14 days of application",
    ],
    contact: ["Helpline: 1800-425-1556", "Email: kcc.nabard@gov.in"],
  },
  {
    id: "gs7",
    name: "National Mission on Horticulture",
    categoryId: "horticulture",
    image: "/images/horticulture.jpg",
    description: "Comprehensive development of horticulture sector",
    benefits: [
      "50-75% subsidy for planting material",
      "Support for protected cultivation",
      "Post-harvest management infrastructure",
    ],
    eligibility: [
      "Individual farmers with minimum 0.2ha land",
      "Farmer Producer Organizations",
      "Horticulture cooperatives",
    ],
    applicationProcess: [
      "Apply through State Horticulture Mission",
      "Submit project proposal",
      "Implementation through approved agencies",
    ],
    contact: ["Helpline: 1800-180-1551", "Email: horticulture-mission@gov.in"],
  },
  {
    id: "gs8",
    name: "Mahila Kisan Sashaktikaran Pariyojana (MKSP)",
    categoryId: "women",
    image: "/images/mksp.jpg",
    description: "Empowerment of women in agriculture",
    benefits: [
      "100% funding for group formation",
      "Skill development programs",
      "Support for agro-ecological practices",
    ],
    eligibility: [
      "Women farmers groups (minimum 25 members)",
      "Self Help Groups",
      "Women from SC/ST communities",
    ],
    applicationProcess: [
      "Apply through State Rural Livelihood Missions",
      "Submit through registered NGOs",
      "Approval by District Level Committee",
    ],
    contact: ["Helpline: 1800-345-6777", "Email: mksp-wcd@gov.in"],
  },
  {
    id: "gs9",
    name: "Soil Health Card Scheme",
    categoryId: "education",
    image: "/images/soil-health.jpg",
    description: "Provides soil health information to farmers",
    benefits: [
      "Free soil testing every 3 years",
      "Customized fertilizer recommendations",
      "Improves input use efficiency",
    ],
    eligibility: [
      "All farmers including tenant farmers",
      "No landholding limit",
      "Priority to small and marginal farmers",
    ],
    applicationProcess: [
      "Visit local Agriculture Office",
      "Submit land details",
      "Collect card after soil testing",
    ],
    contact: ["Helpline: 1800-180-1551", "Email: soilhealth.dac@gov.in"],
  },
  {
    id: "gs10",
    name: "Per Drop More Crop",
    categoryId: "irrigation",
    image: "/images/drop-crop.jpg",
    description: "Component of PMKSY focusing on water use efficiency",
    benefits: [
      "55% subsidy for small/marginal farmers",
      "45% subsidy for other farmers",
      "Special focus on water-stressed areas",
    ],
    eligibility: [
      "All farmers including tenant farmers",
      "Priority for water-scarce regions",
      "Group applications encouraged",
    ],
    applicationProcess: [
      "Apply through State Agriculture Department",
      "Submit land records and project proposal",
      "Implementation through approved vendors",
    ],
    contact: ["Helpline: 1800-425-1556", "Email: perdropmorecrop@gov.in"],
  },
];

export const SCHEME_UPDATES = [
  {
    id: "su1",
    title: "PM-Kisan 15th Installment Released",
    date: "2023-11-15",
    summary: "15th installment of ₹2000 credited to beneficiary accounts",
  },
  {
    id: "su2",
    title: "PMFBY Premium Subsidy Increased",
    date: "2023-10-01",
    summary: "Additional 10% subsidy for small farmers in drought-prone areas",
  },
  {
    id: "su3",
    title: "New SMAM Guidelines Released",
    date: "2023-09-20",
    summary:
      "Expanded list of eligible equipment under farm mechanization scheme",
  },
  {
    id: "su4",
    title: "KCC Interest Subvention Extended",
    date: "2023-08-15",
    summary:
      "2% interest subvention on Kisan Credit Cards extended till March 2024",
  },
  {
    id: "su5",
    title: "Organic Farming Clusters Expanded",
    date: "2023-07-01",
    summary: "500 new clusters approved under PKVY for 2023-24 fiscal year",
  },
  {
    id: "su6",
    title: "Women Farmer Training Program",
    date: "2023-06-15",
    summary:
      "New skill development initiative launched under MKSP with 100% funding",
  },
  {
    id: "su7",
    title: "Soil Health Card 2.0 Launched",
    date: "2023-05-30",
    summary:
      "Digital soil health cards with mobile app integration now available",
  },
  {
    id: "su8",
    title: "Micro Irrigation Fund Increased",
    date: "2023-04-01",
    summary: "Budget allocation increased by 25% for water-stressed districts",
  },
];
