import Image from "next/image";
import React from "react";

const AmenityCard = ({
  imageSrc,
  title,
  description,
  cardIndex,
  hasScrolled,
}) => {
  // Determine margin based on card index
  const marginClasses = hasScrolled
    ? {
        1: "mt-4", // Example margin for card 1
        2: "-mt-8", // Example margin for card 2
        3: "mt-6", // Example margin for card 3
        4: "-mt-8", // Example margin for card 4
      }[cardIndex] || "" // Default to no margin if index doesn't match
    : ""; // No margin if `hasScrolled` is false

  // Add ml-2 for title and description of 2nd and 4th cards
  const additionalMarginClasses =
    cardIndex === 2 || cardIndex === 4 ? "ml-2" : "";

  return (
    <div
      className="amenity-card-container transition-transform duration-700 ease-in-out"
      data-aos="fade-in"
      data-aos-delay={cardIndex * 200}
      data-aos-anchor="#amenitiesSection"
    >
      <div
        className={`flex flex-col items-center md:items-start text-center md:text-left ${marginClasses}`}
      >
        <Image src={imageSrc} width={418} height={505} alt={title} />
        <h3
          className={`mt-6 text-[#221C42] font-workSansSemiBold font-semibold text-xl md:text-2xl ${additionalMarginClasses}`}
        >
          {title}
        </h3>
        <p
          className={`mt-4 text-[#646464] text-sm md:text-base max-w-xs md:max-w-sm mb-3 lg:mb-0 pb-14 md:pb-0 ${additionalMarginClasses}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default AmenityCard;
