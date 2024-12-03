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
            title="1. What types of properties are available at Camaya Coast?"
            content="We offer a variety of properties, including beachfront villas, cozy condominiums, and residential lots. Each option is designed for comfort, luxury, and different lifestyle needs."
          />
          <Accordion
            title="2. Can non-residents access the amenities at Camaya Coast?"
            content="Here's some more content for the second accordion item. It can also include more complex elements."
          />
          <Accordion
            title="3. Are there financing options available for purchasing a property?"
            content="And here is content for the third item. The accordion will smoothly open and close."
          />
          <Accordion
            title="4. What is the process for scheduling a property tour?"
            content="And here is content for the third item. The accordion will smoothly open and close."
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
