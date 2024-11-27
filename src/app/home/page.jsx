import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import AffiliatePartners from "./AffiliatePartners";
import AboutCamaya from "./AboutCamaya";
import DevelopmentPlan from "./DevelopmentPlan";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AffiliatePartners />
      <AboutCamaya />
      <DevelopmentPlan />
    </div>
  );
};

export default Home;
