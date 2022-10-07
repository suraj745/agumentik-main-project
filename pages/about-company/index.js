import React, { Component } from "react";
// import AboutUs from "../../components/About_Page/AboutUs";
// import AgGroup from "../../components/About_Page/AgGroup";
// import Explore from "../../components/About_Page/Explore";
import Team from "../../opentagComponents/Team/Team";
// import Vision from "../../components/About_Page/Vision";
// import AboutAds from "../../components/ads/AboutAds";
// import Slider from "../../components/slider/Slider";
// import BusinessInterst from "../../dribbleComponents/BusinessInterst";
// import Works from "../../dribbleComponents/Works";
import Home from "../../opentagComponents/Home/Home";
import WhyOpentag from "../../opentagComponents/WhyOpentag/WhyOpentag";
import Statistic from "../../opentagComponents/Statistic/Statistic";

export default class index extends Component {
  render() {
    return (
      <section>
        <Home />
        <Team />
        <WhyOpentag />
        <Statistic />
        {/* <AboutUs /> */}
        {/* <Mission /> */}
        {/* <Works />
        <BusinessInterst /> */}
        {/* <Vision />
        <AgGroup />
        <Team />
        <Slider sliderName={"Our Awards"} />
        <Explore />
        <Slider sliderName={"Our Partners"} />
        <AboutAds /> */}
      </section>
    );
  }
}
