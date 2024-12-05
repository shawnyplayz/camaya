"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/assets/home/heroSection/hero1.svg",
    "/assets/home/heroSection/hero2.svg",
    "/assets/home/heroSection/hero3.svg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload the images
  const preloadImages = () => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };

  useEffect(() => {
    preloadImages();

    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      id="home"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="relative z-10 text-white px-4 sm:px-8 md:px-16 lg:px-20 h-full flex flex-col justify-center pt-28">
        {/* Hero Title */}
        <div className="font-ralewaySemiBold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl md:max-w-4xl leading-tight text-center md:text-left">
          <h1>Discover Your Dream Beachfront Home</h1>
        </div>

        {/* Hero Description */}
        <div className="font-workSansRegular text-base sm:text-lg md:text-xl lg:text-2xl opacity-80 mt-6 text-center md:text-left max-w-lg md:max-w-3xl mx-auto md:mx-0">
          <p>
            Experience luxury living at Camaya Coast in Mariveles Bataan
            (Station 1, Station 2)
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
