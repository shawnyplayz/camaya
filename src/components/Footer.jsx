import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlinePolicy, MdEditDocument } from "react-icons/md";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { SiViber } from "react-icons/si";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-[#FFE9BB]">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Logo and Intro Section */}
        <div className="flex flex-col pt-12 items-center lg:items-start">
          <Image
            src="/assets/logo-large.svg"
            width={164}
            height={164}
            alt="Camaya Coast Properties Logo"
            className="mb-6 lg:mb-0"
          />
          <p className="text-center lg:text-left max-w-2xl mt-3 font-workSansRegular text-base md:text-lg lg:text-lg font-normal text-[#1E1E1E]">
            At Camaya Coast Properties, we are dedicated to helping you find
            your dream home by the beach. Experience luxurious living, stunning
            amenities, and a vibrant community in the heart of paradise.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center lg:justify-end items-center gap-6 mt-8 lg:mt-4 text-white lg:mr-[15rem]">
          <Link href={"https://facebook.com"}>
            <SlSocialFacebook size={35} color="#1E1E1E" />
          </Link>
          <Link href={"https://instagram.com"}>
            <SlSocialInstagram size={35} color="#1E1E1E" />
          </Link>
          <Link href={"https://www.viber.com/en/"}>
            <SiViber size={35} color="#1E1E1E" />
          </Link>
        </div>

        {/* Navigation Links Section */}
        <nav className="mt-12">
          <ul className="flex flex-wrap lg:gap-[7rem] gap-5 justify-center lg:justify-center font-workSansMedium font-medium text-sm md:text-base lg:text-lg text-black">
            <li>
              <Link href="/home#home">Home</Link>
            </li>
            <li>
              <Link href="/home#AboutCamayaSection">About Us</Link>
            </li>
            <li>
              <Link href="/home#featuredPropertiesSection">Properties</Link>
            </li>
            <li>
              <Link href="/home#amenitiesSection">Amenities</Link>
            </li>
            <li>
              <Link href="/home#contactUsSection">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-b border-white my-8" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-0 text-black pb-8 text-sm md:text-base lg:text-lg font-workSansMedium font-medium">
          <p className="text-center lg:text-left">
            © 2024 Camaya Coast Properties. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
            {/* Privacy Policy Link */}
            <div className="flex items-center gap-1">
              <GoDotFill color="#FFC447" />
              <p>Privacy Policy</p>
            </div>
            {/* Terms of Service Link */}
            <div className="flex items-center gap-1">
              <GoDotFill color="#FFC447" />
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
