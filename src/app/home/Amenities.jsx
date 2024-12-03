"use client";

import React, { useEffect } from "react";
import AmenityCard from "@/components/AmenityCard";
import AOS from "aos";
import "aos/dist/aos.css";
import amenitiesImage2 from "../../../public/assets/home/amenitiesSection/amenities_image_2.png";
import amenitiesImage3 from "../../../public/assets/home/amenitiesSection/amenities_image_3.png";
import amenitiesImage4 from "../../../public/assets/home/amenitiesSection/amenities_image_4.png";

const Amenities = () => {
  const amenitiesData = [
    {
      imageSrc: "assets/home/amenitiesSection/image1.svg",
      title: "Infinity Pool",
      description:
        "Enjoy breathtaking ocean views while lounging by our luxurious infinity pool.",
    },
    {
      imageSrc: amenitiesImage2,
      title: "Water Park",
      description:
        "A family-friendly attraction with fun water slides and play areas for all ages.",
    },
    {
      imageSrc: amenitiesImage3,
      title: "Sports Facilities",
      description:
        "Stay active with access to tennis courts, basketball courts, and state-of-the-art gym.",
    },
    {
      imageSrc: amenitiesImage4,
      title: "Private Beach Access",
      description:
        "Experience the beauty of pristine beaches, exclusively available to residents.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    console.log("AOS Initialized");
  }, []);

  return (
    <div className="container mx-auto py-20 lg:px-20" id="amenitiesSection">
      <div className="text-center md:text-left">
        <h1 className="font-workSansMedium font-medium text-4xl md:text-5xl text-[#221C42] mb-6 pt-14 px-1">
          Resort-Style Amenities
        </h1>
        <p className="text-[#9C9C9C] max-w-4xl mx-auto md:mx-0 font-workSansMedium font-medium text-lg md:text-xl mb-44 px-3">
          At Camaya Coast, we offer a wide range of world-class amenities to
          ensure relaxation and recreation for our residents.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-20">
        {amenitiesData.map((amenity, index) => (
          <AmenityCard
            key={index}
            imageSrc={amenity.imageSrc}
            title={amenity.title}
            description={amenity.description}
            cardIndex={index + 1}
            data-aos={index === 0 || index === 2 ? "fade-down" : "fade-up"}
          />
        ))}
      </div>
    </div>
  );
};

export default Amenities;
