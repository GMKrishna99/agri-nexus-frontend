import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import farmImage from "@/assets/images.jpg";

const HeaderSection = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center text-white text-center bg-cover bg-center mt-3">
      <Carousel className="w-full h-full rounded-lg overflow-hidden">
        <CarouselContent className="rounded-lg overflow-hidden">
          <CarouselItem className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            {/* Background Image */}
            <img
              src={farmImage}
              alt={`Carousel Image }`}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white px-4 rounded-lg">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Empowering Farmers with Technology 🌱
              </h2>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeaderSection;
