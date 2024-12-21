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

const NextArrow = ({ className, onClick }) => (
  <div
    className={`absolute right-[3px] top-[50%] transform -translate-y-1/2 cursor-pointer z-10 ${className}`}
    onClick={onClick}
  >
    <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border-[#FFC447] border-2 flex items-center justify-center">
      <span className="text-[#FFC107] text-2xl">
        <FaCaretRight fontSize={30} />
      </span>
    </div>
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div
    className={`absolute left-[1px] top-[50%] transform -translate-y-1/2 cursor-pointer z-10 ${className}`}
    onClick={onClick}
  >
    <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border-[#FFC447] border-2 flex items-center justify-center">
      <span className="text-[#FFC107] text-2xl">
        <FaCaretLeft fontSize={30} />
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

        const groupedAmenities = amenitiesData?.result.reduce(
          (acc, amenity) => {
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
          },
          {}
        );

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
    <section className="container mx-auto py-20 lg:px-5" id="amenitiesSection">
      <div className="text-center md:text-left lg:ml-14">
        <h1 className="font-workSansMedium font-medium text-3xl sm:text-4xl md:text-5xl text-[#221C42] mb-6 pt-14 px-1">
          Living Your Best Life in Camaya Coast
        </h1>
        <p className="text-[#9C9C9C] max-w-5xl mx-auto md:mx-0 font-workSansMedium font-medium text-lg md:text-xl mb-12 px-3 lg:px-2">
          Imagine waking up to the sound of the surf. A gentle breeze enters the
          bedrooms as you open the windows to a breathtaking view of the sea in
          your own tropical vacation home. Now imagine making this come true.
          You can - with Camaya Coast&apos;s residential developments.
        </p>
      </div>

      {amenities.length > 0 ? (
        <div className="relative overflow-x-auto whitespace-nowrap scrollbar-hide">
          <PrevArrow className="custom-prev-arrow" />
          <NextArrow className="custom-next-arrow" />

          <TabsContainer tabs={amenities.map((tab) => tab.title)}>
            {amenities.map((tab, tabIndex) => (
              <Tabs key={tabIndex}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  navigation={{
                    prevEl: ".custom-prev-arrow",
                    nextEl: ".custom-next-arrow",
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  modules={[Navigation]}
                  className="swiper-container"
                >
                  {tab.cards.map((card, cardIndex) => (
                    <SwiperSlide key={cardIndex}>
                      <div
                        className="flex flex-col items-center text-center p-6 bg-white max-w-[90%] mx-auto"
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
                        <div className="flex flex-col items-center">
                          <p className="text-[#646464] text-[11px] md:text-[14px] mt-2 leading-relaxed max-w-[29rem] text-center font-bold">
                            {card.description.length > 50
                              ? `${card.description.substring(0, 50)}...`
                              : card.description}
                          </p>
                        </div>
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
    </section>
  );
};

export default Amenities;
