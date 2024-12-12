"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import defaultImage from "../../../public/assets/home/featuredPropertiesSection/image1.png";
import oneImage from "../../../public/assets/home/featuredPropertiesSection/one_image.png";
import twoImage from "../../../public/assets/home/featuredPropertiesSection/two_image.png";
import threeImage from "../../../public/assets/home/featuredPropertiesSection/three_image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import station1_1 from "../../../public/assets/home/featuredPropertiesSection/station1/1.svg";
import station1_2 from "../../../public/assets/home/featuredPropertiesSection/station1/2.jpg";
import station1_3 from "../../../public/assets/home/featuredPropertiesSection/station1/3.jpg";
import station1_4 from "../../../public/assets/home/featuredPropertiesSection/station1/4.jpg";
import station1_5 from "../../../public/assets/home/featuredPropertiesSection/station1/5.jpg";

import station2_1 from "../../../public/assets/home/featuredPropertiesSection/station2/1.svg";
import station2_2 from "../../../public/assets/home/featuredPropertiesSection/station2/2.jpg";
import station2_3 from "../../../public/assets/home/featuredPropertiesSection/station2/3.jpg";
import station2_4 from "../../../public/assets/home/featuredPropertiesSection/station2/4.jpg";

import station3_1 from "../../../public/assets/home/featuredPropertiesSection/station3/1.svg";
import station3_2 from "../../../public/assets/home/featuredPropertiesSection/station3/2.jpg";
import { Divider } from "antd";

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
  const data = [station1_1, station1_2, station1_3, station1_4, station1_5];

  const data2 = [station2_1, station2_2, station2_3, station2_4];
  const data3 = [station3_1, station3_2];
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
      className="bg-gradient-to-b from-[#ffffff] via-[#F9E3C8] to-[#ffffff] flex flex-col gap-12"
      id="featuredPropertiesSection"
    >
      <div className="mx-32 hidden md:block">
        <Divider
          variant="solid"
          className=""
          style={{
            borderColor: "#000000",
          }}
        >
          <h1 className="text-[#221C42] flex justify-center items-center font-workSansMedium font-medium lg:text-[64px] text-center text-3xl">
            Featured Properties
          </h1>
        </Divider>
      </div>

      <h1 className="text-[#221C42] md:hidden flex justify-center items-center font-workSansMedium font-medium lg:text-[64px] text-center text-3xl">
        Featured Properties
      </h1>

      {/* <div className="hidden relative lg:flex py-12 items-center px-30 pt-[4rem]">
        <div className="border-t border-[#CCCCCC] w-48 mx-auto"></div>
        <span className="flex-shrink mx-4 text-gray-400">
          <h1 className="text-[#221C42] flex justify-center items-center font-workSansMedium font-medium lg:text-[64px] text-center text-3xl">
            Featured Properties
          </h1>
        </span>
        <div className="border-t border-[#CCCCCC] w-48 mx-auto"></div>
      </div> */}

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
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {data?.map((el, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={el || defaultImage}
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
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {data2?.map((el, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={el || defaultImage}
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
                src={threeImage}
                width={81}
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
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {data3?.map((el, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={el || defaultImage}
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
    </div>
  );
};

export default FeaturedProperties;
