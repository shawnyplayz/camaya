"use client";

import { useState } from "react";

const Dropdown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const handleSelection = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative w-48">
      <button
        className="w-full text-left bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 flex items-center justify-between hover:border-gray-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-300 z-10">
          <ul className="text-sm text-gray-800">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelection(option)}
                className="px-4 py-2 hover:bg-yellow-200 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
