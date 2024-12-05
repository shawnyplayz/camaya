"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import TabsContainer from "@/components/TabsContainer";
import Tabs from "@/components/Tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import amenitiesImage2 from "../../../public/assets/home/amenitiesSection/amenities_image_2.png";
import amenitiesImage3 from "../../../public/assets/home/amenitiesSection/amenities_image_3.png";
import amenitiesImage4 from "../../../public/assets/home/amenitiesSection/amenities_image_4.png";

const Amenities = () => {
  const tabsData = [
    {
      title: "Infinity Pool",
      cards: [
        {
          imageSrc: "assets/home/amenitiesSection/image1.svg",
          title: "Infinity Pool",
          description:
            "Enjoy breathtaking ocean views while lounging by our luxurious infinity pool.",
        },
        {
          imageSrc: amenitiesImage2,
          title: "Spa Retreat",
          description:
            "Rejuvenate your mind and body with our premium spa treatments.",
        },
        {
          imageSrc: "assets/home/amenitiesSection/image1.svg",
          title: "Infinity Pool",
          description:
            "Enjoy breathtaking ocean views while lounging by our luxurious infinity pool.",
        },
        {
          imageSrc: amenitiesImage2,
          title: "Spa Retreat",
          description:
            "Rejuvenate your mind and body with our premium spa treatments.",
        },
        {
          imageSrc: "assets/home/amenitiesSection/image1.svg",
          title: "Infinity Pool",
          description:
            "Enjoy breathtaking ocean views while lounging by our luxurious infinity pool.",
        },
        {
          imageSrc: amenitiesImage2,
          title: "Spa Retreat",
          description:
            "Rejuvenate your mind and body with our premium spa treatments.",
        },
      ],
    },
    {
      title: "Water Park",
      cards: [
        {
          imageSrc: amenitiesImage3,
          title: "Sports Facilities",
          description:
            "Stay active with access to tennis courts, basketball courts, and a state-of-the-art gym.",
        },
        {
          imageSrc: amenitiesImage4,
          title: "Water Park",
          description:
            "A family-friendly attraction with fun water slides and play areas for all ages.",
        },
      ],
    },
    {
      title: "Golf Courses",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
    {
      title: "Event Centers",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
    {
      title: "Beaches",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
    {
      title: "Transport Servcies",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
    {
      title: "Hotels",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
    {
      title: "Food & Retail Outlets",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
    {
      title: "Malls",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
    {
      title: "Clubhouses",
      cards: [
        {
          imageSrc: amenitiesImage4,
          title: "Private Beach",
          description:
            "Experience the beauty of pristine beaches, exclusively available to residents.",
        },
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="container mx-auto py-20 lg:px-5" id="amenitiesSection">
      <div className="text-center md:text-left">
        <h1 className="font-workSansMedium font-medium text-4xl md:text-5xl text-[#221C42] mb-6 pt-14 px-1">
          Resort-Style Amenities
        </h1>
        <p className="text-[#9C9C9C] max-w-4xl mx-auto md:mx-0 font-workSansMedium font-medium text-lg md:text-xl mb-12 px-3">
          At Camaya Coast, we offer a wide range of world-class amenities to
          ensure relaxation and recreation for our residents.
        </p>
      </div>

      <div className="relative overflow-x-auto whitespace-nowrap scrollbar-hide">
        <TabsContainer tabs={tabsData.map((tab) => tab.title)}>
          {tabsData.map((tab, tabIndex) => (
            <Tabs key={tabIndex}>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation]}
                className="swiper-container"
              >
                {tab.cards.map((card, cardIndex) => (
                  <SwiperSlide key={cardIndex}>
                    <div
                      className="flex flex-col items-center text-center p-6 bg-white"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-anchor-placement="top-center"
                    >
                      <Image
                        src={card.imageSrc}
                        alt={card.title}
                        width={450}
                        height={450}
                        className="w-[450px] h-[450px] object-cover rounded-lg"
                      />
                      <h3 className="text-xl md:text-2xl font-semibold text-[#221C42] mt-4">
                        {card.title}
                      </h3>
                      <p className="text-[#646464] text-sm md:text-base mt-2 leading-relaxed max-w-xs line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Tabs>
          ))}
        </TabsContainer>
      </div>
    </div>
  );
};

export default Amenities;
