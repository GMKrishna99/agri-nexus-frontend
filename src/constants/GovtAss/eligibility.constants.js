export const ELIGIBILITY_CRITERIA = {
  // Scheme-specific criteria
  schemes: [
    {
      id: "pm-kisan",
      name: "PM-Kisan Samman Nidhi",
      criteria: [
        "Must be a landholding farmer family",
        "Land records should be updated",
        "Aadhaar-linked bank account required",
        "Not an institutional landholder",
        "Family annual income less than ₹10 lakh",
      ],
      documents: ["Aadhaar Card", "Land Records", "Bank Passbook"],
    },
    {
      id: "pmfby",
      name: "PMFBY (Crop Insurance)",
      criteria: [
        "Farmer should be growing notified crops",
        "Land must be enrolled during sowing season",
        "Compulsory for loanee farmers",
        "Voluntary for non-loanee farmers",
      ],
      documents: ["Aadhaar Card", "Land Records", "Crop Details"],
    },
    {
      id: "kcc",
      name: "Kisan Credit Card (KCC)",
      criteria: [
        "Active farmer aged 18-75 years",
        "Should not be a loan defaulter",
        "Valid land ownership/lease documents",
        "Minimum 1 year farming experience",
      ],
      documents: [
        "Aadhaar Card",
        "Land Records",
        "Bank Passbook",
        "Identity Proof",
      ],
    },
    {
      id: "pkvy",
      name: "PKVY (Organic Farming)",
      criteria: [
        "Farmer group of 20+ required",
        "Organic farming practice proof",
        "Cluster-based enrollment",
        "Minimum 1 hectare contiguous land",
      ],
      documents: [
        "Aadhaar Card",
        "Land Records",
        "Organic Farming Certificate",
      ],
    },
  ],

  // General eligibility factors
  factors: [
    {
      id: "farmer-type",
      name: "Type of Farmer",
      options: [
        "Small Farmer (<2ha)",
        "Marginal Farmer (<1ha)",
        "Tenant Farmer",
        "Women Farmer",
        "SC/ST Farmer",
      ],
    },
    {
      id: "land-size",
      name: "Landholding Size",
      options: [
        "Less than 1 hectare",
        "1-2 hectares",
        "2-5 hectares",
        "5+ hectares",
      ],
    },
    {
      id: "crop-type",
      name: "Crop Type",
      options: [
        "Food Crops",
        "Cash Crops",
        "Horticulture",
        "Organic Farming",
        "Mixed Cropping",
      ],
    },
    {
      id: "region",
      name: "Region",
      options: ["North", "South", "East", "West", "Northeast"],
    },
  ],
};

export const ELIGIBILITY_BENEFITS = [
  {
    icon: "⏱️",
    title: "Saves Time",
    description: "Instant results instead of manual research",
  },
  {
    icon: "📄",
    title: "No Paper Hassle",
    description: "Digital document upload and verification",
  },
  {
    icon: "🗺️",
    title: "State-Wise Matching",
    description: "Automatically shows region-specific schemes",
  },
  {
    icon: "💬",
    title: "Multilingual Support",
    description: "Available in 12 Indian languages",
  },
  {
    icon: "👨‍🌾",
    title: "Expert Assistance",
    description: "Get help if you're unsure about any criteria",
  },
];
