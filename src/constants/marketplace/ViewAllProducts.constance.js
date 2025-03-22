import organicFertilizer from "@/assets/ViewAllProducts/orgamic Fertilizer.webp";
import HighQualitySeeds from "@/assets/ViewAllProducts/ihgh quality seeds.webp";
import Tractor from "@/assets/ViewAllProducts/tractor.jpg";
import PlowingMachine from "@/assets/ViewAllProducts/plowing machine.avif";
import IrrigationPump from "@/assets/ViewAllProducts/irrigation pump.jpg";
import GreenhouseKit from "@/assets/ViewAllProducts/green house kit.jpg";
import HarvesterMachine from "@/assets/ViewAllProducts/Harvester Machine.jpg";
import SoilTestingKit from "@/assets/ViewAllProducts/Soil Testing Kit.jpg";
import ElectricFenceKit from "@/assets/ViewAllProducts/electric fence kit.webp";
import FarmTruck from "@/assets/ViewAllProducts/farm truck.jpg";
import Chainsaw from "@/assets/ViewAllProducts/chain saw.webp";
import DroneSprayer from "@/assets/ViewAllProducts/drone sprayer.webp";
import Wheelbarrow from "@/assets/ViewAllProducts/wheel barrow.jpg";
import SeedSpreader from "@/assets/ViewAllProducts/seed spreader.webp";
import PortableGenerator from "@/assets/ViewAllProducts/generator.jpg";
import PruningShears from "@/assets/ViewAllProducts/pruning shears.jpg";
import Cultivator from "@/assets/ViewAllProducts/cultivator.jpg";
import HayBaler from "@/assets/ViewAllProducts/hay baler.avif";
import LivestockTrailer from "@/assets/ViewAllProducts/livestock trailer.jpg";
import GrainMill from "@/assets/ViewAllProducts/grain mill.jpg";

export const PRODUCTS = [
  {
    id: 1,
    name: "Organic Fertilizer",
    price: "₹1,279", // Approx. $15.99 → ₹1,279
    image: organicFertilizer,
    type: "product",
    description:
      "A high-quality organic fertilizer that improves soil fertility and promotes healthy plant growth. Ideal for vegetables, flowers, and fruit-bearing plants. Contains essential nutrients to enhance crop yield.",
    stock: 120,
    purchased: 35,
    reviews: 4.5,
    comments: [
      {
        name: "John D.",
        rating: 5,
        comment:
          "Great for my vegetable garden! Plants grew faster than expected.",
      },
      {
        name: "Emily R.",
        rating: 4,
        comment:
          "Highly effective and eco-friendly, but the packaging could be better.",
      },
      {
        name: "Michael K.",
        rating: 5,
        comment:
          "This fertilizer has transformed my crops! Highly recommended.",
      },
      {
        name: "Sarah L.",
        rating: 4,
        comment: "Good quality, but a bit expensive compared to others.",
      },
      {
        name: "David P.",
        rating: 5,
        comment: "Best organic fertilizer I've used in years!",
      },
    ],
  },
  {
    id: 2,
    name: "High-Quality Seeds",
    price: "₹679", // Approx. $8.49 → ₹679
    image: HighQualitySeeds,
    type: "product",
    description:
      "Premium seeds with a high germination rate for optimal yield. Specially selected for better resistance against pests and diseases.",
    stock: 200,
    purchased: 80,
    reviews: 4.8,
    comments: [
      {
        name: "Emma T.",
        rating: 5,
        comment: "Best seeds I've ever bought! Sprouted in just a few days.",
      },
      {
        name: "Chris B.",
        rating: 4,
        comment: "Great quality, but wish there were more varieties.",
      },
      {
        name: "Olivia M.",
        rating: 5,
        comment: "Fast sprouting and good yield. Worth every penny!",
      },
      {
        name: "James H.",
        rating: 4,
        comment: "Very good, but a bit pricey for the quantity provided.",
      },
      {
        name: "Sophia L.",
        rating: 5,
        comment: "These seeds gave me the best crop in years!",
      },
    ],
  },
  {
    id: 3,
    name: "Tractor Rental",
    price: "₹2,000/hour", // Approx. $25.00 → ₹2,000/hour
    image: Tractor,
    type: "vehicle",
    description:
      "Rent a high-performance tractor for agricultural use. Ideal for plowing, tilling, and heavy-duty farming tasks.",
    stock: 10,
    purchased: 5,
    reviews: 4.7,
    comments: [
      {
        name: "Mark P.",
        rating: 5,
        comment: "Reliable and well-maintained tractor. Great performance.",
      },
      {
        name: "Anna G.",
        rating: 4,
        comment:
          "Helped me complete plowing efficiently, but fuel consumption is a bit high.",
      },
      {
        name: "Jake W.",
        rating: 5,
        comment: "Affordable and highly efficient. Will rent again!",
      },
      {
        name: "Rebecca S.",
        rating: 4,
        comment: "Worked well but had minor technical issues initially.",
      },
      {
        name: "Liam K.",
        rating: 5,
        comment: "Best tractor rental service! Great value for money.",
      },
    ],
  },
  {
    id: 4,
    name: "Plowing Machine",
    price: "₹2,400/hour", // Approx. $30.00 → ₹2,400/hour
    image: PlowingMachine,
    type: "vehicle",
    description:
      "Heavy-duty plowing machine for efficient land preparation. Reduces manual effort and improves soil aeration.",
    stock: 8,
    purchased: 3,
    reviews: 4.6,
    comments: [
      {
        name: "Jason R.",
        rating: 5,
        comment: "Makes plowing so much easier! Sturdy and powerful.",
      },
      {
        name: "Carla N.",
        rating: 4,
        comment:
          "Durable and worth the price, but requires regular maintenance.",
      },
      {
        name: "Victor M.",
        rating: 5,
        comment: "Absolutely love this machine! Increased my efficiency.",
      },
      {
        name: "Diana F.",
        rating: 4,
        comment: "Works great, but could use better instructions for setup.",
      },
      {
        name: "Ben H.",
        rating: 5,
        comment: "Saves so much time and effort. Highly recommend!",
      },
    ],
  },
  {
    id: 5,
    name: "Irrigation Pump",
    price: "₹20,000", // Approx. $250.00 → ₹20,000
    image: IrrigationPump,
    type: "product",
    description:
      "High-efficiency irrigation pump suitable for all farm sizes. Ensures even water distribution and minimizes wastage.",
    stock: 25,
    purchased: 10,
    reviews: 4.4,
    comments: [
      {
        name: "Laura J.",
        rating: 5,
        comment: "Saves a lot of water and energy. Great investment!",
      },
      {
        name: "Steve T.",
        rating: 4,
        comment:
          "Very effective for large farms, but needs occasional servicing.",
      },
      {
        name: "Alice B.",
        rating: 5,
        comment: "Works flawlessly! My farm irrigation has improved a lot.",
      },
      {
        name: "Henry M.",
        rating: 4,
        comment: "Good product but took a while to install correctly.",
      },
      {
        name: "Linda P.",
        rating: 5,
        comment: "Highly efficient and easy to use. A must-have!",
      },
    ],
  },
  {
    id: 6,
    name: "Greenhouse Kit",
    price: "₹39,999", // Approx. $499.99 → ₹39,999
    image: GreenhouseKit,
    type: "product",
    description:
      "A complete greenhouse kit for year-round farming. Includes durable frames, UV-resistant covers, and ventilation systems.",
    stock: 15,
    purchased: 7,
    reviews: 4.9,
    comments: [
      {
        name: "Ethan R.",
        rating: 5,
        comment: "Perfect for growing vegetables in winter. Easy to assemble.",
      },
      {
        name: "Mia S.",
        rating: 5,
        comment: "Excellent quality! My plants are thriving.",
      },
      {
        name: "Noah L.",
        rating: 4,
        comment: "Great product, but the instructions could be clearer.",
      },
      {
        name: "Ava K.",
        rating: 5,
        comment: "Worth every penny! Highly recommend for serious gardeners.",
      },
      {
        name: "Lucas P.",
        rating: 5,
        comment: "Sturdy and well-designed. My plants love it!",
      },
    ],
  },
  {
    id: 7,
    name: "Harvester Machine",
    price: "₹4,000/hour", // Approx. $50.00 → ₹4,000/hour
    image: HarvesterMachine,
    type: "vehicle",
    description:
      "Advanced harvester machine for efficient crop harvesting. Suitable for wheat, corn, and other grains.",
    stock: 5,
    purchased: 2,
    reviews: 4.8,
    comments: [
      {
        name: "Oliver T.",
        rating: 5,
        comment:
          "Saves so much time during harvest season. Excellent performance.",
      },
      {
        name: "Charlotte H.",
        rating: 4,
        comment: "Works great but requires regular maintenance.",
      },
      {
        name: "William B.",
        rating: 5,
        comment: "Highly efficient and easy to operate. A game-changer!",
      },
      {
        name: "Amelia W.",
        rating: 4,
        comment: "Good machine, but the price is a bit steep.",
      },
      {
        name: "James M.",
        rating: 5,
        comment: "Best investment for my farm. Highly recommended!",
      },
    ],
  },
  {
    id: 8,
    name: "Soil Testing Kit",
    price: "₹2,399", // Approx. $29.99 → ₹2,399
    image: SoilTestingKit,
    type: "product",
    description:
      "A comprehensive soil testing kit to analyze pH levels, nutrient content, and soil health. Essential for optimal crop growth.",
    stock: 50,
    purchased: 20,
    reviews: 4.7,
    comments: [
      {
        name: "Benjamin L.",
        rating: 5,
        comment:
          "Very accurate and easy to use. Helped me improve my soil quality.",
      },
      {
        name: "Chloe R.",
        rating: 4,
        comment: "Great kit, but the instructions could be more detailed.",
      },
      {
        name: "Daniel K.",
        rating: 5,
        comment: "A must-have for any farmer. Highly accurate results.",
      },
      {
        name: "Zoe P.",
        rating: 4,
        comment: "Good value for money, but takes some time to get results.",
      },
      {
        name: "Samuel H.",
        rating: 5,
        comment: "Improved my crop yield significantly. Highly recommend!",
      },
    ],
  },
  {
    id: 9,
    name: "Electric Fence Kit",
    price: "₹15,999", // Approx. $199.99 → ₹15,999
    image: ElectricFenceKit,
    type: "product",
    description:
      "An electric fence kit to protect your farm from pests and intruders. Easy to install and highly effective.",
    stock: 30,
    purchased: 12,
    reviews: 4.6,
    comments: [
      {
        name: "Grace T.",
        rating: 5,
        comment: "Keeps animals away effectively. Very reliable.",
      },
      {
        name: "Henry W.",
        rating: 4,
        comment: "Works well, but the battery life could be better.",
      },
      {
        name: "Ella M.",
        rating: 5,
        comment: "Easy to set up and highly effective. Great product!",
      },
      {
        name: "Alexander R.",
        rating: 4,
        comment: "Good quality, but the wires are a bit thin.",
      },
      {
        name: "Scarlett B.",
        rating: 5,
        comment: "Perfect for protecting my crops. Highly recommend!",
      },
    ],
  },
  {
    id: 10,
    name: "Farm Truck Rental",
    price: "₹2,800/hour", // Approx. $35.00 → ₹2,800/hour
    image: FarmTruck,
    type: "vehicle",
    description:
      "Rent a sturdy farm truck for transporting goods, equipment, and produce. Ideal for heavy-duty tasks.",
    stock: 7,
    purchased: 3,
    reviews: 4.5,
    comments: [
      {
        name: "Jack H.",
        rating: 5,
        comment: "Reliable and spacious. Perfect for hauling crops.",
      },
      {
        name: "Sophie L.",
        rating: 4,
        comment: "Great truck, but the hourly rate is a bit high.",
      },
      {
        name: "Ethan W.",
        rating: 5,
        comment: "Made transporting so much easier. Highly recommend!",
      },
      {
        name: "Lily R.",
        rating: 4,
        comment: "Good truck, but the fuel efficiency could be better.",
      },
      {
        name: "Oscar M.",
        rating: 5,
        comment: "Perfect for my farm needs. Will rent again!",
      },
    ],
  },
  {
    id: 11,
    name: "Chainsaw",
    price: "₹1,600/hour", // Approx. $20.00 → ₹1,600/hour
    image: Chainsaw,
    type: "tool",
    description:
      "A powerful chainsaw for cutting trees, branches, and logs. Ideal for farm maintenance and land clearing.",
    stock: 12,
    purchased: 6,
    reviews: 4.6,
    comments: [
      {
        name: "Noah K.",
        rating: 5,
        comment: "Cuts through thick logs like butter. Very efficient.",
      },
      {
        name: "Ava T.",
        rating: 4,
        comment: "Great tool, but it's heavy to use for long periods.",
      },
      {
        name: "Liam P.",
        rating: 5,
        comment: "Perfect for clearing land. Highly recommend!",
      },
      {
        name: "Emma R.",
        rating: 4,
        comment: "Works well, but the noise level is quite high.",
      },
      {
        name: "Mason H.",
        rating: 5,
        comment: "Best chainsaw I've ever used. Worth the price!",
      },
    ],
  },
  {
    id: 12,
    name: "Drone Sprayer",
    price: "₹3,200/hour", // Approx. $40.00 → ₹3,200/hour
    image: DroneSprayer,
    type: "machine",
    description:
      "A drone sprayer for precision pesticide and fertilizer application. Covers large areas quickly and efficiently.",
    stock: 6,
    purchased: 2,
    reviews: 4.7,
    comments: [
      {
        name: "Lucas T.",
        rating: 5,
        comment: "Saves so much time and effort. Highly efficient!",
      },
      {
        name: "Zoe W.",
        rating: 4,
        comment:
          "Great for large farms, but requires some training to operate.",
      },
      {
        name: "Ethan L.",
        rating: 5,
        comment: "Revolutionized my farming process. Highly recommend!",
      },
      {
        name: "Mia R.",
        rating: 4,
        comment: "Works well, but the battery life could be longer.",
      },
      {
        name: "Oliver K.",
        rating: 5,
        comment: "Perfect for precision spraying. Worth every penny!",
      },
    ],
  },
  {
    id: 13,
    name: "Wheelbarrow",
    price: "₹400/hour", // Approx. $5.00 → ₹400/hour
    image: Wheelbarrow,
    type: "tool",
    description:
      "A sturdy wheelbarrow for transporting soil, compost, and other materials around the farm.",
    stock: 25,
    purchased: 15,
    reviews: 4.5,
    comments: [
      {
        name: "Charlotte P.",
        rating: 5,
        comment: "Very durable and easy to maneuver. Great for farm work.",
      },
      {
        name: "James R.",
        rating: 4,
        comment: "Good wheelbarrow, but the handles could be more comfortable.",
      },
      {
        name: "Amelia T.",
        rating: 5,
        comment: "Perfect for moving heavy loads. Highly recommend!",
      },
      {
        name: "William K.",
        rating: 4,
        comment: "Works well, but the tire could be more puncture-resistant.",
      },
      {
        name: "Sophia L.",
        rating: 5,
        comment: "Essential tool for any farmer. Very reliable!",
      },
    ],
  },
  {
    id: 14,
    name: "Seed Spreader",
    price: "₹1,200/hour", // Approx. $15.00 → ₹1,200/hour
    image: SeedSpreader,
    type: "machine",
    description:
      "A seed spreader for even distribution of seeds across large fields. Adjustable settings for different seed types.",
    stock: 10,
    purchased: 4,
    reviews: 4.6,
    comments: [
      {
        name: "Benjamin W.",
        rating: 5,
        comment: "Makes seeding so much easier. Highly efficient!",
      },
      {
        name: "Chloe M.",
        rating: 4,
        comment: "Works well, but the hopper capacity could be larger.",
      },
      {
        name: "Daniel T.",
        rating: 5,
        comment: "Perfect for large fields. Highly recommend!",
      },
      {
        name: "Zoe R.",
        rating: 4,
        comment: "Good machine, but requires regular cleaning.",
      },
      {
        name: "Samuel K.",
        rating: 5,
        comment: "Saves so much time during planting season. Great product!",
      },
    ],
  },
  {
    id: 15,
    name: "Portable Generator",
    price: "₹2,000/hour", // Approx. $25.00 → ₹2,000/hour
    image: PortableGenerator,
    type: "machine",
    description:
      "A portable generator for powering tools and equipment in remote areas of the farm. Reliable and easy to use.",
    stock: 8,
    purchased: 3,
    reviews: 4.7,
    comments: [
      {
        name: "Grace H.",
        rating: 5,
        comment: "Keeps my tools running during power outages. Very reliable.",
      },
      {
        name: "Henry T.",
        rating: 4,
        comment: "Works well, but the noise level is a bit high.",
      },
      {
        name: "Ella R.",
        rating: 5,
        comment: "Perfect for remote farm work. Highly recommend!",
      },
      {
        name: "Alexander W.",
        rating: 4,
        comment: "Good generator, but the fuel consumption is high.",
      },
      {
        name: "Scarlett M.",
        rating: 5,
        comment: "Essential for my farm operations. Great product!",
      },
    ],
  },
  {
    id: 16,
    name: "Pruning Shears",
    price: "₹1,039", // Approx. $12.99 → ₹1,039
    image: PruningShears,
    type: "tool",
    description:
      "High-quality pruning shears for trimming plants, shrubs, and trees. Sharp and durable blades for precise cuts.",
    stock: 50,
    purchased: 25,
    reviews: 4.8,
    comments: [
      {
        name: "Liam T.",
        rating: 5,
        comment: "Cuts through branches effortlessly. Very sharp!",
      },
      {
        name: "Emma W.",
        rating: 4,
        comment: "Great shears, but the handles could be more ergonomic.",
      },
      {
        name: "Noah R.",
        rating: 5,
        comment: "Perfect for maintaining my orchard. Highly recommend!",
      },
      {
        name: "Ava K.",
        rating: 4,
        comment: "Good quality, but the spring mechanism could be stronger.",
      },
      {
        name: "Lucas M.",
        rating: 5,
        comment: "Best pruning shears I've ever used. Worth the price!",
      },
    ],
  },
  {
    id: 17,
    name: "Cultivator",
    price: "₹1,440/hour", // Approx. $18.00 → ₹1,440/hour
    image: Cultivator,
    type: "machine",
    description:
      "A cultivator for tilling soil and preparing seedbeds. Lightweight and easy to operate.",
    stock: 12,
    purchased: 5,
    reviews: 4.6,
    comments: [
      {
        name: "Oliver R.",
        rating: 5,
        comment: "Makes soil preparation so much easier. Highly efficient!",
      },
      {
        name: "Charlotte W.",
        rating: 4,
        comment: "Works well, but the tines could be more durable.",
      },
      {
        name: "William T.",
        rating: 5,
        comment: "Perfect for small to medium-sized farms. Highly recommend!",
      },
      {
        name: "Amelia K.",
        rating: 4,
        comment: "Good machine, but the handle could be more comfortable.",
      },
      {
        name: "James M.",
        rating: 5,
        comment: "Saves so much time and effort. Great product!",
      },
    ],
  },
  {
    id: 18,
    name: "Hay Baler",
    price: "₹3,600/hour", // Approx. $45.00 → ₹3,600/hour
    image: HayBaler,
    type: "machine",
    description:
      "A hay baler for compacting hay into bales for easy storage and transport. Suitable for large farms.",
    stock: 6,
    purchased: 2,
    reviews: 4.7,
    comments: [
      {
        name: "Benjamin R.",
        rating: 5,
        comment: "Makes hay baling so much faster. Highly efficient!",
      },
      {
        name: "Chloe W.",
        rating: 4,
        comment: "Works well, but requires regular maintenance.",
      },
      {
        name: "Daniel T.",
        rating: 5,
        comment: "Perfect for large-scale hay production. Highly recommend!",
      },
      {
        name: "Zoe K.",
        rating: 4,
        comment: "Good machine, but the price is a bit high.",
      },
      {
        name: "Samuel M.",
        rating: 5,
        comment: "Saves so much time during harvest season. Great product!",
      },
    ],
  },
  {
    id: 19,
    name: "Livestock Trailer",
    price: "₹3,200/hour", // Approx. $40.00 → ₹3,200/hour
    image: LivestockTrailer,
    type: "vehicle",
    description:
      "A livestock trailer for transporting animals safely and comfortably. Durable and easy to tow.",
    stock: 5,
    purchased: 2,
    reviews: 4.6,
    comments: [
      {
        name: "Grace T.",
        rating: 5,
        comment: "Perfect for transporting my cattle. Very sturdy!",
      },
      {
        name: "Henry W.",
        rating: 4,
        comment: "Works well, but the ramp could be wider.",
      },
      {
        name: "Ella R.",
        rating: 5,
        comment: "Highly recommend for livestock transport. Great product!",
      },
      {
        name: "Alexander K.",
        rating: 4,
        comment: "Good trailer, but the price is a bit steep.",
      },
      {
        name: "Scarlett M.",
        rating: 5,
        comment: "Essential for my farm operations. Very reliable!",
      },
    ],
  },
  {
    id: 20,
    name: "Grain Mill",
    price: "₹24,000", // Approx. $300.00 → ₹24,000
    image: GrainMill,
    type: "machine",
    description:
      "A grain mill for grinding grains into flour. Suitable for small to medium-sized farms.",
    stock: 10,
    purchased: 4,
    reviews: 4.7,
    comments: [
      {
        name: "Liam W.",
        rating: 5,
        comment: "Produces high-quality flour. Very efficient!",
      },
      {
        name: "Emma T.",
        rating: 4,
        comment: "Works well, but the noise level is a bit high.",
      },
      {
        name: "Noah R.",
        rating: 5,
        comment: "Perfect for small-scale flour production. Highly recommend!",
      },
      {
        name: "Ava K.",
        rating: 4,
        comment: "Good machine, but the setup instructions could be clearer.",
      },
      {
        name: "Lucas M.",
        rating: 5,
        comment: "Saves so much time and effort. Great product!",
      },
    ],
  },
];
