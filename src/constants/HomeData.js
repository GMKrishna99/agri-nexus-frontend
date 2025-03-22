import {
  FaTractor,
  FaHandsHelping,
  FaSeedling,
  FaMoneyCheckAlt,
  FaBookOpen,
} from "react-icons/fa";
import SeedsCrops from "@/assets/seeds-crops/sunflower.webp";
import FertilizersPesticides from "@/assets/Fertilizers/bio.webp";
import EquipmentMachinery from "@/assets/ViewAllProducts/tractor.jpg";
import OrganicProducts from "@/assets/Fertilizers/organic compost.webp";
import FarmServices from "@/assets/ViewAllProducts/chain saw.webp";

import GovernmentPolicies from "@/assets/live-updates/govt.png";
import WeatherForecast from "@/assets/live-updates/weather.webp";
import CropMarketPrices from "@/assets/live-updates/Crop Market Prices.png";

export const FEATURES = [
  {
    title: "Marketplace",
    icon: FaSeedling,
    desc: "Buy & sell seeds, fertilizers, and equipment.",
  },
  {
    title: "Government Assistance",
    icon: FaHandsHelping,
    desc: "Find and apply for subsidies easily.",
  },
  {
    title: "Financial Services",
    icon: FaMoneyCheckAlt,
    desc: "Loan options tailored for farmers.",
  },
  {
    title: "Expert Consultation",
    icon: FaBookOpen,
    desc: "Connect with agricultural professionals.",
  },
  {
    title: "Real-time Updates",
    icon: FaTractor,
    desc: "Get latest policies, weather & market trends.",
  },
];

export const MARKETPLACE_CATEGORIES = [
  {
    name: "Seeds & Crops",
    image: SeedsCrops, // Imported image
  },
  {
    name: "Fertilizers & Pesticides",
    image: FertilizersPesticides, // Imported image
  },
  {
    name: "Equipment & Machinery",
    image: EquipmentMachinery, // Imported image
  },
  {
    name: "Organic Products",
    image: OrganicProducts, // Imported image
  },
  {
    name: "Farm Services",
    image: FarmServices, // Imported image
  },
];

export const LIVE_UPDATES = [
  {
    title: "Latest Government Policies",
    image: GovernmentPolicies, // Imported image
  },
  {
    title: "Weather Forecast",
    image: WeatherForecast, // Imported image
  },
  {
    title: "Crop Market Prices",
    image: CropMarketPrices, // Imported image
  },
];
