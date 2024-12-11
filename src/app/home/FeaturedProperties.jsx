"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import defaultImage from "../../../public/assets/home/featuredPropertiesSection/image1.png";
import oneImage from "../../../public/assets/home/featuredPropertiesSection/one_image.png";
import twoImage from "../../../public/assets/home/featuredPropertiesSection/two_image.png";
import threeImage from "../../../public/assets/home/featuredPropertiesSection/three_image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import station1_1 from "../../../public/assets/home/featuredPropertiesSection/station1/1.jpg";
import station1_2 from "../../../public/assets/home/featuredPropertiesSection/station1/2.jpg";
import station1_3 from "../../../public/assets/home/featuredPropertiesSection/station1/3.jpg";
import station1_4 from "../../../public/assets/home/featuredPropertiesSection/station1/4.jpg";
import station1_5 from "../../../public/assets/home/featuredPropertiesSection/station1/5.jpg";

import station2_1 from "../../../public/assets/home/featuredPropertiesSection/station2/1.jpg";
import station2_2 from "../../../public/assets/home/featuredPropertiesSection/station2/2.jpg";
import station2_3 from "../../../public/assets/home/featuredPropertiesSection/station2/3.jpg";
import station2_4 from "../../../public/assets/home/featuredPropertiesSection/station2/4.jpg";

import station3_1 from "../../../public/assets/home/featuredPropertiesSection/station2/1.jpg";
import station3_2 from "../../../public/assets/home/featuredPropertiesSection/station2/2.jpg";

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
  // const [locations, setLocations] = useState([]);
  // const [propertyTypes, setPropertyTypes] = useState([]);
  // const [pricingOptions, setPricingOptions] = useState([]);
  // const [filteredProperties, setFilteredProperties] = useState([]);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedFilters, setSelectedFilters] = useState({
  //   location: "",
  //   property: "",
  //   price: "",
  // });

  // useEffect(() => {
  //   const fetchDropdownData = async () => {
  //     try {
  //       const locationData = await fetchDataGet(endpoints.locationOptions);
  //       setLocations(locationData);

  //       const propertyData = await fetchDataGet(endpoints.propertyOptions);
  //       setPropertyTypes(propertyData);

  //       const priceData = await fetchDataGet(endpoints.pricingOptions);
  //       setPricingOptions(priceData);

  //       const defaultProperties = await fetchDataGet(endpoints.properties);
  //       setFilteredProperties(defaultProperties.properties || []); // Populate initial results
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchDropdownData();
  // }, []);

  const data = [
    {
      id: 1,
      pictures: [{ url: station1_1 }, { url: station1_2 }],
    },
    {
      id: 2,
      pictures: [{ url: station2_3 }, { url: station1_4 }],
    },
    {
      id: 3,
      pictures: [{ url: station1_5 }],
    },
  ];

  const data2 = [
    {
      id: 1,
      pictures: [{ url: station2_1 }, { url: station2_2 }],
    },
    {
      id: 2,
      pictures: [{ url: station1_3 }, { url: station2_4 }],
    },
  ];
  const data3 = [
    {
      id: 1,
      pictures: [{ url: station3_1 }, { url: station3_2 }],
    },
  ];

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
      className="bg-gradient-to-b from-[#ffffff] via-[#F9E3C8] to-[#ffffff]"
      id="featuredPropertiesSection"
    >
      <div className="hidden relative md:flex py-12 items-center px-40 pt-[4rem]">
        <div className="border-t border-[#CCCCCC] w-1/4 mx-auto"></div>
        <span className="flex-shrink mx-4 text-gray-400">
          <h1 className="text-[#221C42] flex justify-center items-center font-workSansMedium font-medium lg:text-[64px] text-center text-3xl">
            Featured Properties
          </h1>
        </span>
        <div className="border-t border-[#CCCCCC] w-1/4 mx-auto"></div>
      </div>

      <h1 className="text-[#221C42] md:hidden flex justify-center items-center font-workSansMedium font-medium lg:text-[64px] text-center text-3xl">
        Featured Properties
      </h1>

      <div className="mt-[4rem]">
        <div className="slider-container">
          <div className="flex gap-3">
            <div>
              <Image
                src={oneImage}
                width={61}
                height={154}
                alt="one-image-feature"
              />
            </div>
            <div className="ml-[-13px]">
              <div className="relative top-4 left-4 flex flex-col gap-[10px]">
                <h2 className="font-workSansMedium font-medium text-lg sm:text-xl lg:text-[26px] text-[#FFC447] uppercase">
                  Station
                </h2>
                <h3 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-[48px] text-[#4CAF50] uppercase">
                  MARIVELES, Bataan
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* {data.map((property, index) => (
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
          ))} */}
          {/* {
            data?.map((el,id)=>(
              <div className="slider-container" key={id}>
               
              </div>
            ))
          } */}

          <div className="slider-container">
            <Slider {...sliderSettings}>
              {data?.map((el, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={el?.pictures[0]?.url || defaultImage}
                      alt={`Property Image ${index + 1}`}
                      width={800}
                      height={200}
                      className="pb-7 object-fill"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <div className="mt-[4rem]">
        <div className="slider-container">
          <div className="flex gap-3">
            <div>
              <Image
                src={twoImage}
                width={80}
                height={154}
                alt="one-image-feature"
              />
            </div>
            <div className="ml-[-13px]">
              <div className="relative top-4 left-4 flex flex-col gap-[10px]">
                <h2 className="font-workSansMedium font-medium text-lg sm:text-xl lg:text-[26px] text-[#FFC447] uppercase">
                  Station
                </h2>
                <h3 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-[48px] text-[#4CAF50] uppercase">
                  BAGAC, Bataan
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* {filteredProperties.map((property, index) => (
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
          ))} */}
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {data2?.map((el, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={el?.pictures[0]?.url || defaultImage}
                      alt={`Property Image ${index + 1}`}
                      width={800}
                      height={200}
                      className="pb-7"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="mt-[4rem]">
        <div className="slider-container">
          <div className="flex gap-3">
            <div>
              <Image
                src={threeImage}
                width={79}
                height={154}
                alt="one-image-feature"
              />
            </div>
            <div className="ml-[-13px]">
              <div className="relative top-4 left-4 flex flex-col gap-[10px]">
                <h2 className="font-workSansMedium font-medium text-lg sm:text-xl lg:text-[26px] text-[#FFC447] uppercase">
                  Station
                </h2>
                <h3 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-[48px] text-[#4CAF50] uppercase">
                  Balanga, Bataan
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* {filteredProperties.map((property, index) => (
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
          ))} */}
          <div className="slider-container">
            {data3?.map((el, index) => {
              return (
                <div key={index}>
                  {el?.pictures?.length > 1 ? (
                    <Slider {...sliderSettings}>
                      {el.pictures.map((img, i) => (
                        <div key={i}>
                          <Image
                            src={img?.url}
                            alt={`Property Image ${i + 1}`}
                            width={800}
                            height={200}
                            className="pb-7"
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <Image
                      src={el?.pictures[0]?.url}
                      alt={`Property Image ${index + 1}`}
                      width={800}
                      height={200}
                      className="pb-7"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
