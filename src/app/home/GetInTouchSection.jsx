import React from "react";
import { GetInTouchData } from "../constants";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { FaLocationDot } from "react-icons/fa6";
import { CA, PH } from "country-flag-icons/react/3x2";
import { IoMdCall } from "react-icons/io";
import { FaViber } from "react-icons/fa";

const GetInTouchSection = () => {
  return (
    <div className="bg-[#FDFAF3]" id="contactUsSection">
      <div className="h-auto relative mx-auto container flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        {/* Left Section */}
        <div className=" lg:text-left">
          <div className="pt-8 sm:pt-12 lg:pt-20 pl-2 pb-8 sm:pb-12 lg:pb-20">
            <h1 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-5xl text-[#221C42]">
              Get in Touch
            </h1>
            <p className="max-w-full sm:max-w-xl mt-4 sm:mt-6 text-[#9C9C9C] font-workSansMedium font-medium text-sm sm:text-base lg:text-lg mx-auto lg:mx-0">
              {GetInTouchData.description}
            </p>

            <div className="contact-info mt-8 sm:mt-12 lg:mt-16 font-workSansMedium font-medium text-base sm:text-lg text-[#182A64]">
              <div className="flex  items-center text-start md:block">
                <div className="flex flex-col items-start gap-4 mt-4 sm:mt-6">
                  {/* Phone */}
                  <div className="flex items-center gap-2">
                    <p className="md:block">
                      <IoMdCall />
                    </p>
                    <p className="md:block ">Call -</p>
                    <p className="text-xs sm:text-base">
                      {GetInTouchData.phoneNumber}
                    </p>
                    <PH title="Phillipines" className="w-5" />
                  </div>

                  {/* Viber */}
                  <div className="flex items-center gap-2">
                    <p className="md:block">
                      <FaViber />
                    </p>
                    <p className="md:block">Viber -</p>
                    <p className="text-xs sm:text-base">
                      {GetInTouchData.viber}
                    </p>
                    <PH title="Phillipines" className="w-5" />
                  </div>

                  {/* Canada */}
                  <div className="flex items-center gap-2">
                    <p className="md:block">
                      <IoMdCall />
                    </p>
                    <p className="md:block ">Call -</p>
                    <p className="text-xs sm:text-base">
                      {GetInTouchData.canada}
                    </p>
                    <CA title="Canada" className="w-5" />
                  </div>

                  {/* Email */}
                  {/* <div className="flex items-center gap-2">
                    <p className="md:block ">Email -</p>
                    <p className="text-xs sm:text-base">
                      {GetInTouchData.email}
                    </p>
                  </div> */}
                  <div className="flex justify-between items-center gap-4">
                    <div className="leftPlaceholder">Email</div>
                    <div className="dash"> - </div>
                    <div className="rightPlaceholder">
                      {GetInTouchData.email}
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex justify-between items-center gap-4">
                    <div className="leftPlaceholder">Address</div>
                    <div className="dash"> - </div>
                    <div className="rightPlaceholder">
                      {GetInTouchData.location}
                    </div>
                  </div>
                  {/* <div className="">
                      <p className="md:block ">Address -</p>
                    </div>
                    <div className="flex items-start">
                      <p className="text-xs sm:text-base">
                        {GetInTouchData.location}
                      </p>
                    </div> */}
                </div>
              </div>

              {/* Email */}

              {/* Location */}
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
