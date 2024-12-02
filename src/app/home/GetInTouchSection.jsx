import React from "react";
import { GetInTouchData } from "../constants";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const GetInTouchSection = () => {
  return (
    <div className="bg-[#FDFAF3]">
      <div className="h-auto relative mx-auto container flex flex-col lg:flex-row items-center gap-10 lg:gap-40 px-4 lg:px-16 py-10 lg:py-16">
        {/* Left Section */}
        <div className="left text-center lg:text-left px-4 lg:px-0">
          <div className="pt-16 lg:pt-28 pl-4 pb-16 lg:pb-32">
            <h1 className="font-workSansMedium font-medium text-3xl sm:text-4xl lg:text-6xl text-[#221C42]">
              Get in Touch
            </h1>
            <p className="max-w-full sm:max-w-2xl mt-6 text-[#9C9C9C] font-workSansMedium font-medium text-base sm:text-lg mx-auto lg:mx-0">
              {GetInTouchData.description}
            </p>

            <div className="contact-info mt-10 lg:mt-20 font-workSansMedium font-medium text-lg text-[#182A64]">
              <div className="flex items-center gap-2 mt-6">
                <Image
                  src="assets/home/getInTouchSection/icons/phone.svg"
                  width={24}
                  height={24}
                  alt="Phone Icon"
                />
                <p>{GetInTouchData.phoneNumber}</p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <Image
                  src="assets/home/getInTouchSection/icons/mail.svg"
                  width={26}
                  height={20}
                  alt="Email Icon"
                />
                <p>{GetInTouchData.email}</p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <Image
                  src="assets/home/getInTouchSection/icons/location.svg"
                  width={25}
                  height={25}
                  alt="Location Icon"
                />
                <p>{GetInTouchData.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="mt-8 lg:mt-0 px-4 lg:px-0 2xl:absolute 2xl:right-20 lg:-bottom-44">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
