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
  const [amenities, setAmenities] = useState([]);
  const [isError, setIsError] = useState(false);

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

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load amenities. Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20 lg:px-5" id="amenitiesSection">
      <div className="text-center md:text-left md:ml-14">
        <h1 className="font-workSansMedium font-medium text-3xl sm:text-4xl md:text-5xl text-[#221C42] mb-6 pt-14 px-1">
          Living Your Best Life in Camaya Coast
        </h1>
        <p className="text-[#9C9C9C] max-w-5xl mx-auto md:mx-0 font-workSansMedium font-medium text-lg md:text-xl mb-12 px-3 lg:px-2">
          Imagine waking up to the sound of the surf. A gentle breeze enters the
          bedrooms as you open the windows to a breathtaking view of the sea in
          your own tropical vacation home. Now imagine making this come true.
          You can - with Camaya Coast's residential developments.
        </p>
      </div>

      {amenities.length > 0 ? (
        <div className="relative overflow-x-auto whitespace-nowrap scrollbar-hide">
          {amenities.length < 1 && (
            <>
              <PrevArrow
                onClick={() =>
                  document.querySelector(".swiper-button-prev").click()
                }
              />
              <NextArrow
                onClick={() =>
                  document.querySelector(".swiper-button-next").click()
                }
              />
            </>
          )}

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
      ) : (
        <div>Loading amenities...</div>
      )}
    </div>
  );
};

export default Amenities;
