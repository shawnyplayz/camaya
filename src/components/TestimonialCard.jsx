import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  reviewer_name,
  picture = "/assets/home/testimonialsSection/defaultProfilePicture.png",
  review,
}) => {
  return (
    <div className="mx-auto bg-[#FFF1D2] border border-gray-200 rounded-lg shadow-md p-8 max-w-md">
      {/* Profile section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src={picture}
            alt={`${reviewer_name}'s profile picture`}
            width={121}
            height={121}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800">
              {reviewer_name}
            </h3>
          </div>
        </div>
        <Image
          src="/assets/home/testimonialsSection/quote.svg"
          alt="Quote"
          width={25}
          height={25}
          className="w-14 h-14"
        />
      </div>
      {/* Testimonial text */}
      <p className="text-[#221C42] text-lg mb-4 font-workSansItalic ">
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;
