import React from "react";

const Input = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full pl-7 py-6 rounded-xl border-2 mb-8 focus:outline-none focus:ring-2 focus:ring-[#221C42]"
    required
  />
);

export default Input;
