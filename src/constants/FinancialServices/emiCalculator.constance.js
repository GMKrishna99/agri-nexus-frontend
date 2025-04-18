// src/constants/GovtAss/emiCalculator.constants.js
export const LOAN_TYPES = [
  {
    name: "Kisan Credit Card (KCC)",
    minAmount: 10000,
    maxAmount: 300000,
    minTenure: 6,
    maxTenure: 60,
    defaultRate: 7.5,
    purpose: "Short-term credit for crop production needs",
    icon: "💳",
  },
  {
    name: "Farm Machinery Loan",
    minAmount: 50000,
    maxAmount: 2500000,
    minTenure: 12,
    maxTenure: 84,
    defaultRate: 9.5,
    purpose: "Purchase of tractors, harvesters, tillers etc.",
    icon: "🚜",
  },
  {
    name: "Dairy Farming Loan",
    minAmount: 50000,
    maxAmount: 1000000,
    minTenure: 12,
    maxTenure: 60,
    defaultRate: 8.5,
    purpose: "Purchase of milch animals, equipment, shed construction",
    icon: "🐄",
  },
  {
    name: "Irrigation Equipment Loan",
    minAmount: 25000,
    maxAmount: 500000,
    minTenure: 6,
    maxTenure: 60,
    defaultRate: 8.0,
    purpose: "Drip/Sprinkler systems, borewells, pumps",
    icon: "💧",
  },
  {
    name: "Poultry Farming Loan",
    minAmount: 50000,
    maxAmount: 500000,
    minTenure: 12,
    maxTenure: 48,
    defaultRate: 9.0,
    purpose: "Poultry shed construction, equipment, chicks",
    icon: "🐔",
  },
  {
    name: "Fisheries Loan",
    minAmount: 50000,
    maxAmount: 2000000,
    minTenure: 12,
    maxTenure: 84,
    defaultRate: 8.0,
    purpose: "Fish ponds, cages, feed, equipment",
    icon: "🐟",
  },
  {
    name: "Agri-Processing Unit Loan",
    minAmount: 500000,
    maxAmount: 5000000,
    minTenure: 24,
    maxTenure: 120,
    defaultRate: 10.5,
    purpose: "Food processing, packaging, storage units",
    icon: "🏭",
  },
  {
    name: "Organic Farming Loan",
    minAmount: 25000,
    maxAmount: 500000,
    minTenure: 12,
    maxTenure: 60,
    defaultRate: 7.0,
    purpose: "Organic inputs, certification, marketing",
    icon: "🌱",
  },
  {
    name: "Horticulture Loan",
    minAmount: 50000,
    maxAmount: 1000000,
    minTenure: 18,
    maxTenure: 84,
    defaultRate: 8.5,
    purpose: "Fruit/vegetable cultivation, greenhouses",
    icon: "🍎",
  },
  {
    name: "Warehouse Receipt Financing",
    minAmount: 50000,
    maxAmount: 2000000,
    minTenure: 3,
    maxTenure: 24,
    defaultRate: 9.0,
    purpose: "Against stored produce in registered warehouses",
    icon: "🏪",
  },
  {
    name: "Agri-Startup Loan",
    minAmount: 100000,
    maxAmount: 5000000,
    minTenure: 24,
    maxTenure: 120,
    defaultRate: 9.5,
    purpose: "Innovative agri-business ventures",
    icon: "💡",
  },
  {
    name: "Land Development Loan",
    minAmount: 100000,
    maxAmount: 3000000,
    minTenure: 24,
    maxTenure: 120,
    defaultRate: 8.0,
    purpose: "Land leveling, soil improvement, fencing",
    icon: "🛠️",
  },
];

export const TIPS = [
  "Choose shorter tenure to reduce total interest",
  "Negotiate interest rates with your bank",
  "Check for seasonal repayment options during harvest",
  "Consider prepayment options to reduce liability",
  "Always account for insurance costs in your budget",
];
