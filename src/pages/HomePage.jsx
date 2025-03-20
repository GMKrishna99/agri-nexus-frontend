import React from "react";
import HeaderSection from "@/sections/HomePage/Header.section";
import KeyFeatures from "@/sections/HomePage/Keyfeatures.section";
import MarketPlace from "@/sections/HomePage/Marketplace.section";
import LiveUpdates from "@/sections/HomePage/LiveUpdates.section";
import CallToAction from "@/sections/HomePage/CallToAction.section";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen px-20">
      {/* Hero Section */}
      <HeaderSection />

      {/* Key Features */}
      <KeyFeatures />

      {/* Marketplace Preview */}
      <MarketPlace />

      {/* Live Updates */}
      <LiveUpdates />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default HomePage;
