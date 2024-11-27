import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { MdOutlinePolicy, MdEditDocument } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#F2B228]">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Logo and Intro Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start pt-12 lg:pt-28">
          <Image
            src="/assets/logo-large.svg"
            width={164}
            height={164}
            alt="Camaya Coast Properties Logo"
            className="mb-6 lg:mb-0"
          />
          <p className="text-center lg:text-left max-w-lg lg:ml-12 font-workSansRegular text-base md:text-lg lg:text-xl font-normal text-white">
            At Camaya Coast Properties, we are dedicated to helping you find your dream home by the beach. 
            Experience luxurious living, stunning amenities, and a vibrant community in the heart of paradise.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center lg:justify-end items-center gap-6 mt-8 lg:mt-4 text-white">
          <FiFacebook size={30} />
          <FiInstagram size={30} />
          <FiTwitter size={30} />
        </div>

        {/* Navigation Links Section */}
        <nav className="mt-12">
          <ul className="flex flex-wrap gap-6 justify-center lg:justify-center font-workSansMedium font-medium text-sm md:text-base lg:text-xl text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Properties</Link>
            </li>
            <li>
              <Link href="/">Amenities</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-b border-white my-8" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0 text-white pb-8 text-sm md:text-base lg:text-xl font-workSansMedium font-medium">
          <p className="text-center lg:text-left">
            © 2024 Camaya Coast Properties. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
            {/* Privacy Policy Link */}
            <div className="flex items-center gap-1">
              <MdOutlinePolicy />
              <p>Privacy Policy</p>
            </div>
            {/* Terms of Service Link */}
            <div className="flex items-center gap-1">
              <MdEditDocument />
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
