"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#004568] flex justify-between items-center px-14 py-5 text-white font-workSansMedium font-medium">
      {/* Logo Section */}
      <div className="logo flex-shrink-0">
        <Image src="/assets/logo.svg" width={72} height={72} alt="Logo" />
      </div>

      {/* Navbar Links */}
      <div className="navbar">
        <ul className="hidden lg:flex gap-12 text-white font-workSansMedium font-medium text-lg items-center ml-20">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link href="/properties">PROPERTIES</Link>
          </li>
          <li>
            <Link href="/amenities">AMENITIES</Link>
          </li>
          <li>
            <Link href="/contact-us">CONTACT US</Link>
          </li>
        </ul>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <IoMdMenu size={28} />
        </button>
      </div>

      {/* Contact and Social Media Section */}
      <div className="hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/Navbar/call.svg"
            width={20}
            height={20}
            alt="Call Icon"
          />
          <p className="text-white font-workSansMedium text-lg font-medium">
            +63 926 053 2470
          </p>
        </div>
        <div className="social-media-icon flex items-center gap-5">
          <Image
            src="/assets/Navbar/facebook.svg"
            width={24}
            height={24}
            alt="Facebook Icon"
          />
          <Image
            src="/assets/Navbar/instagram.svg"
            width={24}
            height={24}
            alt="Instagram Icon"
          />
          <Image
            src="/assets/Navbar/x.svg"
            width={24}
            height={24}
            alt="X (Twitter) Icon"
          />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-50 flex transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Background */}
        <div className="flex-1" onClick={() => setMenuOpen(false)}></div>

        {/* Sidebar Content */}
        <div className="w-64 bg-white h-full flex flex-col shadow-lg">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="font-semibold text-lg text-[#004568]">Menu</span>
            <button
              className="text-gray-500"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <IoClose size={28} />
            </button>
          </div>

          {/* Sidebar Links */}
          <ul className="flex flex-col gap-4 mt-6 px-4 text-gray-800">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => setMenuOpen(false)}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/properties" onClick={() => setMenuOpen(false)}>
                PROPERTIES
              </Link>
            </li>
            <li>
              <Link href="/amenities" onClick={() => setMenuOpen(false)}>
                AMENITIES
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;