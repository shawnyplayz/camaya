"use client";

import { useState } from "react";

const Dropdown = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(placeholder);

  const handleSelection = (option) => {
    setSelected(option);
    setIsOpen(false); // Auto-close dropdown
    if (onSelect) onSelect(option); // Pass selected value to parent
  };

  return (
    <div className="relative w-48">
      <button
        className="w-full bg-white border border-gray-300 rounded-full shadow-md px-4 py-2 flex items-center justify-between hover:border-gray-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <svg
          className={`w-4 h-4 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
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

      <div
        className={`absolute mt-2 w-full bg-white rounded-2xl shadow-lg border border-gray-300 z-10 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="text-sm text-gray-800">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelection(option)}
              className="px-4 py-2 cursor-pointer rounded-sm text-center transition-all duration-300 ease-in-out hover:bg-yellow-200"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
