"use client";

import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const SkyTownForestPromo = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#FFDCA5] px-4 py-4">
        <Typography
          variant="h6"
          className="text-xs md:text-xs font-bold text-[#7C7C7C]"
        >
          PROJECT
        </Typography>
        <div className="border-t border-[#FFFFFF] w-1/4 mx-auto"></div>
        <Typography
          variant="h6"
          className="text-xs md:text-lg font-bold text-[#CF8834]"
        >
          SKY TOWN FOREST PROJECT
        </Typography>
        <div className="border-t border-[#FFFFFF] w-1/4 mx-auto"></div>
        <Typography
          variant="h6"
          className="text-xs md:text-xs font-bold text-[#7C7C7C]"
        >
          3 DAYS PROMO
        </Typography>
      </div>
      <div className="bg-[#FFF4E8] w-full mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 text-center">
          <div className="w-full">
            <Typography
              variant="small"
              className="text-xs md:text-sm font-medium text-[#515151]"
            >
              Lot area (sqm):
            </Typography>
            <Typography
              variant="h4"
              className="text-xl md:text-2xl font-bold text-[#F5A623]"
            >
              200
            </Typography>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="text-xs md:text-sm font-medium text-[#515151]"
            >
              Lot Price (per sqm):
            </Typography>
            <Typography
              variant="h4"
              className="text-xl md:text-2xl font-bold text-[#F5A623]"
            >
              ₱13,000.00
            </Typography>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="text-xs md:text-sm font-medium text-[#515151]"
            >
              Total Selling Price:
            </Typography>
            <Typography
              variant="h4"
              className="text-xl md:text-2xl font-bold text-[#F5A623]"
            >
              ₱2,600,000.00
            </Typography>
          </div>
        </div>
      </div>
      <div className="text-center border-[1.83px] border-[#FFBA68] p-4 bg-[#FFE6BE]">
        <Typography
          variant="small"
          className="text-xs md:text-lg font-bold text-[#574D4D] tracking-wider uppercase"
        >
          Sample Computation - Camaya Prestige Philippines & international
          Sales
        </Typography>
      </div>
    </>
  );
};

export default SkyTownForestPromo;
