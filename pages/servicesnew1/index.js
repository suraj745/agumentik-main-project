import React from "react";
import AboutAds from "../../components/ads/AboutAds";
import Choose from "../../components/choose/Choose";
import ServicesCard from "../../components/service_card/ServicesCard";
import Slider from "../../components/slider/Slider";

const index = () => {
  return (
    <div>
      <AboutAds heading={"Services"} display={"none"} />
      <ServicesCard />
      <Choose />
      <AboutAds
        title={"Get Started Instantly!"}
        heading={"Get the only new update from this newsletter"}
      />
      <Slider sliderName={"Our Services"} />
    </div>
  );
};

export default index;
