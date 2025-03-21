export const CATEGORIES = [
  { id: 1, name: "Cereals" },
  { id: 2, name: "Vegetables" },
  { id: 3, name: "Fruits" },
  { id: 4, name: "Cash Crops" },
  { id: 5, name: "Legumes" },
  { id: 6, name: "Herbs" },
  { id: 7, name: "Oil Seeds" },
  { id: 8, name: "Tubers" },
  { id: 9, name: "Spices" },
  { id: 10, name: "Flowers" },
  { id: 11, name: "Nuts" },
  { id: 12, name: "Medicinal Plants" },
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Wheat Seeds",
    price: "$25.99",
    image: "/images/wheat.jpg",
    season: "Winter",
    waterConsumption: "4000 liters/day/hectare",
    growthDuration: "120 days",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Wheat is one of the most widely cultivated cereals in the world. It thrives in winter and requires well-drained loamy soil with good moisture retention.",
    categoryId: 1, // Cereals
  },
  {
    id: 2,
    name: "Tomato Seeds",
    price: "$15.99",
    image: "/images/tomato.jpg",
    season: "Summer",
    waterConsumption: "5000 liters/day/hectare",
    growthDuration: "90 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Tomatoes are a popular vegetable crop that grows best in warm weather with ample sunlight. They need consistent watering and well-drained soil.",
    categoryId: 2, // Vegetables
  },
  {
    id: 3,
    name: "Mango Crop",
    price: "$500.00",
    image: "/images/mango.jpg",
    season: "Spring",
    waterConsumption: "6000 liters/day/hectare",
    growthDuration: "5-7 years (tree maturity)",
    soilType: "Well-Drained Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Mangoes are tropical fruits that require warm temperatures and well-drained soil. The trees take years to mature but produce fruit for decades.",
    categoryId: 3, // Fruits
  },
  {
    id: 4,
    name: "Corn Seeds",
    price: "$30.00",
    image: "/images/corn.jpg",
    season: "Spring",
    waterConsumption: "6000 liters/day/hectare",
    growthDuration: "90-120 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Corn is a staple cereal crop that grows quickly and requires rich, well-drained soil. It needs plenty of water and sunlight to thrive.",
    categoryId: 1, // Cereals
  },
  {
    id: 5,
    name: "Carrot Seeds",
    price: "$10.50",
    image: "/images/carrot.jpg",
    season: "Winter",
    waterConsumption: "3500 liters/day/hectare",
    growthDuration: "70-80 days",
    soilType: "Sandy Loam",
    sunlight: "Partial to Full Sun",
    description:
      "Carrots are root vegetables that require loose, sandy soil for proper growth. They prefer cooler temperatures and moderate water supply.",
    categoryId: 2, // Vegetables
  },
  {
    id: 6,
    name: "Sunflower Seeds",
    price: "$20.75",
    image: "/images/sunflower.jpg",
    season: "Summer",
    waterConsumption: "4500 liters/day/hectare",
    growthDuration: "80-120 days",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Sunflowers are grown for their oil-rich seeds and thrive in warm climates. They need well-drained soil and full sunlight to reach maturity.",
    categoryId: 7, // Oil Seeds
  },
  {
    id: 7,
    name: "Basil Seeds",
    price: "$8.99",
    image: "/images/basil.jpg",
    season: "Spring",
    waterConsumption: "3000 liters/day/hectare",
    growthDuration: "60-90 days",
    soilType: "Well-Drained Loamy Soil",
    sunlight: "Partial to Full Sun",
    description:
      "Basil is a fragrant herb used in cooking and medicine. It grows best in warm weather and requires well-drained soil with moderate watering.",
    categoryId: 6, // Herbs
  },
  {
    id: 8,
    name: "Potato Tubers",
    price: "$12.00",
    image: "/images/potato.jpg",
    season: "Spring",
    waterConsumption: "4000 liters/day/hectare",
    growthDuration: "90-120 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Potatoes are a staple tuber crop that thrives in cool climates. They require loose, well-drained soil and consistent moisture.",
    categoryId: 8, // Tubers
  },
  {
    id: 9,
    name: "Almond Saplings",
    price: "$75.00",
    image: "/images/almond.jpg",
    season: "Spring",
    waterConsumption: "7000 liters/day/hectare",
    growthDuration: "3-5 years (tree maturity)",
    soilType: "Well-Drained Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Almonds are nutrient-rich nuts that grow on trees. They require warm, dry climates and well-drained soil to thrive.",
    categoryId: 11, // Nuts
  },
  {
    id: 10,
    name: "Lavender Plants",
    price: "$18.50",
    image: "/images/lavender.jpg",
    season: "Summer",
    waterConsumption: "2500 liters/day/hectare",
    growthDuration: "90-120 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Lavender is a fragrant herb used in aromatherapy and cosmetics. It thrives in dry, sunny conditions with well-drained soil.",
    categoryId: 6, // Herbs
  },
  {
    id: 11,
    name: "Coffee Plants",
    price: "$120.00",
    image: "/images/coffee.jpg",
    season: "Year-Round",
    waterConsumption: "5000 liters/day/hectare",
    growthDuration: "3-4 years (tree maturity)",
    soilType: "Volcanic or Loamy Soil",
    sunlight: "Partial Shade",
    description:
      "Coffee plants produce beans used to make coffee. They grow best in tropical climates with rich, well-drained soil and partial shade.",
    categoryId: 4, // Cash Crops
  },
  {
    id: 12,
    name: "Chili Pepper Seeds",
    price: "$7.99",
    image: "/images/chili.jpg",
    season: "Summer",
    waterConsumption: "3000 liters/day/hectare",
    growthDuration: "90-120 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Chili peppers are spicy fruits used in cuisines worldwide. They thrive in warm climates and require well-drained soil and plenty of sunlight.",
    categoryId: 9, // Spices
  },
  {
    id: 13,
    name: "Strawberry Plants",
    price: "$22.00",
    image: "/images/strawberry.jpg",
    season: "Spring",
    waterConsumption: "4000 liters/day/hectare",
    growthDuration: "60-90 days",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Strawberries are sweet, juicy fruits that grow best in cool climates. They require well-drained soil and regular watering.",
    categoryId: 3, // Fruits
  },
  {
    id: 14,
    name: "Soybean Seeds",
    price: "$18.00",
    image: "/images/soybean.jpg",
    season: "Summer",
    waterConsumption: "4500 liters/day/hectare",
    growthDuration: "100-120 days",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Soybeans are a versatile legume used for food and oil. They thrive in warm climates and require well-drained soil.",
    categoryId: 5, // Legumes
  },
  {
    id: 15,
    name: "Peppermint Plants",
    price: "$9.99",
    image: "/images/peppermint.jpg",
    season: "Spring",
    waterConsumption: "3000 liters/day/hectare",
    growthDuration: "60-90 days",
    soilType: "Loamy Soil",
    sunlight: "Partial Sun",
    description:
      "Peppermint is a refreshing herb used in teas and aromatherapy. It grows best in moist, well-drained soil.",
    categoryId: 6, // Herbs
  },
  {
    id: 16,
    name: "Pumpkin Seeds",
    price: "$14.50",
    image: "/images/pumpkin.jpg",
    season: "Summer",
    waterConsumption: "5000 liters/day/hectare",
    growthDuration: "90-120 days",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Pumpkins are large, nutritious fruits that grow in warm climates. They require plenty of space, sunlight, and water.",
    categoryId: 3, // Fruits
  },
  {
    id: 17,
    name: "Cucumber Seeds",
    price: "$12.00",
    image: "/images/cucumber.jpg",
    season: "Summer",
    waterConsumption: "4000 liters/day/hectare",
    growthDuration: "50-70 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Cucumbers are refreshing vegetables that grow quickly in warm weather. They need consistent watering and well-drained soil.",
    categoryId: 2, // Vegetables
  },
  {
    id: 18,
    name: "Blueberry Bushes",
    price: "$45.00",
    image: "/images/blueberry.jpg",
    season: "Spring",
    waterConsumption: "5000 liters/day/hectare",
    growthDuration: "2-3 years (bush maturity)",
    soilType: "Acidic Soil",
    sunlight: "Full Sun",
    description:
      "Blueberries are antioxidant-rich fruits that grow on bushes. They require acidic soil and plenty of sunlight.",
    categoryId: 3, // Fruits
  },
  {
    id: 19,
    name: "Garlic Bulbs",
    price: "$6.99",
    image: "/images/garlic.jpg",
    season: "Winter",
    waterConsumption: "3000 liters/day/hectare",
    growthDuration: "90-120 days",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Garlic is a flavorful bulb used in cooking. It grows best in cool climates and requires well-drained soil.",
    categoryId: 2, // Vegetables
  },
  {
    id: 20,
    name: "Rosemary Plants",
    price: "$14.99",
    image: "/images/rosemary.jpg",
    season: "Spring",
    waterConsumption: "2500 liters/day/hectare",
    growthDuration: "90-120 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Rosemary is a fragrant herb used in cooking and aromatherapy. It thrives in dry, sunny conditions with well-drained soil.",
    categoryId: 6, // Herbs
  },
  {
    id: 21,
    name: "Peanut Seeds",
    price: "$10.00",
    image: "/images/peanut.jpg",
    season: "Summer",
    waterConsumption: "4000 liters/day/hectare",
    growthDuration: "120-150 days",
    soilType: "Sandy Loam",
    sunlight: "Full Sun",
    description:
      "Peanuts are protein-rich legumes that grow underground. They require warm climates and well-drained soil.",
    categoryId: 5, // Legumes
  },
  {
    id: 22,
    name: "Bell Pepper Seeds",
    price: "$11.50",
    image: "/images/bell-pepper.jpg",
    season: "Summer",
    waterConsumption: "4500 liters/day/hectare",
    growthDuration: "70-90 days",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Bell peppers are colorful vegetables that grow in warm climates. They need consistent watering and well-drained soil.",
    categoryId: 2, // Vegetables
  },
  {
    id: 23,
    name: "Walnut Saplings",
    price: "$90.00",
    image: "/images/walnut.jpg",
    season: "Spring",
    waterConsumption: "6000 liters/day/hectare",
    growthDuration: "5-7 years (tree maturity)",
    soilType: "Loamy Soil",
    sunlight: "Full Sun",
    description:
      "Walnuts are nutrient-rich nuts that grow on trees. They require well-drained soil and plenty of sunlight.",
    categoryId: 11, // Nuts
  },
  {
    id: 24,
    name: "Cinnamon Saplings",
    price: "$65.00",
    image: "/images/cinnamon.jpg",
    season: "Year-Round",
    waterConsumption: "4000 liters/day/hectare",
    growthDuration: "2-3 years (tree maturity)",
    soilType: "Loamy Soil",
    sunlight: "Partial Shade",
    description:
      "Cinnamon is a spice derived from the bark of trees. It grows best in tropical climates with rich, well-drained soil.",
    categoryId: 9, // Spices
  },
  {
    id: 25,
    name: "Spinach Seeds",
    price: "$7.50",
    image: "/images/spinach.jpg",
    season: "Winter",
    waterConsumption: "3000 liters/day/hectare",
    growthDuration: "40-50 days",
    soilType: "Loamy Soil",
    sunlight: "Partial Sun",
    description:
      "Spinach is a nutrient-rich leafy green that grows quickly in cool weather. It requires moist, well-drained soil.",
    categoryId: 2, // Vegetables
  },
];
