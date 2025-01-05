"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import AffiliatePartners from "./AffiliatePartners";
import AboutCamaya from "./AboutCamaya";

import DevelopmentPlan from "./DevelopmentPlan";
import GetInTouchSection from "./GetInTouchSection";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Amenities from "./Amenities";
import FeaturedProperties from "./FeaturedProperties";
import TestimonialsSection from "./TestimonialsSection";
import AboutCamayaMobile from "./AboutCamayaMobile";
import Video from "./Video";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = useSearchParams();
  const fontName = searchParams.get("font");
  const font_name_Hero = searchParams.get("font_name_Hero");
  const navTextColor = searchParams.get("navTextColor");
  const navIconsColor = searchParams.get("navIconsColor");
  const heroMainTextColor = searchParams.get("heroMainTextColor");
  const heroMainSecondaryTextColor = searchParams.get(
    "heroMainSecondaryTextColor"
  );
  const heroSubTextColor = searchParams.get("heroSubTextColor");
  const universalButtonColor = searchParams.get("universalButtonColor");
  const universalHeadingTextColor = searchParams.get(
    "universalHeadingTextColor"
  );
  const universalContentTextColor = searchParams.get(
    "universalContentTextColor"
  );

  useEffect(() => {
    // Handle dynamic styles
    if (fontName) {
      const existingLink = document.querySelector(`link[href*="${fontName}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
          / /g,
          "+"
        )}&display=swap`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
      document.documentElement.style.setProperty(
        "--dynamic-font-family",
        `'${fontName}', sans-serif`
      );
    }
    if (font_name_Hero) {
      const existingLink = document.querySelector(
        `link[href*="${font_name_Hero}"]`
      );
      if (!existingLink) {
        const link = document.createElement("link");
        link.href = `https://fonts.googleapis.com/css2?family=${font_name_Hero.replace(
          / /g,
          "+"
        )}&display=swap`;
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
      document.documentElement.style.setProperty(
        "--hero-font-family",
        `'${font_name_Hero}', sans-serif`
      );
    }
    // Handle other color parameters
    if (navTextColor)
      document.documentElement.style.setProperty(
        "--navTextColor",
        navTextColor
      );
    if (navIconsColor)
      document.documentElement.style.setProperty(
        "--navIconsColor",
        navIconsColor
      );
    if (heroMainTextColor)
      document.documentElement.style.setProperty(
        "--heroMainTextColor",
        heroMainTextColor
      );
    if (heroMainSecondaryTextColor)
      document.documentElement.style.setProperty(
        "--heroMainSecondaryTextColor",
        heroMainSecondaryTextColor
      );
    if (heroSubTextColor)
      document.documentElement.style.setProperty(
        "--heroSubTextColor",
        heroSubTextColor
      );
    if (universalButtonColor)
      document.documentElement.style.setProperty(
        "--universalButtonColor",
        universalButtonColor
      );
    if (universalHeadingTextColor)
      document.documentElement.style.setProperty(
        "--universalHeadingTextColor",
        universalHeadingTextColor
      );
    if (universalContentTextColor)
      document.documentElement.style.setProperty(
        "--universalContentTextColor",
        universalContentTextColor
      );
  }, [
    fontName,
    navTextColor,
    navIconsColor,
    heroMainTextColor,
    heroMainSecondaryTextColor,
    heroSubTextColor,
    universalButtonColor,
    universalHeadingTextColor,
    universalContentTextColor,
  ]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1336);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto">
      <Navbar />
      <HeroSection />
      {isMobile ? <AboutCamayaMobile /> : <AboutCamaya />}
      {/* <DevelopmentPlan /> */}
      <FeaturedProperties />
      <Amenities />
      {/* <TestimonialsSection /> */}
      <Video />
      <AffiliatePartners />
      <FrequentlyAskedQuestions />
      <GetInTouchSection />
    </div>
  );
};

export default Home;
