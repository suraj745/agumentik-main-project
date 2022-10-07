import React from "react";
import Blog from "../../components/blog/Blog";
import Inquiry from "../../components/inquiry/Inquiry";
import Faq from "../../components/ServicePage/Faq";
import Project from "../../components/ServicePage/Project";
import ServiceSwiper from "../../components/ServicePage/ServiceSwiper";
import WebDevleop from "../../components/ServicePage/WebDevleop";
import Slider from "../../components/slider/Slider";
import Testinomial from "../../components/testinomial/Testinomial";

const index = () => {
  return (
    <section>
      <WebDevleop />
      <ServiceSwiper />
      <Slider sliderName={"Certifications"} />
      <Faq />
      <Project />
      <Testinomial />
      <Inquiry />
      <Blog
        title={"Knowledge Base"}
        heading={"Want To Know More About Different Types Of Website"}
      />
    </section>
  );
};

export default index;
