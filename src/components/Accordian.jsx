"use client";

import { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";

const Accordion = ({ title }) => {
  const TABLE_HEAD = ["Mode", "Origin", "Route", "Travel Time (Approx.)"];

  const TABLE_ROWS = [
    {
      image: "/assets/home/icons/sea.svg",
      mode: "Sea",
      origin: "Manila",
      route: "MOA EST - Camaya Coast",
      time: "1 hr 30 mins",
    },
    {
      image: "/assets/home/icons/land.svg",
      mode: "Land",
      origin: "Ninoy Aquino Intl. Airport",
      route:
        "EDSA - NLEX - SCTEX (Dinalupihan Exit) - Roman Highway - Mariveles",
      time: "3 hrs 30 mins",
    },
    {
      image: "/assets/home/icons/land.svg",
      mode: "Land",
      origin: "San Fernando, Pampanga",
      route:
        "EDSA - NLEX - SCTEX (Dinalupihan Exit) - Roman Highway - Mariveles",
      time: "1 hr 30 mins",
    },
    {
      image: "/assets/home/icons/land.svg",
      mode: "Land",
      origin: "Clark Intl. Airport",
      route: "Clark - SCTEX (Dinalupihan Exit) - Roman Highway - Mariveles",
      time: "1 hr 20 mins",
    },
    {
      image: "/assets/home/icons/land.svg",
      mode: "Land",
      origin: "Subic",
      route: "SCTEX (Dinalupihan Exit) - Roman Highway - Mariveles",
      time: "1 hr 10 mins",
    },
    {
      image: "/assets/home/icons/air.svg",
      mode: "Air",
      origin: "Local & International (Future)",
      route: "Point of Origin - Camaya Coast Runway",
      time: "To be announced",
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
              {TABLE_ROWS.map(({ mode, origin, route, time, image }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4 border-b border-[1.83px] border-[#FFBA68]"
                  : "p-4 border-b border-[1.83px] border-[#FFBA68]";

                return (
                  <tr key={`${mode}-${index}`}>
                    <td className={`${classes} text-[#7C7C7C]`}>
                      <Typography
                        variant="small"
                        color="#7C7C7C"
                        className="font-semibold"
                      >
                        <span className="flex justify-center items-center gap-3">
                          <Image
                            src={image}
                            width={40}
                            height={40}
                            alt="image"
                          />
                          {mode}
                        </span>
                      </Typography>
                    </td>
                    <td className={`${classes} text-[#7C7C7C]`}>
                      <Typography
                        variant="small"
                        color="#7C7C7C"
                        className="font-semibold"
                      >
                        {origin}
                      </Typography>
                    </td>
                    <td className={`${classes} text-[#7C7C7C]`}>
                      <Typography
                        variant="small"
                        color="#7C7C7C"
                        className="font-semibold"
                      >
                        {route}
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
                        {time}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Accordion;
