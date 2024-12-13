import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { Divider } from "antd";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";

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
  const [properties, setProperties] = useState([]);

  const sliderSettings = (numImages) => ({
    dots: numImages > 1,
    infinite: numImages > 1,
    speed: 500,
    nextArrow: numImages > 1 ? <NextArrow /> : null,
    prevArrow: numImages > 1 ? <PrevArrow /> : null,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: numImages > 1,
    initialSlide: 0,
    autoplay: true,
    customPaging: (i) => (
      <div
        className="w-4 h-4 rounded-full bg-transparent focus:outline-none"
        aria-label={`Go to slide ${i + 1}`}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: numImages > 1,
          arrows: numImages > 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: numImages > 1,
          arrows: numImages > 1,
        },
      },
    ],
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetchDataGet(endpoints.properties);
        setProperties(response.properties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  if (properties.length === 0) {
    return null;
  }

  return (
    <div
      className="bg-gradient-to-b from-[#ffffff] via-[#F9E3C8] to-[#ffffff] mt-6"
      id="featuredPropertiesSection"
    >
      <div className="container mx-auto flex flex-col gap-3 lg:gap-12">
        <div className="md:block">
          <Divider style={{ borderColor: "#CCCCCC" }}>
            <h1 className="text-[#221C42] font-workSansMedium font-medium lg:text-[64px] text-center text-3xl">
              Featured Properties
            </h1>
          </Divider>
        </div>

        {properties.map((property, index) => {
          const numImages = property.pictures.length;
          return (
            <div key={property.prop_id} className="mt-[4rem]">
              <div className="slider-container">
                <div className="flex gap-3">
                  <span
                    className="text-[#FFC107] font-extrabold"
                    style={{
                      fontSize: "139px",
                    }}
                  >
                    {property.station_number}
                  </span>

                  <div className="ml-[-13px] mt-[60px]">
                    <div className="relative top-4 left-4 flex flex-col gap-[10px]">
                      <h2 className="font-workSansMedium font-medium text-lg sm:text-xl lg:text-[26px] text-[#FFC447] uppercase">
                        Station
                      </h2>
                      <h3 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-[48px] text-[#4CAF50] uppercase">
                        {property.location.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-container">
                <Slider {...sliderSettings(numImages)}>
                  {property.pictures.map((pic, i) => (
                    <div key={i}>
                      <Image
                        src={pic.secure_url}
                        alt={`Property Image ${i + 1}`}
                        width={800}
                        height={200}
                        className="pb-7 object-fill"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProperties;
