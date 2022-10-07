import React from "react";
import Form from "../../components/Form/Form";
import Consultaion from "../../components/Portfolio-page/Consultaion";
import Contact from "../../components/Portfolio-page/Contact";
import Port from "../../components/Portfolio-page/Port";
import Project from "../../components/ServicePage/Project";
import Slider from "../../components/slider/Slider";
import Testinomial from "../../components/testinomial/Testinomial";

const index = () => {
  return (
    <div>
      <Port />
      <Project />
      <Slider sliderName={"Our Clients"} />
      <Consultaion />
      <Testinomial />
      <Contact />
      <Form />
    </div>
  );
};

export default index;
