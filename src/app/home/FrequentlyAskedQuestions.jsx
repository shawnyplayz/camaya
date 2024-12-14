import Accordion from "@/components/Accordian";
import Accordian2 from "@/components/Accordian2";
import Accordian3 from "@/components/Accordian3";
import StationTable from "@/components/StationTable";

import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:gap-16 px-4 sm:px-5 py-10 lg:py-16">
      {/* Header Section */}
      <div className="left text-center">
        <h1 className="max-w-2xl font-workSansMedium font-normal text-2xl sm:text-3xl lg:text-5xl text-[#221C42]">
          Have Questions About Camaya Coast?
        </h1>
        <p className="mt-4 text-[#9C9C9C] font-workSansMedium font-medium text-base sm:text-lg lg:text-xl">
          We&rsquo;ve Got the Answers You Need!
        </p>
      </div>

      {/* Accordion Section */}
      <div className="right w-full max-w-[70rem]">
        <Accordion
          title="1. How to get there?"
          content="Camaya Coast is a luxury beach resort and residential community in the Philippines."
        />
        <Accordian2
          title="2. Can I set a sample computation on a best discount in the smallest lot cut?"
          content="You can reach Camaya Coast via ferry from Manila or by land travel through Bataan."
        />
        <StationTable title="3. Can I get the price list?" />
        <Accordian3
          title="4. Is this Selling Platform headed by a licensed real estate broker or salesperson?"
          content="Yes it is. We are headed by our Sales Director,  Ms. Maripaul Corpuz -Milanes.  She is a Licensed Real Estate Broker and Appraiser. She has been with Earth and Shore Leisure Communities Corp since 2016."
        />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
