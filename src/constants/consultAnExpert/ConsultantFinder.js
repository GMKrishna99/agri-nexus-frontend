export const EXPERTISE_CATEGORIES = [
  {
    id: "soil",
    name: "Soil & Fertility Experts",
    icon: "👨‍🔬",
    description: "Improve your soil health and crop yields",
  },
  {
    id: "irrigation",
    name: "Irrigation & Water Management",
    icon: "🌧️",
    description: "Optimize water usage and irrigation systems",
  },
  {
    id: "fertilizers",
    name: "Fertilizers & Pesticides",
    icon: "🧴",
    description: "Right chemical balance for your crops",
  },
  {
    id: "govt-schemes",
    name: "Government Scheme Advisors",
    icon: "🧑‍💼",
    description: "Maximize benefits from agricultural schemes",
  },
  {
    id: "organic",
    name: "Organic Farming Experts",
    icon: "🌱",
    description: "Transition to sustainable organic practices",
  },
  {
    id: "market",
    name: "Market & Pricing Consultants",
    icon: "📊",
    description: "Get best prices for your produce",
  },
];

export const CONSULTATION_TYPES = [
  { id: "online", name: "Video Consultation" },
  { id: "in-person", name: "Field Visit" },
  { id: "both", name: "Both Options" },
];

export const SAMPLE_CONSULTANTS = [
  {
    id: 1,
    name: "Dr. Rajesh Patel",
    expertise: ["soil", "organic"],
    experience: "15 years",
    rating: 4.8,
    consultations: 320,
    location: "Punjab",
    languages: ["Punjabi", "Hindi", "English"],
    availability: "Mon-Sat, 9AM-6PM",
  },
  {
    id: 2,
    name: "Priya Sharma",
    expertise: ["irrigation", "govt-schemes"],
    experience: "8 years",
    rating: 4.5,
    consultations: 180,
    location: "Maharashtra",
    languages: ["Marathi", "Hindi"],
    availability: "Tue-Sun, 10AM-7PM",
  },
];
