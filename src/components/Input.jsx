import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full pl-7 py-6 rounded-xl border-2 mb-8 focus:outline-none focus:ring-2 focus:ring-[#221C42]"
    />
  );
};

export default Input;
