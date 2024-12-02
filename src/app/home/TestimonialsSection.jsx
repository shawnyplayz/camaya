"use client";

import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={style}
      onClick={onClick}
    >
      <span className="arrow-icon">→</span>
    </div>
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={style}
      onClick={onClick}
    >
      <span className="arrow-icon">←</span>
    </div>
  );
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const data = await fetchDataGet(endpoints.fetchTestimonials);
        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    getTestimonials();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="font-workSansMedium text-[#221C42] pb-28 px-4 sm:px-8 md:px-16"
      style={{ background: "#DDA93A0F" }}
    >
      {/* Section Header */}
      <header className="pt-36 text-center">
        <h1 className="text-center text-3xl lg:text-6xl font-medium">
          What Our Clients Say
        </h1>
      </header>

      {/* Testimonials Slider Layout */}
      <div className="flex items-center justify-center mt-12 sm:mt-16 lg:mt-20">
        <div className="max-w-5xl w-full">
          {loading ? (
            <p className="col-span-full text-center text-xl text-gray-500">
              Loading testimonials...
            </p>
          ) : (
            <Slider {...sliderSettings} className="pb-5">
              {testimonials.map((testimonial) => (
                <div key={testimonial.testimonial_id}>
                  <TestimonialCard
                    reviewer_name={testimonial.reviewer_name}
                    picture={testimonial.pictures[0]?.url}
                    review={testimonial.review}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
