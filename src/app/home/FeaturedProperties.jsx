"use client";

import Dropdown from "@/components/DropDown";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import defaultImage from "../../../public/assets/home/featuredPropertiesSection/image1.png";
import errorImage from "../../../public/assets/home/featuredPropertiesSection/error.svg";
import Button from "@/components/Button";

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
  const [isError, setIsError] = useState(false);

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

  // Handle dropdown selection changes
  const handleDropdownSelect = async (value, type) => {
    const updatedFilters = {
      ...selectedFilters,
      [type === "property" ? "prop_name" : type]: value, // Adjust "property" key to "prop_name"
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

      {/* Conditional Rendering for Images */}
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
        ) : filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={property?.pictures?.[0]?.url || defaultImage}
                alt="Property Image"
                width={800}
                height={200}
                className="pb-7"
              />
            </div>
          ))
        ) : (
          selectedFilters.location === "" &&
          selectedFilters.property === "" &&
          selectedFilters.price === "" && (
            <div className="flex items-center justify-center">
              <Image
                src={defaultImage}
                alt="Default Image"
                width={800}
                height={200}
                className="pb-7"
              />
            </div>
          )
        )}
      </div>

      <div className="flex items-center justify-center mt-[73px]">
        <Button className="px-20">Consultation</Button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
