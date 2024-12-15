"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { SiViber } from "react-icons/si";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (event, href) => {
    event.preventDefault();

    const id = href.split("#")[1]; // Extract section ID
    if (!id) return; // Exit if ID is undefined or null

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Clear the hash from the URL
    if (router.pathname) {
      router.replace(router.pathname, undefined, { shallow: true });
    }
  };

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
          <Link href={"https://www.facebook.com/camayaresort"}>
            <SlSocialFacebook size={35} color="#1E1E1E" />
          </Link>
          <Link href={"https://instagram.com/camaya_prestige"}>
            <SlSocialInstagram size={35} color="#1E1E1E" />
          </Link>
          <Link href="viber://chat?number=639260532470">
            <SiViber size={35} color="#1E1E1E" />
          </Link>
        </div>

        {/* Navigation Links Section */}
        <nav className="mt-12">
          <ul className="flex flex-wrap lg:gap-[7rem] gap-5 justify-center lg:justify-center font-workSansMedium font-medium text-sm md:text-base lg:text-lg text-black">
            <li>
              <a
                href="/home#home"
                onClick={(e) => handleNavigation(e, "#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                onClick={(e) => handleNavigation(e, "#aboutus")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#featuredPropertiesSection"
                onClick={(e) =>
                  handleNavigation(e, "#featuredPropertiesSection")
                }
              >
                Properties
              </a>
            </li>
            <li>
              <a
                href="#amenitiesSection"
                onClick={(e) => handleNavigation(e, "#amenitiesSection")}
              >
                Amenities
              </a>
            </li>
            <li>
              <a
                href="#contactUsSection"
                onClick={(e) => handleNavigation(e, "#contactUsSection")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Divider */}
        <div className="w-full border-b border-[#858282] my-8" />

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
