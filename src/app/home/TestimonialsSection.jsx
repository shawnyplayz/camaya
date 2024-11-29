"use client";

import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";

// Import Swiper and required components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import Swiper navigation CSS
import { Pagination, Navigation } from "swiper/modules"; // Import Navigation module

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        // Fetch testimonials using the fetchDataGet utility
        const data = await fetchDataGet(endpoints.fetchTestimonials);
        setTestimonials(data || []); // Fallback to an empty array if no data
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  return (
    <section className="font-workSansMedium text-[#221C42]">
      {/* Section Header */}
      <header className="pt-36 text-center">
        <h1 className="text-6xl font-medium">What Our Clients Say</h1>
      </header>

      {/* Testimonials Grid or Slider */}
      <div className="flex items-center justify-center">
        <div className="mt-28 w-full max-w-7xl">
          {loading ? (
            <p className="col-span-full text-center text-xl text-gray-500">
              Loading testimonials...
            </p>
          ) : testimonials.length > 3 ? (
            // Display Swiper slider if there are more than 4 testimonials
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              modules={[Pagination, Navigation]} // Add Navigation module here
              pagination={{ clickable: true }} // Dots pagination
              navigation // Enable arrows
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial?.testimonial_id}>
                  <TestimonialCard
                    reviewer_name={testimonial?.reviewer_name}
                    picture={testimonial?.pictures[0]?.url}
                    review={testimonial?.review}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Default Grid Layout for 4 or fewer testimonials
            <div
              className={`grid gap-8 ${
                testimonials.length === 1
                  ? "grid-cols-1"
                  : testimonials.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.testimonial_id}
                  reviewer_name={testimonial.reviewer_name}
                  picture={testimonial.pictures[0]?.url}
                  review={testimonial.review}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
