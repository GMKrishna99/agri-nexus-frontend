import Urea from "@/assets/Fertilizers/Urea.jpeg";
import Organic from "@/assets/Fertilizers/organic compost.webp";
import NPK from "@/assets/Fertilizers/NPK.jpeg";
import Bio from "@/assets/Fertilizers/bio.webp";
import Glyphosate from "@/assets/Fertilizers/glyphosate.jpeg";
import Neem from "@/assets/Fertilizers/neem oil.jpg";
import Copper from "@/assets/Fertilizers/copper.jpg";

export const products = [
  {
    id: 1, // Unique ID
    name: "Urea Fertilizer",
    type: "Chemical",
    price: "₹1,199", // Approx. $15.99 → ₹1,199
    image: Urea,
    description:
      "Urea fertilizer is a highly efficient nitrogen source for plants, promoting rapid growth and lush foliage. Ideal for agricultural and gardening use.",
    reviews: [
      {
        user: "John Doe",
        comment: "Great product! My plants grew so fast after using this.",
        rating: 4.5,
      },
      {
        user: "Jane Smith",
        comment: "Effective but be careful with the dosage.",
        rating: 4.0,
      },
    ],
    rating: 4.25,
    color: "red", // Chemical products are marked with red
  },
  {
    id: 2, // Unique ID
    name: "Organic Compost",
    type: "Organic",
    price: "₹950", // Approx. $12.50 → ₹950
    image: Organic,
    description:
      "Organic compost is a natural soil enhancer made from decomposed plant and animal waste. Improves soil structure and fertility.",
    reviews: [
      {
        user: "Alice Brown",
        comment: "Love how it enriches the soil naturally!",
        rating: 5.0,
      },
      {
        user: "Bob Green",
        comment: "Perfect for my organic garden.",
        rating: 4.8,
      },
    ],
    rating: 4.9,
    color: "green", // Organic products are marked with green
  },
  {
    id: 3, // Unique ID
    name: "NPK 20-20-20",
    type: "Chemical",
    price: "₹1,499", // Approx. $18.99 → ₹1,499
    image: NPK,
    description:
      "A balanced fertilizer with equal parts Nitrogen, Phosphorus, and Potassium. Suitable for all types of plants and crops.",
    reviews: [
      {
        user: "Mike Johnson",
        comment: "Works wonders on my crops!",
        rating: 4.7,
      },
      {
        user: "Sarah Lee",
        comment: "Great for boosting plant growth.",
        rating: 4.5,
      },
    ],
    rating: 4.6,
    color: "red", // Chemical products are marked with red
  },
  {
    id: 4, // Unique ID
    name: "Bio Fertilizer",
    type: "Organic",
    price: "₹1,699", // Approx. $22.00 → ₹1,699
    image: Bio,
    description:
      "Bio fertilizer contains beneficial microorganisms that improve soil health and nutrient absorption. Eco-friendly and sustainable.",
    reviews: [
      {
        user: "Emily White",
        comment: "My plants are healthier than ever!",
        rating: 4.9,
      },
      {
        user: "David Black",
        comment: "Excellent for organic farming.",
        rating: 4.7,
      },
    ],
    rating: 4.8,
    color: "green", // Organic products are marked with green
  },
  {
    id: 5, // Unique ID
    name: "Glyphosate Herbicide",
    type: "Herbicide",
    price: "₹1,999", // Approx. $25.99 → ₹1,999
    image: Glyphosate,
    description:
      "A powerful herbicide for controlling weeds and unwanted vegetation. Effective for large-scale agricultural use.",
    reviews: [
      {
        user: "Chris Evans",
        comment: "Works great on tough weeds.",
        rating: 4.3,
      },
      {
        user: "Laura Taylor",
        comment: "Be cautious with application, but it's effective.",
        rating: 4.0,
      },
    ],
    rating: 4.15,
    color: "red", // Herbicides are marked with red
  },
  {
    id: 6, // Unique ID
    name: "Neem Oil Spray",
    type: "Insecticide",
    price: "₹799", // Approx. $10.99 → ₹799
    image: Neem,
    description:
      "A natural insecticide made from neem seeds. Safe for plants and effective against pests like aphids and mites.",
    reviews: [
      {
        user: "Olivia Brown",
        comment: "Perfect for organic pest control!",
        rating: 4.8,
      },
      {
        user: "James Wilson",
        comment: "Keeps pests away without harming plants.",
        rating: 4.6,
      },
    ],
    rating: 4.7,
    color: "green", // Natural insecticides are marked with green
  },
  {
    id: 7, // Unique ID
    name: "Copper Fungicide",
    type: "Fungicide",
    price: "₹1,099", // Approx. $14.50 → ₹1,099
    image: Copper,
    description:
      "A fungicide containing copper to control fungal diseases in plants. Suitable for fruits, vegetables, and ornamental plants.",
    reviews: [
      {
        user: "Sophia Clark",
        comment: "Saved my plants from fungal infections!",
        rating: 4.5,
      },
      {
        user: "Daniel Harris",
        comment: "Effective and easy to use.",
        rating: 4.2,
      },
    ],
    rating: 4.35,
    color: "red", // Fungicides are marked with red
  },
];
