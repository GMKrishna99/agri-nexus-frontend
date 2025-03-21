export const products = [
  {
    id: 1, // Unique ID
    name: "Urea Fertilizer",
    type: "Chemical",
    price: "$15.99",
    image: "/images/urea.jpg",
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
    price: "$12.50",
    image: "/images/compost.jpg",
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
    price: "$18.99",
    image: "/images/npk.jpg",
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
    price: "$22.00",
    image: "/images/biofert.jpg",
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
    price: "$25.99",
    image: "/images/glyphosate.jpg",
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
    price: "$10.99",
    image: "/images/neemoil.jpg",
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
    price: "$14.50",
    image: "/images/copperfungi.jpg",
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
