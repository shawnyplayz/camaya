import Image from "next/image";
import Link from "next/link";
import { AboutUsData } from "../constants";
import { AOS } from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CamayaCoastSection = () => {
  useEffect(() => {
    // Initialize AOS
    AOS?.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section
      className="py-[7rem] px-4"
      id="aboutus"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 196, 71, 0.18) 22.97%, rgba(255, 244, 221, 0) 76.05%)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start container">
        {/* Staggered Image Grid (Left Section) */}
        <div className="relative md:w-[90%] mb-8 md:mb-0" data-aos="fade-right">
          {/* Row 1 */}
          <div className="flex flex-wrap space-x-4 md:flex-nowrap md:relative right-[127px]">
            <Image
              src="/assets/home/aboutSection/image_row_1.webp"
              alt="Image 1"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            <Image
              src="/assets/home/aboutSection/image_row_1_2.webp"
              alt="Image 2"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            <Image
              src="/assets/home/aboutSection/image_row_1_3.webp"
              alt="Image 3"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            {/* Gradient Box */}
            <div
              className="w-[150px] h-[150px] "
              style={{
                background:
                  "linear-gradient(92.3deg, #FFF1D2 1.5%, rgba(255, 231, 181, 0) 97.79%)",
              }}
            ></div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap space-x-4 mt-4 md:mt-[22px] md:ml-[-129px]">
            {/* Gradient Box */}
            <div
              className="w-[150px] h-[150px]"
              style={{
                background:
                  "linear-gradient(92.3deg, #FFF1D2 1.5%, rgba(255, 231, 181, 0) 97.79%)",
              }}
            ></div>
            <Image
              src="/assets/home/aboutSection/image_row_2_1.webp"
              alt="Image 4"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            <Image
              src="/assets/home/aboutSection/image_row_2_2.webp"
              alt="Image 5"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            <Image
              src="/assets/home/aboutSection/image_row_2_3.webp"
              alt="Image 6"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            {/* Gradient Box */}
            <div
              className="w-[150px] h-[150px] "
              style={{
                background:
                  "linear-gradient(92.3deg, #FFF1D2 1.5%, rgba(255, 231, 181, 0) 97.79%)",
              }}
            ></div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap space-x-4 mt-4 md:mt-[13px] md:ml-[39px]">
            {/* Gradient Box */}
            <div
              className="w-[150px] h-[150px]"
              style={{
                background:
                  "linear-gradient(92.3deg, #FFF1D2 1.5%, rgba(255, 231, 181, 0) 97.79%)",
              }}
            ></div>
            <Image
              src="/assets/home/aboutSection/image_row_3_1.webp"
              alt="Image 7"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            <Image
              src="/assets/home/aboutSection/image_row_3_2.webp"
              alt="Image 8"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            <Image
              src="/assets/home/aboutSection/image_row_3_3.webp"
              alt="Image 9"
              width={150}
              height={150}
              className="mb-4 md:mb-0 shadow-lg"
            />
            {/* Gradient Box */}
            {/* <div
              className="w-[50px] h-[150px] rounded-md"
              style={{
                background:
                  "linear-gradient(92.3deg, #FFF1D2 1.5%, rgba(255, 231, 181, 0) 97.79%)",
              }}
            ></div> */}
          </div>
        </div>

        {/* Text Content (Right Section) */}
        <div
          className="md:w-[50%] text-center md:text-left flex flex-col justify-center"
          data-aos="fade-left"
        >
          {/* Title Section */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="font-workSansMedium font-medium text-[28px] sm:text-[35px] tracking-[3px] leading-[1.2] text-universalHeadingTextColor ml-0">
                {AboutUsData.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] font-workSansMedium font-medium leading-[24px] sm:leading-[28px] text-universalContentTextColor mb-6">
            {AboutUsData.description}
          </p>

          {/* Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Link href={"#featuredPropertiesSection"}>
              <button className="bg-universalButtonColor font-workSansMedium px-6 sm:px-14 md:px-20 py-3 sm:py-5 rounded-full text-[#221C42] text-sm sm:text-base md:text-lg">
                View Properties
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CamayaCoastSection;
