"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import defaultImage from "../../../public/assets/home/featuredPropertiesSection/image1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// Custom Next and Prev arrows for the slider
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-120px] top-[50%] transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <div className="w-20 h-20 rounded-full bg-[#FFFFFF] border-[#FFC447] border-2 flex items-center justify-center">
      <span className="text-[#FFC107] text-2xl">
        <FaCaretRight fontSize={40} />
      </span>
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-120px] top-[50%] transform -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
    <div className="w-20 h-20 rounded-full bg-[#FFFFFF] border-[#FFC447] border-2 flex items-center justify-center">
      <span className="text-[#FFC107] text-2xl">
        <FaCaretLeft fontSize={40} />
      </span>
    </div>
  </div>
);

const FeaturedProperties = () => {
  const [locations, setLocations] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [pricingOptions, setPricingOptions] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    property: "",
    price: "",
  });

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const locationData = await fetchDataGet(endpoints.locationOptions);
        setLocations(locationData);

        const propertyData = await fetchDataGet(endpoints.propertyOptions);
        setPropertyTypes(propertyData);

        const priceData = await fetchDataGet(endpoints.pricingOptions);
        setPricingOptions(priceData);

        const defaultProperties = await fetchDataGet(endpoints.properties);
        setFilteredProperties(defaultProperties.properties || []); // Populate initial results
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      }
    };

    fetchDropdownData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    customPaging: (i) => (
      <div
        type="button"
        className="w-4 h-4 rounded-full bg-transparent focus:outline-none"
        aria-label={`Go to slide ${i + 1}`}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div
      className="pb-72 bg-gradient-to-b from-[#ffffff] via-[#F9E3C8] to-[#ffffff]"
      id="featuredPropertiesSection"
    >
      <h1 className="text-[#221C42] flex justify-center items-center font-workSansMedium font-medium lg:text-6xl pt-20 text-center text-3xl">
        Featured Properties
      </h1>

      <div className="mt-32">
        {isError ? (
          <div className="flex items-center justify-center">
            <Image
              src={errorImage}
              alt="Error: No Matching Properties"
              width={1000}
              height={200}
              className="pb-7"
            />
          </div>
        ) : (
          <div>
            {filteredProperties.map((property, index) => (
              <div key={index} className="slider-container">
                {property?.pictures?.length > 1 ? (
                  <Slider {...sliderSettings}>
                    {property.pictures.map((img, i) => (
                      <div key={i}>
                        <Image
                          src={img?.url || defaultImage}
                          alt={`Property Image ${i + 1}`}
                          width={800}
                          height={200}
                          className="pb-7"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperties;
