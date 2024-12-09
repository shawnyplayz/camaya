import Accordion from "@/components/Accordian";
import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row gap-12 lg:gap-16 px-5 py-10 lg:py-16">
      <div className="left">
        <h1 className="max-w-3xl font-workSansMedium font-normal lg:text-5xl text-2xl text-[#221C42] text-center lg:text-start">
          Have Questions About Camaya Coast?
        </h1>
        <p className="mt-4 text-[#9C9C9C] font-workSansMedium font-medium lg:text-lg text-base text-center lg:text-start">
          We&rsquo;ve Got the Answers You Need!
        </p>
      </div>

      <div className="right">
        <div className="max-w-xl space-y-4">
          <Accordion
            title="1. How to get there?"
            content="With a few hours away from Metro Manila, Camaya Coast Stations 1 to 3 can be reached directly via SEA, LAND and soon by AIR."
          />
          <Accordion
            title="2. Can I set a sample computation  on a best discount in the smallest lot cut ?"
            content="Here's some more content for the second accordion item. It can also include more complex elements."
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
