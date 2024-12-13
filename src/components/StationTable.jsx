"use client";

import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const StationTable = ({ title }) => {
  const TABLE_HEAD = [
    "Station",
    "Property",
    "Regular Price",
    "Premium/Corner Price",
    "Fairway Price",
    "Other Notes",
  ];

  const STATION_DATA = [
    {
      station: "/assets/home/icons/one_image_3rd_table.png",
      properties: [
        {
          name: "Tandatangan Golf Residences (P1-3)",
          regularPrice: "₱29,000",
          premiumPrice: "₱30,500",
          fairwayPrice: "₱32,000",
          notes: "-",
        },
        {
          name: "Tandatangan Golf Residences (P4)",
          regularPrice: "₱29,000",
          premiumPrice: "₱30,500",
          fairwayPrice: "₱32,000",
          notes: "-",
        },
        {
          name: "Bayu Peaks",
          regularPrice: "₱24,500",
          premiumPrice: "₱24,500",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Menera Point",
          regularPrice: "₱24,500",
          premiumPrice: "₱24,500",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Kencana Hills",
          regularPrice: "₱24,500",
          premiumPrice: "₱24,500",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Plana Heights",
          regularPrice: "₱24,500",
          premiumPrice: "₱24,500",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Golf Town Camaya",
          regularPrice: "₱50,000",
          premiumPrice: "₱55,000",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Premium & Premium Corner",
          regularPrice: "₱5,750,000",
          premiumPrice: "₱9,750,000",
          fairwayPrice: "-",
          notes: "Premium & Premium Corner",
        },
        {
          name: "Golf Villas B1",
          regularPrice: "₱5,500,000",
          premiumPrice: "₱10,500,000",
          fairwayPrice: "₱15,750,000",
          notes: "Studio & 2BR",
        },
        {
          name: "Golf Villas B2 & B3 / Aqua Fun Village",
          regularPrice: "₱5,500,000",
          premiumPrice: "₱10,500,000",
          fairwayPrice: "₱15,750,000",
          notes: "Studio, 2BR, & 3BR",
        },
      ],
    },
    {
      station: "/assets/home/icons/two_image_3rd_table.png",
      properties: [
        {
          name: "Golf Town Camaya",
          regularPrice: "₱50,000",
          premiumPrice: "₱50,000",
          fairwayPrice: "-",
          notes: "Premium & Premium Corner",
        },
        {
          name: "Taman Ridge",
          regularPrice: "₱24,000",
          premiumPrice: "₱25,500",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Quinawan Golf Residences",
          regularPrice: "₱24,000",
          premiumPrice: "₱25,500",
          fairwayPrice: "₱27,000",
          notes: "Regular, Premium/Corner, & Fairway",
        },
        {
          name: "Quinawan Golf Residences Terraces (P1-4)",
          regularPrice: "₱19,000",
          premiumPrice: "₱20,500",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Quinawan Golf Residences Terraces (P5)",
          regularPrice: "₱16,500",
          premiumPrice: "₱18,000",
          fairwayPrice: "-",
          notes: "-",
        },
        {
          name: "Camaya Sky",
          regularPrice: "₱20,500",
          premiumPrice: "₱22,000",
          fairwayPrice: "₱23,500",
          notes: "Regular, Premium/Corner, & Sky Golf",
        },
        {
          name: "Sky Summit",
          regularPrice: "₱17,500",
          premiumPrice: "₱19,000",
          fairwayPrice: "-",
          notes: "-",
        },
      ],
    },
    {
      station: "/assets/home/icons/three_image_3rd_table.png",
      properties: [
        {
          name: "Camaya Sky",
          regularPrice: "₱20,500",
          premiumPrice: "₱22,000",
          fairwayPrice: "₱23,500",
          notes: "-",
        },
        // Other properties...
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border-b border-[1.83px] rounded-2xl m-4"
      style={{ borderRadius: "7px" }}
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

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 px-4 py-6 md:px-10 md:py-10 bg-[#FFF4E8]"
            : "max-h-0 opacity-0"
        }`}
      >
        <Card className="h-full w-full mt-4 border-[2.83px] rounded-none border-[#FFBA68]">
          <div className="text-center border-[1.83px] border-[#FFBA68] p-4 bg-[#FFE6BE]">
            <Typography
              variant="small"
              className="text-xs md:text-lg font-bold text-[#574D4D] tracking-wider uppercase"
            >
              Price List
            </Typography>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-[1.83px] border-[#FFBA68] bg-[#FFD099] p-2 text-xs md:p-4 md:text-base"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold leading-none text-[#515151]"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {STATION_DATA.map(({ station, properties }, stationIndex) => (
                  <React.Fragment key={stationIndex}>
                    {properties.map((property, propertyIndex) => (
                      <tr key={propertyIndex}>
                        {propertyIndex === 0 && (
                          <td
                            rowSpan={properties.length}
                            className="p-2 md:p-4 border-b border-[1.83px] border-[#FFBA68] text-[#7C7C7C] relative"
                            style={{
                              backgroundSize: "contain",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          >
                            <img
                              style={{
                                maxWidth: "100%",
                                height: "auto",
                                display: "block",
                                margin: "auto",
                              }}
                              src={station}
                              alt="stations"
                            />
                          </td>
                        )}
                        <td className="p-2 md:p-4 border-b border-[1.83px] border-[#FFBA68] text-[#7C7C7C]">
                          {property.name}
                        </td>
                        <td className="p-2 md:p-4 border-b border-[1.83px] border-[#FFBA68] text-[#7C7C7C]">
                          {property.regularPrice}
                        </td>
                        <td className="p-2 md:p-4 border-b border-[1.83px] border-[#FFBA68] text-[#7C7C7C]">
                          {property.premiumPrice}
                        </td>
                        <td className="p-2 md:p-4 border-b border-[1.83px] border-[#FFBA68] text-[#7C7C7C]">
                          {property.fairwayPrice}
                        </td>
                        <td className="p-2 md:p-4 border-b border-[1.83px] border-[#FFBA68] text-[#7C7C7C]">
                          {property.notes}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StationTable;
