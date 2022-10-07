import React from "react";
import Explore from "../../components/About_Page/Explore";
import AboutAds from "../../components/ads/AboutAds";
import OurProducts from "../../components/Products/OurProducts";

const index = () => {
  return (
    <div>
      <OurProducts />
      <Explore />
      <AboutAds />
    </div>
  );
};

export default index;
