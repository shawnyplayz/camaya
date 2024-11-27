"use client";

import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(isOpen ? "max-h-96" : "max-h-0"); // Track max height for animation

  const handleToggle = () => {
    // Set max height with a slight delay for smoother closing animation
    setIsOpen(!isOpen);
    setTimeout(() => {
      setMaxHeight(isOpen ? "max-h-0" : "max-h-96");
    }, 0);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center w-full py-4 px-4 text-left"
      >
        <span className="font-semibold text-lg">{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>

      {/* Animated accordion content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${maxHeight} ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="px-4 pb-4 text-sm text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
