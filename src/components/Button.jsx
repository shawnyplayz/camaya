import React from "react";

const Button = ({ children, className = "", disabled, onClick }) => {
  return (
    <button
      className={`bg-[#FFC447] rounded-full py-3 px-12 font-workSansRegular font-normal text-xl text-[#221C42] hover:bg-[#FFB933] transition-all duration-200 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
