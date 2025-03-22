import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HomeBanner from "@/assets/Banner-03.webp";
import Banner from "@/components/Banner";

const HeaderSection = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center">
      <Banner
        heading={"Empowering Farmers, Connecting Opportunities"}
        subtext={
          "Access agricultural products, financial services, and expert guidance, all in one platform."
        }
        buttonText={"Get Started"}
        imageUrl={HomeBanner}
      />
    </section>
  );
};

export default HeaderSection;
