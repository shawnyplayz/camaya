"use client";

import endpoints from "@/config/endpoints";
import { fetchDataGet } from "@/utils.js/fetchData";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchDataGet(endpoints.fetchHero);
        if (Array.isArray(data)) {
          setImages(data.map((item) => item.secure_url));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    getImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            width={100}
            height={100}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        ))}
      </div>

      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(266.55deg, rgba(71, 146, 248, 0) 30.66%, #061933 97.2%)",
          zIndex: 1,
        }}
      ></div>

      <div className="relative z-10 text-white px-4 sm:px-8 md:px-16 lg:px-16 h-full flex flex-col justify-center pt-28 mx-auto container">
        <div className="font-ralewaySemiBold text-xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold max-w-full md:max-w-[971px] text-center md:text-left lg:leading-68">
          <h1>
            We&apos;ve created an affordable beach, golf & mountain view
            <span className="text-[#FFC447]"> dream home </span> for you and
            your family!
          </h1>
        </div>

        <div className="font-workSansRegular text-sm sm:text-lg md:text-xl lg:text-2xl opacity-80 mt-12 text-center md:text-left max-w-xs md:max-w-[599px] mx-auto md:mx-0">
          <p>Experience Luxury Resort Living only in Camaya Coast</p>
        </div>
      </div>

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
