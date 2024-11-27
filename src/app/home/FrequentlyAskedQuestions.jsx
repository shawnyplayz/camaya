import Accordion from "@/components/Accordian";
import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="lg:h-screen flex items-center justify-evenly flex-col lg:flex-row mb-20">
      <div className="left">
        <div>
          <h1 className="max-w-3xl font-workSansMedium font-normal lg:text-6xl text-xl text-[#221C42] text-center lg:text-start mt-12 lg:mt-0">
            Have Questions About Camaya Coast?
          </h1>
          <p className="mt-4 text-[#9C9C9C] font-workSansMedium font-medium lg:text-xl text-lg text-center lg:text-start">
            We've Got the Answers You Need!
          </p>
        </div>
      </div>

      <div className="right">
        <div className="max-w-xl lg:mt-36 mt-28 pb-32 lg:pb-0 px-8 lg:px-0">
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
