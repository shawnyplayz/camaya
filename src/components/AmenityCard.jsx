import Image from "next/image";
import React from "react";

const AmenityCard = ({ imageSrc, title, description, cardIndex }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <Image src={imageSrc} width={418} height={505} alt={title} />
      <h3
        className={`mt-6 text-[#221C42] font-workSansMedium font-semibold text-xl md:text-2xl
      ${cardIndex === 2 || cardIndex === 4 ? "ml-2" : ""}`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 text-[#646464] text-sm md:text-base max-w-xs md:max-w-sm mb-3 lg:mb-0
      ${cardIndex === 2 || cardIndex === 4 ? "ml-2" : ""}`}
      >
        {description}
      </p>
    </div>
  );
};

export default AmenityCard;
