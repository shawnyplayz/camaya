import React, { useEffect } from "react";
import { GetInTouchData } from "../constants";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { FaLocationDot } from "react-icons/fa6";
import { CA, PH } from "country-flag-icons/react/3x2";
import { IoMdCall } from "react-icons/io";
import { FaViber } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { AOS } from "aos";
import "aos/dist/aos.css";

const GetInTouchSection = () => {
  useEffect(() => {
    // Initialize AOS
    AOS?.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="bg-[#FDFAF3]" id="contactUsSection">
      <div className="h-auto relative mx-auto container flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        {/* Left Section */}
        {/* <div className="text-center lg:text-start max-w-96 md:max-w-full">
          <div className="pt-8 sm:pt-12 lg:pt-20 pb-8 max-w-[20rem] lg:max-w-full sm:pb-12 lg:pb-20">
            <h1 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-5xl text-[#221C42]">
              Get in Touch
            </h1>
            <p className="max-w-full sm:max-w-xl mt-4 sm:mt-6 text-[#9C9C9C] text-center lg:text-start font-workSansMedium font-medium text-sm sm:text-base lg:text-lg mx-auto lg:mx-0">
              {GetInTouchData.description}
            </p>

            <div className="contact-info mt-8 sm:mt-12 lg:mt-16 font-workSansMedium font-medium text-base text-center sm:text-lg text-[#182A64]">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <div className="flex items-center gap-2">
                  <IoMdCall className="text-lg" />
                  <span>Call -</span>
                  <span className="text-xs sm:text-base">
                    {GetInTouchData.phoneNumber}
                  </span>
                  <PH title="Philippines" className="w-5" />
                </div>

                <div className="flex items-center gap-2">
                  <FaViber className="text-lg" />
                  <span>Viber -</span>
                  <span className="text-xs sm:text-base">
                    {GetInTouchData.viber}
                  </span>
                  <PH title="Philippines" className="w-5" />
                </div>

                <div className="flex items-center gap-2">
                  <IoMdCall className="text-lg" />
                  <span>Call -</span>
                  <span className="text-xs sm:text-base">
                    {GetInTouchData.canada}
                  </span>
                  <CA title="Canada" className="w-5" />
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                  <MdEmail className="text-lg" />
                  <span className="hidden sm:inline">Email -</span>
                  <span className="text-xs sm:text-base">
                    {GetInTouchData.email}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                  <MdEmail className="text-lg" />
                  <span className="hidden sm:inline">Email -</span>
                  <span className="text-xs sm:text-base">
                    {GetInTouchData.email2}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
                  <FaLocationDot className="text-lg" />
                  <span className="hidden sm:inline">Address -</span>
                  <span className="text-xs sm:text-base">
                    {GetInTouchData.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
          {/* Header Section */}
          <div className="pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-20">
            <h1 className="font-workSansMedium font-medium text-3xl lg:text-5xl text-[#221C42] text-center lg:text-left">
              Get in Touch
            </h1>
            <p className="mt-4 sm:mt-6 text-[#9C9C9C] text-center lg:text-left font-workSansMedium text-sm sm:text-base lg:text-lg">
              We’d love to hear from you! Whether you have questions about our
              properties, want to schedule a tour, or need more information,
              feel free to reach out to us.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Phone Number 1 */}
            <div className="flex items-center gap-4">
              <IoMdCall className="text-[#221C42] text-2xl" />
              <span className="font-workSansMedium text-lg text-[#182A64]">
                Call - 0926 053 2470
              </span>
              <PH title="Philippines" className="w-6" />
            </div>

            {/* Viber */}
            <div className="flex items-center gap-4">
              <FaViber className="text-[#221C42] text-2xl" />
              <span className="font-workSansMedium text-lg text-[#182A64]">
                Viber - 0945 566 6565
              </span>
              <PH title="Philippines" className="w-6" />
            </div>

            {/* Phone Number 2 */}
            <div className="flex items-center gap-4">
              <IoMdCall className="text-[#221C42] text-2xl" />
              <span className="font-workSansMedium text-lg text-[#182A64]">
                Call - 0778 241 4895
              </span>
              <CA title="Canada" className="w-6" />
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <MdEmail className="text-[#221C42] text-2xl" />
              <span className="font-workSansMedium text-lg text-[#182A64]">
                Email - lizzume.custodio@realestate.camayacoast.com
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <MdLocationOn className="text-[#221C42] text-2xl" />
              <span className="font-workSansMedium text-lg text-[#182A64]">
                Address - PET Plans Tower Guadalupe Viejo EDSA Makati City
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div
          className="mt-8 lg:mt-0 px-4 lg:px-0 w-full lg:w-auto flex justify-center items-center"
          data-aos="flip-right"
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
