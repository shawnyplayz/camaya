"use client";

import Dropdown from "@/components/DropDown";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import defaultImage from "../../../public/assets/home/featuredPropertiesSection/image1.png";
import errorImage from "../../../public/assets/home/featuredPropertiesSection/error.svg";

const FeaturedProperties = () => {
  const [locations, setLocations] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [pricingOptions, setPricingOptions] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    property: "",
    price: "",
  });

  // Fetch dropdown options from the backend
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const locationData = await fetchDataGet(endpoints.locationOptions);
        setLocations(locationData);

        const propertyData = await fetchDataGet(endpoints.propertyOptions);
        setPropertyTypes(propertyData);

        const priceData = await fetchDataGet(endpoints.pricingOptions);
        setPricingOptions(priceData);
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };

    fetchDropdownData();
  }, []);

  // Handle dropdown selection changes and fetch properties
  const handleDropdownSelect = async (value, type) => {
    const updatedFilters = { ...selectedFilters, [type]: value };
    setSelectedFilters(updatedFilters);

    try {
      const queryParams = new URLSearchParams(updatedFilters).toString();
      const propertiesData = await fetchDataGet(
        `${endpoints.properties}?${queryParams}`
      );
      setFilteredProperties(propertiesData.properties);
    } catch (error) {
      console.error("Error fetching filtered properties:", error);
    }
  };

  return (
    <div
      className="pb-72 bg-gradient-to-b from-[#ffffff] via-[#F9E3C8] to-[#ffffff]"
      id="featuredPropertiesSection"
    >
      <div>
        <h1 className="text-[#221C42] flex justify-center items-center font-workSansMedium font-medium lg:text-6xl pt-20 text-center text-3xl">
          Featured Properties
        </h1>
      </div>

      {/* Dropdowns */}
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

      {/* Slider or Default Image */}
      <div className="mt-32">
        <div>
          {/* Check if properties exist */}
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div key={index}>
                <div className="flex items-center justify-center">
                  <Image
                    src={property?.pictures?.[0]?.url || defaultImage}
                    alt="Property Image"
                    width={800}
                    height={200}
                    className="pb-7"
                  />
                </div>
              </div>
            ))
          ) : (
            // Show default image when no properties are available
            <div className="flex items-center justify-center">
              <Image
                src={defaultImage}
                alt="Default Image"
                width={800}
                height={200}
                className="pb-7"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
