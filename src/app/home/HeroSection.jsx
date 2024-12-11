"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/assets/home/heroSection/property_image_1.png",
    "/assets/home/heroSection/property_image_2.png",
    "/assets/home/heroSection/property_image_3.png",
    "/assets/home/heroSection/property_image_4.png",
    "/assets/home/heroSection/property_image_5.png",
    "/assets/home/heroSection/property_image_6.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      {/* Images for background */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <Image
            width={100}
            height={100}
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-white px-4 sm:px-8 md:px-16 lg:px-16 h-full flex flex-col justify-center pt-28 mx-auto container">
        {/* Hero Title */}
        <div className="font-ralewaySemiBold text-xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold max-w-full md:max-w-[971px] text-center md:text-left lg:leading-68">
          <h1>
            We've created an affordable beach, golf & mountain view
            <span className="text-[#FFC447]"> dream home </span> for you and
            your family !
          </h1>
        </div>

        {/* Hero Description */}
        <div className="font-workSansRegular text-sm sm:text-lg md:text-xl lg:text-2xl opacity-80 mt-12 text-center md:text-left max-w-xs md:max-w-[599px] mx-auto md:mx-0">
          <p>Experience Luxury Resort Living only in Camaya Coast</p>
        </div>
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? "bg-[#FFC447]" : "bg-gray-300"
            }`}
            style={{
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
