import React from "react";
import Ads from "../../readiComponents/Ads/Ads";
import Banner from "../../readiComponents/Banner/Banner";
import Customer from "../../readiComponents/Customer/Customer";
import Service from "../../readiComponents/Service/Service";

const index = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Customer />
      <Ads />
    </div>
  );
};

export default index;
