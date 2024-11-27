import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "@/components/Navbar";
import AffiliatePartners from "./AffiliatePartners";
import AboutCamaya from "./AboutCamaya";
import DevelopmentPlan from "./DevelopmentPlan";
import GetInTouchSection from "./GetInTouchSection";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Amenities from "./Amenities";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AffiliatePartners />
      <AboutCamaya />
      <DevelopmentPlan />
      <Amenities/>
      <FrequentlyAskedQuestions />
      <GetInTouchSection />
    </div>
  );
};

export default Home;
