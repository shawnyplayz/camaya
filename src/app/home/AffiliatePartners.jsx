import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const AffiliatePartners = () => {
  const logos = [
    {
      src: "/assets/home/partnerSection/Sealandair.svg",
      alt: "Sealandair Logistics Solutions",
      width: "200",
      height: "200",
    },
    {
      src: "/assets/home/partnerSection/EarthandShore.svg",
      alt: "Earth & Shore Tourism Ventures Corp",
      width: "200",
      height: "200",
    },
    {
      src: "/assets/home/partnerSection/DevAlliance.svg",
      alt: "Dev1 Alliance Builders Corp",
      width: "200",
      height: "200",
    },
    {
      src: "/assets/home/partnerSection/MagicLeaf.svg",
      alt: "MagicLeaf",
      width: "200",
      height: "200",
    },
    {
      src: "/assets/home/partnerSection/OrionSky.svg",
      alt: "OrionSky",
      width: "200",
      height: "200",
    },
    {
      src: "/assets/home/partnerSection/EarthandShore2.svg",
      alt: "EarthandShore2",
      width: "200",
      height: "200",
    },
    {
      src: "/assets/home/partnerSection/DS18.svg",
      alt: "DS18",
      width: "200",
      height: "200",
    },
    {
      src: "/assets/home/partnerSection/1Bataan.svg",
      alt: "1Bataan",
      width: "100",
      height: "100",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-4">
      {/* Header Section */}

      <Divider
        variant="solid"
        className="px-96 pt-4"
        style={{
          borderColor: "#CCCCC",
        }}
      >
        <div className="hidden md:block">
          <div className="text-[32px] md:pt-0 pt-10 sm:text-2xl font-medium font-workSansMedium text-center text-universalHeadingTextColor">
            OUR SUBSIDIARIES & AFFILIATED PARTNERS
          </div>
        </div>
      </Divider>

      <div className="md:hidden text-sm md:pt-0 pt-10 sm:text-2xl font-medium font-workSansMedium text-center text-universalHeadingTextColor">
        OUR SUBSIDIARIES & AFFILIATED PARTNERS
      </div>

      {/* Partner Logos Section */}
      <Marquee speed={80} gradient={true} autoFill gradientWidth={60}>
        <div className="flex gap-11 pr-11">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-row lg:py-20 pb-10 items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                layout="intrinsic"
                className="logo mx-6"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AffiliatePartners;
