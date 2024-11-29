"use client";

import Dropdown from "@/components/DropDown";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const FeaturedProperties = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleDropdownSelect = (value, type) => {
    console.log(`${type} selected:`, value);
  };

  return (
    <div className="pb-72">
      <div>
        <h1 className="text-[#221C42] flex justify-center items-center font-workSansMedium font-medium text-6xl pt-20">
          Featured Properties
        </h1>
      </div>

      {/* Dropdowns */}
      <div className="flex gap-11 justify-center items-center mt-16">
        <Dropdown
          options={["Mariveles Bataan", "Bagac Bataan", "Balanga, Bataan"]}
          onSelect={(value) => handleDropdownSelect(value, "Location")}
          placeholder="location"
        />
        <Dropdown
          options={["House", "Apartment", "Condo"]}
          onSelect={(value) => handleDropdownSelect(value, "Property")}
          placeholder="property"
        />
        <Dropdown
          options={["For Sale", "For Rent"]}
          onSelect={(value) => handleDropdownSelect(value, "price")}
          placeholder="price"
        />
      </div>

      {/* Slider */}
      <div className="mt-32">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/home/featuredPropertiesSection/image1.png"
                alt="Property 1"
                width={450}
                height={200}
                className="pb-7"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/home/featuredPropertiesSection/image2.png"
                alt="Property 2"
                width={500}
                height={600}
                className="pb-7"
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProperties;
