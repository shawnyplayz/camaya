"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import AffiliatePartners from "./AffiliatePartners";
import AboutCamaya from "./AboutCamaya";
import AboutCamayaMobile from "./AboutCamayaMobile";
import FeaturedProperties from "./FeaturedProperties";
import Amenities from "./Amenities";
import Video from "./Video";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import GetInTouchSection from "./GetInTouchSection";
import { fetchDataGet } from "@/utils.js/fetchData";
import endpoints from "@/config/endpoints";

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

  const applySearchParamsStyles = () => {
    if (fontName) {
      loadFont(fontName, "--dynamic-font-family");
    }
    if (font_name_Hero) {
      loadFont(font_name_Hero, "--hero-font-family");
    }
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
  };

  const fetchAndApplyStyles = async () => {
    try {
      const response = await fetchDataGet(endpoints?.getFontColor);
      if (Array.isArray(response) && response.length > 0) {
        const data = response[0];
        const fontNameFromApi = data.font_name || fontName;

        if (fontNameFromApi) {
          loadFont(fontNameFromApi, "--dynamic-font-family");
        }

        document.documentElement.style.setProperty(
          "--navTextColor",
          data.navTextColor || navTextColor
        );
        document.documentElement.style.setProperty(
          "--navIconsColor",
          data.navIconsColor || navIconsColor
        );
        document.documentElement.style.setProperty(
          "--heroMainTextColor",
          data.heroMainTextColor || heroMainTextColor
        );
        document.documentElement.style.setProperty(
          "--heroMainSecondaryTextColor",
          data.heroMainSecondaryTextColor || heroMainSecondaryTextColor
        );
        document.documentElement.style.setProperty(
          "--heroSubTextColor",
          data.heroSubTextColor || heroSubTextColor
        );
        document.documentElement.style.setProperty(
          "--universalButtonColor",
          data.universalButtonColor || universalButtonColor
        );
        document.documentElement.style.setProperty(
          "--universalHeadingTextColor",
          data.universalHeadingTextColor || universalHeadingTextColor
        );
        document.documentElement.style.setProperty(
          "--universalContentTextColor",
          data.universalContentTextColor || universalContentTextColor
        );
      }
    } catch (error) {
      console.error("Error fetching styles from API:", error);
    }
  };

  const loadFont = (fontName, cssVariable) => {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${fontName.replace(
      / /g,
      "+"
    )}&display=swap`;
    if (!document.querySelector(`link[href="${fontUrl}"]`)) {
      const link = document.createElement("link");
      link.href = fontUrl;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    document.documentElement.style.setProperty(
      cssVariable,
      `'${fontName}', sans-serif`
    );
  };

  useEffect(() => {
    if (
      fontName ||
      navTextColor ||
      navIconsColor ||
      heroMainTextColor ||
      heroMainSecondaryTextColor ||
      heroSubTextColor ||
      universalButtonColor ||
      universalHeadingTextColor ||
      universalContentTextColor
    ) {
      // Apply styles from searchParams if present
      applySearchParamsStyles();
    } else {
      // Fetch and apply styles from API if no searchParams
      fetchAndApplyStyles();
    }
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
      <FeaturedProperties />
      <Amenities />
      <Video />
      <AffiliatePartners />
      <FrequentlyAskedQuestions />
      <GetInTouchSection />
    </div>
  );
};

export default Home;
