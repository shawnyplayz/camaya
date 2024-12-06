"use client";

import React, { useEffect, useState } from "react";
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
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import endpoints from "@/config/endpoints";
import { fetchDataGet } from "@/utils.js/fetchData";
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[0] top-[55%] transform -translate-y-1/2 cursor-pointer z-10"
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
    className="absolute left-[0] top-[55%] transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <div className="w-20 h-20 rounded-full bg-[#FFFFFF] border-[#FFC447] flex items-center justify-center shadow-lg">
      <span className="text-[#FFC107] text-2xl">
        <FaCaretLeft fontSize={40} />
      </span>
    </div>
  </div>
);
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
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const amenitiesData = await fetchDataGet(endpoints.fetchAmenities);

        const groupedAmenities = amenitiesData.result.reduce((acc, amenity) => {
          const menuName = amenity.Menu.menu_name;
          if (!acc[menuName]) {
            acc[menuName] = [];
          }
          acc[menuName].push({
            imageSrc: amenity.pictures[0].url,
            title: amenity.amenity_name,
            description: amenity.amenity_desc,
          });
          return acc;
        }, {});

        const formattedTabsData = Object.entries(groupedAmenities).map(
          ([menuName, amenities]) => ({
            title: menuName,
            cards: amenities,
          })
        );

        setAmenities(formattedTabsData);
      } catch (error) {
        console.error("Error fetching dropdown data:", error);
        setIsError(true);
      }
    };

    fetchDropdownData();
  }, []);

  const [isError, setIsError] = useState(false);
  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load amenities. Please try again later.
      </div>
    );
  }

  if (tabsData.length === 0) {
    return <div className="text-center">Loading amenities...</div>;
  }

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
          Amenities
        </h1>
        <p className="text-[#9C9C9C] max-w-4xl mx-auto md:mx-0 font-workSansMedium font-medium text-lg md:text-xl mb-12 px-3">
          At Camaya Coast, we offer a wide range of world-class amenities to
          ensure relaxation and recreation for our residents.
        </p>
      </div>

      <div className="relative overflow-x-auto whitespace-nowrap scrollbar-hide">
        {/* Custom Arrows */}
        <PrevArrow
          onClick={() => document.querySelector(".swiper-button-prev").click()}
        />
        <NextArrow
          onClick={() => document.querySelector(".swiper-button-next").click()}
        />
        <TabsContainer tabs={amenities.map((tab) => tab.title)}>
          {amenities.map((tab, tabIndex) => (
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
