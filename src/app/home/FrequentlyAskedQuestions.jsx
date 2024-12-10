import Accordion from "@/components/Accordian";
import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-12 lg:gap-16 px-5 py-10 lg:py-16">
      <div className="left">
        <h1 className="max-w-2xl font-workSansMedium font-normal lg:text-5xl text-2xl text-[#221C42] text-center">
          Have Questions About Camaya Coast?
        </h1>
        <p className="mt-4 text-[#9C9C9C] font-workSansMedium font-medium lg:text-lg text-base text-center pb-11">
          We&rsquo;ve Got the Answers You Need!
        </p>
      </div>

      <div className="right">
        <Accordion
          title="1. How to get there?"
          content="Camaya Coast is a luxury beach resort and residential community in the Philippines."
        />
        <Accordion
          title="How do I get to Camaya Coast?"
          content="You can reach Camaya Coast via ferry from Manila or by land travel through Bataan."
        />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
