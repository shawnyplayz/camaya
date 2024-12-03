"use client";

import Dropdown from "@/components/DropDown";
import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import defaultImage from "../../../public/assets/home/featuredPropertiesSection/image1.png";
import errorImage from "../../../public/assets/home/featuredPropertiesSection/error.svg";
import Button from "@/components/Button";
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
    <div className="w-20 h-20 rounded-full bg-[#FFFFFF] border-[#FFC447] flex items-center justify-center shadow-lg">
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
    <div className="w-20 h-20 rounded-full bg-[#FFFFFF] border-[#FFC447] flex items-center justify-center shadow-lg">
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
        setFilteredProperties(defaultProperties.properties || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      }
    };

    fetchDropdownData();
  }, []);

  const handleDropdownSelect = async (value, type) => {
    const updatedFilters = {
      ...selectedFilters,
      [type === "property" ? "prop_name" : type]: value,
    };
    setSelectedFilters(updatedFilters);

    const queryParams = new URLSearchParams(
      Object.entries(updatedFilters).reduce((acc, [key, val]) => {
        if (val) acc[key] = val;
        return acc;
      }, {})
    ).toString();

    try {
      const propertiesData = await fetchDataGet(
        `${endpoints.properties}?${queryParams}`
      );
      if (propertiesData?.properties?.length > 0) {
        setFilteredProperties(propertiesData.properties);
        setIsError(false);
      } else {
        setFilteredProperties([]);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error fetching filtered properties:", error);
      setFilteredProperties([]);
      setIsError(true);
    }
  };

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
    customPaging: (i) => <div className="custom-dot"></div>,
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

      <div className="lg:flex lg:gap-11 gap-4 justify-center items-center mt-16 grid grid-cols-2">
        <Dropdown
          options={locations}
          onSelect={(value) => handleDropdownSelect(value, "location")}
          placeholder="Location"
        />
        <Dropdown
          options={propertyTypes}
          onSelect={(value) => handleDropdownSelect(value, "property")}
          placeholder="Property"
        />
        <Dropdown
          options={pricingOptions}
          onSelect={(value) => handleDropdownSelect(value, "price")}
          placeholder="Price"
        />
      </div>

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
                  // <Image
                  //   src={property?.pictures?.[0]?.url || defaultImage}
                  //   alt="Property Image"
                  //   width={800}
                  //   height={200}
                  //   className="pb-7"
                  // />
                  <></>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mt-[73px]">
        <Button onClick={() => setIsModalOpen(true)} className="px-20">
          Consultation
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Consultation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default FeaturedProperties;
