import React from "react";

import Navbar from "../Navbar/navbar";
import HeroSection from "../HeroSection";
import CardInformation from "../cardInformation/cardInformation";
import Footer from "../footer/footer";
import JoinTocommunity from "../joinTocommunity/joinTocommunity";
import NewsLetter from "../newLetter/newsLetter";
import Tools from "../Tools/Tools";
const Index = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardInformation />
      <Tools />
      <JoinTocommunity />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Index;
