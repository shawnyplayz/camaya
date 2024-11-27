import Image from "next/image";
import React from "react";
import { AboutCamayaData } from "../constants";

const AboutCamaya = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-20 container mx-auto mb-36">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-12 mb-12 text-center lg:text-left">
        <div className="hidden lg:block">
          <Image
            src="/assets/home/aboutSection/arrow.svg"
            width={400}
            height={64}
            alt="Arrow"
            className="mx-auto lg:mx-0"
          />
        </div>
        <div>
          <h1 className="font-workSansMedium font-medium text-3xl sm:text-4xl lg:text-5xl">
            {AboutCamayaData.title}
          </h1>
          <p className="font-workSansMedium font-medium text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-4xl text-[#9C9C9C] mt-4 sm:mt-6">
            {AboutCamayaData.subDescription}
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Image
          src="/assets/home/aboutSection/image1.svg"
          width={300}
          height={300}
          alt="Image 1"
          className="w-full"
        />
        <Image
          src="/assets/home/aboutSection/image2.svg"
          width={300}
          height={300}
          alt="Image 2"
          className="w-full"
        />
        <Image
          src="/assets/home/aboutSection/image3.svg"
          width={300}
          height={300}
          alt="Image 3"
          className="w-full"
        />
      </div>

      {/* Description Section */}
      <div>
        <p className="max-w-xl sm:max-w-2xl lg:max-w-3xl font-workSansMedium font-medium text-sm sm:text-base lg:text-lg text-[#9C9C9C] text-center lg:text-left mb-12">
          {AboutCamayaData.description}
        </p>
      </div>
    </div>
  );
};

export default AboutCamaya;
