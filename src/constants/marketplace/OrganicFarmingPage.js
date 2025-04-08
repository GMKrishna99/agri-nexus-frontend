// src/constants/marketplace/organicFarming.constants.ts

export const ORGANIC_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "seeds", name: "Organic Seeds" },
  { id: "fertilizers", name: "Natural Fertilizers" },
  { id: "pesticides", name: "Bio-Pesticides" },
  { id: "equipment", name: "Sustainable Equipment" },
  { id: "kits", name: "Starter Kits" },
  { id: "services", name: "Consulting Services" },
];

export const ORGANIC_PRODUCTS = [
  {
    id: "of1",
    name: "Certified Organic Wheat Seeds",
    categoryId: "seeds",
    price: "₹1,250/kg",
    image: "/images/organic-wheat-seeds.jpg",
    description:
      "High-yield organic wheat seeds certified by NPOP. Suitable for all soil types.",
    rating: 4.7,
    type: "Seed",
    color: "#4CAF50",
    reviews: [
      {
        user: "Rajesh Kumar",
        rating: 5,
        comment: "Excellent germination rate and pest resistance",
      },
      {
        user: "Priya Sharma",
        rating: 4,
        comment: "Good yield but required more water than expected",
      },
    ],
    benefits: [
      "Non-GMO",
      "Disease resistant",
      "90% germination guarantee",
      "Certified organic",
    ],
  },
  {
    id: "of2",
    name: "Vermicompost Fertilizer",
    categoryId: "fertilizers",
    price: "₹800/50kg",
    image: "/images/vermicompost.jpg",
    description:
      "Pure organic vermicompost enriched with essential nutrients for plant growth.",
    rating: 4.9,
    type: "Fertilizer",
    color: "#8BC34A",
    reviews: [
      {
        user: "Anil Patel",
        rating: 5,
        comment: "Doubled my vegetable yield in first season!",
      },
    ],
    benefits: [
      "Improves soil structure",
      "100% organic",
      "Rich in micronutrients",
      "Suitable for all crops",
    ],
  },
  {
    id: "of3",
    name: "Neem-based Bio-Pesticide",
    categoryId: "pesticides",
    price: "₹450/liter",
    image: "/images/neem-pesticide.jpg",
    description:
      "Natural pest control solution effective against 200+ insect species.",
    rating: 4.5,
    type: "Pesticide",
    color: "#CDDC39",
    reviews: [
      {
        user: "Suresh Reddy",
        rating: 4,
        comment: "Effective against aphids without harming bees",
      },
      {
        user: "Meena Devi",
        rating: 5,
        comment: "Saved my organic tomato crop from whiteflies",
      },
    ],
    benefits: [
      "Non-toxic to humans",
      "Environment friendly",
      "Prevents fungal diseases",
      "Improves soil health",
    ],
  },
  {
    id: "of4",
    name: "Solar-Powered Irrigation Kit",
    categoryId: "equipment",
    price: "₹12,500",
    image: "/images/solar-irrigation.jpg",
    description: "Complete drip irrigation system powered by solar energy.",
    rating: 4.8,
    type: "Equipment",
    color: "#FFC107",
    reviews: [
      {
        user: "Vijay Singh",
        rating: 5,
        comment: "Reduced my water usage by 70%",
      },
    ],
    benefits: [
      "Saves water",
      "No electricity needed",
      "Easy to install",
      "5-year warranty",
    ],
  },
  {
    id: "of5",
    name: "Organic Farming Starter Kit",
    categoryId: "kits",
    price: "₹3,200",
    image: "/images/organic-starter-kit.jpg",
    description: "Everything you need to start organic farming on 1 acre land.",
    rating: 4.6,
    type: "Kit",
    color: "#FF9800",
    reviews: [],
    benefits: [
      "Includes seeds, fertilizers, guide",
      "Step-by-step manual",
      "Customer support",
      "Budget friendly",
    ],
  },
  {
    id: "of6",
    name: "Organic Certification Consultancy",
    categoryId: "services",
    price: "₹5,000/session",
    image: "/images/certification-consulting.jpg",
    description:
      "Expert guidance for obtaining organic certification (NPOP, PGS).",
    rating: 4.9,
    type: "Service",
    color: "#795548",
    reviews: [
      {
        user: "Organic Farms Co-op",
        rating: 5,
        comment: "Got our certification in just 3 months",
      },
    ],
    benefits: [
      "Documentation assistance",
      "Inspection preparation",
      "Market linkage",
      "Government scheme guidance",
    ],
  },
];
