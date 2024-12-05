import React, { useState } from "react";

const TabsContainer = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto space-x-4 mb-8 px-4 md:justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`whitespace-nowrap px-4 py-2 border-b-2 ${
              activeTab === index
                ? "border-[#FFC107] text-[#FFC107]"
                : "border-transparent text-[#646464]"
            } text-lg font-medium transition duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { isActive: activeTab === index })
      )}
    </div>
  );
};

export default TabsContainer;
