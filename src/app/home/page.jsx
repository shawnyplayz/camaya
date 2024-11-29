import React from "react";
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

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AffiliatePartners />
      <AboutCamaya />
      <DevelopmentPlan />
      <FeaturedProperties />
      <Amenities />
      <TestimonialsSection />
      <FrequentlyAskedQuestions />
      <GetInTouchSection />
    </div>
  );
};

export default Home;
