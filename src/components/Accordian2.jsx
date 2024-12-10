"use client";

import React from "react";
import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";

const Accordian2 = ({ title }) => {
  const TABLE_HEAD = [
    "Payment Option",
    "Spot Cash",
    "50% Spot DP",
    "30% Spot DP",
    "20% Spot DP",
    "10% Spot DP",
    "10% 3 Split DP",
  ];

  const TABLE_ROWS = [
    {
      paymentOption: "Total Selling Price",
      spotCash: "₱2,600,000.00",
      fiftypercentDP: "₱2,600,000.00",
      thirtypercentDP: "₱2,600,000.00",
      twentySpotDP: "₱2,600,000.00",
      tenSpotDP: "₱2,600,000.00",
      tenpercentSpotDP: "₱2,600,000.00",
    },
    {
      paymentOption: "Discount",
      spotCash: "29%",
      fiftypercentDP: "22%",
      thirtypercentDP: "20%",
      twentySpotDP: "14.5%",
      tenSpotDP: "11.5%",
      tenpercentSpotDP: "9%",
    },
    {
      paymentOption: "Total Discount",
      spotCash: "₱754,000.00",
      fiftypercentDP: "₱572,000.00",
      thirtypercentDP: "₱520,000.00",
      twentySpotDP: "₱377,000.00",
      tenSpotDP: "₱299,000.00",
      tenpercentSpotDP: "₱234,000.00",
    },
    {
      paymentOption: "Net Price w/o VAT",
      spotCash: "₱1,846,000.00",
      fiftypercentDP: "₱2,028,000.00",
      thirtypercentDP: "₱2,080,000.00",
      twentySpotDP: "₱2,223,000.00",
      tenSpotDP: "₱2,301,000.00",
      tenpercentSpotDP: "₱2,366,000.00",
    },
    {
      paymentOption: "Add: 12% VAT",
      spotCash: "₱221,520.00",
      fiftypercentDP: "₱243,360.00",
      thirtypercentDP: "₱249,600.00",
      twentySpotDP: "₱266,760.00",
      tenSpotDP: "₱276,120.00",
      tenpercentSpotDP: "₱283,920.00",
    },
    {
      paymentOption: "Net Selling Price",
      spotCash: "₱2,067,520.00",
      fiftypercentDP: "₱2,271,360.00",
      thirtypercentDP: "₱2,329,600.00",
      twentySpotDP: "₱2,489,760.00",
      tenSpotDP: "₱2,577,120.00",
      tenpercentSpotDP: "₱2,649,920.00",
    },
    {
      paymentOption: "Downpayment",
      spotCash: "N/A",
      fiftypercentDP: "₱1,135,680.00",
      thirtypercentDP: "₱698,880.00",
      twentySpotDP: "₱497,952.00",
      tenSpotDP: "₱257,712.00",
      tenpercentSpotDP: "₱244,992.00",
    },
    {
      paymentOption: "Reservation Fee",
      spotCash: "₱20,000.00",
      fiftypercentDP: "₱20,000.00",
      thirtypercentDP: "₱20,000.00",
      twentySpotDP: "₱20,000.00",
      tenSpotDP: "₱20,000.00",
      tenpercentSpotDP: "₱20,000.00",
    },
    {
      paymentOption: "Net Downpayment",
      spotCash: "N/A",
      fiftypercentDP: "₱1,115,680.00",
      thirtypercentDP: "₱678,880.00",
      twentySpotDP: "₱477,952.00",
      tenSpotDP: "₱237,712.00",
      tenpercentSpotDP: "₱244,992.00",
    },
    {
      paymentOption: "Balance",
      spotCash: "₱1,944,144.00",
      fiftypercentDP: "₱1,135,680.00",
      thirtypercentDP: "₱1,630,720.00",
      twentySpotDP: "₱1,991,808.00",
      tenSpotDP: "₱2,319,408.00",
      tenpercentSpotDP: "₱2,384,928.00",
    },
    {
      paymentOption: "5% Retention",
      spotCash: "₱103,376.00",
      fiftypercentDP: "N/A",
      thirtypercentDP: "N/A",
      twentySpotDP: "N/A",
      tenSpotDP: "N/A",
      tenpercentSpotDP: "N/A",
    },
    {
      paymentOption: "5 Years @ 7% Int.",
      spotCash: "₱22,487.83/m",
      fiftypercentDP: "₱22,487.83/m",
      thirtypercentDP: "₱32,290.21/m",
      twentySpotDP: "₱22,487.83/m",
      tenSpotDP: "₱45,927.06/m",
      tenpercentSpotDP: "₱47,224.44/m",
    },
    {
      paymentOption: "10 Years @ 7% Int.",
      spotCash: "₱13,186.15/m",
      fiftypercentDP: "₱13,186.15/m",
      thirtypercentDP: "₱18,933.96/m",
      twentySpotDP: "₱13,186.15/m",
      tenSpotDP: "₱23,126.48/m",
      tenpercentSpotDP: "₱23,742.36/m",
    },
    {
      paymentOption: "20 Years @ 7% Int.",
      spotCash: "₱8,804.91/m",
      fiftypercentDP: "₱8,804.91/m",
      thirtypercentDP: "₱12,642.95/m",
      twentySpotDP: "₱8,804.91/m",
      tenSpotDP: "₱17,982.34/m",
      tenpercentSpotDP: "₱18,490.32/m",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="border-b border-[1.83px] rounded-2xl m-4"
      style={{
        borderRadius: "7px",
      }}
    >
      <button
        onClick={handleToggle}
        className="flex justify-between items-center w-full py-4 px-4 text-left"
      >
        <span className="font-semibold text-md md:text-lg">{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>

      {/* Collapsible section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out  ${
          isOpen
            ? "max-h-[1000px] opacity-100 px-10 py-10 bg-[#FFF4E8]"
            : "max-h-0 opacity-0"
        }`}
      >
        <Card className="h-full w-full mt-4 border-[2.83px] rounded-none border-[#FFBA68] ">
          <table className="w-full table-auto text-left">
            <thead className="">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-[1.83px] border-[#FFBA68] bg-[#FFD099] p-4"
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
              {TABLE_ROWS.map(
                (
                  {
                    paymentOption,
                    spotCash,
                    fiftypercentDP,
                    thirtypercentDP,
                    twentySpotDP,
                    tenSpotDP,
                    tenpercentSpotDP,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4 border-b border-[1.83px] border-[#FFBA68]"
                    : "p-4 border-b border-[1.83px] border-[#FFBA68]";

                  return (
                    <tr key={`${paymentOption}-${index}`}>
                      <td className={`${classes} text-[#7C7C7C]`}>
                        <Typography
                          variant="small"
                          color="#7C7C7C"
                          className="font-semibold"
                        >
                          {paymentOption}
                        </Typography>
                      </td>
                      <td className={`${classes} text-[#7C7C7C]`}>
                        <Typography
                          variant="small"
                          color="#7C7C7C"
                          className="font-semibold"
                        >
                          {spotCash}
                        </Typography>
                      </td>
                      <td className={`${classes} text-[#7C7C7C]`}>
                        <Typography
                          variant="small"
                          color="#7C7C7C"
                          className="font-semibold"
                        >
                          {fiftypercentDP}
                        </Typography>
                      </td>
                      <td className={`${classes} text-[#7C7C7C]`}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="#7C7C7C"
                          className="font-medium"
                        >
                          {thirtypercentDP}
                        </Typography>
                      </td>
                      <td className={`${classes} text-[#7C7C7C]`}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="#7C7C7C"
                          className="font-medium"
                        >
                          {twentySpotDP}
                        </Typography>
                      </td>
                      <td className={`${classes} text-[#7C7C7C]`}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="#7C7C7C"
                          className="font-medium"
                        >
                          {tenSpotDP}
                        </Typography>
                      </td>
                      <td className={`${classes} text-[#7C7C7C]`}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="#7C7C7C"
                          className="font-medium"
                        >
                          {tenpercentSpotDP}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Accordian2;
