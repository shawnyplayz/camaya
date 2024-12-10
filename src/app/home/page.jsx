"use client";

import React, { useState, useEffect } from "react";
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
