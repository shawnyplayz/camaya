"use client";

import { useState } from "react";

import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


const Accordion3 = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border-b border-[1.83px] rounded-2xl m-4"
      style={{
        borderRadius: "7px",
      }}
    >
      <button
        onClick={handleToggle}
        className="flex justify-between items-center w-full py-4 px-4 text-left"
      >
        <span className="font-semibold text-md md:text-lg">{title}</span>
        <span className="text-xl">
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>

      {/* Animated accordion content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[1000px] opacity-100 px-4 py-6 md:px-10 md:py-10 bg-[#FFF4E8]"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 text-sm text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default Accordion3;
