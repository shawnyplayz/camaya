"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  const handleNavigation = (event, href) => {
    event.preventDefault();

    const id = href.split("#")[1]; // Extract the section ID
    console.log("Navigating to ID:", id); // Debug log

    if (!id) {
      console.error("No ID found in href!");
      return;
    }

    const element = document.getElementById(id);
    console.log("Found element:", element); // Debug log

    if (element) {
      // Attempt to scroll into view smoothly
      element.scrollIntoView({ behavior: "smooth" });

      // Fallback: Force scrolling
      const yOffset = -80; // Adjust for navbar height
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    } else {
      console.error(`Element with ID '${id}' not found!`);
    }

    closeMenu(); // Close the menu

    // Clear the hash from the URL
    if (router.pathname) {
      router.replace(router.pathname, undefined, { shallow: true });
    }
  };

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#aboutus", label: "ABOUT US" },
    { href: "#featuredPropertiesSection", label: "PROPERTIES" },
    { href: "#amenitiesSection", label: "AMENITIES" },
    { href: "#contactUsSection", label: "CONTACT US" },
  ];

  return (
    <div className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-14">
        {/* Logo Section */}
        <div className="logo flex-shrink-0">
          <Image src="/assets/logo.svg" width={150} height={150} alt="Logo" />
        </div>

        {/* Navbar Links */}
        <div className="navbar">
          <ul className="hidden lg:flex gap-8 text-black font-workSansMedium font-medium text-lg items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden items-center flex"
            onClick={handleMenuToggle}
            aria-label="Open Menu"
          >
            <IoMdMenu size={28} />
          </button>
        </div>

        {/* Contact and Social Media Section */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="social-media-icon flex items-center gap-5 text-black">
            <Link href="https://www.facebook.com/camayaresort">
              <Image
                src="/assets/Navbar/facebook.svg"
                width={15}
                height={15}
                alt="Facebook Icon"
              />
            </Link>
            <Link href="https://www.instagram.com/camaya_prestige">
              <Image
                src="/assets/Navbar/instagram.svg"
                width={24}
                height={24}
                alt="Instagram Icon"
              />
            </Link>
            <Link href="viber://chat?number=+639455666565">
              <Image
                src="/assets/Navbar/x.svg"
                width={24}
                height={24}
                alt="X (Twitter) Icon"
              />
            </Link>
          </div>
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed inset-0 z-50 flex transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Background */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>

          {/* Sidebar Content */}
          <div className="w-64 bg-white h-full flex flex-col shadow-lg">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <Image
                src={"/assets/logo-large.svg"}
                width={50}
                height={50}
                alt="Logo"
              />
              <button
                className="text-gray-500"
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <IoClose size={28} />
              </button>
            </div>

            {/* Sidebar Links */}
            <ul className="flex flex-col gap-4 mt-6 px-4 text-gray-800">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
