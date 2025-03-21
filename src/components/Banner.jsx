import React from "react";

const Banner = ({ heading, subtext, buttonText, onButtonClick, imageUrl }) => {
  return (
    <div
      className="w-full h-[400px] lg:h-[600px] flex flex-col items-center justify-center text-center p-6 md:p-12 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="p-6 md:p-12 w-full max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">{subtext}</p>
        <button
          onClick={onButtonClick}
          className="px-6 py-3 bg-white text-black font-semibold text-lg rounded-full shadow-md hover:bg-gray-200 transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
