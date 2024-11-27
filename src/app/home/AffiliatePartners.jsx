import Image from "next/image";
import React from "react";

const AffiliatePartners = () => {
  return (
    <div className="flex flex-col items-center py-8">
      {/* Header Section */}
      <div className="text-xl sm:text-2xl font-medium mb-7 font-workSansMedium mt-16 sm:mt-32 text-center">
        AFFILIATE PARTNERS
      </div>

      {/* Partner Logos Section */}
      <div className="flex flex-wrap justify-center gap-10 sm:gap-20 lg:gap-44 items-center mb-16 sm:mb-32">
        <div className="flex items-center">
          <Image
            src="/assets/home/partnerSection/Sealandair.svg"
            alt="Sealandair Logistics Solutions"
            width={200}
            height={200}
            className="w-32 sm:w-48 lg:w-60"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/home/partnerSection/EarthandShore.svg"
            alt="Earth & Shore Tourism Ventures Corp"
            width={200}
            height={200}
            className="w-32 sm:w-48 lg:w-60"
          />
        </div>
        <div className="flex items-center">
          <Image
            src="/assets/home/partnerSection/DevAlliance.svg"
            alt="Dev1 Alliance Builders Corp"
            width={200}
            height={200}
            className="w-32 sm:w-48 lg:w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default AffiliatePartners;
