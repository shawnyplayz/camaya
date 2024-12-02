import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  reviewer_name,
  picture = "/assets/home/testimonialsSection/defaultProfilePicture.png",
  review,
}) => {
  return (
    <div className="mx-auto bg-transparent border-2 border-[#FFDF9A] rounded-lg p-8 max-w-md flex-wrap transform transition-all duration-500 ease-in-out hover:scale-105 hover:bg-[#FFF1D2] hover:border-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src={picture}
            alt={reviewer_name}
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

      <p className="text-[#221C42] text-lg mb-4 font-workSansItalic">
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;
