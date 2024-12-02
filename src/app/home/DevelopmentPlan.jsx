import Image from "next/image";
import React from "react";
import { DevelopmentPlanData } from "../constants";

const DevelopmentPlan = () => {
  return (
    <div className="mx-auto container px-6 sm:px-10 lg:px-20" id="developmentPlanSection">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-workSansMedium font-medium text-3xl sm:text-4xl lg:text-5xl text-black text-center md:text-left">
          {DevelopmentPlanData.title}
        </h1>
        <Image
          src="assets/home/developmentPlanSection/line.svg"
          width={800}
          height={0}
          alt="Line"
          className="hidden md:block mt-4 md:mt-0"
        />
      </div>

      {/* Description Section */}
      <div className="mt-6 max-w-2xl lg:max-w-4xl mb-12">
        <p className="text-sm sm:text-base lg:text-lg text-center md:text-left">
          {DevelopmentPlanData.description}
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <Image
          src="assets/home/developmentPlanSection/image1.svg"
          width={558}
          height={510}
          alt="Image"
          className="mx-auto"
        />
        <Image
          src="assets/home/developmentPlanSection/image2.svg"
          width={558}
          height={510}
          alt="Image"
          className="mx-auto"
        />
        <Image
          src="assets/home/developmentPlanSection/image3.svg"
          width={558}
          height={510}
          alt="Image"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default DevelopmentPlan;
