import Wheetseeds from "@/assets/seeds-crops/wheet seeds.jpg";
import Tomato from "@/assets/seeds-crops/tomato.jpg";
import Mango from "@/assets/seeds-crops/mango.webp";
import Corn from "@/assets/seeds-crops/corn.jpg";
import Carrot from "@/assets/seeds-crops/carrot.webp";
import Sunflower from "@/assets/seeds-crops/sunflower.webp";
import Basil from "@/assets/seeds-crops/basil.jpg";
import Potato from "@/assets/seeds-crops/potato.webp";
import Almond from "@/assets/seeds-crops/almond.jpg";
import Lavender from "@/assets/seeds-crops/lavender.webp";
import Coffee from "@/assets/seeds-crops/coffee.webp";
import Chili from "@/assets/seeds-crops/chilli.webp";
import Strawberry from "@/assets/seeds-crops/strawberry.jpg";
import Soybean from "@/assets/seeds-crops/soya.jpg";
import Peppermint from "@/assets/seeds-crops/peppermint.jpeg";
import Pumpkin from "@/assets/seeds-crops/pumpkin.jpg";
import Cucumber from "@/assets/seeds-crops/cucumber.jpg";
import Blueberry from "@/assets/seeds-crops/blue.jpg";
import Garlic from "@/assets/seeds-crops/garlic.jpg";
import Rosemary from "@/assets/seeds-crops/rosemary.jpg";
import Peanut from "@/assets/seeds-crops/peanut.jpg";
import BellPepper from "@/assets/seeds-crops/bell peper.jpg";
import Walnut from "@/assets/seeds-crops/walnut.webp";
import Cinnamon from "@/assets/seeds-crops/cinnamon.jpg";
import Spinach from "@/assets/seeds-crops/spinach.webp";

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
    price: "₹2,079", // Approx. $25.99 → ₹2,079
    image: Wheetseeds,
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
    price: "₹1,279", // Approx. $15.99 → ₹1,279
    image: Tomato,
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
    price: "₹40,000", // Approx. $500.00 → ₹40,000
    image: Mango,
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
    price: "₹2,399", // Approx. $30.00 → ₹2,399
    image: Corn,
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
    price: "₹840", // Approx. $10.50 → ₹840
    image: Carrot,
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
    price: "₹1,660", // Approx. $20.75 → ₹1,660
    image: Sunflower,
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
    price: "₹719", // Approx. $8.99 → ₹719
    image: Basil,
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
    price: "₹960", // Approx. $12.00 → ₹960
    image: Potato,
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
    price: "₹6,000", // Approx. $75.00 → ₹6,000
    image: Almond,
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
    price: "₹1,480", // Approx. $18.50 → ₹1,480
    image: Lavender,
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
    price: "₹9,600", // Approx. $120.00 → ₹9,600
    image: Coffee,
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
    price: "₹639", // Approx. $7.99 → ₹639
    image: Chili,
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
    price: "₹1,760", // Approx. $22.00 → ₹1,760
    image: Strawberry,
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
    price: "₹1,440", // Approx. $18.00 → ₹1,440
    image: Soybean,
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
    price: "₹799", // Approx. $9.99 → ₹799
    image: Peppermint,
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
    price: "₹1,160", // Approx. $14.50 → ₹1,160
    image: Pumpkin,
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
    price: "₹960", // Approx. $12.00 → ₹960
    image: Cucumber,
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
    price: "₹3,600", // Approx. $45.00 → ₹3,600
    image: Blueberry,
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
    price: "₹559", // Approx. $6.99 → ₹559
    image: Garlic,
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
    price: "₹1,199", // Approx. $14.99 → ₹1,199
    image: Rosemary,
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
    price: "₹800", // Approx. $10.00 → ₹800
    image: Peanut,
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
    price: "₹920", // Approx. $11.50 → ₹920
    image: BellPepper,
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
    price: "₹7,200", // Approx. $90.00 → ₹7,200
    image: Walnut,
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
    price: "₹5,200", // Approx. $65.00 → ₹5,200
    image: Cinnamon,
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
    price: "₹600", // Approx. $7.50 → ₹600
    image: Spinach,
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
