import React from "react";
import { GetInTouchData } from "../constants";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const GetInTouchSection = () => {
  return (
    <div className="bg-[#FDFAF3]">
      <div className="h-auto relative mx-auto container flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        {/* Left Section */}
        <div className="text-center lg:text-left">
          <div className="pt-8 sm:pt-12 lg:pt-20 pl-2 pb-8 sm:pb-12 lg:pb-20">
            <h1 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-5xl text-[#221C42]">
              Get in Touch
            </h1>
            <p className="max-w-full sm:max-w-xl mt-4 sm:mt-6 text-[#9C9C9C] font-workSansMedium font-medium text-sm sm:text-base lg:text-lg mx-auto lg:mx-0">
              {GetInTouchData.description}
            </p>

            <div className="contact-info mt-8 sm:mt-12 lg:mt-16 font-workSansMedium font-medium text-base sm:text-lg text-[#182A64]">
              {/* Phone */}
              <div className="flex items-center gap-2 mt-4 sm:mt-6 justify-center lg:justify-start">
                <Image
                  src="assets/home/getInTouchSection/icons/phone.svg"
                  width={20}
                  height={20}
                  alt="Phone Icon"
                />
                <p className="text-sm sm:text-base">
                  {GetInTouchData.phoneNumber}
                </p>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2 mt-4 sm:mt-6 justify-center lg:justify-start">
                <Image
                  src="assets/home/getInTouchSection/icons/mail.svg"
                  width={20}
                  height={20}
                  alt="Email Icon"
                />
                <p className="text-sm sm:text-base">{GetInTouchData.email}</p>
              </div>
              {/* Location */}
              <div className="flex items-center gap-2 mt-4 sm:mt-6 justify-center lg:justify-start">
                <Image
                  src="assets/home/getInTouchSection/icons/location.svg"
                  width={20}
                  height={20}
                  alt="Location Icon"
                />
                <p className="text-sm sm:text-base">
                  {GetInTouchData.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        {/* <div className="mt-6 sm:mt-8 lg:mt-0 px-4 lg:px-0 w-full lg:w-auto"> */}
        <div className="mt-8 lg:mt-0 px-4 lg:px-0 2xl:absolute 2xl:right-20 lg:-bottom-44">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
