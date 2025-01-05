import Image from "next/image";
import Link from "next/link";
import { AboutUsData } from "../constants";

const AboutCamayaMobile = () => {
  return (
    <section
      className="py-12 px-4"
      id="aboutus"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 196, 71, 0.18) 22.97%, rgba(255, 244, 221, 0) 76.05%)",
      }}
    >
      {/* Wrapper */}
      <div className="max-w-4xl mx-auto">
        {/* Text Section */}
        <div className="text-center mb-8">
          <h2 className="font-workSansMedium font-medium text-[28px] sm:text-[35px] tracking-wide leading-[1.2] text-universalHeadingTextColor">
            {AboutUsData.title}
          </h2>
          <p className="text-[14px] sm:text-[16px] font-workSansMedium font-medium leading-[24px] sm:leading-[28px] text-universalContentTextColor mt-4">
            {AboutUsData.description}
          </p>
          <div className="mt-6">
            <button className="bg-universalButtonColor px-8 py-3 rounded-full font-workSansMedium  text-sm sm:text-base">
              <Link href={"#featuredPropertiesSection"}>View Properties</Link>
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-[3.5rem]">
          {/* Row 1 */}
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_1.webp"
              alt="Image 1"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_1_2.webp"
              alt="Image 2"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_1_3.webp"
              alt="Image 3"
              width={200}
              height={200}
              className="rounded-lg shadow-lg object-contain"
            />
          </div>

          {/* Row 2 */}
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_2_1.webp"
              alt="Image 4"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_2_2.webp"
              alt="Image 5"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_2_3.webp"
              alt="Image 6"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Row 3 */}
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_3_1.webp"
              alt="Image 7"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_3_2.webp"
              alt="Image 8"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex">
            <Image
              src="/assets/home/aboutSection/image_row_3_3.webp"
              alt="Image 9"
              width={200}
              height={200}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCamayaMobile;
