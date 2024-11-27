import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import AffiliatePartners from "./AffiliatePartners";
import AboutCamaya from "./AboutCamaya";
import DevelopmentPlan from "./DevelopmentPlan";
import GetInTouchSection from "./GetInTouchSection";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AffiliatePartners />
      <AboutCamaya />
      <DevelopmentPlan />
      <FrequentlyAskedQuestions />
      <GetInTouchSection />
    </div>
  );
};

export default Home;
