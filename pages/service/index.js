import React from "react";
import Faq from "../../components/ServicePage/Faq";
import Project from "../../components/ServicePage/Project";
import ServiceSwiper from "../../components/ServicePage/ServiceSwiper";
import WebDevleop from "../../components/ServicePage/WebDevleop";
import Testinomial from "../../components/testinomial/Testinomial";
const index = () => {
  return (
    <section>
      <WebDevleop />
      <ServiceSwiper />
      <Faq />
      <Testinomial />
      <Project />
    </section>
  );
};

export default index;
