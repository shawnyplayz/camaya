import React from "react";

const Tabs = ({ isActive, children }) => {
  if (!isActive) return null;

  return <div>{children}</div>;
};

export default Tabs;
