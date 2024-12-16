import React, { useEffect } from "react";
import { GetInTouchData } from "../constants";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { FaLocationDot } from "react-icons/fa6";
import { CA, PH } from "country-flag-icons/react/3x2";
import { IoMdCall } from "react-icons/io";
import { FaViber } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
      <div className="container mx-auto py-20 lg:px-12 px-8">
        <div className="flex justify-between flex-col lg:flex-row gap-8">
          <div
            className="leftside flex flex-col lg:text-start text-center"
            data-aos="fade-up-right"
          >
            <div className="flex flex-col gap-8">
              <div className="flex grouped_first_half flex-col">
                <div className="heading">
                  <h1 className="font-workSansMedium font-medium text-2xl sm:text-3xl lg:text-5xl text-[#221C42]">
                    Get in Touch
                  </h1>
                </div>
                <div className="GIT_Description">
                  <p className="max-w-full sm:max-w-xl mt-4 sm:mt-6 text-[#9C9C9C] text-center lg:text-start font-workSansMedium font-medium text-sm sm:text-base lg:text-lg mx-auto lg:mx-0">
                    {GetInTouchData.description}
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:mr-16">
                <div className="grid  grid-rows-[30px_auto_40px] lg:grid-cols-[30px_auto_40px] gap-x-5 gap-y-3 items-center max-w-lg mx-auto font-workSansMedium font-medium text-base text-center lg:text-start sm:text-lg text-[#182A64]">
                  <div className="text-lg text-center flex justify-center lg:block ">
                    {" "}
                    <IoMdCall className="text-lg" />
                  </div>
                  <div className="text-gray-800 text-start flex justify-center lg:block">
                    Call - 0926 053 2470
                  </div>
                  <div className="hidden lg:block">
                    <PH title="Philippines" className="w-5" />
                  </div>

                  <div className="text-lg text-center flex justify-center lg:block">
                    {" "}
                    <FaViber className="text-lg" />
                  </div>
                  <div className="text-gray-800 text-start flex justify-center lg:block">
                    Viber - 0945 566 6565
                  </div>
                  <div className="hidden lg:block">
                    <PH title="Philippines" className="w-5" />
                  </div>

                  <div className="text-lg text-center flex justify-center lg:block">
                    {" "}
                    <IoMdCall className="text-lg" />
                  </div>
                  <div className="text-gray-800 text-start flex justify-center lg:block">
                    Call - 0778 241 4895
                  </div>
                  <div className="hidden lg:block">
                    <CA title="Canada" className="w-5" />
                  </div>

                  <div className="text-lg text-center flex justify-center lg:block">
                    <MdEmail className="text-lg" />
                  </div>
                  <div className="text-gray-800 text-start flex justify-center lg:block">
<<<<<<< HEAD
                    <a href="mailto:lizzome.custodio@realestate.camayacoast.com">
=======
                    <a href="mailto:lizzume.custodio@realestate.camayacoast.com">
>>>>>>> 551aedc8ac29c1cf2fd76bdc7bbe24802c12a820
                      lizzome.custodio@realestate.camayacoast.com
                    </a>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="text-lg text-center flex justify-center lg:block">
                    <MdEmail className="text-lg" />
                  </div>
                  <div className="text-gray-800 text-start flex justify-center lg:block">
                    <a href="mailto:lizzume.custodio@realestate.camayacoast.com">
                      maripaul.milanes@realestate.camayacoast.com
                    </a>
                  </div>
                  <div className="hidden lg:block"></div>
                  <div className="text-lg text-center flex justify-center lg:block">
                    <FaLocationDot className="text-lg" />
                  </div>
                  <div className="text-gray-800">
                    PET Plans Tower Guadalupe Viejo EDSA Makati City
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightside flex" data-aos="fade-up-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
