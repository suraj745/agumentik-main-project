import React from "react";
import About from "../components/about_us/About";
import Banner from "../components/banner/Banner";
import Boosting from "../components/boosting/Boosting";
import Inquiry from "../components/inquiry/Inquiry";
import Service from "../components/service/Service";
import ServicesCard from "../components/service_card/ServicesCard";
import Slider from "../components/slider/Slider";
import Testinomial from "../components/testinomial/Testinomial";
import Blog from "../components/blog/Blog";
import Ads from "../components/ads/Ads";
import Footer from "../components/footer/Footer";
const index = () => {
  return (
    <section>
      <Banner />
      <Service />
      <Slider sliderName={"Our Partners"} />
      <About />
      <Slider sliderName={"Our Awards"} />
      <ServicesCard />
      <Slider sliderName={"Our Clients"} />
      <Inquiry />
      <Boosting />
      <Testinomial />
      <Blog title={"Blog"} heading={"Read Our Latest Project"} />
      <Ads />
    </section>
  );
};

export default index;
