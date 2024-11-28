import AmenityCard from "@/components/AmenityCard";
import React from "react";

const Amenities = () => {
  const amenitiesData = [
    {
      imageSrc: "assets/home/amenitiesSection/image1.svg",
      title: "Infinity Pool",
      description:
        "Enjoy breathtaking ocean views while lounging by our luxurious infinity pool.",
    },
    {
      imageSrc: "assets/home/amenitiesSection/image2.svg",
      title: "Water Park",
      description:
        "A family-friendly attraction with fun water slides and play areas for all ages.",
    },
    {
      imageSrc: "assets/home/amenitiesSection/image3.svg",
      title: "Sports Facilities",
      description:
        "Stay active with access to tennis courts, basketball courts, and state-of-the-art gym.",
    },
    {
      imageSrc: "assets/home/amenitiesSection/image4.svg",
      title: "Private Beach Access",
      description:
        "Experience the beauty of pristine beaches, exclusively available to residents.",
    },
  ];

  return (
    <div className="container mx-auto lg:px-20">
      <div className="text-center md:text-left">
        <h1 className="font-workSansMedium font-medium text-4xl md:text-5xl text-[#221C42] mb-6 pt-14">
          Resort-Style Amenities
        </h1>
        <p className="text-[#9C9C9C] max-w-4xl mx-auto md:mx-0 font-workSansMedium font-medium text-lg md:text-xl mb-44">
          At Camaya Coast, we offer a wide range of world-class amenities to
          ensure relaxation and recreation for our residents.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {amenitiesData.map((amenity, index) => (
          <AmenityCard
            key={index}
            imageSrc={amenity.imageSrc}
            title={amenity.title}
            description={amenity.description}
            cardIndex={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Amenities;
